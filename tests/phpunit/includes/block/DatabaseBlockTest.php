<?php

use MediaWiki\Block\BlockRestrictionStore;
use MediaWiki\Block\BlockUtils;
use MediaWiki\Block\DatabaseBlock;
use MediaWiki\Block\Restriction\NamespaceRestriction;
use MediaWiki\Block\Restriction\PageRestriction;
use MediaWiki\DAO\WikiAwareEntity;
use MediaWiki\MainConfigNames;
use MediaWiki\User\UserIdentity;
use MediaWiki\User\UserIdentityValue;
use MediaWiki\User\UserNameUtils;
use Wikimedia\IPUtils;
use Wikimedia\Rdbms\DBConnRef;
use Wikimedia\Rdbms\ILoadBalancer;
use Wikimedia\Rdbms\LBFactory;

/**
 * @group Database
 * @group Blocking
 * @coversDefaultClass \MediaWiki\Block\DatabaseBlock
 */
class DatabaseBlockTest extends MediaWikiLangTestCase {

	/**
	 * @return UserIdentity
	 */
	private function getUserForBlocking() {
		$testUser = $this->getMutableTestUser();
		$user = $testUser->getUser();
		$user->addToDatabase();
		TestUser::setPasswordForUser( $user, 'UTBlockeePassword' );
		$user->saveSettings();
		return $testUser->getUserIdentity();
	}

	/**
	 * @param UserIdentity $user
	 *
	 * @return DatabaseBlock
	 * @throws MWException
	 */
	private function addBlockForUser( UserIdentity $user ) {
		$blockStore = $this->getServiceContainer()->getDatabaseBlockStore();
		// Delete the last round's block if it's still there
		$oldBlock = DatabaseBlock::newFromTarget( $user );
		if ( $oldBlock ) {
			// An old block will prevent our new one from saving.
			$blockStore->deleteBlock( $oldBlock );
		}

		$blockOptions = [
			'address' => $user->getName(),
			'user' => $user->getId(),
			'by' => $this->getTestSysop()->getUser(),
			'reason' => 'Parce que',
			'expiry' => time() + 100500,
		];
		$block = new DatabaseBlock( $blockOptions );

		$blockStore->insertBlock( $block );
		// save up ID for use in assertion. Since ID is an autoincrement,
		// its value might change depending on the order the tests are run.
		// ApiBlockTest insert its own blocks!
		if ( !$block->getId() ) {
			throw new MWException( "Failed to insert block for BlockTest; old leftover block remaining?" );
		}

		$this->addXffBlocks();

		return $block;
	}

	/**
	 * @covers ::newFromTarget
	 */
	public function testINewFromTargetReturnsCorrectBlock() {
		$user = $this->getUserForBlocking();
		$block = $this->addBlockForUser( $user );

		$this->assertTrue(
			$block->equals( DatabaseBlock::newFromTarget( $user->getName() ) ),
			"newFromTarget() returns the same block as the one that was made"
		);
	}

	/**
	 * @covers ::newFromID
	 */
	public function testINewFromIDReturnsCorrectBlock() {
		$user = $this->getUserForBlocking();
		$block = $this->addBlockForUser( $user );

		$this->assertTrue(
			$block->equals( DatabaseBlock::newFromID( $block->getId() ) ),
			"newFromID() returns the same block as the one that was made"
		);
	}

	/**
	 * per T28425
	 * @covers ::__construct
	 */
	public function testT28425BlockTimestampDefaultsToTime() {
		$user = $this->getUserForBlocking();
		$block = $this->addBlockForUser( $user );
		$madeAt = wfTimestamp( TS_MW );

		// delta to stop one-off errors when things happen to go over a second mark.
		$delta = abs( $madeAt - $block->getTimestamp() );
		$this->assertLessThan(
			2,
			$delta,
			"If no timestamp is specified, the block is recorded as time()"
		);
	}

