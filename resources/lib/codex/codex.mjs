var ht = Object.defineProperty, vt = Object.defineProperties;
var bt = Object.getOwnPropertyDescriptors;
var ge = Object.getOwnPropertySymbols;
var qe = Object.prototype.hasOwnProperty, Fe = Object.prototype.propertyIsEnumerable;
var Oe = (e, t, n) => t in e ? ht(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ze = (e, t) => {
  for (var n in t || (t = {}))
    qe.call(t, n) && Oe(e, n, t[n]);
  if (ge)
    for (var n of ge(t))
      Fe.call(t, n) && Oe(e, n, t[n]);
  return e;
}, He = (e, t) => vt(e, bt(t));
var ye = (e, t) => {
  var n = {};
  for (var s in e)
    qe.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && ge)
    for (var s of ge(e))
      t.indexOf(s) < 0 && Fe.call(e, s) && (n[s] = e[s]);
  return n;
};
var ke = (e, t, n) => new Promise((s, a) => {
  var i = (o) => {
    try {
      u(n.next(o));
    } catch (r) {
      a(r);
    }
  }, l = (o) => {
    try {
      u(n.throw(o));
    } catch (r) {
      a(r);
    }
  }, u = (o) => o.done ? s(o.value) : Promise.resolve(o.value).then(i, l);
  u((n = n.apply(e, t)).next());
});
import { ref as f, onMounted as de, defineComponent as D, computed as p, openBlock as d, createElementBlock as m, normalizeClass as K, toDisplayString as H, createCommentVNode as C, Comment as gt, warn as yt, withKeys as Y, renderSlot as w, resolveComponent as k, Fragment as me, renderList as _e, createBlock as L, withCtx as E, createTextVNode as ne, createVNode as z, Transition as Be, normalizeStyle as re, resolveDynamicComponent as Xe, createElementVNode as h, getCurrentInstance as $t, toRef as G, withDirectives as ue, withModifiers as X, vModelCheckbox as Ye, onUnmounted as Ae, watch as ee, nextTick as be, mergeProps as J, vShow as $e, vModelDynamic as _t, useCssVars as Ve, vModelRadio as Ct, inject as je, provide as Ue, toRefs as It } from "vue";
function ae(e) {
  return (t) => typeof t == "string" && e.indexOf(t) !== -1;
}
const xe = "cdx", wt = [
  "default",
  "progressive",
  "destructive"
], kt = [
  "normal",
  "primary",
  "quiet"
], xt = [
  "x-small",
  "small",
  "medium"
], St = [
  "notice",
  "warning",
  "error",
  "success"
], et = ae(St), Mt = [
  "text",
  "search",
  "number",
  "email",
  "month",
  "password",
  "tel",
  "url",
  "week",
  "date",
  "datetime-local",
  "time"
], Ce = [
  "default",
  "error"
], Tt = 120, Bt = 500, fe = "cdx-menu-footer-item", tt = Symbol("CdxTabs"), nt = Symbol("CdxActiveTab"), At = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', Vt = '<path d="M12.43 14.34A5 5 0 0110 15a5 5 0 113.95-2L17 16.09V3a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 001.45-.63z"/><circle cx="10" cy="10" r="3"/>', Lt = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm5.66 14.24-1.41 1.41L10 11.41l-4.24 4.25-1.42-1.42L8.59 10 4.34 5.76l1.42-1.42L10 8.59l4.24-4.24 1.41 1.41L11.41 10z"/>', Kt = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', Et = '<path d="M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"/>', Dt = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', Nt = '<path d="M19 3H1v14h18zM3 14l3.5-4.5 2.5 3L12.5 8l4.5 6z"/><path d="M19 5H1V3h18zm0 12H1v-2h18z"/>', Rt = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7z"/>', Ot = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z"/>', qt = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', Ft = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', zt = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8z"/>', Ht = '<path d="M10 20a10 10 0 010-20 10 10 0 110 20Zm-2-5 9-8.5L15.5 5 8 12 4.5 8.5 3 10l5 5Z"/>', ot = At, jt = Vt, Ut = Lt, lt = Kt, at = Et, st = Dt, Wt = Nt, Pt = {
  langCodeMap: {
    ar: Rt
  },
  default: Ot
}, Qt = {
  ltr: qt,
  shouldFlip: !0
}, Gt = {
  ltr: Ft,
  shouldFlip: !0
}, Zt = zt, it = Ht;
function Jt(e, t, n) {
  if (typeof e == "string" || "path" in e)
    return e;
  if ("shouldFlip" in e)
    return e.ltr;
  if ("rtl" in e)
    return n === "rtl" ? e.rtl : e.ltr;
  const s = t in e.langCodeMap ? e.langCodeMap[t] : e.default;
  return typeof s == "string" || "path" in s ? s : s.ltr;
}
function Xt(e, t) {
  if (typeof e == "string")
    return !1;
  if ("langCodeMap" in e) {
    const n = t in e.langCodeMap ? e.langCodeMap[t] : e.default;
    if (typeof n == "string")
      return !1;
    e = n;
  }
  if ("shouldFlipExceptions" in e && Array.isArray(e.shouldFlipExceptions)) {
    const n = e.shouldFlipExceptions.indexOf(t);
    return n === void 0 || n === -1;
  }
  return "shouldFlip" in e ? e.shouldFlip : !1;
}
function ut(e) {
  const t = f(null);
  return de(() => {
    const n = window.getComputedStyle(e.value).direction;
    t.value = n === "ltr" || n === "rtl" ? n : null;
  }), t;
}
function Yt(e) {
  const t = f("");
  return de(() => {
    let n = e.value;
    for (; n && n.lang === ""; )
      n = n.parentElement;
    t.value = n ? n.lang : null;
  }), t;
}
const en = ae(xt), tn = D({
  name: "CdxIcon",
  props: {
    /** The SVG path or an object containing that path plus other data. */
    icon: {
      type: [String, Object],
      required: !0
    },
    /**
     * Accessible label for the icon. If not included, the icon will be hidden from screen
     * readers via `aria-hidden="true"`. Browsers also display this label as a tooltip when the
     * user hovers over the icon. Note that this label is not rendered as visible text next
     * to the icon.
     */
    iconLabel: {
      type: String,
      default: ""
    },
    /**
     * Explicitly set the language code to use for the icon. See
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang.
     * Defaults to the lang attribute of the nearest ancestor at mount time.
     */
    lang: {
      type: String,
      default: null
    },
    /**
     * Explicitly set the direction to use for the icon. See
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dir.
     * Defaults to the computed direction at mount time.
     */
    dir: {
      type: String,
      default: null
    },
    /**
     * Specify icon size by choosing one of several pre-defined size
     * options. See the type documentation for supported size options.
     * The `medium` size is used by default if no size prop is provided.
     */
    size: {
      type: String,
      default: "medium",
      validator: en
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = f(), s = ut(n), a = Yt(n), i = p(() => e.dir || s.value), l = p(() => e.lang || a.value), u = p(() => ({
      "cdx-icon--flipped": i.value === "rtl" && l.value !== null && Xt(e.icon, l.value),
      [`cdx-icon--${e.size}`]: !0
    })), o = p(
      () => Jt(e.icon, l.value || "", i.value || "ltr")
    ), r = p(() => typeof o.value == "string" ? o.value : ""), c = p(() => typeof o.value != "string" ? o.value.path : "");
    return {
      rootElement: n,
      rootClasses: u,
      iconSvg: r,
      iconPath: c,
      onClick: (g) => {
        t("click", g);
      }
    };
  }
});
const N = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of t)
    n[s] = a;
  return n;
}, nn = ["aria-hidden"], on = { key: 0 }, ln = ["innerHTML"], an = ["d"];
function sn(e, t, n, s, a, i) {
  return d(), m("span", {
    ref: "rootElement",
    class: K(["cdx-icon", e.rootClasses]),
    onClick: t[0] || (t[0] = (...l) => e.onClick && e.onClick(...l))
  }, [
    (d(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      "aria-hidden": e.iconLabel ? void 0 : !0
    }, [
      e.iconLabel ? (d(), m("title", on, H(e.iconLabel), 1)) : C("", !0),
      e.iconSvg ? (d(), m("g", {
        key: 1,
        innerHTML: e.iconSvg
      }, null, 8, ln)) : (d(), m("path", {
        key: 2,
        d: e.iconPath
      }, null, 8, an))
    ], 8, nn))
  ], 2);
}
const Z = /* @__PURE__ */ N(tn, [["render", sn]]), un = ae(wt), dn = ae(kt), rn = (e) => {
  !e["aria-label"] && !e["aria-hidden"] && yt(`icon-only buttons require one of the following attribute: aria-label or aria-hidden.
		See documentation on https://doc.wikimedia.org/codex/latest/components/button.html#default-icon-only`);
};
function Me(e) {
  const t = [];
  for (const n of e)
    typeof n == "string" && n.trim() !== "" ? t.push(n) : Array.isArray(n) ? t.push(...Me(n)) : typeof n == "object" && n && (// HTML tag
    typeof n.type == "string" || // Component
    typeof n.type == "object" ? t.push(n) : n.type !== gt && (typeof n.children == "string" && n.children.trim() !== "" ? t.push(n.children) : Array.isArray(n.children) && t.push(...Me(n.children))));
  return t;
}
const cn = (e, t) => {
  if (!e)
    return !1;
  const n = Me(e);
  if (n.length !== 1)
    return !1;
  const s = n[0], a = typeof s == "object" && typeof s.type == "object" && "name" in s.type && s.type.name === Z.name, i = typeof s == "object" && s.type === "svg";
  return a || i ? (rn(t), !0) : !1;
}, pn = D({
  name: "CdxButton",
  props: {
    /**
     * The kind of action that will be taken on click.
     *
     * @values 'default', 'progressive', 'destructive'
     */
    action: {
      type: String,
      default: "default",
      validator: un
    },
    /**
     * Visual prominence of the button.
     *
     * @values 'normal', 'primary', 'quiet'
     */
    weight: {
      type: String,
      default: "normal",
      validator: dn
    }
  },
  emits: ["click"],
  setup(e, { emit: t, slots: n, attrs: s }) {
    const a = f(!1);
    return {
      rootClasses: p(() => {
        var o;
        return {
          [`cdx-button--action-${e.action}`]: !0,
          [`cdx-button--weight-${e.weight}`]: !0,
          "cdx-button--framed": e.weight !== "quiet",
          "cdx-button--icon-only": cn((o = n.default) == null ? void 0 : o.call(n), s),
          "cdx-button--is-active": a.value
        };
      }),
      onClick: (o) => {
        t("click", o);
      },
      setActive: (o) => {
        a.value = o;
      }
    };
  }
});
function fn(e, t, n, s, a, i) {
  return d(), m("button", {
    class: K(["cdx-button", e.rootClasses]),
    onClick: t[0] || (t[0] = (...l) => e.onClick && e.onClick(...l)),
    onKeydown: t[1] || (t[1] = Y((l) => e.setActive(!0), ["space", "enter"])),
    onKeyup: t[2] || (t[2] = Y((l) => e.setActive(!1), ["space", "enter"]))
  }, [
    w(e.$slots, "default")
  ], 34);
}
const he = /* @__PURE__ */ N(pn, [["render", fn]]);
function dt(e) {
  return e.label === void 0 ? e.value : e.label === null ? "" : e.label;
}
const mn = D({
  name: "CdxButtonGroup",
  components: {
    CdxButton: he,
    CdxIcon: Z
  },
  props: {
    /**
     * Objects describing the buttons in the group. See the ButtonGroupItem type.
     */
    buttons: {
      type: Array,
      required: !0,
      validator: (e) => Array.isArray(e) && e.length >= 1
    },
    /**
     * Whether the entire group is disabled.
     *
     * If this is set to true, all buttons in the group are disabled. Buttons can also be
     * disabled individually by setting their `disabled` property to true.
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    /**
     * Emitted when a button is clicked
     *
     * @property {string | number} value The `value` property of the button that was clicked
     */
    "click"
  ],
  setup() {
    return {
      getButtonLabel: dt
    };
  }
});
const hn = { class: "cdx-button-group" };
function vn(e, t, n, s, a, i) {
  const l = k("cdx-icon"), u = k("cdx-button");
  return d(), m("div", hn, [
    (d(!0), m(me, null, _e(e.buttons, (o) => (d(), L(u, {
      key: o.value,
      disabled: o.disabled || e.disabled,
      "aria-label": o.ariaLabel,
      onClick: (r) => e.$emit("click", o.value)
    }, {
      default: E(() => [
        w(e.$slots, "default", { button: o }, () => [
          o.icon ? (d(), L(l, {
            key: 0,
            icon: o.icon
          }, null, 8, ["icon"])) : C("", !0),
          ne(" " + H(e.getButtonLabel(o)), 1)
        ])
      ]),
      _: 2
    }, 1032, ["disabled", "aria-label", "onClick"]))), 128))
  ]);
}
const Sl = /* @__PURE__ */ N(mn, [["render", vn]]), bn = D({
  name: "CdxThumbnail",
  components: { CdxIcon: Z },
  props: {
    /**
     * Thumbnail data.
     */
    thumbnail: {
      type: [Object, null],
      default: null
    },
    /**
     * Thumbnail placeholder icon.
     */
    placeholderIcon: {
      type: [String, Object],
      default: Wt
    }
  },
  setup: (e) => {
    const t = f(!1), n = f({}), s = (a) => {
      const i = a.replace(/([\\"\n])/g, "\\$1"), l = new Image();
      l.onload = () => {
        n.value = { backgroundImage: `url("${i}")` }, t.value = !0;
      }, l.onerror = () => {
        t.value = !1;
      }, l.src = i;
    };
    return de(() => {
      var a;
      (a = e.thumbnail) != null && a.url && s(e.thumbnail.url);
    }), {
      thumbnailStyle: n,
      thumbnailLoaded: t
    };
  }
});
const gn = { class: "cdx-thumbnail" }, yn = {
  key: 0,
  class: "cdx-thumbnail__placeholder"
};
function $n(e, t, n, s, a, i) {
  const l = k("cdx-icon");
  return d(), m("span", gn, [
    e.thumbnailLoaded ? C("", !0) : (d(), m("span", yn, [
      z(l, {
        icon: e.placeholderIcon,
        class: "cdx-thumbnail__placeholder__icon--vue"
      }, null, 8, ["icon"])
    ])),
    z(Be, { name: "cdx-thumbnail__image" }, {
      default: E(() => [
        e.thumbnailLoaded ? (d(), m("span", {
          key: 0,
          style: re(e.thumbnailStyle),
          class: "cdx-thumbnail__image"
        }, null, 4)) : C("", !0)
      ]),
      _: 1
    })
  ]);
}
const rt = /* @__PURE__ */ N(bn, [["render", $n]]), _n = D({
  name: "CdxCard",
  components: { CdxIcon: Z, CdxThumbnail: rt },
  props: {
    /**
     * If provided, the Card will be a link to this URL.
     */
    url: {
      type: String,
      default: ""
    },
    /**
     * Icon displayed at the start of the Card.
     */
    icon: {
      type: [String, Object],
      default: ""
    },
    /**
     * Thumbnail image data for the Card.
     */
    thumbnail: {
      type: [Object, null],
      default: null
    },
    /**
     * Option to force a thumbnail layout.
     *
     * When set to `true`, the Card will display a Thumbnail. If a `thumbnail` prop was also
     * provided, the thumbnail image will display. Otherwise, a placeholder icon will display.
     *
     * This is useful when displaying groups of Cards when some of the cards have thumbnail
     * images but some do not. `forceThumbnail` will provide a consistent layout for that group.
     *
     * Note that this prop is not needed to display a thumbnail image: if the `thumbnail` prop
     * is provided, it will display. This prop is only needed to enable the display of the
     * thumbnail placeholder icon when the `thumbnail` prop is not provided.
     */
    forceThumbnail: {
      type: Boolean,
      default: !1
    },
    /**
     * Optional custom icon for the placeholder shown when `forceThumbnail` is true but no
     * thumbnail is provided.
     *
     * Defaults to the default placeholder icon set in the Thumbnail component.
     */
    customPlaceholderIcon: {
      type: [String, Object],
      default: void 0
    }
  },
  setup(e) {
    const t = p(() => !!e.url), n = p(() => t.value ? "a" : "span"), s = p(() => t.value ? e.url : void 0);
    return {
      isLink: t,
      contentTag: n,
      cardLink: s
    };
  }
});
const Cn = { class: "cdx-card__text" }, In = { class: "cdx-card__text__title" }, wn = {
  key: 0,
  class: "cdx-card__text__description"
}, kn = {
  key: 1,
  class: "cdx-card__text__supporting-text"
};
function xn(e, t, n, s, a, i) {
  const l = k("cdx-thumbnail"), u = k("cdx-icon");
  return d(), L(Xe(e.contentTag), {
    href: e.cardLink,
    class: K(["cdx-card", {
      "cdx-card--is-link": e.isLink,
      // Include dynamic classes in the template so that $slots is reactive.
      "cdx-card--title-only": !e.$slots.description && !e.$slots["supporting-text"]
    }])
  }, {
    default: E(() => [
      e.thumbnail || e.forceThumbnail ? (d(), L(l, {
        key: 0,
        thumbnail: e.thumbnail,
        "placeholder-icon": e.customPlaceholderIcon,
        class: "cdx-card__thumbnail"
      }, null, 8, ["thumbnail", "placeholder-icon"])) : e.icon ? (d(), L(u, {
        key: 1,
        icon: e.icon,
        class: "cdx-card__icon"
      }, null, 8, ["icon"])) : C("", !0),
      h("span", Cn, [
        h("span", In, [
          w(e.$slots, "title")
        ]),
        e.$slots.description ? (d(), m("span", wn, [
          w(e.$slots, "description")
        ])) : C("", !0),
        e.$slots["supporting-text"] ? (d(), m("span", kn, [
          w(e.$slots, "supporting-text")
        ])) : C("", !0)
      ])
    ]),
    _: 3
  }, 8, ["href", "class"]);
}
const Ml = /* @__PURE__ */ N(_n, [["render", xn]]);
function se(e, t, n) {
  return p({
    get: () => e.value,
    set: (s) => (
      // If eventName is undefined, then 'update:modelValue' must be a valid EventName,
      // but TypeScript's type analysis isn't clever enough to realize that
      t(n || "update:modelValue", s)
    )
  });
}
let Se = 0;
function te(e) {
  const t = $t(), n = (t == null ? void 0 : t.props.id) || (t == null ? void 0 : t.attrs.id);
  return e ? `${xe}-${e}-${Se++}` : n ? `${xe}-${n}-${Se++}` : `${xe}-${Se++}`;
}
const Sn = D({
  name: "CdxCheckbox",
  props: {
    /**
     * Value of the checkbox or checkbox group.
     *
     * Provided by `v-model` binding in the parent component.
     */
    modelValue: {
      type: [Boolean, Array],
      default: !1
    },
    /**
     * HTML "value" attribute to assign to the input.
     *
     * Required for input groups.
     */
    inputValue: {
      type: [String, Number, Boolean],
      default: !1
    },
    /**
     * Whether the disabled attribute should be added to the input.
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the indeterminate visual state should be displayed.
     *
     * This is unrelated to the value provided by `v-model`, and the indeterminate visual state
     * will override the checked or unchecked visual state.
     */
    indeterminate: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the component should display inline.
     *
     * By default, `display: block` is set and a margin exists between
     * sibling components, for a stacked layout.
     */
    inline: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    /**
     * Emitted when modelValue changes.
     *
     * @property {boolean | string[] | number[]} modelValue The new model value
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = p(() => ({
      "cdx-checkbox--inline": e.inline
    })), s = f(), a = te("checkbox"), i = () => {
      s.value.click();
    }, l = se(G(e, "modelValue"), t);
    return {
      rootClasses: n,
      input: s,
      checkboxId: a,
      clickInput: i,
      wrappedModel: l
    };
  }
});
const Mn = ["id", "value", "disabled", ".indeterminate"], Tn = /* @__PURE__ */ h("span", { class: "cdx-checkbox__icon" }, null, -1), Bn = ["for"];
function An(e, t, n, s, a, i) {
  return d(), m("span", {
    class: K(["cdx-checkbox", e.rootClasses])
  }, [
    ue(h("input", {
      id: e.checkboxId,
      ref: "input",
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.wrappedModel = l),
      class: "cdx-checkbox__input",
      type: "checkbox",
      value: e.inputValue,
      disabled: e.disabled,
      ".indeterminate": e.indeterminate,
      onKeydown: t[1] || (t[1] = Y(X((...l) => e.clickInput && e.clickInput(...l), ["prevent"]), ["enter"]))
    }, null, 40, Mn), [
      [Ye, e.wrappedModel]
    ]),
    Tn,
    h("label", {
      class: "cdx-checkbox__label",
      for: e.checkboxId
    }, [
      w(e.$slots, "default")
    ], 8, Bn)
  ], 2);
}
const Tl = /* @__PURE__ */ N(Sn, [["render", An]]), Vn = {
  error: at,
  warning: ot,
  success: it
}, Ln = D({
  name: "CdxInfoChip",
  components: { CdxIcon: Z },
  props: {
    /**
     * Status type.
     *
     * @values 'notice', 'warning', 'error', 'success'
     */
    status: {
      type: String,
      default: "notice",
      validator: et
    },
    /**
     * Custom icon to use for "notice" chips. Chips with other status types
     * (warning, etc) do not allow custom icons and will ignore this option.
     */
    icon: {
      type: [String, Object],
      default: null
    }
  },
  setup(e) {
    const t = p(() => ({
      [`cdx-info-chip__icon--${e.status}`]: !0
    })), n = p(
      () => e.status === "notice" ? e.icon : Vn[e.status]
    );
    return {
      iconClass: t,
      computedIcon: n
    };
  }
});
const Kn = { class: "cdx-info-chip" }, En = { class: "cdx-info-chip--text" };
function Dn(e, t, n, s, a, i) {
  const l = k("cdx-icon");
  return d(), m("div", Kn, [
    e.computedIcon ? (d(), L(l, {
      key: 0,
      class: K(["cdx-info-chip__icon", e.iconClass]),
      icon: e.computedIcon
    }, null, 8, ["class", "icon"])) : C("", !0),
    h("span", En, [
      w(e.$slots, "default")
    ])
  ]);
}
const Bl = /* @__PURE__ */ N(Ln, [["render", Dn]]);
function ct(e) {
  return e.replace(/([\\{}()|.?*+\-^$[\]])/g, "\\$1");
}
const Nn = "[̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-᪾ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯]";
function pt(e, t) {
  if (!e)
    return [t, "", ""];
  const n = ct(e), s = new RegExp(
    // Per https://www.regular-expressions.info/unicode.html, "any code point that is not a
    // combining mark can be followed by any number of combining marks." See also the
    // discussion in https://phabricator.wikimedia.org/T35242.
    n + Nn + "*",
    "i"
  ).exec(t);
  if (!s || s.index === void 0)
    return [t, "", ""];
  const a = s.index, i = a + s[0].length, l = t.slice(a, i), u = t.slice(0, a), o = t.slice(i, t.length);
  return [u, l, o];
}
const Al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  regExpEscape: ct,
  splitStringAtMatch: pt
}, Symbol.toStringTag, { value: "Module" })), Rn = D({
  name: "CdxSearchResultTitle",
  props: {
    /**
     * Title text.
     */
    title: {
      type: String,
      required: !0
    },
    /**
     * The current search query.
     */
    searchQuery: {
      type: String,
      default: ""
    }
  },
  setup: (e) => ({
    titleChunks: p(() => pt(e.searchQuery, String(e.title)))
  })
});
const On = { class: "cdx-search-result-title" }, qn = { class: "cdx-search-result-title__match" };
function Fn(e, t, n, s, a, i) {
  return d(), m("span", On, [
    h("bdi", null, [
      ne(H(e.titleChunks[0]), 1),
      h("span", qn, H(e.titleChunks[1]), 1),
      ne(H(e.titleChunks[2]), 1)
    ])
  ]);
}
const zn = /* @__PURE__ */ N(Rn, [["render", Fn]]), Hn = D({
  name: "CdxMenuItem",
  components: { CdxIcon: Z, CdxThumbnail: rt, CdxSearchResultTitle: zn },
  props: {
    /**
     * ID for HTML `id` attribute.
     */
    id: {
      type: String,
      required: !0
    },
    /**
     * The value provided to the parent menu component when this menu item is selected.
     */
    value: {
      type: [String, Number],
      required: !0
    },
    /**
     * Whether the menu item is disabled.
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether this menu item is selected.
     */
    selected: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether this menu item is being pressed.
     */
    active: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether this menu item is visually highlighted due to hover or keyboard navigation.
     */
    highlighted: {
      type: Boolean,
      default: !1
    },
    /**
     * Label for the menu item. If this isn't provided, the value will be displayed instead.
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Text that matches current search query. Only used for search results and will be
     * displayed after the label.
     */
    match: {
      type: String,
      default: ""
    },
    /**
     * Text that supports the label. Supporting text will appear next to the label in a more
     * subtle color.
     */
    supportingText: {
      type: String,
      default: ""
    },
    /**
     * URL for the menu item. If provided, the content of the menu item will be wrapped in an
     * anchor tag.
     */
    url: {
      type: String,
      default: ""
    },
    /**
     * Icon for the menu item.
     */
    icon: {
      type: [String, Object],
      default: ""
    },
    /**
     * Whether a thumbnail (or a placeholder icon) should be displayed.
     */
    showThumbnail: {
      type: Boolean,
      default: !1
    },
    /**
     * Thumbnail for the menu item.
     */
    thumbnail: {
      type: [Object, null],
      default: null
    },
    /**
     * Description of the menu item.
     */
    description: {
      type: [String, null],
      default: ""
    },
    /**
     * The search query to be highlighted within the menu item's title.
     */
    searchQuery: {
      type: String,
      default: ""
    },
    /**
     * Whether to bold menu item labels.
     */
    boldLabel: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to hide description text overflow via an ellipsis.
     */
    hideDescriptionOverflow: {
      type: Boolean,
      default: !1
    },
    /**
     * Optional language codes for label, match, supporting text, and description.
     *
     * If included, that language code will be added as a `lang` attribute to the element
     * wrapping that text node.
     */
    language: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [
    /**
     * Emitted when the menu item becomes selected, active or highlighted in response to
     * user interaction. Handled in the Menu component.
     *
     * @property {MenuState} menuState State to change
     * @property {boolean} setState Whether to set that state to this menu item
     */
    "change"
  ],
  setup: (e, { emit: t }) => {
    const n = () => {
      e.highlighted || t("change", "highlighted", !0);
    }, s = () => {
      t("change", "highlighted", !1);
    }, a = (c) => {
      c.button === 0 && t("change", "active", !0);
    }, i = () => {
      t("change", "selected", !0);
    }, l = p(() => e.searchQuery.length > 0), u = p(() => ({
      "cdx-menu-item--selected": e.selected,
      // Only show the active visual state when the menu item is both active and
      // highlighted. This means, on mousedown -> mouseleave, the menu item is still
      // technically tracked by the menu as active, but will not appear active to the
      // user. This also means in the case of mousedown -> mouseleave -> mouseenter, the
      // menu item will appear active again, and on click (releasing the mouse button),
      // the item will be selected.
      "cdx-menu-item--active": e.active && e.highlighted,
      "cdx-menu-item--highlighted": e.highlighted,
      "cdx-menu-item--enabled": !e.disabled,
      "cdx-menu-item--disabled": e.disabled,
      "cdx-menu-item--highlight-query": l.value,
      "cdx-menu-item--bold-label": e.boldLabel,
      "cdx-menu-item--has-description": !!e.description,
      "cdx-menu-item--hide-description-overflow": e.hideDescriptionOverflow
    })), o = p(() => e.url ? "a" : "span"), r = p(() => e.label || String(e.value));
    return {
      onMouseMove: n,
      onMouseLeave: s,
      onMouseDown: a,
      onClick: i,
      highlightQuery: l,
      rootClasses: u,
      contentTag: o,
      title: r
    };
  }
});
const jn = ["id", "aria-disabled", "aria-selected"], Un = { class: "cdx-menu-item__text" }, Wn = ["lang"], Pn = ["lang"], Qn = ["lang"], Gn = ["lang"];
function Zn(e, t, n, s, a, i) {
  const l = k("cdx-thumbnail"), u = k("cdx-icon"), o = k("cdx-search-result-title");
  return d(), m("li", {
    id: e.id,
    role: "option",
    class: K(["cdx-menu-item", e.rootClasses]),
    "aria-disabled": e.disabled,
    "aria-selected": e.selected,
    onMousemove: t[0] || (t[0] = (...r) => e.onMouseMove && e.onMouseMove(...r)),
    onMouseleave: t[1] || (t[1] = (...r) => e.onMouseLeave && e.onMouseLeave(...r)),
    onMousedown: t[2] || (t[2] = X((...r) => e.onMouseDown && e.onMouseDown(...r), ["prevent"])),
    onClick: t[3] || (t[3] = (...r) => e.onClick && e.onClick(...r))
  }, [
    w(e.$slots, "default", {}, () => [
      (d(), L(Xe(e.contentTag), {
        href: e.url ? e.url : void 0,
        class: "cdx-menu-item__content"
      }, {
        default: E(() => {
          var r, c, $, g, A, M;
          return [
            e.showThumbnail ? (d(), L(l, {
              key: 0,
              thumbnail: e.thumbnail,
              class: "cdx-menu-item__thumbnail"
            }, null, 8, ["thumbnail"])) : e.icon ? (d(), L(u, {
              key: 1,
              icon: e.icon,
              class: "cdx-menu-item__icon"
            }, null, 8, ["icon"])) : C("", !0),
            h("span", Un, [
              e.highlightQuery ? (d(), L(o, {
                key: 0,
                title: e.title,
                "search-query": e.searchQuery,
                lang: (r = e.language) == null ? void 0 : r.label
              }, null, 8, ["title", "search-query", "lang"])) : (d(), m("span", {
                key: 1,
                class: "cdx-menu-item__text__label",
                lang: (c = e.language) == null ? void 0 : c.label
              }, [
                h("bdi", null, H(e.title), 1)
              ], 8, Wn)),
              e.match ? (d(), m(me, { key: 2 }, [
                ne(H(" ") + " "),
                e.highlightQuery ? (d(), L(o, {
                  key: 0,
                  title: e.match,
                  "search-query": e.searchQuery,
                  lang: ($ = e.language) == null ? void 0 : $.match
                }, null, 8, ["title", "search-query", "lang"])) : (d(), m("span", {
                  key: 1,
                  class: "cdx-menu-item__text__match",
                  lang: (g = e.language) == null ? void 0 : g.match
                }, [
                  h("bdi", null, H(e.match), 1)
                ], 8, Pn))
              ], 64)) : C("", !0),
              e.supportingText ? (d(), m(me, { key: 3 }, [
                ne(H(" ") + " "),
                h("span", {
                  class: "cdx-menu-item__text__supporting-text",
                  lang: (A = e.language) == null ? void 0 : A.supportingText
                }, [
                  h("bdi", null, H(e.supportingText), 1)
                ], 8, Qn)
              ], 64)) : C("", !0),
              e.description ? (d(), m("span", {
                key: 4,
                class: "cdx-menu-item__text__description",
                lang: (M = e.language) == null ? void 0 : M.description
              }, [
                h("bdi", null, H(e.description), 1)
              ], 8, Gn)) : C("", !0)
            ])
          ];
        }),
        _: 1
      }, 8, ["href"]))
    ])
  ], 42, jn);
}
const Jn = /* @__PURE__ */ N(Hn, [["render", Zn]]), Xn = D({
  name: "CdxProgressBar",
  props: {
    /**
     * Whether this is the smaller, inline variant.
     */
    inline: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the progress bar is disabled.
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return {
      rootClasses: p(() => ({
        "cdx-progress-bar--block": !e.inline,
        "cdx-progress-bar--inline": e.inline,
        "cdx-progress-bar--enabled": !e.disabled,
        "cdx-progress-bar--disabled": e.disabled
      }))
    };
  }
});
const Yn = ["aria-disabled"], eo = /* @__PURE__ */ h("div", { class: "cdx-progress-bar__bar" }, null, -1), to = [
  eo
];
function no(e, t, n, s, a, i) {
  return d(), m("div", {
    class: K(["cdx-progress-bar", e.rootClasses]),
    role: "progressbar",
    "aria-disabled": e.disabled,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, to, 10, Yn);
}
const oo = /* @__PURE__ */ N(Xn, [["render", no]]);
function Te(e, t) {
  const n = f(!1);
  let s = !1;
  if (typeof window != "object" || !("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype))
    return n;
  const a = new window.IntersectionObserver(
    (i) => {
      const l = i[0];
      l && (n.value = l.isIntersecting);
    },
    t
  );
  return de(() => {
    s = !0, e.value && a.observe(e.value);
  }), Ae(() => {
    s = !1, a.disconnect();
  }), ee(e, (i) => {
    s && (a.disconnect(), n.value = !1, i && a.observe(i));
  }), n;
}
function pe(e, t = p(() => ({}))) {
  const n = p(() => {
    const i = ye(t.value, []);
    return e.class && e.class.split(" ").forEach((u) => {
      i[u] = !0;
    }), i;
  }), s = p(() => {
    if ("style" in e)
      return e.style;
  }), a = p(() => {
    const o = e, { class: i, style: l } = o;
    return ye(o, ["class", "style"]);
  });
  return {
    rootClasses: n,
    rootStyle: s,
    otherAttrs: a
  };
}
const lo = D({
  name: "CdxMenu",
  components: {
    CdxMenuItem: Jn,
    CdxProgressBar: oo
  },
  /**
   * Attributes, besides class and style, will be passed to the <ul> element.
   */
  inheritAttrs: !1,
  props: {
    /** Menu items. See the MenuItemData type. */
    menuItems: {
      type: Array,
      required: !0
    },
    /**
     * Interactive footer item.
     *
     * This is a special menu item which is pinned to the bottom of the menu. When scrolling is
     * enabled within the menu, the footer item will always be visible at the bottom of the
     * menu. When scrolling is not enabled, the footer item will simply appear as the last menu
     * item.
     *
     * The footer item is selectable, like other menu items.
     */
    footer: {
      type: Object,
      default: null
    },
    /**
     * Value of the selected menu item, or undefined if no item is selected.
     *
     * Must be bound with `v-model:selected`.
     *
     * The property should be initialized to `null` rather than using a falsy value.
     */
    selected: {
      type: [String, Number, null],
      required: !0
    },
    /**
     * Whether the menu is expanded. Must be bound with `v-model:expanded`.
     */
    expanded: {
      type: Boolean,
      required: !0
    },
    /**
     * Whether to display pending state indicators. Meant to indicate that new menu items are
     * being fetched or computed.
     *
     * When true, the menu will expand if not already expanded, and an inline progress bar will
     * display. If there are no menu items yet, a message can be displayed in the `pending`
     * slot, e.g. "Loading results".
     */
    showPending: {
      type: Boolean,
      default: !1
    },
    /**
     * Limit the number of menu items to display before scrolling.
     *
     * Setting this prop to anything falsy will show all menu items.
     *
     * By default, all menu items are shown.
     */
    visibleItemLimit: {
      type: Number,
      default: null
    },
    /**
     * Whether menu item thumbnails (or a placeholder icon) should be displayed.
     */
    showThumbnail: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to bold menu item labels.
     */
    boldLabel: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to hide description text overflow via an ellipsis.
     */
    hideDescriptionOverflow: {
      type: Boolean,
      default: !1
    },
    /**
     * The search query to be highlighted within the menu items' titles.
     */
    searchQuery: {
      type: String,
      default: ""
    },
    /**
     * Whether to show the `no-results` slot content.
     *
     * The Menu component automatically shows this slot when there is content in the
     * `no-results` slot and there are zero menu items. However, some components may need to
     * customize this behavior, e.g. to show the slot even when there is at least one menu item.
     * This prop can be used to override the default Menu behavior.
     *
     * Possible values:
     * `null` (default): the `no-results` slot will display only if there are zero menu items.
     * `true`: the `no-results` slot will display, regardless of number of menu items.
     * `false`: the `no-results` slot will not display, regardless of number of menu items.
     */
    showNoResultsSlot: {
      type: Boolean,
      default: null
    }
  },
  emits: [
    // Don't remove the spaces in the "string | number | null" type below; removing these
    // spaces causes the documentation to render the type as "union" instead.
    /**
     * When the selected menu item changes.
     *
     * @property {string | number | null} selectedValue The `.value` property of the
     * selected menu item, or null if no item is selected.
     */
    "update:selected",
    /**
     * When the menu opens or closes.
     *
     * @property {boolean} newValue The new expanded state (true for open, false for closed)
     */
    "update:expanded",
    /**
     * When a menu item is clicked.
     *
     * Typically, components with menus will respond to the selected value change, but
     * occasionally, a component might want to react specifically when a menu item is clicked.
     *
     * @property {MenuItemDataWithId} menuItem The menu item that was clicked
     */
    "menu-item-click",
    /**
     * When a menu item is highlighted via keyboard navigation.
     *
     * @property {MenuItemDataWithId} highlightedMenuItem The menu item
     * was highlighted
     */
    "menu-item-keyboard-navigation",
    /**
     * When the user scrolls towards the bottom of the menu.
     *
     * If it is possible to add or load more menu items, then now would be a good moment
     * so that the user can experience infinite scrolling.
     */
    "load-more"
  ],
  expose: [
    "clearActive",
    "getHighlightedMenuItem",
    "getHighlightedViaKeyboard",
    "delegateKeyNavigation"
  ],
  setup(e, { emit: t, slots: n, attrs: s }) {
    const a = p(() => (e.footer && e.menuItems ? [...e.menuItems, e.footer] : e.menuItems).map((S) => He(ze({}, S), {
      id: te("menu-item")
    }))), i = p(() => n["no-results"] ? e.showNoResultsSlot !== null ? e.showNoResultsSlot : a.value.length === 0 : !1), l = f(null), u = f(!1), o = f(null);
    function r() {
      return a.value.find(
        (b) => b.value === e.selected
      );
    }
    function c(b, S) {
      var q;
      if (!(S && S.disabled))
        switch (b) {
          case "selected":
            t("update:selected", (q = S == null ? void 0 : S.value) != null ? q : null), t("update:expanded", !1), o.value = null;
            break;
          case "highlighted":
            l.value = S || null, u.value = !1;
            break;
          case "highlightedViaKeyboard":
            l.value = S || null, u.value = !0;
            break;
          case "active":
            o.value = S || null;
            break;
        }
    }
    const $ = p(() => {
      if (l.value !== null)
        return a.value.findIndex(
          (b) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            b.value === l.value.value
          )
        );
    });
    function g(b) {
      b && (c("highlightedViaKeyboard", b), t("menu-item-keyboard-navigation", b));
    }
    function A(b) {
      var j;
      const S = (ve) => {
        for (let ie = ve - 1; ie >= 0; ie--)
          if (!a.value[ie].disabled)
            return a.value[ie];
      };
      b = b || a.value.length;
      const q = (j = S(b)) != null ? j : S(a.value.length);
      g(q);
    }
    function M(b) {
      const S = (j) => a.value.find((ve, ie) => !ve.disabled && ie > j);
      b = b != null ? b : -1;
      const q = S(b) || S(-1);
      g(q);
    }
    function R(b, S = !0) {
      function q() {
        t("update:expanded", !0), c("highlighted", r());
      }
      function j() {
        S && (b.preventDefault(), b.stopPropagation());
      }
      switch (b.key) {
        case "Enter":
        case " ":
          return j(), e.expanded ? (l.value && u.value && t("update:selected", l.value.value), t("update:expanded", !1)) : q(), !0;
        case "Tab":
          return e.expanded && (l.value && u.value && t("update:selected", l.value.value), t("update:expanded", !1)), !0;
        case "ArrowUp":
          return j(), e.expanded ? (l.value === null && c("highlightedViaKeyboard", r()), A($.value)) : q(), U(), !0;
        case "ArrowDown":
          return j(), e.expanded ? (l.value === null && c("highlightedViaKeyboard", r()), M($.value)) : q(), U(), !0;
        case "Home":
          return j(), e.expanded ? (l.value === null && c("highlightedViaKeyboard", r()), M()) : q(), U(), !0;
        case "End":
          return j(), e.expanded ? (l.value === null && c("highlightedViaKeyboard", r()), A()) : q(), U(), !0;
        case "Escape":
          return j(), t("update:expanded", !1), !0;
        default:
          return !1;
      }
    }
    function x() {
      c("active");
    }
    const T = [], B = f(void 0), V = Te(
      B,
      { threshold: 0.8 }
    );
    ee(V, (b) => {
      b && t("load-more");
    });
    function oe(b, S) {
      if (b) {
        T[S] = b.$el;
        const q = e.visibleItemLimit;
        if (!q || e.menuItems.length < q)
          return;
        const j = Math.min(
          q,
          Math.max(2, Math.floor(0.2 * e.menuItems.length))
        );
        S === e.menuItems.length - j && (B.value = b.$el);
      }
    }
    function U() {
      if (!e.visibleItemLimit || e.visibleItemLimit > e.menuItems.length || $.value === void 0)
        return;
      const b = $.value >= 0 ? $.value : 0;
      T[b].scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
    const Q = f(null), I = f(null);
    function y() {
      if (I.value = null, !e.visibleItemLimit || T.length <= e.visibleItemLimit) {
        Q.value = null;
        return;
      }
      const b = T[0], S = T[e.visibleItemLimit];
      if (Q.value = v(
        b,
        S
      ), e.footer) {
        const q = T[T.length - 1];
        I.value = q.scrollHeight;
      }
    }
    function v(b, S) {
      const q = b.getBoundingClientRect().top;
      return S.getBoundingClientRect().top - q + 2;
    }
    de(() => {
      document.addEventListener("mouseup", x);
    }), Ae(() => {
      document.removeEventListener("mouseup", x);
    }), ee(G(e, "expanded"), (b) => ke(this, null, function* () {
      const S = r();
      !b && l.value && S === void 0 && c("highlighted"), b && S !== void 0 && c("highlighted", S), b && (yield be(), y(), yield be(), U());
    })), ee(G(e, "menuItems"), (b) => ke(this, null, function* () {
      b.length < T.length && (T.length = b.length), e.expanded && (yield be(), y(), yield be(), U());
    }), { deep: !0 });
    const F = p(() => ({
      "max-height": Q.value ? `${Q.value}px` : void 0,
      "overflow-y": Q.value ? "scroll" : void 0,
      "margin-bottom": I.value ? `${I.value}px` : void 0
    })), O = p(() => ({
      "cdx-menu--has-footer": !!e.footer,
      "cdx-menu--has-sticky-footer": !!e.footer && !!Q.value
    })), {
      rootClasses: W,
      rootStyle: ce,
      otherAttrs: we
    } = pe(s, O);
    return {
      listBoxStyle: F,
      rootClasses: W,
      rootStyle: ce,
      otherAttrs: we,
      assignTemplateRef: oe,
      computedMenuItems: a,
      computedShowNoResultsSlot: i,
      highlightedMenuItem: l,
      highlightedViaKeyboard: u,
      activeMenuItem: o,
      handleMenuItemChange: c,
      handleKeyNavigation: R
    };
  },
  // Public methods
  // These must be in the methods block, not in the setup function, otherwise their documentation
  // won't be picked up by vue-docgen
  methods: {
    /**
     * Get the highlighted menu item, if any.
     *
     * @public
     * @return {MenuItemDataWithId|null} The highlighted menu item,
     *   or null if no item is highlighted.
     */
    getHighlightedMenuItem() {
      return this.highlightedMenuItem;
    },
    /**
     * Get whether the last highlighted item was highlighted via the keyboard.
     *
     * @public
     * @return {boolean} Whether the last highlighted menu item was highlighted via keyboard.
     */
    getHighlightedViaKeyboard() {
      return this.highlightedViaKeyboard;
    },
    /**
     * Ensure no menu item is active. This unsets the active item if there is one.
     *
     * @public
     */
    clearActive() {
      this.handleMenuItemChange("active");
    },
    /**
     * Handles all necessary keyboard navigation.
     *
     * The parent component should listen for keydown events on its focusable element,
     * and pass those events to this method. Events for arrow keys, tab and enter are handled
     * by this method. If a different key was pressed, this method will return false to indicate
     * that it didn't handle the event.
     *
     * @public
     * @param event {KeyboardEvent} Keydown event object
     * @param prevent {boolean} If false, do not call e.preventDefault() or e.stopPropagation()
     * @return Whether the event was handled
     */
    delegateKeyNavigation(e, t = !0) {
      return this.handleKeyNavigation(e, t);
    }
  }
});
const ao = {
  key: 0,
  class: "cdx-menu__pending cdx-menu-item"
}, so = {
  key: 1,
  class: "cdx-menu__no-results cdx-menu-item"
};
function io(e, t, n, s, a, i) {
  const l = k("cdx-menu-item"), u = k("cdx-progress-bar");
  return ue((d(), m("div", {
    class: K(["cdx-menu", e.rootClasses]),
    style: re(e.rootStyle)
  }, [
    h("ul", J({
      class: "cdx-menu__listbox",
      role: "listbox",
      "aria-multiselectable": "false",
      style: e.listBoxStyle
    }, e.otherAttrs), [
      e.showPending && e.computedMenuItems.length === 0 && e.$slots.pending ? (d(), m("li", ao, [
        w(e.$slots, "pending")
      ])) : C("", !0),
      e.computedShowNoResultsSlot ? (d(), m("li", so, [
        w(e.$slots, "no-results")
      ])) : C("", !0),
      (d(!0), m(me, null, _e(e.computedMenuItems, (o, r) => {
        var c, $;
        return d(), L(l, J({
          key: o.value,
          ref_for: !0,
          ref: (g) => e.assignTemplateRef(g, r)
        }, o, {
          selected: o.value === e.selected,
          active: o.value === ((c = e.activeMenuItem) == null ? void 0 : c.value),
          highlighted: o.value === (($ = e.highlightedMenuItem) == null ? void 0 : $.value),
          "show-thumbnail": e.showThumbnail,
          "bold-label": e.boldLabel,
          "hide-description-overflow": e.hideDescriptionOverflow,
          "search-query": e.searchQuery,
          onChange: (g, A) => e.handleMenuItemChange(g, A && o),
          onClick: (g) => e.$emit("menu-item-click", o)
        }), {
          default: E(() => {
            var g, A;
            return [
              w(e.$slots, "default", {
                menuItem: o,
                active: o.value === ((g = e.activeMenuItem) == null ? void 0 : g.value) && o.value === ((A = e.highlightedMenuItem) == null ? void 0 : A.value)
              })
            ];
          }),
          _: 2
        }, 1040, ["selected", "active", "highlighted", "show-thumbnail", "bold-label", "hide-description-overflow", "search-query", "onChange", "onClick"]);
      }), 128)),
      e.showPending ? (d(), L(u, {
        key: 2,
        class: "cdx-menu__progress-bar",
        inline: !0
      })) : C("", !0)
    ], 16)
  ], 6)), [
    [$e, e.expanded]
  ]);
}
const Ie = /* @__PURE__ */ N(lo, [["render", io]]), uo = ae(Mt), ro = ae(Ce), co = D({
  name: "CdxTextInput",
  components: { CdxIcon: Z },
  /**
   * We want the input to inherit attributes, not the root element.
   */
  inheritAttrs: !1,
  expose: ["focus"],
  props: {
    /**
     * Current value of the input.
     *
     * Provided by `v-model` binding in the parent component.
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * `type` attribute of the input.
     *
     * @values 'text', 'search', 'number', 'email', 'password', 'tel', 'url',
     * 'week', 'month', 'date', 'datetime-local', 'time'
     */
    inputType: {
      type: String,
      default: "text",
      validator: uo
    },
    /**
     * `status` attribute of the input.
     *
     * @values 'default', 'error'
     */
    status: {
      type: String,
      default: "default",
      validator: ro
    },
    /**
     * Whether the input is disabled.
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * An icon at the start of the input element. Similar to a `::before` pseudo-element.
     */
    startIcon: {
      type: [String, Object],
      default: void 0
    },
    /**
     * An icon at the end of the input element. Similar to an `::after` pseudo-element.
     */
    endIcon: {
      type: [String, Object],
      default: void 0
    },
    /**
     * Add a clear button at the end of the input element.
     *
     * When the clear button is pressed, the input's value is set to an empty string.
     * The clear button is displayed when input text is present.
     */
    clearable: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    /**
     * When the input value changes
     *
     * @property {string | number} modelValue The new model value
     */
    "update:modelValue",
    /**
     * When the user presses a key.
     *
     * This event is not emitted when the user presses the Home or End key (T314728),
     * but is emitted for Ctrl/Cmd+Home and Ctrl/Cmd+End.
     *
     * @property {KeyboardEvent}
     */
    "keydown",
    /**
     * When the input value changes via direct use of the input
     *
     * @property {InputEvent} event
     */
    "input",
    /**
     * When an input value change is committed by the user (e.g. on blur)
     *
     * @property {Event} event
     */
    "change",
    /**
     * When the input comes into focus
     *
     * @property {FocusEvent} event
     */
    "focus",
    /**
     * When the input loses focus
     *
     * @property {FocusEvent} event
     */
    "blur"
  ],
  setup(e, { emit: t, attrs: n }) {
    const s = se(G(e, "modelValue"), t), a = p(() => e.clearable && !!s.value && !e.disabled), i = p(() => ({
      "cdx-text-input--has-start-icon": !!e.startIcon,
      "cdx-text-input--has-end-icon": !!e.endIcon,
      "cdx-text-input--clearable": a.value,
      [`cdx-text-input--status-${e.status}`]: !0
    })), {
      rootClasses: l,
      rootStyle: u,
      otherAttrs: o
    } = pe(n, i), r = p(() => ({
      "cdx-text-input__input--has-value": !!s.value
    }));
    return {
      wrappedModel: s,
      isClearable: a,
      rootClasses: l,
      rootStyle: u,
      otherAttrs: o,
      inputClasses: r,
      onClear: () => {
        s.value = "";
      },
      onInput: (x) => {
        t("input", x);
      },
      onChange: (x) => {
        t("change", x);
      },
      onKeydown: (x) => {
        (x.key === "Home" || x.key === "End") && !x.ctrlKey && !x.metaKey || t("keydown", x);
      },
      onFocus: (x) => {
        t("focus", x);
      },
      onBlur: (x) => {
        t("blur", x);
      },
      cdxIconClear: Ut
    };
  },
  // Public methods
  // These must be in the methods block, not in the setup function, otherwise their documentation
  // won't be picked up by vue-docgen
  methods: {
    /**
     * Focus the component's input element.
     *
     * @public
     */
    focus() {
      this.$refs.input.focus();
    }
  }
});
const po = ["type", "disabled"];
function fo(e, t, n, s, a, i) {
  const l = k("cdx-icon");
  return d(), m("div", {
    class: K(["cdx-text-input", e.rootClasses]),
    style: re(e.rootStyle)
  }, [
    ue(h("input", J({
      ref: "input",
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.wrappedModel = u),
      class: ["cdx-text-input__input", e.inputClasses]
    }, e.otherAttrs, {
      type: e.inputType,
      disabled: e.disabled,
      onInput: t[1] || (t[1] = (...u) => e.onInput && e.onInput(...u)),
      onChange: t[2] || (t[2] = (...u) => e.onChange && e.onChange(...u)),
      onFocus: t[3] || (t[3] = (...u) => e.onFocus && e.onFocus(...u)),
      onBlur: t[4] || (t[4] = (...u) => e.onBlur && e.onBlur(...u)),
      onKeydown: t[5] || (t[5] = (...u) => e.onKeydown && e.onKeydown(...u))
    }), null, 16, po), [
      [_t, e.wrappedModel]
    ]),
    e.startIcon ? (d(), L(l, {
      key: 0,
      icon: e.startIcon,
      class: "cdx-text-input__icon-vue cdx-text-input__start-icon"
    }, null, 8, ["icon"])) : C("", !0),
    e.endIcon ? (d(), L(l, {
      key: 1,
      icon: e.endIcon,
      class: "cdx-text-input__icon-vue cdx-text-input__end-icon"
    }, null, 8, ["icon"])) : C("", !0),
    e.isClearable ? (d(), L(l, {
      key: 2,
      icon: e.cdxIconClear,
      class: "cdx-text-input__icon-vue cdx-text-input__clear-icon",
      onMousedown: t[6] || (t[6] = X(() => {
      }, ["prevent"])),
      onClick: e.onClear
    }, null, 8, ["icon", "onClick"])) : C("", !0)
  ], 6);
}
const Le = /* @__PURE__ */ N(co, [["render", fo]]);
function Ke(e) {
  const t = f(
    { width: void 0, height: void 0 }
  );
  if (typeof window != "object" || !("ResizeObserver" in window) || !("ResizeObserverEntry" in window))
    return t;
  const n = new window.ResizeObserver(
    (a) => {
      const i = a[0];
      i && (t.value = {
        width: i.borderBoxSize[0].inlineSize,
        height: i.borderBoxSize[0].blockSize
      });
    }
  );
  let s = !1;
  return de(() => {
    s = !0, e.value && n.observe(e.value);
  }), Ae(() => {
    s = !1, n.disconnect();
  }), ee(e, (a) => {
    s && (n.disconnect(), t.value = {
      width: void 0,
      height: void 0
    }, a && n.observe(a));
  }), t;
}
const mo = ae(Ce), Ee = D({
  name: "CdxCombobox",
  components: {
    CdxButton: he,
    CdxIcon: Z,
    CdxMenu: Ie,
    CdxTextInput: Le
  },
  /**
   * Attributes applied to this component by a parent will be applied
   * to the TextInput child component rather than the root element.
   */
  inheritAttrs: !1,
  props: {
    /**
     * Menu items. See the MenuItemData type.
     */
    menuItems: {
      type: Array,
      required: !0
    },
    /**
     * Value of the current selection.
     *
     * Must be bound with `v-model:selected`.
     */
    selected: {
      type: [String, Number],
      required: !0
    },
    /**
     * Whether the dropdown is disabled.
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Configuration for various menu features. All properties default to false.
     *
     * See the MenuConfig type.
     */
    menuConfig: {
      type: Object,
      default: () => ({})
    },
    /**
     * `status` property of the TextInput component
     *
     * @values 'default', 'error'
     */
    status: {
      type: String,
      default: "default",
      validator: mo
    }
  },
  emits: [
    /**
     * When the selected value changes.
     *
     * @property {string | number} selected The new selected value
     */
    "update:selected",
    /**
     * When the user scrolls towards the bottom of the menu.
     *
     * If it is possible to add or load more menu items, then now would be a good moment
     * so that the user can experience infinite scrolling.
     */
    "load-more"
  ],
  setup(e, { emit: t, attrs: n, slots: s }) {
    const a = f(), i = f(), l = f(), u = te("combobox"), o = G(e, "selected"), r = se(o, t, "update:selected"), c = f(!1), $ = f(!1), g = p(() => {
      var y, v;
      return (v = (y = l.value) == null ? void 0 : y.getHighlightedMenuItem()) == null ? void 0 : v.id;
    }), A = p(() => ({
      "cdx-combobox--expanded": c.value,
      "cdx-combobox--disabled": e.disabled
    })), M = Ke(i), R = p(() => {
      var y;
      return `${(y = M.value.width) != null ? y : 0}px`;
    }), {
      rootClasses: x,
      rootStyle: T,
      otherAttrs: B
    } = pe(n, A);
    function V() {
      $.value && c.value ? c.value = !1 : (e.menuItems.length > 0 || s["no-results"]) && (c.value = !0);
    }
    function oe() {
      c.value = $.value && c.value;
    }
    function U() {
      e.disabled || ($.value = !0);
    }
    function Q() {
      var y;
      e.disabled || (y = a.value) == null || y.focus();
    }
    function I(y) {
      !l.value || e.disabled || e.menuItems.length === 0 || y.key === " " || l.value.delegateKeyNavigation(y);
    }
    return ee(c, () => {
      $.value = !1;
    }), {
      input: a,
      inputWrapper: i,
      currentWidthInPx: R,
      menu: l,
      menuId: u,
      modelWrapper: r,
      expanded: c,
      highlightedId: g,
      onInputFocus: V,
      onInputBlur: oe,
      onKeydown: I,
      onButtonClick: Q,
      onButtonMousedown: U,
      cdxIconExpand: st,
      rootClasses: x,
      rootStyle: T,
      otherAttrs: B
    };
  }
}), We = () => {
  Ve((e) => ({
    "21ba103d": e.currentWidthInPx
  }));
}, Pe = Ee.setup;
Ee.setup = Pe ? (e, t) => (We(), Pe(e, t)) : We;
const ho = {
  ref: "inputWrapper",
  class: "cdx-combobox__input-wrapper"
};
function vo(e, t, n, s, a, i) {
  const l = k("cdx-text-input"), u = k("cdx-icon"), o = k("cdx-button"), r = k("cdx-menu");
  return d(), m("div", {
    class: K(["cdx-combobox", e.rootClasses]),
    style: re(e.rootStyle)
  }, [
    h("div", ho, [
      z(l, J({
        ref: "input",
        modelValue: e.modelWrapper,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => e.modelWrapper = c)
      }, e.otherAttrs, {
        class: "cdx-combobox__input",
        "aria-activedescendant": e.highlightedId,
        "aria-expanded": e.expanded,
        "aria-controls": e.menuId,
        "aria-owns": e.menuId,
        disabled: e.disabled,
        status: e.status,
        "aria-autocomplete": "list",
        autocomplete: "off",
        role: "combobox",
        onKeydown: e.onKeydown,
        onFocus: e.onInputFocus,
        onBlur: e.onInputBlur
      }), null, 16, ["modelValue", "aria-activedescendant", "aria-expanded", "aria-controls", "aria-owns", "disabled", "status", "onKeydown", "onFocus", "onBlur"]),
      z(o, {
        class: "cdx-combobox__expand-button",
        "aria-hidden": "true",
        disabled: e.disabled,
        tabindex: "-1",
        type: "button",
        onMousedown: e.onButtonMousedown,
        onClick: e.onButtonClick
      }, {
        default: E(() => [
          z(u, {
            class: "cdx-combobox__expand-icon",
            icon: e.cdxIconExpand
          }, null, 8, ["icon"])
        ]),
        _: 1
      }, 8, ["disabled", "onMousedown", "onClick"])
    ], 512),
    z(r, J({
      id: e.menuId,
      ref: "menu",
      selected: e.modelWrapper,
      "onUpdate:selected": t[1] || (t[1] = (c) => e.modelWrapper = c),
      expanded: e.expanded,
      "onUpdate:expanded": t[2] || (t[2] = (c) => e.expanded = c),
      "menu-items": e.menuItems
    }, e.menuConfig, {
      onLoadMore: t[3] || (t[3] = (c) => e.$emit("load-more"))
    }), {
      default: E(({ menuItem: c }) => [
        w(e.$slots, "menu-item", { menuItem: c })
      ]),
      "no-results": E(() => [
        w(e.$slots, "no-results")
      ]),
      _: 3
    }, 16, ["id", "selected", "expanded", "menu-items"])
  ], 6);
}
const Vl = /* @__PURE__ */ N(Ee, [["render", vo]]), bo = D({
  name: "CdxDialog",
  components: {
    CdxButton: he,
    CdxIcon: Z
  },
  inheritAttrs: !1,
  props: {
    /**
     * Whether the dialog is visible. Should be provided via a v-model:open
     * binding in the parent scope.
     */
    open: {
      type: Boolean,
      default: !1
    },
    /**
     * Title for the dialog header. Used for ARIA purposes even if no
     * visible header element is displayed.
     */
    title: {
      type: String,
      required: !0
    },
    /**
     * Optional subtitle for the dialog.
     */
    subtitle: {
      type: String,
      required: !1,
      default: null
    },
    /**
     * Whether the dialog header should hide the title & subtitle
     */
    hideTitle: {
      type: Boolean,
      default: !1
    },
    /**
     * Label for the icon-only close button in the header.
     *
     * Including this prop adds the close button.
     */
    closeButtonLabel: {
      type: String,
      default: ""
    },
    /**
     * Primary user action. This will display a primary button with the specified action
     * (progressive or destructive).
     */
    primaryAction: {
      type: Object,
      default: null
    },
    /**
     * Default user action. This will display a normal button.
     */
    defaultAction: {
      type: Object,
      default: null
    },
    /**
     * Whether action buttons should be vertically stacked and 100% width.
     */
    stackedActions: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    /**
     * When the open/close state changes, e.g. when the close button is clicked.
     *
     * @property {boolean} newValue The new open/close state (true for open, false for closed)
     */
    "update:open",
    /**
     * When the primary action button is clicked.
     */
    "primary",
    /**
     * When the default action button is clicked.
     */
    "default"
  ],
  setup(e, { emit: t }) {
    const n = te("dialog-label"), s = f(), a = f(), i = f(), l = f(), u = f(), o = p(() => !e.hideTitle || !!e.closeButtonLabel), r = p(() => !!e.primaryAction || !!e.defaultAction), c = p(() => ({
      "cdx-dialog--vertical-actions": e.stackedActions,
      "cdx-dialog--horizontal-actions": !e.stackedActions
    })), $ = f(0);
    function g() {
      t("update:open", !1);
    }
    function A() {
      R(s.value);
    }
    function M() {
      R(s.value, !0);
    }
    function R(x, T = !1) {
      let B = Array.from(
        x.querySelectorAll(`
					input, select, textarea, button, object, a, area,
					[contenteditable], [tabindex]:not([tabindex^="-"])
				`)
      );
      T && (B = B.reverse());
      for (const V of B)
        if (V.focus(), document.activeElement === V)
          return !0;
      return !1;
    }
    return ee(G(e, "open"), (x) => {
      x ? ($.value = window.innerWidth - document.documentElement.clientWidth, document.documentElement.style.setProperty("margin-right", `${$.value}px`), document.body.classList.add("cdx-dialog-open"), be(() => {
        var T;
        R(a.value) || (T = i.value) == null || T.focus();
      })) : (document.body.classList.remove("cdx-dialog-open"), document.documentElement.style.removeProperty("margin-right"));
    }), {
      close: g,
      cdxIconClose: lt,
      labelId: n,
      rootClasses: c,
      dialogElement: s,
      focusTrapStart: l,
      focusTrapEnd: u,
      focusFirst: A,
      focusLast: M,
      dialogBody: a,
      focusHolder: i,
      showHeader: o,
      showFooterActions: r
    };
  }
});
const go = ["aria-label", "aria-labelledby"], yo = {
  key: 0,
  class: "cdx-dialog__header__title-group"
}, $o = ["id"], _o = {
  key: 0,
  class: "cdx-dialog__header__subtitle"
}, Co = {
  ref: "focusHolder",
  class: "cdx-dialog-focus-trap",
  tabindex: "-1"
}, Io = {
  key: 0,
  class: "cdx-dialog__footer__text"
}, wo = {
  key: 1,
  class: "cdx-dialog__footer__actions"
};
function ko(e, t, n, s, a, i) {
  const l = k("cdx-icon"), u = k("cdx-button");
  return d(), L(Be, {
    name: "cdx-dialog-fade",
    appear: ""
  }, {
    default: E(() => [
      e.open ? (d(), m("div", {
        key: 0,
        class: "cdx-dialog-backdrop",
        onClick: t[5] || (t[5] = (...o) => e.close && e.close(...o)),
        onKeyup: t[6] || (t[6] = Y((...o) => e.close && e.close(...o), ["escape"]))
      }, [
        h("div", {
          ref: "focusTrapStart",
          tabindex: "0",
          onFocus: t[0] || (t[0] = (...o) => e.focusLast && e.focusLast(...o))
        }, null, 544),
        h("div", J({
          ref: "dialogElement",
          class: ["cdx-dialog", e.rootClasses],
          role: "dialog"
        }, e.$attrs, {
          "aria-label": e.$slots.header || e.hideTitle ? e.title : void 0,
          "aria-labelledby": !e.$slots.header && !e.hideTitle ? e.labelId : void 0,
          onClick: t[3] || (t[3] = X(() => {
          }, ["stop"]))
        }), [
          e.showHeader || e.$slots.header ? (d(), m("header", {
            key: 0,
            class: K(["cdx-dialog__header", { "cdx-dialog__header--default": !e.$slots.header }])
          }, [
            w(e.$slots, "header", {}, () => [
              e.hideTitle ? C("", !0) : (d(), m("div", yo, [
                h("h2", {
                  id: e.labelId,
                  class: "cdx-dialog__header__title"
                }, H(e.title), 9, $o),
                e.subtitle ? (d(), m("p", _o, H(e.subtitle), 1)) : C("", !0)
              ])),
              e.closeButtonLabel ? (d(), L(u, {
                key: 1,
                class: "cdx-dialog__header__close-button",
                weight: "quiet",
                type: "button",
                "aria-label": e.closeButtonLabel,
                onClick: e.close
              }, {
                default: E(() => [
                  z(l, {
                    icon: e.cdxIconClose,
                    "icon-label": e.closeButtonLabel
                  }, null, 8, ["icon", "icon-label"])
                ]),
                _: 1
              }, 8, ["aria-label", "onClick"])) : C("", !0)
            ])
          ], 2)) : C("", !0),
          h("div", Co, null, 512),
          h("div", {
            ref: "dialogBody",
            class: K(["cdx-dialog__body", {
              "cdx-dialog__body--no-header": !(e.showHeader || e.$slots.header),
              "cdx-dialog__body--no-footer": !(e.showFooterActions || e.$slots.footer || e.$slots["footer-text"])
            }])
          }, [
            w(e.$slots, "default")
          ], 2),
          e.showFooterActions || e.$slots.footer || e.$slots["footer-text"] ? (d(), m("footer", {
            key: 1,
            class: K(["cdx-dialog__footer", { "cdx-dialog__footer--default": !e.$slots.footer }])
          }, [
            w(e.$slots, "footer", {}, () => [
              e.$slots["footer-text"] ? (d(), m("p", Io, [
                w(e.$slots, "footer-text")
              ])) : C("", !0),
              e.showFooterActions ? (d(), m("div", wo, [
                e.primaryAction ? (d(), L(u, {
                  key: 0,
                  class: "cdx-dialog__footer__primary-action",
                  weight: "primary",
                  action: e.primaryAction.actionType,
                  disabled: e.primaryAction.disabled,
                  onClick: t[1] || (t[1] = (o) => e.$emit("primary"))
                }, {
                  default: E(() => [
                    ne(H(e.primaryAction.label), 1)
                  ]),
                  _: 1
                }, 8, ["action", "disabled"])) : C("", !0),
                e.defaultAction ? (d(), L(u, {
                  key: 1,
                  class: "cdx-dialog__footer__default-action",
                  disabled: e.defaultAction.disabled,
                  onClick: t[2] || (t[2] = (o) => e.$emit("default"))
                }, {
                  default: E(() => [
                    ne(H(e.defaultAction.label), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : C("", !0)
              ])) : C("", !0)
            ])
          ], 2)) : C("", !0)
        ], 16, go),
        h("div", {
          ref: "focusTrapEnd",
          tabindex: "0",
          onFocus: t[4] || (t[4] = (...o) => e.focusFirst && e.focusFirst(...o))
        }, null, 544)
      ], 32)) : C("", !0)
    ]),
    _: 3
  });
}
const Ll = /* @__PURE__ */ N(bo, [["render", ko]]), xo = ae(Ce), De = D({
  name: "CdxLookup",
  components: {
    CdxMenu: Ie,
    CdxTextInput: Le
  },
  /**
   * We want the input to inherit attributes, not the root element.
   */
  inheritAttrs: !1,
  props: {
    /**
     * Value of the current selection.
     *
     * Must be bound with `v-model:selected`.
     *
     * The property should be initialized to `null` rather than using a falsy value.
     */
    selected: {
      type: [String, Number, null],
      required: !0
    },
    /**
     * Menu items.
     */
    menuItems: {
      type: Array,
      required: !0
    },
    /**
     * Initial value of the text input.
     */
    initialInputValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * Whether the entire component is disabled.
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Configuration for various menu features. All properties default to false.
     *
     * See the MenuConfig type.
     */
    menuConfig: {
      type: Object,
      default: () => ({})
    },
    /**
     * `status` property of the TextInput component
     *
     * @values 'default', 'error'
     */
    status: {
      type: String,
      default: "default",
      validator: xo
    }
  },
  emits: [
    /**
     * When the selected value changes.
     *
     * @property {string | number | null} selected The new selected value
     */
    "update:selected",
    /**
     * When the text input value changes.
     *
     * @property {string | number} value The new value
     */
    "input",
    /**
     * When the user scrolls towards the bottom of the menu.
     *
     * If it is possible to add or load more menu items, then now would be a good moment
     * so that the user can experience infinite scrolling.
     */
    "load-more"
  ],
  setup: (e, { emit: t, attrs: n, slots: s }) => {
    const a = f(), i = f(), l = te("lookup-menu"), u = f(!1), o = f(!1), r = f(!1), c = G(e, "selected"), $ = se(c, t, "update:selected"), g = p(
      () => e.menuItems.find((v) => v.value === e.selected)
    ), A = p(() => {
      var v, F;
      return (F = (v = i.value) == null ? void 0 : v.getHighlightedMenuItem()) == null ? void 0 : F.id;
    }), M = f(e.initialInputValue), R = Ke(a), x = p(() => {
      var v;
      return `${(v = R.value.width) != null ? v : 0}px`;
    }), T = p(() => ({
      "cdx-lookup--disabled": e.disabled,
      "cdx-lookup--pending": u.value
    })), {
      rootClasses: B,
      rootStyle: V,
      otherAttrs: oe
    } = pe(n, T);
    function U(v) {
      g.value && g.value.label !== v && g.value.value !== v && ($.value = null), v === "" ? (o.value = !1, u.value = !1) : u.value = !0, t("input", v);
    }
    function Q() {
      r.value = !0, // Input value is not null or an empty string.
      M.value !== null && M.value !== "" && // There's either menu items to show or a no results message.
      (e.menuItems.length > 0 || s["no-results"]) && (o.value = !0);
    }
    function I() {
      r.value = !1, o.value = !1;
    }
    function y(v) {
      !i.value || e.disabled || e.menuItems.length === 0 && !s["no-results"] || v.key === " " || i.value.delegateKeyNavigation(v);
    }
    return ee(c, (v) => {
      if (v !== null) {
        const F = g.value ? g.value.label || g.value.value : "";
        M.value !== F && (M.value = F, t("input", M.value));
      }
    }), ee(G(e, "menuItems"), (v) => {
      // Only show the menu if we were in the pending state (meaning this menuItems change
      // was in response to user input) and the menu is still focused
      r.value && u.value && // Show the menu if there are either menu items or no-results content to show
      (v.length > 0 || s["no-results"]) && (o.value = !0), v.length === 0 && !s["no-results"] && (o.value = !1), u.value = !1;
    }), {
      rootElement: a,
      currentWidthInPx: x,
      menu: i,
      menuId: l,
      highlightedId: A,
      inputValue: M,
      modelWrapper: $,
      expanded: o,
      onInputBlur: I,
      rootClasses: B,
      rootStyle: V,
      otherAttrs: oe,
      onUpdateInput: U,
      onInputFocus: Q,
      onKeydown: y
    };
  }
}), Qe = () => {
  Ve((e) => ({
    "51c485f8": e.currentWidthInPx
  }));
}, Ge = De.setup;
De.setup = Ge ? (e, t) => (Qe(), Ge(e, t)) : Qe;
function So(e, t, n, s, a, i) {
  const l = k("cdx-text-input"), u = k("cdx-menu");
  return d(), m("div", {
    ref: "rootElement",
    class: K(["cdx-lookup", e.rootClasses]),
    style: re(e.rootStyle)
  }, [
    z(l, J({
      modelValue: e.inputValue,
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.inputValue = o)
    }, e.otherAttrs, {
      class: "cdx-lookup__input",
      role: "combobox",
      autocomplete: "off",
      "aria-autocomplete": "list",
      "aria-controls": e.menuId,
      "aria-owns": e.menuId,
      "aria-expanded": e.expanded,
      "aria-activedescendant": e.highlightedId,
      disabled: e.disabled,
      status: e.status,
      "onUpdate:modelValue": e.onUpdateInput,
      onFocus: e.onInputFocus,
      onBlur: e.onInputBlur,
      onKeydown: e.onKeydown
    }), null, 16, ["modelValue", "aria-controls", "aria-owns", "aria-expanded", "aria-activedescendant", "disabled", "status", "onUpdate:modelValue", "onFocus", "onBlur", "onKeydown"]),
    z(u, J({
      id: e.menuId,
      ref: "menu",
      selected: e.modelWrapper,
      "onUpdate:selected": t[1] || (t[1] = (o) => e.modelWrapper = o),
      expanded: e.expanded,
      "onUpdate:expanded": t[2] || (t[2] = (o) => e.expanded = o),
      "menu-items": e.menuItems
    }, e.menuConfig, {
      onLoadMore: t[3] || (t[3] = (o) => e.$emit("load-more"))
    }), {
      default: E(({ menuItem: o }) => [
        w(e.$slots, "menu-item", { menuItem: o })
      ]),
      "no-results": E(() => [
        w(e.$slots, "no-results")
      ]),
      _: 3
    }, 16, ["id", "selected", "expanded", "menu-items"])
  ], 6);
}
const Kl = /* @__PURE__ */ N(De, [["render", So]]), Mo = {
  notice: Pt,
  error: at,
  warning: ot,
  success: it
}, To = D({
  name: "CdxMessage",
  components: { CdxButton: he, CdxIcon: Z },
  props: {
    /**
     * Status type of Message.
     *
     * @values 'notice', 'warning', 'error', 'success'
     */
    type: {
      type: String,
      default: "notice",
      validator: et
    },
    /**
     * Whether this message follows the inline design (no padding, background color, or border).
     */
    inline: {
      type: Boolean,
      default: !1
    },
    /**
     * Custom message icon. Only allowed for notice messages.
     */
    icon: {
      type: [String, Object],
      default: null
    },
    /**
     * Whether the message should fade in. Should be used for messages that are dynamically
     * displayed, not present on page load.
     */
    fadeIn: {
      type: Boolean,
      default: !1
    },
    /**
     * Label text for the dismiss button for user-dismissable messages.
     *
     * An icon-only button will be displayed that will hide the message on click. This prop is
     * for the hidden button label required for screen reader accessibility and tooltip text.
     */
    dismissButtonLabel: {
      type: String,
      default: ""
    },
    /**
     * Enable automatic dismissal of message after a period of time.
     *
     * This prop can be set to `true` to use the default display time of 4000 milliseconds. To
     * customize the display time, set this prop to a number of milliseconds.
     *
     * TODO: consider adding a stricter validator to set limits on this. If the time is too
     * short, the message may not be readable. If the time is too long, the message probably
     * shouldn't be auto-dismissed.
     */
    autoDismiss: {
      type: [Boolean, Number],
      default: !1,
      validator: (e) => typeof e == "boolean" || typeof e == "number" && e > 0
    }
  },
  emits: [
    /**
     * Emitted when the message is dismissed by the user via the dismiss button.
     */
    "user-dismissed",
    /**
     * Emitted when the message is automatically dismissed after the display time.
     */
    "auto-dismissed"
  ],
  setup(e, { emit: t }) {
    const n = f(!1), s = p(
      () => e.inline === !1 && e.dismissButtonLabel.length > 0
    ), a = p(() => e.autoDismiss === !1 ? !1 : e.autoDismiss === !0 ? 4e3 : e.autoDismiss), i = p(() => ({
      "cdx-message--inline": e.inline,
      "cdx-message--block": !e.inline,
      "cdx-message--user-dismissable": s.value,
      [`cdx-message--${e.type}`]: !0
    })), l = p(
      () => e.icon && e.type === "notice" ? e.icon : Mo[e.type]
    ), u = f("");
    function o(r) {
      n.value || (u.value = r === "user-dismissed" ? "cdx-message-leave-active-user" : "cdx-message-leave-active-system", n.value = !0, t(r));
    }
    return de(() => {
      a.value && setTimeout(() => o("auto-dismissed"), a.value);
    }), {
      dismissed: n,
      userDismissable: s,
      rootClasses: i,
      leaveActiveClass: u,
      computedIcon: l,
      onDismiss: o,
      cdxIconClose: lt
    };
  }
});
const Bo = ["aria-live", "role"], Ao = { class: "cdx-message__content" };
function Vo(e, t, n, s, a, i) {
  const l = k("cdx-icon"), u = k("cdx-button");
  return d(), L(Be, {
    name: "cdx-message",
    appear: e.fadeIn,
    "leave-active-class": e.leaveActiveClass
  }, {
    default: E(() => [
      e.dismissed ? C("", !0) : (d(), m("div", {
        key: 0,
        class: K(["cdx-message", e.rootClasses]),
        "aria-live": e.type !== "error" ? "polite" : void 0,
        role: e.type === "error" ? "alert" : void 0
      }, [
        z(l, {
          class: "cdx-message__icon--vue",
          icon: e.computedIcon
        }, null, 8, ["icon"]),
        h("div", Ao, [
          w(e.$slots, "default")
        ]),
        e.userDismissable ? (d(), L(u, {
          key: 0,
          class: "cdx-message__dismiss-button",
          weight: "quiet",
          type: "button",
          "aria-label": e.dismissButtonLabel,
          onClick: t[0] || (t[0] = (o) => e.onDismiss("user-dismissed"))
        }, {
          default: E(() => [
            z(l, {
              icon: e.cdxIconClose,
              "icon-label": e.dismissButtonLabel
            }, null, 8, ["icon", "icon-label"])
          ]),
          _: 1
        }, 8, ["aria-label"])) : C("", !0)
      ], 10, Bo))
    ]),
    _: 3
  }, 8, ["appear", "leave-active-class"]);
}
const El = /* @__PURE__ */ N(To, [["render", Vo]]), Lo = D({
  name: "CdxRadio",
  props: {
    /**
     * Value of the currently selected radio.
     *
     * Provided by `v-model` binding in the parent component.
     */
    modelValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    /**
     * HTML "value" attribute to assign to the input.
     *
     * Required for input groups.
     */
    inputValue: {
      type: [String, Number, Boolean],
      default: !1
    },
    /**
     * HTML "name" attribute to assign to the input.
     *
     * Required for input groups
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * Whether the disabled attribute should be added to the input.
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the component should display inline.
     *
     * By default, `display: block` is set and a margin exists between
     * sibling components, for a stacked layout.
     */
    inline: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    /**
     * Emitted when modelValue changes.
     *
     * @property {string | number | boolean} modelValue The new model value
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = p(() => ({
      "cdx-radio--inline": e.inline
    })), s = f(), a = te("radio"), i = () => {
      s.value.focus();
    }, l = se(G(e, "modelValue"), t);
    return {
      rootClasses: n,
      input: s,
      radioId: a,
      focusInput: i,
      wrappedModel: l
    };
  }
});
const Ko = ["id", "name", "value", "disabled"], Eo = /* @__PURE__ */ h("span", { class: "cdx-radio__icon" }, null, -1), Do = ["for"];
function No(e, t, n, s, a, i) {
  return d(), m("span", {
    class: K(["cdx-radio", e.rootClasses])
  }, [
    ue(h("input", {
      id: e.radioId,
      ref: "input",
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.wrappedModel = l),
      class: "cdx-radio__input",
      type: "radio",
      name: e.name,
      value: e.inputValue,
      disabled: e.disabled
    }, null, 8, Ko), [
      [Ct, e.wrappedModel]
    ]),
    Eo,
    h("label", {
      class: "cdx-radio__label",
      for: e.radioId,
      onClick: t[1] || (t[1] = (...l) => e.focusInput && e.focusInput(...l))
    }, [
      w(e.$slots, "default")
    ], 8, Do)
  ], 2);
}
const Dl = /* @__PURE__ */ N(Lo, [["render", No]]), Ro = ae(Ce), Oo = D({
  name: "CdxSearchInput",
  components: {
    CdxButton: he,
    CdxTextInput: Le
  },
  /**
   * Attributes, besides class, will be passed to the TextInput's input element.
   */
  inheritAttrs: !1,
  props: {
    /**
     * Value of the search input, provided by `v-model` binding in the parent component.
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * Submit button text.
     *
     * If this is provided, a submit button with this label will be added.
     */
    buttonLabel: {
      type: String,
      default: ""
    },
    /**
     * `status` property of the TextInput component
     *
     * @values 'default', 'error'
     */
    status: {
      type: String,
      default: "default",
      validator: Ro
    }
  },
  emits: [
    /**
     * When the input value changes
     *
     * @property {string | number} value The new value
     */
    "update:modelValue",
    /**
     * When the submit button is clicked.
     *
     * @property {string | number} value The current input
     */
    "submit-click"
  ],
  setup(e, { emit: t, attrs: n }) {
    const s = se(G(e, "modelValue"), t), a = p(() => ({
      "cdx-search-input--has-end-button": !!e.buttonLabel
    })), {
      rootClasses: i,
      rootStyle: l,
      otherAttrs: u
    } = pe(n, a);
    return {
      wrappedModel: s,
      rootClasses: i,
      rootStyle: l,
      otherAttrs: u,
      handleSubmit: () => {
        t("submit-click", s.value);
      },
      searchIcon: Zt
    };
  },
  methods: {
    /**
     * Focus the component's input element.
     *
     * @public
     */
    focus() {
      this.$refs.textInput.focus();
    }
  }
});
const qo = { class: "cdx-search-input__input-wrapper" };
function Fo(e, t, n, s, a, i) {
  const l = k("cdx-text-input"), u = k("cdx-button");
  return d(), m("div", {
    class: K(["cdx-search-input", e.rootClasses]),
    style: re(e.rootStyle)
  }, [
    h("div", qo, [
      z(l, J({
        ref: "textInput",
        modelValue: e.wrappedModel,
        "onUpdate:modelValue": t[0] || (t[0] = (o) => e.wrappedModel = o),
        class: "cdx-search-input__text-input",
        "input-type": "search",
        "start-icon": e.searchIcon,
        status: e.status
      }, e.otherAttrs, {
        onKeydown: Y(e.handleSubmit, ["enter"])
      }), null, 16, ["modelValue", "start-icon", "status", "onKeydown"]),
      w(e.$slots, "default")
    ]),
    e.buttonLabel ? (d(), L(u, {
      key: 0,
      class: "cdx-search-input__end-button",
      onClick: e.handleSubmit
    }, {
      default: E(() => [
        ne(H(e.buttonLabel), 1)
      ]),
      _: 1
    }, 8, ["onClick"])) : C("", !0)
  ], 6);
}
const zo = /* @__PURE__ */ N(Oo, [["render", Fo]]), Ne = D({
  name: "CdxSelect",
  components: {
    CdxIcon: Z,
    CdxMenu: Ie
  },
  props: {
    /**
     * Menu items. See the MenuItemData type.
     */
    menuItems: {
      type: Array,
      required: !0
    },
    /**
     * Value of the current selection.
     *
     * Must be bound with `v-model:selected`.
     *
     * The property should be initialized to `null` rather than using a falsy value.
     */
    selected: {
      type: [String, Number, null],
      required: !0
    },
    /**
     * Label to display when no selection has been made.
     */
    defaultLabel: {
      type: String,
      default: ""
    },
    /**
     * Whether the dropdown is disabled.
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Configuration for various menu features. All properties default to false.
     *
     * See the MenuConfig type.
     */
    menuConfig: {
      type: Object,
      default: () => ({})
    },
    /**
     * An icon at the start of the select element
     * displayed when no selection has been made.
     */
    defaultIcon: {
      type: [String, Object],
      default: void 0
    }
  },
  emits: [
    /**
     * When the selection value changes.
     *
     * @property {string | number | null} modelValue The new model value
     */
    "update:selected",
    /**
     * When the user scrolls towards the bottom of the menu.
     *
     * If it is possible to add or load more menu items, then now would be a good moment
     * so that the user can experience infinite scrolling.
     */
    "load-more"
  ],
  setup(e, { emit: t }) {
    const n = f(), s = f(), a = te("select-handle"), i = te("select-menu"), l = f(!1), u = se(G(e, "selected"), t, "update:selected"), o = p(
      () => e.menuItems.find((B) => B.value === e.selected)
    ), r = p(() => o.value ? o.value.label || o.value.value : e.defaultLabel), c = Ke(n), $ = p(() => {
      var B;
      return `${(B = c.value.width) != null ? B : 0}px`;
    }), g = p(() => {
      if (e.defaultIcon && !o.value)
        return e.defaultIcon;
      if (o.value && o.value.icon)
        return o.value.icon;
    }), A = p(() => ({
      "cdx-select-vue--enabled": !e.disabled,
      "cdx-select-vue--disabled": e.disabled,
      "cdx-select-vue--expanded": l.value,
      "cdx-select-vue--value-selected": !!o.value,
      "cdx-select-vue--no-selections": !o.value,
      "cdx-select-vue--has-start-icon": !!g.value
    })), M = p(() => {
      var B, V;
      return (V = (B = s.value) == null ? void 0 : B.getHighlightedMenuItem()) == null ? void 0 : V.id;
    });
    function R() {
      l.value = !1;
    }
    function x() {
      var B;
      e.disabled || (l.value = !l.value, (B = n.value) == null || B.focus());
    }
    function T(B) {
      var V;
      e.disabled || (V = s.value) == null || V.delegateKeyNavigation(B);
    }
    return {
      handle: n,
      handleId: a,
      menu: s,
      menuId: i,
      modelWrapper: u,
      selectedMenuItem: o,
      highlightedId: M,
      expanded: l,
      onBlur: R,
      currentLabel: r,
      currentWidthInPx: $,
      rootClasses: A,
      onClick: x,
      onKeydown: T,
      startIcon: g,
      cdxIconExpand: st
    };
  }
}), Ze = () => {
  Ve((e) => ({
    "79331f78": e.currentWidthInPx
  }));
}, Je = Ne.setup;
Ne.setup = Je ? (e, t) => (Ze(), Je(e, t)) : Ze;
const Ho = ["aria-disabled"], jo = ["aria-owns", "aria-labelledby", "aria-activedescendant", "aria-expanded"], Uo = ["id"];
function Wo(e, t, n, s, a, i) {
  const l = k("cdx-icon"), u = k("cdx-menu");
  return d(), m("div", {
    class: K(["cdx-select-vue", e.rootClasses]),
    "aria-disabled": e.disabled
  }, [
    h("div", {
      ref: "handle",
      class: "cdx-select-vue__handle",
      tabindex: "0",
      role: "combobox",
      "aria-autocomplete": "list",
      "aria-owns": e.menuId,
      "aria-labelledby": e.handleId,
      "aria-activedescendant": e.highlightedId,
      "aria-haspopup": "listbox",
      "aria-expanded": e.expanded,
      onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o)),
      onBlur: t[1] || (t[1] = (...o) => e.onBlur && e.onBlur(...o)),
      onKeydown: t[2] || (t[2] = (...o) => e.onKeydown && e.onKeydown(...o))
    }, [
      h("span", {
        id: e.handleId,
        role: "textbox",
        "aria-readonly": "true"
      }, [
        w(e.$slots, "label", {
          selectedMenuItem: e.selectedMenuItem,
          defaultLabel: e.defaultLabel
        }, () => [
          ne(H(e.currentLabel), 1)
        ])
      ], 8, Uo),
      e.startIcon ? (d(), L(l, {
        key: 0,
        icon: e.startIcon,
        class: "cdx-select-vue__start-icon"
      }, null, 8, ["icon"])) : C("", !0),
      z(l, {
        icon: e.cdxIconExpand,
        class: "cdx-select-vue__indicator"
      }, null, 8, ["icon"])
    ], 40, jo),
    z(u, J({
      id: e.menuId,
      ref: "menu",
      selected: e.modelWrapper,
      "onUpdate:selected": t[3] || (t[3] = (o) => e.modelWrapper = o),
      expanded: e.expanded,
      "onUpdate:expanded": t[4] || (t[4] = (o) => e.expanded = o),
      "menu-items": e.menuItems
    }, e.menuConfig, {
      onLoadMore: t[5] || (t[5] = (o) => e.$emit("load-more"))
    }), {
      default: E(({ menuItem: o }) => [
        w(e.$slots, "menu-item", { menuItem: o })
      ]),
      _: 3
    }, 16, ["id", "selected", "expanded", "menu-items"])
  ], 10, Ho);
}
const Nl = /* @__PURE__ */ N(Ne, [["render", Wo]]), Po = D({
  name: "CdxTab",
  /**
   * The "label" and "disabled" props are referenced by the parent Tabs
   * component during the generation of a list of labels.
   */
  props: {
    /**
     * String name of the tab, used for programmatic selection. Each Tab
     * inside a layout must have a unique name. This prop will also be
     * used as the tab label if no "label" prop is provided.
     */
    name: {
      type: String,
      required: !0
    },
    /**
     * Label that corresponds to this Tab in the Tabs component's header.
     * Lengthy labels will be truncated.
     */
    // eslint-disable-next-line vue/no-unused-properties
    label: {
      type: String,
      default: ""
    },
    /**
     * Whether or not the tab is disabled. Disabled tabs cannot be accessed
     * via label clicks or keyboard navigation.
     */
    // eslint-disable-next-line vue/no-unused-properties
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = je(tt), n = je(nt);
    if (!t || !n)
      throw new Error("Tab component must be used inside a Tabs component");
    const s = t.value.get(e.name) || {}, a = p(() => e.name === n.value);
    return {
      tab: s,
      isActive: a
    };
  }
});
const Qo = ["id", "aria-hidden", "aria-labelledby"];
function Go(e, t, n, s, a, i) {
  return ue((d(), m("section", {
    id: e.tab.id,
    "aria-hidden": !e.isActive,
    "aria-labelledby": `${e.tab.id}-label`,
    class: "cdx-tab",
    role: "tabpanel",
    tabindex: "-1"
  }, [
    w(e.$slots, "default")
  ], 8, Qo)), [
    [$e, e.isActive]
  ]);
}
const Rl = /* @__PURE__ */ N(Po, [["render", Go]]), Zo = D({
  name: "CdxTabs",
  components: {
    CdxButton: he,
    CdxIcon: Z
  },
  props: {
    /**
     * The `name` of the currently active Tab in the layout.
     *
     * Provided by `v-model:active` binding in the parent component.
     */
    active: {
      type: String,
      required: !0
    },
    /**
     * Whether or not the component should be displayed in a framed
     * visual style.
     */
    framed: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    /**
     * Emitted whenever the active tab changes
     *
     * @property {string} active The `name` of the current active tab
     */
    "update:active"
  ],
  /**
   * Some methods are exposed to allow for programmatic selection of
   * the active tab from outside of the component.
   */
  expose: [
    "select",
    "next",
    "prev"
  ],
  setup(e, { slots: t, emit: n }) {
    const s = f(), a = f(), i = f(), l = f(), u = f(), o = ut(s), r = p(() => {
      var F;
      const I = [], y = (F = t.default) == null ? void 0 : F.call(t);
      y && y.forEach(v);
      function v(O) {
        O && typeof O == "object" && "type" in O && (typeof O.type == "object" && "name" in O.type && O.type.name === "CdxTab" ? I.push(O) : "children" in O && Array.isArray(O.children) && O.children.forEach(v));
      }
      return I;
    });
    if (!r.value || r.value.length === 0)
      throw new Error("Slot content cannot be empty");
    const c = p(() => r.value.reduce((I, y) => {
      var v;
      if ((v = y.props) != null && v.name && typeof y.props.name == "string") {
        if (I.get(y.props.name))
          throw new Error("Tab names must be unique");
        I.set(y.props.name, {
          name: y.props.name,
          id: te(y.props.name),
          label: y.props.label || y.props.name,
          disabled: y.props.disabled
        });
      }
      return I;
    }, /* @__PURE__ */ new Map())), $ = se(G(e, "active"), n, "update:active"), g = p(() => Array.from(c.value.keys())), A = p(() => g.value.indexOf($.value)), M = p(() => {
      var I;
      return (I = c.value.get($.value)) == null ? void 0 : I.id;
    });
    Ue(nt, $), Ue(tt, c);
    const R = f(), x = f(), T = Te(R, { threshold: 0.95 }), B = Te(x, { threshold: 0.95 });
    function V(I, y) {
      const v = I;
      v && (y === 0 ? R.value = v : y === g.value.length - 1 && (x.value = v));
    }
    const oe = p(() => ({
      "cdx-tabs--framed": e.framed,
      "cdx-tabs--quiet": !e.framed
    }));
    function U(I) {
      if (!a.value || !l.value || !u.value)
        return 0;
      const y = o.value === "rtl" ? u.value : l.value, v = o.value === "rtl" ? l.value : u.value, F = I.offsetLeft, O = F + I.clientWidth, W = a.value.scrollLeft + y.clientWidth, ce = a.value.scrollLeft + a.value.clientWidth - v.clientWidth;
      return F < W ? F - W : O > ce ? O - ce : 0;
    }
    function Q(I) {
      var O;
      if (!a.value || !l.value || !u.value)
        return;
      const y = I === "next" && o.value === "ltr" || I === "prev" && o.value === "rtl" ? 1 : -1;
      let v = 0, F = I === "next" ? a.value.firstElementChild : a.value.lastElementChild;
      for (; F; ) {
        const W = I === "next" ? F.nextElementSibling : F.previousElementSibling;
        if (v = U(F), Math.sign(v) === y) {
          W && Math.abs(v) < 0.25 * a.value.clientWidth && (v = U(W));
          break;
        }
        F = W;
      }
      a.value.scrollBy({
        left: v,
        behavior: "smooth"
      }), (O = i.value) == null || O.focus();
    }
    return ee($, () => {
      if (M.value === void 0 || !a.value || !l.value || !u.value)
        return;
      const I = document.getElementById(`${M.value}-label`);
      I && a.value.scrollBy({
        left: U(I),
        behavior: "smooth"
      });
    }), {
      activeTab: $,
      activeTabIndex: A,
      activeTabId: M,
      currentDirection: o,
      rootElement: s,
      listElement: a,
      focusHolder: i,
      prevScroller: l,
      nextScroller: u,
      rootClasses: oe,
      tabNames: g,
      tabsData: c,
      firstLabelVisible: T,
      lastLabelVisible: B,
      assignTemplateRefIfNecessary: V,
      scrollTabs: Q,
      cdxIconPrevious: Gt,
      cdxIconNext: Qt
    };
  },
  /**
   * Some non-public methods are defined here rather than in setup because
   * they support public methods (which *must* be defined using the Options
   * API in order to show up in documentation), or are thematically related
   * (such as key handlers).
   */
  methods: {
    /**
     * Programmatically select a tab based on its "name" prop
     *
     * @param {string} tabName The name of the tab to select
     * @public
     */
    select(e) {
      const t = this.tabsData.get(e);
      t && !(t != null && t.disabled) && (this.activeTab = e);
    },
    /**
     * Used to select next or previous tab in the sequence, skipping
     * over any tabs that are disabled. The provided increment should
     * be either 1 (to move forward) or -1 (to move backwards)
     *
     * @param index
     * @param increment
     */
    selectNonDisabled(e, t) {
      const n = this.tabsData.get(this.tabNames[e + t]);
      n && (n.disabled ? this.selectNonDisabled(e + t, t) : this.select(n.name));
    },
    /**
     * Set the next tab to active, if one exists
     *
     * @public
     */
    next() {
      this.selectNonDisabled(this.activeTabIndex, 1);
    },
    /**
     * Set the previous tab to active, if one exists
     *
     * @public
     */
    prev() {
      this.selectNonDisabled(this.activeTabIndex, -1);
    },
    /**
     * Handle left arrow key navigation (based on LTR/RTL direction)
     */
    onLeftArrowKeypress() {
      this.currentDirection === "rtl" ? this.next() : this.prev();
    },
    /**
     * Handle right arrow key navigation (based on LTR/RTL direction)
     */
    onRightArrowKeypress() {
      this.currentDirection === "rtl" ? this.prev() : this.next();
    },
    /**
     * Handle down arrow key navigation by moving focus to the contents
     * of the currently active tab
     */
    onDownArrowKeypress() {
      var e;
      this.activeTabId && ((e = document.getElementById(this.activeTabId)) == null || e.focus());
    }
  }
});
const Jo = {
  ref: "focusHolder",
  tabindex: "-1"
}, Xo = {
  ref: "prevScroller",
  class: "cdx-tabs__prev-scroller"
}, Yo = ["aria-activedescendant"], el = ["id"], tl = ["href", "aria-disabled", "aria-selected", "onClick", "onKeyup"], nl = {
  ref: "nextScroller",
  class: "cdx-tabs__next-scroller"
}, ol = { class: "cdx-tabs__content" };
function ll(e, t, n, s, a, i) {
  const l = k("cdx-icon"), u = k("cdx-button");
  return d(), m("div", {
    ref: "rootElement",
    class: K(["cdx-tabs", e.rootClasses])
  }, [
    h("div", {
      class: "cdx-tabs__header",
      tabindex: "0",
      onKeydown: [
        t[4] || (t[4] = Y(X((...o) => e.onRightArrowKeypress && e.onRightArrowKeypress(...o), ["prevent"]), ["right"])),
        t[5] || (t[5] = Y(X((...o) => e.onDownArrowKeypress && e.onDownArrowKeypress(...o), ["prevent"]), ["down"])),
        t[6] || (t[6] = Y(X((...o) => e.onLeftArrowKeypress && e.onLeftArrowKeypress(...o), ["prevent"]), ["left"]))
      ]
    }, [
      h("div", Jo, null, 512),
      ue(h("div", Xo, [
        z(u, {
          class: "cdx-tabs__scroll-button",
          weight: "quiet",
          type: "button",
          tabindex: "-1",
          "aria-hidden": !0,
          onMousedown: t[0] || (t[0] = X(() => {
          }, ["prevent"])),
          onClick: t[1] || (t[1] = (o) => e.scrollTabs("prev"))
        }, {
          default: E(() => [
            z(l, { icon: e.cdxIconPrevious }, null, 8, ["icon"])
          ]),
          _: 1
        })
      ], 512), [
        [$e, !e.firstLabelVisible]
      ]),
      h("ul", {
        ref: "listElement",
        class: "cdx-tabs__list",
        role: "tablist",
        "aria-activedescendant": e.activeTabId
      }, [
        (d(!0), m(me, null, _e(e.tabsData.values(), (o, r) => (d(), m("li", {
          id: `${o.id}-label`,
          key: r,
          ref_for: !0,
          ref: (c) => e.assignTemplateRefIfNecessary(c, r),
          class: "cdx-tabs__list__item",
          role: "presentation"
        }, [
          h("a", {
            href: `#${o.id}`,
            role: "tab",
            tabIndex: "-1",
            "aria-disabled": o.disabled,
            "aria-selected": o.name === e.activeTab,
            onClick: X((c) => e.select(o.name), ["prevent"]),
            onKeyup: Y((c) => e.select(o.name), ["enter"])
          }, H(o.label), 41, tl)
        ], 8, el))), 128))
      ], 8, Yo),
      ue(h("div", nl, [
        z(u, {
          class: "cdx-tabs__scroll-button",
          weight: "quiet",
          type: "button",
          tabindex: "-1",
          "aria-hidden": !0,
          onMousedown: t[2] || (t[2] = X(() => {
          }, ["prevent"])),
          onClick: t[3] || (t[3] = (o) => e.scrollTabs("next"))
        }, {
          default: E(() => [
            z(l, { icon: e.cdxIconNext }, null, 8, ["icon"])
          ]),
          _: 1
        })
      ], 512), [
        [$e, !e.lastLabelVisible]
      ])
    ], 32),
    h("div", ol, [
      w(e.$slots, "default")
    ])
  ], 2);
}
const Ol = /* @__PURE__ */ N(Zo, [["render", ll]]), al = D({
  name: "CdxToggleButton",
  props: {
    /**
     * Whether the button should be set to "on" (true) or "off" (false).
     *
     * Provided by `v-model` binding in the parent component.
     */
    modelValue: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the disabled attribute should be added to the button, which prevents
     * it from being clicked.
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the toggle button should be "quiet", which renders more minimally.
     */
    quiet: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    /**
     * Emitted when modelValue changes (i.e. when the state is toggled)
     *
     * @property {boolean} modelValue The new model value
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = f(!1);
    return {
      rootClasses: p(() => ({
        // Quiet means frameless among other things
        "cdx-toggle-button--quiet": e.quiet,
        "cdx-toggle-button--framed": !e.quiet,
        // Provide --toggled-off too so that we can simplify selectors
        "cdx-toggle-button--toggled-on": e.modelValue,
        "cdx-toggle-button--toggled-off": !e.modelValue,
        "cdx-toggle-button--is-active": n.value
      })),
      onClick: () => {
        t("update:modelValue", !e.modelValue);
      },
      setActive: (l) => {
        n.value = l;
      }
    };
  }
});
const sl = ["aria-pressed", "disabled"];
function il(e, t, n, s, a, i) {
  return d(), m("button", {
    class: K(["cdx-toggle-button", e.rootClasses]),
    "aria-pressed": e.modelValue,
    disabled: e.disabled,
    onClick: t[0] || (t[0] = (...l) => e.onClick && e.onClick(...l)),
    onKeydown: t[1] || (t[1] = Y((l) => e.setActive(!0), ["space", "enter"])),
    onKeyup: t[2] || (t[2] = Y((l) => e.setActive(!1), ["space", "enter"]))
  }, [
    w(e.$slots, "default")
  ], 42, sl);
}
const ul = /* @__PURE__ */ N(al, [["render", il]]), dl = D({
  name: "CdxToggleButtonGroup",
  components: {
    CdxIcon: Z,
    CdxToggleButton: ul
  },
  props: {
    /**
     * Buttons to display. See the ButtonGroupItem type.
     */
    buttons: {
      type: Array,
      required: !0,
      validator: (e) => Array.isArray(e) && e.length >= 1
    },
    /**
     * Selected value, or array of selected values.
     *
     * If this is a string or number, the button whose value equals that string or number is
     * selected, and only a single selection is allowed. If this is an array, the buttons whose
     * values equal any of the values in the array are selected, and multiple selections are
     * allowed. To select none of the buttons initially, set this to `null`
     * (for single-selection groups) or to `[]` (for multi-selection groups).
     *
     * Must be bound with `v-model`.
     */
    modelValue: {
      type: [String, Number, null, Array],
      required: !0
    },
    /**
     * Whether the entire group is disabled.
     *
     * If this is set to true, all buttons in the group are disabled. Buttons can also be
     * disabled individually by setting their `disabled` property to true.
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    /**
     * Emitted when modelValue changes.
     *
     * @property {string | number | ( string | number )[]} modelValue The new model value
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    function n(a) {
      return Array.isArray(e.modelValue) ? e.modelValue.indexOf(a.value) !== -1 : e.modelValue !== null ? e.modelValue === a.value : !1;
    }
    function s(a, i) {
      if (Array.isArray(e.modelValue)) {
        const l = e.modelValue.indexOf(a.value) !== -1;
        i && !l ? t("update:modelValue", e.modelValue.concat(a.value)) : !i && l && t("update:modelValue", e.modelValue.filter((u) => u !== a.value));
      } else
        i && e.modelValue !== a.value && t("update:modelValue", a.value);
    }
    return {
      getButtonLabel: dt,
      isSelected: n,
      onUpdate: s
    };
  }
});
const rl = { class: "cdx-toggle-button-group" };
function cl(e, t, n, s, a, i) {
  const l = k("cdx-icon"), u = k("cdx-toggle-button");
  return d(), m("div", rl, [
    (d(!0), m(me, null, _e(e.buttons, (o) => (d(), L(u, {
      key: o.value,
      "model-value": e.isSelected(o),
      disabled: o.disabled || e.disabled,
      "aria-label": o.ariaLabel,
      "onUpdate:modelValue": (r) => e.onUpdate(o, r)
    }, {
      default: E(() => [
        w(e.$slots, "default", {
          button: o,
          selected: e.isSelected(o)
        }, () => [
          o.icon ? (d(), L(l, {
            key: 0,
            icon: o.icon
          }, null, 8, ["icon"])) : C("", !0),
          ne(" " + H(e.getButtonLabel(o)), 1)
        ])
      ]),
      _: 2
    }, 1032, ["model-value", "disabled", "aria-label", "onUpdate:modelValue"]))), 128))
  ]);
}
const ql = /* @__PURE__ */ N(dl, [["render", cl]]), pl = D({
  name: "CdxToggleSwitch",
  /**
   * The input element will inherit attributes, not the root element.
   */
  inheritAttrs: !1,
  props: {
    /**
     * Current value of the toggle switch.
     *
     * Provided by `v-model` in a parent component.
     */
    modelValue: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the disabled attribute should be added to the input.
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    /**
     * Emitted when modelValue changes.
     *
     * @property {boolean} modelValue The new model value
     */
    "update:modelValue"
  ],
  setup(e, { attrs: t, emit: n }) {
    const s = f(), a = te("toggle-switch"), {
      rootClasses: i,
      rootStyle: l,
      otherAttrs: u
    } = pe(t), o = se(G(e, "modelValue"), n);
    return {
      input: s,
      inputId: a,
      rootClasses: i,
      rootStyle: l,
      otherAttrs: u,
      wrappedModel: o,
      clickInput: () => {
        s.value.click();
      }
    };
  }
});
const fl = ["id", "disabled"], ml = ["for"], hl = /* @__PURE__ */ h("span", { class: "cdx-toggle-switch__switch" }, [
  /* @__PURE__ */ h("span", { class: "cdx-toggle-switch__switch__grip" })
], -1);
function vl(e, t, n, s, a, i) {
  return d(), m("span", {
    class: K(["cdx-toggle-switch", e.rootClasses]),
    style: re(e.rootStyle)
  }, [
    ue(h("input", J({
      id: e.inputId,
      ref: "input",
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.wrappedModel = l),
      class: "cdx-toggle-switch__input",
      type: "checkbox",
      disabled: e.disabled
    }, e.otherAttrs, {
      onKeydown: t[1] || (t[1] = Y(X((...l) => e.clickInput && e.clickInput(...l), ["prevent"]), ["enter"]))
    }), null, 16, fl), [
      [Ye, e.wrappedModel]
    ]),
    e.$slots.default ? (d(), m("label", {
      key: 0,
      for: e.inputId,
      class: "cdx-toggle-switch__label"
    }, [
      w(e.$slots, "default")
    ], 8, ml)) : C("", !0),
    hl
  ], 6);
}
const Fl = /* @__PURE__ */ N(pl, [["render", vl]]), bl = D({
  name: "CdxTypeaheadSearch",
  components: {
    CdxIcon: Z,
    CdxMenu: Ie,
    CdxSearchInput: zo
  },
  /**
   * Attributes, besides class, will be passed to the TextInput's input element.
   */
  inheritAttrs: !1,
  props: {
    /**
     * ID attribute for the form.
     */
    id: {
      type: String,
      required: !0
    },
    /**
     * Action attribute for form.
     */
    formAction: {
      type: String,
      required: !0
    },
    /**
     * Label attribute for the list of search results.
     */
    searchResultsLabel: {
      type: String,
      required: !0
    },
    /**
     * List of search results. See the SearchResult type.
     */
    searchResults: {
      type: Array,
      required: !0
    },
    /**
     * Label for the submit button.
     *
     * If no label is provided, the submit button will not be displayed.
     */
    buttonLabel: {
      type: String,
      default: ""
    },
    /**
     * Initial value for the text input.
     *
     * Triggers an initial `input` event on mount.
     */
    initialInputValue: {
      type: String,
      default: ""
    },
    /**
     * Link for the final menu item.
     *
     * This will typically be a link to the search page for the current search query.
     */
    searchFooterUrl: {
      type: String,
      default: ""
    },
    /**
     * Time interval for debouncing input events, in ms.
     */
    debounceInterval: {
      type: Number,
      default: Tt
    },
    /**
     * Whether the search query should be highlighted within a search result's title.
     */
    highlightQuery: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to show search results' thumbnails (or a placeholder icon).
     */
    showThumbnail: {
      type: Boolean,
      default: !1
    },
    /**
     * Contract the width of the input when unfocused and expand the width of
     * the input when focused to accommodate the extra width of the thumbnails.
     *
     * This prop is ignored if showThumbnail is false.
     */
    autoExpandWidth: {
      type: Boolean,
      default: !1
    },
    /**
     * Limit the number of menu items to display before scrolling.
     *
     * Setting this prop to anything falsy will show all menu items.
     *
     * By default, all menu items are shown.
     */
    visibleItemLimit: {
      type: Number,
      default: null
    }
  },
  emits: [
    /**
     * When the text input value changes. Debounced by default.
     *
     * @property {string} value The new input value
     */
    "input",
    /**
     * When a search result is selected.
     *
     * @property {SearchResultClickEvent} event Data for the selected result
     */
    "search-result-click",
    /**
     * When the form is submitted.
     *
     * @property {SearchResultClickEvent} event Data for the selected result
     */
    "submit",
    /**
     * When the user scrolls towards the bottom of the menu.
     *
     * If it is possible to add or load more menu items, then now would be a good moment
     * so that the user can experience infinite scrolling.
     */
    "load-more"
  ],
  setup(e, { attrs: t, emit: n, slots: s }) {
    const { searchResults: a, searchFooterUrl: i, debounceInterval: l } = It(e), u = f(), o = f(), r = te("typeahead-search-menu"), c = f(!1), $ = f(!1), g = f(!1), A = f(!1), M = f(e.initialInputValue), R = f(""), x = p(() => {
      var _, P;
      return (P = (_ = o.value) == null ? void 0 : _.getHighlightedMenuItem()) == null ? void 0 : P.id;
    }), T = f(null), B = p(() => ({
      "cdx-typeahead-search__menu-message--has-thumbnail": e.showThumbnail
    })), V = p(
      () => e.searchResults.find(
        (_) => _.value === T.value
      )
    ), oe = p(
      () => i.value ? { value: fe, url: i.value } : void 0
    ), U = p(() => ({
      "cdx-typeahead-search--show-thumbnail": e.showThumbnail,
      "cdx-typeahead-search--expanded": c.value,
      "cdx-typeahead-search--auto-expand-width": e.showThumbnail && e.autoExpandWidth
    })), {
      rootClasses: Q,
      rootStyle: I,
      otherAttrs: y
    } = pe(t, U);
    function v(_) {
      return _;
    }
    const F = p(() => ({
      visibleItemLimit: e.visibleItemLimit,
      showThumbnail: e.showThumbnail,
      // In case search queries aren't highlighted, default to a bold label.
      boldLabel: !0,
      hideDescriptionOverflow: !0
    }));
    let O, W;
    function ce(_, P = !1) {
      V.value && V.value.label !== _ && V.value.value !== _ && (T.value = null), W !== void 0 && (clearTimeout(W), W = void 0), _ === "" ? c.value = !1 : ($.value = !0, s["search-results-pending"] && (W = setTimeout(() => {
        A.value && (c.value = !0), g.value = !0;
      }, Bt))), O !== void 0 && (clearTimeout(O), O = void 0);
      const le = () => {
        n("input", _);
      };
      P ? le() : O = setTimeout(() => {
        le();
      }, l.value);
    }
    function we(_) {
      if (_ === fe) {
        T.value = null, M.value = R.value;
        return;
      }
      T.value = _, _ !== null && (M.value = V.value ? V.value.label || String(V.value.value) : "");
    }
    function b() {
      A.value = !0, (R.value || g.value) && (c.value = !0);
    }
    function S() {
      A.value = !1, c.value = !1;
    }
    function q(_) {
      const Re = _, { id: P } = Re, le = ye(Re, ["id"]);
      if (le.value === fe) {
        n("search-result-click", {
          searchResult: null,
          index: a.value.length,
          numberOfResults: a.value.length
        });
        return;
      }
      j(le);
    }
    function j(_) {
      const P = {
        searchResult: _,
        index: a.value.findIndex(
          (le) => le.value === _.value
        ),
        numberOfResults: a.value.length
      };
      n("search-result-click", P);
    }
    function ve(_) {
      if (_.value === fe) {
        M.value = R.value;
        return;
      }
      M.value = _.value ? _.label || String(_.value) : "";
    }
    function ie(_) {
      var P;
      c.value = !1, (P = o.value) == null || P.clearActive(), q(_);
    }
    function ft(_) {
      if (V.value)
        j(V.value), _.stopPropagation(), window.location.assign(V.value.url), _.preventDefault();
      else {
        const P = {
          searchResult: null,
          index: -1,
          numberOfResults: a.value.length
        };
        n("submit", P);
      }
    }
    function mt(_) {
      if (!o.value || !R.value || _.key === " ")
        return;
      const P = o.value.getHighlightedMenuItem(), le = o.value.getHighlightedViaKeyboard();
      switch (_.key) {
        case "Enter":
          P && (P.value === fe && le ? window.location.assign(i.value) : o.value.delegateKeyNavigation(_, !1)), c.value = !1;
          break;
        case "Tab":
          c.value = !1;
          break;
        default:
          o.value.delegateKeyNavigation(_);
          break;
      }
    }
    return de(() => {
      e.initialInputValue && ce(e.initialInputValue, !0);
    }), ee(G(e, "searchResults"), () => {
      R.value = M.value.trim(), A.value && $.value && R.value.length > 0 && (c.value = !0), W !== void 0 && (clearTimeout(W), W = void 0), $.value = !1, g.value = !1;
    }), {
      form: u,
      menu: o,
      menuId: r,
      highlightedId: x,
      selection: T,
      menuMessageClass: B,
      footer: oe,
      asSearchResult: v,
      inputValue: M,
      searchQuery: R,
      expanded: c,
      showPending: g,
      rootClasses: Q,
      rootStyle: I,
      otherAttrs: y,
      menuConfig: F,
      onUpdateInputValue: ce,
      onUpdateMenuSelection: we,
      onFocus: b,
      onBlur: S,
      onSearchResultClick: q,
      onSearchResultKeyboardNavigation: ve,
      onSearchFooterClick: ie,
      onSubmit: ft,
      onKeydown: mt,
      MenuFooterValue: fe,
      articleIcon: jt
    };
  },
  methods: {
    /**
     * Focus the component's input element.
     *
     * @public
     */
    focus() {
      this.$refs.searchInput.focus();
    }
  }
});
const gl = ["id", "action"], yl = { class: "cdx-typeahead-search__menu-message__text" }, $l = { class: "cdx-typeahead-search__menu-message__text" }, _l = ["href", "onClickCapture"], Cl = { class: "cdx-typeahead-search__search-footer__text" }, Il = { class: "cdx-typeahead-search__search-footer__query" };
function wl(e, t, n, s, a, i) {
  const l = k("cdx-icon"), u = k("cdx-menu"), o = k("cdx-search-input");
  return d(), m("div", {
    class: K(["cdx-typeahead-search", e.rootClasses]),
    style: re(e.rootStyle)
  }, [
    h("form", {
      id: e.id,
      ref: "form",
      class: "cdx-typeahead-search__form",
      action: e.formAction,
      onSubmit: t[4] || (t[4] = (...r) => e.onSubmit && e.onSubmit(...r))
    }, [
      z(o, J({
        ref: "searchInput",
        modelValue: e.inputValue,
        "onUpdate:modelValue": t[3] || (t[3] = (r) => e.inputValue = r),
        "button-label": e.buttonLabel
      }, e.otherAttrs, {
        class: "cdx-typeahead-search__input",
        name: "search",
        role: "combobox",
        autocomplete: "off",
        "aria-autocomplete": "list",
        "aria-owns": e.menuId,
        "aria-expanded": e.expanded,
        "aria-activedescendant": e.highlightedId,
        "onUpdate:modelValue": e.onUpdateInputValue,
        onFocus: e.onFocus,
        onBlur: e.onBlur,
        onKeydown: e.onKeydown
      }), {
        default: E(() => [
          z(u, J({
            id: e.menuId,
            ref: "menu",
            expanded: e.expanded,
            "onUpdate:expanded": t[0] || (t[0] = (r) => e.expanded = r),
            "show-pending": e.showPending,
            selected: e.selection,
            "menu-items": e.searchResults,
            footer: e.footer,
            "search-query": e.highlightQuery ? e.searchQuery : "",
            "show-no-results-slot": e.searchQuery.length > 0 && e.searchResults.length === 0 && e.$slots["search-no-results-text"] && e.$slots["search-no-results-text"]().length > 0
          }, e.menuConfig, {
            "aria-label": e.searchResultsLabel,
            "onUpdate:selected": e.onUpdateMenuSelection,
            onMenuItemClick: t[1] || (t[1] = (r) => e.onSearchResultClick(e.asSearchResult(r))),
            onMenuItemKeyboardNavigation: e.onSearchResultKeyboardNavigation,
            onLoadMore: t[2] || (t[2] = (r) => e.$emit("load-more"))
          }), {
            pending: E(() => [
              h("div", {
                class: K(["cdx-typeahead-search__menu-message", e.menuMessageClass])
              }, [
                h("span", yl, [
                  w(e.$slots, "search-results-pending")
                ])
              ], 2)
            ]),
            "no-results": E(() => [
              h("div", {
                class: K(["cdx-typeahead-search__menu-message", e.menuMessageClass])
              }, [
                h("span", $l, [
                  w(e.$slots, "search-no-results-text")
                ])
              ], 2)
            ]),
            default: E(({ menuItem: r, active: c }) => [
              r.value === e.MenuFooterValue ? (d(), m("a", {
                key: 0,
                class: K(["cdx-typeahead-search__search-footer", {
                  "cdx-typeahead-search__search-footer__active": c
                }]),
                href: e.asSearchResult(r).url,
                onClickCapture: X(($) => e.onSearchFooterClick(e.asSearchResult(r)), ["stop"])
              }, [
                z(l, {
                  class: "cdx-typeahead-search__search-footer__icon",
                  icon: e.articleIcon
                }, null, 8, ["icon"]),
                h("span", Cl, [
                  w(e.$slots, "search-footer-text", { searchQuery: e.searchQuery }, () => [
                    h("strong", Il, H(e.searchQuery), 1)
                  ])
                ])
              ], 42, _l)) : C("", !0)
            ]),
            _: 3
          }, 16, ["id", "expanded", "show-pending", "selected", "menu-items", "footer", "search-query", "show-no-results-slot", "aria-label", "onUpdate:selected", "onMenuItemKeyboardNavigation"])
        ]),
        _: 3
      }, 16, ["modelValue", "button-label", "aria-owns", "aria-expanded", "aria-activedescendant", "onUpdate:modelValue", "onFocus", "onBlur", "onKeydown"]),
      w(e.$slots, "default")
    ], 40, gl)
  ], 6);
}
const zl = /* @__PURE__ */ N(bl, [["render", wl]]);
export {
  he as CdxButton,
  Sl as CdxButtonGroup,
  Ml as CdxCard,
  Tl as CdxCheckbox,
  Vl as CdxCombobox,
  Ll as CdxDialog,
  Z as CdxIcon,
  Bl as CdxInfoChip,
  Kl as CdxLookup,
  Ie as CdxMenu,
  Jn as CdxMenuItem,
  El as CdxMessage,
  oo as CdxProgressBar,
  Dl as CdxRadio,
  zo as CdxSearchInput,
  zn as CdxSearchResultTitle,
  Nl as CdxSelect,
  Rl as CdxTab,
  Ol as CdxTabs,
  Le as CdxTextInput,
  rt as CdxThumbnail,
  ul as CdxToggleButton,
  ql as CdxToggleButtonGroup,
  Fl as CdxToggleSwitch,
  zl as CdxTypeaheadSearch,
  Al as stringHelpers,
  ut as useComputedDirection,
  Yt as useComputedLanguage,
  te as useGeneratedId,
  Te as useIntersectionObserver,
  se as useModelWrapper,
  Ke as useResizeObserver,
  pe as useSplitAttributes
};
