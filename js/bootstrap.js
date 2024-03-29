/* Source Themes Academic v4.8.0 | https://sourcethemes.com/academic/ */

;/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? b(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], b) : b((a = a || self).bootstrap = {}, a.jQuery, a.Popper)
}(this, function(i, a, q) {
    "use strict";
    var aj, b, $, av, aH, da, aE, c_, cY, cX, y, K, an, aq, ar, cW, n, cV, cR, bg, cQ, cN, cM, aD, cK, aV, aC, J, B, L, e, aU, cI, aB, cH, ai, au, cG, cF, f, cE, s, cD, cy, cw, cv, ct, cr, cp, ax, cn, cm, cl, ck, cb, b$, aN, D, G, v, V, b_, aJ, bZ, aa, t, P, ac, aI, aL, bY, bV, bf, M, F, _, o, aG, bU, bR, h, al, l, bQ, bO, bN, aP, bH, ak, bF, aF, bE, bD, bx, bw, bv, bq, bp, bo, bn, bj, p, H, Z, g, bh, aK, bi, c, bk, bl, bm, ba, C, ao, aZ, br, bs, bt, bu, aY, aX, ab, by, bz, bA, bB, u, am, k, bG, aQ, bI, bJ, bK, bL, bM, R, aw, bP, W, S, bS, bT, I, aA, bW, bX, r, A, ap, j, ca, aO, cc, cd, ce, cf, cg, ch, ci, cj, ah, w, af, ae, co, aM, cq, ay, cs, x, cu, aR, az, cx, aS, cz, cA, cB, cC, aT, Q, ag, T, df, O, cJ, N, cL, aW, a_, cO, cP, a$, bb, cS, cT, cU, Y, E, ad, X, cZ, z, c$, bc, U, bd, dd, be, db, at;
    function de(d, c) {
        for (var b = 0, a; b < c.length; b++)
            a = c[b],
            a.enumerable = a.enumerable || !1,
            a.configurable = !0,
            "value"in a && (a.writable = !0),
            Object.defineProperty(d, a.key, a)
    }
    function m(a, b, c) {
        return b && de(a.prototype, b),
        c && de(a, c),
        a
    }
    function dc(a, d) {
        var b = Object.keys(a), c;
        return Object.getOwnPropertySymbols && (c = Object.getOwnPropertySymbols(a),
        d && (c = c.filter(function(b) {
            return Object.getOwnPropertyDescriptor(a, b).enumerable
        })),
        b.push.apply(b, c)),
        b
    }
    function d(c) {
        for (var a = 1, b; a < arguments.length; a++)
            b = null != arguments[a] ? arguments[a] : {},
            a % 2 ? dc(Object(b), !0).forEach(function(f) {
                var a, d, e;
                a = c,
                e = b[d = f],
                d in a ? Object.defineProperty(a, d, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[d] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(b)) : dc(Object(b)).forEach(function(a) {
                Object.defineProperty(c, a, Object.getOwnPropertyDescriptor(b, a))
            });
        return c
    }
    a = a && a.hasOwnProperty("default") ? a.default : a,
    q = q && q.hasOwnProperty("default") ? q.default : q,
    aj = "transitionend";
    function dg(d) {
        var e = this
          , c = !1;
        return a(this).one(b.TRANSITION_END, function() {
            c = !0
        }),
        setTimeout(function() {
            c || b.triggerTransitionEnd(e)
        }, d),
        this
    }
    b = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(a) {
            for (; a += ~~(1e6 * Math.random()),
            document.getElementById(a); )
                ;
            return a
        },
        getSelectorFromElement: function(c) {
            var a = c.getAttribute("data-target"), b;
            (!a || "#" === a) && (b = c.getAttribute("href"),
            a = b && "#" !== b ? b.trim() : "");
            try {
                return document.querySelector(a) ? a : null
            } catch (a) {
                return null
            }
        },
        getTransitionDurationFromElement: function(d) {
            if (!d)
                return 0;
            var b = a(d).css("transition-duration")
              , c = a(d).css("transition-delay")
              , e = parseFloat(b)
              , f = parseFloat(c);
            return e || f ? (b = b.split(",")[0],
            c = c.split(",")[0],
            1e3 * (parseFloat(b) + parseFloat(c))) : 0
        },
        reflow: function(a) {
            return a.offsetHeight
        },
        triggerTransitionEnd: function(b) {
            a(b).trigger(aj)
        },
        supportsTransitionEnd: function() {
            return Boolean(aj)
        },
        isElement: function(a) {
            return (a[0] || a).nodeType
        },
        typeCheckConfig: function(h, i, f) {
            var a, g, c, d, e;
            for (a in f)
                if (Object.prototype.hasOwnProperty.call(f, a))
                    if (g = f[a],
                    c = i[a],
                    d = c && b.isElement(c) ? "element" : (e = c,
                    {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()),
                    !new RegExp(g).test(d))
                        throw new Error(h.toUpperCase() + ': Option "' + a + '" provided type "' + d + '" but expected type "' + g + '".')
        },
        findShadowRoot: function(a) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof a.getRootNode)
                return a instanceof ShadowRoot ? a : a.parentNode ? b.findShadowRoot(a.parentNode) : null;
            var c = a.getRootNode();
            return c instanceof ShadowRoot ? c : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof a)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var b = a.fn.jquery.split(" ")[0].split(".");
            if (b[0] < 2 && b[1] < 9 || 1 === b[0] && 9 === b[1] && b[2] < 1 || 4 <= b[0])
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    },
    b.jQueryDetection(),
    a.fn.emulateTransitionEnd = dg,
    a.event.special[b.TRANSITION_END] = {
        bindType: aj,
        delegateType: aj,
        handle: function(b) {
            if (a(b.target).is(this))
                return b.handleObj.handler.apply(this, arguments)
        }
    },
    $ = "alert",
    av = "bs.alert",
    aH = "." + av,
    da = a.fn[$],
    aE = {
        CLOSE: "close" + aH,
        CLOSED: "closed" + aH,
        CLICK_DATA_API: "click" + aH + ".data-api"
    },
    c_ = "alert",
    cY = "fade",
    cX = "show",
    y = function() {
        function c(a) {
            this._element = a
        }
        var d = c.prototype;
        return d.close = function(b) {
            var a = this._element;
            b && (a = this._getRootElement(b)),
            this._triggerCloseEvent(a).isDefaultPrevented() || this._removeElement(a)
        }
        ,
        d.dispose = function() {
            a.removeData(this._element, av),
            this._element = null
        }
        ,
        d._getRootElement = function(d) {
            var e = b.getSelectorFromElement(d)
              , c = !1;
            return e && (c = document.querySelector(e)),
            c = c || a(d).closest("." + c_)[0]
        }
        ,
        d._triggerCloseEvent = function(c) {
            var b = a.Event(aE.CLOSE);
            return a(c).trigger(b),
            b
        }
        ,
        d._removeElement = function(c) {
            var d = this, e;
            a(c).removeClass(cX),
            a(c).hasClass(cY) ? (e = b.getTransitionDurationFromElement(c),
            a(c).one(b.TRANSITION_END, function(a) {
                return d._destroyElement(c, a)
            }).emulateTransitionEnd(e)) : this._destroyElement(c)
        }
        ,
        d._destroyElement = function(b) {
            a(b).detach().trigger(aE.CLOSED).remove()
        }
        ,
        c._jQueryInterface = function(b) {
            return this.each(function() {
                var e = a(this)
                  , d = e.data(av);
                d || (d = new c(this),
                e.data(av, d)),
                "close" === b && d[b](this)
            })
        }
        ,
        c._handleDismiss = function(a) {
            return function(b) {
                b && b.preventDefault(),
                a.close(this)
            }
        }
        ,
        m(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        c
    }(),
    a(document).on(aE.CLICK_DATA_API, '[data-dismiss="alert"]', y._handleDismiss(new y)),
    a.fn[$] = y._jQueryInterface,
    a.fn[$].Constructor = y,
    a.fn[$].noConflict = function() {
        return a.fn[$] = da,
        y._jQueryInterface
    }
    ,
    K = "button",
    an = "bs.button",
    aq = "." + an,
    ar = ".data-api",
    cW = a.fn[K],
    n = "active",
    cV = "btn",
    cR = "focus",
    bg = '[data-toggle^="button"]',
    cQ = '[data-toggle="buttons"]',
    cN = '[data-toggle="button"]',
    cM = '[data-toggle="buttons"] .btn',
    aD = 'input:not([type="hidden"])',
    cK = ".active",
    aV = ".btn",
    aC = {
        CLICK_DATA_API: "click" + aq + ar,
        FOCUS_BLUR_DATA_API: "focus" + aq + ar + " blur" + aq + ar,
        LOAD_DATA_API: "load" + aq + ar
    },
    J = function() {
        function b(a) {
            this._element = a
        }
        var c = b.prototype;
        return c.toggle = function() {
            var c = !0, d = !0, e = a(this._element).closest(cQ)[0], b, f;
            e && (b = this._element.querySelector(aD),
            b && ("radio" === b.type ? b.checked && this._element.classList.contains(n) ? c = !1 : (f = e.querySelector(cK),
            f && a(f).removeClass(n)) : "checkbox" === b.type ? "LABEL" === this._element.tagName && b.checked === this._element.classList.contains(n) && (c = !1) : c = !1,
            c && (b.checked = !this._element.classList.contains(n),
            a(b).trigger("change")),
            b.focus(),
            d = !1)),
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (d && this._element.setAttribute("aria-pressed", !this._element.classList.contains(n)),
            c && a(this._element).toggleClass(n))
        }
        ,
        c.dispose = function() {
            a.removeData(this._element, an),
            this._element = null
        }
        ,
        b._jQueryInterface = function(c) {
            return this.each(function() {
                var d = a(this).data(an);
                d || (d = new b(this),
                a(this).data(an, d)),
                "toggle" === c && d[c]()
            })
        }
        ,
        m(b, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        b
    }(),
    a(document).on(aC.CLICK_DATA_API, bg, function(c) {
        var b = c.target, d;
        if (a(b).hasClass(cV) || (b = a(b).closest(aV)[0]),
        !b || b.hasAttribute("disabled") || b.classList.contains("disabled"))
            c.preventDefault();
        else {
            if (d = b.querySelector(aD),
            d && (d.hasAttribute("disabled") || d.classList.contains("disabled")))
                return void c.preventDefault();
            J._jQueryInterface.call(a(b), "toggle")
        }
    }).on(aC.FOCUS_BLUR_DATA_API, bg, function(b) {
        var c = a(b.target).closest(aV)[0];
        a(c).toggleClass(cR, /^focus(in)?$/.test(b.type))
    }),
    a(window).on(aC.LOAD_DATA_API, function() {
        for (var a = [].slice.call(document.querySelectorAll(cM)), b = 0, g = a.length, c, f, d, h, e; b < g; b++)
            c = a[b],
            f = c.querySelector(aD),
            f.checked || f.hasAttribute("checked") ? c.classList.add(n) : c.classList.remove(n);
        for (d = 0,
        h = (a = [].slice.call(document.querySelectorAll(cN))).length; d < h; d++)
            e = a[d],
            "true" === e.getAttribute("aria-pressed") ? e.classList.add(n) : e.classList.remove(n)
    }),
    a.fn[K] = J._jQueryInterface,
    a.fn[K].Constructor = J,
    a.fn[K].noConflict = function() {
        return a.fn[K] = cW,
        J._jQueryInterface
    }
    ,
    B = "carousel",
    L = "bs.carousel",
    e = "." + L,
    aU = ".data-api",
    cI = a.fn[B],
    aB = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    },
    cH = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    },
    ai = "next",
    au = "prev",
    cG = "left",
    cF = "right",
    f = {
        SLIDE: "slide" + e,
        SLID: "slid" + e,
        KEYDOWN: "keydown" + e,
        MOUSEENTER: "mouseenter" + e,
        MOUSELEAVE: "mouseleave" + e,
        TOUCHSTART: "touchstart" + e,
        TOUCHMOVE: "touchmove" + e,
        TOUCHEND: "touchend" + e,
        POINTERDOWN: "pointerdown" + e,
        POINTERUP: "pointerup" + e,
        DRAG_START: "dragstart" + e,
        LOAD_DATA_API: "load" + e + aU,
        CLICK_DATA_API: "click" + e + aU
    },
    cE = "carousel",
    s = "active",
    cD = "slide",
    cy = "carousel-item-right",
    cw = "carousel-item-left",
    cv = "carousel-item-next",
    ct = "carousel-item-prev",
    cr = "pointer-event",
    cp = ".active",
    ax = ".active.carousel-item",
    cn = ".carousel-item",
    cm = ".carousel-item img",
    cl = ".carousel-item-next, .carousel-item-prev",
    ck = ".carousel-indicators",
    cb = "[data-slide], [data-slide-to]",
    b$ = '[data-ride="carousel"]',
    aN = {
        TOUCH: "touch",
        PEN: "pen"
    },
    D = function() {
        function g(a, b) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(b),
            this._element = a,
            this._indicatorsElement = this._element.querySelector(ck),
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var c = g.prototype;
        return c.next = function() {
            this._isSliding || this._slide(ai)
        }
        ,
        c.nextWhenVisible = function() {
            !document.hidden && a(this._element).is(":visible") && "hidden" !== a(this._element).css("visibility") && this.next()
        }
        ,
        c.prev = function() {
            this._isSliding || this._slide(au)
        }
        ,
        c.pause = function(a) {
            a || (this._isPaused = !0),
            this._element.querySelector(cl) && (b.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        c.cycle = function(a) {
            a || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        c.to = function(b) {
            var d = this, c, e;
            if (this._activeElement = this._element.querySelector(ax),
            c = this._getItemIndex(this._activeElement),
            !(b > this._items.length - 1 || b < 0))
                if (this._isSliding)
                    a(this._element).one(f.SLID, function() {
                        return d.to(b)
                    });
                else {
                    if (c === b)
                        return this.pause(),
                        void this.cycle();
                    e = c < b ? ai : au,
                    this._slide(e, this._items[b])
                }
        }
        ,
        c.dispose = function() {
            a(this._element).off(e),
            a.removeData(this._element, L),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        c._getConfig = function(a) {
            return a = d({}, aB, {}, a),
            b.typeCheckConfig(B, a, cH),
            a
        }
        ,
        c._handleSwipe = function() {
            var a = Math.abs(this.touchDeltaX), b;
            a <= 40 || (b = a / this.touchDeltaX,
            (this.touchDeltaX = 0) < b && this.prev(),
            b < 0 && this.next())
        }
        ,
        c._addEventListeners = function() {
            var b = this;
            this._config.keyboard && a(this._element).on(f.KEYDOWN, function(a) {
                return b._keydown(a)
            }),
            "hover" === this._config.pause && a(this._element).on(f.MOUSEENTER, function(a) {
                return b.pause(a)
            }).on(f.MOUSELEAVE, function(a) {
                return b.cycle(a)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        c._addTouchEventListeners = function() {
            var b = this, c, d;
            this._touchSupported && (c = function(a) {
                b._pointerEvent && aN[a.originalEvent.pointerType.toUpperCase()] ? b.touchStartX = a.originalEvent.clientX : b._pointerEvent || (b.touchStartX = a.originalEvent.touches[0].clientX)
            }
            ,
            d = function(a) {
                b._pointerEvent && aN[a.originalEvent.pointerType.toUpperCase()] && (b.touchDeltaX = a.originalEvent.clientX - b.touchStartX),
                b._handleSwipe(),
                "hover" === b._config.pause && (b.pause(),
                b.touchTimeout && clearTimeout(b.touchTimeout),
                b.touchTimeout = setTimeout(function(a) {
                    return b.cycle(a)
                }, 500 + b._config.interval))
            }
            ,
            a(this._element.querySelectorAll(cm)).on(f.DRAG_START, function(a) {
                return a.preventDefault()
            }),
            this._pointerEvent ? (a(this._element).on(f.POINTERDOWN, function(a) {
                return c(a)
            }),
            a(this._element).on(f.POINTERUP, function(a) {
                return d(a)
            }),
            this._element.classList.add(cr)) : (a(this._element).on(f.TOUCHSTART, function(a) {
                return c(a)
            }),
            a(this._element).on(f.TOUCHMOVE, function(a) {
                return function(a) {
                    a.originalEvent.touches && 1 < a.originalEvent.touches.length ? b.touchDeltaX = 0 : b.touchDeltaX = a.originalEvent.touches[0].clientX - b.touchStartX
                }(a)
            }),
            a(this._element).on(f.TOUCHEND, function(a) {
                return d(a)
            })))
        }
        ,
        c._keydown = function(a) {
            if (!/input|textarea/i.test(a.target.tagName))
                switch (a.which) {
                case 37:
                    a.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    a.preventDefault(),
                    this.next()
                }
        }
        ,
        c._getItemIndex = function(a) {
            return this._items = a && a.parentNode ? [].slice.call(a.parentNode.querySelectorAll(cn)) : [],
            this._items.indexOf(a)
        }
        ,
        c._getItemByDirection = function(a, c) {
            var e = a === ai, f = a === au, b = this._getItemIndex(c), g = this._items.length - 1, d;
            return (f && 0 === b || e && b === g) && !this._config.wrap ? c : (d = (b + (a === au ? -1 : 1)) % this._items.length,
            -1 == d ? this._items[this._items.length - 1] : this._items[d])
        }
        ,
        c._triggerSlideEvent = function(b, d) {
            var e = this._getItemIndex(b)
              , g = this._getItemIndex(this._element.querySelector(ax))
              , c = a.Event(f.SLIDE, {
                relatedTarget: b,
                direction: d,
                from: g,
                to: e
            });
            return a(this._element).trigger(c),
            c
        }
        ,
        c._setActiveIndicatorElement = function(d) {
            var c, b;
            this._indicatorsElement && (c = [].slice.call(this._indicatorsElement.querySelectorAll(cp)),
            a(c).removeClass(s),
            b = this._indicatorsElement.children[this._getItemIndex(d)],
            b && a(b).addClass(s))
        }
        ,
        c._slide = function(l, p) {
            var e, g, h, j = this, d = this._element.querySelector(ax), n = this._getItemIndex(d), c = p || d && this._getItemByDirection(l, d), o = this._getItemIndex(c), k = Boolean(this._interval), m, i, q;
            h = l === ai ? (e = cw,
            g = cv,
            cG) : (e = cy,
            g = ct,
            cF),
            c && a(c).hasClass(s) ? this._isSliding = !1 : !this._triggerSlideEvent(c, h).isDefaultPrevented() && d && c && (this._isSliding = !0,
            k && this.pause(),
            this._setActiveIndicatorElement(c),
            m = a.Event(f.SLID, {
                relatedTarget: c,
                direction: h,
                from: n,
                to: o
            }),
            a(this._element).hasClass(cD) ? (a(c).addClass(g),
            b.reflow(c),
            a(d).addClass(e),
            a(c).addClass(e),
            i = parseInt(c.getAttribute("data-interval"), 10),
            i ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = i) : this._config.interval = this._config.defaultInterval || this._config.interval,
            q = b.getTransitionDurationFromElement(d),
            a(d).one(b.TRANSITION_END, function() {
                a(c).removeClass(e + " " + g).addClass(s),
                a(d).removeClass(s + " " + g + " " + e),
                j._isSliding = !1,
                setTimeout(function() {
                    return a(j._element).trigger(m)
                }, 0)
            }).emulateTransitionEnd(q)) : (a(d).removeClass(s),
            a(c).addClass(s),
            this._isSliding = !1,
            a(this._element).trigger(m)),
            k && this.cycle())
        }
        ,
        g._jQueryInterface = function(b) {
            return this.each(function() {
                var c = a(this).data(L), e = d({}, aB, {}, a(this).data()), f;
                if ("object" == typeof b && (e = d({}, e, {}, b)),
                f = "string" == typeof b ? b : e.slide,
                c || (c = new g(this,e),
                a(this).data(L, c)),
                "number" == typeof b)
                    c.to(b);
                else if ("string" == typeof f) {
                    if ("undefined" == typeof c[f])
                        throw new TypeError('No method named "' + f + '"');
                    c[f]()
                } else
                    e.interval && e.ride && (c.pause(),
                    c.cycle())
            })
        }
        ,
        g._dataApiClickHandler = function(i) {
            var f = b.getSelectorFromElement(this), c, h, e;
            f && (c = a(f)[0],
            c && a(c).hasClass(cE) && (h = d({}, a(c).data(), {}, a(this).data()),
            e = this.getAttribute("data-slide-to"),
            e && (h.interval = !1),
            g._jQueryInterface.call(a(c), h),
            e && a(c).data(L).to(e),
            i.preventDefault()))
        }
        ,
        m(g, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return aB
            }
        }]),
        g
    }(),
    a(document).on(f.CLICK_DATA_API, cb, D._dataApiClickHandler),
    a(window).on(f.LOAD_DATA_API, function() {
        for (var c = [].slice.call(document.querySelectorAll(b$)), b = 0, e = c.length, d; b < e; b++)
            d = a(c[b]),
            D._jQueryInterface.call(d, d.data())
    }),
    a.fn[B] = D._jQueryInterface,
    a.fn[B].Constructor = D,
    a.fn[B].noConflict = function() {
        return a.fn[B] = cI,
        D._jQueryInterface
    }
    ,
    G = "collapse",
    v = "bs.collapse",
    V = "." + v,
    b_ = a.fn[G],
    aJ = {
        toggle: !0,
        parent: ""
    },
    bZ = {
        toggle: "boolean",
        parent: "(string|element)"
    },
    aa = {
        SHOW: "show" + V,
        SHOWN: "shown" + V,
        HIDE: "hide" + V,
        HIDDEN: "hidden" + V,
        CLICK_DATA_API: "click" + V + ".data-api"
    },
    t = "show",
    P = "collapse",
    ac = "collapsing",
    aI = "collapsed",
    aL = "width",
    bY = "height",
    bV = ".show, .collapsing",
    bf = '[data-toggle="collapse"]',
    M = function() {
        function e(a, i) {
            var e, c, h, f, d, g;
            this._isTransitioning = !1,
            this._element = a,
            this._config = this._getConfig(i),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + a.id + '"],[data-toggle="collapse"][data-target="#' + a.id + '"]'));
            for (e = [].slice.call(document.querySelectorAll(bf)),
            c = 0,
            h = e.length; c < h; c++)
                f = e[c],
                d = b.getSelectorFromElement(f),
                g = [].slice.call(document.querySelectorAll(d)).filter(function(b) {
                    return b === a
                }),
                null !== d && 0 < g.length && (this._selector = d,
                this._triggerArray.push(f));
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var c = e.prototype;
        return c.toggle = function() {
            a(this._element).hasClass(t) ? this.hide() : this.show()
        }
        ,
        c.show = function() {
            var c, g, d = this, h, f, i, j;
            !this._isTransitioning && !a(this._element).hasClass(t) && (this._parent && 0 === (c = [].slice.call(this._parent.querySelectorAll(bV)).filter(function(a) {
                return "string" == typeof d._config.parent ? a.getAttribute("data-parent") === d._config.parent : a.classList.contains(P)
            })).length && (c = null),
            !(c && (g = a(c).not(this._selector).data(v)) && g._isTransitioning)) && (h = a.Event(aa.SHOW),
            (a(this._element).trigger(h),
            !h.isDefaultPrevented()) && (c && (e._jQueryInterface.call(a(c).not(this._selector), "hide"),
            g || a(c).data(v, null)),
            f = this._getDimension(),
            a(this._element).removeClass(P).addClass(ac),
            this._element.style[f] = 0,
            this._triggerArray.length && a(this._triggerArray).removeClass(aI).attr("aria-expanded", !0),
            this.setTransitioning(!0),
            i = "scroll" + (f[0].toUpperCase() + f.slice(1)),
            j = b.getTransitionDurationFromElement(this._element),
            a(this._element).one(b.TRANSITION_END, function() {
                a(d._element).removeClass(ac).addClass(P).addClass(t),
                d._element.style[f] = "",
                d.setTransitioning(!1),
                a(d._element).trigger(aa.SHOWN)
            }).emulateTransitionEnd(j),
            this._element.style[f] = this._element[i] + "px"))
        }
        ,
        c.hide = function() {
            var e = this, f, c, g, d, h, i, j;
            if (!this._isTransitioning && a(this._element).hasClass(t))
                if (f = a.Event(aa.HIDE),
                a(this._element).trigger(f),
                !f.isDefaultPrevented()) {
                    if (c = this._getDimension(),
                    this._element.style[c] = this._element.getBoundingClientRect()[c] + "px",
                    b.reflow(this._element),
                    a(this._element).addClass(ac).removeClass(P).removeClass(t),
                    g = this._triggerArray.length,
                    0 < g)
                        for (d = 0; d < g; d++)
                            h = this._triggerArray[d],
                            i = b.getSelectorFromElement(h),
                            null !== i && (a([].slice.call(document.querySelectorAll(i))).hasClass(t) || a(h).addClass(aI).attr("aria-expanded", !1));
                    this.setTransitioning(!0),
                    this._element.style[c] = "",
                    j = b.getTransitionDurationFromElement(this._element),
                    a(this._element).one(b.TRANSITION_END, function() {
                        e.setTransitioning(!1),
                        a(e._element).removeClass(ac).addClass(P).trigger(aa.HIDDEN)
                    }).emulateTransitionEnd(j)
                }
        }
        ,
        c.setTransitioning = function(a) {
            this._isTransitioning = a
        }
        ,
        c.dispose = function() {
            a.removeData(this._element, v),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        c._getConfig = function(a) {
            return (a = d({}, aJ, {}, a)).toggle = Boolean(a.toggle),
            b.typeCheckConfig(G, a, bZ),
            a
        }
        ,
        c._getDimension = function() {
            return a(this._element).hasClass(aL) ? aL : bY
        }
        ,
        c._getParent = function() {
            var c, d = this, f, g;
            return b.isElement(this._config.parent) ? (c = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (c = this._config.parent[0])) : c = document.querySelector(this._config.parent),
            f = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            g = [].slice.call(c.querySelectorAll(f)),
            a(g).each(function(b, a) {
                d._addAriaAndCollapsedClass(e._getTargetFromElement(a), [a])
            }),
            c
        }
        ,
        c._addAriaAndCollapsedClass = function(d, b) {
            var c = a(d).hasClass(t);
            b.length && a(b).toggleClass(aI, !c).attr("aria-expanded", c)
        }
        ,
        e._getTargetFromElement = function(c) {
            var a = b.getSelectorFromElement(c);
            return a ? document.querySelector(a) : null
        }
        ,
        e._jQueryInterface = function(b) {
            return this.each(function() {
                var f = a(this)
                  , c = f.data(v)
                  , g = d({}, aJ, {}, f.data(), {}, "object" == typeof b && b ? b : {});
                if (!c && g.toggle && /show|hide/.test(b) && (g.toggle = !1),
                c || (c = new e(this,g),
                f.data(v, c)),
                "string" == typeof b) {
                    if ("undefined" == typeof c[b])
                        throw new TypeError('No method named "' + b + '"');
                    c[b]()
                }
            })
        }
        ,
        m(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return aJ
            }
        }]),
        e
    }(),
    a(document).on(aa.CLICK_DATA_API, bf, function(c) {
        "A" === c.currentTarget.tagName && c.preventDefault();
        var d = a(this)
          , e = b.getSelectorFromElement(this)
          , f = [].slice.call(document.querySelectorAll(e));
        a(f).each(function() {
            var b = a(this)
              , c = b.data(v) ? "toggle" : d.data();
            M._jQueryInterface.call(b, c)
        })
    }),
    a.fn[G] = M._jQueryInterface,
    a.fn[G].Constructor = M,
    a.fn[G].noConflict = function() {
        return a.fn[G] = b_,
        M._jQueryInterface
    }
    ,
    F = "dropdown",
    _ = "bs.dropdown",
    o = "." + _,
    aG = ".data-api",
    bU = a.fn[F],
    bR = new RegExp("38|40|27"),
    h = {
        HIDE: "hide" + o,
        HIDDEN: "hidden" + o,
        SHOW: "show" + o,
        SHOWN: "shown" + o,
        CLICK: "click" + o,
        CLICK_DATA_API: "click" + o + aG,
        KEYDOWN_DATA_API: "keydown" + o + aG,
        KEYUP_DATA_API: "keyup" + o + aG
    },
    al = "disabled",
    l = "show",
    bQ = "dropup",
    bO = "dropright",
    bN = "dropleft",
    aP = "dropdown-menu-right",
    bH = "position-static",
    ak = '[data-toggle="dropdown"]',
    bF = ".dropdown form",
    aF = ".dropdown-menu",
    bE = ".navbar-nav",
    bD = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    bx = "top-start",
    bw = "top-end",
    bv = "bottom-start",
    bq = "bottom-end",
    bp = "right-start",
    bo = "left-start",
    bn = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    },
    bj = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    },
    p = function() {
        function c(a, b) {
            this._element = a,
            this._popper = null,
            this._config = this._getConfig(b),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var e = c.prototype;
        return e.toggle = function() {
            if (!this._element.disabled && !a(this._element).hasClass(al)) {
                var b = a(this._menu).hasClass(l);
                c._clearMenus(),
                b || this.show(!0)
            }
        }
        ,
        e.show = function(f) {
            var g, i, d, e;
            if (void 0 === f && (f = !1),
            !(this._element.disabled || a(this._element).hasClass(al) || a(this._menu).hasClass(l)))
                if (g = {
                    relatedTarget: this._element
                },
                i = a.Event(h.SHOW, g),
                d = c._getParentFromElement(this._element),
                a(d).trigger(i),
                !i.isDefaultPrevented()) {
                    if (!this._inNavbar && f) {
                        if ("undefined" == typeof q)
                            throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        e = this._element,
                        "parent" === this._config.reference ? e = d : b.isElement(this._config.reference) && (e = this._config.reference,
                        "undefined" != typeof this._config.reference.jquery && (e = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && a(d).addClass(bH),
                        this._popper = new q(e,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === a(d).closest(bE).length && a(document.body).children().on("mouseover", null, a.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    a(this._menu).toggleClass(l),
                    a(d).toggleClass(l).trigger(a.Event(h.SHOWN, g))
                }
        }
        ,
        e.hide = function() {
            if (!this._element.disabled && !a(this._element).hasClass(al) && a(this._menu).hasClass(l)) {
                var b = {
                    relatedTarget: this._element
                }
                  , d = a.Event(h.HIDE, b)
                  , e = c._getParentFromElement(this._element);
                a(e).trigger(d),
                d.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                a(this._menu).toggleClass(l),
                a(e).toggleClass(l).trigger(a.Event(h.HIDDEN, b)))
            }
        }
        ,
        e.dispose = function() {
            a.removeData(this._element, _),
            a(this._element).off(o),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        e.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e._addEventListeners = function() {
            var b = this;
            a(this._element).on(h.CLICK, function(a) {
                a.preventDefault(),
                a.stopPropagation(),
                b.toggle()
            })
        }
        ,
        e._getConfig = function(c) {
            return c = d({}, this.constructor.Default, {}, a(this._element).data(), {}, c),
            b.typeCheckConfig(F, c, this.constructor.DefaultType),
            c
        }
        ,
        e._getMenuElement = function() {
            if (!this._menu) {
                var a = c._getParentFromElement(this._element);
                a && (this._menu = a.querySelector(aF))
            }
            return this._menu
        }
        ,
        e._getPlacement = function() {
            var c = a(this._element.parentNode)
              , b = bv;
            return c.hasClass(bQ) ? (b = bx,
            a(this._menu).hasClass(aP) && (b = bw)) : c.hasClass(bO) ? b = bp : c.hasClass(bN) ? b = bo : a(this._menu).hasClass(aP) && (b = bq),
            b
        }
        ,
        e._detectNavbar = function() {
            return 0 < a(this._element).closest(".navbar").length
        }
        ,
        e._getOffset = function() {
            var b = this
              , a = {};
            return "function" == typeof this._config.offset ? a.fn = function(a) {
                return a.offsets = d({}, a.offsets, {}, b._config.offset(a.offsets, b._element) || {}),
                a
            }
            : a.offset = this._config.offset,
            a
        }
        ,
        e._getPopperConfig = function() {
            var a = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (a.modifiers.applyStyle = {
                enabled: !1
            }),
            d({}, a, {}, this._config.popperConfig)
        }
        ,
        c._jQueryInterface = function(b) {
            return this.each(function() {
                var d = a(this).data(_);
                if (d || (d = new c(this,"object" == typeof b ? b : null),
                a(this).data(_, d)),
                "string" == typeof b) {
                    if ("undefined" == typeof d[b])
                        throw new TypeError('No method named "' + b + '"');
                    d[b]()
                }
            })
        }
        ,
        c._clearMenus = function(b) {
            var e, d, k, f, g, i, m, j;
            if (!b || 3 !== b.which && ("keyup" !== b.type || 9 === b.which))
                for (e = [].slice.call(document.querySelectorAll(ak)),
                d = 0,
                k = e.length; d < k; d++)
                    f = c._getParentFromElement(e[d]),
                    g = a(e[d]).data(_),
                    i = {
                        relatedTarget: e[d]
                    },
                    (b && "click" === b.type && (i.clickEvent = b),
                    g) && (m = g._menu,
                    a(f).hasClass(l) && !(b && ("click" === b.type && /input|textarea/i.test(b.target.tagName) || "keyup" === b.type && 9 === b.which) && a.contains(f, b.target)) && (j = a.Event(h.HIDE, i),
                    a(f).trigger(j),
                    j.isDefaultPrevented() || ("ontouchstart"in document.documentElement && a(document.body).children().off("mouseover", null, a.noop),
                    e[d].setAttribute("aria-expanded", "false"),
                    g._popper && g._popper.destroy(),
                    a(m).removeClass(l),
                    a(f).removeClass(l).trigger(a.Event(h.HIDDEN, i)))))
        }
        ,
        c._getParentFromElement = function(a) {
            var c, d = b.getSelectorFromElement(a);
            return d && (c = document.querySelector(d)),
            c || a.parentNode
        }
        ,
        c._dataApiKeydownHandler = function(b) {
            var f, g, e, d, h;
            (/input|textarea/i.test(b.target.tagName) ? !(32 === b.which || 27 !== b.which && (40 !== b.which && 38 !== b.which || a(b.target).closest(aF).length)) : bR.test(b.which)) && (b.preventDefault(),
            b.stopPropagation(),
            !this.disabled && !a(this).hasClass(al)) && (f = c._getParentFromElement(this),
            g = a(f).hasClass(l),
            (g || 27 !== b.which) && (g && (!g || 27 !== b.which && 32 !== b.which) ? (e = [].slice.call(f.querySelectorAll(bD)).filter(function(b) {
                return a(b).is(":visible")
            }),
            0 !== e.length && (d = e.indexOf(b.target),
            38 === b.which && 0 < d && d--,
            40 === b.which && d < e.length - 1 && d++,
            d < 0 && (d = 0),
            e[d].focus())) : (27 === b.which && (h = f.querySelector(ak),
            a(h).trigger("focus")),
            a(this).trigger("click"))))
        }
        ,
        m(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return bn
            }
        }, {
            key: "DefaultType",
            get: function() {
                return bj
            }
        }]),
        c
    }(),
    a(document).on(h.KEYDOWN_DATA_API, ak, p._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, aF, p._dataApiKeydownHandler).on(h.CLICK_DATA_API + " " + h.KEYUP_DATA_API, p._clearMenus).on(h.CLICK_DATA_API, ak, function(b) {
        b.preventDefault(),
        b.stopPropagation(),
        p._jQueryInterface.call(a(this), "toggle")
    }).on(h.CLICK_DATA_API, bF, function(a) {
        a.stopPropagation()
    }),
    a.fn[F] = p._jQueryInterface,
    a.fn[F].Constructor = p,
    a.fn[F].noConflict = function() {
        return a.fn[F] = bU,
        p._jQueryInterface
    }
    ,
    H = "modal",
    Z = "bs.modal",
    g = "." + Z,
    bh = a.fn[H],
    aK = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    },
    bi = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    },
    c = {
        HIDE: "hide" + g,
        HIDE_PREVENTED: "hidePrevented" + g,
        HIDDEN: "hidden" + g,
        SHOW: "show" + g,
        SHOWN: "shown" + g,
        FOCUSIN: "focusin" + g,
        RESIZE: "resize" + g,
        CLICK_DISMISS: "click.dismiss" + g,
        KEYDOWN_DISMISS: "keydown.dismiss" + g,
        MOUSEUP_DISMISS: "mouseup.dismiss" + g,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + g,
        CLICK_DATA_API: "click" + g + ".data-api"
    },
    bk = "modal-dialog-scrollable",
    bl = "modal-scrollbar-measure",
    bm = "modal-backdrop",
    ba = "modal-open",
    C = "fade",
    ao = "show",
    aZ = "modal-static",
    br = ".modal-dialog",
    bs = ".modal-body",
    bt = '[data-toggle="modal"]',
    bu = '[data-dismiss="modal"]',
    aY = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    aX = ".sticky-top",
    ab = function() {
        function f(a, b) {
            this._config = this._getConfig(b),
            this._element = a,
            this._dialog = a.querySelector(br),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var e = f.prototype;
        return e.toggle = function(a) {
            return this._isShown ? this.hide() : this.show(a)
        }
        ,
        e.show = function(d) {
            var b = this, e;
            !this._isShown && !this._isTransitioning && (a(this._element).hasClass(C) && (this._isTransitioning = !0),
            e = a.Event(c.SHOW, {
                relatedTarget: d
            }),
            a(this._element).trigger(e),
            this._isShown || e.isDefaultPrevented() || (this._isShown = !0,
            this._checkScrollbar(),
            this._setScrollbar(),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            a(this._element).on(c.CLICK_DISMISS, bu, function(a) {
                return b.hide(a)
            }),
            a(this._dialog).on(c.MOUSEDOWN_DISMISS, function() {
                a(b._element).one(c.MOUSEUP_DISMISS, function(c) {
                    a(c.target).is(b._element) && (b._ignoreBackdropClick = !0)
                })
            }),
            this._showBackdrop(function() {
                return b._showElement(d)
            })))
        }
        ,
        e.hide = function(d) {
            var g = this, e, f, h;
            d && d.preventDefault(),
            this._isShown && !this._isTransitioning && (e = a.Event(c.HIDE),
            (a(this._element).trigger(e),
            this._isShown && !e.isDefaultPrevented()) && (this._isShown = !1,
            f = a(this._element).hasClass(C),
            (f && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            a(document).off(c.FOCUSIN),
            a(this._element).removeClass(ao),
            a(this._element).off(c.CLICK_DISMISS),
            a(this._dialog).off(c.MOUSEDOWN_DISMISS),
            f) ? (h = b.getTransitionDurationFromElement(this._element),
            a(this._element).one(b.TRANSITION_END, function(a) {
                return g._hideModal(a)
            }).emulateTransitionEnd(h)) : this._hideModal()))
        }
        ,
        e.dispose = function() {
            [window, this._element, this._dialog].forEach(function(b) {
                return a(b).off(g)
            }),
            a(document).off(c.FOCUSIN),
            a.removeData(this._element, Z),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        e.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        e._getConfig = function(a) {
            return a = d({}, aK, {}, a),
            b.typeCheckConfig(H, a, bi),
            a
        }
        ,
        e._triggerBackdropTransition = function() {
            var e = this, d, f;
            if ("static" === this._config.backdrop) {
                if (d = a.Event(c.HIDE_PREVENTED),
                a(this._element).trigger(d),
                d.defaultPrevented)
                    return;
                this._element.classList.add(aZ),
                f = b.getTransitionDurationFromElement(this._element),
                a(this._element).one(b.TRANSITION_END, function() {
                    e._element.classList.remove(aZ)
                }).emulateTransitionEnd(f),
                this._element.focus()
            } else
                this.hide()
        }
        ,
        e._showElement = function(h) {
            var d = this, e = a(this._element).hasClass(C), f = this._dialog ? this._dialog.querySelector(bs) : null, i, j;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            a(this._dialog).hasClass(bk) && f ? f.scrollTop = 0 : this._element.scrollTop = 0,
            e && b.reflow(this._element),
            a(this._element).addClass(ao),
            this._config.focus && this._enforceFocus();
            function g() {
                d._config.focus && d._element.focus(),
                d._isTransitioning = !1,
                a(d._element).trigger(i)
            }
            i = a.Event(c.SHOWN, {
                relatedTarget: h
            }),
            e ? (j = b.getTransitionDurationFromElement(this._dialog),
            a(this._dialog).one(b.TRANSITION_END, g).emulateTransitionEnd(j)) : g()
        }
        ,
        e._enforceFocus = function() {
            var b = this;
            a(document).off(c.FOCUSIN).on(c.FOCUSIN, function(c) {
                document !== c.target && b._element !== c.target && 0 === a(b._element).has(c.target).length && b._element.focus()
            })
        }
        ,
        e._setEscapeEvent = function() {
            var b = this;
            this._isShown && this._config.keyboard ? a(this._element).on(c.KEYDOWN_DISMISS, function(a) {
                27 === a.which && b._triggerBackdropTransition()
            }) : this._isShown || a(this._element).off(c.KEYDOWN_DISMISS)
        }
        ,
        e._setResizeEvent = function() {
            var b = this;
            this._isShown ? a(window).on(c.RESIZE, function(a) {
                return b.handleUpdate(a)
            }) : a(window).off(c.RESIZE)
        }
        ,
        e._hideModal = function() {
            var b = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                a(document.body).removeClass(ba),
                b._resetAdjustments(),
                b._resetScrollbar(),
                a(b._element).trigger(c.HIDDEN)
            })
        }
        ,
        e._removeBackdrop = function() {
            this._backdrop && (a(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        e._showBackdrop = function(d) {
            var e = this, f = a(this._element).hasClass(C) ? C : "", h, g, i;
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = bm,
                f && this._backdrop.classList.add(f),
                a(this._backdrop).appendTo(document.body),
                a(this._element).on(c.CLICK_DISMISS, function(a) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : a.target === a.currentTarget && e._triggerBackdropTransition()
                }),
                f && b.reflow(this._backdrop),
                a(this._backdrop).addClass(ao),
                !d)
                    return;
                if (!f)
                    return void d();
                h = b.getTransitionDurationFromElement(this._backdrop),
                a(this._backdrop).one(b.TRANSITION_END, d).emulateTransitionEnd(h)
            } else
                !this._isShown && this._backdrop ? (a(this._backdrop).removeClass(ao),
                g = function() {
                    e._removeBackdrop(),
                    d && d()
                }
                ,
                a(this._element).hasClass(C) ? (i = b.getTransitionDurationFromElement(this._backdrop),
                a(this._backdrop).one(b.TRANSITION_END, g).emulateTransitionEnd(i)) : g()) : d && d()
        }
        ,
        e._adjustDialog = function() {
            var a = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        e._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        e._checkScrollbar = function() {
            var a = document.body.getBoundingClientRect();
            this._isBodyOverflowing = a.left + a.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        e._setScrollbar = function() {
            var b = this, c, d, e, f;
            this._isBodyOverflowing && (c = [].slice.call(document.querySelectorAll(aY)),
            d = [].slice.call(document.querySelectorAll(aX)),
            a(c).each(function(f, c) {
                var d = c.style.paddingRight
                  , e = a(c).css("padding-right");
                a(c).data("padding-right", d).css("padding-right", parseFloat(e) + b._scrollbarWidth + "px")
            }),
            a(d).each(function(f, c) {
                var d = c.style.marginRight
                  , e = a(c).css("margin-right");
                a(c).data("margin-right", d).css("margin-right", parseFloat(e) - b._scrollbarWidth + "px")
            }),
            e = document.body.style.paddingRight,
            f = a(document.body).css("padding-right"),
            a(document.body).data("padding-right", e).css("padding-right", parseFloat(f) + this._scrollbarWidth + "px")),
            a(document.body).addClass(ba)
        }
        ,
        e._resetScrollbar = function() {
            var b = [].slice.call(document.querySelectorAll(aY)), c, d;
            a(b).each(function(d, b) {
                var c = a(b).data("padding-right");
                a(b).removeData("padding-right"),
                b.style.paddingRight = c || ""
            }),
            c = [].slice.call(document.querySelectorAll("" + aX)),
            a(c).each(function(d, b) {
                var c = a(b).data("margin-right");
                "undefined" != typeof c && a(b).css("margin-right", c).removeData("margin-right")
            }),
            d = a(document.body).data("padding-right"),
            a(document.body).removeData("padding-right"),
            document.body.style.paddingRight = d || ""
        }
        ,
        e._getScrollbarWidth = function() {
            var a = document.createElement("div"), b;
            return a.className = bl,
            document.body.appendChild(a),
            b = a.getBoundingClientRect().width - a.clientWidth,
            document.body.removeChild(a),
            b
        }
        ,
        f._jQueryInterface = function(b, c) {
            return this.each(function() {
                var e = a(this).data(Z)
                  , g = d({}, aK, {}, a(this).data(), {}, "object" == typeof b && b ? b : {});
                if (e || (e = new f(this,g),
                a(this).data(Z, e)),
                "string" == typeof b) {
                    if ("undefined" == typeof e[b])
                        throw new TypeError('No method named "' + b + '"');
                    e[b](c)
                } else
                    g.show && e.show(c)
            })
        }
        ,
        m(f, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return aK
            }
        }]),
        f
    }(),
    a(document).on(c.CLICK_DATA_API, bt, function(h) {
        var e, f = this, g = b.getSelectorFromElement(this), i, j;
        g && (e = document.querySelector(g)),
        i = a(e).data(Z) ? "toggle" : d({}, a(e).data(), {}, a(this).data()),
        "A" !== this.tagName && "AREA" !== this.tagName || h.preventDefault(),
        j = a(e).one(c.SHOW, function(b) {
            b.isDefaultPrevented() || j.one(c.HIDDEN, function() {
                a(f).is(":visible") && f.focus()
            })
        }),
        ab._jQueryInterface.call(a(e), i, this)
    }),
    a.fn[H] = ab._jQueryInterface,
    a.fn[H].Constructor = ab,
    a.fn[H].noConflict = function() {
        return a.fn[H] = bh,
        ab._jQueryInterface
    }
    ,
    by = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
    bz = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    },
    bA = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    bB = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function bC(a, b, c) {
        if (0 === a.length)
            return a;
        if (c && "function" == typeof c)
            return c(a);
        for (var e = (new window.DOMParser).parseFromString(a, "text/html"), g = Object.keys(b), f = [].slice.call(e.body.querySelectorAll("*")), h = function(c) {
            var a = f[c], d = a.nodeName.toLowerCase(), e, h;
            if (-1 === g.indexOf(a.nodeName.toLowerCase()))
                return a.parentNode.removeChild(a),
                "continue";
            e = [].slice.call(a.attributes),
            h = [].concat(b["*"] || [], b[d] || []),
            e.forEach(function(b) {
                !function(a, d) {
                    var b = a.nodeName.toLowerCase(), e, c, f;
                    if (-1 !== d.indexOf(b))
                        return -1 === by.indexOf(b) || Boolean(a.nodeValue.match(bA) || a.nodeValue.match(bB));
                    for (e = d.filter(function(a) {
                        return a instanceof RegExp
                    }),
                    c = 0,
                    f = e.length; c < f; c++)
                        if (b.match(e[c]))
                            return !0;
                    return !1
                }(b, h) && a.removeAttribute(b.nodeName)
            })
        }, d = 0, i = f.length; d < i; d++)
            h(d);
        return e.body.innerHTML
    }
    u = "tooltip",
    am = "bs.tooltip",
    k = "." + am,
    bG = a.fn[u],
    aQ = "bs-tooltip",
    bI = new RegExp("(^|\\s)" + aQ + "\\S+","g"),
    bJ = ["sanitize", "whiteList", "sanitizeFn"],
    bK = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    },
    bL = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    },
    bM = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: bz,
        popperConfig: null
    },
    R = "show",
    aw = "out",
    bP = {
        HIDE: "hide" + k,
        HIDDEN: "hidden" + k,
        SHOW: "show" + k,
        SHOWN: "shown" + k,
        INSERTED: "inserted" + k,
        CLICK: "click" + k,
        FOCUSIN: "focusin" + k,
        FOCUSOUT: "focusout" + k,
        MOUSEENTER: "mouseenter" + k,
        MOUSELEAVE: "mouseleave" + k
    },
    W = "fade",
    S = "show",
    bS = ".tooltip-inner",
    bT = ".arrow",
    I = "hover",
    aA = "focus",
    bW = "click",
    bX = "manual",
    r = function() {
        function e(a, b) {
            if ("undefined" == typeof q)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = a,
            this.config = this._getConfig(b),
            this.tip = null,
            this._setListeners()
        }
        var c = e.prototype;
        return c.enable = function() {
            this._isEnabled = !0
        }
        ,
        c.disable = function() {
            this._isEnabled = !1
        }
        ,
        c.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        c.toggle = function(c) {
            if (this._isEnabled)
                if (c) {
                    var d = this.constructor.DATA_KEY
                      , b = a(c.currentTarget).data(d);
                    b || (b = new this.constructor(c.currentTarget,this._getDelegateConfig()),
                    a(c.currentTarget).data(d, b)),
                    b._activeTrigger.click = !b._activeTrigger.click,
                    b._isWithActiveTrigger() ? b._enter(null, b) : b._leave(null, b)
                } else {
                    if (a(this.getTipElement()).hasClass(S))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        c.dispose = function() {
            clearTimeout(this._timeout),
            a.removeData(this.element, this.constructor.DATA_KEY),
            a(this.element).off(this.constructor.EVENT_KEY),
            a(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
            this.tip && a(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        c.show = function() {
            var c = this, e, f, l, d, h, j, i, k, g, m;
            if ("none" === a(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            if (e = a.Event(this.constructor.Event.SHOW),
            this.isWithContent() && this._isEnabled) {
                if (a(this.element).trigger(e),
                f = b.findShadowRoot(this.element),
                l = a.contains(null !== f ? f : this.element.ownerDocument.documentElement, this.element),
                e.isDefaultPrevented() || !l)
                    return;
                d = this.getTipElement(),
                h = b.getUID(this.constructor.NAME),
                d.setAttribute("id", h),
                this.element.setAttribute("aria-describedby", h),
                this.setContent(),
                this.config.animation && a(d).addClass(W),
                j = "function" == typeof this.config.placement ? this.config.placement.call(this, d, this.element) : this.config.placement,
                i = this._getAttachment(j),
                this.addAttachmentClass(i),
                k = this._getContainer(),
                a(d).data(this.constructor.DATA_KEY, this),
                a.contains(this.element.ownerDocument.documentElement, this.tip) || a(d).appendTo(k),
                a(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new q(this.element,d,this._getPopperConfig(i)),
                a(d).addClass(S),
                "ontouchstart"in document.documentElement && a(document.body).children().on("mouseover", null, a.noop),
                g = function() {
                    c.config.animation && c._fixTransition();
                    var b = c._hoverState;
                    c._hoverState = null,
                    a(c.element).trigger(c.constructor.Event.SHOWN),
                    b === aw && c._leave(null, c)
                }
                ,
                a(this.tip).hasClass(W) ? (m = b.getTransitionDurationFromElement(this.tip),
                a(this.tip).one(b.TRANSITION_END, g).emulateTransitionEnd(m)) : g()
            }
        }
        ,
        c.hide = function(f) {
            var c, d, e, h;
            function g() {
                c._hoverState !== R && d.parentNode && d.parentNode.removeChild(d),
                c._cleanTipClass(),
                c.element.removeAttribute("aria-describedby"),
                a(c.element).trigger(c.constructor.Event.HIDDEN),
                null !== c._popper && c._popper.destroy(),
                f && f()
            }
            c = this,
            d = this.getTipElement(),
            e = a.Event(this.constructor.Event.HIDE),
            (a(this.element).trigger(e),
            !e.isDefaultPrevented()) && (a(d).removeClass(S),
            "ontouchstart"in document.documentElement && a(document.body).children().off("mouseover", null, a.noop),
            this._activeTrigger[bW] = !1,
            this._activeTrigger[aA] = !1,
            this._activeTrigger[I] = !1,
            a(this.tip).hasClass(W) ? (h = b.getTransitionDurationFromElement(d),
            a(d).one(b.TRANSITION_END, g).emulateTransitionEnd(h)) : g(),
            this._hoverState = "")
        }
        ,
        c.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        c.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        c.addAttachmentClass = function(b) {
            a(this.getTipElement()).addClass(aQ + "-" + b)
        }
        ,
        c.getTipElement = function() {
            return this.tip = this.tip || a(this.config.template)[0],
            this.tip
        }
        ,
        c.setContent = function() {
            var b = this.getTipElement();
            this.setElementContent(a(b.querySelectorAll(bS)), this.getTitle()),
            a(b).removeClass(W + " " + S)
        }
        ,
        c.setElementContent = function(c, b) {
            "object" != typeof b || !b.nodeType && !b.jquery ? this.config.html ? (this.config.sanitize && (b = bC(b, this.config.whiteList, this.config.sanitizeFn)),
            c.html(b)) : c.text(b) : this.config.html ? a(b).parent().is(c) || c.empty().append(b) : c.text(a(b).text())
        }
        ,
        c.getTitle = function() {
            var a = this.element.getAttribute("data-original-title");
            return a = a || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }
        ,
        c._getPopperConfig = function(b) {
            var a = this;
            return d({}, {
                placement: b,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: bT
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(b) {
                    b.originalPlacement !== b.placement && a._handlePopperPlacementChange(b)
                },
                onUpdate: function(b) {
                    return a._handlePopperPlacementChange(b)
                }
            }, {}, this.config.popperConfig)
        }
        ,
        c._getOffset = function() {
            var b = this
              , a = {};
            return "function" == typeof this.config.offset ? a.fn = function(a) {
                return a.offsets = d({}, a.offsets, {}, b.config.offset(a.offsets, b.element) || {}),
                a
            }
            : a.offset = this.config.offset,
            a
        }
        ,
        c._getContainer = function() {
            return !1 === this.config.container ? document.body : b.isElement(this.config.container) ? a(this.config.container) : a(document).find(this.config.container)
        }
        ,
        c._getAttachment = function(a) {
            return bL[a.toUpperCase()]
        }
        ,
        c._setListeners = function() {
            var b = this;
            this.config.trigger.split(" ").forEach(function(c) {
                if ("click" === c)
                    a(b.element).on(b.constructor.Event.CLICK, b.config.selector, function(a) {
                        return b.toggle(a)
                    });
                else if (c !== bX) {
                    var d = c === I ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN
                      , e = c === I ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                    a(b.element).on(d, b.config.selector, function(a) {
                        return b._enter(a)
                    }).on(e, b.config.selector, function(a) {
                        return b._leave(a)
                    })
                }
            }),
            this._hideModalHandler = function() {
                b.element && b.hide()
            }
            ,
            a(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = d({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        c._fixTitle = function() {
            var a = typeof this.element.getAttribute("data-original-title");
            !this.element.getAttribute("title") && "string" == a || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        c._enter = function(c, b) {
            var d = this.constructor.DATA_KEY;
            (b = b || a(c.currentTarget).data(d)) || (b = new this.constructor(c.currentTarget,this._getDelegateConfig()),
            a(c.currentTarget).data(d, b)),
            c && (b._activeTrigger["focusin" === c.type ? aA : I] = !0),
            a(b.getTipElement()).hasClass(S) || b._hoverState === R ? b._hoverState = R : (clearTimeout(b._timeout),
            b._hoverState = R,
            b.config.delay && b.config.delay.show ? b._timeout = setTimeout(function() {
                b._hoverState === R && b.show()
            }, b.config.delay.show) : b.show())
        }
        ,
        c._leave = function(c, b) {
            var d = this.constructor.DATA_KEY;
            (b = b || a(c.currentTarget).data(d)) || (b = new this.constructor(c.currentTarget,this._getDelegateConfig()),
            a(c.currentTarget).data(d, b)),
            c && (b._activeTrigger["focusout" === c.type ? aA : I] = !1),
            b._isWithActiveTrigger() || (clearTimeout(b._timeout),
            b._hoverState = aw,
            b.config.delay && b.config.delay.hide ? b._timeout = setTimeout(function() {
                b._hoverState === aw && b.hide()
            }, b.config.delay.hide) : b.hide())
        }
        ,
        c._isWithActiveTrigger = function() {
            for (var a in this._activeTrigger)
                if (this._activeTrigger[a])
                    return !0;
            return !1
        }
        ,
        c._getConfig = function(c) {
            var e = a(this.element).data();
            return Object.keys(e).forEach(function(a) {
                -1 !== bJ.indexOf(a) && delete e[a]
            }),
            "number" == typeof (c = d({}, this.constructor.Default, {}, e, {}, "object" == typeof c && c ? c : {})).delay && (c.delay = {
                show: c.delay,
                hide: c.delay
            }),
            "number" == typeof c.title && (c.title = c.title.toString()),
            "number" == typeof c.content && (c.content = c.content.toString()),
            b.typeCheckConfig(u, c, this.constructor.DefaultType),
            c.sanitize && (c.template = bC(c.template, c.whiteList, c.sanitizeFn)),
            c
        }
        ,
        c._getDelegateConfig = function() {
            var b = {}, a;
            if (this.config)
                for (a in this.config)
                    this.constructor.Default[a] !== this.config[a] && (b[a] = this.config[a]);
            return b
        }
        ,
        c._cleanTipClass = function() {
            var c = a(this.getTipElement())
              , b = c.attr("class").match(bI);
            null !== b && b.length && c.removeClass(b.join(""))
        }
        ,
        c._handlePopperPlacementChange = function(a) {
            var b = a.instance;
            this.tip = b.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(a.placement))
        }
        ,
        c._fixTransition = function() {
            var b = this.getTipElement()
              , c = this.config.animation;
            null === b.getAttribute("x-placement") && (a(b).removeClass(W),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = c)
        }
        ,
        e._jQueryInterface = function(b) {
            return this.each(function() {
                var c = a(this).data(am)
                  , d = "object" == typeof b && b;
                if ((c || !/dispose|hide/.test(b)) && (c || (c = new e(this,d),
                a(this).data(am, c)),
                "string" == typeof b)) {
                    if ("undefined" == typeof c[b])
                        throw new TypeError('No method named "' + b + '"');
                    c[b]()
                }
            })
        }
        ,
        m(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return bM
            }
        }, {
            key: "NAME",
            get: function() {
                return u
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return am
            }
        }, {
            key: "Event",
            get: function() {
                return bP
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return k
            }
        }, {
            key: "DefaultType",
            get: function() {
                return bK
            }
        }]),
        e
    }(),
    a.fn[u] = r._jQueryInterface,
    a.fn[u].Constructor = r,
    a.fn[u].noConflict = function() {
        return a.fn[u] = bG,
        r._jQueryInterface
    }
    ,
    A = "popover",
    ap = "bs.popover",
    j = "." + ap,
    ca = a.fn[A],
    aO = "bs-popover",
    cc = new RegExp("(^|\\s)" + aO + "\\S+","g"),
    cd = d({}, r.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    ce = d({}, r.DefaultType, {
        content: "(string|element|function)"
    }),
    cf = "fade",
    cg = "show",
    ch = ".popover-header",
    ci = ".popover-body",
    cj = {
        HIDE: "hide" + j,
        HIDDEN: "hidden" + j,
        SHOW: "show" + j,
        SHOWN: "shown" + j,
        INSERTED: "inserted" + j,
        CLICK: "click" + j,
        FOCUSIN: "focusin" + j,
        FOCUSOUT: "focusout" + j,
        MOUSEENTER: "mouseenter" + j,
        MOUSELEAVE: "mouseleave" + j
    },
    ah = function(d) {
        function b() {
            return d.apply(this, arguments) || this
        }
        !function(a, b) {
            a.prototype = Object.create(b.prototype),
            (a.prototype.constructor = a).__proto__ = b
        }(b, d);
        var c = b.prototype;
        return c.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        c.addAttachmentClass = function(b) {
            a(this.getTipElement()).addClass(aO + "-" + b)
        }
        ,
        c.getTipElement = function() {
            return this.tip = this.tip || a(this.config.template)[0],
            this.tip
        }
        ,
        c.setContent = function() {
            var c = a(this.getTipElement()), b;
            this.setElementContent(c.find(ch), this.getTitle()),
            b = this._getContent(),
            "function" == typeof b && (b = b.call(this.element)),
            this.setElementContent(c.find(ci), b),
            c.removeClass(cf + " " + cg)
        }
        ,
        c._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        c._cleanTipClass = function() {
            var c = a(this.getTipElement())
              , b = c.attr("class").match(cc);
            null !== b && 0 < b.length && c.removeClass(b.join(""))
        }
        ,
        b._jQueryInterface = function(c) {
            return this.each(function() {
                var d = a(this).data(ap)
                  , e = "object" == typeof c ? c : null;
                if ((d || !/dispose|hide/.test(c)) && (d || (d = new b(this,e),
                a(this).data(ap, d)),
                "string" == typeof c)) {
                    if ("undefined" == typeof d[c])
                        throw new TypeError('No method named "' + c + '"');
                    d[c]()
                }
            })
        }
        ,
        m(b, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return cd
            }
        }, {
            key: "NAME",
            get: function() {
                return A
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return ap
            }
        }, {
            key: "Event",
            get: function() {
                return cj
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return j
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ce
            }
        }]),
        b
    }(r),
    a.fn[A] = ah._jQueryInterface,
    a.fn[A].Constructor = ah,
    a.fn[A].noConflict = function() {
        return a.fn[A] = ca,
        ah._jQueryInterface
    }
    ,
    w = "scrollspy",
    af = "bs.scrollspy",
    ae = "." + af,
    co = a.fn[w],
    aM = {
        offset: 10,
        method: "auto",
        target: ""
    },
    cq = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    },
    ay = {
        ACTIVATE: "activate" + ae,
        SCROLL: "scroll" + ae,
        LOAD_DATA_API: "load" + ae + ".data-api"
    },
    cs = "dropdown-item",
    x = "active",
    cu = '[data-spy="scroll"]',
    aR = ".nav, .list-group",
    az = ".nav-link",
    cx = ".nav-item",
    aS = ".list-group-item",
    cz = ".dropdown",
    cA = ".dropdown-item",
    cB = ".dropdown-toggle",
    cC = "offset",
    aT = "position",
    Q = function() {
        function e(b, c) {
            var d = this;
            this._element = b,
            this._scrollElement = "BODY" === b.tagName ? window : b,
            this._config = this._getConfig(c),
            this._selector = this._config.target + " " + az + "," + this._config.target + " " + aS + "," + this._config.target + " " + cA,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            a(this._scrollElement).on(ay.SCROLL, function(a) {
                return d._process(a)
            }),
            this.refresh(),
            this._process()
        }
        var c = e.prototype;
        return c.refresh = function() {
            var c = this
              , e = this._scrollElement === this._scrollElement.window ? cC : aT
              , d = "auto" === this._config.method ? e : this._config.method
              , f = d === aT ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(h) {
                var c, e = b.getSelectorFromElement(h), g;
                if (e && (c = document.querySelector(e)),
                c)
                    if (g = c.getBoundingClientRect(),
                    g.width || g.height)
                        return [a(c)[d]().top + f, e];
                return null
            }).filter(function(a) {
                return a
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).forEach(function(a) {
                c._offsets.push(a[0]),
                c._targets.push(a[1])
            })
        }
        ,
        c.dispose = function() {
            a.removeData(this._element, af),
            a(this._scrollElement).off(ae),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        c._getConfig = function(c) {
            if ("string" != typeof (c = d({}, aM, {}, "object" == typeof c && c ? c : {})).target) {
                var e = a(c.target).attr("id");
                e || (e = b.getUID(w),
                a(c.target).attr("id", e)),
                c.target = "#" + e
            }
            return b.typeCheckConfig(w, c, cq),
            c
        }
        ,
        c._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        c._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        c._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        c._process = function() {
            var b = this._getScrollTop() + this._config.offset, c = this._getScrollHeight(), e = this._config.offset + c - this._getOffsetHeight(), d, a;
            if (this._scrollHeight !== c && this.refresh(),
            e <= b)
                d = this._targets[this._targets.length - 1],
                this._activeTarget !== d && this._activate(d);
            else {
                if (this._activeTarget && b < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (a = this._offsets.length; a--; )
                    this._activeTarget !== this._targets[a] && b >= this._offsets[a] && ("undefined" == typeof this._offsets[a + 1] || b < this._offsets[a + 1]) && this._activate(this._targets[a])
            }
        }
        ,
        c._activate = function(c) {
            this._activeTarget = c,
            this._clear();
            var d = this._selector.split(",").map(function(a) {
                return a + '[data-target="' + c + '"],' + a + '[href="' + c + '"]'
            })
              , b = a([].slice.call(document.querySelectorAll(d.join(","))));
            b.hasClass(cs) ? (b.closest(cz).find(cB).addClass(x),
            b.addClass(x)) : (b.addClass(x),
            b.parents(aR).prev(az + ", " + aS).addClass(x),
            b.parents(aR).prev(cx).children(az).addClass(x)),
            a(this._scrollElement).trigger(ay.ACTIVATE, {
                relatedTarget: c
            })
        }
        ,
        c._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(a) {
                return a.classList.contains(x)
            }).forEach(function(a) {
                return a.classList.remove(x)
            })
        }
        ,
        e._jQueryInterface = function(b) {
            return this.each(function() {
                var c = a(this).data(af);
                if (c || (c = new e(this,"object" == typeof b && b),
                a(this).data(af, c)),
                "string" == typeof b) {
                    if ("undefined" == typeof c[b])
                        throw new TypeError('No method named "' + b + '"');
                    c[b]()
                }
            })
        }
        ,
        m(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return aM
            }
        }]),
        e
    }(),
    a(window).on(ay.LOAD_DATA_API, function() {
        for (var b = [].slice.call(document.querySelectorAll(cu)), c = b.length, d; c--; )
            d = a(b[c]),
            Q._jQueryInterface.call(d, d.data())
    }),
    a.fn[w] = Q._jQueryInterface,
    a.fn[w].Constructor = Q,
    a.fn[w].noConflict = function() {
        return a.fn[w] = co,
        Q._jQueryInterface
    }
    ,
    ag = "bs.tab",
    T = "." + ag,
    df = a.fn.tab,
    O = {
        HIDE: "hide" + T,
        HIDDEN: "hidden" + T,
        SHOW: "show" + T,
        SHOWN: "shown" + T,
        CLICK_DATA_API: "click" + T + ".data-api"
    },
    cJ = "dropdown-menu",
    N = "active",
    cL = "disabled",
    aW = "fade",
    a_ = "show",
    cO = ".dropdown",
    cP = ".nav, .list-group",
    a$ = ".active",
    bb = "> li > .active",
    cS = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    cT = ".dropdown-toggle",
    cU = "> .dropdown-menu .active",
    Y = function() {
        function c(a) {
            this._element = a
        }
        var d = c.prototype;
        return d.show = function() {
            var f = this, e, c, d, g, k, h, i, j;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && a(this._element).hasClass(N) || a(this._element).hasClass(cL) || (d = a(this._element).closest(cP)[0],
            g = b.getSelectorFromElement(this._element),
            d && (k = "UL" === d.nodeName || "OL" === d.nodeName ? bb : a$,
            c = (c = a.makeArray(a(d).find(k)))[c.length - 1]),
            h = a.Event(O.HIDE, {
                relatedTarget: this._element
            }),
            i = a.Event(O.SHOW, {
                relatedTarget: c
            }),
            (c && a(c).trigger(h),
            a(this._element).trigger(i),
            !i.isDefaultPrevented() && !h.isDefaultPrevented()) && (g && (e = document.querySelector(g)),
            this._activate(this._element, d),
            j = function() {
                var b = a.Event(O.HIDDEN, {
                    relatedTarget: f._element
                })
                  , d = a.Event(O.SHOWN, {
                    relatedTarget: c
                });
                a(c).trigger(b),
                a(f._element).trigger(d)
            }
            ,
            e ? this._activate(e, e.parentNode, j) : j()))
        }
        ,
        d.dispose = function() {
            a.removeData(this._element, ag),
            this._element = null
        }
        ,
        d._activate = function(j, d, f) {
            var h, c, e, i;
            function g() {
                return h._transitionComplete(j, c, f)
            }
            h = this,
            c = (!d || "UL" !== d.nodeName && "OL" !== d.nodeName ? a(d).children(a$) : a(d).find(bb))[0],
            e = f && c && a(c).hasClass(aW),
            c && e ? (i = b.getTransitionDurationFromElement(c),
            a(c).removeClass(a_).one(b.TRANSITION_END, g).emulateTransitionEnd(i)) : g()
        }
        ,
        d._transitionComplete = function(c, d, g) {
            var e, f, h;
            d && (a(d).removeClass(N),
            e = a(d.parentNode).find(cU)[0],
            e && a(e).removeClass(N),
            "tab" === d.getAttribute("role") && d.setAttribute("aria-selected", !1)),
            (a(c).addClass(N),
            "tab" === c.getAttribute("role") && c.setAttribute("aria-selected", !0),
            b.reflow(c),
            c.classList.contains(aW) && c.classList.add(a_),
            c.parentNode && a(c.parentNode).hasClass(cJ)) && (f = a(c).closest(cO)[0],
            f && (h = [].slice.call(f.querySelectorAll(cT)),
            a(h).addClass(N)),
            c.setAttribute("aria-expanded", !0)),
            g && g()
        }
        ,
        c._jQueryInterface = function(b) {
            return this.each(function() {
                var e = a(this)
                  , d = e.data(ag);
                if (d || (d = new c(this),
                e.data(ag, d)),
                "string" == typeof b) {
                    if ("undefined" == typeof d[b])
                        throw new TypeError('No method named "' + b + '"');
                    d[b]()
                }
            })
        }
        ,
        m(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        c
    }(),
    a(document).on(O.CLICK_DATA_API, cS, function(b) {
        b.preventDefault(),
        Y._jQueryInterface.call(a(this), "show")
    }),
    a.fn.tab = Y._jQueryInterface,
    a.fn.tab.Constructor = Y,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = df,
        Y._jQueryInterface
    }
    ,
    E = "toast",
    ad = "bs.toast",
    X = "." + ad,
    cZ = a.fn[E],
    z = {
        CLICK_DISMISS: "click.dismiss" + X,
        HIDE: "hide" + X,
        HIDDEN: "hidden" + X,
        SHOW: "show" + X,
        SHOWN: "shown" + X
    },
    c$ = "fade",
    bc = "hide",
    U = "show",
    bd = "showing",
    dd = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    },
    be = {
        animation: !0,
        autohide: !0,
        delay: 500
    },
    db = '[data-dismiss="toast"]',
    at = function() {
        function e(a, b) {
            this._element = a,
            this._config = this._getConfig(b),
            this._timeout = null,
            this._setListeners()
        }
        var c = e.prototype;
        return c.show = function() {
            var c = this, d = a.Event(z.SHOW), e, f;
            a(this._element).trigger(d),
            !d.isDefaultPrevented() && (this._config.animation && this._element.classList.add(c$),
            e = function() {
                c._element.classList.remove(bd),
                c._element.classList.add(U),
                a(c._element).trigger(z.SHOWN),
                c._config.autohide && (c._timeout = setTimeout(function() {
                    c.hide()
                }, c._config.delay))
            }
            ,
            (this._element.classList.remove(bc),
            b.reflow(this._element),
            this._element.classList.add(bd),
            this._config.animation) ? (f = b.getTransitionDurationFromElement(this._element),
            a(this._element).one(b.TRANSITION_END, e).emulateTransitionEnd(f)) : e())
        }
        ,
        c.hide = function() {
            if (this._element.classList.contains(U)) {
                var b = a.Event(z.HIDE);
                a(this._element).trigger(b),
                b.isDefaultPrevented() || this._close()
            }
        }
        ,
        c.dispose = function() {
            clearTimeout(this._timeout),
            this._timeout = null,
            this._element.classList.contains(U) && this._element.classList.remove(U),
            a(this._element).off(z.CLICK_DISMISS),
            a.removeData(this._element, ad),
            this._element = null,
            this._config = null
        }
        ,
        c._getConfig = function(c) {
            return c = d({}, be, {}, a(this._element).data(), {}, "object" == typeof c && c ? c : {}),
            b.typeCheckConfig(E, c, this.constructor.DefaultType),
            c
        }
        ,
        c._setListeners = function() {
            var b = this;
            a(this._element).on(z.CLICK_DISMISS, db, function() {
                return b.hide()
            })
        }
        ,
        c._close = function() {
            var c, e;
            function d() {
                c._element.classList.add(bc),
                a(c._element).trigger(z.HIDDEN)
            }
            c = this,
            (this._element.classList.remove(U),
            this._config.animation) ? (e = b.getTransitionDurationFromElement(this._element),
            a(this._element).one(b.TRANSITION_END, d).emulateTransitionEnd(e)) : d()
        }
        ,
        e._jQueryInterface = function(b) {
            return this.each(function() {
                var d = a(this)
                  , c = d.data(ad);
                if (c || (c = new e(this,"object" == typeof b && b),
                d.data(ad, c)),
                "string" == typeof b) {
                    if ("undefined" == typeof c[b])
                        throw new TypeError('No method named "' + b + '"');
                    c[b](this)
                }
            })
        }
        ,
        m(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return dd
            }
        }, {
            key: "Default",
            get: function() {
                return be
            }
        }]),
        e
    }(),
    a.fn[E] = at._jQueryInterface,
    a.fn[E].Constructor = at,
    a.fn[E].noConflict = function() {
        return a.fn[E] = cZ,
        at._jQueryInterface
    }
    ,
    i.Alert = y,
    i.Button = J,
    i.Carousel = D,
    i.Collapse = M,
    i.Dropdown = p,
    i.Modal = ab,
    i.Popover = ah,
    i.Scrollspy = Q,
    i.Tab = Y,
    i.Toast = at,
    i.Tooltip = r,
    i.Util = b,
    Object.defineProperty(i, "__esModule", {
        value: !0
    })
}),
function(a) {
    function l() {
        let c = a('#navbar-main')
          , b = c.outerHeight();
        return console.debug('Navbar height: ' + b),
        b
    }
    function j(b) {
        if (b = typeof b == 'undefined' || typeof b == 'object' ? decodeURIComponent(window.location.hash) : b,
        a(b).length) {
            b = '#' + a.escapeSelector(b.substring(1));
            let c = Math.ceil(a(b).offset().top - l());
            a('body').addClass('scrolling'),
            a('html, body').animate({
                scrollTop: c
            }, 600, function() {
                a('body').removeClass('scrolling')
            })
        } else
            console.debug('Cannot scroll to target `#' + b + '`. ID not found!')
    }
    function o() {
        let b = a('body')
          , c = b.data('bs.scrollspy');
        c && (c._config.offset = l(),
        b.data('bs.scrollspy', c),
        b.scrollspy('refresh'))
    }
    function v() {
        if (window.history.replaceState) {
            let a = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash;
            window.history.replaceState({
                path: a
            }, '', a)
        }
    }
    window.addEventListener("hashchange", j),
    a('#navbar-main li.nav-item a.nav-link').on('click', function(c) {
        let b = this.hash;
        if (this.pathname === window.location.pathname && b && a(b).length && a(".js-widget-page").length > 0) {
            c.preventDefault();
            let d = Math.ceil(a(b).offset().top - l());
            a('html, body').animate({
                scrollTop: d
            }, 800)
        }
    }),
    a(document).on('click', '.navbar-collapse.show', function(b) {
        let c = a(b.target).is('a') ? a(b.target) : a(b.target).parent();
        c.is('a') && c.attr('class') != 'dropdown-toggle' && a(this).collapse('hide')
    });
    let c = {}, g, e, d = a('#container-publications');
    d.isotope({
        itemSelector: '.isotope-item',
        percentPosition: !0,
        masonry: {
            columnWidth: '.grid-sizer'
        },
        filter: function() {
            let b = a(this)
              , c = !g || b.text().match(g)
              , d = !e || b.is(e);
            return c && d
        }
    });
    let t = a('.filter-search').keyup(s(function() {
        g = new RegExp(t.val(),'gi'),
        d.isotope()
    }));
    function s(c, a) {
        let b;
        return a = a || 100,
        function() {
            clearTimeout(b);
            let d = arguments
              , e = this;
            function f() {
                c.apply(e, d)
            }
            b = setTimeout(f, a)
        }
    }
    function m(a) {
        let b = '';
        for (let c in a)
            b += a[c];
        return b
    }
    a('.pub-filters').on('change', function() {
        let f = a(this)
          , b = f[0].getAttribute('data-filter-group');
        if (c[b] = this.value,
        e = m(c),
        d.isotope(),
        b == "pubtype") {
            let b = a(this).val();
            b.substr(0, 9) == '.pubtype-' ? window.location.hash = b.substr(9) : window.location.hash = ''
        }
    });
    function r() {
        let b = window.location.hash.replace('#', '')
          , f = '*';
        b != '' && !isNaN(b) && (f = '.pubtype-' + b);
        let g = 'pubtype';
        c[g] = f,
        e = m(c),
        d.isotope(),
        a('.pubtype-select').val(f)
    }
    function p() {
        if (a('#map').length) {
            let f = a('#map-provider').val()
              , b = a('#map-lat').val()
              , c = a('#map-lng').val()
              , d = parseInt(a('#map-zoom').val())
              , e = a('#map-dir').val()
              , g = a('#map-api-key').val();
            if (f == 1) {
                let a = new GMaps({
                    div: '#map',
                    lat: b,
                    lng: c,
                    zoom: d,
                    zoomControl: !0,
                    zoomControlOpt: {
                        style: 'SMALL',
                        position: 'TOP_LEFT'
                    },
                    panControl: !1,
                    streetViewControl: !1,
                    mapTypeControl: !1,
                    overviewMapControl: !1,
                    scrollwheel: !0,
                    draggable: !0
                });
                a.addMarker({
                    lat: b,
                    lng: c,
                    click: function(d) {
                        let a = 'https://www.google.com/maps/place/' + encodeURIComponent(e) + '/@' + b + ',' + c + '/';
                        window.open(a, '_blank')
                    },
                    title: e
                })
            } else {
                let a = new L.map('map').setView([b, c], d);
                f == 3 && g.length ? L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox.streets',
                    accessToken: g
                }).addTo(a) : L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(a);
                let h = L.marker([b, c]).addTo(a)
                  , i = b + ',' + c + '#map=' + d + '/' + b + '/' + c + '&layers=N';
                h.bindPopup(e + '<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route=' + i + '">Routing via OpenStreetMap</a></p>')
            }
        }
    }
    function q(b, c) {
        a.getJSON('https://api.github.com/repos/' + c + '/tags').done(function(c) {
            let d = c[0];
            a(b).append(' ' + d.name)
        }).fail(function(d, a, b) {
            let c = a + ", " + b;
            console.log("Request Failed: " + c)
        })
    }
    function i() {
        a('body').hasClass('searching') ? (a('[id=search-query]').blur(),
        a('body').removeClass('searching compensate-for-scrollbar'),
        v(),
        a('#fancybox-style-noscroll').remove()) : (!a('#fancybox-style-noscroll').length && document.body.scrollHeight > window.innerHeight && (a('head').append('<style id="fancybox-style-noscroll">.compensate-for-scrollbar{margin-right:' + (window.innerWidth - document.documentElement.clientWidth) + 'px;}</style>'),
        a('body').addClass('compensate-for-scrollbar')),
        a('body').addClass('searching'),
        a('.search-results').css({
            opacity: 0,
            visibility: 'visible'
        }).animate({
            opacity: 1
        }, 200),
        a('#search-query').focus())
    }
    function f() {
        return a('.js-theme-selector').length
    }
    function n() {
        return parseInt(localStorage.getItem('dark_mode') || 2)
    }
    function k(c) {
        if (console.info('Request to set theme.'),
        !f()) {
            console.info('Cannot set theme - admin disabled theme selector.');
            return
        }
        let a;
        switch (c) {
        case 0:
            localStorage.setItem('dark_mode', '1'),
            a = 1,
            console.info('User changed theme variation to Dark.'),
            b(0);
            break;
        case 1:
            localStorage.setItem('dark_mode', '2'),
            window.matchMedia('(prefers-color-scheme: dark)').matches ? a = 1 : window.matchMedia('(prefers-color-scheme: light)').matches ? a = 0 : a = isSiteThemeDark,
            console.info('User changed theme variation to Auto.'),
            b(1);
            break;
        default:
            localStorage.setItem('dark_mode', '0'),
            a = 0,
            console.info('User changed theme variation to Light.'),
            b(2);
            break
        }
        h(a)
    }
    function b(b) {
        switch (b) {
        case 0:
            a('.js-set-theme-light').removeClass('dropdown-item-active'),
            a('.js-set-theme-dark').addClass('dropdown-item-active'),
            a('.js-set-theme-auto').removeClass('dropdown-item-active');
            break;
        case 1:
            a('.js-set-theme-light').removeClass('dropdown-item-active'),
            a('.js-set-theme-dark').removeClass('dropdown-item-active'),
            a('.js-set-theme-auto').addClass('dropdown-item-active');
            break;
        default:
            a('.js-set-theme-light').addClass('dropdown-item-active'),
            a('.js-set-theme-dark').removeClass('dropdown-item-active'),
            a('.js-set-theme-auto').removeClass('dropdown-item-active');
            break
        }
    }
    function u() {
        if (!f())
            return isSiteThemeDark;
        let b = n(), a;
        switch (b) {
        case 0:
            a = 0;
            break;
        case 1:
            a = 1;
            break;
        default:
            window.matchMedia('(prefers-color-scheme: dark)').matches ? a = 1 : window.matchMedia('(prefers-color-scheme: light)').matches ? a = 0 : a = isSiteThemeDark;
            break
        }
        return a
    }
    function h(c, b=!1) {
        const d = a('link[title=hl-light]').length > 0
          , e = a('link[title=hl-light]')[0]
          , f = a('link[title=hl-dark]')[0]
          , g = a('script[title=mermaid]').length > 0;
        if (!b)
            if (c === 0 && !a('body').hasClass('dark') || c === 1 && a('body').hasClass('dark'))
                return;
        c === 0 ? (b || a('body').css({
            opacity: 0,
            visibility: 'visible'
        }).animate({
            opacity: 1
        }, 500),
        a('body').removeClass('dark'),
        d && (e.disabled = !1,
        f.disabled = !0),
        g && (b ? mermaid.initialize({
            theme: 'default',
            securityLevel: 'loose'
        }) : location.reload())) : c === 1 && (b || a('body').css({
            opacity: 0,
            visibility: 'visible'
        }).animate({
            opacity: 1
        }, 500),
        a('body').addClass('dark'),
        d && (e.disabled = !0,
        f.disabled = !1),
        g && (b ? mermaid.initialize({
            theme: 'dark',
            securityLevel: 'loose'
        }) : location.reload()))
    }
    function w() {
        if (f) {
            let a = n();
            switch (a) {
            case 0:
                b(2),
                console.info('Initialize theme variation to Light.');
                break;
            case 1:
                b(0),
                console.info('Initialize theme variation to Dark.');
                break;
            default:
                b(1),
                console.info('Initialize theme variation to Auto.');
                break
            }
        }
        let a = u();
        h(a, !0)
    }
    function x() {
        a('.carousel').each(function() {
            let b = a('.carousel-item', this);
            b.css('min-height', 0);
            let c = Math.max.apply(null, b.map(function() {
                return a(this).outerHeight()
            }).get());
            b.css('min-height', c + 'px')
        })
    }
    function y() {
        a('#TableOfContents').addClass('nav flex-column'),
        a('#TableOfContents li').addClass('nav-item'),
        a('#TableOfContents li a').addClass('nav-link'),
        a("input[type='checkbox'][disabled]").parents('ul').addClass('task-list')
    }
    function z() {
        let b = [];
        [].push.apply(b, document.getElementsByClassName('language-mermaid'));
        for (let c = 0; c < b.length; c++)
            a(b[c]).unwrap('pre'),
            a(b[c]).replaceWith(function() {
                return a("<div />").append(a(this).contents()).addClass('mermaid')
            })
    }
    a(document).ready(function() {
        y(),
        z(),
        code_highlighting && hljs.initHighlighting(),
        w(),
        a('.js-set-theme-light').click(function(a) {
            a.preventDefault(),
            k(2)
        }),
        a('.js-set-theme-dark').click(function(a) {
            a.preventDefault(),
            k(0)
        }),
        a('.js-set-theme-auto').click(function(a) {
            a.preventDefault(),
            k(1)
        });
        const b = window.matchMedia('(prefers-color-scheme: dark)');
        b.addListener(b=>{
            if (!f())
                return;
            const c = b.matches;
            console.log(`OS dark mode preference changed to ${c ? '🌒 on' : '☀️ off'}.`);
            let d = parseInt(localStorage.getItem('dark_mode') || 2), a;
            d === 2 && (window.matchMedia('(prefers-color-scheme: dark)').matches ? a = 1 : window.matchMedia('(prefers-color-scheme: light)').matches ? a = 0 : a = isSiteThemeDark,
            h(a))
        }
        )
    }),
    a(window).on('load', function() {
        a('.projects-container').each(function(f, e) {
            let b = a(e), c = b.closest('section'), d;
            c.find('.isotope').hasClass('js-layout-row') ? d = 'fitRows' : d = 'masonry',
            b.imagesLoaded(function() {
                b.isotope({
                    itemSelector: '.isotope-item',
                    layoutMode: d,
                    masonry: {
                        gutter: 20
                    },
                    filter: c.find('.default-project-filter').text()
                }),
                c.find('.project-filters a').click(function() {
                    let c = a(this).attr('data-filter');
                    return b.isotope({
                        filter: c
                    }),
                    a(this).removeClass('active').addClass('active').siblings().removeClass('active all'),
                    !1
                }),
                window.location.hash && j()
            })
        }),
        a('.pub-filters-select') && r(),
        a('.back-to-top').click(function(b) {
            b.preventDefault(),
            a('html, body').animate({
                scrollTop: 0
            }, 800, function() {
                window.location.hash = ""
            })
        }),
        a('.js-cite-modal').click(function(d) {
            d.preventDefault();
            let b = a(this).attr('data-filename')
              , c = a('#modal');
            c.find('.modal-body code').load(b, function(e, d, c) {
                if (d == 'error') {
                    let b = "Error: ";
                    a('#modal-error').html(b + c.status + " " + c.statusText)
                } else
                    a('.js-download-cite').attr('href', b)
            }),
            c.modal('show')
        }),
        a('.js-copy-cite').click(function(b) {
            b.preventDefault();
            let a = document.createRange()
              , c = document.querySelector('#modal .modal-body');
            a.selectNode(c),
            window.getSelection().addRange(a);
            try {
                document.execCommand('copy')
            } catch (a) {
                console.log('Error: citation copy failed.')
            }
            window.getSelection().removeRange(a)
        }),
        p();
        let b = '.js-github-release';
        a(b).length > 0 && q(b, a(b).data('repo')),
        a('.js-search').click(function(a) {
            a.preventDefault(),
            i()
        }),
        a(document).on('keydown', function(b) {
            b.which == 27 ? a('body').hasClass('searching') && i() : b.which == 191 && b.shiftKey == !1 && !a('input,textarea').is(':focus') && (b.preventDefault(),
            i())
        })
    }),
    a(window).on('load resize orientationchange', x),
    a('body').on('mouseenter mouseleave', '.dropdown', function(e) {
        var b = a(e.target).closest('.dropdown')
          , c = a('.dropdown-menu', b);
        b.addClass('show'),
        c.addClass('show'),
        setTimeout(function() {
            b[b.is(':hover') ? 'addClass' : 'removeClass']('show'),
            c[b.is(':hover') ? 'addClass' : 'removeClass']('show')
        }, 300),
        o(),
        window.location.hash && (window.location.hash == "#top" ? window.location.hash = "" : a('.projects-container').length || j());
        let d;
        a(window).resize(function() {
            clearTimeout(d),
            d = setTimeout(o, 200)
        })
    })
}(jQuery);
let fuseOptions = {
    shouldSort: !0,
    includeMatches: !0,
    tokenize: !0,
    threshold: search_config.threshold,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: search_config.minLength,
    keys: [{
        name: 'title',
        weight: .99
    }, {
        name: 'summary',
        weight: .6
    }, {
        name: 'authors',
        weight: .5
    }, {
        name: 'content',
        weight: .2
    }, {
        name: 'tags',
        weight: .5
    }, {
        name: 'categories',
        weight: .5
    }]
}
  , summaryLength = 60;