	/**
	 * CheckUser since being changed to use DatabaseBlock::newFromTarget started failing
	 * because the new function didn't accept empty strings like DatabaseBlock::load()
	 * had. Regression T31116.
	 *
	 * @dataProvider provideT31116Data
	 * @covers ::newFromTarget
	 */
	public function testT31116NewFromTargetWithEmptyIp( $vagueTarget ) {
		$user = $this->getUserForBlocking();
		$initialBlock = $this->addBlockForUser( $user );
		$block = DatabaseBlock::newFromTarget( $user->getName(), $vagueTarget );

		$this->assertTrue(
			$initialBlock->equals( $block ),
			"newFromTarget() returns the same block as the one that was made when "
				. "given empty vagueTarget param " . var_export( $vagueTarget, true )
		);
	}

	public static function provideT31116Data() {
		return [
			[ null ],
			[ '' ],
			[ false ]
		];
	}

	/**
	 * @dataProvider provideNewFromTargetRangeBlocks
	 * @covers ::newFromTarget
	 */
	public function testNewFromTargetRangeBlocks( $targets, $ip, $expectedTarget ) {
		$blockStore = $this->getServiceContainer()->getDatabaseBlockStore();
		$blocker = $this->getTestSysop()->getUser();

		foreach ( $targets as $target ) {
			$block = new DatabaseBlock();
			$block->setTarget( $target );
			$block->setBlocker( $blocker );
			$blockStore->insertBlock( $block );
		}

		// Should find the block with the narrowest range
		$block = DatabaseBlock::newFromTarget( $this->getTestUser()->getUserIdentity(), $ip );
		$this->assertSame(
			$expectedTarget,
			$block->getTargetName()
		);

		foreach ( $targets as $target ) {
			$block = DatabaseBlock::newFromTarget( $target );
			$blockStore->deleteBlock( $block );
		}
	}

	public static function provideNewFromTargetRangeBlocks() {
		return [
			'Blocks to IPv4 ranges' => [
				[ '0.0.0.0/20', '0.0.0.0/30', '0.0.0.0/25' ],
				'0.0.0.0',
				'0.0.0.0/30'
			],
			'Blocks to IPv6 ranges' => [
				[ '0:0:0:0:0:0:0:0/20', '0:0:0:0:0:0:0:0/30', '0:0:0:0:0:0:0:0/25' ],
				'0:0:0:0:0:0:0:0',
				'0:0:0:0:0:0:0:0/30'
			],
			'Blocks to wide IPv4 range and IP' => [
				[ '0.0.0.0/16', '0.0.0.0' ],
				'0.0.0.0',
				'0.0.0.0'
			],
			'Blocks to narrow IPv4 range and IP' => [
				[ '0.0.0.0/31', '0.0.0.0' ],
				'0.0.0.0',
				'0.0.0.0'
			],
			'Blocks to wide IPv6 range and IP' => [
				[ '0:0:0:0:0:0:0:0/19', '0:0:0:0:0:0:0:0' ],
				'0:0:0:0:0:0:0:0',
				'0:0:0:0:0:0:0:0'
			],
			'Blocks to narrow IPv6 range and IP' => [
				[ '0:0:0:0:0:0:0:0/127', '0:0:0:0:0:0:0:0' ],
				'0:0:0:0:0:0:0:0',
				'0:0:0:0:0:0:0:0'
			],
			'Blocks to wide IPv6 range and IP, large numbers' => [
				[ '2000:DEAD:BEEF:A:0:0:0:0/19', '2000:DEAD:BEEF:A:0:0:0:0' ],
				'2000:DEAD:BEEF:A:0:0:0:0',
				'2000:DEAD:BEEF:A:0:0:0:0'
			],
			'Blocks to narrow IPv6 range and IP, large numbers' => [
				[ '2000:DEAD:BEEF:A:0:0:0:0/127', '2000:DEAD:BEEF:A:0:0:0:0' ],
				'2000:DEAD:BEEF:A:0:0:0:0',
				'2000:DEAD:BEEF:A:0:0:0:0'
			],
		];
	}

