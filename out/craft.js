(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
  var require_bootstrap_bundle_min = __commonJS({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
      }(exports, function() {
        "use strict";
        const t = /* @__PURE__ */ new Map(), e = { set(e2, i2, n2) {
          t.has(e2) || t.set(e2, /* @__PURE__ */ new Map());
          const s2 = t.get(e2);
          s2.has(i2) || 0 === s2.size ? s2.set(i2, n2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s2.keys())[0]}.`);
        }, get: (e2, i2) => t.has(e2) && t.get(e2).get(i2) || null, remove(e2, i2) {
          if (!t.has(e2))
            return;
          const n2 = t.get(e2);
          n2.delete(i2), 0 === n2.size && t.delete(e2);
        } }, i = "transitionend", n = /* @__PURE__ */ __name((t2) => (t2 && window.CSS && window.CSS.escape && (t2 = t2.replace(/#([^\s"#']+)/g, (t3, e2) => `#${CSS.escape(e2)}`)), t2), "n"), s = /* @__PURE__ */ __name((t2) => {
          t2.dispatchEvent(new Event(i));
        }, "s"), o = /* @__PURE__ */ __name((t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), "o"), r = /* @__PURE__ */ __name((t2) => o(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(n(t2)) : null, "r"), a = /* @__PURE__ */ __name((t2) => {
          if (!o(t2) || 0 === t2.getClientRects().length)
            return false;
          const e2 = "visible" === getComputedStyle(t2).getPropertyValue("visibility"), i2 = t2.closest("details:not([open])");
          if (!i2)
            return e2;
          if (i2 !== t2) {
            const e3 = t2.closest("summary");
            if (e3 && e3.parentNode !== i2)
              return false;
            if (null === e3)
              return false;
          }
          return e2;
        }, "a"), l = /* @__PURE__ */ __name((t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), "l"), c = /* @__PURE__ */ __name((t2) => {
          if (!document.documentElement.attachShadow)
            return null;
          if ("function" == typeof t2.getRootNode) {
            const e2 = t2.getRootNode();
            return e2 instanceof ShadowRoot ? e2 : null;
          }
          return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? c(t2.parentNode) : null;
        }, "c"), h = /* @__PURE__ */ __name(() => {
        }, "h"), d = /* @__PURE__ */ __name((t2) => {
          t2.offsetHeight;
        }, "d"), u = /* @__PURE__ */ __name(() => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, "u"), f = [], p = /* @__PURE__ */ __name(() => "rtl" === document.documentElement.dir, "p"), m = /* @__PURE__ */ __name((t2) => {
          var e2;
          e2 = /* @__PURE__ */ __name(() => {
            const e3 = u();
            if (e3) {
              const i2 = t2.NAME, n2 = e3.fn[i2];
              e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n2, t2.jQueryInterface);
            }
          }, "e"), "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", () => {
            for (const t3 of f)
              t3();
          }), f.push(e2)) : e2();
        }, "m"), g = /* @__PURE__ */ __name((t2, e2 = [], i2 = t2) => "function" == typeof t2 ? t2(...e2) : i2, "g"), _ = /* @__PURE__ */ __name((t2, e2, n2 = true) => {
          if (!n2)
            return void g(t2);
          const o2 = ((t3) => {
            if (!t3)
              return 0;
            let { transitionDuration: e3, transitionDelay: i2 } = window.getComputedStyle(t3);
            const n3 = Number.parseFloat(e3), s2 = Number.parseFloat(i2);
            return n3 || s2 ? (e3 = e3.split(",")[0], i2 = i2.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i2))) : 0;
          })(e2) + 5;
          let r2 = false;
          const a2 = /* @__PURE__ */ __name(({ target: n3 }) => {
            n3 === e2 && (r2 = true, e2.removeEventListener(i, a2), g(t2));
          }, "a");
          e2.addEventListener(i, a2), setTimeout(() => {
            r2 || s(e2);
          }, o2);
        }, "_"), b = /* @__PURE__ */ __name((t2, e2, i2, n2) => {
          const s2 = t2.length;
          let o2 = t2.indexOf(e2);
          return -1 === o2 ? !i2 && n2 ? t2[s2 - 1] : t2[0] : (o2 += i2 ? 1 : -1, n2 && (o2 = (o2 + s2) % s2), t2[Math.max(0, Math.min(o2, s2 - 1))]);
        }, "b"), v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, A = {};
        let E = 1;
        const T = { mouseenter: "mouseover", mouseleave: "mouseout" }, C = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function O(t2, e2) {
          return e2 && `${e2}::${E++}` || t2.uidEvent || E++;
        }
        __name(O, "O");
        function x(t2) {
          const e2 = O(t2);
          return t2.uidEvent = e2, A[e2] = A[e2] || {}, A[e2];
        }
        __name(x, "x");
        function k(t2, e2, i2 = null) {
          return Object.values(t2).find((t3) => t3.callable === e2 && t3.delegationSelector === i2);
        }
        __name(k, "k");
        function L(t2, e2, i2) {
          const n2 = "string" == typeof e2, s2 = n2 ? i2 : e2 || i2;
          let o2 = I(t2);
          return C.has(o2) || (o2 = t2), [n2, s2, o2];
        }
        __name(L, "L");
        function S(t2, e2, i2, n2, s2) {
          if ("string" != typeof e2 || !t2)
            return;
          let [o2, r2, a2] = L(e2, i2, n2);
          if (e2 in T) {
            const t3 = /* @__PURE__ */ __name((t4) => function(e3) {
              if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget))
                return t4.call(this, e3);
            }, "t");
            r2 = t3(r2);
          }
          const l2 = x(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = k(c2, r2, o2 ? i2 : null);
          if (h2)
            return void (h2.oneOff = h2.oneOff && s2);
          const d2 = O(r2, e2.replace(v, "")), u2 = o2 ? /* @__PURE__ */ function(t3, e3, i3) {
            return /* @__PURE__ */ __name(function n3(s3) {
              const o3 = t3.querySelectorAll(e3);
              for (let { target: r3 } = s3; r3 && r3 !== this; r3 = r3.parentNode)
                for (const a3 of o3)
                  if (a3 === r3)
                    return P(s3, { delegateTarget: r3 }), n3.oneOff && N.off(t3, s3.type, e3, i3), i3.apply(r3, [s3]);
            }, "n");
          }(t2, i2, r2) : /* @__PURE__ */ function(t3, e3) {
            return /* @__PURE__ */ __name(function i3(n3) {
              return P(n3, { delegateTarget: t3 }), i3.oneOff && N.off(t3, n3.type, e3), e3.apply(t3, [n3]);
            }, "i");
          }(t2, r2);
          u2.delegationSelector = o2 ? i2 : null, u2.callable = r2, u2.oneOff = s2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
        }
        __name(S, "S");
        function D(t2, e2, i2, n2, s2) {
          const o2 = k(e2[i2], n2, s2);
          o2 && (t2.removeEventListener(i2, o2, Boolean(s2)), delete e2[i2][o2.uidEvent]);
        }
        __name(D, "D");
        function $(t2, e2, i2, n2) {
          const s2 = e2[i2] || {};
          for (const [o2, r2] of Object.entries(s2))
            o2.includes(n2) && D(t2, e2, i2, r2.callable, r2.delegationSelector);
        }
        __name($, "$");
        function I(t2) {
          return t2 = t2.replace(y, ""), T[t2] || t2;
        }
        __name(I, "I");
        const N = { on(t2, e2, i2, n2) {
          S(t2, e2, i2, n2, false);
        }, one(t2, e2, i2, n2) {
          S(t2, e2, i2, n2, true);
        }, off(t2, e2, i2, n2) {
          if ("string" != typeof e2 || !t2)
            return;
          const [s2, o2, r2] = L(e2, i2, n2), a2 = r2 !== e2, l2 = x(t2), c2 = l2[r2] || {}, h2 = e2.startsWith(".");
          if (void 0 === o2) {
            if (h2)
              for (const i3 of Object.keys(l2))
                $(t2, l2, i3, e2.slice(1));
            for (const [i3, n3] of Object.entries(c2)) {
              const s3 = i3.replace(w, "");
              a2 && !e2.includes(s3) || D(t2, l2, r2, n3.callable, n3.delegationSelector);
            }
          } else {
            if (!Object.keys(c2).length)
              return;
            D(t2, l2, r2, o2, s2 ? i2 : null);
          }
        }, trigger(t2, e2, i2) {
          if ("string" != typeof e2 || !t2)
            return null;
          const n2 = u();
          let s2 = null, o2 = true, r2 = true, a2 = false;
          e2 !== I(e2) && n2 && (s2 = n2.Event(e2, i2), n2(t2).trigger(s2), o2 = !s2.isPropagationStopped(), r2 = !s2.isImmediatePropagationStopped(), a2 = s2.isDefaultPrevented());
          const l2 = P(new Event(e2, { bubbles: o2, cancelable: true }), i2);
          return a2 && l2.preventDefault(), r2 && t2.dispatchEvent(l2), l2.defaultPrevented && s2 && s2.preventDefault(), l2;
        } };
        function P(t2, e2 = {}) {
          for (const [i2, n2] of Object.entries(e2))
            try {
              t2[i2] = n2;
            } catch (e3) {
              Object.defineProperty(t2, i2, { configurable: true, get: () => n2 });
            }
          return t2;
        }
        __name(P, "P");
        function M(t2) {
          if ("true" === t2)
            return true;
          if ("false" === t2)
            return false;
          if (t2 === Number(t2).toString())
            return Number(t2);
          if ("" === t2 || "null" === t2)
            return null;
          if ("string" != typeof t2)
            return t2;
          try {
            return JSON.parse(decodeURIComponent(t2));
          } catch (e2) {
            return t2;
          }
        }
        __name(M, "M");
        function j(t2) {
          return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
        }
        __name(j, "j");
        const F = { setDataAttribute(t2, e2, i2) {
          t2.setAttribute(`data-bs-${j(e2)}`, i2);
        }, removeDataAttribute(t2, e2) {
          t2.removeAttribute(`data-bs-${j(e2)}`);
        }, getDataAttributes(t2) {
          if (!t2)
            return {};
          const e2 = {}, i2 = Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs") && !t3.startsWith("bsConfig"));
          for (const n2 of i2) {
            let i3 = n2.replace(/^bs/, "");
            i3 = i3.charAt(0).toLowerCase() + i3.slice(1, i3.length), e2[i3] = M(t2.dataset[n2]);
          }
          return e2;
        }, getDataAttribute: (t2, e2) => M(t2.getAttribute(`data-bs-${j(e2)}`)) };
        class H {
          static {
            __name(this, "H");
          }
          static get Default() {
            return {};
          }
          static get DefaultType() {
            return {};
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          _getConfig(t2) {
            return t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
          }
          _configAfterMerge(t2) {
            return t2;
          }
          _mergeConfigObj(t2, e2) {
            const i2 = o(e2) ? F.getDataAttribute(e2, "config") : {};
            return { ...this.constructor.Default, ..."object" == typeof i2 ? i2 : {}, ...o(e2) ? F.getDataAttributes(e2) : {}, ..."object" == typeof t2 ? t2 : {} };
          }
          _typeCheckConfig(t2, e2 = this.constructor.DefaultType) {
            for (const [n2, s2] of Object.entries(e2)) {
              const e3 = t2[n2], r2 = o(e3) ? "element" : null == (i2 = e3) ? `${i2}` : Object.prototype.toString.call(i2).match(/\s([a-z]+)/i)[1].toLowerCase();
              if (!new RegExp(s2).test(r2))
                throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n2}" provided type "${r2}" but expected type "${s2}".`);
            }
            var i2;
          }
        }
        class W extends H {
          static {
            __name(this, "W");
          }
          constructor(t2, i2) {
            super(), (t2 = r(t2)) && (this._element = t2, this._config = this._getConfig(i2), e.set(this._element, this.constructor.DATA_KEY, this));
          }
          dispose() {
            e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
            for (const t2 of Object.getOwnPropertyNames(this))
              this[t2] = null;
          }
          _queueCallback(t2, e2, i2 = true) {
            _(t2, e2, i2);
          }
          _getConfig(t2) {
            return t2 = this._mergeConfigObj(t2, this._element), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
          }
          static getInstance(t2) {
            return e.get(r(t2), this.DATA_KEY);
          }
          static getOrCreateInstance(t2, e2 = {}) {
            return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
          }
          static get VERSION() {
            return "5.3.2";
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
          static eventName(t2) {
            return `${t2}${this.EVENT_KEY}`;
          }
        }
        const B = /* @__PURE__ */ __name((t2) => {
          let e2 = t2.getAttribute("data-bs-target");
          if (!e2 || "#" === e2) {
            let i2 = t2.getAttribute("href");
            if (!i2 || !i2.includes("#") && !i2.startsWith("."))
              return null;
            i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? n(i2.trim()) : null;
          }
          return e2;
        }, "B"), z = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
          const i2 = [];
          let n2 = t2.parentNode.closest(e2);
          for (; n2; )
            i2.push(n2), n2 = n2.parentNode.closest(e2);
          return i2;
        }, prev(t2, e2) {
          let i2 = t2.previousElementSibling;
          for (; i2; ) {
            if (i2.matches(e2))
              return [i2];
            i2 = i2.previousElementSibling;
          }
          return [];
        }, next(t2, e2) {
          let i2 = t2.nextElementSibling;
          for (; i2; ) {
            if (i2.matches(e2))
              return [i2];
            i2 = i2.nextElementSibling;
          }
          return [];
        }, focusableChildren(t2) {
          const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => `${t3}:not([tabindex^="-"])`).join(",");
          return this.find(e2, t2).filter((t3) => !l(t3) && a(t3));
        }, getSelectorFromElement(t2) {
          const e2 = B(t2);
          return e2 && z.findOne(e2) ? e2 : null;
        }, getElementFromSelector(t2) {
          const e2 = B(t2);
          return e2 ? z.findOne(e2) : null;
        }, getMultipleElementsFromSelector(t2) {
          const e2 = B(t2);
          return e2 ? z.find(e2) : [];
        } }, R = /* @__PURE__ */ __name((t2, e2 = "hide") => {
          const i2 = `click.dismiss${t2.EVENT_KEY}`, n2 = t2.NAME;
          N.on(document, i2, `[data-bs-dismiss="${n2}"]`, function(i3) {
            if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), l(this))
              return;
            const s2 = z.getElementFromSelector(this) || this.closest(`.${n2}`);
            t2.getOrCreateInstance(s2)[e2]();
          });
        }, "R"), q = ".bs.alert", V = `close${q}`, K = `closed${q}`;
        class Q extends W {
          static {
            __name(this, "Q");
          }
          static get NAME() {
            return "alert";
          }
          close() {
            if (N.trigger(this._element, V).defaultPrevented)
              return;
            this._element.classList.remove("show");
            const t2 = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t2);
          }
          _destroyElement() {
            this._element.remove(), N.trigger(this._element, K), this.dispose();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Q.getOrCreateInstance(this);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        R(Q, "close"), m(Q);
        const X = '[data-bs-toggle="button"]';
        class Y extends W {
          static {
            __name(this, "Y");
          }
          static get NAME() {
            return "button";
          }
          toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Y.getOrCreateInstance(this);
              "toggle" === t2 && e2[t2]();
            });
          }
        }
        N.on(document, "click.bs.button.data-api", X, (t2) => {
          t2.preventDefault();
          const e2 = t2.target.closest(X);
          Y.getOrCreateInstance(e2).toggle();
        }), m(Y);
        const U = ".bs.swipe", G = `touchstart${U}`, J = `touchmove${U}`, Z = `touchend${U}`, tt = `pointerdown${U}`, et = `pointerup${U}`, it = { endCallback: null, leftCallback: null, rightCallback: null }, nt = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
        class st extends H {
          static {
            __name(this, "st");
          }
          constructor(t2, e2) {
            super(), this._element = t2, t2 && st.isSupported() && (this._config = this._getConfig(e2), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
          }
          static get Default() {
            return it;
          }
          static get DefaultType() {
            return nt;
          }
          static get NAME() {
            return "swipe";
          }
          dispose() {
            N.off(this._element, U);
          }
          _start(t2) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX) : this._deltaX = t2.touches[0].clientX;
          }
          _end(t2) {
            this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
          }
          _move(t2) {
            this._deltaX = t2.touches && t2.touches.length > 1 ? 0 : t2.touches[0].clientX - this._deltaX;
          }
          _handleSwipe() {
            const t2 = Math.abs(this._deltaX);
            if (t2 <= 40)
              return;
            const e2 = t2 / this._deltaX;
            this._deltaX = 0, e2 && g(e2 > 0 ? this._config.rightCallback : this._config.leftCallback);
          }
          _initEvents() {
            this._supportPointerEvents ? (N.on(this._element, tt, (t2) => this._start(t2)), N.on(this._element, et, (t2) => this._end(t2)), this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t2) => this._start(t2)), N.on(this._element, J, (t2) => this._move(t2)), N.on(this._element, Z, (t2) => this._end(t2)));
          }
          _eventIsPointerPenTouch(t2) {
            return this._supportPointerEvents && ("pen" === t2.pointerType || "touch" === t2.pointerType);
          }
          static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
          }
        }
        const ot = ".bs.carousel", rt = ".data-api", at = "next", lt = "prev", ct = "left", ht = "right", dt = `slide${ot}`, ut = `slid${ot}`, ft = `keydown${ot}`, pt = `mouseenter${ot}`, mt = `mouseleave${ot}`, gt = `dragstart${ot}`, _t = `load${ot}${rt}`, bt = `click${ot}${rt}`, vt = "carousel", yt = "active", wt = ".active", At = ".carousel-item", Et = wt + At, Tt = { ArrowLeft: ht, ArrowRight: ct }, Ct = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, Ot = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
        class xt extends W {
          static {
            __name(this, "xt");
          }
          constructor(t2, e2) {
            super(t2, e2), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === vt && this.cycle();
          }
          static get Default() {
            return Ct;
          }
          static get DefaultType() {
            return Ot;
          }
          static get NAME() {
            return "carousel";
          }
          next() {
            this._slide(at);
          }
          nextWhenVisible() {
            !document.hidden && a(this._element) && this.next();
          }
          prev() {
            this._slide(lt);
          }
          pause() {
            this._isSliding && s(this._element), this._clearInterval();
          }
          cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
          }
          _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? N.one(this._element, ut, () => this.cycle()) : this.cycle());
          }
          to(t2) {
            const e2 = this._getItems();
            if (t2 > e2.length - 1 || t2 < 0)
              return;
            if (this._isSliding)
              return void N.one(this._element, ut, () => this.to(t2));
            const i2 = this._getItemIndex(this._getActive());
            if (i2 === t2)
              return;
            const n2 = t2 > i2 ? at : lt;
            this._slide(n2, e2[t2]);
          }
          dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
          }
          _configAfterMerge(t2) {
            return t2.defaultInterval = t2.interval, t2;
          }
          _addEventListeners() {
            this._config.keyboard && N.on(this._element, ft, (t2) => this._keydown(t2)), "hover" === this._config.pause && (N.on(this._element, pt, () => this.pause()), N.on(this._element, mt, () => this._maybeEnableCycle())), this._config.touch && st.isSupported() && this._addTouchEventListeners();
          }
          _addTouchEventListeners() {
            for (const t3 of z.find(".carousel-item img", this._element))
              N.on(t3, gt, (t4) => t4.preventDefault());
            const t2 = { leftCallback: () => this._slide(this._directionToOrder(ct)), rightCallback: () => this._slide(this._directionToOrder(ht)), endCallback: () => {
              "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
            } };
            this._swipeHelper = new st(this._element, t2);
          }
          _keydown(t2) {
            if (/input|textarea/i.test(t2.target.tagName))
              return;
            const e2 = Tt[t2.key];
            e2 && (t2.preventDefault(), this._slide(this._directionToOrder(e2)));
          }
          _getItemIndex(t2) {
            return this._getItems().indexOf(t2);
          }
          _setActiveIndicatorElement(t2) {
            if (!this._indicatorsElement)
              return;
            const e2 = z.findOne(wt, this._indicatorsElement);
            e2.classList.remove(yt), e2.removeAttribute("aria-current");
            const i2 = z.findOne(`[data-bs-slide-to="${t2}"]`, this._indicatorsElement);
            i2 && (i2.classList.add(yt), i2.setAttribute("aria-current", "true"));
          }
          _updateInterval() {
            const t2 = this._activeElement || this._getActive();
            if (!t2)
              return;
            const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
            this._config.interval = e2 || this._config.defaultInterval;
          }
          _slide(t2, e2 = null) {
            if (this._isSliding)
              return;
            const i2 = this._getActive(), n2 = t2 === at, s2 = e2 || b(this._getItems(), i2, n2, this._config.wrap);
            if (s2 === i2)
              return;
            const o2 = this._getItemIndex(s2), r2 = /* @__PURE__ */ __name((e3) => N.trigger(this._element, e3, { relatedTarget: s2, direction: this._orderToDirection(t2), from: this._getItemIndex(i2), to: o2 }), "r");
            if (r2(dt).defaultPrevented)
              return;
            if (!i2 || !s2)
              return;
            const a2 = Boolean(this._interval);
            this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o2), this._activeElement = s2;
            const l2 = n2 ? "carousel-item-start" : "carousel-item-end", c2 = n2 ? "carousel-item-next" : "carousel-item-prev";
            s2.classList.add(c2), d(s2), i2.classList.add(l2), s2.classList.add(l2), this._queueCallback(() => {
              s2.classList.remove(l2, c2), s2.classList.add(yt), i2.classList.remove(yt, c2, l2), this._isSliding = false, r2(ut);
            }, i2, this._isAnimated()), a2 && this.cycle();
          }
          _isAnimated() {
            return this._element.classList.contains("slide");
          }
          _getActive() {
            return z.findOne(Et, this._element);
          }
          _getItems() {
            return z.find(At, this._element);
          }
          _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null);
          }
          _directionToOrder(t2) {
            return p() ? t2 === ct ? lt : at : t2 === ct ? at : lt;
          }
          _orderToDirection(t2) {
            return p() ? t2 === lt ? ct : ht : t2 === lt ? ht : ct;
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = xt.getOrCreateInstance(this, t2);
              if ("number" != typeof t2) {
                if ("string" == typeof t2) {
                  if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                    throw new TypeError(`No method named "${t2}"`);
                  e2[t2]();
                }
              } else
                e2.to(t2);
            });
          }
        }
        N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function(t2) {
          const e2 = z.getElementFromSelector(this);
          if (!e2 || !e2.classList.contains(vt))
            return;
          t2.preventDefault();
          const i2 = xt.getOrCreateInstance(e2), n2 = this.getAttribute("data-bs-slide-to");
          return n2 ? (i2.to(n2), void i2._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i2.next(), void i2._maybeEnableCycle()) : (i2.prev(), void i2._maybeEnableCycle());
        }), N.on(window, _t, () => {
          const t2 = z.find('[data-bs-ride="carousel"]');
          for (const e2 of t2)
            xt.getOrCreateInstance(e2);
        }), m(xt);
        const kt = ".bs.collapse", Lt = `show${kt}`, St = `shown${kt}`, Dt = `hide${kt}`, $t = `hidden${kt}`, It = `click${kt}.data-api`, Nt = "show", Pt = "collapse", Mt = "collapsing", jt = `:scope .${Pt} .${Pt}`, Ft = '[data-bs-toggle="collapse"]', Ht = { parent: null, toggle: true }, Wt = { parent: "(null|element)", toggle: "boolean" };
        class Bt extends W {
          static {
            __name(this, "Bt");
          }
          constructor(t2, e2) {
            super(t2, e2), this._isTransitioning = false, this._triggerArray = [];
            const i2 = z.find(Ft);
            for (const t3 of i2) {
              const e3 = z.getSelectorFromElement(t3), i3 = z.find(e3).filter((t4) => t4 === this._element);
              null !== e3 && i3.length && this._triggerArray.push(t3);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
          }
          static get Default() {
            return Ht;
          }
          static get DefaultType() {
            return Wt;
          }
          static get NAME() {
            return "collapse";
          }
          toggle() {
            this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (this._isTransitioning || this._isShown())
              return;
            let t2 = [];
            if (this._config.parent && (t2 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t3) => t3 !== this._element).map((t3) => Bt.getOrCreateInstance(t3, { toggle: false }))), t2.length && t2[0]._isTransitioning)
              return;
            if (N.trigger(this._element, Lt).defaultPrevented)
              return;
            for (const e3 of t2)
              e3.hide();
            const e2 = this._getDimension();
            this._element.classList.remove(Pt), this._element.classList.add(Mt), this._element.style[e2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
            const i2 = `scroll${e2[0].toUpperCase() + e2.slice(1)}`;
            this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove(Mt), this._element.classList.add(Pt, Nt), this._element.style[e2] = "", N.trigger(this._element, St);
            }, this._element, true), this._element.style[e2] = `${this._element[i2]}px`;
          }
          hide() {
            if (this._isTransitioning || !this._isShown())
              return;
            if (N.trigger(this._element, Dt).defaultPrevented)
              return;
            const t2 = this._getDimension();
            this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, d(this._element), this._element.classList.add(Mt), this._element.classList.remove(Pt, Nt);
            for (const t3 of this._triggerArray) {
              const e2 = z.getElementFromSelector(t3);
              e2 && !this._isShown(e2) && this._addAriaAndCollapsedClass([t3], false);
            }
            this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove(Mt), this._element.classList.add(Pt), N.trigger(this._element, $t);
            }, this._element, true);
          }
          _isShown(t2 = this._element) {
            return t2.classList.contains(Nt);
          }
          _configAfterMerge(t2) {
            return t2.toggle = Boolean(t2.toggle), t2.parent = r(t2.parent), t2;
          }
          _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
          }
          _initializeChildren() {
            if (!this._config.parent)
              return;
            const t2 = this._getFirstLevelChildren(Ft);
            for (const e2 of t2) {
              const t3 = z.getElementFromSelector(e2);
              t3 && this._addAriaAndCollapsedClass([e2], this._isShown(t3));
            }
          }
          _getFirstLevelChildren(t2) {
            const e2 = z.find(jt, this._config.parent);
            return z.find(t2, this._config.parent).filter((t3) => !e2.includes(t3));
          }
          _addAriaAndCollapsedClass(t2, e2) {
            if (t2.length)
              for (const i2 of t2)
                i2.classList.toggle("collapsed", !e2), i2.setAttribute("aria-expanded", e2);
          }
          static jQueryInterface(t2) {
            const e2 = {};
            return "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false), this.each(function() {
              const i2 = Bt.getOrCreateInstance(this, e2);
              if ("string" == typeof t2) {
                if (void 0 === i2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                i2[t2]();
              }
            });
          }
        }
        N.on(document, It, Ft, function(t2) {
          ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
          for (const t3 of z.getMultipleElementsFromSelector(this))
            Bt.getOrCreateInstance(t3, { toggle: false }).toggle();
        }), m(Bt);
        var zt = "top", Rt = "bottom", qt = "right", Vt = "left", Kt = "auto", Qt = [zt, Rt, qt, Vt], Xt = "start", Yt = "end", Ut = "clippingParents", Gt = "viewport", Jt = "popper", Zt = "reference", te = Qt.reduce(function(t2, e2) {
          return t2.concat([e2 + "-" + Xt, e2 + "-" + Yt]);
        }, []), ee = [].concat(Qt, [Kt]).reduce(function(t2, e2) {
          return t2.concat([e2, e2 + "-" + Xt, e2 + "-" + Yt]);
        }, []), ie = "beforeRead", ne = "read", se = "afterRead", oe = "beforeMain", re = "main", ae = "afterMain", le = "beforeWrite", ce = "write", he = "afterWrite", de = [ie, ne, se, oe, re, ae, le, ce, he];
        function ue(t2) {
          return t2 ? (t2.nodeName || "").toLowerCase() : null;
        }
        __name(ue, "ue");
        function fe(t2) {
          if (null == t2)
            return window;
          if ("[object Window]" !== t2.toString()) {
            var e2 = t2.ownerDocument;
            return e2 && e2.defaultView || window;
          }
          return t2;
        }
        __name(fe, "fe");
        function pe(t2) {
          return t2 instanceof fe(t2).Element || t2 instanceof Element;
        }
        __name(pe, "pe");
        function me(t2) {
          return t2 instanceof fe(t2).HTMLElement || t2 instanceof HTMLElement;
        }
        __name(me, "me");
        function ge(t2) {
          return "undefined" != typeof ShadowRoot && (t2 instanceof fe(t2).ShadowRoot || t2 instanceof ShadowRoot);
        }
        __name(ge, "ge");
        const _e = { name: "applyStyles", enabled: true, phase: "write", fn: function(t2) {
          var e2 = t2.state;
          Object.keys(e2.elements).forEach(function(t3) {
            var i2 = e2.styles[t3] || {}, n2 = e2.attributes[t3] || {}, s2 = e2.elements[t3];
            me(s2) && ue(s2) && (Object.assign(s2.style, i2), Object.keys(n2).forEach(function(t4) {
              var e3 = n2[t4];
              false === e3 ? s2.removeAttribute(t4) : s2.setAttribute(t4, true === e3 ? "" : e3);
            }));
          });
        }, effect: function(t2) {
          var e2 = t2.state, i2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
          return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
            Object.keys(e2.elements).forEach(function(t3) {
              var n2 = e2.elements[t3], s2 = e2.attributes[t3] || {}, o2 = Object.keys(e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]).reduce(function(t4, e3) {
                return t4[e3] = "", t4;
              }, {});
              me(n2) && ue(n2) && (Object.assign(n2.style, o2), Object.keys(s2).forEach(function(t4) {
                n2.removeAttribute(t4);
              }));
            });
          };
        }, requires: ["computeStyles"] };
        function be(t2) {
          return t2.split("-")[0];
        }
        __name(be, "be");
        var ve = Math.max, ye = Math.min, we = Math.round;
        function Ae() {
          var t2 = navigator.userAgentData;
          return null != t2 && t2.brands && Array.isArray(t2.brands) ? t2.brands.map(function(t3) {
            return t3.brand + "/" + t3.version;
          }).join(" ") : navigator.userAgent;
        }
        __name(Ae, "Ae");
        function Ee() {
          return !/^((?!chrome|android).)*safari/i.test(Ae());
        }
        __name(Ee, "Ee");
        function Te(t2, e2, i2) {
          void 0 === e2 && (e2 = false), void 0 === i2 && (i2 = false);
          var n2 = t2.getBoundingClientRect(), s2 = 1, o2 = 1;
          e2 && me(t2) && (s2 = t2.offsetWidth > 0 && we(n2.width) / t2.offsetWidth || 1, o2 = t2.offsetHeight > 0 && we(n2.height) / t2.offsetHeight || 1);
          var r2 = (pe(t2) ? fe(t2) : window).visualViewport, a2 = !Ee() && i2, l2 = (n2.left + (a2 && r2 ? r2.offsetLeft : 0)) / s2, c2 = (n2.top + (a2 && r2 ? r2.offsetTop : 0)) / o2, h2 = n2.width / s2, d2 = n2.height / o2;
          return { width: h2, height: d2, top: c2, right: l2 + h2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
        }
        __name(Te, "Te");
        function Ce(t2) {
          var e2 = Te(t2), i2 = t2.offsetWidth, n2 = t2.offsetHeight;
          return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n2) <= 1 && (n2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n2 };
        }
        __name(Ce, "Ce");
        function Oe(t2, e2) {
          var i2 = e2.getRootNode && e2.getRootNode();
          if (t2.contains(e2))
            return true;
          if (i2 && ge(i2)) {
            var n2 = e2;
            do {
              if (n2 && t2.isSameNode(n2))
                return true;
              n2 = n2.parentNode || n2.host;
            } while (n2);
          }
          return false;
        }
        __name(Oe, "Oe");
        function xe(t2) {
          return fe(t2).getComputedStyle(t2);
        }
        __name(xe, "xe");
        function ke(t2) {
          return ["table", "td", "th"].indexOf(ue(t2)) >= 0;
        }
        __name(ke, "ke");
        function Le(t2) {
          return ((pe(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
        }
        __name(Le, "Le");
        function Se(t2) {
          return "html" === ue(t2) ? t2 : t2.assignedSlot || t2.parentNode || (ge(t2) ? t2.host : null) || Le(t2);
        }
        __name(Se, "Se");
        function De(t2) {
          return me(t2) && "fixed" !== xe(t2).position ? t2.offsetParent : null;
        }
        __name(De, "De");
        function $e(t2) {
          for (var e2 = fe(t2), i2 = De(t2); i2 && ke(i2) && "static" === xe(i2).position; )
            i2 = De(i2);
          return i2 && ("html" === ue(i2) || "body" === ue(i2) && "static" === xe(i2).position) ? e2 : i2 || function(t3) {
            var e3 = /firefox/i.test(Ae());
            if (/Trident/i.test(Ae()) && me(t3) && "fixed" === xe(t3).position)
              return null;
            var i3 = Se(t3);
            for (ge(i3) && (i3 = i3.host); me(i3) && ["html", "body"].indexOf(ue(i3)) < 0; ) {
              var n2 = xe(i3);
              if ("none" !== n2.transform || "none" !== n2.perspective || "paint" === n2.contain || -1 !== ["transform", "perspective"].indexOf(n2.willChange) || e3 && "filter" === n2.willChange || e3 && n2.filter && "none" !== n2.filter)
                return i3;
              i3 = i3.parentNode;
            }
            return null;
          }(t2) || e2;
        }
        __name($e, "$e");
        function Ie(t2) {
          return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
        }
        __name(Ie, "Ie");
        function Ne(t2, e2, i2) {
          return ve(t2, ye(e2, i2));
        }
        __name(Ne, "Ne");
        function Pe(t2) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
        }
        __name(Pe, "Pe");
        function Me(t2, e2) {
          return e2.reduce(function(e3, i2) {
            return e3[i2] = t2, e3;
          }, {});
        }
        __name(Me, "Me");
        const je = { name: "arrow", enabled: true, phase: "main", fn: function(t2) {
          var e2, i2 = t2.state, n2 = t2.name, s2 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = be(i2.placement), l2 = Ie(a2), c2 = [Vt, qt].indexOf(a2) >= 0 ? "height" : "width";
          if (o2 && r2) {
            var h2 = function(t3, e3) {
              return Pe("number" != typeof (t3 = "function" == typeof t3 ? t3(Object.assign({}, e3.rects, { placement: e3.placement })) : t3) ? t3 : Me(t3, Qt));
            }(s2.padding, i2), d2 = Ce(o2), u2 = "y" === l2 ? zt : Vt, f2 = "y" === l2 ? Rt : qt, p2 = i2.rects.reference[c2] + i2.rects.reference[l2] - r2[l2] - i2.rects.popper[c2], m2 = r2[l2] - i2.rects.reference[l2], g2 = $e(o2), _2 = g2 ? "y" === l2 ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = p2 / 2 - m2 / 2, v2 = h2[u2], y2 = _2 - d2[c2] - h2[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, A2 = Ne(v2, w2, y2), E2 = l2;
            i2.modifiersData[n2] = ((e2 = {})[E2] = A2, e2.centerOffset = A2 - w2, e2);
          }
        }, effect: function(t2) {
          var e2 = t2.state, i2 = t2.options.element, n2 = void 0 === i2 ? "[data-popper-arrow]" : i2;
          null != n2 && ("string" != typeof n2 || (n2 = e2.elements.popper.querySelector(n2))) && Oe(e2.elements.popper, n2) && (e2.elements.arrow = n2);
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
        function Fe(t2) {
          return t2.split("-")[1];
        }
        __name(Fe, "Fe");
        var He = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function We(t2) {
          var e2, i2 = t2.popper, n2 = t2.popperRect, s2 = t2.placement, o2 = t2.variation, r2 = t2.offsets, a2 = t2.position, l2 = t2.gpuAcceleration, c2 = t2.adaptive, h2 = t2.roundOffsets, d2 = t2.isFixed, u2 = r2.x, f2 = void 0 === u2 ? 0 : u2, p2 = r2.y, m2 = void 0 === p2 ? 0 : p2, g2 = "function" == typeof h2 ? h2({ x: f2, y: m2 }) : { x: f2, y: m2 };
          f2 = g2.x, m2 = g2.y;
          var _2 = r2.hasOwnProperty("x"), b2 = r2.hasOwnProperty("y"), v2 = Vt, y2 = zt, w2 = window;
          if (c2) {
            var A2 = $e(i2), E2 = "clientHeight", T2 = "clientWidth";
            A2 === fe(i2) && "static" !== xe(A2 = Le(i2)).position && "absolute" === a2 && (E2 = "scrollHeight", T2 = "scrollWidth"), (s2 === zt || (s2 === Vt || s2 === qt) && o2 === Yt) && (y2 = Rt, m2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.height : A2[E2]) - n2.height, m2 *= l2 ? 1 : -1), s2 !== Vt && (s2 !== zt && s2 !== Rt || o2 !== Yt) || (v2 = qt, f2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.width : A2[T2]) - n2.width, f2 *= l2 ? 1 : -1);
          }
          var C2, O2 = Object.assign({ position: a2 }, c2 && He), x2 = true === h2 ? function(t3, e3) {
            var i3 = t3.x, n3 = t3.y, s3 = e3.devicePixelRatio || 1;
            return { x: we(i3 * s3) / s3 || 0, y: we(n3 * s3) / s3 || 0 };
          }({ x: f2, y: m2 }, fe(i2)) : { x: f2, y: m2 };
          return f2 = x2.x, m2 = x2.y, l2 ? Object.assign({}, O2, ((C2 = {})[y2] = b2 ? "0" : "", C2[v2] = _2 ? "0" : "", C2.transform = (w2.devicePixelRatio || 1) <= 1 ? "translate(" + f2 + "px, " + m2 + "px)" : "translate3d(" + f2 + "px, " + m2 + "px, 0)", C2)) : Object.assign({}, O2, ((e2 = {})[y2] = b2 ? m2 + "px" : "", e2[v2] = _2 ? f2 + "px" : "", e2.transform = "", e2));
        }
        __name(We, "We");
        const Be = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = i2.gpuAcceleration, s2 = void 0 === n2 || n2, o2 = i2.adaptive, r2 = void 0 === o2 || o2, a2 = i2.roundOffsets, l2 = void 0 === a2 || a2, c2 = { placement: be(e2.placement), variation: Fe(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: s2, isFixed: "fixed" === e2.options.strategy };
          null != e2.modifiersData.popperOffsets && (e2.styles.popper = Object.assign({}, e2.styles.popper, We(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: r2, roundOffsets: l2 })))), null != e2.modifiersData.arrow && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, We(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
        }, data: {} };
        var ze = { passive: true };
        const Re = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
        }, effect: function(t2) {
          var e2 = t2.state, i2 = t2.instance, n2 = t2.options, s2 = n2.scroll, o2 = void 0 === s2 || s2, r2 = n2.resize, a2 = void 0 === r2 || r2, l2 = fe(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
          return o2 && c2.forEach(function(t3) {
            t3.addEventListener("scroll", i2.update, ze);
          }), a2 && l2.addEventListener("resize", i2.update, ze), function() {
            o2 && c2.forEach(function(t3) {
              t3.removeEventListener("scroll", i2.update, ze);
            }), a2 && l2.removeEventListener("resize", i2.update, ze);
          };
        }, data: {} };
        var qe = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function Ve(t2) {
          return t2.replace(/left|right|bottom|top/g, function(t3) {
            return qe[t3];
          });
        }
        __name(Ve, "Ve");
        var Ke = { start: "end", end: "start" };
        function Qe(t2) {
          return t2.replace(/start|end/g, function(t3) {
            return Ke[t3];
          });
        }
        __name(Qe, "Qe");
        function Xe(t2) {
          var e2 = fe(t2);
          return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
        }
        __name(Xe, "Xe");
        function Ye(t2) {
          return Te(Le(t2)).left + Xe(t2).scrollLeft;
        }
        __name(Ye, "Ye");
        function Ue(t2) {
          var e2 = xe(t2), i2 = e2.overflow, n2 = e2.overflowX, s2 = e2.overflowY;
          return /auto|scroll|overlay|hidden/.test(i2 + s2 + n2);
        }
        __name(Ue, "Ue");
        function Ge(t2) {
          return ["html", "body", "#document"].indexOf(ue(t2)) >= 0 ? t2.ownerDocument.body : me(t2) && Ue(t2) ? t2 : Ge(Se(t2));
        }
        __name(Ge, "Ge");
        function Je(t2, e2) {
          var i2;
          void 0 === e2 && (e2 = []);
          var n2 = Ge(t2), s2 = n2 === (null == (i2 = t2.ownerDocument) ? void 0 : i2.body), o2 = fe(n2), r2 = s2 ? [o2].concat(o2.visualViewport || [], Ue(n2) ? n2 : []) : n2, a2 = e2.concat(r2);
          return s2 ? a2 : a2.concat(Je(Se(r2)));
        }
        __name(Je, "Je");
        function Ze(t2) {
          return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
        }
        __name(Ze, "Ze");
        function ti(t2, e2, i2) {
          return e2 === Gt ? Ze(function(t3, e3) {
            var i3 = fe(t3), n2 = Le(t3), s2 = i3.visualViewport, o2 = n2.clientWidth, r2 = n2.clientHeight, a2 = 0, l2 = 0;
            if (s2) {
              o2 = s2.width, r2 = s2.height;
              var c2 = Ee();
              (c2 || !c2 && "fixed" === e3) && (a2 = s2.offsetLeft, l2 = s2.offsetTop);
            }
            return { width: o2, height: r2, x: a2 + Ye(t3), y: l2 };
          }(t2, i2)) : pe(e2) ? function(t3, e3) {
            var i3 = Te(t3, false, "fixed" === e3);
            return i3.top = i3.top + t3.clientTop, i3.left = i3.left + t3.clientLeft, i3.bottom = i3.top + t3.clientHeight, i3.right = i3.left + t3.clientWidth, i3.width = t3.clientWidth, i3.height = t3.clientHeight, i3.x = i3.left, i3.y = i3.top, i3;
          }(e2, i2) : Ze(function(t3) {
            var e3, i3 = Le(t3), n2 = Xe(t3), s2 = null == (e3 = t3.ownerDocument) ? void 0 : e3.body, o2 = ve(i3.scrollWidth, i3.clientWidth, s2 ? s2.scrollWidth : 0, s2 ? s2.clientWidth : 0), r2 = ve(i3.scrollHeight, i3.clientHeight, s2 ? s2.scrollHeight : 0, s2 ? s2.clientHeight : 0), a2 = -n2.scrollLeft + Ye(t3), l2 = -n2.scrollTop;
            return "rtl" === xe(s2 || i3).direction && (a2 += ve(i3.clientWidth, s2 ? s2.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l2 };
          }(Le(t2)));
        }
        __name(ti, "ti");
        function ei(t2) {
          var e2, i2 = t2.reference, n2 = t2.element, s2 = t2.placement, o2 = s2 ? be(s2) : null, r2 = s2 ? Fe(s2) : null, a2 = i2.x + i2.width / 2 - n2.width / 2, l2 = i2.y + i2.height / 2 - n2.height / 2;
          switch (o2) {
            case zt:
              e2 = { x: a2, y: i2.y - n2.height };
              break;
            case Rt:
              e2 = { x: a2, y: i2.y + i2.height };
              break;
            case qt:
              e2 = { x: i2.x + i2.width, y: l2 };
              break;
            case Vt:
              e2 = { x: i2.x - n2.width, y: l2 };
              break;
            default:
              e2 = { x: i2.x, y: i2.y };
          }
          var c2 = o2 ? Ie(o2) : null;
          if (null != c2) {
            var h2 = "y" === c2 ? "height" : "width";
            switch (r2) {
              case Xt:
                e2[c2] = e2[c2] - (i2[h2] / 2 - n2[h2] / 2);
                break;
              case Yt:
                e2[c2] = e2[c2] + (i2[h2] / 2 - n2[h2] / 2);
            }
          }
          return e2;
        }
        __name(ei, "ei");
        function ii(t2, e2) {
          void 0 === e2 && (e2 = {});
          var i2 = e2, n2 = i2.placement, s2 = void 0 === n2 ? t2.placement : n2, o2 = i2.strategy, r2 = void 0 === o2 ? t2.strategy : o2, a2 = i2.boundary, l2 = void 0 === a2 ? Ut : a2, c2 = i2.rootBoundary, h2 = void 0 === c2 ? Gt : c2, d2 = i2.elementContext, u2 = void 0 === d2 ? Jt : d2, f2 = i2.altBoundary, p2 = void 0 !== f2 && f2, m2 = i2.padding, g2 = void 0 === m2 ? 0 : m2, _2 = Pe("number" != typeof g2 ? g2 : Me(g2, Qt)), b2 = u2 === Jt ? Zt : Jt, v2 = t2.rects.popper, y2 = t2.elements[p2 ? b2 : u2], w2 = function(t3, e3, i3, n3) {
            var s3 = "clippingParents" === e3 ? function(t4) {
              var e4 = Je(Se(t4)), i4 = ["absolute", "fixed"].indexOf(xe(t4).position) >= 0 && me(t4) ? $e(t4) : t4;
              return pe(i4) ? e4.filter(function(t5) {
                return pe(t5) && Oe(t5, i4) && "body" !== ue(t5);
              }) : [];
            }(t3) : [].concat(e3), o3 = [].concat(s3, [i3]), r3 = o3[0], a3 = o3.reduce(function(e4, i4) {
              var s4 = ti(t3, i4, n3);
              return e4.top = ve(s4.top, e4.top), e4.right = ye(s4.right, e4.right), e4.bottom = ye(s4.bottom, e4.bottom), e4.left = ve(s4.left, e4.left), e4;
            }, ti(t3, r3, n3));
            return a3.width = a3.right - a3.left, a3.height = a3.bottom - a3.top, a3.x = a3.left, a3.y = a3.top, a3;
          }(pe(y2) ? y2 : y2.contextElement || Le(t2.elements.popper), l2, h2, r2), A2 = Te(t2.elements.reference), E2 = ei({ reference: A2, element: v2, strategy: "absolute", placement: s2 }), T2 = Ze(Object.assign({}, v2, E2)), C2 = u2 === Jt ? T2 : A2, O2 = { top: w2.top - C2.top + _2.top, bottom: C2.bottom - w2.bottom + _2.bottom, left: w2.left - C2.left + _2.left, right: C2.right - w2.right + _2.right }, x2 = t2.modifiersData.offset;
          if (u2 === Jt && x2) {
            var k2 = x2[s2];
            Object.keys(O2).forEach(function(t3) {
              var e3 = [qt, Rt].indexOf(t3) >= 0 ? 1 : -1, i3 = [zt, Rt].indexOf(t3) >= 0 ? "y" : "x";
              O2[t3] += k2[i3] * e3;
            });
          }
          return O2;
        }
        __name(ii, "ii");
        function ni(t2, e2) {
          void 0 === e2 && (e2 = {});
          var i2 = e2, n2 = i2.placement, s2 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l2 = i2.allowedAutoPlacements, c2 = void 0 === l2 ? ee : l2, h2 = Fe(n2), d2 = h2 ? a2 ? te : te.filter(function(t3) {
            return Fe(t3) === h2;
          }) : Qt, u2 = d2.filter(function(t3) {
            return c2.indexOf(t3) >= 0;
          });
          0 === u2.length && (u2 = d2);
          var f2 = u2.reduce(function(e3, i3) {
            return e3[i3] = ii(t2, { placement: i3, boundary: s2, rootBoundary: o2, padding: r2 })[be(i3)], e3;
          }, {});
          return Object.keys(f2).sort(function(t3, e3) {
            return f2[t3] - f2[e3];
          });
        }
        __name(ni, "ni");
        const si = { name: "flip", enabled: true, phase: "main", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name;
          if (!e2.modifiersData[n2]._skip) {
            for (var s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 === r2 || r2, l2 = i2.fallbackPlacements, c2 = i2.padding, h2 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p2 = void 0 === f2 || f2, m2 = i2.allowedAutoPlacements, g2 = e2.options.placement, _2 = be(g2), b2 = l2 || (_2 !== g2 && p2 ? function(t3) {
              if (be(t3) === Kt)
                return [];
              var e3 = Ve(t3);
              return [Qe(t3), e3, Qe(e3)];
            }(g2) : [Ve(g2)]), v2 = [g2].concat(b2).reduce(function(t3, i3) {
              return t3.concat(be(i3) === Kt ? ni(e2, { placement: i3, boundary: h2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }) : i3);
            }, []), y2 = e2.rects.reference, w2 = e2.rects.popper, A2 = /* @__PURE__ */ new Map(), E2 = true, T2 = v2[0], C2 = 0; C2 < v2.length; C2++) {
              var O2 = v2[C2], x2 = be(O2), k2 = Fe(O2) === Xt, L2 = [zt, Rt].indexOf(x2) >= 0, S2 = L2 ? "width" : "height", D2 = ii(e2, { placement: O2, boundary: h2, rootBoundary: d2, altBoundary: u2, padding: c2 }), $2 = L2 ? k2 ? qt : Vt : k2 ? Rt : zt;
              y2[S2] > w2[S2] && ($2 = Ve($2));
              var I2 = Ve($2), N2 = [];
              if (o2 && N2.push(D2[x2] <= 0), a2 && N2.push(D2[$2] <= 0, D2[I2] <= 0), N2.every(function(t3) {
                return t3;
              })) {
                T2 = O2, E2 = false;
                break;
              }
              A2.set(O2, N2);
            }
            if (E2)
              for (var P2 = function(t3) {
                var e3 = v2.find(function(e4) {
                  var i3 = A2.get(e4);
                  if (i3)
                    return i3.slice(0, t3).every(function(t4) {
                      return t4;
                    });
                });
                if (e3)
                  return T2 = e3, "break";
              }, M2 = p2 ? 3 : 1; M2 > 0 && "break" !== P2(M2); M2--)
                ;
            e2.placement !== T2 && (e2.modifiersData[n2]._skip = true, e2.placement = T2, e2.reset = true);
          }
        }, requiresIfExists: ["offset"], data: { _skip: false } };
        function oi(t2, e2, i2) {
          return void 0 === i2 && (i2 = { x: 0, y: 0 }), { top: t2.top - e2.height - i2.y, right: t2.right - e2.width + i2.x, bottom: t2.bottom - e2.height + i2.y, left: t2.left - e2.width - i2.x };
        }
        __name(oi, "oi");
        function ri(t2) {
          return [zt, qt, Rt, Vt].some(function(e2) {
            return t2[e2] >= 0;
          });
        }
        __name(ri, "ri");
        const ai = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t2) {
          var e2 = t2.state, i2 = t2.name, n2 = e2.rects.reference, s2 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = ii(e2, { elementContext: "reference" }), a2 = ii(e2, { altBoundary: true }), l2 = oi(r2, n2), c2 = oi(a2, s2, o2), h2 = ri(l2), d2 = ri(c2);
          e2.modifiersData[i2] = { referenceClippingOffsets: l2, popperEscapeOffsets: c2, isReferenceHidden: h2, hasPopperEscaped: d2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": h2, "data-popper-escaped": d2 });
        } }, li = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.offset, o2 = void 0 === s2 ? [0, 0] : s2, r2 = ee.reduce(function(t3, i3) {
            return t3[i3] = function(t4, e3, i4) {
              var n3 = be(t4), s3 = [Vt, zt].indexOf(n3) >= 0 ? -1 : 1, o3 = "function" == typeof i4 ? i4(Object.assign({}, e3, { placement: t4 })) : i4, r3 = o3[0], a3 = o3[1];
              return r3 = r3 || 0, a3 = (a3 || 0) * s3, [Vt, qt].indexOf(n3) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
            }(i3, e2.rects, o2), t3;
          }, {}), a2 = r2[e2.placement], l2 = a2.x, c2 = a2.y;
          null != e2.modifiersData.popperOffsets && (e2.modifiersData.popperOffsets.x += l2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n2] = r2;
        } }, ci = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t2) {
          var e2 = t2.state, i2 = t2.name;
          e2.modifiersData[i2] = ei({ reference: e2.rects.reference, element: e2.rects.popper, strategy: "absolute", placement: e2.placement });
        }, data: {} }, hi = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 !== r2 && r2, l2 = i2.boundary, c2 = i2.rootBoundary, h2 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = void 0 === u2 || u2, p2 = i2.tetherOffset, m2 = void 0 === p2 ? 0 : p2, g2 = ii(e2, { boundary: l2, rootBoundary: c2, padding: d2, altBoundary: h2 }), _2 = be(e2.placement), b2 = Fe(e2.placement), v2 = !b2, y2 = Ie(_2), w2 = "x" === y2 ? "y" : "x", A2 = e2.modifiersData.popperOffsets, E2 = e2.rects.reference, T2 = e2.rects.popper, C2 = "function" == typeof m2 ? m2(Object.assign({}, e2.rects, { placement: e2.placement })) : m2, O2 = "number" == typeof C2 ? { mainAxis: C2, altAxis: C2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, C2), x2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement] : null, k2 = { x: 0, y: 0 };
          if (A2) {
            if (o2) {
              var L2, S2 = "y" === y2 ? zt : Vt, D2 = "y" === y2 ? Rt : qt, $2 = "y" === y2 ? "height" : "width", I2 = A2[y2], N2 = I2 + g2[S2], P2 = I2 - g2[D2], M2 = f2 ? -T2[$2] / 2 : 0, j2 = b2 === Xt ? E2[$2] : T2[$2], F2 = b2 === Xt ? -T2[$2] : -E2[$2], H2 = e2.elements.arrow, W2 = f2 && H2 ? Ce(H2) : { width: 0, height: 0 }, B2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z2 = B2[S2], R2 = B2[D2], q2 = Ne(0, E2[$2], W2[$2]), V2 = v2 ? E2[$2] / 2 - M2 - q2 - z2 - O2.mainAxis : j2 - q2 - z2 - O2.mainAxis, K2 = v2 ? -E2[$2] / 2 + M2 + q2 + R2 + O2.mainAxis : F2 + q2 + R2 + O2.mainAxis, Q2 = e2.elements.arrow && $e(e2.elements.arrow), X2 = Q2 ? "y" === y2 ? Q2.clientTop || 0 : Q2.clientLeft || 0 : 0, Y2 = null != (L2 = null == x2 ? void 0 : x2[y2]) ? L2 : 0, U2 = I2 + K2 - Y2, G2 = Ne(f2 ? ye(N2, I2 + V2 - Y2 - X2) : N2, I2, f2 ? ve(P2, U2) : P2);
              A2[y2] = G2, k2[y2] = G2 - I2;
            }
            if (a2) {
              var J2, Z2 = "x" === y2 ? zt : Vt, tt2 = "x" === y2 ? Rt : qt, et2 = A2[w2], it2 = "y" === w2 ? "height" : "width", nt2 = et2 + g2[Z2], st2 = et2 - g2[tt2], ot2 = -1 !== [zt, Vt].indexOf(_2), rt2 = null != (J2 = null == x2 ? void 0 : x2[w2]) ? J2 : 0, at2 = ot2 ? nt2 : et2 - E2[it2] - T2[it2] - rt2 + O2.altAxis, lt2 = ot2 ? et2 + E2[it2] + T2[it2] - rt2 - O2.altAxis : st2, ct2 = f2 && ot2 ? function(t3, e3, i3) {
                var n3 = Ne(t3, e3, i3);
                return n3 > i3 ? i3 : n3;
              }(at2, et2, lt2) : Ne(f2 ? at2 : nt2, et2, f2 ? lt2 : st2);
              A2[w2] = ct2, k2[w2] = ct2 - et2;
            }
            e2.modifiersData[n2] = k2;
          }
        }, requiresIfExists: ["offset"] };
        function di(t2, e2, i2) {
          void 0 === i2 && (i2 = false);
          var n2, s2, o2 = me(e2), r2 = me(e2) && function(t3) {
            var e3 = t3.getBoundingClientRect(), i3 = we(e3.width) / t3.offsetWidth || 1, n3 = we(e3.height) / t3.offsetHeight || 1;
            return 1 !== i3 || 1 !== n3;
          }(e2), a2 = Le(e2), l2 = Te(t2, r2, i2), c2 = { scrollLeft: 0, scrollTop: 0 }, h2 = { x: 0, y: 0 };
          return (o2 || !o2 && !i2) && (("body" !== ue(e2) || Ue(a2)) && (c2 = (n2 = e2) !== fe(n2) && me(n2) ? { scrollLeft: (s2 = n2).scrollLeft, scrollTop: s2.scrollTop } : Xe(n2)), me(e2) ? ((h2 = Te(e2, true)).x += e2.clientLeft, h2.y += e2.clientTop) : a2 && (h2.x = Ye(a2))), { x: l2.left + c2.scrollLeft - h2.x, y: l2.top + c2.scrollTop - h2.y, width: l2.width, height: l2.height };
        }
        __name(di, "di");
        function ui(t2) {
          var e2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), n2 = [];
          function s2(t3) {
            i2.add(t3.name), [].concat(t3.requires || [], t3.requiresIfExists || []).forEach(function(t4) {
              if (!i2.has(t4)) {
                var n3 = e2.get(t4);
                n3 && s2(n3);
              }
            }), n2.push(t3);
          }
          __name(s2, "s");
          return t2.forEach(function(t3) {
            e2.set(t3.name, t3);
          }), t2.forEach(function(t3) {
            i2.has(t3.name) || s2(t3);
          }), n2;
        }
        __name(ui, "ui");
        var fi = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function pi() {
          for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++)
            e2[i2] = arguments[i2];
          return !e2.some(function(t3) {
            return !(t3 && "function" == typeof t3.getBoundingClientRect);
          });
        }
        __name(pi, "pi");
        function mi(t2) {
          void 0 === t2 && (t2 = {});
          var e2 = t2, i2 = e2.defaultModifiers, n2 = void 0 === i2 ? [] : i2, s2 = e2.defaultOptions, o2 = void 0 === s2 ? fi : s2;
          return function(t3, e3, i3) {
            void 0 === i3 && (i3 = o2);
            var s3, r2, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, fi, o2), modifiersData: {}, elements: { reference: t3, popper: e3 }, attributes: {}, styles: {} }, l2 = [], c2 = false, h2 = { state: a2, setOptions: function(i4) {
              var s4 = "function" == typeof i4 ? i4(a2.options) : i4;
              d2(), a2.options = Object.assign({}, o2, a2.options, s4), a2.scrollParents = { reference: pe(t3) ? Je(t3) : t3.contextElement ? Je(t3.contextElement) : [], popper: Je(e3) };
              var r3, c3, u2 = function(t4) {
                var e4 = ui(t4);
                return de.reduce(function(t5, i5) {
                  return t5.concat(e4.filter(function(t6) {
                    return t6.phase === i5;
                  }));
                }, []);
              }((r3 = [].concat(n2, a2.options.modifiers), c3 = r3.reduce(function(t4, e4) {
                var i5 = t4[e4.name];
                return t4[e4.name] = i5 ? Object.assign({}, i5, e4, { options: Object.assign({}, i5.options, e4.options), data: Object.assign({}, i5.data, e4.data) }) : e4, t4;
              }, {}), Object.keys(c3).map(function(t4) {
                return c3[t4];
              })));
              return a2.orderedModifiers = u2.filter(function(t4) {
                return t4.enabled;
              }), a2.orderedModifiers.forEach(function(t4) {
                var e4 = t4.name, i5 = t4.options, n3 = void 0 === i5 ? {} : i5, s5 = t4.effect;
                if ("function" == typeof s5) {
                  var o3 = s5({ state: a2, name: e4, instance: h2, options: n3 });
                  l2.push(o3 || function() {
                  });
                }
              }), h2.update();
            }, forceUpdate: function() {
              if (!c2) {
                var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
                if (pi(e4, i4)) {
                  a2.rects = { reference: di(e4, $e(i4), "fixed" === a2.options.strategy), popper: Ce(i4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
                    return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
                  });
                  for (var n3 = 0; n3 < a2.orderedModifiers.length; n3++)
                    if (true !== a2.reset) {
                      var s4 = a2.orderedModifiers[n3], o3 = s4.fn, r3 = s4.options, l3 = void 0 === r3 ? {} : r3, d3 = s4.name;
                      "function" == typeof o3 && (a2 = o3({ state: a2, options: l3, name: d3, instance: h2 }) || a2);
                    } else
                      a2.reset = false, n3 = -1;
                }
              }
            }, update: (s3 = /* @__PURE__ */ __name(function() {
              return new Promise(function(t4) {
                h2.forceUpdate(), t4(a2);
              });
            }, "s"), function() {
              return r2 || (r2 = new Promise(function(t4) {
                Promise.resolve().then(function() {
                  r2 = void 0, t4(s3());
                });
              })), r2;
            }), destroy: function() {
              d2(), c2 = true;
            } };
            if (!pi(t3, e3))
              return h2;
            function d2() {
              l2.forEach(function(t4) {
                return t4();
              }), l2 = [];
            }
            __name(d2, "d");
            return h2.setOptions(i3).then(function(t4) {
              !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
            }), h2;
          };
        }
        __name(mi, "mi");
        var gi = mi(), _i = mi({ defaultModifiers: [Re, ci, Be, _e] }), bi = mi({ defaultModifiers: [Re, ci, Be, _e, li, si, hi, je, ai] });
        const vi = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: ae, afterRead: se, afterWrite: he, applyStyles: _e, arrow: je, auto: Kt, basePlacements: Qt, beforeMain: oe, beforeRead: ie, beforeWrite: le, bottom: Rt, clippingParents: Ut, computeStyles: Be, createPopper: bi, createPopperBase: gi, createPopperLite: _i, detectOverflow: ii, end: Yt, eventListeners: Re, flip: si, hide: ai, left: Vt, main: re, modifierPhases: de, offset: li, placements: ee, popper: Jt, popperGenerator: mi, popperOffsets: ci, preventOverflow: hi, read: ne, reference: Zt, right: qt, start: Xt, top: zt, variationPlacements: te, viewport: Gt, write: ce }, Symbol.toStringTag, { value: "Module" })), yi = "dropdown", wi = ".bs.dropdown", Ai = ".data-api", Ei = "ArrowUp", Ti = "ArrowDown", Ci = `hide${wi}`, Oi = `hidden${wi}`, xi = `show${wi}`, ki = `shown${wi}`, Li = `click${wi}${Ai}`, Si = `keydown${wi}${Ai}`, Di = `keyup${wi}${Ai}`, $i = "show", Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Ni = `${Ii}.${$i}`, Pi = ".dropdown-menu", Mi = p() ? "top-end" : "top-start", ji = p() ? "top-start" : "top-end", Fi = p() ? "bottom-end" : "bottom-start", Hi = p() ? "bottom-start" : "bottom-end", Wi = p() ? "left-start" : "right-start", Bi = p() ? "right-start" : "left-start", zi = { autoClose: true, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, Ri = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
        class qi extends W {
          static {
            __name(this, "qi");
          }
          constructor(t2, e2) {
            super(t2, e2), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar();
          }
          static get Default() {
            return zi;
          }
          static get DefaultType() {
            return Ri;
          }
          static get NAME() {
            return yi;
          }
          toggle() {
            return this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (l(this._element) || this._isShown())
              return;
            const t2 = { relatedTarget: this._element };
            if (!N.trigger(this._element, xi, t2).defaultPrevented) {
              if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                for (const t3 of [].concat(...document.body.children))
                  N.on(t3, "mouseover", h);
              this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t2);
            }
          }
          hide() {
            if (l(this._element) || !this._isShown())
              return;
            const t2 = { relatedTarget: this._element };
            this._completeHide(t2);
          }
          dispose() {
            this._popper && this._popper.destroy(), super.dispose();
          }
          update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
          }
          _completeHide(t2) {
            if (!N.trigger(this._element, Ci, t2).defaultPrevented) {
              if ("ontouchstart" in document.documentElement)
                for (const t3 of [].concat(...document.body.children))
                  N.off(t3, "mouseover", h);
              this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t2);
            }
          }
          _getConfig(t2) {
            if ("object" == typeof (t2 = super._getConfig(t2)).reference && !o(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect)
              throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t2;
          }
          _createPopper() {
            if (void 0 === vi)
              throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t2 = this._element;
            "parent" === this._config.reference ? t2 = this._parent : o(this._config.reference) ? t2 = r(this._config.reference) : "object" == typeof this._config.reference && (t2 = this._config.reference);
            const e2 = this._getPopperConfig();
            this._popper = bi(t2, this._menu, e2);
          }
          _isShown() {
            return this._menu.classList.contains($i);
          }
          _getPlacement() {
            const t2 = this._parent;
            if (t2.classList.contains("dropend"))
              return Wi;
            if (t2.classList.contains("dropstart"))
              return Bi;
            if (t2.classList.contains("dropup-center"))
              return "top";
            if (t2.classList.contains("dropdown-center"))
              return "bottom";
            const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t2.classList.contains("dropup") ? e2 ? ji : Mi : e2 ? Hi : Fi;
          }
          _detectNavbar() {
            return null !== this._element.closest(".navbar");
          }
          _getOffset() {
            const { offset: t2 } = this._config;
            return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
          }
          _getPopperConfig() {
            const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
            return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ...g(this._config.popperConfig, [t2]) };
          }
          _selectMenuItem({ key: t2, target: e2 }) {
            const i2 = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t3) => a(t3));
            i2.length && b(i2, e2, t2 === Ti, !i2.includes(e2)).focus();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = qi.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
          static clearMenus(t2) {
            if (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key)
              return;
            const e2 = z.find(Ni);
            for (const i2 of e2) {
              const e3 = qi.getInstance(i2);
              if (!e3 || false === e3._config.autoClose)
                continue;
              const n2 = t2.composedPath(), s2 = n2.includes(e3._menu);
              if (n2.includes(e3._element) || "inside" === e3._config.autoClose && !s2 || "outside" === e3._config.autoClose && s2)
                continue;
              if (e3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName)))
                continue;
              const o2 = { relatedTarget: e3._element };
              "click" === t2.type && (o2.clickEvent = t2), e3._completeHide(o2);
            }
          }
          static dataApiKeydownHandler(t2) {
            const e2 = /input|textarea/i.test(t2.target.tagName), i2 = "Escape" === t2.key, n2 = [Ei, Ti].includes(t2.key);
            if (!n2 && !i2)
              return;
            if (e2 && !i2)
              return;
            t2.preventDefault();
            const s2 = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t2.delegateTarget.parentNode), o2 = qi.getOrCreateInstance(s2);
            if (n2)
              return t2.stopPropagation(), o2.show(), void o2._selectMenuItem(t2);
            o2._isShown() && (t2.stopPropagation(), o2.hide(), s2.focus());
          }
        }
        N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, function(t2) {
          t2.preventDefault(), qi.getOrCreateInstance(this).toggle();
        }), m(qi);
        const Vi = "backdrop", Ki = "show", Qi = `mousedown.bs.${Vi}`, Xi = { className: "modal-backdrop", clickCallback: null, isAnimated: false, isVisible: true, rootElement: "body" }, Yi = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
        class Ui extends H {
          static {
            __name(this, "Ui");
          }
          constructor(t2) {
            super(), this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
          }
          static get Default() {
            return Xi;
          }
          static get DefaultType() {
            return Yi;
          }
          static get NAME() {
            return Vi;
          }
          show(t2) {
            if (!this._config.isVisible)
              return void g(t2);
            this._append();
            const e2 = this._getElement();
            this._config.isAnimated && d(e2), e2.classList.add(Ki), this._emulateAnimation(() => {
              g(t2);
            });
          }
          hide(t2) {
            this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(() => {
              this.dispose(), g(t2);
            })) : g(t2);
          }
          dispose() {
            this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = false);
          }
          _getElement() {
            if (!this._element) {
              const t2 = document.createElement("div");
              t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
            }
            return this._element;
          }
          _configAfterMerge(t2) {
            return t2.rootElement = r(t2.rootElement), t2;
          }
          _append() {
            if (this._isAppended)
              return;
            const t2 = this._getElement();
            this._config.rootElement.append(t2), N.on(t2, Qi, () => {
              g(this._config.clickCallback);
            }), this._isAppended = true;
          }
          _emulateAnimation(t2) {
            _(t2, this._getElement(), this._config.isAnimated);
          }
        }
        const Gi = ".bs.focustrap", Ji = `focusin${Gi}`, Zi = `keydown.tab${Gi}`, tn = "backward", en = { autofocus: true, trapElement: null }, nn = { autofocus: "boolean", trapElement: "element" };
        class sn extends H {
          static {
            __name(this, "sn");
          }
          constructor(t2) {
            super(), this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
          }
          static get Default() {
            return en;
          }
          static get DefaultType() {
            return nn;
          }
          static get NAME() {
            return "focustrap";
          }
          activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, (t2) => this._handleFocusin(t2)), N.on(document, Zi, (t2) => this._handleKeydown(t2)), this._isActive = true);
          }
          deactivate() {
            this._isActive && (this._isActive = false, N.off(document, Gi));
          }
          _handleFocusin(t2) {
            const { trapElement: e2 } = this._config;
            if (t2.target === document || t2.target === e2 || e2.contains(t2.target))
              return;
            const i2 = z.focusableChildren(e2);
            0 === i2.length ? e2.focus() : this._lastTabNavDirection === tn ? i2[i2.length - 1].focus() : i2[0].focus();
          }
          _handleKeydown(t2) {
            "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? tn : "forward");
          }
        }
        const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", rn = ".sticky-top", an = "padding-right", ln = "margin-right";
        class cn {
          static {
            __name(this, "cn");
          }
          constructor() {
            this._element = document.body;
          }
          getWidth() {
            const t2 = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t2);
          }
          hide() {
            const t2 = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, an, (e2) => e2 + t2), this._setElementAttributes(on, an, (e2) => e2 + t2), this._setElementAttributes(rn, ln, (e2) => e2 - t2);
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln);
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
          }
          _setElementAttributes(t2, e2, i2) {
            const n2 = this.getWidth();
            this._applyManipulationCallback(t2, (t3) => {
              if (t3 !== this._element && window.innerWidth > t3.clientWidth + n2)
                return;
              this._saveInitialAttribute(t3, e2);
              const s2 = window.getComputedStyle(t3).getPropertyValue(e2);
              t3.style.setProperty(e2, `${i2(Number.parseFloat(s2))}px`);
            });
          }
          _saveInitialAttribute(t2, e2) {
            const i2 = t2.style.getPropertyValue(e2);
            i2 && F.setDataAttribute(t2, e2, i2);
          }
          _resetElementAttributes(t2, e2) {
            this._applyManipulationCallback(t2, (t3) => {
              const i2 = F.getDataAttribute(t3, e2);
              null !== i2 ? (F.removeDataAttribute(t3, e2), t3.style.setProperty(e2, i2)) : t3.style.removeProperty(e2);
            });
          }
          _applyManipulationCallback(t2, e2) {
            if (o(t2))
              e2(t2);
            else
              for (const i2 of z.find(t2, this._element))
                e2(i2);
          }
        }
        const hn = ".bs.modal", dn = `hide${hn}`, un = `hidePrevented${hn}`, fn = `hidden${hn}`, pn = `show${hn}`, mn = `shown${hn}`, gn = `resize${hn}`, _n = `click.dismiss${hn}`, bn = `mousedown.dismiss${hn}`, vn = `keydown.dismiss${hn}`, yn = `click${hn}.data-api`, wn = "modal-open", An = "show", En = "modal-static", Tn = { backdrop: true, focus: true, keyboard: true }, Cn = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
        class On extends W {
          static {
            __name(this, "On");
          }
          constructor(t2, e2) {
            super(t2, e2), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new cn(), this._addEventListeners();
          }
          static get Default() {
            return Tn;
          }
          static get DefaultType() {
            return Cn;
          }
          static get NAME() {
            return "modal";
          }
          toggle(t2) {
            return this._isShown ? this.hide() : this.show(t2);
          }
          show(t2) {
            this._isShown || this._isTransitioning || N.trigger(this._element, pn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(() => this._showElement(t2)));
          }
          hide() {
            this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
          }
          dispose() {
            N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          handleUpdate() {
            this._adjustDialog();
          }
          _initializeBackDrop() {
            return new Ui({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
          }
          _initializeFocusTrap() {
            return new sn({ trapElement: this._element });
          }
          _showElement(t2) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e2 = z.findOne(".modal-body", this._dialog);
            e2 && (e2.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback(() => {
              this._config.focus && this._focustrap.activate(), this._isTransitioning = false, N.trigger(this._element, mn, { relatedTarget: t2 });
            }, this._dialog, this._isAnimated());
          }
          _addEventListeners() {
            N.on(this._element, vn, (t2) => {
              "Escape" === t2.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
            }), N.on(window, gn, () => {
              this._isShown && !this._isTransitioning && this._adjustDialog();
            }), N.on(this._element, bn, (t2) => {
              N.one(this._element, _n, (e2) => {
                this._element === t2.target && this._element === e2.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
              });
            });
          }
          _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
              document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn);
            });
          }
          _isAnimated() {
            return this._element.classList.contains("fade");
          }
          _triggerBackdropTransition() {
            if (N.trigger(this._element, un).defaultPrevented)
              return;
            const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._element.style.overflowY;
            "hidden" === e2 || this._element.classList.contains(En) || (t2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(() => {
              this._element.classList.remove(En), this._queueCallback(() => {
                this._element.style.overflowY = e2;
              }, this._dialog);
            }, this._dialog), this._element.focus());
          }
          _adjustDialog() {
            const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
            if (i2 && !t2) {
              const t3 = p() ? "paddingLeft" : "paddingRight";
              this._element.style[t3] = `${e2}px`;
            }
            if (!i2 && t2) {
              const t3 = p() ? "paddingRight" : "paddingLeft";
              this._element.style[t3] = `${e2}px`;
            }
          }
          _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
          }
          static jQueryInterface(t2, e2) {
            return this.each(function() {
              const i2 = On.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === i2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                i2[t2](e2);
              }
            });
          }
        }
        N.on(document, yn, '[data-bs-toggle="modal"]', function(t2) {
          const e2 = z.getElementFromSelector(this);
          ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), N.one(e2, pn, (t3) => {
            t3.defaultPrevented || N.one(e2, fn, () => {
              a(this) && this.focus();
            });
          });
          const i2 = z.findOne(".modal.show");
          i2 && On.getInstance(i2).hide(), On.getOrCreateInstance(e2).toggle(this);
        }), R(On), m(On);
        const xn = ".bs.offcanvas", kn = ".data-api", Ln = `load${xn}${kn}`, Sn = "show", Dn = "showing", $n = "hiding", In = ".offcanvas.show", Nn = `show${xn}`, Pn = `shown${xn}`, Mn = `hide${xn}`, jn = `hidePrevented${xn}`, Fn = `hidden${xn}`, Hn = `resize${xn}`, Wn = `click${xn}${kn}`, Bn = `keydown.dismiss${xn}`, zn = { backdrop: true, keyboard: true, scroll: false }, Rn = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
        class qn extends W {
          static {
            __name(this, "qn");
          }
          constructor(t2, e2) {
            super(t2, e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
          }
          static get Default() {
            return zn;
          }
          static get DefaultType() {
            return Rn;
          }
          static get NAME() {
            return "offcanvas";
          }
          toggle(t2) {
            return this._isShown ? this.hide() : this.show(t2);
          }
          show(t2) {
            this._isShown || N.trigger(this._element, Nn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new cn().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(() => {
              this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N.trigger(this._element, Pn, { relatedTarget: t2 });
            }, this._element, true));
          }
          hide() {
            this._isShown && (N.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(() => {
              this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new cn().reset(), N.trigger(this._element, Fn);
            }, this._element, true)));
          }
          dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          _initializeBackDrop() {
            const t2 = Boolean(this._config.backdrop);
            return new Ui({ className: "offcanvas-backdrop", isVisible: t2, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t2 ? () => {
              "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, jn);
            } : null });
          }
          _initializeFocusTrap() {
            return new sn({ trapElement: this._element });
          }
          _addEventListeners() {
            N.on(this._element, Bn, (t2) => {
              "Escape" === t2.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, jn));
            });
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = qn.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function(t2) {
          const e2 = z.getElementFromSelector(this);
          if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this))
            return;
          N.one(e2, Fn, () => {
            a(this) && this.focus();
          });
          const i2 = z.findOne(In);
          i2 && i2 !== e2 && qn.getInstance(i2).hide(), qn.getOrCreateInstance(e2).toggle(this);
        }), N.on(window, Ln, () => {
          for (const t2 of z.find(In))
            qn.getOrCreateInstance(t2).show();
        }), N.on(window, Hn, () => {
          for (const t2 of z.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(t2).position && qn.getOrCreateInstance(t2).hide();
        }), R(qn), m(qn);
        const Vn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Kn = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Xn = /* @__PURE__ */ __name((t2, e2) => {
          const i2 = t2.nodeName.toLowerCase();
          return e2.includes(i2) ? !Kn.has(i2) || Boolean(Qn.test(t2.nodeValue)) : e2.filter((t3) => t3 instanceof RegExp).some((t3) => t3.test(i2));
        }, "Xn"), Yn = { allowList: Vn, content: {}, extraClass: "", html: false, sanitize: true, sanitizeFn: null, template: "<div></div>" }, Un = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Gn = { entry: "(string|element|function|null)", selector: "(string|element)" };
        class Jn extends H {
          static {
            __name(this, "Jn");
          }
          constructor(t2) {
            super(), this._config = this._getConfig(t2);
          }
          static get Default() {
            return Yn;
          }
          static get DefaultType() {
            return Un;
          }
          static get NAME() {
            return "TemplateFactory";
          }
          getContent() {
            return Object.values(this._config.content).map((t2) => this._resolvePossibleFunction(t2)).filter(Boolean);
          }
          hasContent() {
            return this.getContent().length > 0;
          }
          changeContent(t2) {
            return this._checkContent(t2), this._config.content = { ...this._config.content, ...t2 }, this;
          }
          toHtml() {
            const t2 = document.createElement("div");
            t2.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e3, i3] of Object.entries(this._config.content))
              this._setContent(t2, i3, e3);
            const e2 = t2.children[0], i2 = this._resolvePossibleFunction(this._config.extraClass);
            return i2 && e2.classList.add(...i2.split(" ")), e2;
          }
          _typeCheckConfig(t2) {
            super._typeCheckConfig(t2), this._checkContent(t2.content);
          }
          _checkContent(t2) {
            for (const [e2, i2] of Object.entries(t2))
              super._typeCheckConfig({ selector: e2, entry: i2 }, Gn);
          }
          _setContent(t2, e2, i2) {
            const n2 = z.findOne(i2, t2);
            n2 && ((e2 = this._resolvePossibleFunction(e2)) ? o(e2) ? this._putElementInTemplate(r(e2), n2) : this._config.html ? n2.innerHTML = this._maybeSanitize(e2) : n2.textContent = e2 : n2.remove());
          }
          _maybeSanitize(t2) {
            return this._config.sanitize ? function(t3, e2, i2) {
              if (!t3.length)
                return t3;
              if (i2 && "function" == typeof i2)
                return i2(t3);
              const n2 = new window.DOMParser().parseFromString(t3, "text/html"), s2 = [].concat(...n2.body.querySelectorAll("*"));
              for (const t4 of s2) {
                const i3 = t4.nodeName.toLowerCase();
                if (!Object.keys(e2).includes(i3)) {
                  t4.remove();
                  continue;
                }
                const n3 = [].concat(...t4.attributes), s3 = [].concat(e2["*"] || [], e2[i3] || []);
                for (const e3 of n3)
                  Xn(e3, s3) || t4.removeAttribute(e3.nodeName);
              }
              return n2.body.innerHTML;
            }(t2, this._config.allowList, this._config.sanitizeFn) : t2;
          }
          _resolvePossibleFunction(t2) {
            return g(t2, [this]);
          }
          _putElementInTemplate(t2, e2) {
            if (this._config.html)
              return e2.innerHTML = "", void e2.append(t2);
            e2.textContent = t2.textContent;
          }
        }
        const Zn = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ts = "fade", es = "show", is = ".modal", ns = "hide.bs.modal", ss = "hover", os = "focus", rs = { AUTO: "auto", TOP: "top", RIGHT: p() ? "left" : "right", BOTTOM: "bottom", LEFT: p() ? "right" : "left" }, as = { allowList: Vn, animation: true, boundary: "clippingParents", container: false, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: false, offset: [0, 6], placement: "top", popperConfig: null, sanitize: true, sanitizeFn: null, selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, ls = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
        class cs extends W {
          static {
            __name(this, "cs");
          }
          constructor(t2, e2) {
            if (void 0 === vi)
              throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t2, e2), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
          }
          static get Default() {
            return as;
          }
          static get DefaultType() {
            return ls;
          }
          static get NAME() {
            return "tooltip";
          }
          enable() {
            this._isEnabled = true;
          }
          disable() {
            this._isEnabled = false;
          }
          toggleEnabled() {
            this._isEnabled = !this._isEnabled;
          }
          toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
          }
          dispose() {
            clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
          }
          show() {
            if ("none" === this._element.style.display)
              throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled)
              return;
            const t2 = N.trigger(this._element, this.constructor.eventName("show")), e2 = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t2.defaultPrevented || !e2)
              return;
            this._disposePopper();
            const i2 = this._getTipElement();
            this._element.setAttribute("aria-describedby", i2.getAttribute("id"));
            const { container: n2 } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n2.append(i2), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i2), i2.classList.add(es), "ontouchstart" in document.documentElement)
              for (const t3 of [].concat(...document.body.children))
                N.on(t3, "mouseover", h);
            this._queueCallback(() => {
              N.trigger(this._element, this.constructor.eventName("shown")), false === this._isHovered && this._leave(), this._isHovered = false;
            }, this.tip, this._isAnimated());
          }
          hide() {
            if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
              if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement)
                for (const t2 of [].concat(...document.body.children))
                  N.off(t2, "mouseover", h);
              this._activeTrigger.click = false, this._activeTrigger[os] = false, this._activeTrigger[ss] = false, this._isHovered = null, this._queueCallback(() => {
                this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")));
              }, this.tip, this._isAnimated());
            }
          }
          update() {
            this._popper && this._popper.update();
          }
          _isWithContent() {
            return Boolean(this._getTitle());
          }
          _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
          }
          _createTipElement(t2) {
            const e2 = this._getTemplateFactory(t2).toHtml();
            if (!e2)
              return null;
            e2.classList.remove(ts, es), e2.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i2 = ((t3) => {
              do {
                t3 += Math.floor(1e6 * Math.random());
              } while (document.getElementById(t3));
              return t3;
            })(this.constructor.NAME).toString();
            return e2.setAttribute("id", i2), this._isAnimated() && e2.classList.add(ts), e2;
          }
          setContent(t2) {
            this._newContent = t2, this._isShown() && (this._disposePopper(), this.show());
          }
          _getTemplateFactory(t2) {
            return this._templateFactory ? this._templateFactory.changeContent(t2) : this._templateFactory = new Jn({ ...this._config, content: t2, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
          }
          _getContentForTemplate() {
            return { ".tooltip-inner": this._getTitle() };
          }
          _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
          }
          _initializeOnDelegatedTarget(t2) {
            return this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
          }
          _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(ts);
          }
          _isShown() {
            return this.tip && this.tip.classList.contains(es);
          }
          _createPopper(t2) {
            const e2 = g(this._config.placement, [this, t2, this._element]), i2 = rs[e2.toUpperCase()];
            return bi(this._element, t2, this._getPopperConfig(i2));
          }
          _getOffset() {
            const { offset: t2 } = this._config;
            return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
          }
          _resolvePossibleFunction(t2) {
            return g(t2, [this._element]);
          }
          _getPopperConfig(t2) {
            const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t3) => {
              this._getTipElement().setAttribute("data-popper-placement", t3.state.placement);
            } }] };
            return { ...e2, ...g(this._config.popperConfig, [e2]) };
          }
          _setListeners() {
            const t2 = this._config.trigger.split(" ");
            for (const e2 of t2)
              if ("click" === e2)
                N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t3) => {
                  this._initializeOnDelegatedTarget(t3).toggle();
                });
              else if ("manual" !== e2) {
                const t3 = e2 === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i2 = e2 === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                N.on(this._element, t3, this._config.selector, (t4) => {
                  const e3 = this._initializeOnDelegatedTarget(t4);
                  e3._activeTrigger["focusin" === t4.type ? os : ss] = true, e3._enter();
                }), N.on(this._element, i2, this._config.selector, (t4) => {
                  const e3 = this._initializeOnDelegatedTarget(t4);
                  e3._activeTrigger["focusout" === t4.type ? os : ss] = e3._element.contains(t4.relatedTarget), e3._leave();
                });
              }
            this._hideModalHandler = () => {
              this._element && this.hide();
            }, N.on(this._element.closest(is), ns, this._hideModalHandler);
          }
          _fixTitle() {
            const t2 = this._element.getAttribute("title");
            t2 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t2), this._element.setAttribute("data-bs-original-title", t2), this._element.removeAttribute("title"));
          }
          _enter() {
            this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
          }
          _leave() {
            this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
          }
          _setTimeout(t2, e2) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t2, e2);
          }
          _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(true);
          }
          _getConfig(t2) {
            const e2 = F.getDataAttributes(this._element);
            for (const t3 of Object.keys(e2))
              Zn.has(t3) && delete e2[t3];
            return t2 = { ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }, t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
          }
          _configAfterMerge(t2) {
            return t2.container = false === t2.container ? document.body : r(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), t2;
          }
          _getDelegateConfig() {
            const t2 = {};
            for (const [e2, i2] of Object.entries(this._config))
              this.constructor.Default[e2] !== i2 && (t2[e2] = i2);
            return t2.selector = false, t2.trigger = "manual", t2;
          }
          _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = cs.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        m(cs);
        const hs = { ...cs.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, ds = { ...cs.DefaultType, content: "(null|string|element|function)" };
        class us extends cs {
          static {
            __name(this, "us");
          }
          static get Default() {
            return hs;
          }
          static get DefaultType() {
            return ds;
          }
          static get NAME() {
            return "popover";
          }
          _isWithContent() {
            return this._getTitle() || this._getContent();
          }
          _getContentForTemplate() {
            return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
          }
          _getContent() {
            return this._resolvePossibleFunction(this._config.content);
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = us.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        m(us);
        const fs = ".bs.scrollspy", ps = `activate${fs}`, ms = `click${fs}`, gs = `load${fs}.data-api`, _s = "active", bs = "[href]", vs = ".nav-link", ys = `${vs}, .nav-item > ${vs}, .list-group-item`, ws = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null, threshold: [0.1, 0.5, 1] }, As = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
        class Es extends W {
          static {
            __name(this, "Es");
          }
          constructor(t2, e2) {
            super(t2, e2), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
          }
          static get Default() {
            return ws;
          }
          static get DefaultType() {
            return As;
          }
          static get NAME() {
            return "scrollspy";
          }
          refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t2 of this._observableSections.values())
              this._observer.observe(t2);
          }
          dispose() {
            this._observer.disconnect(), super.dispose();
          }
          _configAfterMerge(t2) {
            return t2.target = r(t2.target) || document.body, t2.rootMargin = t2.offset ? `${t2.offset}px 0px -30%` : t2.rootMargin, "string" == typeof t2.threshold && (t2.threshold = t2.threshold.split(",").map((t3) => Number.parseFloat(t3))), t2;
          }
          _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, (t2) => {
              const e2 = this._observableSections.get(t2.target.hash);
              if (e2) {
                t2.preventDefault();
                const i2 = this._rootElement || window, n2 = e2.offsetTop - this._element.offsetTop;
                if (i2.scrollTo)
                  return void i2.scrollTo({ top: n2, behavior: "smooth" });
                i2.scrollTop = n2;
              }
            }));
          }
          _getNewObserver() {
            const t2 = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
            return new IntersectionObserver((t3) => this._observerCallback(t3), t2);
          }
          _observerCallback(t2) {
            const e2 = /* @__PURE__ */ __name((t3) => this._targetLinks.get(`#${t3.target.id}`), "e"), i2 = /* @__PURE__ */ __name((t3) => {
              this._previousScrollData.visibleEntryTop = t3.target.offsetTop, this._process(e2(t3));
            }, "i"), n2 = (this._rootElement || document.documentElement).scrollTop, s2 = n2 >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n2;
            for (const o2 of t2) {
              if (!o2.isIntersecting) {
                this._activeTarget = null, this._clearActiveClass(e2(o2));
                continue;
              }
              const t3 = o2.target.offsetTop >= this._previousScrollData.visibleEntryTop;
              if (s2 && t3) {
                if (i2(o2), !n2)
                  return;
              } else
                s2 || t3 || i2(o2);
            }
          }
          _initializeTargetsAndObservables() {
            this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
            const t2 = z.find(bs, this._config.target);
            for (const e2 of t2) {
              if (!e2.hash || l(e2))
                continue;
              const t3 = z.findOne(decodeURI(e2.hash), this._element);
              a(t3) && (this._targetLinks.set(decodeURI(e2.hash), e2), this._observableSections.set(e2.hash, t3));
            }
          }
          _process(t2) {
            this._activeTarget !== t2 && (this._clearActiveClass(this._config.target), this._activeTarget = t2, t2.classList.add(_s), this._activateParents(t2), N.trigger(this._element, ps, { relatedTarget: t2 }));
          }
          _activateParents(t2) {
            if (t2.classList.contains("dropdown-item"))
              z.findOne(".dropdown-toggle", t2.closest(".dropdown")).classList.add(_s);
            else
              for (const e2 of z.parents(t2, ".nav, .list-group"))
                for (const t3 of z.prev(e2, ys))
                  t3.classList.add(_s);
          }
          _clearActiveClass(t2) {
            t2.classList.remove(_s);
            const e2 = z.find(`${bs}.${_s}`, t2);
            for (const t3 of e2)
              t3.classList.remove(_s);
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Es.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        N.on(window, gs, () => {
          for (const t2 of z.find('[data-bs-spy="scroll"]'))
            Es.getOrCreateInstance(t2);
        }), m(Es);
        const Ts = ".bs.tab", Cs = `hide${Ts}`, Os = `hidden${Ts}`, xs = `show${Ts}`, ks = `shown${Ts}`, Ls = `click${Ts}`, Ss = `keydown${Ts}`, Ds = `load${Ts}`, $s = "ArrowLeft", Is = "ArrowRight", Ns = "ArrowUp", Ps = "ArrowDown", Ms = "Home", js = "End", Fs = "active", Hs = "fade", Ws = "show", Bs = ".dropdown-toggle", zs = `:not(${Bs})`, Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`, Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
        class Ks extends W {
          static {
            __name(this, "Ks");
          }
          constructor(t2) {
            super(t2), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ss, (t3) => this._keydown(t3)));
          }
          static get NAME() {
            return "tab";
          }
          show() {
            const t2 = this._element;
            if (this._elemIsActive(t2))
              return;
            const e2 = this._getActiveElem(), i2 = e2 ? N.trigger(e2, Cs, { relatedTarget: t2 }) : null;
            N.trigger(t2, xs, { relatedTarget: e2 }).defaultPrevented || i2 && i2.defaultPrevented || (this._deactivate(e2, t2), this._activate(t2, e2));
          }
          _activate(t2, e2) {
            t2 && (t2.classList.add(Fs), this._activate(z.getElementFromSelector(t2)), this._queueCallback(() => {
              "tab" === t2.getAttribute("role") ? (t2.removeAttribute("tabindex"), t2.setAttribute("aria-selected", true), this._toggleDropDown(t2, true), N.trigger(t2, ks, { relatedTarget: e2 })) : t2.classList.add(Ws);
            }, t2, t2.classList.contains(Hs)));
          }
          _deactivate(t2, e2) {
            t2 && (t2.classList.remove(Fs), t2.blur(), this._deactivate(z.getElementFromSelector(t2)), this._queueCallback(() => {
              "tab" === t2.getAttribute("role") ? (t2.setAttribute("aria-selected", false), t2.setAttribute("tabindex", "-1"), this._toggleDropDown(t2, false), N.trigger(t2, Os, { relatedTarget: e2 })) : t2.classList.remove(Ws);
            }, t2, t2.classList.contains(Hs)));
          }
          _keydown(t2) {
            if (![$s, Is, Ns, Ps, Ms, js].includes(t2.key))
              return;
            t2.stopPropagation(), t2.preventDefault();
            const e2 = this._getChildren().filter((t3) => !l(t3));
            let i2;
            if ([Ms, js].includes(t2.key))
              i2 = e2[t2.key === Ms ? 0 : e2.length - 1];
            else {
              const n2 = [Is, Ps].includes(t2.key);
              i2 = b(e2, t2.target, n2, true);
            }
            i2 && (i2.focus({ preventScroll: true }), Ks.getOrCreateInstance(i2).show());
          }
          _getChildren() {
            return z.find(qs, this._parent);
          }
          _getActiveElem() {
            return this._getChildren().find((t2) => this._elemIsActive(t2)) || null;
          }
          _setInitialAttributes(t2, e2) {
            this._setAttributeIfNotExists(t2, "role", "tablist");
            for (const t3 of e2)
              this._setInitialAttributesOnChild(t3);
          }
          _setInitialAttributesOnChild(t2) {
            t2 = this._getInnerElement(t2);
            const e2 = this._elemIsActive(t2), i2 = this._getOuterElement(t2);
            t2.setAttribute("aria-selected", e2), i2 !== t2 && this._setAttributeIfNotExists(i2, "role", "presentation"), e2 || t2.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t2, "role", "tab"), this._setInitialAttributesOnTargetPanel(t2);
          }
          _setInitialAttributesOnTargetPanel(t2) {
            const e2 = z.getElementFromSelector(t2);
            e2 && (this._setAttributeIfNotExists(e2, "role", "tabpanel"), t2.id && this._setAttributeIfNotExists(e2, "aria-labelledby", `${t2.id}`));
          }
          _toggleDropDown(t2, e2) {
            const i2 = this._getOuterElement(t2);
            if (!i2.classList.contains("dropdown"))
              return;
            const n2 = /* @__PURE__ */ __name((t3, n3) => {
              const s2 = z.findOne(t3, i2);
              s2 && s2.classList.toggle(n3, e2);
            }, "n");
            n2(Bs, Fs), n2(".dropdown-menu", Ws), i2.setAttribute("aria-expanded", e2);
          }
          _setAttributeIfNotExists(t2, e2, i2) {
            t2.hasAttribute(e2) || t2.setAttribute(e2, i2);
          }
          _elemIsActive(t2) {
            return t2.classList.contains(Fs);
          }
          _getInnerElement(t2) {
            return t2.matches(qs) ? t2 : z.findOne(qs, t2);
          }
          _getOuterElement(t2) {
            return t2.closest(".nav-item, .list-group-item") || t2;
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Ks.getOrCreateInstance(this);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        N.on(document, Ls, Rs, function(t2) {
          ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show();
        }), N.on(window, Ds, () => {
          for (const t2 of z.find(Vs))
            Ks.getOrCreateInstance(t2);
        }), m(Ks);
        const Qs = ".bs.toast", Xs = `mouseover${Qs}`, Ys = `mouseout${Qs}`, Us = `focusin${Qs}`, Gs = `focusout${Qs}`, Js = `hide${Qs}`, Zs = `hidden${Qs}`, to = `show${Qs}`, eo = `shown${Qs}`, io = "hide", no = "show", so = "showing", oo = { animation: "boolean", autohide: "boolean", delay: "number" }, ro = { animation: true, autohide: true, delay: 5e3 };
        class ao extends W {
          static {
            __name(this, "ao");
          }
          constructor(t2, e2) {
            super(t2, e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
          }
          static get Default() {
            return ro;
          }
          static get DefaultType() {
            return oo;
          }
          static get NAME() {
            return "toast";
          }
          show() {
            N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback(() => {
              this._element.classList.remove(so), N.trigger(this._element, eo), this._maybeScheduleHide();
            }, this._element, this._config.animation));
          }
          hide() {
            this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(() => {
              this._element.classList.add(io), this._element.classList.remove(so, no), N.trigger(this._element, Zs);
            }, this._element, this._config.animation)));
          }
          dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose();
          }
          isShown() {
            return this._element.classList.contains(no);
          }
          _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
          }
          _onInteraction(t2, e2) {
            switch (t2.type) {
              case "mouseover":
              case "mouseout":
                this._hasMouseInteraction = e2;
                break;
              case "focusin":
              case "focusout":
                this._hasKeyboardInteraction = e2;
            }
            if (e2)
              return void this._clearTimeout();
            const i2 = t2.relatedTarget;
            this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
          }
          _setListeners() {
            N.on(this._element, Xs, (t2) => this._onInteraction(t2, true)), N.on(this._element, Ys, (t2) => this._onInteraction(t2, false)), N.on(this._element, Us, (t2) => this._onInteraction(t2, true)), N.on(this._element, Gs, (t2) => this._onInteraction(t2, false));
          }
          _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = ao.getOrCreateInstance(this, t2);
              if ("string" == typeof t2) {
                if (void 0 === e2[t2])
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        return R(ao), m(ao), { Alert: Q, Button: Y, Carousel: xt, Collapse: Bt, Dropdown: qi, Modal: On, Offcanvas: qn, Popover: us, ScrollSpy: Es, Tab: Ks, Toast: ao, Tooltip: cs };
      });
    }
  });

  // node_modules/wheel/index.js
  var require_wheel = __commonJS({
    "node_modules/wheel/index.js"(exports, module) {
      module.exports = addWheelListener;
      module.exports.addWheelListener = addWheelListener;
      module.exports.removeWheelListener = removeWheelListener;
      function addWheelListener(element, listener, useCapture) {
        element.addEventListener("wheel", listener, useCapture);
      }
      __name(addWheelListener, "addWheelListener");
      function removeWheelListener(element, listener, useCapture) {
        element.removeEventListener("wheel", listener, useCapture);
      }
      __name(removeWheelListener, "removeWheelListener");
    }
  });

  // node_modules/bezier-easing/src/index.js
  var require_src = __commonJS({
    "node_modules/bezier-easing/src/index.js"(exports, module) {
      var NEWTON_ITERATIONS = 4;
      var NEWTON_MIN_SLOPE = 1e-3;
      var SUBDIVISION_PRECISION = 1e-7;
      var SUBDIVISION_MAX_ITERATIONS = 10;
      var kSplineTableSize = 11;
      var kSampleStepSize = 1 / (kSplineTableSize - 1);
      var float32ArraySupported = typeof Float32Array === "function";
      function A(aA1, aA2) {
        return 1 - 3 * aA2 + 3 * aA1;
      }
      __name(A, "A");
      function B(aA1, aA2) {
        return 3 * aA2 - 6 * aA1;
      }
      __name(B, "B");
      function C(aA1) {
        return 3 * aA1;
      }
      __name(C, "C");
      function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
      }
      __name(calcBezier, "calcBezier");
      function getSlope(aT, aA1, aA2) {
        return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
      }
      __name(getSlope, "getSlope");
      function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
          currentT = aA + (aB - aA) / 2;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
      }
      __name(binarySubdivide, "binarySubdivide");
      function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0) {
            return aGuessT;
          }
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      __name(newtonRaphsonIterate, "newtonRaphsonIterate");
      function LinearEasing(x) {
        return x;
      }
      __name(LinearEasing, "LinearEasing");
      module.exports = /* @__PURE__ */ __name(function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
          throw new Error("bezier x values must be in [0, 1] range");
        }
        if (mX1 === mY1 && mX2 === mY2) {
          return LinearEasing;
        }
        var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        for (var i = 0; i < kSplineTableSize; ++i) {
          sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
        function getTForX(aX) {
          var intervalStart = 0;
          var currentSample = 1;
          var lastSample = kSplineTableSize - 1;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
          }
          --currentSample;
          var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          var guessForT = intervalStart + dist * kSampleStepSize;
          var initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
          } else if (initialSlope === 0) {
            return guessForT;
          } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
        }
        __name(getTForX, "getTForX");
        return /* @__PURE__ */ __name(function BezierEasing(x) {
          if (x === 0) {
            return 0;
          }
          if (x === 1) {
            return 1;
          }
          return calcBezier(getTForX(x), mY1, mY2);
        }, "BezierEasing");
      }, "bezier");
    }
  });

  // node_modules/amator/index.js
  var require_amator = __commonJS({
    "node_modules/amator/index.js"(exports, module) {
      var BezierEasing = require_src();
      var animations = {
        ease: BezierEasing(0.25, 0.1, 0.25, 1),
        easeIn: BezierEasing(0.42, 0, 1, 1),
        easeOut: BezierEasing(0, 0, 0.58, 1),
        easeInOut: BezierEasing(0.42, 0, 0.58, 1),
        linear: BezierEasing(0, 0, 1, 1)
      };
      module.exports = animate;
      module.exports.makeAggregateRaf = makeAggregateRaf;
      module.exports.sharedScheduler = makeAggregateRaf();
      function animate(source, target, options) {
        var start = /* @__PURE__ */ Object.create(null);
        var diff = /* @__PURE__ */ Object.create(null);
        options = options || {};
        var easing = typeof options.easing === "function" ? options.easing : animations[options.easing];
        if (!easing) {
          if (options.easing) {
            console.warn("Unknown easing function in amator: " + options.easing);
          }
          easing = animations.ease;
        }
        var step = typeof options.step === "function" ? options.step : noop;
        var done = typeof options.done === "function" ? options.done : noop;
        var scheduler = getScheduler(options.scheduler);
        var keys = Object.keys(target);
        keys.forEach(function(key) {
          start[key] = source[key];
          diff[key] = target[key] - source[key];
        });
        var durationInMs = typeof options.duration === "number" ? options.duration : 400;
        var durationInFrames = Math.max(1, durationInMs * 0.06);
        var previousAnimationId;
        var frame = 0;
        previousAnimationId = scheduler.next(loop);
        return {
          cancel
        };
        function cancel() {
          scheduler.cancel(previousAnimationId);
          previousAnimationId = 0;
        }
        __name(cancel, "cancel");
        function loop() {
          var t = easing(frame / durationInFrames);
          frame += 1;
          setValues(t);
          if (frame <= durationInFrames) {
            previousAnimationId = scheduler.next(loop);
            step(source);
          } else {
            previousAnimationId = 0;
            setTimeout(function() {
              done(source);
            }, 0);
          }
        }
        __name(loop, "loop");
        function setValues(t) {
          keys.forEach(function(key) {
            source[key] = diff[key] * t + start[key];
          });
        }
        __name(setValues, "setValues");
      }
      __name(animate, "animate");
      function noop() {
      }
      __name(noop, "noop");
      function getScheduler(scheduler) {
        if (!scheduler) {
          var canRaf = typeof window !== "undefined" && window.requestAnimationFrame;
          return canRaf ? rafScheduler() : timeoutScheduler();
        }
        if (typeof scheduler.next !== "function")
          throw new Error("Scheduler is supposed to have next(cb) function");
        if (typeof scheduler.cancel !== "function")
          throw new Error("Scheduler is supposed to have cancel(handle) function");
        return scheduler;
      }
      __name(getScheduler, "getScheduler");
      function rafScheduler() {
        return {
          next: window.requestAnimationFrame.bind(window),
          cancel: window.cancelAnimationFrame.bind(window)
        };
      }
      __name(rafScheduler, "rafScheduler");
      function timeoutScheduler() {
        return {
          next: function(cb) {
            return setTimeout(cb, 1e3 / 60);
          },
          cancel: function(id2) {
            return clearTimeout(id2);
          }
        };
      }
      __name(timeoutScheduler, "timeoutScheduler");
      function makeAggregateRaf() {
        var frontBuffer = /* @__PURE__ */ new Set();
        var backBuffer = /* @__PURE__ */ new Set();
        var frameToken = 0;
        return {
          next,
          cancel: next,
          clearAll
        };
        function clearAll() {
          frontBuffer.clear();
          backBuffer.clear();
          cancelAnimationFrame(frameToken);
          frameToken = 0;
        }
        __name(clearAll, "clearAll");
        function next(callback) {
          backBuffer.add(callback);
          renderNextFrame();
        }
        __name(next, "next");
        function renderNextFrame() {
          if (!frameToken)
            frameToken = requestAnimationFrame(renderFrame);
        }
        __name(renderNextFrame, "renderNextFrame");
        function renderFrame() {
          frameToken = 0;
          var t = backBuffer;
          backBuffer = frontBuffer;
          frontBuffer = t;
          frontBuffer.forEach(function(callback) {
            callback();
          });
          frontBuffer.clear();
        }
        __name(renderFrame, "renderFrame");
        function cancel(callback) {
          backBuffer.delete(callback);
        }
        __name(cancel, "cancel");
      }
      __name(makeAggregateRaf, "makeAggregateRaf");
    }
  });

  // node_modules/ngraph.events/index.js
  var require_ngraph = __commonJS({
    "node_modules/ngraph.events/index.js"(exports, module) {
      module.exports = /* @__PURE__ */ __name(function eventify(subject) {
        validateSubject(subject);
        var eventsStorage = createEventsStorage(subject);
        subject.on = eventsStorage.on;
        subject.off = eventsStorage.off;
        subject.fire = eventsStorage.fire;
        return subject;
      }, "eventify");
      function createEventsStorage(subject) {
        var registeredEvents = /* @__PURE__ */ Object.create(null);
        return {
          on: function(eventName, callback, ctx) {
            if (typeof callback !== "function") {
              throw new Error("callback is expected to be a function");
            }
            var handlers = registeredEvents[eventName];
            if (!handlers) {
              handlers = registeredEvents[eventName] = [];
            }
            handlers.push({ callback, ctx });
            return subject;
          },
          off: function(eventName, callback) {
            var wantToRemoveAll = typeof eventName === "undefined";
            if (wantToRemoveAll) {
              registeredEvents = /* @__PURE__ */ Object.create(null);
              return subject;
            }
            if (registeredEvents[eventName]) {
              var deleteAllCallbacksForEvent = typeof callback !== "function";
              if (deleteAllCallbacksForEvent) {
                delete registeredEvents[eventName];
              } else {
                var callbacks = registeredEvents[eventName];
                for (var i = 0; i < callbacks.length; ++i) {
                  if (callbacks[i].callback === callback) {
                    callbacks.splice(i, 1);
                  }
                }
              }
            }
            return subject;
          },
          fire: function(eventName) {
            var callbacks = registeredEvents[eventName];
            if (!callbacks) {
              return subject;
            }
            var fireArguments;
            if (arguments.length > 1) {
              fireArguments = Array.prototype.splice.call(arguments, 1);
            }
            for (var i = 0; i < callbacks.length; ++i) {
              var callbackInfo = callbacks[i];
              callbackInfo.callback.apply(callbackInfo.ctx, fireArguments);
            }
            return subject;
          }
        };
      }
      __name(createEventsStorage, "createEventsStorage");
      function validateSubject(subject) {
        if (!subject) {
          throw new Error("Eventify cannot use falsy object as events subject");
        }
        var reservedWords = ["on", "fire", "off"];
        for (var i = 0; i < reservedWords.length; ++i) {
          if (subject.hasOwnProperty(reservedWords[i])) {
            throw new Error("Subject cannot be eventified, since it already has property '" + reservedWords[i] + "'");
          }
        }
      }
      __name(validateSubject, "validateSubject");
    }
  });

  // node_modules/panzoom/lib/kinetic.js
  var require_kinetic = __commonJS({
    "node_modules/panzoom/lib/kinetic.js"(exports, module) {
      module.exports = kinetic;
      function kinetic(getPoint, scroll, settings) {
        if (typeof settings !== "object") {
          settings = {};
        }
        var minVelocity = typeof settings.minVelocity === "number" ? settings.minVelocity : 5;
        var amplitude = typeof settings.amplitude === "number" ? settings.amplitude : 0.25;
        var cancelAnimationFrame2 = typeof settings.cancelAnimationFrame === "function" ? settings.cancelAnimationFrame : getCancelAnimationFrame();
        var requestAnimationFrame2 = typeof settings.requestAnimationFrame === "function" ? settings.requestAnimationFrame : getRequestAnimationFrame();
        var lastPoint;
        var timestamp;
        var timeConstant = 342;
        var ticker;
        var vx, targetX, ax;
        var vy, targetY, ay;
        var raf;
        return {
          start,
          stop,
          cancel: dispose
        };
        function dispose() {
          cancelAnimationFrame2(ticker);
          cancelAnimationFrame2(raf);
        }
        __name(dispose, "dispose");
        function start() {
          lastPoint = getPoint();
          ax = ay = vx = vy = 0;
          timestamp = /* @__PURE__ */ new Date();
          cancelAnimationFrame2(ticker);
          cancelAnimationFrame2(raf);
          ticker = requestAnimationFrame2(track);
        }
        __name(start, "start");
        function track() {
          var now = Date.now();
          var elapsed = now - timestamp;
          timestamp = now;
          var currentPoint = getPoint();
          var dx = currentPoint.x - lastPoint.x;
          var dy = currentPoint.y - lastPoint.y;
          lastPoint = currentPoint;
          var dt = 1e3 / (1 + elapsed);
          vx = 0.8 * dx * dt + 0.2 * vx;
          vy = 0.8 * dy * dt + 0.2 * vy;
          ticker = requestAnimationFrame2(track);
        }
        __name(track, "track");
        function stop() {
          cancelAnimationFrame2(ticker);
          cancelAnimationFrame2(raf);
          var currentPoint = getPoint();
          targetX = currentPoint.x;
          targetY = currentPoint.y;
          timestamp = Date.now();
          if (vx < -minVelocity || vx > minVelocity) {
            ax = amplitude * vx;
            targetX += ax;
          }
          if (vy < -minVelocity || vy > minVelocity) {
            ay = amplitude * vy;
            targetY += ay;
          }
          raf = requestAnimationFrame2(autoScroll);
        }
        __name(stop, "stop");
        function autoScroll() {
          var elapsed = Date.now() - timestamp;
          var moving = false;
          var dx = 0;
          var dy = 0;
          if (ax) {
            dx = -ax * Math.exp(-elapsed / timeConstant);
            if (dx > 0.5 || dx < -0.5)
              moving = true;
            else
              dx = ax = 0;
          }
          if (ay) {
            dy = -ay * Math.exp(-elapsed / timeConstant);
            if (dy > 0.5 || dy < -0.5)
              moving = true;
            else
              dy = ay = 0;
          }
          if (moving) {
            scroll(targetX + dx, targetY + dy);
            raf = requestAnimationFrame2(autoScroll);
          }
        }
        __name(autoScroll, "autoScroll");
      }
      __name(kinetic, "kinetic");
      function getCancelAnimationFrame() {
        if (typeof cancelAnimationFrame === "function")
          return cancelAnimationFrame;
        return clearTimeout;
      }
      __name(getCancelAnimationFrame, "getCancelAnimationFrame");
      function getRequestAnimationFrame() {
        if (typeof requestAnimationFrame === "function")
          return requestAnimationFrame;
        return function(handler) {
          return setTimeout(handler, 16);
        };
      }
      __name(getRequestAnimationFrame, "getRequestAnimationFrame");
    }
  });

  // node_modules/panzoom/lib/createTextSelectionInterceptor.js
  var require_createTextSelectionInterceptor = __commonJS({
    "node_modules/panzoom/lib/createTextSelectionInterceptor.js"(exports, module) {
      module.exports = createTextSelectionInterceptor;
      function createTextSelectionInterceptor(useFake) {
        if (useFake) {
          return {
            capture: noop,
            release: noop
          };
        }
        var dragObject;
        var prevSelectStart;
        var prevDragStart;
        var wasCaptured = false;
        return {
          capture,
          release
        };
        function capture(domObject) {
          wasCaptured = true;
          prevSelectStart = window.document.onselectstart;
          prevDragStart = window.document.ondragstart;
          window.document.onselectstart = disabled;
          dragObject = domObject;
          dragObject.ondragstart = disabled;
        }
        __name(capture, "capture");
        function release() {
          if (!wasCaptured)
            return;
          wasCaptured = false;
          window.document.onselectstart = prevSelectStart;
          if (dragObject)
            dragObject.ondragstart = prevDragStart;
        }
        __name(release, "release");
      }
      __name(createTextSelectionInterceptor, "createTextSelectionInterceptor");
      function disabled(e) {
        e.stopPropagation();
        return false;
      }
      __name(disabled, "disabled");
      function noop() {
      }
      __name(noop, "noop");
    }
  });

  // node_modules/panzoom/lib/transform.js
  var require_transform = __commonJS({
    "node_modules/panzoom/lib/transform.js"(exports, module) {
      module.exports = Transform;
      function Transform() {
        this.x = 0;
        this.y = 0;
        this.scale = 1;
      }
      __name(Transform, "Transform");
    }
  });

  // node_modules/panzoom/lib/svgController.js
  var require_svgController = __commonJS({
    "node_modules/panzoom/lib/svgController.js"(exports, module) {
      module.exports = makeSvgController;
      module.exports.canAttach = isSVGElement;
      function makeSvgController(svgElement, options) {
        if (!isSVGElement(svgElement)) {
          throw new Error("svg element is required for svg.panzoom to work");
        }
        var owner = svgElement.ownerSVGElement;
        if (!owner) {
          throw new Error(
            "Do not apply panzoom to the root <svg> element. Use its child instead (e.g. <g></g>). As of March 2016 only FireFox supported transform on the root element"
          );
        }
        if (!options.disableKeyboardInteraction) {
          owner.setAttribute("tabindex", 0);
        }
        var api = {
          getBBox,
          getScreenCTM,
          getOwner,
          applyTransform,
          initTransform
        };
        return api;
        function getOwner() {
          return owner;
        }
        __name(getOwner, "getOwner");
        function getBBox() {
          var bbox = svgElement.getBBox();
          return {
            left: bbox.x,
            top: bbox.y,
            width: bbox.width,
            height: bbox.height
          };
        }
        __name(getBBox, "getBBox");
        function getScreenCTM() {
          var ctm = owner.getCTM();
          if (!ctm) {
            return owner.getScreenCTM();
          }
          return ctm;
        }
        __name(getScreenCTM, "getScreenCTM");
        function initTransform(transform) {
          var screenCTM = svgElement.getCTM();
          if (screenCTM === null) {
            screenCTM = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
          }
          transform.x = screenCTM.e;
          transform.y = screenCTM.f;
          transform.scale = screenCTM.a;
          owner.removeAttributeNS(null, "viewBox");
        }
        __name(initTransform, "initTransform");
        function applyTransform(transform) {
          svgElement.setAttribute("transform", "matrix(" + transform.scale + " 0 0 " + transform.scale + " " + transform.x + " " + transform.y + ")");
        }
        __name(applyTransform, "applyTransform");
      }
      __name(makeSvgController, "makeSvgController");
      function isSVGElement(element) {
        return element && element.ownerSVGElement && element.getCTM;
      }
      __name(isSVGElement, "isSVGElement");
    }
  });

  // node_modules/panzoom/lib/domController.js
  var require_domController = __commonJS({
    "node_modules/panzoom/lib/domController.js"(exports, module) {
      module.exports = makeDomController;
      module.exports.canAttach = isDomElement;
      function makeDomController(domElement, options) {
        var elementValid = isDomElement(domElement);
        if (!elementValid) {
          throw new Error("panzoom requires DOM element to be attached to the DOM tree");
        }
        var owner = domElement.parentElement;
        domElement.scrollTop = 0;
        if (!options.disableKeyboardInteraction) {
          owner.setAttribute("tabindex", 0);
        }
        var api = {
          getBBox,
          getOwner,
          applyTransform
        };
        return api;
        function getOwner() {
          return owner;
        }
        __name(getOwner, "getOwner");
        function getBBox() {
          return {
            left: 0,
            top: 0,
            width: domElement.clientWidth,
            height: domElement.clientHeight
          };
        }
        __name(getBBox, "getBBox");
        function applyTransform(transform) {
          domElement.style.transformOrigin = "0 0 0";
          domElement.style.transform = "matrix(" + transform.scale + ", 0, 0, " + transform.scale + ", " + transform.x + ", " + transform.y + ")";
        }
        __name(applyTransform, "applyTransform");
      }
      __name(makeDomController, "makeDomController");
      function isDomElement(element) {
        return element && element.parentElement && element.style;
      }
      __name(isDomElement, "isDomElement");
    }
  });

  // node_modules/panzoom/index.js
  var require_panzoom = __commonJS({
    "node_modules/panzoom/index.js"(exports, module) {
      "use strict";
      var wheel = require_wheel();
      var animate = require_amator();
      var eventify = require_ngraph();
      var kinetic = require_kinetic();
      var createTextSelectionInterceptor = require_createTextSelectionInterceptor();
      var domTextSelectionInterceptor = createTextSelectionInterceptor();
      var fakeTextSelectorInterceptor = createTextSelectionInterceptor(true);
      var Transform = require_transform();
      var makeSvgController = require_svgController();
      var makeDomController = require_domController();
      var defaultZoomSpeed = 1;
      var defaultDoubleTapZoomSpeed = 1.75;
      var doubleTapSpeedInMS = 300;
      var clickEventTimeInMS = 200;
      module.exports = createPanZoom;
      function createPanZoom(domElement, options) {
        options = options || {};
        var panController = options.controller;
        if (!panController) {
          if (makeSvgController.canAttach(domElement)) {
            panController = makeSvgController(domElement, options);
          } else if (makeDomController.canAttach(domElement)) {
            panController = makeDomController(domElement, options);
          }
        }
        if (!panController) {
          throw new Error(
            "Cannot create panzoom for the current type of dom element"
          );
        }
        var owner = panController.getOwner();
        var storedCTMResult = { x: 0, y: 0 };
        var isDirty = false;
        var transform = new Transform();
        if (panController.initTransform) {
          panController.initTransform(transform);
        }
        var filterKey = typeof options.filterKey === "function" ? options.filterKey : noop;
        var pinchSpeed = typeof options.pinchSpeed === "number" ? options.pinchSpeed : 1;
        var bounds = options.bounds;
        var maxZoom = typeof options.maxZoom === "number" ? options.maxZoom : Number.POSITIVE_INFINITY;
        var minZoom = typeof options.minZoom === "number" ? options.minZoom : 0;
        var boundsPadding = typeof options.boundsPadding === "number" ? options.boundsPadding : 0.05;
        var zoomDoubleClickSpeed = typeof options.zoomDoubleClickSpeed === "number" ? options.zoomDoubleClickSpeed : defaultDoubleTapZoomSpeed;
        var beforeWheel = options.beforeWheel || noop;
        var beforeMouseDown = options.beforeMouseDown || noop;
        var speed = typeof options.zoomSpeed === "number" ? options.zoomSpeed : defaultZoomSpeed;
        var transformOrigin = parseTransformOrigin(options.transformOrigin);
        var textSelection = options.enableTextSelection ? fakeTextSelectorInterceptor : domTextSelectionInterceptor;
        validateBounds(bounds);
        if (options.autocenter) {
          autocenter();
        }
        var frameAnimation;
        var lastTouchEndTime = 0;
        var lastTouchStartTime = 0;
        var pendingClickEventTimeout = 0;
        var lastMouseDownedEvent = null;
        var lastMouseDownTime = /* @__PURE__ */ new Date();
        var lastSingleFingerOffset;
        var touchInProgress = false;
        var panstartFired = false;
        var mouseX;
        var mouseY;
        var clickX;
        var clickY;
        var pinchZoomLength;
        var smoothScroll;
        if ("smoothScroll" in options && !options.smoothScroll) {
          smoothScroll = rigidScroll();
        } else {
          smoothScroll = kinetic(getPoint, scroll, options.smoothScroll);
        }
        var moveByAnimation;
        var zoomToAnimation;
        var multiTouch;
        var paused = false;
        listenForEvents();
        var api = {
          dispose,
          moveBy: internalMoveBy,
          moveTo,
          smoothMoveTo,
          centerOn,
          zoomTo: publicZoomTo,
          zoomAbs,
          smoothZoom,
          smoothZoomAbs,
          showRectangle,
          pause,
          resume,
          isPaused,
          getTransform: getTransformModel,
          getMinZoom,
          setMinZoom,
          getMaxZoom,
          setMaxZoom,
          getTransformOrigin,
          setTransformOrigin,
          getZoomSpeed,
          setZoomSpeed
        };
        eventify(api);
        var initialX = typeof options.initialX === "number" ? options.initialX : transform.x;
        var initialY = typeof options.initialY === "number" ? options.initialY : transform.y;
        var initialZoom = typeof options.initialZoom === "number" ? options.initialZoom : transform.scale;
        if (initialX != transform.x || initialY != transform.y || initialZoom != transform.scale) {
          zoomAbs(initialX, initialY, initialZoom);
        }
        return api;
        function pause() {
          releaseEvents();
          paused = true;
        }
        __name(pause, "pause");
        function resume() {
          if (paused) {
            listenForEvents();
            paused = false;
          }
        }
        __name(resume, "resume");
        function isPaused() {
          return paused;
        }
        __name(isPaused, "isPaused");
        function showRectangle(rect) {
          var clientRect = owner.getBoundingClientRect();
          var size = transformToScreen(clientRect.width, clientRect.height);
          var rectWidth = rect.right - rect.left;
          var rectHeight = rect.bottom - rect.top;
          if (!Number.isFinite(rectWidth) || !Number.isFinite(rectHeight)) {
            throw new Error("Invalid rectangle");
          }
          var dw = size.x / rectWidth;
          var dh = size.y / rectHeight;
          var scale = Math.min(dw, dh);
          transform.x = -(rect.left + rectWidth / 2) * scale + size.x / 2;
          transform.y = -(rect.top + rectHeight / 2) * scale + size.y / 2;
          transform.scale = scale;
        }
        __name(showRectangle, "showRectangle");
        function transformToScreen(x, y) {
          if (panController.getScreenCTM) {
            var parentCTM = panController.getScreenCTM();
            var parentScaleX = parentCTM.a;
            var parentScaleY = parentCTM.d;
            var parentOffsetX = parentCTM.e;
            var parentOffsetY = parentCTM.f;
            storedCTMResult.x = x * parentScaleX - parentOffsetX;
            storedCTMResult.y = y * parentScaleY - parentOffsetY;
          } else {
            storedCTMResult.x = x;
            storedCTMResult.y = y;
          }
          return storedCTMResult;
        }
        __name(transformToScreen, "transformToScreen");
        function autocenter() {
          var w;
          var h;
          var left = 0;
          var top = 0;
          var sceneBoundingBox = getBoundingBox();
          if (sceneBoundingBox) {
            left = sceneBoundingBox.left;
            top = sceneBoundingBox.top;
            w = sceneBoundingBox.right - sceneBoundingBox.left;
            h = sceneBoundingBox.bottom - sceneBoundingBox.top;
          } else {
            var ownerRect = owner.getBoundingClientRect();
            w = ownerRect.width;
            h = ownerRect.height;
          }
          var bbox = panController.getBBox();
          if (bbox.width === 0 || bbox.height === 0) {
            return;
          }
          var dh = h / bbox.height;
          var dw = w / bbox.width;
          var scale = Math.min(dw, dh);
          transform.x = -(bbox.left + bbox.width / 2) * scale + w / 2 + left;
          transform.y = -(bbox.top + bbox.height / 2) * scale + h / 2 + top;
          transform.scale = scale;
        }
        __name(autocenter, "autocenter");
        function getTransformModel() {
          return transform;
        }
        __name(getTransformModel, "getTransformModel");
        function getMinZoom() {
          return minZoom;
        }
        __name(getMinZoom, "getMinZoom");
        function setMinZoom(newMinZoom) {
          minZoom = newMinZoom;
        }
        __name(setMinZoom, "setMinZoom");
        function getMaxZoom() {
          return maxZoom;
        }
        __name(getMaxZoom, "getMaxZoom");
        function setMaxZoom(newMaxZoom) {
          maxZoom = newMaxZoom;
        }
        __name(setMaxZoom, "setMaxZoom");
        function getTransformOrigin() {
          return transformOrigin;
        }
        __name(getTransformOrigin, "getTransformOrigin");
        function setTransformOrigin(newTransformOrigin) {
          transformOrigin = parseTransformOrigin(newTransformOrigin);
        }
        __name(setTransformOrigin, "setTransformOrigin");
        function getZoomSpeed() {
          return speed;
        }
        __name(getZoomSpeed, "getZoomSpeed");
        function setZoomSpeed(newSpeed) {
          if (!Number.isFinite(newSpeed)) {
            throw new Error("Zoom speed should be a number");
          }
          speed = newSpeed;
        }
        __name(setZoomSpeed, "setZoomSpeed");
        function getPoint() {
          return {
            x: transform.x,
            y: transform.y
          };
        }
        __name(getPoint, "getPoint");
        function moveTo(x, y) {
          transform.x = x;
          transform.y = y;
          keepTransformInsideBounds();
          triggerEvent("pan");
          makeDirty();
        }
        __name(moveTo, "moveTo");
        function moveBy(dx, dy) {
          moveTo(transform.x + dx, transform.y + dy);
        }
        __name(moveBy, "moveBy");
        function keepTransformInsideBounds() {
          var boundingBox = getBoundingBox();
          if (!boundingBox)
            return;
          var adjusted = false;
          var clientRect = getClientRect();
          var diff = boundingBox.left - clientRect.right;
          if (diff > 0) {
            transform.x += diff;
            adjusted = true;
          }
          diff = boundingBox.right - clientRect.left;
          if (diff < 0) {
            transform.x += diff;
            adjusted = true;
          }
          diff = boundingBox.top - clientRect.bottom;
          if (diff > 0) {
            transform.y += diff;
            adjusted = true;
          }
          diff = boundingBox.bottom - clientRect.top;
          if (diff < 0) {
            transform.y += diff;
            adjusted = true;
          }
          return adjusted;
        }
        __name(keepTransformInsideBounds, "keepTransformInsideBounds");
        function getBoundingBox() {
          if (!bounds)
            return;
          if (typeof bounds === "boolean") {
            var ownerRect = owner.getBoundingClientRect();
            var sceneWidth = ownerRect.width;
            var sceneHeight = ownerRect.height;
            return {
              left: sceneWidth * boundsPadding,
              top: sceneHeight * boundsPadding,
              right: sceneWidth * (1 - boundsPadding),
              bottom: sceneHeight * (1 - boundsPadding)
            };
          }
          return bounds;
        }
        __name(getBoundingBox, "getBoundingBox");
        function getClientRect() {
          var bbox = panController.getBBox();
          var leftTop = client(bbox.left, bbox.top);
          return {
            left: leftTop.x,
            top: leftTop.y,
            right: bbox.width * transform.scale + leftTop.x,
            bottom: bbox.height * transform.scale + leftTop.y
          };
        }
        __name(getClientRect, "getClientRect");
        function client(x, y) {
          return {
            x: x * transform.scale + transform.x,
            y: y * transform.scale + transform.y
          };
        }
        __name(client, "client");
        function makeDirty() {
          isDirty = true;
          frameAnimation = window.requestAnimationFrame(frame);
        }
        __name(makeDirty, "makeDirty");
        function zoomByRatio(clientX, clientY, ratio) {
          if (isNaN(clientX) || isNaN(clientY) || isNaN(ratio)) {
            throw new Error("zoom requires valid numbers");
          }
          var newScale = transform.scale * ratio;
          if (newScale < minZoom) {
            if (transform.scale === minZoom)
              return;
            ratio = minZoom / transform.scale;
          }
          if (newScale > maxZoom) {
            if (transform.scale === maxZoom)
              return;
            ratio = maxZoom / transform.scale;
          }
          var size = transformToScreen(clientX, clientY);
          transform.x = size.x - ratio * (size.x - transform.x);
          transform.y = size.y - ratio * (size.y - transform.y);
          if (bounds && boundsPadding === 1 && minZoom === 1) {
            transform.scale *= ratio;
            keepTransformInsideBounds();
          } else {
            var transformAdjusted = keepTransformInsideBounds();
            if (!transformAdjusted)
              transform.scale *= ratio;
          }
          triggerEvent("zoom");
          makeDirty();
        }
        __name(zoomByRatio, "zoomByRatio");
        function zoomAbs(clientX, clientY, zoomLevel) {
          var ratio = zoomLevel / transform.scale;
          zoomByRatio(clientX, clientY, ratio);
        }
        __name(zoomAbs, "zoomAbs");
        function centerOn(ui) {
          var parent = ui.ownerSVGElement;
          if (!parent)
            throw new Error("ui element is required to be within the scene");
          var clientRect = ui.getBoundingClientRect();
          var cx = clientRect.left + clientRect.width / 2;
          var cy = clientRect.top + clientRect.height / 2;
          var container = parent.getBoundingClientRect();
          var dx = container.width / 2 - cx;
          var dy = container.height / 2 - cy;
          internalMoveBy(dx, dy, true);
        }
        __name(centerOn, "centerOn");
        function smoothMoveTo(x, y) {
          internalMoveBy(x - transform.x, y - transform.y, true);
        }
        __name(smoothMoveTo, "smoothMoveTo");
        function internalMoveBy(dx, dy, smooth) {
          if (!smooth) {
            return moveBy(dx, dy);
          }
          if (moveByAnimation)
            moveByAnimation.cancel();
          var from = { x: 0, y: 0 };
          var to = { x: dx, y: dy };
          var lastX = 0;
          var lastY = 0;
          moveByAnimation = animate(from, to, {
            step: function(v) {
              moveBy(v.x - lastX, v.y - lastY);
              lastX = v.x;
              lastY = v.y;
            }
          });
        }
        __name(internalMoveBy, "internalMoveBy");
        function scroll(x, y) {
          cancelZoomAnimation();
          moveTo(x, y);
        }
        __name(scroll, "scroll");
        function dispose() {
          releaseEvents();
        }
        __name(dispose, "dispose");
        function listenForEvents() {
          owner.addEventListener("mousedown", onMouseDown, { passive: false });
          owner.addEventListener("dblclick", onDoubleClick, { passive: false });
          owner.addEventListener("touchstart", onTouch, { passive: false });
          owner.addEventListener("keydown", onKeyDown, { passive: false });
          wheel.addWheelListener(owner, onMouseWheel, { passive: false });
          makeDirty();
        }
        __name(listenForEvents, "listenForEvents");
        function releaseEvents() {
          wheel.removeWheelListener(owner, onMouseWheel);
          owner.removeEventListener("mousedown", onMouseDown);
          owner.removeEventListener("keydown", onKeyDown);
          owner.removeEventListener("dblclick", onDoubleClick);
          owner.removeEventListener("touchstart", onTouch);
          if (frameAnimation) {
            window.cancelAnimationFrame(frameAnimation);
            frameAnimation = 0;
          }
          smoothScroll.cancel();
          releaseDocumentMouse();
          releaseTouches();
          textSelection.release();
          triggerPanEnd();
        }
        __name(releaseEvents, "releaseEvents");
        function frame() {
          if (isDirty)
            applyTransform();
        }
        __name(frame, "frame");
        function applyTransform() {
          isDirty = false;
          panController.applyTransform(transform);
          triggerEvent("transform");
          frameAnimation = 0;
        }
        __name(applyTransform, "applyTransform");
        function onKeyDown(e) {
          var x = 0, y = 0, z = 0;
          if (e.keyCode === 38) {
            y = 1;
          } else if (e.keyCode === 40) {
            y = -1;
          } else if (e.keyCode === 37) {
            x = 1;
          } else if (e.keyCode === 39) {
            x = -1;
          } else if (e.keyCode === 189 || e.keyCode === 109) {
            z = 1;
          } else if (e.keyCode === 187 || e.keyCode === 107) {
            z = -1;
          }
          if (filterKey(e, x, y, z)) {
            return;
          }
          if (x || y) {
            e.preventDefault();
            e.stopPropagation();
            var clientRect = owner.getBoundingClientRect();
            var offset = Math.min(clientRect.width, clientRect.height);
            var moveSpeedRatio = 0.05;
            var dx = offset * moveSpeedRatio * x;
            var dy = offset * moveSpeedRatio * y;
            internalMoveBy(dx, dy);
          }
          if (z) {
            var scaleMultiplier = getScaleMultiplier(z * 100);
            var offset = transformOrigin ? getTransformOriginOffset() : midPoint();
            publicZoomTo(offset.x, offset.y, scaleMultiplier);
          }
        }
        __name(onKeyDown, "onKeyDown");
        function midPoint() {
          var ownerRect = owner.getBoundingClientRect();
          return {
            x: ownerRect.width / 2,
            y: ownerRect.height / 2
          };
        }
        __name(midPoint, "midPoint");
        function onTouch(e) {
          beforeTouch(e);
          clearPendingClickEventTimeout();
          if (e.touches.length === 1) {
            return handleSingleFingerTouch(e, e.touches[0]);
          } else if (e.touches.length === 2) {
            pinchZoomLength = getPinchZoomLength(e.touches[0], e.touches[1]);
            multiTouch = true;
            startTouchListenerIfNeeded();
          }
        }
        __name(onTouch, "onTouch");
        function beforeTouch(e) {
          if (options.onTouch && !options.onTouch(e)) {
            return;
          }
          e.stopPropagation();
          e.preventDefault();
        }
        __name(beforeTouch, "beforeTouch");
        function beforeDoubleClick(e) {
          clearPendingClickEventTimeout();
          if (options.onDoubleClick && !options.onDoubleClick(e)) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
        }
        __name(beforeDoubleClick, "beforeDoubleClick");
        function handleSingleFingerTouch(e) {
          lastTouchStartTime = /* @__PURE__ */ new Date();
          var touch = e.touches[0];
          var offset = getOffsetXY(touch);
          lastSingleFingerOffset = offset;
          var point = transformToScreen(offset.x, offset.y);
          mouseX = point.x;
          mouseY = point.y;
          clickX = mouseX;
          clickY = mouseY;
          smoothScroll.cancel();
          startTouchListenerIfNeeded();
        }
        __name(handleSingleFingerTouch, "handleSingleFingerTouch");
        function startTouchListenerIfNeeded() {
          if (touchInProgress) {
            return;
          }
          touchInProgress = true;
          document.addEventListener("touchmove", handleTouchMove);
          document.addEventListener("touchend", handleTouchEnd);
          document.addEventListener("touchcancel", handleTouchEnd);
        }
        __name(startTouchListenerIfNeeded, "startTouchListenerIfNeeded");
        function handleTouchMove(e) {
          if (e.touches.length === 1) {
            e.stopPropagation();
            var touch = e.touches[0];
            var offset = getOffsetXY(touch);
            var point = transformToScreen(offset.x, offset.y);
            var dx = point.x - mouseX;
            var dy = point.y - mouseY;
            if (dx !== 0 && dy !== 0) {
              triggerPanStart();
            }
            mouseX = point.x;
            mouseY = point.y;
            internalMoveBy(dx, dy);
          } else if (e.touches.length === 2) {
            multiTouch = true;
            var t1 = e.touches[0];
            var t2 = e.touches[1];
            var currentPinchLength = getPinchZoomLength(t1, t2);
            var scaleMultiplier = 1 + (currentPinchLength / pinchZoomLength - 1) * pinchSpeed;
            var firstTouchPoint = getOffsetXY(t1);
            var secondTouchPoint = getOffsetXY(t2);
            mouseX = (firstTouchPoint.x + secondTouchPoint.x) / 2;
            mouseY = (firstTouchPoint.y + secondTouchPoint.y) / 2;
            if (transformOrigin) {
              var offset = getTransformOriginOffset();
              mouseX = offset.x;
              mouseY = offset.y;
            }
            publicZoomTo(mouseX, mouseY, scaleMultiplier);
            pinchZoomLength = currentPinchLength;
            e.stopPropagation();
            e.preventDefault();
          }
        }
        __name(handleTouchMove, "handleTouchMove");
        function clearPendingClickEventTimeout() {
          if (pendingClickEventTimeout) {
            clearTimeout(pendingClickEventTimeout);
            pendingClickEventTimeout = 0;
          }
        }
        __name(clearPendingClickEventTimeout, "clearPendingClickEventTimeout");
        function handlePotentialClickEvent(e) {
          if (!options.onClick)
            return;
          clearPendingClickEventTimeout();
          var dx = mouseX - clickX;
          var dy = mouseY - clickY;
          var l = Math.sqrt(dx * dx + dy * dy);
          if (l > 5)
            return;
          pendingClickEventTimeout = setTimeout(function() {
            pendingClickEventTimeout = 0;
            options.onClick(e);
          }, doubleTapSpeedInMS);
        }
        __name(handlePotentialClickEvent, "handlePotentialClickEvent");
        function handleTouchEnd(e) {
          clearPendingClickEventTimeout();
          if (e.touches.length > 0) {
            var offset = getOffsetXY(e.touches[0]);
            var point = transformToScreen(offset.x, offset.y);
            mouseX = point.x;
            mouseY = point.y;
          } else {
            var now = /* @__PURE__ */ new Date();
            if (now - lastTouchEndTime < doubleTapSpeedInMS) {
              if (transformOrigin) {
                var offset = getTransformOriginOffset();
                smoothZoom(offset.x, offset.y, zoomDoubleClickSpeed);
              } else {
                smoothZoom(lastSingleFingerOffset.x, lastSingleFingerOffset.y, zoomDoubleClickSpeed);
              }
            } else if (now - lastTouchStartTime < clickEventTimeInMS) {
              handlePotentialClickEvent(e);
            }
            lastTouchEndTime = now;
            triggerPanEnd();
            releaseTouches();
          }
        }
        __name(handleTouchEnd, "handleTouchEnd");
        function getPinchZoomLength(finger1, finger2) {
          var dx = finger1.clientX - finger2.clientX;
          var dy = finger1.clientY - finger2.clientY;
          return Math.sqrt(dx * dx + dy * dy);
        }
        __name(getPinchZoomLength, "getPinchZoomLength");
        function onDoubleClick(e) {
          beforeDoubleClick(e);
          var offset = getOffsetXY(e);
          if (transformOrigin) {
            offset = getTransformOriginOffset();
          }
          smoothZoom(offset.x, offset.y, zoomDoubleClickSpeed);
        }
        __name(onDoubleClick, "onDoubleClick");
        function onMouseDown(e) {
          clearPendingClickEventTimeout();
          if (beforeMouseDown(e))
            return;
          lastMouseDownedEvent = e;
          lastMouseDownTime = /* @__PURE__ */ new Date();
          if (touchInProgress) {
            e.stopPropagation();
            return false;
          }
          var isLeftButton = e.button === 1 && window.event !== null || e.button === 0;
          if (!isLeftButton)
            return;
          smoothScroll.cancel();
          var offset = getOffsetXY(e);
          var point = transformToScreen(offset.x, offset.y);
          clickX = mouseX = point.x;
          clickY = mouseY = point.y;
          document.addEventListener("mousemove", onMouseMove);
          document.addEventListener("mouseup", onMouseUp);
          textSelection.capture(e.target || e.srcElement);
          return false;
        }
        __name(onMouseDown, "onMouseDown");
        function onMouseMove(e) {
          if (touchInProgress)
            return;
          triggerPanStart();
          var offset = getOffsetXY(e);
          var point = transformToScreen(offset.x, offset.y);
          var dx = point.x - mouseX;
          var dy = point.y - mouseY;
          mouseX = point.x;
          mouseY = point.y;
          internalMoveBy(dx, dy);
        }
        __name(onMouseMove, "onMouseMove");
        function onMouseUp() {
          var now = /* @__PURE__ */ new Date();
          if (now - lastMouseDownTime < clickEventTimeInMS)
            handlePotentialClickEvent(lastMouseDownedEvent);
          textSelection.release();
          triggerPanEnd();
          releaseDocumentMouse();
        }
        __name(onMouseUp, "onMouseUp");
        function releaseDocumentMouse() {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
          panstartFired = false;
        }
        __name(releaseDocumentMouse, "releaseDocumentMouse");
        function releaseTouches() {
          document.removeEventListener("touchmove", handleTouchMove);
          document.removeEventListener("touchend", handleTouchEnd);
          document.removeEventListener("touchcancel", handleTouchEnd);
          panstartFired = false;
          multiTouch = false;
          touchInProgress = false;
        }
        __name(releaseTouches, "releaseTouches");
        function onMouseWheel(e) {
          if (beforeWheel(e))
            return;
          smoothScroll.cancel();
          var delta = e.deltaY;
          if (e.deltaMode > 0)
            delta *= 100;
          var scaleMultiplier = getScaleMultiplier(delta);
          if (scaleMultiplier !== 1) {
            var offset = transformOrigin ? getTransformOriginOffset() : getOffsetXY(e);
            publicZoomTo(offset.x, offset.y, scaleMultiplier);
            e.preventDefault();
          }
        }
        __name(onMouseWheel, "onMouseWheel");
        function getOffsetXY(e) {
          var offsetX, offsetY;
          var ownerRect = owner.getBoundingClientRect();
          offsetX = e.clientX - ownerRect.left;
          offsetY = e.clientY - ownerRect.top;
          return { x: offsetX, y: offsetY };
        }
        __name(getOffsetXY, "getOffsetXY");
        function smoothZoom(clientX, clientY, scaleMultiplier) {
          var fromValue = transform.scale;
          var from = { scale: fromValue };
          var to = { scale: scaleMultiplier * fromValue };
          smoothScroll.cancel();
          cancelZoomAnimation();
          zoomToAnimation = animate(from, to, {
            step: function(v) {
              zoomAbs(clientX, clientY, v.scale);
            },
            done: triggerZoomEnd
          });
        }
        __name(smoothZoom, "smoothZoom");
        function smoothZoomAbs(clientX, clientY, toScaleValue) {
          var fromValue = transform.scale;
          var from = { scale: fromValue };
          var to = { scale: toScaleValue };
          smoothScroll.cancel();
          cancelZoomAnimation();
          zoomToAnimation = animate(from, to, {
            step: function(v) {
              zoomAbs(clientX, clientY, v.scale);
            }
          });
        }
        __name(smoothZoomAbs, "smoothZoomAbs");
        function getTransformOriginOffset() {
          var ownerRect = owner.getBoundingClientRect();
          return {
            x: ownerRect.width * transformOrigin.x,
            y: ownerRect.height * transformOrigin.y
          };
        }
        __name(getTransformOriginOffset, "getTransformOriginOffset");
        function publicZoomTo(clientX, clientY, scaleMultiplier) {
          smoothScroll.cancel();
          cancelZoomAnimation();
          return zoomByRatio(clientX, clientY, scaleMultiplier);
        }
        __name(publicZoomTo, "publicZoomTo");
        function cancelZoomAnimation() {
          if (zoomToAnimation) {
            zoomToAnimation.cancel();
            zoomToAnimation = null;
          }
        }
        __name(cancelZoomAnimation, "cancelZoomAnimation");
        function getScaleMultiplier(delta) {
          var sign = Math.sign(delta);
          var deltaAdjustedSpeed = Math.min(0.25, Math.abs(speed * delta / 128));
          return 1 - sign * deltaAdjustedSpeed;
        }
        __name(getScaleMultiplier, "getScaleMultiplier");
        function triggerPanStart() {
          if (!panstartFired) {
            triggerEvent("panstart");
            panstartFired = true;
            smoothScroll.start();
          }
        }
        __name(triggerPanStart, "triggerPanStart");
        function triggerPanEnd() {
          if (panstartFired) {
            if (!multiTouch)
              smoothScroll.stop();
            triggerEvent("panend");
          }
        }
        __name(triggerPanEnd, "triggerPanEnd");
        function triggerZoomEnd() {
          triggerEvent("zoomend");
        }
        __name(triggerZoomEnd, "triggerZoomEnd");
        function triggerEvent(name) {
          api.fire(name, api);
        }
        __name(triggerEvent, "triggerEvent");
      }
      __name(createPanZoom, "createPanZoom");
      function parseTransformOrigin(options) {
        if (!options)
          return;
        if (typeof options === "object") {
          if (!isNumber(options.x) || !isNumber(options.y))
            failTransformOrigin(options);
          return options;
        }
        failTransformOrigin();
      }
      __name(parseTransformOrigin, "parseTransformOrigin");
      function failTransformOrigin(options) {
        console.error(options);
        throw new Error(
          [
            "Cannot parse transform origin.",
            "Some good examples:",
            '  "center center" can be achieved with {x: 0.5, y: 0.5}',
            '  "top center" can be achieved with {x: 0.5, y: 0}',
            '  "bottom right" can be achieved with {x: 1, y: 1}'
          ].join("\n")
        );
      }
      __name(failTransformOrigin, "failTransformOrigin");
      function noop() {
      }
      __name(noop, "noop");
      function validateBounds(bounds) {
        var boundsType = typeof bounds;
        if (boundsType === "undefined" || boundsType === "boolean")
          return;
        var validBounds = isNumber(bounds.left) && isNumber(bounds.top) && isNumber(bounds.bottom) && isNumber(bounds.right);
        if (!validBounds)
          throw new Error(
            "Bounds object is not valid. It can be: undefined, boolean (true|false) or an object {left, top, right, bottom}"
          );
      }
      __name(validateBounds, "validateBounds");
      function isNumber(x) {
        return Number.isFinite(x);
      }
      __name(isNumber, "isNumber");
      function isNaN(value) {
        if (Number.isNaN) {
          return Number.isNaN(value);
        }
        return value !== value;
      }
      __name(isNaN, "isNaN");
      function rigidScroll() {
        return {
          start: noop,
          stop: noop,
          cancel: noop
        };
      }
      __name(rigidScroll, "rigidScroll");
      function autoRun() {
        if (typeof document === "undefined")
          return;
        var scripts = document.getElementsByTagName("script");
        if (!scripts)
          return;
        var panzoomScript;
        for (var i = 0; i < scripts.length; ++i) {
          var x = scripts[i];
          if (x.src && x.src.match(/\bpanzoom(\.min)?\.js/)) {
            panzoomScript = x;
            break;
          }
        }
        if (!panzoomScript)
          return;
        var query = panzoomScript.getAttribute("query");
        if (!query)
          return;
        var globalName = panzoomScript.getAttribute("name") || "pz";
        var started = Date.now();
        tryAttach();
        function tryAttach() {
          var el = document.querySelector(query);
          if (!el) {
            var now = Date.now();
            var elapsed = now - started;
            if (elapsed < 2e3) {
              setTimeout(tryAttach, 100);
              return;
            }
            console.error("Cannot find the panzoom element", globalName);
            return;
          }
          var options = collectOptions(panzoomScript);
          console.log(options);
          window[globalName] = createPanZoom(el, options);
        }
        __name(tryAttach, "tryAttach");
        function collectOptions(script) {
          var attrs = script.attributes;
          var options = {};
          for (var j = 0; j < attrs.length; ++j) {
            var attr = attrs[j];
            var nameValue = getPanzoomAttributeNameValue(attr);
            if (nameValue) {
              options[nameValue.name] = nameValue.value;
            }
          }
          return options;
        }
        __name(collectOptions, "collectOptions");
        function getPanzoomAttributeNameValue(attr) {
          if (!attr.name)
            return;
          var isPanZoomAttribute = attr.name[0] === "p" && attr.name[1] === "z" && attr.name[2] === "-";
          if (!isPanZoomAttribute)
            return;
          var name = attr.name.substr(3);
          var value = JSON.parse(attr.value);
          return { name, value };
        }
        __name(getPanzoomAttributeNameValue, "getPanzoomAttributeNameValue");
      }
      __name(autoRun, "autoRun");
      autoRun();
    }
  });

  // node_modules/calculate-percent/index.js
  var require_calculate_percent = __commonJS({
    "node_modules/calculate-percent/index.js"(exports, module) {
      module.exports = function(val, max, min = 0) {
        const range = Math.abs(max - min);
        const value = val - min;
        let percent = 100 * parseFloat(value) / parseFloat(range) / 100;
        return parseInt(percent * 100);
      };
    }
  });

  // node_modules/oneof/index.js
  var require_oneof = __commonJS({
    "node_modules/oneof/index.js"(exports, module) {
      module.exports = function(list2) {
        if (list2 == void 0)
          return null;
        if (list2.length === 0)
          return null;
        var min = 0;
        var max = list2.length - 1;
        var idx = Math.floor(Math.random() * (max - min + 1)) + min;
        return list2[idx];
      };
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      __name(getRawTag, "getRawTag");
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      __name(objectToString, "objectToString");
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      __name(baseGetTag, "baseGetTag");
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      __name(isObjectLike, "isObjectLike");
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      __name(isSymbol, "isSymbol");
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      __name(isKey, "isKey");
      module.exports = isKey;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      __name(isObject, "isObject");
      module.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      __name(isFunction, "isFunction");
      module.exports = isFunction;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      __name(isMasked, "isMasked");
      module.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      __name(toSource, "toSource");
      module.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      __name(baseIsNative, "baseIsNative");
      module.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      __name(getValue, "getValue");
      module.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      __name(getNative, "getNative");
      module.exports = getNative;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      __name(hashClear, "hashClear");
      module.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      __name(hashDelete, "hashDelete");
      module.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      __name(hashGet, "hashGet");
      module.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      __name(hashHas, "hashHas");
      module.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      __name(hashSet, "hashSet");
      module.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      __name(Hash, "Hash");
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      __name(listCacheClear, "listCacheClear");
      module.exports = listCacheClear;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      __name(eq, "eq");
      module.exports = eq;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      __name(assocIndexOf, "assocIndexOf");
      module.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      __name(listCacheDelete, "listCacheDelete");
      module.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      __name(listCacheGet, "listCacheGet");
      module.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      __name(listCacheHas, "listCacheHas");
      module.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      __name(listCacheSet, "listCacheSet");
      module.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      __name(ListCache, "ListCache");
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      __name(mapCacheClear, "mapCacheClear");
      module.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      __name(isKeyable, "isKeyable");
      module.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      __name(getMapData, "getMapData");
      module.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      __name(mapCacheDelete, "mapCacheDelete");
      module.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      __name(mapCacheGet, "mapCacheGet");
      module.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      __name(mapCacheHas, "mapCacheHas");
      module.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      __name(mapCacheSet, "mapCacheSet");
      module.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      __name(MapCache, "MapCache");
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = /* @__PURE__ */ __name(function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        }, "memoized");
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      __name(memoize, "memoize");
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      __name(memoizeCapped, "memoizeCapped");
      module.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      __name(arrayMap, "arrayMap");
      module.exports = arrayMap;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      __name(baseToString, "baseToString");
      module.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      __name(toString, "toString");
      module.exports = toString;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      __name(castPath, "castPath");
      module.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      __name(toKey, "toKey");
      module.exports = toKey;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      __name(baseGet, "baseGet");
      module.exports = baseGet;
    }
  });

  // node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      __name(baseAssignValue, "baseAssignValue");
      module.exports = baseAssignValue;
    }
  });

  // node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      __name(assignValue, "assignValue");
      module.exports = assignValue;
    }
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      __name(isIndex, "isIndex");
      module.exports = isIndex;
    }
  });

  // node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "node_modules/lodash/_baseSet.js"(exports, module) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      var toKey = require_toKey();
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      __name(baseSet, "baseSet");
      module.exports = baseSet;
    }
  });

  // node_modules/lodash/_basePickBy.js
  var require_basePickBy = __commonJS({
    "node_modules/lodash/_basePickBy.js"(exports, module) {
      var baseGet = require_baseGet();
      var baseSet = require_baseSet();
      var castPath = require_castPath();
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      __name(basePickBy, "basePickBy");
      module.exports = basePickBy;
    }
  });

  // node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "node_modules/lodash/_baseHasIn.js"(exports, module) {
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      __name(baseHasIn, "baseHasIn");
      module.exports = baseHasIn;
    }
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      __name(baseIsArguments, "baseIsArguments");
      module.exports = baseIsArguments;
    }
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(/* @__PURE__ */ function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      __name(isLength, "isLength");
      module.exports = isLength;
    }
  });

  // node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "node_modules/lodash/_hasPath.js"(exports, module) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      __name(hasPath, "hasPath");
      module.exports = hasPath;
    }
  });

  // node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "node_modules/lodash/hasIn.js"(exports, module) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      __name(hasIn, "hasIn");
      module.exports = hasIn;
    }
  });

  // node_modules/lodash/_basePick.js
  var require_basePick = __commonJS({
    "node_modules/lodash/_basePick.js"(exports, module) {
      var basePickBy = require_basePickBy();
      var hasIn = require_hasIn();
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      __name(basePick, "basePick");
      module.exports = basePick;
    }
  });

  // node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      __name(arrayPush, "arrayPush");
      module.exports = arrayPush;
    }
  });

  // node_modules/lodash/_isFlattenable.js
  var require_isFlattenable = __commonJS({
    "node_modules/lodash/_isFlattenable.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      __name(isFlattenable, "isFlattenable");
      module.exports = isFlattenable;
    }
  });

  // node_modules/lodash/_baseFlatten.js
  var require_baseFlatten = __commonJS({
    "node_modules/lodash/_baseFlatten.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isFlattenable = require_isFlattenable();
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      __name(baseFlatten, "baseFlatten");
      module.exports = baseFlatten;
    }
  });

  // node_modules/lodash/flatten.js
  var require_flatten = __commonJS({
    "node_modules/lodash/flatten.js"(exports, module) {
      var baseFlatten = require_baseFlatten();
      function flatten2(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      __name(flatten2, "flatten");
      module.exports = flatten2;
    }
  });

  // node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "node_modules/lodash/_apply.js"(exports, module) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      __name(apply, "apply");
      module.exports = apply;
    }
  });

  // node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "node_modules/lodash/_overRest.js"(exports, module) {
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      __name(overRest, "overRest");
      module.exports = overRest;
    }
  });

  // node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "node_modules/lodash/constant.js"(exports, module) {
      function constant(value) {
        return function() {
          return value;
        };
      }
      __name(constant, "constant");
      module.exports = constant;
    }
  });

  // node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "node_modules/lodash/identity.js"(exports, module) {
      function identity(value) {
        return value;
      }
      __name(identity, "identity");
      module.exports = identity;
    }
  });

  // node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "node_modules/lodash/_baseSetToString.js"(exports, module) {
      var constant = require_constant();
      var defineProperty = require_defineProperty();
      var identity = require_identity();
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      module.exports = baseSetToString;
    }
  });

  // node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "node_modules/lodash/_shortOut.js"(exports, module) {
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      __name(shortOut, "shortOut");
      module.exports = shortOut;
    }
  });

  // node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "node_modules/lodash/_setToString.js"(exports, module) {
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }
  });

  // node_modules/lodash/_flatRest.js
  var require_flatRest = __commonJS({
    "node_modules/lodash/_flatRest.js"(exports, module) {
      var flatten2 = require_flatten();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function flatRest(func) {
        return setToString(overRest(func, void 0, flatten2), func + "");
      }
      __name(flatRest, "flatRest");
      module.exports = flatRest;
    }
  });

  // node_modules/lodash/pick.js
  var require_pick = __commonJS({
    "node_modules/lodash/pick.js"(exports, module) {
      var basePick = require_basePick();
      var flatRest = require_flatRest();
      var pick2 = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      module.exports = pick2;
    }
  });

  // src/craft.js
  var import_bootstrap_bundle_min = __toESM(require_bootstrap_bundle_min(), 1);

  // node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }
  __name(rng, "rng");

  // node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
  }
  __name(unsafeStringify, "unsafeStringify");

  // node_modules/uuid/dist/esm-browser/native.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = {
    randomUUID
  };

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  __name(v4, "v4");
  var v4_default = v4;

  // nodes/Node.js
  var Node2 = class {
    static {
      __name(this, "Node");
    }
    id = v4_default();
    type = "Node";
    // All nodes in a visual programming language require x and y
    x = 123;
    y = 345;
    w = 320;
    h = 200;
    // System Properties
    executable = false;
    schema = null;
    // optional
    // Node Properties (Inputs (strings) and Outputs (functions))
    input = "";
    output() {
      return this.input;
    }
  };

  // nodes/Output.js
  var Output = class extends Node2 {
    static {
      __name(this, "Output");
    }
    // NOTE: this will only return if nothing ovverides it.
    input = "Sorry, nothing was connected to me, so I return just the default output value.";
    executable = true;
    output() {
      return this.input;
    }
  };

  // nodes/Midjourney.js
  var Midjourney = class extends Node2 {
    static {
      __name(this, "Midjourney");
    }
    prompt = "I am a happy litte prompt.";
    style = "HD";
    version = 6;
    aspectRatio = "1:1";
    gork = 1;
    schema = {
      type: "object",
      properties: {
        prompt: { type: "string" },
        style: { type: "string" },
        version: { type: "integer" },
        aspectRatio: { type: "string" }
      },
      required: ["prompt", "version"],
      additionalProperties: true
    };
    debug() {
      return JSON.stringify(this);
    }
    output() {
      return `${this.prompt} ${this.style} --ar ${this.aspectRatio} --v ${this.version}`;
    }
  };

  // nodes/Text.js
  var Text = class extends Node2 {
    static {
      __name(this, "Text");
    }
    w = 333;
    text = "";
    output() {
      return this.text;
    }
    emphasis() {
      return this.text.toUpperCase();
    }
  };

  // src/application/view/Canvas.js
  var import_panzoom = __toESM(require_panzoom(), 1);
  var import_calculate_percent = __toESM(require_calculate_percent(), 1);

  // modules/domek/index.js
  var kebabize = /* @__PURE__ */ __name((str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase()), "kebabize");
  function svgProperties(key) {
    if (["clipPathUnits"].includes(key)) {
      return key;
    } else {
      return kebabize(key);
    }
  }
  __name(svgProperties, "svgProperties");
  var svg = new Proxy({}, {
    get: function(target, property) {
      return function(properties, text2) {
        const el = document.createElementNS("http://www.w3.org/2000/svg", property);
        for (const key in properties) {
          if (properties.hasOwnProperty(key)) {
            el.setAttributeNS(null, svgProperties(key), properties[key]);
          }
        }
        if (text2)
          el.appendChild(document.createTextNode(text2));
        return el;
      };
    }
  });
  var xhtml = new Proxy({}, {
    get: function(target, property) {
      return function(properties, text2) {
        const el = document.createElementNS("http://www.w3.org/1999/xhtml", property);
        for (const key in properties) {
          if (properties.hasOwnProperty(key)) {
            el.setAttributeNS(null, kebabize(key), properties[key]);
          }
        }
        if (text2)
          el.appendChild(document.createTextNode(text2));
        return el;
      };
    }
  });
  var html = new Proxy({}, {
    get: function(target, property) {
      return function(properties, text2) {
        const el = document.createElement(property);
        for (const key in properties) {
          if (properties.hasOwnProperty(key)) {
            el.setAttribute(kebabize(key), properties[key]);
          }
        }
        if (text2)
          el.appendChild(document.createTextNode(text2));
        return el;
      };
    }
  });
  var text = /* @__PURE__ */ __name(function(text2) {
    return document.createTextNode(text2);
  }, "text");
  var update2 = /* @__PURE__ */ __name(function(elements, properties) {
    const els = Array.isArray(elements) ? elements : [elements];
    for (const el of els) {
      for (const key in properties) {
        if (el.namespaceURI == "http://www.w3.org/2000/svg") {
          el.setAttributeNS(null, key, properties[key]);
        } else {
          el.setAttribute(key, properties[key]);
        }
      }
    }
  }, "update");
  function front(element) {
    const parentElement = element.parentNode;
    parentElement.removeChild(element);
    parentElement.appendChild(element);
  }
  __name(front, "front");
  function keyboard(verify, callback) {
    const listener = /* @__PURE__ */ __name((e) => {
      if (verify(e)) {
        callback(e);
      }
    }, "listener");
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }
  __name(keyboard, "keyboard");
  function dataset(element, data) {
    for (const key in data) {
      element.dataset[key] = data[key];
    }
  }
  __name(dataset, "dataset");
  function click(element, callback) {
    element.addEventListener("mouseup", handler);
    function handler(event) {
      callback(event);
    }
    __name(handler, "handler");
    return () => element.removeEventListener("mouseup", handler);
  }
  __name(click, "click");
  function dblclick(element, callback) {
    element.addEventListener("dblclick", handler);
    function handler(event) {
      callback(event);
    }
    __name(handler, "handler");
    return () => element.removeEventListener("dblclick", handler);
  }
  __name(dblclick, "dblclick");
  function mouse(element, on, off) {
    element.addEventListener("mouseover", on);
    element.addEventListener("mouseout", off);
    return () => {
      element.removeEventListener("mouseover", on);
      element.removeEventListener("mouseout", off);
    };
  }
  __name(mouse, "mouse");

  // src/application/model/Observable.js
  var Observable = class {
    static {
      __name(this, "Observable");
    }
    #cleanup = [];
    cleanup(...arg) {
      this.#cleanup.push(...arg);
    }
    // Reactive Properties
    #properties = {};
    inherit(payload) {
      Object.entries(payload).forEach(([key, val]) => this.declare(key, val));
    }
    declare(key, val) {
      this.#properties[key] = val;
      Object.defineProperty(this, key, {
        get: () => this.#properties[key],
        set: (newValue) => {
          const oldValue = this.#properties[key];
          if (newValue === oldValue)
            return;
          this.#properties[key] = newValue;
          this.notify(key, newValue, { newValue, oldValue });
        }
      });
    }
    dump() {
      console.log(this.#properties);
      return this.#properties;
    }
    // Observable Values
    #observers = {};
    // USER API
    // observe is the only exposed reactive interface
    observe(eventName, observerCallback, options = { autorun: true }) {
      if (options.autorun) {
        const isReactiveProperty = this.#properties.hasOwnProperty(eventName);
        if (isReactiveProperty) {
          observerCallback(this.#properties[eventName]);
        } else {
          observerCallback({ data: this });
        }
      }
      return this.#subscribe(eventName, observerCallback);
    }
    // DEVELOPER API
    //NOTE: must be MANUALLY issued anytime something changes
    notify(eventName, eventData, ...extra) {
      if (Array.isArray(this.#observers[eventName]))
        this.#observers[eventName].forEach((observerCallback) => observerCallback(eventData, ...extra));
    }
    // INTERNAL API
    #subscribe(eventName, observerCallback) {
      if (typeof observerCallback !== "function")
        throw new TypeError("Observer must be a function.");
      if (!Array.isArray(this.#observers[eventName]))
        this.#observers[eventName] = [];
      this.#observers[eventName].push(observerCallback);
      return () => {
        this.#unsubscribe(eventName, observerCallback);
      };
    }
    #unsubscribe(eventName, observerCallback) {
      this.#observers[eventName] = this.#observers[eventName].filter((obs) => obs !== observerCallback);
    }
  };

  // src/application/model/Item.js
  var Item = class extends Observable {
    static {
      __name(this, "Item");
    }
  };

  // src/application/view/canvas/Node.js
  var import_oneof = __toESM(require_oneof(), 1);

  // src/application/view/canvas/Base.js
  var Base = class {
    static {
      __name(this, "Base");
    }
    el = {};
    #cleanup = [];
    cleanup(...arg) {
      this.#cleanup.push(...arg);
    }
    start({ item, view }) {
    }
    stop() {
      this.#cleanup.map((f) => f());
      Object.values(this.el).map((el) => el.remove());
    }
  };

  // src/application/view/canvas/node/Component.js
  var Component = class {
    static {
      __name(this, "Component");
    }
    el = {};
    // container of elements
    name;
    data;
    view;
    group = svg.g();
    isRoot = true;
    // by being added it is no longer a root container
    root = null;
    // reference to root
    parent = null;
    behavior = {};
    bounds = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      gap: 0,
      border: 0,
      padding: 0,
      radius: 0,
      space: 0
    };
    children = [];
    #cleanup = [];
    constructor(name, { view } = {}) {
      this.root = this;
      this.name = name;
      this.view = view;
    }
    get #above() {
      if (this.isRoot)
        return [this];
      const selfIndex = this.parent.children.indexOf(this);
      return [...this.parent.children.slice(0, selfIndex)];
    }
    get x() {
      if (this.isRoot)
        return 0;
      return 0 + this.parent.x + this.parent.bounds.border + this.parent.bounds.padding;
    }
    get y() {
      if (this.isRoot)
        return 0;
      return 0 + this.parent.y + this.parent.bounds.border + this.parent.bounds.padding + this.#above.reduce((total, child) => total + (this.bounds.absolute ? 0 : child.height), 0) + this.parent.bounds.gap * 2 * this.#above.length;
    }
    // get width1(){
    //   if(isPercentValue(this.bounds.width)) return this.siblings.reduce((max, sibling) => sibling.width>max?sibling.width:max, 0) * (parseInt(this.bounds.width)/100);
    //
    //   return 0
    //   + this.bounds.border
    //   + this.bounds.padding
    //   + ( this.bounds.width || this.children.reduce((max, child) => child.width>max?child.width:max, 0) )
    //   + this.bounds.padding
    //   + this.bounds.border
    // }
    get width() {
      if (this.isRoot)
        return this.bounds.width;
      return 0 + this.parent.width - (this.parent.bounds.border + this.parent.bounds.padding) * 2;
    }
    get height() {
      return 0 + this.bounds.border + this.bounds.padding + this.bounds.height + this.children.reduce((total, child) => total + child.height, 0) + this.bounds.gap * 2 * (this.children.length > 0 ? this.children.length - 1 : 0) + this.bounds.padding + this.bounds.border;
    }
    get radius() {
      return this.bounds.radius;
    }
    add(child) {
      child.isRoot = false;
      child.root = this.root;
      child.parent = this;
      child.view = this.view;
      if (!child.data)
        child.data = this.data;
      child.group = this.group;
      this.children.push(child);
      return this;
    }
    get siblings() {
      return this.parent ? this.parent.children.filter((child) => child !== this) : [];
    }
    get all() {
      return [...this.children, ...flatten(this.children.map((child) => child.all))];
    }
    setup() {
      this.children.map((child) => child.setup());
    }
    setData(data) {
      this.data = data;
      return this;
    }
    setView(view) {
      this.view = view;
      return this;
    }
    setBounds(data) {
      if (Object.values(data).filter((item) => typeof item == "string").filter((item) => !item.endsWith("%")).length)
        throw new Error("String without percent is not supported.");
      Object.assign(this.bounds, data);
      return this;
    }
    setBehavior(data) {
      Object.assign(this.behavior, data);
      return this;
    }
    cleanup(...arg) {
      this.#cleanup.push(...arg);
    }
    stop() {
      this.children.map((child) => child.stop());
      this.#cleanup.map((x) => x());
    }
  };

  // src/application/view/canvas/node/caption/Focus.js
  var Focus = class {
    static {
      __name(this, "Focus");
    }
    #scale;
    // set by setter
    // handlers
    #mouseDownHandler;
    #mouseUpHandler;
    // used in stop/cleanup
    #handle;
    constructor({ handle, action }) {
      this.#handle = handle;
      this.#mouseDownHandler = (e) => {
        action(e);
      };
      this.#mouseUpHandler = (e) => {
      };
      this.#handle.addEventListener("mousedown", this.#mouseDownHandler);
      this.#handle.addEventListener("mouseup", this.#mouseUpHandler);
    }
    set scale(value) {
      this.#scale = value;
    }
    stop() {
      this.#handle.removeEventListener("mousedown", this.#mouseDownHandler);
      this.#handle.removeEventListener("mouseup", this.#mouseUpHandler);
    }
  };

  // src/application/view/canvas/node/caption/Selectable.js
  var Selectable = class {
    static {
      __name(this, "Selectable");
    }
    #scale;
    // set by setter
    // handlers
    #mouseDownHandler;
    #mouseUpHandler;
    // used in stop/cleanup
    #handle;
    constructor({ handle, action }) {
      this.#handle = handle;
      this.#mouseDownHandler = (e) => {
        action(e);
      };
      this.#mouseUpHandler = (e) => {
      };
      this.#handle.addEventListener("mousedown", this.#mouseDownHandler);
      this.#handle.addEventListener("mouseup", this.#mouseUpHandler);
    }
    set scale(value) {
      this.#scale = value;
    }
    stop() {
      this.#handle.removeEventListener("mousedown", this.#mouseDownHandler);
      this.#handle.removeEventListener("mouseup", this.#mouseUpHandler);
    }
  };

  // src/application/view/canvas/node/Container.js
  var Container = class extends Component {
    static {
      __name(this, "Container");
    }
    setup() {
      this.el.Panel = svg.rect({
        class: "node-container",
        ry: this.radius,
        width: this.width,
        x: this.x,
        y: this.y,
        height: this.height
      });
      this.cleanup(() => Object.values(this.el).map((el) => el.remove()));
      this.cleanup(this.view.application.Selection.observe("changed", ({ data }) => {
        if (data.has(this.data.id)) {
          this.el.Panel.classList.add("selected");
          front(this.group);
        } else {
          this.el.Panel.classList.remove("selected");
        }
      }));
      this.children.map((child) => child.setup());
    }
    render() {
      const { Keyboard, Api: Api2 } = this.view.application;
      update2(this.group, { "transform": `translate(${this.data.x}, ${this.data.y})` });
      this.view.scene.appendChild(this.group);
      this.group.appendChild(this.el.Panel);
      const focus = new Focus({
        handle: this.el.Panel,
        action: (e) => {
          front(this.group);
        }
      });
      this.cleanup(() => focus.stop());
      const selectable = new Selectable({
        handle: this.el.Panel,
        action: (e) => {
          const selectingMultiple = Keyboard.isSelecting(e);
          if (selectingMultiple) {
            Api2.toggleSelect(this.data);
          } else {
            Api2.deselectAll();
            Api2.toggleSelect(this.data);
          }
        }
      });
      this.cleanup(() => selectable.stop());
      this.children.map((child) => child.render());
    }
    update() {
      update2(this.el.Panel, {});
    }
  };

  // src/application/view/canvas/node/caption/Movable.js
  var Movable = class {
    static {
      __name(this, "Movable");
    }
    #container;
    #handle;
    #read;
    #write;
    #scale;
    // NOTE: set by a setter in this class, it is externaly set as view scale may change
    // local variables
    #dragging = false;
    #initialPosition = { x: 0, y: 0 };
    // handlers for cleanup
    #mouseDownHandler;
    #mouseMoveHandler;
    #mouseUpHandler;
    constructor({ container, handle, read, write }) {
      this.#container = container;
      this.#handle = handle;
      this.#read = read;
      this.#write = write;
      this.#mouseDownHandler = (e) => {
        this.#initialPosition.x = e.clientX;
        this.#initialPosition.y = e.clientY;
        this.#dragging = true;
        this.#container.addEventListener("mousemove", this.#mouseMoveHandler);
      };
      this.#mouseMoveHandler = (e) => {
        if (this.#scale == void 0)
          console.error("you must correctly configure scale", this.#scale);
        let dx = 0;
        let dy = 0;
        dx = e.clientX - this.#initialPosition.x;
        dy = e.clientY - this.#initialPosition.y;
        dx = dx + this.#read("x") * this.#scale;
        dy = dy + this.#read("y") * this.#scale;
        dx = dx / this.#scale;
        dy = dy / this.#scale;
        this.#write("x", dx);
        this.#write("y", dy);
        dx = 0;
        dy = 0;
        this.#initialPosition.x = e.clientX;
        this.#initialPosition.y = e.clientY;
      };
      this.#mouseUpHandler = (e) => {
        this.#dragging = false;
        this.#container.removeEventListener("mousemove", this.#mouseMoveHandler);
      };
      this.#handle.addEventListener("mousedown", this.#mouseDownHandler);
      this.#container.addEventListener("mouseup", this.#mouseUpHandler);
    }
    set scale(value) {
      this.#scale = value;
    }
    stop() {
      this.#handle.removeEventListener("mousedown", this.#mouseDownHandler);
      this.#container.removeEventListener("mousemove", this.#mouseMoveHandler);
      this.#container.removeEventListener("mouseup", this.#mouseUpHandler);
    }
  };

  // src/application/view/canvas/node/Caption.js
  var Caption = class extends Component {
    static {
      __name(this, "Caption");
    }
    setup() {
      this.el.Caption = svg.rect({ class: `node-caption`, ry: this.radius, width: this.width, x: this.x, y: this.y, height: this.height });
      this.el.CaptionText = svg.text({ class: `node-caption caption-text node-text`, style: "pointer-events: none; user-select: none;", x: this.x + this.width * 0.02, y: this.y + (this.height - this.height * 0.12) }, this.data.type);
      this.cleanup(() => Object.values(this.el).map((el) => el.remove()));
      this.cleanup(this.view.application.Selection.observe("changed", ({ data }) => {
        if (data.has(this.data.id)) {
          Object.values(this.el).map((el) => el.classList.add("selected"));
        } else {
          Object.values(this.el).map((el) => el.classList.remove("selected"));
        }
      }));
    }
    render() {
      const { Keyboard, Api: Api2 } = this.view.application;
      this.group.appendChild(this.el.Caption);
      this.group.appendChild(this.el.CaptionText);
      const movable = new Movable({
        container: window,
        // <g> element representing an SVG scene
        handle: this.el.Caption,
        // <rect> that is the caption of a window meant to be dragged
        read: (property) => this.data[property],
        write: (property, value) => this.data[property] = value
      });
      this.cleanup(this.view.observe("transform", (v) => movable.scale = v.scale));
      this.cleanup(() => movable.stop());
      const selectable = new Selectable({
        handle: this.el.Caption,
        action: (e) => {
          const selectingMultiple = Keyboard.isSelecting(e);
          if (selectingMultiple) {
            Api2.toggleSelect(this.data);
          } else {
            Api2.deselectAll();
            Api2.toggleSelect(this.data);
          }
        }
      });
      this.cleanup(() => selectable.stop());
      const focus = new Focus({
        handle: this.el.Caption,
        action: (e) => {
          front(this.parent.group);
        }
      });
      this.cleanup(() => focus.stop());
      this.children.map((child) => child.render());
    }
    update() {
      update2(this.el.Caption, {});
      update2(this.el.CaptionText, {});
    }
  };

  // src/application/view/canvas/node/Pod.js
  var Pod = class extends Component {
    static {
      __name(this, "Pod");
    }
    setup() {
      this.el.Pod = svg.rect({ class: "node-pod", ry: this.radius, width: this.width, x: this.x, y: this.y, height: this.height });
      this.cleanup(() => Object.values(this.el).map((el) => el.remove()));
      this.children.map((child) => child.setup());
    }
    render() {
      this.group.appendChild(this.el.Pod);
      this.children.map((child) => child.render());
    }
    update() {
      update(this.el.Pod, {});
    }
  };

  // src/application/view/canvas/node/Row.js
  var Row = class extends Component {
    static {
      __name(this, "Row");
    }
    setup() {
      this.el.Row = svg.rect({ class: "pod-row", ry: this.radius, width: this.width, x: this.x, y: this.y, height: this.height });
      this.children.map((child) => child.setup());
      this.cleanup(this.view.application.Selection.observe("changed", ({ data }) => {
        if (data.has(this.parent.data.id)) {
          Object.values(this.el).map((el) => el.classList.add("selected"));
        } else {
          Object.values(this.el).map((el) => el.classList.remove("selected"));
        }
      }));
      this.cleanup(() => Object.values(this.el).map((el) => el.remove()));
    }
    render() {
      this.group.appendChild(this.el.Row);
      this.children.map((child) => child.render());
    }
    update() {
    }
  };

  // tools/invariant.js
  function invariant(condition, message, ...run) {
    if (!condition) {
      run.map((o) => o());
      throw new Error(`Invariant failed: ${message}`);
    }
  }
  __name(invariant, "invariant");

  // src/application/view/canvas/node/port/Connectable.js
  var Connectable = class {
    static {
      __name(this, "Connectable");
    }
    #el = {};
    #scale;
    // set by setter
    #dragging = false;
    #initialPosition = { x: 0, y: 0 };
    // handlers
    #mouseDownHandler;
    #mouseMoveHandler;
    #mouseUpHandler;
    // used in stop/cleanup
    #container;
    #handle;
    #geometry = {};
    constructor({ container, handle, canvas, node, port, createConnector, createJunction }) {
      this.#container = container;
      this.#handle = handle;
      this.#mouseDownHandler = (e) => {
        this.#initialPosition.x = e.clientX;
        this.#initialPosition.y = e.clientY;
        this.#dragging = true;
        this.#el.indicatorLine = svg.line({
          class: "cable-line-indicator line-ant-trail",
          "stroke-width": 2,
          "vector-effect": "non-scaling-stroke"
        });
        canvas.appendChild(this.#el.indicatorLine);
        this.#container.addEventListener("mousemove", this.#mouseMoveHandler);
      };
      this.#mouseMoveHandler = (e) => {
        let dx = 0;
        let dy = 0;
        dx = e.clientX - this.#initialPosition.x;
        dy = e.clientY - this.#initialPosition.y;
        dx = dx + port.x * this.#scale;
        dy = dy + port.y * this.#scale;
        dx = dx / this.#scale;
        dy = dy / this.#scale;
        this.#geometry = {
          // origin of th eindicator line is the port
          x1: port.x + node.x,
          y1: port.y + node.y,
          // target of the indicator line is where the cursor is dragging
          x2: dx + node.x,
          y2: dy + node.y
        };
        update2(this.#el.indicatorLine, this.#geometry);
        dx = 0;
        dy = 0;
      };
      this.#mouseUpHandler = (e) => {
        const isOverAnotherPort = this.#dragging && e.target && (e.target.classList.contains("node-port") || e.target.classList.contains("junction-port"));
        const isOverBackground = this.#dragging && e.target && e.target.classList.contains("interface-background");
        if (isOverAnotherPort) {
          const portAddress = e.target.dataset.portAddress;
          const [targetKind, targetType, targetNodeId, targetPortId] = portAddress.split(":");
          const payload = {
            targetKind,
            targetType,
            sourceNode: node.id,
            sourcePort: port.id,
            targetNode: targetNodeId,
            targetPort: targetPortId
          };
          invariant(payload.sourceNode, "Source node id is required");
          invariant(payload.targetNode, "Target node id required");
          const notTheSamePort = payload.sourcePort != payload.targetPort;
          const notTheSameNode = payload.sourceNode != payload.targetNode;
          if (notTheSamePort && notTheSameNode) {
            createConnector(payload);
          }
        }
        if (isOverBackground) {
          createJunction({
            x: this.#geometry.x2,
            y: this.#geometry.y2,
            sourceNode: node.id,
            sourcePort: port.id
          });
        }
        if (this.#el.indicatorLine)
          this.#el.indicatorLine.remove();
        this.#dragging = false;
        this.#container.removeEventListener("mousemove", this.#mouseMoveHandler);
      };
      this.#handle.addEventListener("mousedown", this.#mouseDownHandler);
      this.#container.addEventListener("mouseup", this.#mouseUpHandler);
    }
    set scale(value) {
      this.#scale = value;
    }
    stop() {
      this.#handle.removeEventListener("mousedown", this.#mouseDownHandler);
      this.#container.removeEventListener("mousemove", this.#mouseMoveHandler);
      this.#container.removeEventListener("mouseup", this.#mouseUpHandler);
    }
  };

  // nodes/Junction.js
  var Junction = class extends Node2 {
    static {
      __name(this, "Junction");
    }
    type = "Junction";
    input = [];
    output() {
      return this.input;
    }
  };

  // src/application/view/canvas/node/Port.js
  var Port = class extends Component {
    static {
      __name(this, "Port");
    }
    behavior = {
      showCaption: true
    };
    setup() {
      let moveDown = this.height / 2;
      let moveHorizontally = 4;
      if (this.data.port.type == "Input") {
        const x = this.x - moveHorizontally;
        const y = this.y + moveDown;
        this.el.PortCaption = svg.text({ class: `port-text node-text`, style: "pointer-events: none; user-select: none;", x: this.x + this.bounds.space, y: this.y + (this.height - this.height / 3) }, this.data.port.id);
        this.el.Port = svg.circle({ class: `node-port ${this.data.port.type.toLowerCase()}-port`, cx: x, cy: y, r: this.bounds.radius, height: this.height / 3 });
        this.data.port.x = x;
        this.data.port.y = y;
      } else {
        const x = this.x + this.width + moveHorizontally;
        const y = this.y + moveDown;
        this.el.PortCaption = svg.text({ class: `port-text node-text`, style: "pointer-events: none; user-select: none;", textAnchor: "end", x: this.width - this.bounds.space, y: this.y + (this.height - this.height / 3), width: this.width }, this.data.port.id);
        this.el.Port = svg.circle({ class: `node-port ${this.data.port.type.toLowerCase()}-port`, cx: x, cy: y, r: this.bounds.radius, height: this.height / 3 });
        this.data.port.x = x;
        this.data.port.y = y;
      }
      this.cleanup(this.view.application.Selection.observe("changed", ({ data }) => {
        if (data.has(this.data.node.id)) {
          Object.values(this.el).map((el) => el.classList.add("selected"));
        } else {
          Object.values(this.el).map((el) => el.classList.remove("selected"));
        }
      }));
      dataset(this.el.Port, {
        portAddress: [
          this.data.port.kind,
          this.data.node.kind,
          this.data.node.id,
          this.data.port.id
        ].join(":")
      });
      this.cleanup(() => Object.values(this.el).map((el) => el.remove()));
      this.children.map((child) => child.setup());
    }
    render() {
      if (this.behavior.showCaption)
        this.group.appendChild(this.el.PortCaption);
      this.group.appendChild(this.el.Port);
      if (this.data.port.type == "Output") {
        const connectable = new Connectable({
          container: window,
          // <g> element representing an SVG scene
          handle: this.el.Port,
          canvas: this.view.scene,
          node: this.data.node,
          port: this.data.port,
          createConnector: ({ targetType, sourceNode, sourcePort, targetNode, targetPort }) => {
            this.view.application.Api.connect(sourceNode, sourcePort, targetNode, targetPort);
          },
          createJunction: ({ x, y, sourceNode, sourcePort }) => {
            const junction = new Junction();
            junction.x = x;
            junction.y = y;
            this.view.application.Api.add(junction);
            const targetNode = junction.id;
            const targetPort = "input";
            this.view.application.Api.connect(sourceNode, sourcePort, targetNode, targetPort);
          }
        });
        this.cleanup(this.view.observe("transform", (v) => connectable.scale = v.scale));
        this.cleanup(() => connectable.stop());
      }
      this.children.map((child) => child.render());
    }
    update() {
      update(this.el.Port, {});
    }
  };

  // src/application/view/canvas/node/Editor.js
  function truncateTextWithBrowserCompatibility({ text: text2, width, measure, assign, scale }) {
    scale = scale || 1;
    assign.nodeValue = text2;
    let measureTwice;
    if (scale >= 1) {
      measureTwice = /* @__PURE__ */ __name(() => measure.getBBox().width / scale, "measureTwice");
    } else {
      measureTwice = /* @__PURE__ */ __name(() => measure.getBBox().width, "measureTwice");
    }
    let elementWidth = measureTwice();
    let c = 0;
    let elementIsOverflowing = elementWidth > width;
    if (elementWidth == 0)
      return;
    while (elementIsOverflowing) {
      text2 = text2.substr(0, text2.length - 1);
      assign.nodeValue = text2;
      elementWidth = measureTwice();
      elementIsOverflowing = elementWidth > width;
      c++;
      if (c > 666)
        break;
    }
  }
  __name(truncateTextWithBrowserCompatibility, "truncateTextWithBrowserCompatibility");
  var Editor = class extends Component {
    static {
      __name(this, "Editor");
    }
    setup() {
      this.el.Editor = svg.rect({ fill: "transparent", width: this.width, x: this.x, y: this.y, height: this.height });
      this.el.valueText = text("ddd");
      this.el.EditorValue = svg.text({
        class: `port-text editor-text`,
        style: "pointer-events: none; user-select: none;",
        "dominant-baseline": "middle",
        x: this.x + this.bounds.space,
        y: this.y + this.height / 2,
        // + (this.height - (this.height / 3)),
        width: this.width - +this.bounds.space,
        height: this.height
      });
      this.el.EditorValue.appendChild(this.el.valueText);
      this.children.map((child) => child.setup());
      this.cleanup(this.view.application.Selection.observe("changed", ({ data }) => {
        if (data.has(this.data.node.id)) {
          Object.values(this.el).filter((o) => o.classList).map((el) => el.classList.add("selected"));
        } else {
          Object.values(this.el).filter((o) => o.classList).map((el) => el.classList.remove("selected"));
        }
      }));
    }
    render() {
      const { Keyboard, Api: Api2 } = this.view.application;
      this.group.appendChild(this.el.Editor);
      this.group.appendChild(this.el.EditorValue);
      this.cleanup(this.view.observe("transform", ({ x, y, scale }) => scale < 1 ? this.el.EditorValue.style.scale = 1 : this.el.EditorValue.style.scale = 1 / scale));
      this.cleanup(this.view.observe("transform", ({ x, y, scale }) => {
        if (scale >= 1) {
          update2(this.el.EditorValue, {
            x: this.x + this.bounds.space * scale,
            y: (this.y + this.height / 2) * scale,
            //(this.y + (this.height - (this.height / 3)))*scale,
            width: this.width - this.bounds.space * scale,
            height: this.height * scale
            //NOTE: only works in chromium, fails in firefox under various conditions and when a transform is applied 'clip-path': clip(this.width, this.height, scale),
          });
        } else {
          update2(this.el.EditorValue, {
            x: this.x + this.bounds.space,
            y: this.y + this.height / 2,
            width: this.width - this.bounds.space,
            height: this.height
          });
        }
        truncateTextWithBrowserCompatibility({ text: `${this.data.port.id}: ${this.data.node[this.data.port.id] || ""}`, width: this.width - this.bounds.space, measure: this.el.EditorValue, assign: this.el.valueText, scale });
      }));
      const hiddenables = [this.parent.el.Port, this.el.EditorValue];
      this.cleanup(mouse(this.el.Editor, () => this.el.Editor.classList.add("active"), () => this.el.Editor.classList.remove("active")));
      this.cleanup(click(this.el.Editor, () => {
        if (this.view.transform.scale < 0.75)
          return;
        hiddenables.map((o) => o.style.opacity = 0.01);
        this.el.TextareaForeignObject = svg.foreignObject({ width: this.width, x: this.x, y: this.y, height: this.height });
        this.el.Textarea = html.textarea({ type: "text", class: `editor-control textarea`, style: "width: 100%; height: 100%; resize:none;" }, this.data.node[this.data.port.id] || "");
        this.cleanup(this.view.observe("transform", ({ x, y, scale }) => scale < 1 ? null : this.el.TextareaForeignObject.style.scale = 1 / scale));
        this.cleanup(this.view.observe("transform", ({ x, y, scale }) => scale < 1 ? null : update2(this.el.TextareaForeignObject, { width: this.width * scale, x: this.x * scale, y: this.y * scale, height: this.height * scale })));
        this.el.TextareaForeignObject.appendChild(this.el.Textarea);
        this.group.appendChild(this.el.TextareaForeignObject);
        this.el.Textarea.focus();
        this.el.Textarea.setSelectionRange(this.el.Textarea.value.length, this.el.Textarea.value.length);
        this.el.Textarea.addEventListener("focusout", () => {
          hiddenables.map((o) => o.style.opacity = 1);
          this.data.node[this.data.port.id] = this.el.Textarea.value;
          this.el.TextareaForeignObject.remove();
        });
      }));
      this.cleanup(() => Object.values(this.el).map((el) => el.remove()));
      this.cleanup(this.data.node.observe(this.data.port.id, (v) => {
        truncateTextWithBrowserCompatibility({ text: `${this.data.port.id}: ${v}`, width: this.width - this.bounds.space, measure: this.el.EditorValue, assign: this.el.valueText, scale: this.view.transform.scale });
      }));
      const focus = new Focus({
        handle: this.el.Editor,
        action: (e) => {
          front(this.parent.group);
        }
      });
      this.cleanup(() => focus.stop());
      const selectable = new Selectable({
        handle: this.el.Editor,
        action: (e) => {
          const selectingMultiple = Keyboard.isSelecting(e);
          if (selectingMultiple) {
            Api2.toggleSelect(this.data.node);
          } else {
            Api2.deselectAll();
            Api2.toggleSelect(this.data.node);
          }
        }
      });
      this.cleanup(() => selectable.stop());
      this.children.map((child) => child.render());
    }
    update() {
    }
  };

  // src/application/view/canvas/Node.js
  var Node3 = class extends Base {
    static {
      __name(this, "Node");
    }
    start({ item, view }) {
      const container = new Container(`container`);
      container.setBounds({ border: 1, gap: 1, radius: 5, padding: 0, width: item.width || 256 });
      container.setView(view);
      container.setData(item);
      this.cleanup(item.observe("x", (v) => update2(container.group, { "transform": `translate(${v},${item.y})` })));
      this.cleanup(item.observe("y", (v) => update2(container.group, { "transform": `translate(${item.x},${v})` })));
      const caption = new Caption(`caption`);
      caption.setBounds({ border: 0, height: 32, radius: 3 });
      container.add(caption);
      const inputPod = new Pod(`inputPod`);
      inputPod.setBounds({ gap: 1, padding: 0, border: 1, radius: 3 });
      container.add(inputPod);
      const outputPod = new Pod(`outputPod`);
      outputPod.setBounds({ gap: 1, padding: 0, border: 1, radius: 3 });
      container.add(outputPod);
      item.Output.forEach((portObject, index) => {
        const row = new Row(`row{index}`);
        row.setBounds({});
        row.setData(portObject);
        outputPod.add(row);
        const port = new Port(`port{index}`);
        port.setBounds({ height: 24, space: 4, radius: 7 });
        port.setData({ node: item, port: portObject });
        row.add(port);
      });
      item.Input.forEach((portObject, index) => {
        const row = new Row(`row{index}`);
        row.setBounds({});
        row.setData(portObject);
        inputPod.add(row);
        const port = new Port(`port{index}`);
        port.setBehavior({ showCaption: false });
        port.setBounds({ radius: 7 });
        port.setData({ node: item, port: portObject });
        row.add(port);
        const editor = new Editor(`editor{index}`);
        editor.setBounds({ space: 10, height: 24 });
        editor.setData({ node: item, port: portObject });
        port.add(editor);
      });
      container.setup();
      container.render();
      this.cleanup(() => container.stop());
    }
  };

  // src/application/view/canvas/junction/Focus.js
  var Focus2 = class {
    static {
      __name(this, "Focus");
    }
    #scale;
    // set by setter
    // handlers
    #mouseDownHandler;
    #mouseUpHandler;
    // used in stop/cleanup
    #handle;
    constructor({ handle, action }) {
      this.#handle = handle;
      this.#mouseDownHandler = (e) => {
        action(e);
      };
      this.#mouseUpHandler = (e) => {
      };
      this.#handle.addEventListener("mousedown", this.#mouseDownHandler);
      this.#handle.addEventListener("mouseup", this.#mouseUpHandler);
    }
    set scale(value) {
      this.#scale = value;
    }
    stop() {
      this.#handle.removeEventListener("mousedown", this.#mouseDownHandler);
      this.#handle.removeEventListener("mouseup", this.#mouseUpHandler);
    }
  };

  // src/application/view/canvas/junction/Selectable.js
  var Selectable2 = class {
    static {
      __name(this, "Selectable");
    }
    #scale;
    // set by setter
    // handlers
    #mouseDownHandler;
    #mouseUpHandler;
    // used in stop/cleanup
    #handle;
    constructor({ handle, action }) {
      this.#handle = handle;
      this.#mouseDownHandler = (e) => {
        action(e);
      };
      this.#mouseUpHandler = (e) => {
      };
      this.#handle.addEventListener("mousedown", this.#mouseDownHandler);
      this.#handle.addEventListener("mouseup", this.#mouseUpHandler);
    }
    set scale(value) {
      this.#scale = value;
    }
    stop() {
      this.#handle.removeEventListener("mousedown", this.#mouseDownHandler);
      this.#handle.removeEventListener("mouseup", this.#mouseUpHandler);
    }
  };

  // src/application/view/canvas/junction/Movable.js
  var Movable2 = class {
    static {
      __name(this, "Movable");
    }
    #container;
    #handle;
    #read;
    #write;
    #scale;
    // NOTE: set by a setter in this class, it is externaly set as view scale may change
    // local variables
    #dragging = false;
    #initialPosition = { x: 0, y: 0 };
    // handlers for cleanup
    #mouseDownHandler;
    #mouseMoveHandler;
    #mouseUpHandler;
    constructor({ container, handle, read, write }) {
      this.#container = container;
      this.#handle = handle;
      this.#read = read;
      this.#write = write;
      this.#mouseDownHandler = (e) => {
        this.#initialPosition.x = e.clientX;
        this.#initialPosition.y = e.clientY;
        this.#dragging = true;
        this.#container.addEventListener("mousemove", this.#mouseMoveHandler);
      };
      this.#mouseMoveHandler = (e) => {
        let dx = 0;
        let dy = 0;
        dx = e.clientX - this.#initialPosition.x;
        dy = e.clientY - this.#initialPosition.y;
        dx = dx + this.#read("x") * this.#scale;
        dy = dy + this.#read("y") * this.#scale;
        dx = dx / this.#scale;
        dy = dy / this.#scale;
        this.#write("x", dx);
        this.#write("y", dy);
        dx = 0;
        dy = 0;
        this.#initialPosition.x = e.clientX;
        this.#initialPosition.y = e.clientY;
      };
      this.#mouseUpHandler = (e) => {
        this.#dragging = false;
        this.#container.removeEventListener("mousemove", this.#mouseMoveHandler);
      };
      this.#handle.addEventListener("mousedown", this.#mouseDownHandler);
      this.#container.addEventListener("mouseup", this.#mouseUpHandler);
    }
    set scale(value) {
      this.#scale = value;
    }
    stop() {
      this.#handle.removeEventListener("mousedown", this.#mouseDownHandler);
      this.#container.removeEventListener("mousemove", this.#mouseMoveHandler);
      this.#container.removeEventListener("mouseup", this.#mouseUpHandler);
    }
  };

  // src/application/view/canvas/Junction.js
  var Junction2 = class extends Base {
    static {
      __name(this, "Junction");
    }
    start({ item, view }) {
      const { Keyboard, Api: Api2, Nodes, Selection: Selection2, Cable } = view.application;
      this.el.Group = svg.g();
      this.cleanup(item.observe("x", (v) => update2(this.el.Group, { "transform": `translate(${v},${item.y})` })));
      this.cleanup(item.observe("y", (v) => update2(this.el.Group, { "transform": `translate(${item.x},${v})` })));
      this.el.Junction = svg.circle({ class: "junction-caption", cx: 0, cy: 0, r: 24 });
      this.el.OmniPort = svg.circle({ class: "junction-port", cx: 0, cy: 0, r: 8 });
      this.el.OmniPort.dataset.portAddress = ["input", "Junction", item.id, "input"].join(":");
      this.el.Group.appendChild(this.el.Junction);
      this.el.Group.appendChild(this.el.OmniPort);
      const movable = new Movable2({
        container: window,
        // <g> element representing an SVG scene
        handle: this.el.Junction,
        // <rect> that is the caption of a window meant to be dragged
        read: (property) => item[property],
        write: (property, value) => item[property] = value
      });
      this.cleanup(view.observe("transform", (v) => movable.scale = v.scale));
      this.cleanup(() => movable.stop());
      const selectable = new Selectable2({
        handle: this.el.Junction,
        action: (e) => {
          const selectingMultiple = Keyboard.isSelecting(e);
          if (selectingMultiple) {
            Api2.toggleSelect(item);
          } else {
            Api2.deselectAll();
            Api2.toggleSelect(item);
          }
        }
      });
      this.cleanup(() => selectable.stop());
      this.cleanup(view.application.Selection.observe("changed", ({ data }) => {
        if (data.has(item.id)) {
          this.el.Junction.classList.add("selected");
          this.el.OmniPort.classList.add("selected");
        } else {
          this.el.Junction.classList.remove("selected");
          this.el.OmniPort.classList.remove("selected");
        }
      }));
      const focus = new Focus2({
        handle: this.el.Junction,
        action: (e) => {
          front(this.el.Group);
        }
      });
      this.cleanup(() => focus.stop());
      const connectable = new Connectable({
        container: window,
        // <g> element representing an SVG scene
        handle: this.el.OmniPort,
        canvas: view.scene,
        node: item,
        port: item.Output.get("output"),
        // createConnector: ({targetKind, targetType, sourceNode, sourcePort, targetNode, targetPort}) => {
        //   if(targetKind=='Input') view.application.Connectors.create({sourceType:'Junction', targetType, sourceNode, sourcePort, targetNode, targetPort })
        // },
        createConnector: ({ targetType, sourceNode, sourcePort, targetNode, targetPort }) => {
          view.application.Api.connect(sourceNode, sourcePort, targetNode, targetPort);
        },
        createJunction: ({ x, y, sourceNode, sourcePort }) => {
          const junction = new Junction();
          junction.x = x;
          junction.y = y;
          view.application.Api.add(junction);
          const targetNode = junction.id;
          const targetPort = "input";
          view.application.Api.connect(sourceNode, sourcePort, targetNode, targetPort);
        }
      });
      this.cleanup(view.observe("transform", (v) => connectable.scale = v.scale));
      this.cleanup(() => connectable.stop());
      view.scene.appendChild(this.el.Group);
    }
    // start
  };

  // src/application/view/canvas/link/Selectable.js
  var Selectable3 = class {
    static {
      __name(this, "Selectable");
    }
    #scale;
    // set by setter
    // handlers
    #mouseDownHandler;
    #mouseUpHandler;
    // used in stop/cleanup
    #handle;
    constructor({ handle, action }) {
      this.#handle = handle;
      this.#mouseDownHandler = (e) => {
      };
      this.#mouseUpHandler = (e) => {
        action(e);
      };
      this.#handle.addEventListener("mousedown", this.#mouseDownHandler);
      this.#handle.addEventListener("mouseup", this.#mouseUpHandler);
    }
    set scale(value) {
      this.#scale = value;
    }
    stop() {
      this.#handle.removeEventListener("mousedown", this.#mouseDownHandler);
      this.#handle.removeEventListener("mouseup", this.#mouseUpHandler);
    }
  };

  // src/application/view/canvas/Connection.js
  var Connection = class extends Base {
    static {
      __name(this, "Connection");
    }
    start({ item, view }) {
      const { Keyboard, Api: Api2, Connectables: Connectables2, Connections: Connections2, Selection: Selection2, Cable } = view.application;
      const sourceNode = Connectables2.get(item.sourceNode);
      invariant(item.sourceNode, `item.sourceNode must be a string value`, () => console.log(item), () => Connectables2.dump(), () => Connections2.dump());
      invariant(sourceNode, `Unable to locate node with id "${item.sourceNode}"`);
      const targetNode = Connectables2.get(item.targetNode);
      invariant(targetNode, `Unable to locate targetNode with id "${item.targetNode}"`);
      invariant(sourceNode, `sourceNode (${item.sourceNode}) not found, datafile may contain links to nodes that have neen deleted`);
      invariant(targetNode, `targetNode (${item.targetNode}) not found, datafile may contain links to nodes that have neen deleted`);
      const sourcePort = sourceNode.Output.get(item.sourcePort);
      const targetPort = targetNode.Input.get(item.targetPort);
      if ([sourceNode, targetNode, sourcePort, targetPort].some((o) => o == void 0)) {
        console.log("MISSING DATA", item, { sourceNode, targetNode, sourcePort, targetPort });
      }
      if (!targetPort) {
        console.error(`Connectable "${item.targetNode}" did not have Input named "${item.targetPort}"`);
        console.log(item.targetNode, targetNode);
        throw new Error("targetPort not found");
      }
      let x1 = sourceNode.x + sourcePort.x;
      let y1 = sourceNode.y + sourcePort.y;
      let x2 = targetNode.x + targetPort.x;
      let y2 = targetNode.y + targetPort.y;
      this.el.CableZone = svg.line({
        class: "user-interface cable-line-zone",
        x1,
        y1,
        x2,
        y2,
        strokeLinecap: "round"
        // vectorEffect: 'non-scaling-stroke',
      });
      this.el.Cable = svg.line({
        class: "cable-line",
        style: "pointer-events: none;",
        // NOTE: we must disable this line, to let CableZone fully take over
        x1,
        y1,
        x2,
        y2,
        // stroke: "white",
        // fill: 'red',
        // 'width': 5,
        // 'stroke-width': 5,
        strokeLinecap: "round",
        vectorEffect: "non-scaling-stroke"
      });
      this.cleanup(() => Object.values(this.el).map((el) => el.remove()));
      this.cleanup(sourceNode.observe("x", (v) => update2([this.el.Cable, this.el.CableZone], { x1: v + sourcePort.x })));
      this.cleanup(sourceNode.observe("y", (v) => update2([this.el.Cable, this.el.CableZone], { y1: v + sourcePort.y })));
      this.cleanup(targetNode.observe("x", (v) => update2([this.el.Cable, this.el.CableZone], { x2: v + targetPort.x })));
      this.cleanup(targetNode.observe("y", (v) => update2([this.el.Cable, this.el.CableZone], { y2: v + targetPort.y })));
      view.scene.insertBefore(this.el.Cable, view.scene.firstChild.nextSibling);
      view.scene.insertBefore(this.el.CableZone, view.scene.firstChild.nextSibling);
      this.cleanup(dblclick(this.el.CableZone, (e) => {
        e.stopPropagation();
      }));
      this.cleanup(item.observe("enabled", (v) => {
        if (v) {
          this.el.Cable.classList.add("enabled");
          this.el.Cable.classList.remove("disabled");
        } else {
          this.el.Cable.classList.add("disabled");
          this.el.Cable.classList.remove("enabled");
        }
      }));
      const selectable = new Selectable3({
        handle: this.el.CableZone,
        action: (e) => {
          const selectingMultiple = Keyboard.isSelecting(e);
          if (selectingMultiple) {
            Api2.toggleSelect(item);
          } else {
            Api2.deselectAll();
            Api2.toggleSelect(item);
          }
        }
      });
      this.cleanup(() => selectable.stop());
      this.cleanup(Selection2.observe("changed", ({ data }) => {
        if (data.has(item.id)) {
          this.el.Cable.classList.add("selected");
          this.el.CableZone.classList.add("selected");
        } else {
          this.el.Cable.classList.remove("selected");
          this.el.CableZone.classList.remove("selected");
        }
      }));
    }
    // start
  };

  // src/application/view/canvas/Display.js
  var import_oneof3 = __toESM(require_oneof(), 1);

  // src/application/view/canvas/display/Observable.js
  var Observable2 = class {
    static {
      __name(this, "Observable");
    }
    #cleanup = [];
    cleanup(...arg) {
      this.#cleanup.push(...arg);
    }
    // Reactive Properties
    #properties = {};
    inherit(payload) {
      Object.entries(payload).forEach(([key, val]) => this.declare(key, val));
    }
    declare(key, val) {
      this.#properties[key] = val;
      Object.defineProperty(this, key, {
        get: () => this.#properties[key],
        set: (newValue) => {
          const debug = ["height"];
          if (debug.includes(key))
            console.log(`${this.name}: SET ${key} to "${newValue}"`);
          const oldValue = this.#properties[key];
          if (newValue === oldValue)
            return;
          this.#properties[key] = newValue;
          this.notify(key, newValue, { newValue, oldValue });
        }
      });
    }
    dump() {
      console.log(this.#properties);
      return this.#properties;
    }
    // Observable Values
    #observers = {};
    // USER API
    derived(observerCallback, eventNames) {
      const destroy = [];
      for (const eventName of eventNames) {
        destroy.push(
          this.observe(eventName, () => observerCallback(eventNames.map((key) => this.#properties[key])), { autorun: false })
        );
      }
      return () => {
        destroy.forEach((o) => o());
      };
    }
    observe(eventName, observerCallback, options = { autorun: true }) {
      if (options.autorun) {
        const isReactiveProperty = this.#properties.hasOwnProperty(eventName);
        if (isReactiveProperty) {
          observerCallback(this.#properties[eventName]);
        } else {
          observerCallback({ data: this });
        }
      }
      return this.#subscribe(eventName, observerCallback);
    }
    // DEVELOPER API
    //NOTE: must be MANUALLY issued anytime something changes
    notify(eventName, eventData, ...extra) {
      if (Array.isArray(this.#observers[eventName]))
        this.#observers[eventName].forEach((observerCallback) => observerCallback(eventData, ...extra));
    }
    // INTERNAL API
    #subscribe(eventName, observerCallback) {
      if (typeof observerCallback !== "function")
        throw new TypeError("Observer must be a function.");
      if (!Array.isArray(this.#observers[eventName]))
        this.#observers[eventName] = [];
      this.#observers[eventName].push(observerCallback);
      return () => {
        this.#unsubscribe(eventName, observerCallback);
      };
    }
    #unsubscribe(eventName, observerCallback) {
      this.#observers[eventName] = this.#observers[eventName].filter((obs) => obs !== observerCallback);
    }
  };

  // src/application/view/canvas/display/Component.js
  var Component2 = class extends Observable2 {
    static {
      __name(this, "Component");
    }
    debug = true;
    g;
    // svg group node to contain everything
    el = {};
    // bag of elements
    root;
    // root container
    container;
    // parent container
    // these are observables and will be declared in the constructor
    x;
    y;
    w;
    h;
    constructor() {
      super();
      this.declare("started", false);
      this.declare("x", 0);
      this.declare("y", 0);
      this.declare("w", 320);
      this.declare("h", 200);
      if (this.debug)
        this.design.color = "magenta";
    }
    // GARBAGE COLLECTION
    #cleanup = [];
    cleanup(...arg) {
      this.#cleanup.push(...arg);
    }
    // STATE ENCAPSULATION
    #layout;
    // layout manager APPLIES TO CHILDREN COMPONENTS ONLY
    setLayout(layout) {
      this.#layout = layout;
      this.#layout.container = this;
      return this;
    }
    getLayout() {
      return this.#layout;
    }
    // this is the node we are decorating
    // NOTE: it contains observables like X and Y
    data = {};
    setData(data) {
      this.data = data;
      return this;
    }
    getData() {
      return this.data;
    }
    // presets and default values
    design = {
      h: 0,
      // baseline H, this is just added, never changes
      gap: 1,
      border: 1,
      padding: 2,
      radius: 0,
      space: 0,
      color: ""
    };
    setDesign(data) {
      this.design = Object.assign(this.design, data);
      return this;
    }
    // DRAWING
    createElements() {
    }
    updateElements() {
    }
    appendElements() {
      Object.values(this.el).forEach((el) => this.g.appendChild(el));
    }
    removeElements() {
      Object.values(this.el).forEach((el) => el.remove());
    }
    // LIFECYCLE
    start() {
      console.log(`STARTING: ${this.name || this.text}`, this.traits);
      this.createElements();
      this.updateElements();
      this.appendElements();
      this.traits.forEach((trait) => trait.start());
      this.started = true;
    }
    stop() {
      this.traits.forEach((trait) => trait.stop());
      this.getLayout.stop();
      this.removeElements();
      this.#cleanup.map((f) => f());
      Object.values(this.el).map((el) => el.remove());
    }
    // TREE
    getRoot() {
      if (!this.container)
        return this;
      return this.container.getRoot();
    }
    // TRAITS/USE
    traits = [];
    use(trait) {
      trait.parent = this;
      this.traits.push(trait);
      this.cleanup(this.observe("started", (started) => {
        if (started)
          trait.start();
      }));
    }
    // VIEW RETRIEVAL (root only)
    view = null;
    setView(view) {
      this.view = view;
      return this;
    }
    getView() {
      return this.view;
    }
  };

  // src/application/view/canvas/display/Control.js
  var import_oneof2 = __toESM(require_oneof(), 1);
  var Control = class extends Component2 {
    static {
      __name(this, "Control");
    }
    text = "";
    constructor(design) {
      super();
      if (design)
        this.setDesign(design);
      const a = ["Quantum", "Warp", "Neural", "Photon", "Reality", "Chronos", "Stellar", "Event Horizon", "Anti-Gravity", "Nanobots"];
      const b = ["Sync", "Drive", "Net", "Boost", "Shift", "Jump", "Nav", "Stabilizer", "Toggle", "Activation"];
      this.text = [(0, import_oneof2.default)(a), (0, import_oneof2.default)(b)].join(" ");
    }
    // get x(){
    //   return 0
    //     + this.container.x
    //     + this.container.design.border
    //     + this.container.design.padding
    // }
    //
    // calculateY(){
    //
    // 		console.log(`YccccCALC: ${this.name} ABOVE`, this.above.map(o=>o.name), this.above.reduce((total, child) => total + (this.design.absolute ? 0 : child.height), 0));
    //
    //
    //   return 0
    //   + this.container.y
    //   + this.container.design.border
    //   + this.container.design.padding
    //
    //   + this.above.reduce((total, child) => total + (this.design.absolute?0:child.height),0)
    //   + ((this.container.design.gap*2) * this.above.length)
    // }
    //
    // get width(){
    //   if(this.design.width) return this.design.width;
    //   return 0
    //   + this.container.width
    //   /* REMOVE SPACE USED BY PARENT PADDING */ -( this.container.design.border + this.container.design.padding )*2
    //
    //   // + this.design.border
    //   // + this.design.padding
    // }
    //
  };

  // src/application/view/canvas/display/List.js
  var List = class extends Observable2 {
    static {
      __name(this, "List");
    }
    #list = [];
    addAll(...argv) {
      this.add(...argv);
    }
    add(...items) {
      for (const item of items) {
        if (!(Container2.prototype.isPrototypeOf(item) || Control.prototype.isPrototypeOf(item)))
          throw new Error(`Must be a Container or Control.`);
        this.#list.push(item);
        this.notify("created", item);
        this.notify("changed", this);
      }
    }
    [Symbol.iterator]() {
      return this.#list[Symbol.iterator]();
    }
    find(callback) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#list.find(callback);
    }
    map(callback) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#list.map(callback);
    }
    reduce(callback, initialValue) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#list.reduce(callback, initialValue);
    }
    filter(callback) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#list.filter(callback);
    }
    forEach(callback) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#list.forEach(callback);
    }
    indexOf(item) {
      return this.#list.indexOf(item);
    }
    slice(...argv) {
      return this.#list.slice(...argv);
    }
    get length() {
      return this.#list.length;
    }
    get raw() {
      return this.#list;
    }
    //
    // application = null;
    // autostart = true;
    // entity = null;
    //
    // create(data, options = {}) {
    //
    // 	// entity can be provided during object creation
    // 	const Entity = options.entity || this.entity;
    // 	const item = new Entity(data, this.application);
    //
    // 	if(!item.id) throw new Error('Item requires an .id')
    //
    // 	const itemExists = this.#list.find((o) => o.id === item.id);
    // 	if(itemExists) throw new Error('Item Exists, duplicate id is not allowed an maybe an indication of a problem in your code.')
    //
    // 	this.#list.push(item);
    //
    // 	if(this.autostart && item.start) item.start();
    //
    // 	this.notify("created", { item });
    // 	this.notify("changed", { data: this, item });
    //
    // 	return item;
    // }
    //
    // remove(input) {
    //
    // 	let filter = (item) => item.id === input;
    // 	if(typeof input == 'function') filter = input;
    //
    //
    //
    // 	const matching = this.#list.filter(filter);
    //
    // 	matching.forEach(item => {
    // 		if(item) {
    // 			if(item.stop) item.stop();
    // 			this.#list = this.#list.filter(o => o.id !== item.id);
    // 			this.notify("removed", { item });
    // 			this.notify("changed", { item, data: this });
    // 		} else {
    // 			console.warning('ITEM NOT FOUND', id);
    // 		}
    // 	});
    // }
    //
    // // life cycle
    //
    // start(autostart = true) {
    // 	this.autostart = autostart; // start all from now on
    // 	this.#list.filter(item => item.start).forEach(item => item.start());
    // }
    //
    // stop(autostart = false) {
    // 	this.autostart = autostart; // do not autostart
    // 	this.#list.filter(item => item.stop).forEach(item => item.stop());
    // }
    //
    //
    // // READ
    //
    // [Symbol.iterator]() {
    // 	return this.#list[Symbol.iterator]();
    // }
    //
    // get(id) {
    // 	return this.#list.find(o => o.id === id);
    // }
    // has(id) {
    // 	return !!this.#list.find(o => o.id === id);
    // }
    // at(number) {
    // 	return this.#list.at(number);
    // }
    // find(callback) {
    // 	if(typeof callback !== "function") throw new TypeError("Needs a function.");
    // 	return this.#list.find(callback);
    // }
    // filter(callback) {
    // 	if(typeof callback !== "function") throw new TypeError("Needs a function.");
    // 	return this.#list.filter(callback);
    // }
    // forEach(callback) {
    // 	if(typeof callback !== "function") throw new TypeError("Needs a function.");
    // 	return this.#list.forEach(callback);
    // }
    //
    //
    // size() {
    // 	return this.#list.length;
    // }
    // dump() {
    // 	for(const variable of this.#list) {
    // 		console.log(variable.dump());
    // 	}
    // 	return this.#list.length;
    // }
  };

  // src/application/view/canvas/display/Container.js
  var Container2 = class extends Component2 {
    static {
      __name(this, "Container");
    }
    g = svg.g();
    name = "";
    #children = new List();
    constructor(name) {
      super();
      this.name = name;
      this.cleanup(this.getChildren().observe("created", (item) => {
        item.container = this;
        item.g = this.g;
        this.getLayout().manage(item);
        if (this.container)
          this.cleanup(item.observe("h", (whatever) => this.container.getLayout().refresh(this.container, this)));
        item.start();
        console.log(`Added "${item.name || item.text}" to "${this.name}"`);
      }, { autorun: false }));
      this.cleanup(this.getChildren().observe("removed", (item) => {
        item.stop();
        this.getLayout().forget(item);
      }, { autorun: false }));
    }
    createElements() {
      this.el.Container = svg.rect({
        name: this.name,
        class: "node-box",
        ry: this.design.radius,
        "stroke-width": 2,
        stroke: this.design.color,
        // set initial values
        // these are special, handeled by the layout manager
        // NOTE: these are observables, getter returns a value, setter notifies listeners, and you can ```this.observe('x', v=>{...})```
        width: this.w,
        height: this.h,
        x: this.x,
        y: this.y
      });
      this.el.CaptionText = svg.text({ fill: this.design.color, x: this.x, y: this.y }, this.name);
    }
    updateElements() {
      this.observe("w", (width) => update2(this.el.Container, { width }), { autorun: false });
      this.observe("h", (height) => update2(this.el.Container, { height }), { autorun: false });
      this.observe("x", (x) => update2(this.el.Container, { x }), { autorun: false });
      this.observe("y", (y) => update2(this.el.Container, { y }), { autorun: false });
    }
    getChildren() {
      return this.#children;
    }
  };

  // src/application/view/canvas/display/Layout.js
  var BOTH_SIDES = 2;
  var Layout = class {
    static {
      __name(this, "Layout");
    }
    container;
    constructor() {
    }
    refresh(container, child) {
      this.update(container, child);
    }
    manage(child) {
      this.update(this.container, child);
    }
    update(container, child) {
      child.w = this.calculateW(container, child);
      child.h = this.calculateH(container, child);
      child.x = this.calculateX(container, child);
      child.y = this.calculateY(container, child);
    }
    calculateW(container, child) {
      return 320 * Math.random();
    }
    calculateH(container, child) {
      return 200 * Math.random();
    }
    calculateX(container, child) {
      return 800 * Math.random();
    }
    calculateY(container, child) {
      return 600 * Math.random();
    }
    // utility classes to help with simple and pretty looking calculations
    // NOTE: these are getter so you can: this.o + this.child.e
    above(container, child) {
      const selfIndex = container.getChildren().indexOf(child);
      return container.getChildren().slice(0, selfIndex);
    }
    #cleanup = [];
    cleanup(...arg) {
      this.#cleanup.push(...arg);
    }
  };
  var VerticalLayout = class extends Layout {
    static {
      __name(this, "VerticalLayout");
    }
    constructor() {
      super();
    }
    calculateW(container, child) {
      const response = container.w - (container.design.border + container.design.padding) * BOTH_SIDES;
      return response;
    }
    calculateH(container, child) {
      let childrenHeight = 0;
      if (child.getChildren) {
        const children = child.getChildren();
        childrenHeight = children.reduce((total, c) => total + c.h, 0) + container.design.gap * 2 * (children.length > 0 ? children.length - 1 : 0);
        console.log(child.name, children.length, childrenHeight);
      }
      const response = child.design.border + child.design.padding + child.design.h + // NOT A MISTAKE design can hold a base h that is used in calculations
      childrenHeight + child.design.padding + child.design.border;
      return response;
    }
    calculateX(container, child) {
      const response = container.x + container.design.border + container.design.padding;
      return response;
    }
    calculateY(container, child) {
      const response = container.y + container.design.border + container.design.padding + this.above(container, child).reduce((total, child2) => total + child2.h, 0) + container.design.gap * 2 * this.above(container, child).length;
      return response;
    }
  };

  // src/application/view/canvas/display/VBox.js
  var VBox = class extends Container2 {
    static {
      __name(this, "VBox");
    }
    constructor(...arg) {
      super(...arg);
      this.setLayout(new VerticalLayout());
    }
  };

  // src/application/view/canvas/display/Button.js
  var Button = class extends Control {
    static {
      __name(this, "Button");
    }
    constructor(text2, ...more) {
      super(...more);
      if (text2)
        this.text = text2;
      this.design.h = 32;
      console.log(this);
    }
    createElements() {
      console.log("label", this.above);
      this.el.Surface = svg.rect({ class: `node-captiond`, fill: "#2c434a", ry: this.design.radius, width: this.w, x: this.x, y: this.y, height: this.h });
      this.el.SurfaceText = svg.text({ class: `node-caption caption-text node-text`, style: "pointer-events: none; user-select: none;", x: this.x + this.w * 0.02 }, this.text);
    }
    updateElements() {
      this.observe("y", (y) => update2(this.el.Surface, { y }));
      this.observe("y", (y) => update2(this.el.SurfaceText, { y: y + (this.h - this.h * 0.12) }));
    }
  };

  // src/application/view/canvas/display/Movable.js
  var Movable3 = class {
    static {
      __name(this, "Movable");
    }
    parent;
    control;
    #container;
    #handle;
    #read;
    #write;
    #scale;
    // NOTE: set by a setter in this class, it is externaly set as view scale may change
    // local variables
    #dragging = false;
    #initialPosition = { x: 0, y: 0 };
    // handlers for cleanup
    #mouseDownHandler;
    #mouseMoveHandler;
    #mouseUpHandler;
    #removeTransformObserver;
    #removeStartedObserver;
    constructor(control) {
      this.control = control;
    }
    start() {
      this.#removeStartedObserver = this.control.observe("started", (started) => {
        if (started) {
          this.begin({
            container: window,
            // <g> element representing an SVG scene
            handle: this.control.el.Surface,
            // <rect> that is the caption of a window meant to be dragged
            read: (property) => this.parent.getData()[property],
            write: (property, value) => this.parent.getData()[property] = value
          });
        }
      });
    }
    begin({ container, handle, read, write, view }) {
      this.#removeTransformObserver = this.parent.getRoot().getView().observe("transform", (v) => this.#scale = v.scale);
      this.#container = container;
      this.#handle = handle;
      this.#read = read;
      this.#write = write;
      this.#mouseDownHandler = (e) => {
        this.#initialPosition.x = e.clientX;
        this.#initialPosition.y = e.clientY;
        this.#dragging = true;
        this.#container.addEventListener("mousemove", this.#mouseMoveHandler);
      };
      this.#mouseMoveHandler = (e) => {
        if (this.#scale == void 0)
          console.error("you must correctly configure scale", this.#scale);
        let dx = 0;
        let dy = 0;
        dx = e.clientX - this.#initialPosition.x;
        dy = e.clientY - this.#initialPosition.y;
        dx = dx + this.#read("x") * this.#scale;
        dy = dy + this.#read("y") * this.#scale;
        dx = dx / this.#scale;
        dy = dy / this.#scale;
        this.#write("x", dx);
        this.#write("y", dy);
        dx = 0;
        dy = 0;
        this.#initialPosition.x = e.clientX;
        this.#initialPosition.y = e.clientY;
      };
      this.#mouseUpHandler = (e) => {
        this.#dragging = false;
        this.#container.removeEventListener("mousemove", this.#mouseMoveHandler);
      };
      this.#handle.addEventListener("mousedown", this.#mouseDownHandler);
      this.#container.addEventListener("mouseup", this.#mouseUpHandler);
    }
    set scale(value) {
      this.#scale = value;
    }
    stop() {
      this.#removeStartedObserver();
      this.#removeTransformObserver();
      this.#handle.removeEventListener("mousedown", this.#mouseDownHandler);
      this.#container.removeEventListener("mousemove", this.#mouseMoveHandler);
      this.#container.removeEventListener("mouseup", this.#mouseUpHandler);
    }
  };

  // src/application/view/canvas/Display.js
  var Display = class extends Base {
    static {
      __name(this, "Display");
    }
    start({ item, view }) {
      const container = new Container2("Node-Window");
      container.setData(item);
      container.setView(view);
      container.setDesign({ gap: 1 });
      container.setLayout(new VerticalLayout());
      this.cleanup(item.observe("x", (v) => update2(container.g, { "transform": `translate(${v},${item.y})` })));
      this.cleanup(item.observe("y", (v) => update2(container.g, { "transform": `translate(${item.x},${v})` })));
      this.cleanup(item.observe("w", (v) => container.w = v));
      this.cleanup(item.observe("h", (v) => container.h = v));
      view.add(container);
      const windowCaption = new Button("Window Caption", { h: 15 });
      container.use(new Movable3(windowCaption));
      container.getChildren().addAll(windowCaption);
      container.getChildren().addAll(new Button("Second Button"));
      const box1 = new VBox("Box1");
      container.getChildren().addAll(box1);
      box1.getChildren().addAll(new Button("Box 1 > First Button"));
      const box11 = new VBox("Box11");
      box1.getChildren().addAll(box11);
      box11.getChildren().addAll(new Button("Box 1 > 1 > First Button"));
      box11.getChildren().addAll(new Button("Box 1 > 1 > Second Button"));
      globalThis.xxx = () => {
        const chosen = (0, import_oneof3.default)([container, box1, box11]);
        chosen.getChildren().addAll(new Button(null));
      };
    }
  };

  // src/application/view/Canvas.js
  var Canvas = class extends Item {
    static {
      __name(this, "Canvas");
    }
    application;
    element;
    svg;
    defs;
    scene;
    bg;
    renderers = /* @__PURE__ */ new Map();
    constructor(properties, application2) {
      super();
      this.application = application2;
      this.inherit({ transform: {}, ...properties });
      this.element = document.querySelector(this.selector);
      this.installScene();
      this.installKeyboardShortcuts();
      this.installPanZoom();
      this.installDataMonitor();
    }
    installScene() {
      this.svg = this.element.appendChild(svg.svg({ class: "editor-interface", width: "100%", height: "95vh" }));
      this.defs = this.svg.appendChild(svg.defs());
      this.scene = this.svg.appendChild(svg.g());
      this.bg = this.scene.appendChild(svg.rect({ class: "interface-background", x: 0, y: 0, width: 11e3, height: 8500 }));
    }
    installKeyboardShortcuts() {
      this.cleanup(keyboard((e) => this.application.Keyboard.isDeleting(e), () => this.application.Api.removeSelected()));
      this.cleanup(keyboard((e) => this.application.Keyboard.doRun(e), () => this.application.Connectables.filter((o) => o.executable).forEach((o) => this.application.Api.run(o.id))));
      this.cleanup(keyboard((e) => this.application.Keyboard.doDisable(e), () => this.application.Selection.forEach(({ id: id2 }) => {
        this.application.Connections.get(id2).enabled = !this.application.Connections.get(id2).enabled;
      })));
      this.cleanup(keyboard((e) => this.application.Keyboard.moveUp(e), () => this.application.Api.moveUp()));
      this.cleanup(keyboard((e) => this.application.Keyboard.moveDown(e), () => this.application.Api.moveDown()));
      this.cleanup(keyboard((e) => this.application.Keyboard.moveLeft(e), () => this.application.Api.moveLeft()));
      this.cleanup(keyboard((e) => this.application.Keyboard.moveRight(e), () => this.application.Api.moveRight()));
      this.cleanup(click(this.bg, () => this.application.Api.deselectAll()));
    }
    installPanZoom() {
      this.panzoom = (0, import_panzoom.default)(this.scene, {
        smoothScroll: false,
        // this is the sluggish post  scrolling effect
        // transformOrigin: { x: 0.5, y: 0.5 },
        maxZoom: 100,
        minZoom: 0.01,
        initialX: 0,
        initialY: 0,
        // initialZoom: .5,
        filterKey: function() {
          return true;
        },
        beforeMouseDown: function(e) {
          const DENY = true;
          if (!e.target.classList.contains("interface-background"))
            return DENY;
          if (e.target.classList.contains("user-interface"))
            return DENY;
        }
      });
      this.panzoom.on("transform", (e) => {
        const { x, y, scale } = this.panzoom.getTransform();
        this.transform = { x, y, scale };
      });
      this.cleanup(() => this.panzoom.dispose());
    }
    installDataMonitor() {
      this.application.Connectables.observe("created", (v) => this.displayConnectable(v), { autorun: false });
      this.application.Connectables.observe("removed", (v) => this.disposeConnectable(v), { autorun: false });
      this.application.Connections.observe("created", (v) => this.displayConnection(v), { autorun: false });
      this.application.Connections.observe("removed", (v) => this.disposeConnection(v), { autorun: false });
    }
    displayConnectable({ item }) {
      const types = [Node3, Junction2, Display];
      const Component3 = types.find((o) => o.name == item.type);
      const connectable = new Component3();
      this.renderers.set(item.id, connectable);
      connectable.start({ item, view: this });
    }
    disposeConnectable({ item }) {
      this.renderers.get(item.id).stop();
    }
    displayConnection({ item }) {
      const types = [Connection];
      const Component3 = types.find((o) => o.name == item.type);
      const connectable = new Component3();
      this.renderers.set(item.id, connectable);
      connectable.start({ item, view: this });
    }
    disposeConnection({ item }) {
      this.renderers.get(item.id).stop();
    }
    add(component) {
      this.scene.appendChild(component.g);
      component.start();
    }
  };

  // nodes/Message.js
  var Message = class extends Node2 {
    static {
      __name(this, "Message");
    }
    type = "Display";
    text = "Hello World";
    input = [];
    output() {
      return this.input;
    }
  };

  // themes/Theme.js
  var Theme = class {
    static {
      __name(this, "Theme");
    }
    panelBackground = "blue";
  };

  // themes/nostromo/index.js
  var Nostromo = class extends Theme {
    static {
      __name(this, "Nostromo");
    }
    id = "nostromo";
    panelBackground = "blue";
    constructor() {
      super();
    }
  };

  // themes/obsidian/index.js
  var Obsidian = class extends Theme {
    static {
      __name(this, "Obsidian");
    }
    id = "obsidian";
    panelBackground = "blue";
    constructor() {
      super();
    }
  };

  // src/setup.js
  function setup_default(application2) {
    application2.Archetypes.create({ id: "Output", class: Output });
    application2.Archetypes.create({ id: "Text", class: Text });
    application2.Archetypes.create({ id: "Midjourney", class: Midjourney });
    application2.Archetypes.create({ id: "Message", class: Message });
    application2.Views.create({ id: "view-1", selector: "#signalcraft-view-1" }, { entity: Canvas });
    application2.Themes.create({}, { entity: Nostromo });
    application2.Themes.create({}, { entity: Obsidian });
    application2.Themes.select("nostromo");
  }
  __name(setup_default, "default");

  // src/usage.js
  async function usage_default(api) {
    const somePrompt = new Text();
    somePrompt.id = "somePrompt";
    somePrompt.text = `Feminine. Cinematic shot, photoshoot, wideshot, epic.`;
    somePrompt.x = 30;
    somePrompt.y = 10;
    const highresPrompt1 = new Text();
    highresPrompt1.id = "highresPrompt1";
    highresPrompt1.text = `By Enki Bilal with playlet transparent scaling elements, gold rivets, underneath we find strong zenith illumination from the right side of the shot j. scott campbell, rainbow silvertone, solarizing master, enamel, elfriede lohse-w\xE4chtler`;
    highresPrompt1.x = 30;
    highresPrompt1.y = 200;
    const highresPrompt2 = new Text();
    highresPrompt2.id = "highresPrompt2";
    highresPrompt2.text = `Vivid skin texture, glowing eyes and long strait pastel lite-white-pink hair, subtle nuances , white face paint, red lipstick, beam of sunlight, chiaroscuro shadows, in the style of detailed hyperrealism photoshoot, mouth slightly open, pouting her lips, cf`;
    highresPrompt2.x = 30;
    highresPrompt2.y = 400;
    const highresPrompt3 = new Text();
    highresPrompt3.id = "highresPrompt3";
    highresPrompt3.text = `Esoteric coded overlays.`;
    highresPrompt3.x = 30;
    highresPrompt3.y = 600;
    const midjourneyPrompt = new Midjourney();
    midjourneyPrompt.id = "midjourneyPrompt";
    midjourneyPrompt.x = 400;
    midjourneyPrompt.y = 100;
    const outputNode = new Output();
    outputNode.id = "outputNode";
    outputNode.x = 700;
    outputNode.y = 100;
    const msg1 = new Message();
    msg1.id = "msg1";
    msg1.radius = 0;
    msg1.x = 333;
    msg1.y = 333;
    msg1.w = 666;
    msg1.h = 666;
    api.add(msg1);
  }
  __name(usage_default, "default");

  // src/application/Api.js
  var Api = class {
    static {
      __name(this, "Api");
    }
    application;
    constructor(application2) {
      this.application = application2;
    }
    start() {
    }
    display() {
      if (this.application.Views.size() == 0)
        throw new Error("Unable to present content. No registered views are available for display.");
      this.application.Views.start();
    }
    getApplication() {
      return this.application;
    }
    //
    selectTheme(name) {
      this.application.Setup.theme = name;
      document.querySelector("html").dataset.uiTheme = name;
      console.info("dataset.uiTheme", document.querySelector("html").dataset.uiTheme);
    }
    selectedTheme(name) {
      return this.application.Setup.theme;
    }
    add(node) {
      const decorated = this.application.Connectables.create(node);
      return decorated;
    }
    connect(sourceNode, sourcePort, targetNode, targetPort) {
      const id2 = v4_default();
      if (!sourceNode)
        throw new Error("sourceNode is required for making connections");
      if (!sourcePort)
        throw new Error("sourcePort is required for making connections");
      if (!targetNode)
        throw new Error("targetNode is required for making connections");
      if (!targetPort)
        throw new Error("targetPort is required for making connections");
      if (typeof sourceNode !== "string")
        throw new Error("sourceNode must be a string id");
      if (typeof sourcePort !== "string")
        throw new Error("sourcePort must be a string id");
      if (typeof targetNode !== "string")
        throw new Error("targetNode must be a string id");
      if (typeof targetPort !== "string")
        throw new Error("targetPort must be a string id");
      return this.application.Connections.create({
        id: id2,
        sourceNode,
        targetNode,
        sourcePort,
        targetPort
      });
    }
    async run(node, port = "output") {
      const nodeNotSpecified = !node;
      if (nodeNotSpecified)
        throw new Error("you must specify node id");
      const stringIdRequired = typeof node !== "string";
      if (stringIdRequired)
        throw new Error("you must specify a string for node id");
      const result = await this.application.Execute.run(node, port);
      console.clear();
      console.log("usage.js RERUN api.execute said: ", result);
    }
    async runAll(node) {
      this.Connectables.filter((node2) => node2.executable).forEach(async ({ id: id2 }) => {
        const result = await this.run(node);
        console.log("usage.js RERUN api.execute said: ", result);
      });
    }
    select(reference) {
      return this.application.Selection.create({ id: reference.id, itemClass: reference.className, reference });
    }
    toggleSelect(reference) {
      if (this.application.Selection.has(reference.id)) {
        return this.application.Selection.remove(reference.id);
      } else {
        return this.select(reference);
      }
    }
    deselect(item) {
      return this.application.Selection.remove(item.id);
    }
    deselectAll(item) {
      return this.application.Selection.forEach(({ id: id2 }) => this.application.Selection.remove(id2));
    }
    removeSelected() {
      const { Selection: Selection2, Connectables: Connectables2, Connections: Connections2 } = this.application;
      Selection2.filter((item) => item.itemClass == "Connectable").forEach(({ id: id2 }) => Connections2.remove((link) => link.sourceNode == id2));
      Selection2.filter((item) => item.itemClass == "Connectable").forEach(({ id: id2 }) => Connections2.remove((link) => link.targetNode == id2));
      Selection2.filter((item) => item.itemClass == "Connectable").forEach(({ id: id2 }) => Connectables2.remove(id2));
      Selection2.filter((item) => item.itemClass == "Connection").forEach(({ id: id2 }) => Connections2.remove(id2));
      this.deselectAll();
    }
    moveUp() {
      const { Selection: Selection2, Connectables: Connectables2 } = this.application;
      let main = Selection2.at(-1);
      if (!main)
        main = { reference: Connectables2.find((node) => node.executable) };
      if (!main)
        return;
      this.deselectAll();
      this.select(main.reference);
      if (main.reference.className == "Connection") {
        const connection = main.reference;
        const node = Connectables2.get(connection.targetNode);
        const socketsWithConnections = node.Input.filter((port) => port.incoming().length > 0);
        const connectionsFromSockets = socketsWithConnections.map((socket) => socket.incoming()).flat();
        const myIndex = connectionsFromSockets.findIndex((o) => o.id == connection.id);
        let nextIndex = myIndex - 1;
        if (nextIndex < 0)
          nextIndex = connectionsFromSockets.length - 1;
        this.deselectAll();
        this.select(connectionsFromSockets[nextIndex]);
      }
    }
    moveDown() {
      const { Selection: Selection2, Connectables: Connectables2 } = this.application;
      let main = Selection2.at(-1);
      if (!main)
        main = { reference: Connectables2.find((node) => node.executable) };
      if (!main)
        return;
      this.deselectAll();
      this.select(main.reference);
      if (main.reference.className == "Connection") {
        const connection = main.reference;
        const node = Connectables2.get(connection.targetNode);
        const socketsWithConnections = node.Input.filter((port) => port.incoming().length > 0);
        const connectionsFromSockets = socketsWithConnections.map((socket) => socket.incoming()).flat();
        const myIndex = connectionsFromSockets.findIndex((o) => o.id == connection.id);
        let nextIndex = myIndex + 1;
        if (nextIndex + 1 > connectionsFromSockets.length)
          nextIndex = 0;
        this.deselectAll();
        this.select(connectionsFromSockets[nextIndex]);
      }
    }
    moveLeft() {
      const { Selection: Selection2, Connectables: Connectables2 } = this.application;
      let main = Selection2.at(-1);
      if (!main)
        main = { reference: Connectables2.find((node) => node.executable) };
      if (!main)
        return;
      this.deselectAll();
      this.select(main.reference);
      if (main.reference.className == "Connectable") {
        const node = main.reference;
        const socketsWithConnections = node.Input.filter((port) => port.incoming().length > 0);
        const connectionsFromSockets = socketsWithConnections.map((socket) => socket.incoming()).flat();
        const connection = connectionsFromSockets.at(0);
        if (connection) {
          this.deselectAll();
          this.select(connection);
        }
      } else if (main.reference.className == "Connection") {
        const connection = main.reference;
        const node = Connectables2.get(connection.sourceNode);
        this.deselectAll();
        this.select(node);
      }
    }
    moveRight() {
      const { Selection: Selection2, Connectables: Connectables2 } = this.application;
      let main = Selection2.at(-1);
      if (!main)
        main = { reference: Connectables2.find((node) => node.executable) };
      if (!main)
        return;
      this.deselectAll();
      this.select(main.reference);
      if (main.reference.className == "Connectable") {
        const node = main.reference;
        const socketsWithConnections = node.Output.filter((port) => port.outgoing().length > 0);
        const connectionsFromSockets = socketsWithConnections.map((socket) => socket.outgoing()).flat();
        const connection = connectionsFromSockets.at(0);
        if (connection) {
          this.deselectAll();
          this.select(connection);
        }
      } else if (main.reference.className == "Connection") {
        const connection = main.reference;
        const node = Connectables2.get(connection.targetNode);
        this.deselectAll();
        this.select(node);
      }
    }
    //
    //
    //
    //
    // select(reference) {
    // 	// NOTE: the selected object id is used as selection ID
    // 	return this.application.Selection.create({ id: reference.id, kind: reference.kind, reference });
    // }
    // toggleSelect(item) {
    // 	if(this.application.Selection.has(item.id)) {
    // 		return this.application.Selection.remove(item.id, true);
    // 	} else {
    // 		return this.application.Selection.create({ id: item.id, kind: item.kind, reference: item });
    // 	}
    // }
    // deselect(item) {
    // 	return this.application.Selection.remove(item.id, true);
    // }
    // deselectAll(item) {
    // 	return this.application.Selection.forEach(({ id }) => this.application.Selection.remove(id, true));
    // }
    // removeSelected() {
    // 	const { Selection, Nodes, Connectors, Junctions } = this.application;
    //
    // 	Selection.filter(item => item.kind == 'Junction').forEach(({ id }) => Connectors.destroy(link => link.sourceNode == id, true));
    // 	Selection.filter(item => item.kind == 'Junction').forEach(({ id }) => Connectors.destroy(link => link.targetNode == id, true));
    // 	Selection.filter(item => item.kind == 'Junction').forEach(({ id }) => Junctions.remove(id, true));
    //
    // 	Selection.filter(item => item.kind == 'Node').forEach(({ id }) => Connectors.destroy(link => link.sourceNode == id, true));
    // 	Selection.filter(item => item.kind == 'Node').forEach(({ id }) => Connectors.destroy(link => link.targetNode == id, true));
    //
    // 	Selection.filter(item => item.kind == 'Node').forEach(({ id }) => Nodes.remove(id, true));
    //
    // 	Selection.filter(item => item.kind == 'Connector').forEach(({ id }) => Connectors.remove(id, true));
    // 	Selection.clear(true);
    // }
    //
    // addNode(archetype, properties) {
    // 	// Procedure Step 1: create a node of the desired type in the reactive collection
    // 	const node = this.application.Nodes.create({ type: archetype, ...properties });
    // 	this.deselectAll();
    // 	this.select(node);
    // 	return node;
    // }
    //
    // addJunction(properties) {
    // 	const junction = this.application.Junctions.create(properties);
    // 	return junction;
    // }
    //
    // linkPorts(sourceNode, targetNode, options = {}) {
    // 	const { output: outputPort, input: inputPort } = Object.assign({ output: 'output', input: 'input' }, options);
    // 	const connector = { sourceNode: sourceNode.id, targetNode: targetNode.id, sourcePort: outputPort, targetPort: inputPort };
    // 	console.log({ connector });
    // 	return this.application.Connectors.create(connector);
    // }
    //
    //
    //
    //
    //
    //
    //
    // async execute(node, port = 'output') {
    // 	if(!node) throw new Error('you must specify which node to execute');
    // 	const output = await node.Execute.run(port);
    // 	// console.log(`Output on port ${port} of node ${node.id}`, output)
    // 	return output;
    // }
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // clear() {
    // 	this.deselectAll();
    // 	for(const collectionName in data) {
    // 		this.application[collectionName].clear(true)
    // 	}
    // }
    //
    // load(data) {
    // 	this.deselectAll();
    // 	for(const collectionName in data) {
    // 		this.application[collectionName].clear(true)
    // 		data[collectionName].forEach(item => this.application[collectionName].create(item))
    // 	}
    // }
    //
    // save() {
    // 	const content = {
    // 		Junctions: this.application.Junctions.content.map(o => o.content),
    // 		Nodes: this.application.Nodes.content.map(o => o.content),
    // 		//TODO: Order is significant at the moment, connectors must be last, fix this by always executing node creation first and linker last
    // 		Connectors: this.application.Connectors.content.map(o => o.content),
    // 	}
    // 	return content;
    // }
  };

  // src/application/model/List.js
  var List2 = class extends Observable {
    static {
      __name(this, "List");
    }
    #list = [];
    application = null;
    autostart = true;
    entity = null;
    create(data, options = {}) {
      const Entity = options.entity || this.entity;
      const item = new Entity(data, this.application);
      if (!item.id)
        throw new Error("Item requires an .id");
      const itemExists = this.#list.find((o) => o.id === item.id);
      if (itemExists)
        throw new Error("Item Exists, duplicate id is not allowed an maybe an indication of a problem in your code.");
      this.#list.push(item);
      if (this.autostart && item.start)
        item.start();
      this.notify("created", { item });
      this.notify("changed", { data: this, item });
      return item;
    }
    remove(input) {
      let filter = /* @__PURE__ */ __name((item) => item.id === input, "filter");
      if (typeof input == "function")
        filter = input;
      const matching = this.#list.filter(filter);
      matching.forEach((item) => {
        if (item) {
          if (item.stop)
            item.stop();
          this.#list = this.#list.filter((o) => o.id !== item.id);
          this.notify("removed", { item });
          this.notify("changed", { item, data: this });
        } else {
          console.warning("ITEM NOT FOUND", id);
        }
      });
    }
    // life cycle
    start(autostart = true) {
      this.autostart = autostart;
      this.#list.filter((item) => item.start).forEach((item) => item.start());
    }
    stop(autostart = false) {
      this.autostart = autostart;
      this.#list.filter((item) => item.stop).forEach((item) => item.stop());
    }
    // READ
    [Symbol.iterator]() {
      return this.#list[Symbol.iterator]();
    }
    get(id2) {
      return this.#list.find((o) => o.id === id2);
    }
    has(id2) {
      return !!this.#list.find((o) => o.id === id2);
    }
    at(number) {
      return this.#list.at(number);
    }
    find(callback) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#list.find(callback);
    }
    filter(callback) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#list.filter(callback);
    }
    forEach(callback) {
      if (typeof callback !== "function")
        throw new TypeError("Needs a function.");
      return this.#list.forEach(callback);
    }
    size() {
      return this.#list.length;
    }
    dump() {
      for (const variable of this.#list) {
        console.log(variable.dump());
      }
      return this.#list.length;
    }
  };

  // src/application/model/Archetype.js
  var Archetype = class extends Item {
    static {
      __name(this, "Archetype");
    }
    constructor(properties, application2) {
      super();
      this.inherit(properties);
    }
  };

  // src/application/model/Archetypes.js
  var Archetypes = class extends List2 {
    static {
      __name(this, "Archetypes");
    }
    application = null;
    autostart = true;
    entity = Archetype;
    constructor(application2) {
      super();
      this.application = application2;
    }
  };

  // src/application/model/Socket.js
  var Socket = class extends Item {
    static {
      __name(this, "Socket");
    }
    application;
    parent;
    // parent list (Sockets)
    constructor(properties, application2) {
      super();
      this.inherit(properties);
      this.application = application2;
    }
    incoming() {
      return this.application.Connections.filter((remoteConnector) => remoteConnector.targetNode == this.parent.node.id).filter((remoteConnector) => remoteConnector.targetPort == this.id);
    }
    outgoing() {
      return this.application.Connections.filter((remoteConnector) => remoteConnector.sourceNode == this.parent.node.id).filter((remoteConnector) => remoteConnector.sourcePort == this.id);
    }
  };

  // src/application/model/Sockets.js
  var Sockets = class extends List2 {
    static {
      __name(this, "Sockets");
    }
    application = null;
    autostart = true;
    entity = Socket;
    node;
    constructor(application2, node) {
      super();
      this.application = application2;
      this.node = node;
    }
    create(item) {
      const creation = super.create(item);
      creation.parent = this;
    }
  };

  // src/application/model/Connectable.js
  var Connectable2 = class extends Item {
    static {
      __name(this, "Connectable");
    }
    className = "Connectable";
    // this is overriden by a specific type
    type = "Connectable";
    // this is overriden by a specific type
    node;
    constructor(node, application2) {
      super();
      this.node = node;
      const internalFields = ["id", "type", "x", "y", "w", "h", "executable", "schema", "omit"];
      const nodeContent = [
        // ['kind', node.constructor.name],
        ...Object.entries(node),
        ...Object.getOwnPropertyNames(Object.getPrototypeOf(node)).filter((name) => name !== "constructor").map((name) => [name, node[name]])
      ];
      const observables = nodeContent.filter(([key, value]) => typeof value !== "function");
      const observablesObject = Object.fromEntries(observables);
      const properties = nodeContent.filter(([key, value]) => typeof value !== "function").filter(([k, v]) => !internalFields.includes(k));
      const propertiesObject = Object.fromEntries(properties);
      const methods = nodeContent.filter(([key, value]) => typeof value == "function").filter(([k, v]) => !internalFields.includes(k));
      const methodsObject = Object.fromEntries(methods);
      const defaults = { x: 0, y: 0, w: 320, h: 200 };
      this.inherit({ ...defaults, ...observablesObject });
      this.Input = new Sockets(application2, node);
      this.Output = new Sockets(application2, node);
      properties.forEach(([id2]) => this.Input.create({ id: id2, type: "Input", x: 0, y: 0 }));
      methods.forEach(([id2]) => this.Output.create({ id: id2, type: "Output", x: 0, y: 0 }));
    }
  };

  // src/application/model/Connectables.js
  var Connectables = class extends List2 {
    static {
      __name(this, "Connectables");
    }
    application = null;
    autostart = true;
    entity = Connectable2;
    constructor(application2) {
      super();
      this.application = application2;
    }
  };

  // src/application/model/Connection.js
  var Connection2 = class extends Item {
    static {
      __name(this, "Connection");
    }
    className = "Connection";
    type = "Connection";
    constructor(properties, application2) {
      super();
      const defaults = { x1: 0, y1: 1, x2: 2, y2: 3, enabled: true };
      this.inherit({ ...defaults, ...properties });
    }
  };

  // src/application/model/Connections.js
  var Connections = class extends List2 {
    static {
      __name(this, "Connections");
    }
    application = null;
    autostart = true;
    entity = Connection2;
    constructor(application2) {
      super();
      this.application = application2;
    }
  };

  // src/application/model/Selected.js
  var Selected = class extends Item {
    static {
      __name(this, "Selected");
    }
    constructor(properties, application2) {
      super();
      this.inherit(properties);
    }
  };

  // src/application/model/Selection.js
  var Selection = class extends List2 {
    static {
      __name(this, "Selection");
    }
    application = null;
    autostart = true;
    entity = Selected;
    constructor(application2) {
      super();
      this.application = application2;
    }
  };

  // src/application/model/Views.js
  var Views = class extends List2 {
    static {
      __name(this, "Views");
    }
    application = null;
    autostart = true;
    constructor(application2) {
      super();
      this.application = application2;
    }
  };

  // src/application/model/Themes.js
  var Views2 = class extends List2 {
    static {
      __name(this, "Views");
    }
    application = null;
    autostart = true;
    constructor(application2) {
      super();
      this.application = application2;
    }
    select(idTheme) {
      const instance = this.get(idTheme);
      document.querySelector("html").dataset.uiTheme = idTheme;
    }
  };

  // src/application/model/Setup.js
  var Setup = class extends Item {
    static {
      __name(this, "Setup");
    }
    constructor(properties, application2) {
      super();
      this.inherit(properties);
    }
  };

  // src/application/execute/Basic.js
  var import_pick = __toESM(require_pick(), 1);

  // src/application/execute/Branch.js
  var Branch = class _Branch {
    static {
      __name(this, "Branch");
    }
    id = "root";
    root = null;
    parent = null;
    db = {};
    data = {};
    children = [];
    create(id2, data) {
      if (!this.root)
        this.root = this;
      const branch = new _Branch();
      branch.root = this.root;
      branch.parent = this;
      branch.id = id2;
      branch.data = data;
      this.root.db[id2] = branch;
      this.children.push(branch);
      return branch;
    }
  };

  // src/application/execute/Basic.js
  var Standard = class {
    static {
      __name(this, "Standard");
    }
    application;
    autojoin = true;
    separator = ". ";
    constructor(application2) {
      this.application = application2;
    }
    async resolve(connectable, session) {
      const response = {};
      for (const localPort of connectable.Input) {
        const connectionToProperty = this.application.Connections.filter((remoteConnector) => remoteConnector.targetNode == connectable.id).filter((remoteConnector) => remoteConnector.targetPort == localPort.id).filter((remoteConnector) => remoteConnector.enabled);
        for (const connection of connectionToProperty) {
          const parentNode = this.application.Connectables.get(connection.sourceNode);
          const connectedPort = parentNode.Output.get(connection.sourcePort);
          if (!parentNode)
            throw new Error("Unable to locate parent node, could be an undeleted link in memory/data file");
          if (!connectedPort)
            throw new Error(`Unable to locate connected port "${connection.sourcePort}" in ${connection.sourceNode}`);
          session.depth++;
          session.location = session.location.create([connection.sourceNode, connection.sourcePort].join("::"), {});
          let result;
          result = await this.run(connection.sourceNode, connection.sourcePort, session);
          if (!response[localPort.id])
            response[localPort.id] = [];
          response[localPort.id].push(result);
          session.location = session.location.parent;
          session.depth--;
        }
        if (response[localPort.id] && this.autojoin) {
          response[localPort.id] = response[localPort.id].join(this.separator);
        }
      }
      return response;
    }
    async run(nodeId, portId, session = { initialized: false, tree: null, location: null, depth: 0, start: 0, visited: /* @__PURE__ */ new Set() }) {
      if (!session.initialized) {
        session.tree = new Branch();
        session.tree.id = [nodeId, portId].join("::");
        session.location = session.tree;
        session.initialized = true;
        console.log(">> EXECUTE <<");
      }
      if (session.visited.has([nodeId, portId].join("::"))) {
        throw new Error("Infinite Loop");
      }
      session.visited.add([nodeId, portId].join("::"));
      console.log("  ".repeat(session.depth) + `Executing: ${nodeId}/${portId}`);
      const connectable = this.application.Connectables.get(nodeId);
      const outputPort = connectable.Output.find((item) => item.id == portId);
      if (!outputPort)
        throw new Error(`Port id ${portId} was not found on node of type ${connectable.kind}`);
      const factoryValues = connectable.node;
      const editedInNodeValues = (0, import_pick.default)(connectable, Object.keys(factoryValues));
      const resolvedValues = { ...await this.resolve(connectable, session) };
      const newContext = { session, ...factoryValues, ...editedInNodeValues, ...resolvedValues };
      let response;
      response = await connectable.node[portId].bind(newContext)();
      return response;
    }
  };

  // src/application/Application.js
  var Application = class {
    static {
      __name(this, "Application");
    }
    constructor() {
      this.Setup = new Setup({
        title: "Signalcraft Visual Programming Language System",
        theme: "nostromo"
      }, this);
      this.Keyboard = {
        isDeleting: (e) => e.code == "Delete",
        isSelecting: (e) => e.ctrlKey,
        doRun: (e) => e.key == "Enter",
        doDisable: (e) => e.key == ".",
        moveUp: (e) => e.key == "ArrowUp",
        moveDown: (e) => e.key == "ArrowDown",
        moveLeft: (e) => e.key == "ArrowLeft",
        moveRight: (e) => e.key == "ArrowRight"
      };
      this.Api = new Api(this);
      this.Archetypes = new Archetypes(this);
      this.Connectables = new Connectables(this);
      this.Connections = new Connections(this);
      this.Selection = new Selection(this);
      this.Views = new Views(this);
      this.Themes = new Views2(this);
      this.Execute = new Standard(this);
    }
    async start() {
      this.Api.start();
      this.Archetypes.start();
      this.Connectables.start();
      this.Connections.start();
      this.Setup.observe("title", (v) => document.querySelector("title").innerText = v);
    }
    async stop() {
      this.Views.stop();
      this.Archetypes.stop();
      this.Connectables.stop();
      this.Connections.stop();
    }
  };

  // src/craft.js
  var application = new Application();
  setup_default(application);
  application.start();
  usage_default(application.Api);
})();
/*! Bundled license information:

bootstrap/dist/js/bootstrap.bundle.min.js:
  (*!
    * Bootstrap v5.3.2 (https://getbootstrap.com/)
    * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