function getSearchQuery(a) {
    return decodeURIComponent((location.search.split(a + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ')
}
function updateURL(a) {
    history.replaceState && window.history.replaceState({
        path: a
    }, '', a)
}
function initSearch(b, c) {
    let a = $("#search-query").val();
    if (a.length < 1 && $('#search-hits').empty(),
    !b && a.length < fuseOptions.minMatchCharLength)
        return;
    $('#search-hits').empty(),
    searchAcademic(a, c);
    let d = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + encodeURIComponent(a) + window.location.hash;
    updateURL(d)
}
function searchAcademic(b, c) {
    let a = c.search(b);
    a.length > 0 ? ($('#search-hits').append('<h3 class="mt-0">' + a.length + ' ' + i18n.results + '</h3>'),
    parseResults(b, a)) : $('#search-hits').append('<div class="search-no-results">' + i18n.no_results + '</div>')
}
function parseResults(a, b) {
    $.each(b, function(g, b) {
        let c = b.item.section
          , d = ""
          , e = ""
          , f = [];
        ["publication", "talk"].includes(c) ? d = b.item.summary : d = b.item.content,
        fuseOptions.tokenize ? f.push(a) : $.each(b.matches, function(b, a) {
            if (a.key == "content") {
                let b = a.indices[0][0] - summaryLength > 0 ? a.indices[0][0] - summaryLength : 0
                  , c = a.indices[0][1] + summaryLength < d.length ? a.indices[0][1] + summaryLength : d.length;
                e += d.substring(b, c),
                f.push(a.value.substring(a.indices[0][0], a.indices[0][1] - a.indices[0][0] + 1))
            }
        }),
        e.length < 1 && (e += b.item.summary);
        let h = $('#search-hit-fuse-template').html();
        c in content_type && (c = content_type[c]);
        let i = {
            key: g,
            title: b.item.title,
            type: c,
            relpermalink: b.item.relpermalink,
            snippet: e
        }
          , j = render(h, i);
        $('#search-hits').append(j),
        $.each(f, function(b, a) {
            $("#summary-" + g).mark(a)
        })
    })
}
function render(a, c) {
    let b, d, e;
    for (b in c)
        d = '\\{\\{\\s*' + b + '\\s*\\}\\}',
        e = new RegExp(d,'g'),
        a = a.replace(e, c[b]);
    return a
}
typeof Fuse == 'function' && $.getJSON(search_config.indexURI, function(b) {
    let a = new Fuse(b,fuseOptions);
    (query = getSearchQuery('q')) && ($("body").addClass('searching'),
    $('.search-results').css({
        opacity: 0,
        visibility: "visible"
    }).animate({
        opacity: 1
    }, 200),
    $("#search-query").val(query),
    $("#search-query").focus(),
    initSearch(!0, a)),
    $('#search-query').keyup(function(b) {
        clearTimeout($.data(this, 'searchTimer')),
        b.keyCode == 13 ? initSearch(!0, a) : $(this).data('searchTimer', setTimeout(function() {
            initSearch(!1, a)
        }, 250))
    })
})