	/**
	 * @covers ::appliesToRight
	 */
	public function testBlockedUserCanNotCreateAccount() {
		$username = 'BlockedUserToCreateAccountWith';
		$u = User::newFromName( $username );
		$u->addToDatabase();
		$userId = $u->getId();
		$this->assertNotEquals( 0, $userId, 'Check user id is not 0' );
		TestUser::setPasswordForUser( $u, 'NotRandomPass' );
		unset( $u );

		$this->assertNull(
			DatabaseBlock::newFromTarget( $username ),
			"$username should not be blocked"
		);

		// Reload user
		$u = User::newFromName( $username );
		$this->assertFalse(
			$u->isBlockedFromCreateAccount(),
			"Our sandbox user should be able to create account before being blocked"
		);

		// Foreign perspective (blockee not on current wiki)...
		$blockOptions = [
			'address' => $username,
			'user' => $userId,
			'reason' => 'crosswiki block...',
			'timestamp' => wfTimestampNow(),
			'expiry' => $this->db->getInfinity(),
			'createAccount' => true,
			'enableAutoblock' => true,
			'hideName' => true,
			'blockEmail' => true,
			'by' => UserIdentityValue::newExternal( 'm', 'MetaWikiUser' ),
		];
		$block = new DatabaseBlock( $blockOptions );
		$this->getServiceContainer()->getDatabaseBlockStore()->insertBlock( $block );

		// Reload block from DB
		$userBlock = DatabaseBlock::newFromTarget( $username );
		$this->assertTrue(
			(bool)$block->appliesToRight( 'createaccount' ),
			"Block object in DB should block right 'createaccount'"
		);

		$this->assertInstanceOf(
			DatabaseBlock::class,
			$userBlock,
			"'$username' block block object should be existent"
		);

		// Reload user
		$u = User::newFromName( $username );
		$this->assertTrue(
			(bool)$u->isBlockedFromCreateAccount(),
			"Our sandbox user '$username' should NOT be able to create account"
		);
	}

	/**
	 * TODO: Move to DatabaseBlockStoreTest
	 *
	 * @covers ::insert
	 */
	public function testCrappyCrossWikiBlocks() {
		$this->filterDeprecated( '/Passing a \$database is no longer supported/' );
		$blockStore = $this->getServiceContainer()->getDatabaseBlockStore();
		// Delete the last round's block if it's still there
		$oldBlock = DatabaseBlock::newFromTarget( 'UserOnForeignWiki' );
		if ( $oldBlock ) {
			// An old block will prevent our new one from saving.
			$blockStore->deleteBlock( $oldBlock );
		}

		// Local perspective (blockee on current wiki)...
		$user = User::newFromName( 'UserOnForeignWiki' );
		$user->addToDatabase();
		$userId = $user->getId();
		$this->assertNotEquals( 0, $userId, 'Check user id is not 0' );

		// Foreign perspective (blockee not on current wiki)...
		$blockOptions = [
			'address' => 'UserOnForeignWiki',
			'user' => $user->getId(),
			'reason' => 'crosswiki block...',
			'timestamp' => wfTimestampNow(),
			'expiry' => $this->db->getInfinity(),
			'createAccount' => true,
			'enableAutoblock' => true,
			'hideName' => true,
			'blockEmail' => true,
			'by' => UserIdentityValue::newExternal( 'm', 'MetaWikiUser' ),
		];
		$block = new DatabaseBlock( $blockOptions );

		$res = $blockStore->insertBlock( $block, $this->db );
		$this->assertTrue( (bool)$res['id'], 'Block succeeded' );

		$user = null; // clear

		$block = DatabaseBlock::newFromID( $res['id'] );
		$this->assertEquals(
			'UserOnForeignWiki',
			$block->getTargetName(),
			'Correct blockee name'
		);
		$this->assertEquals(
			'UserOnForeignWiki',
			$block->getTargetUserIdentity()->getName(),
			'Correct blockee name'
		);
		$this->assertEquals( $userId, $block->getTargetUserIdentity()->getId(), 'Correct blockee id' );
		$this->assertEquals( $userId, $block->getTargetUserIdentity()->getId(), 'Correct blockee id' );
		$this->assertEquals( 'UserOnForeignWiki', $block->getTargetName(), 'Correct blockee name' );
		$this->assertTrue( $block->isBlocking( 'UserOnForeignWiki' ), 'Is blocking blockee' );
		$this->assertEquals( 'm>MetaWikiUser', $block->getBlocker()->getName(),
			'Correct blocker name' );
		$this->assertEquals( 'm>MetaWikiUser', $block->getByName(), 'Correct blocker name' );
		$this->assertSame( 0, $block->getBy(), 'Correct blocker id' );
	}

	protected function addXffBlocks() {
		static $inited = false;

		if ( $inited ) {
			return;
		}

		$inited = true;

		$blockList = [
			[ 'target' => '70.2.0.0/16',
				'type' => DatabaseBlock::TYPE_RANGE,
				'desc' => 'Range Hardblock',
				'ACDisable' => false,
				'isHardblock' => true,
				'isAutoBlocking' => false,
			],
			[ 'target' => '2001:4860:4001::/48',
				'type' => DatabaseBlock::TYPE_RANGE,
				'desc' => 'Range6 Hardblock',
				'ACDisable' => false,
				'isHardblock' => true,
				'isAutoBlocking' => false,
			],
			[ 'target' => '60.2.0.0/16',
				'type' => DatabaseBlock::TYPE_RANGE,
				'desc' => 'Range Softblock with AC Disabled',
				'ACDisable' => true,
				'isHardblock' => false,
				'isAutoBlocking' => false,
			],
			[ 'target' => '50.2.0.0/16',
				'type' => DatabaseBlock::TYPE_RANGE,
				'desc' => 'Range Softblock',
				'ACDisable' => false,
				'isHardblock' => false,
				'isAutoBlocking' => false,
			],
			[ 'target' => '50.1.1.1',
				'type' => DatabaseBlock::TYPE_IP,
				'desc' => 'Exact Softblock',
				'ACDisable' => false,
				'isHardblock' => false,
				'isAutoBlocking' => false,
			],
		];

		$blockStore = $this->getServiceContainer()->getDatabaseBlockStore();
		$blocker = $this->getTestUser()->getUser();
		foreach ( $blockList as $insBlock ) {
			$target = $insBlock['target'];

			if ( $insBlock['type'] === DatabaseBlock::TYPE_IP ) {
				$target = User::newFromName( IPUtils::sanitizeIP( $target ), false )->getName();
			} elseif ( $insBlock['type'] === DatabaseBlock::TYPE_RANGE ) {
				$target = IPUtils::sanitizeRange( $target );
			}

			$block = new DatabaseBlock();
			$block->setTarget( $target );
			$block->setBlocker( $blocker );
			$block->setReason( $insBlock['desc'] );
			$block->setExpiry( 'infinity' );
			$block->isCreateAccountBlocked( $insBlock['ACDisable'] );
			$block->isHardblock( $insBlock['isHardblock'] );
			$block->isAutoblocking( $insBlock['isAutoBlocking'] );
			$blockStore->insertBlock( $block );
		}
	}

	public static function providerXff() {
		return [
			[ 'xff' => '1.2.3.4, 70.2.1.1, 60.2.1.1, 2.3.4.5',
				'count' => 2,
				'result' => 'Range Hardblock'
			],
			[ 'xff' => '1.2.3.4, 50.2.1.1, 60.2.1.1, 2.3.4.5',
				'count' => 2,
				'result' => 'Range Softblock with AC Disabled'
			],
			[ 'xff' => '1.2.3.4, 70.2.1.1, 50.1.1.1, 2.3.4.5',
				'count' => 2,
				'result' => 'Exact Softblock'
			],
			[ 'xff' => '1.2.3.4, 70.2.1.1, 50.2.1.1, 50.1.1.1, 2.3.4.5',
				'count' => 3,
				'result' => 'Exact Softblock'
			],
			[ 'xff' => '1.2.3.4, 70.2.1.1, 50.2.1.1, 2.3.4.5',
				'count' => 2,
				'result' => 'Range Hardblock'
			],
			[ 'xff' => '1.2.3.4, 70.2.1.1, 60.2.1.1, 2.3.4.5',
				'count' => 2,
				'result' => 'Range Hardblock'
			],
			[ 'xff' => '50.2.1.1, 60.2.1.1, 2.3.4.5',
				'count' => 2,
				'result' => 'Range Softblock with AC Disabled'
			],
			[ 'xff' => '1.2.3.4, 50.1.1.1, 60.2.1.1, 2.3.4.5',
				'count' => 2,
				'result' => 'Exact Softblock'
			],
			[ 'xff' => '1.2.3.4, <$A_BUNCH-OF{INVALID}TEXT\>, 60.2.1.1, 2.3.4.5',
				'count' => 1,
				'result' => 'Range Softblock with AC Disabled'
			],
			[ 'xff' => '1.2.3.4, 50.2.1.1, 2001:4860:4001:802::1003, 2.3.4.5',
				'count' => 2,
				'result' => 'Range6 Hardblock'
			],
		];
	}

	/**
	 * @dataProvider providerXff
	 * @covers ::getBlocksForIPList
	 */
	public function testBlocksOnXff( $xff, $exCount, $exResult ) {
		$user = $this->getUserForBlocking();
		$this->addBlockForUser( $user );

		$list = array_map( 'trim', explode( ',', $xff ) );
		$xffblocks = DatabaseBlock::getBlocksForIPList( $list, true );
		$this->assertCount( $exCount, $xffblocks, 'Number of blocks for ' . $xff );
	}

	/**
	 * @covers ::newFromRow
	 */
	public function testNewFromRow() {
		$badActor = $this->getTestUser()->getUser();
		$sysop = $this->getTestSysop()->getUser();

		$block = new DatabaseBlock( [
			'address' => $badActor->getName(),
			'user' => $badActor->getId(),
			'by' => $sysop,
			'expiry' => 'infinity',
		] );
		$blockStore = $this->getServiceContainer()->getDatabaseBlockStore();
		$blockStore->insertBlock( $block );

		$blockQuery = DatabaseBlock::getQueryInfo();
		$row = $this->db->select(
			$blockQuery['tables'],
			$blockQuery['fields'],
			[
				'ipb_id' => $block->getId(),
			],
			__METHOD__,
			[],
			$blockQuery['joins']
		)->fetchObject();

		$block = DatabaseBlock::newFromRow( $row );
		$this->assertInstanceOf( DatabaseBlock::class, $block );
		$this->assertEquals( $block->getBy(), $sysop->getId() );
		$this->assertEquals( $block->getTargetName(), $badActor->getName() );
		$this->assertEquals( $block->getTargetName(), $badActor->getName() );
		$this->assertTrue( $block->isBlocking( $badActor ), 'Is blocking expected user' );
		$this->assertEquals( $block->getTargetUserIdentity()->getId(), $badActor->getId() );
		$blockStore->deleteBlock( $block );
	}

	/**
	 * @covers ::getTargetName()
	 * @covers ::getTargetUserIdentity()
	 * @covers ::isBlocking()
	 * @covers ::getBlocker()
	 * @covers ::getByName()
	 */
	public function testCrossWikiBlocking() {
		$this->overrideConfigValue( MainConfigNames::LocalDatabases, [ 'm' ] );
		$dbMock = $this->createMock( DBConnRef::class );
		$dbMock->method( 'decodeExpiry' )->willReturn( 'infinity' );
		$lbMock = $this->createMock( ILoadBalancer::class );
		$lbMock->method( 'getConnectionRef' )
			->with( DB_REPLICA, [], 'm' )
			->willReturn( $dbMock );
		$lbFactoryMock = $this->createMock( LBFactory::class );
		$lbFactoryMock
			->method( 'getMainLB' )
			->with( 'm' )
			->willReturn( $lbMock );
		$this->setService( 'DBLoadBalancerFactory', $lbFactoryMock );

		$target = UserIdentityValue::newExternal( 'm', 'UserOnForeignWiki', 'm' );

		$blockUtilsMock = $this->createMock( BlockUtils::class );
		$blockUtilsMock
			->method( 'parseBlockTarget' )
			->with( $target )
			->willReturn( [ $target, DatabaseBlock::TYPE_USER ] );
		$this->setService( 'BlockUtils', $blockUtilsMock );

		$blocker = UserIdentityValue::newExternal( 'm', 'MetaWikiUser', 'm' );

		$userNameUtilsMock = $this->createMock( UserNameUtils::class );
		$userNameUtilsMock
			->method( 'isUsable' )
			->with( $blocker->getName() )
			->willReturn( false );
		$this->setService( 'UserNameUtils', $userNameUtilsMock );

		$blockOptions = [
			'address' => $target,
			'wiki' => 'm',
			'reason' => 'testing crosswiki blocking',
			'timestamp' => wfTimestampNow(),
			'createAccount' => true,
			'enableAutoblock' => true,
			'hideName' => true,
			'blockEmail' => true,
			'by' => $blocker,
		];
		$block = new DatabaseBlock( $blockOptions );

		$this->assertEquals(
			'm>UserOnForeignWiki',
			$block->getTargetName(),
			'Correct blockee name'
		);
		$this->assertEquals(
			'm>UserOnForeignWiki',
			$block->getTargetUserIdentity()->getName(),
			'Correct blockee name'
		);
		$this->assertTrue( $block->isBlocking( 'm>UserOnForeignWiki' ), 'Is blocking blockee' );
		$this->assertEquals(
			'm>MetaWikiUser',
			$block->getBlocker()->getName(),
			'Correct blocker name'
		);
		$this->assertEquals( 'm>MetaWikiUser', $block->getByName(), 'Correct blocker name' );
	}

	/**
	 * @covers ::equals
	 */
	public function testEquals() {
		$block = new DatabaseBlock();

		$this->assertTrue( $block->equals( $block ) );

		$partial = new DatabaseBlock( [
			'sitewide' => false,
		] );
		$this->assertFalse( $block->equals( $partial ) );
	}

	/**
	 * @covers ::getWikiId
	 */
	public function testGetWikiId() {
		$this->overrideConfigValue( MainConfigNames::LocalDatabases, [ 'foo' ] );
		$dbMock = $this->createMock( DBConnRef::class );
		$dbMock->method( 'decodeExpiry' )->willReturn( 'infinity' );
		$lbMock = $this->createMock( ILoadBalancer::class );
		$lbMock->method( 'getConnectionRef' )->willReturn( $dbMock );
		$lbFactoryMock = $this->createMock( LBFactory::class );
		$lbFactoryMock->method( 'getMainLB' )->willReturn( $lbMock );
		$this->setService( 'DBLoadBalancerFactory', $lbFactoryMock );

		$block = new DatabaseBlock( [ 'wiki' => 'foo' ] );
		$this->assertSame( 'foo', $block->getWikiId() );

		$this->resetServices();

		$localBlock = new DatabaseBlock();
		$this->assertSame( WikiAwareEntity::LOCAL, $localBlock->getWikiId() );
	}

	/**
	 * @covers ::isSitewide
	 */
	public function testIsSitewide() {
		$block = new DatabaseBlock();
		$this->assertTrue( $block->isSitewide() );

		$block = new DatabaseBlock( [
			'sitewide' => true,
		] );
		$this->assertTrue( $block->isSitewide() );

		$block = new DatabaseBlock( [
			'sitewide' => false,
		] );
		$this->assertFalse( $block->isSitewide() );

		$block = new DatabaseBlock( [
			'sitewide' => false,
		] );
		$block->isSitewide( true );
		$this->assertTrue( $block->isSitewide() );
	}

	/**
	 * @covers ::getRestrictions
	 * @covers ::setRestrictions
	 */
	public function testRestrictions() {
		$block = new DatabaseBlock();
		$restrictions = [
			new PageRestriction( 0, 1 )
		];
		$block->setRestrictions( $restrictions );

		$this->assertSame( $restrictions, $block->getRestrictions() );
	}

	/**
	 * @covers ::getRestrictions
	 * @covers ::insert
	 */
	public function testRestrictionsFromDatabase() {
		$blockStore = $this->getServiceContainer()->getDatabaseBlockStore();
		$badActor = $this->getTestUser()->getUser();
		$sysop = $this->getTestSysop()->getUser();

		$block = new DatabaseBlock( [
			'address' => $badActor->getName(),
			'user' => $badActor->getId(),
			'by' => $sysop,
			'expiry' => 'infinity',
		] );
		$page = $this->getExistingTestPage( 'Foo' );
		$restriction = new PageRestriction( 0, $page->getId() );
		$block->setRestrictions( [ $restriction ] );
		$blockStore->insertBlock( $block );

		// Refresh the block from the database.
		$block = DatabaseBlock::newFromID( $block->getId() );
		$restrictions = $block->getRestrictions();
		$this->assertCount( 1, $restrictions );
		$this->assertTrue( $restriction->equals( $restrictions[0] ) );
		$blockStore->deleteBlock( $block );
	}

	/**
	 * TODO: Move to DatabaseBlockStoreTest
	 *
	 * @covers ::insert
	 */
	public function testInsertExistingBlock() {
		$blockStore = $this->getServiceContainer()->getDatabaseBlockStore();
		$badActor = $this->getTestUser()->getUser();
		$sysop = $this->getTestSysop()->getUser();

		$block = new DatabaseBlock( [
			'address' => $badActor->getName(),
			'user' => $badActor->getId(),
			'by' => $sysop,
			'expiry' => 'infinity',
		] );
		$page = $this->getExistingTestPage( 'Foo' );
		$restriction = new PageRestriction( 0, $page->getId() );
		$block->setRestrictions( [ $restriction ] );
		$blockStore->insertBlock( $block );

		// Insert the block again, which should result in a failure
		$result = $block->insert();

		$this->assertFalse( $result );

		// Ensure that there are no restrictions where the blockId is 0.
		$count = $this->db->selectRowCount(
			'ipblocks_restrictions',
			'*',
			[ 'ir_ipb_id' => 0 ],
			__METHOD__
		);
		$this->assertSame( 0, $count );

		$blockStore->deleteBlock( $block );
	}

	/**
	 * @covers ::appliesToTitle
	 */
	public function testAppliesToTitleReturnsTrueOnSitewideBlock() {
		$this->overrideConfigValue( MainConfigNames::BlockDisablesLogin, false );
		$user = $this->getTestUser()->getUser();
		$block = new DatabaseBlock( [
			'expiry' => wfTimestamp( TS_MW, wfTimestamp() + ( 40 * 60 * 60 ) ),
			'allowUsertalk' => true,
			'sitewide' => true
		] );

		$block->setTarget( new UserIdentityValue( $user->getId(), $user->getName() ) );
		$block->setBlocker( $this->getTestSysop()->getUser() );

		$blockStore = $this->getServiceContainer()->getDatabaseBlockStore();
		$blockStore->insertBlock( $block );

		$title = $this->getExistingTestPage( 'Foo' )->getTitle();

		$this->assertTrue( $block->appliesToTitle( $title ) );

		// appliesToTitle() ignores allowUsertalk
		$title = $user->getTalkPage();
		$this->assertTrue( $block->appliesToTitle( $title ) );

		$blockStore->deleteBlock( $block );
	}

	/**
	 * @covers ::appliesToTitle
	 */
	public function testAppliesToTitleOnPartialBlock() {
		$this->overrideConfigValue( MainConfigNames::BlockDisablesLogin, false );
		$user = $this->getTestUser()->getUser();
		$block = new DatabaseBlock( [
			'expiry' => wfTimestamp( TS_MW, wfTimestamp() + ( 40 * 60 * 60 ) ),
			'allowUsertalk' => true,
			'sitewide' => false
		] );

		$block->setTarget( $user );
		$block->setBlocker( $this->getTestSysop()->getUser() );

		$blockStore = $this->getServiceContainer()->getDatabaseBlockStore();
		$blockStore->insertBlock( $block );

		$pageFoo = $this->getExistingTestPage( 'Foo' );
		$pageBar = $this->getExistingTestPage( 'Bar' );
		$pageJohn = $this->getExistingTestPage( 'User:John' );

		$pageRestriction = new PageRestriction( $block->getId(), $pageFoo->getId() );
		$namespaceRestriction = new NamespaceRestriction( $block->getId(), NS_USER );
		$this->getBlockRestrictionStore()->insert( [ $pageRestriction, $namespaceRestriction ] );

		$this->assertTrue( $block->appliesToTitle( $pageFoo->getTitle() ) );
		$this->assertFalse( $block->appliesToTitle( $pageBar->getTitle() ) );
		$this->assertTrue( $block->appliesToTitle( $pageJohn->getTitle() ) );

		$blockStore->deleteBlock( $block );
	}

	/**
	 * @covers ::appliesToNamespace
	 * @covers ::appliesToPage
	 */
	public function testAppliesToReturnsTrueOnSitewideBlock() {
		$this->overrideConfigValue( MainConfigNames::BlockDisablesLogin, false );
		$user = $this->getTestUser()->getUser();
		$block = new DatabaseBlock( [
			'expiry' => wfTimestamp( TS_MW, wfTimestamp() + ( 40 * 60 * 60 ) ),
			'allowUsertalk' => true,
			'sitewide' => true
		] );

		$block->setTarget( $user );
		$block->setBlocker( $this->getTestSysop()->getUser() );

		$blockStore = $this->getServiceContainer()->getDatabaseBlockStore();
		$blockStore->insertBlock( $block );

		$title = $this->getExistingTestPage()->getTitle();

		$this->assertTrue( $block->appliesToPage( $title->getArticleID() ) );
		$this->assertTrue( $block->appliesToNamespace( NS_MAIN ) );
		$this->assertTrue( $block->appliesToNamespace( NS_USER_TALK ) );

		$blockStore->deleteBlock( $block );
	}

	/**
	 * @covers ::appliesToPage
	 */
	public function testAppliesToPageOnPartialPageBlock() {
		$this->overrideConfigValue( MainConfigNames::BlockDisablesLogin, false );
		$user = $this->getTestUser()->getUser();
		$block = new DatabaseBlock( [
			'expiry' => wfTimestamp( TS_MW, wfTimestamp() + ( 40 * 60 * 60 ) ),
			'allowUsertalk' => true,
			'sitewide' => false
		] );

		$block->setTarget( $user );
		$block->setBlocker( $this->getTestSysop()->getUser() );

		$blockStore = $this->getServiceContainer()->getDatabaseBlockStore();
		$blockStore->insertBlock( $block );

		$title = $this->getExistingTestPage()->getTitle();

		$pageRestriction = new PageRestriction(
			$block->getId(),
			$title->getArticleID()
		);
		$this->getBlockRestrictionStore()->insert( [ $pageRestriction ] );

		$this->assertTrue( $block->appliesToPage( $title->getArticleID() ) );

		$blockStore->deleteBlock( $block );
	}

	/**
	 * @covers ::appliesToNamespace
	 */
	public function testAppliesToNamespaceOnPartialNamespaceBlock() {
		$this->overrideConfigValue( MainConfigNames::BlockDisablesLogin, false );
		$user = $this->getTestUser()->getUser();
		$block = new DatabaseBlock( [
			'expiry' => wfTimestamp( TS_MW, wfTimestamp() + ( 40 * 60 * 60 ) ),
			'allowUsertalk' => true,
			'sitewide' => false
		] );

		$block->setTarget( $user );
		$block->setBlocker( $this->getTestSysop()->getUser() );

		$blockStore = $this->getServiceContainer()->getDatabaseBlockStore();
		$blockStore->insertBlock( $block );

		$namespaceRestriction = new NamespaceRestriction( $block->getId(), NS_MAIN );
		$this->getBlockRestrictionStore()->insert( [ $namespaceRestriction ] );

		$this->assertTrue( $block->appliesToNamespace( NS_MAIN ) );
		$this->assertFalse( $block->appliesToNamespace( NS_USER ) );

		$blockStore->deleteBlock( $block );
	}

	/**
	 * @covers ::appliesToRight
	 */
	public function testBlockAllowsPurge() {
		$this->overrideConfigValue( MainConfigNames::BlockDisablesLogin, false );
		$block = new DatabaseBlock();
		$this->assertFalse( $block->appliesToRight( 'purge' ) );
	}

	/**
	 * Get an instance of BlockRestrictionStore
	 *
	 * @return BlockRestrictionStore
	 */
	protected function getBlockRestrictionStore(): BlockRestrictionStore {
		return $this->getServiceContainer()->getBlockRestrictionStore();
	}
}
