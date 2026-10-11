(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 818581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(271645);

    function o(e, t) {
        let r = (0, n.useRef)(null),
            o = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = o.current;
                t && (o.current = null, t())
            } else e && (r.current = i(e, n)), t && (o.current = i(t, n))
        }, [e, t])
    }

    function i(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 195057, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return l
        },
        formatWithValidation: function() {
            return d
        },
        urlObjectKeys: function() {
            return s
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = e.r(190809)._(e.r(998183)),
        a = /https?|ftp|gopher|file/;

    function l(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", o = e.pathname || "", l = e.hash || "", s = e.query || "", d = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? d = t + e.host : r && (d = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (d += ":" + e.port)), s && "object" == typeof s && (s = String(i.urlQueryToSearchParams(s)));
        let c = e.search || s && `?${s}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || a.test(n)) && !1 !== d ? (d = "//" + (d || ""), o && "/" !== o[0] && (o = "/" + o)) : d || (d = ""), l && "#" !== l[0] && (l = "#" + l), c && "?" !== c[0] && (c = "?" + c), o = o.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${n}${d}${o}${c}${l}`
    }
    let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function d(e) {
        return l(e)
    }
}, 573668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(718967),
        o = e.r(652817);

    function i(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, o.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 284508, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 522016, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return g
        },
        useLinkStatus: function() {
            return b
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = e.r(190809),
        a = e.r(843476),
        l = i._(e.r(271645)),
        s = e.r(195057),
        d = e.r(8372),
        c = e.r(818581),
        p = e.r(718967),
        u = e.r(405550);
    e.r(233525);
    let f = e.r(388540),
        h = e.r(91949),
        y = e.r(573668),
        x = e.r(509396);

    function g(t) {
        var r, n;
        let o, i, g, [b, k] = (0, l.useOptimistic)(h.IDLE_LINK_STATUS),
            v = (0, l.useRef)(null),
            {
                href: j,
                as: S,
                children: w,
                prefetch: C = null,
                passHref: z,
                replace: _,
                shallow: T,
                scroll: M,
                onClick: L,
                onMouseEnter: E,
                onTouchStart: $,
                legacyBehavior: R = !1,
                onNavigate: I,
                transitionTypes: F,
                ref: P,
                unstable_dynamicOnHover: A,
                ...B
            } = t;
        o = w, R && ("string" == typeof o || "number" == typeof o) && (o = (0, a.jsx)("a", {
            children: o
        }));
        let O = l.default.useContext(d.AppRouterContext),
            D = !1 !== C,
            W = !1 !== C ? null === (n = C) || "auto" === n ? x.FetchStrategy.PPR : x.FetchStrategy.Full : x.FetchStrategy.PPR,
            N = "string" == typeof(r = S || j) ? r : (0, s.formatUrl)(r);
        if (R) {
            if (o ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            i = l.default.Children.only(o)
        }
        let U = R ? i && "object" == typeof i && i.ref : P,
            H = l.default.useCallback(e => (null !== O && (v.current = (0, h.mountLinkInstance)(e, N, O, W, D, k)), () => {
                v.current && ((0, h.unmountLinkForCurrentNavigation)(v.current), v.current = null), (0, h.unmountPrefetchableInstance)(e)
            }), [D, N, O, W, k]),
            q = {
                ref: (0, c.useMergedRef)(H, U),
                onClick(t) {
                    R || "function" != typeof L || L(t), R && i.props && "function" == typeof i.props.onClick && i.props.onClick(t), !O || t.defaultPrevented || function(t, r, n, o, i, a, s) {
                        if ("u" > typeof window) {
                            let d, {
                                nodeName: c
                            } = t.currentTarget;
                            if ("A" === c.toUpperCase() && ((d = t.currentTarget.getAttribute("target")) && "_self" !== d || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, y.isLocalURL)(r)) {
                                o && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), a) {
                                let e = !1;
                                if (a({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: p
                            } = e.r(699781);
                            l.default.startTransition(() => {
                                p(r, o ? "replace" : "push", !1 === i ? f.ScrollBehavior.NoScroll : f.ScrollBehavior.Default, n.current, s)
                            })
                        }
                    }(t, N, v, _, M, I, F)
                },
                onMouseEnter(e) {
                    R || "function" != typeof E || E(e), R && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e), O && D && (0, h.onNavigationIntent)(e.currentTarget, !0 === A)
                },
                onTouchStart: function(e) {
                    R || "function" != typeof $ || $(e), R && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e), O && D && (0, h.onNavigationIntent)(e.currentTarget, !0 === A)
                }
            };
        return (0, p.isAbsoluteUrl)(N) ? q.href = N : R && !z && ("a" !== i.type || "href" in i.props) || (q.href = (0, u.addBasePath)(N)), g = R ? l.default.cloneElement(i, q) : (0, a.jsx)("a", { ...B,
            ...q,
            children: o
        }), (0, a.jsx)(m.Provider, {
            value: b,
            children: g
        })
    }
    e.r(284508);
    let m = (0, l.createContext)(h.IDLE_LINK_STATUS),
        b = () => (0, l.useContext)(m);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 618566, (e, t, r) => {
    t.exports = e.r(976562)
}, 475254, e => {
    "use strict";
    var t = e.i(271645);
    let r = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim(),
        n = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        };
    var o = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let i = (0, t.createContext)({}),
        a = (0, t.forwardRef)(({
            color: e,
            size: n,
            strokeWidth: a,
            absoluteStrokeWidth: l,
            className: s = "",
            children: d,
            iconNode: c,
            ...p
        }, u) => {
            let {
                size: f = 24,
                strokeWidth: h = 2,
                absoluteStrokeWidth: y = !1,
                color: x = "currentColor",
                className: g = ""
            } = (0, t.useContext)(i) ? ? {}, m = l ? ? y ? 24 * Number(a ? ? h) / Number(n ? ? f) : a ? ? h;
            return (0, t.createElement)("svg", {
                ref: u,
                ...o,
                width: n ? ? f ? ? o.width,
                height: n ? ? f ? ? o.height,
                stroke: e ? ? x,
                strokeWidth: m,
                className: r("lucide", g, s),
                ...!d && !(e => {
                    for (let t in e)
                        if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
                    return !1
                })(p) && {
                    "aria-hidden": "true"
                },
                ...p
            }, [...c.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(d) ? d : [d]])
        });
    e.s(["default", 0, (e, o) => {
        let i = (0, t.forwardRef)(({
            className: i,
            ...l
        }, s) => (0, t.createElement)(a, {
            ref: s,
            iconNode: o,
            className: r(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, i),
            ...l
        }));
        return i.displayName = n(e), i
    }], 475254)
}, 736644, 555436, 37727, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645),
        n = e.i(475254);
    let o = (0, n.default)("search", [
        ["path", {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }],
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }]
    ]);
    e.s(["Search", 0, o], 555436), e.s(["default", 0, function({
        onOpen: e
    }) {
        return (0, r.useEffect)(() => {
            let t = t => {
                (t.metaKey || t.ctrlKey) && "k" === t.key && (t.preventDefault(), e())
            };
            return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t)
        }, [e]), (0, t.jsxs)("button", {
            onClick: e,
            "aria-label": "搜索（Ctrl+K）",
            style: {
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 6px",
                color: "#8a7d6e",
                transition: "color 0.25s ease",
                borderRadius: "4px"
            },
            onMouseEnter: e => e.currentTarget.style.color = "#c9845a",
            onMouseLeave: e => e.currentTarget.style.color = "#8a7d6e",
            children: [(0, t.jsx)(o, {
                size: 16,
                strokeWidth: 1.6
            }), (0, t.jsx)("span", {
                className: "desktop-only",
                style: {
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "inherit",
                    opacity: .7,
                    letterSpacing: "0.02em",
                    lineHeight: 1,
                    paddingTop: "1px"
                },
                "aria-hidden": "true",
                children: "⌘K"
            })]
        })
    }], 736644);
    let i = (0, n.default)("x", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]);
    e.s(["X", 0, i], 37727)
}, 810980, e => {
    "use strict";
    let t = (0, e.i(475254).default)("book-open", [
        ["path", {
            d: "M12 7v14",
            key: "1akyts"
        }],
        ["path", {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }]
    ]);
    e.s(["BookOpen", 0, t], 810980)
}, 431343, e => {
    "use strict";
    let t = (0, e.i(475254).default)("play", [
        ["path", {
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
            key: "10ikf1"
        }]
    ]);
    e.s(["Play", 0, t], 431343)
}, 387951, 852008, 150965, e => {
    "use strict";
    var t = e.i(475254);
    let r = (0, t.default)("mic", [
        ["path", {
            d: "M12 19v3",
            key: "npa21l"
        }],
        ["path", {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
            key: "1vc78b"
        }],
        ["rect", {
            x: "9",
            y: "2",
            width: "6",
            height: "13",
            rx: "3",
            key: "s6n7sd"
        }]
    ]);
    e.s(["Mic", 0, r], 387951);
    let n = (0, t.default)("layers", [
        ["path", {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }],
        ["path", {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }],
        ["path", {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }]
    ]);
    e.s(["Layers", 0, n], 852008);
    let o = (0, t.default)("shopping-bag", [
        ["path", {
            d: "M16 10a4 4 0 0 1-8 0",
            key: "1ltviw"
        }],
        ["path", {
            d: "M3.103 6.034h17.794",
            key: "awc11p"
        }],
        ["path", {
            d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
            key: "o988cm"
        }]
    ]);
    e.s(["ShoppingBag", 0, o], 150965)
}, 972520, e => {
    "use strict";
    let t = (0, e.i(475254).default)("arrow-right", [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ]);
    e.s(["ArrowRight", 0, t], 972520)
}, 342724, 56691, e => {
    "use strict";
    var t = e.i(247167),
        r = e.i(843476),
        n = e.i(271645),
        o = e.i(522016),
        i = e.i(618566),
        a = e.i(493681),
        l = e.i(704401),
        s = e.i(736644),
        d = e.i(846932),
        c = e.i(88653),
        p = e.i(555436),
        u = e.i(37727),
        f = e.i(810980),
        h = e.i(431343),
        y = e.i(387951),
        x = e.i(852008),
        g = e.i(150965),
        m = e.i(972520),
        b = e.i(475254);
    let k = (0, b.default)("arrow-up-right", [
            ["path", {
                d: "M7 7h10v10",
                key: "1tivn9"
            }],
            ["path", {
                d: "M7 17 17 7",
                key: "1vkiza"
            }]
        ]),
        v = (0, b.default)("pen-line", [
            ["path", {
                d: "M13 21h8",
                key: "1jsn5i"
            }],
            ["path", {
                d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
                key: "1a8usu"
            }]
        ]),
        j = {
            "zh-Hans": {
                placeholder: "搜索文章、视频、课程、商品、自查…",
                noResults: "未找到相关内容，试试其他关键词？",
                hint: "输入关键词开始探索",
                hintSub: "宇宙学 · 文明史 · 政治哲学 · 生物学",
                resultCount: e => `${e} 条结果`,
                readMin: e => `${e} 分钟阅读`,
                durationMin: e => `${e} 分钟`,
                typeLabel: e => "article" === e._type ? "文章" : "video" === e._type ? "podcast" === e.format ? "播客" : "视频" : "series" === e._type ? "课程系列" : "quiz" === e._type ? "思想光谱" : "product" === e._type ? "series_pack" === e.productType ? "系列包" : "membership" === e.productType ? "会员" : "研究报告" : "",
                typeIcon: e => "article" === e._type ? f.BookOpen : "video" === e._type ? "podcast" === e.format ? y.Mic : h.Play : "series" === e._type ? x.Layers : "quiz" === e._type ? v : g.ShoppingBag,
                externalHint: "前往购买",
                comingSoon: "即将推出",
                statusLabel: e => e
            },
            "zh-Hant": {
                placeholder: "搜尋文章、視頻、課程、商品…",
                noResults: "未找到相關內容，試試其他關鍵詞？",
                hint: "輸入關鍵詞開始探索",
                hintSub: "宇宙學 · 文明史 · 政治哲學 · 生物學",
                resultCount: e => `${e} 條結果`,
                readMin: e => `${e} 分鐘閱讀`,
                durationMin: e => `${e} 分鐘`,
                typeLabel: e => "article" === e._type ? "文章" : "video" === e._type ? "podcast" === e.format ? "播客" : "視頻" : "series" === e._type ? "課程系列" : "quiz" === e._type ? "思想光譜" : "product" === e._type ? "series_pack" === e.productType ? "系列包" : "membership" === e.productType ? "會員" : "研究報告" : "",
                typeIcon: e => "article" === e._type ? f.BookOpen : "video" === e._type ? "podcast" === e.format ? y.Mic : h.Play : "series" === e._type ? x.Layers : "quiz" === e._type ? v : g.ShoppingBag,
                externalHint: "前往購買",
                comingSoon: "即將推出",
                statusLabel: e => e
            }
        };

    function S(e, t, r) {
        if (!t.trim() || !e) return e;
        let n = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            o = RegExp(`(${n})`, "gi");
        return e.replace(o, `<mark style="${r?"background:#3d2e22;color:#d4916a;border-radius:2px;padding:0 1px;":"background:#f0c97a;color:#2c1f14;border-radius:2px;padding:0 1px;"}">$1</mark>`)
    }

    function w(e) {
        if (!e) return "";
        let t = new Date(e);
        return `${t.getFullYear()}.${String(t.getMonth()+1).padStart(2,"0")}.${String(t.getDate()).padStart(2,"0")}`
    }

    function C({
        isDark: e
    }) {
        let t = e ? "#3d2e22" : "#e8e0d0";
        return (0, r.jsxs)("div", {
            style: {
                display: "flex",
                gap: "16px",
                padding: "18px 0",
                borderBottom: `1px solid ${t}`,
                animation: "skpulse 1.5s ease-in-out infinite"
            },
            children: [(0, r.jsx)("div", {
                style: {
                    width: "3px",
                    borderRadius: "2px",
                    background: t,
                    flexShrink: 0
                }
            }), (0, r.jsxs)("div", {
                style: {
                    flex: 1
                },
                children: [(0, r.jsx)("div", {
                    style: {
                        height: "11px",
                        width: "56px",
                        borderRadius: "4px",
                        background: e ? "#2e2218" : "#e4ddd0",
                        marginBottom: "10px"
                    }
                }), (0, r.jsx)("div", {
                    style: {
                        height: "18px",
                        width: "70%",
                        borderRadius: "4px",
                        background: e ? "#261c14" : "#ddd6c8",
                        marginBottom: "8px"
                    }
                }), (0, r.jsx)("div", {
                    style: {
                        height: "12px",
                        width: "100%",
                        borderRadius: "4px",
                        background: e ? "#2e2218" : "#e8e2d8"
                    }
                })]
            })]
        })
    }

    function z({
        result: e,
        query: t,
        index: i,
        onClose: a,
        s: l,
        isDark: s
    }) {
        var c;
        let [p, u] = (0, n.useState)(!1), f = "product" === e._type && !!e.lemonSqueezyUrl && !e.isComingSoon, h = f ? e.lemonSqueezyUrl ? ? "/shop" : "article" === e._type || "video" === e._type ? `/content/${e.slug}` : "series" === e._type ? `/courses/${e.slug}` : "quiz" === e._type ? `/quiz/${e.slug}` : "/shop", y = "article" === e._type ? "#c9845a" : "video" === e._type ? "podcast" === e.format ? "#7a9e7e" : "#5a8ec9" : "series" === e._type ? "#9a6b3a" : "quiz" === e._type ? "#b07ab8" : "#c9845a", x = l.typeIcon(e), g = l.typeLabel(e), b = (c = "series" === e._type ? e.description ? ? e.subtitle ? ? "" : "quiz" === e._type ? e.tagline ? ? e.description ? ? "" : e.excerpt ? ? "") ? c.length > 88 ? c.slice(0, 88) + "…" : c : "", v = S(e.title, t, s), j = S(b, t, s), C = s ? "#2e2218" : "#ede5d8", _ = s ? "#3d2e22" : "#cdc5b5", T = p ? y : s ? "#ede8df" : "#1e1410", M = s ? "#9a8c7e" : "#5c5248", L = s ? "#5a4e44" : "#c0b8a8", E = s ? "#9a8c7e" : "#6e6357", $ = s ? "#5a4e44" : "#b8b0a4", R = s ? "#d4916a" : "#c9845a", I = [];
        "article" === e._type && (e.categoryTitle && I.push((0, r.jsx)("span", {
            style: {
                color: s ? "#b8844a" : "#9a6b3a"
            },
            children: e.categoryTitle
        }, "cat")), e.publishedAt && I.push((0, r.jsx)("span", {
            style: {
                fontFamily: "monospace",
                fontSize: "11px"
            },
            children: w(e.publishedAt)
        }, "date")), e.readTime && I.push((0, r.jsx)("span", {
            children: l.readMin(e.readTime)
        }, "read"))), "video" === e._type && (e.seriesTitle && I.push((0, r.jsx)("span", {
            style: {
                color: s ? "#b8844a" : "#9a6b3a"
            },
            children: e.seriesTitle
        }, "series")), e.publishedAt && I.push((0, r.jsx)("span", {
            style: {
                fontFamily: "monospace",
                fontSize: "11px"
            },
            children: w(e.publishedAt)
        }, "date")), e.duration && I.push((0, r.jsx)("span", {
            children: l.durationMin(e.duration)
        }, "dur"))), "series" === e._type && e.status && I.push((0, r.jsx)("span", {
            style: {
                color: s ? "#b8844a" : "#9a6b3a"
            },
            children: l.statusLabel(e.status)
        }, "status")), "quiz" === e._type && (e.estimatedMinutes && I.push((0, r.jsxs)("span", {
            children: [e.estimatedMinutes, " 分钟"]
        }, "min")), e.dimensionCount && I.push((0, r.jsxs)("span", {
            children: [e.dimensionCount, " 维度"]
        }, "dim"))), "product" === e._type && (e.isComingSoon ? I.push((0, r.jsx)("span", {
            style: {
                color: s ? "#b8844a" : "#9a6b3a"
            },
            children: l.comingSoon
        }, "soon")) : e.price && I.push((0, r.jsx)("span", {
            style: {
                color: R,
                fontWeight: 500,
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "14px"
            },
            children: function(e) {
                if (void 0 === e.price || null === e.price) return "";
                let t = String(e.price).replace(/[^\d.]/g, "");
                return t ? `$${t}` : ""
            }(e)
        }, "price")));
        let F = (0, r.jsxs)("div", {
            onMouseEnter: () => u(!0),
            onMouseLeave: () => u(!1),
            style: {
                display: "flex",
                gap: "14px",
                margin: "0 -24px",
                padding: "16px 24px",
                borderBottom: `1px solid ${_}`,
                cursor: "pointer",
                background: p ? C : "transparent",
                transition: "background 0.18s ease"
            },
            children: [(0, r.jsx)("div", {
                style: {
                    width: "3px",
                    borderRadius: "2px",
                    flexShrink: 0,
                    background: p ? y : `${y}30`,
                    transition: "background 0.2s ease",
                    alignSelf: "stretch",
                    minHeight: "100%"
                }
            }), (0, r.jsxs)("div", {
                style: {
                    flex: 1,
                    minWidth: 0
                },
                children: [(0, r.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginBottom: "6px"
                    },
                    children: [(0, r.jsx)(x, {
                        size: 12,
                        strokeWidth: 1.8,
                        style: {
                            color: y,
                            flexShrink: 0
                        }
                    }), (0, r.jsx)("span", {
                        style: {
                            fontSize: "12px",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: y,
                            fontFamily: "'Cormorant Garamond', Georgia, serif"
                        },
                        children: g
                    }), I.length > 0 && (0, r.jsx)("span", {
                        style: {
                            fontSize: "11px",
                            color: L
                        },
                        children: "·"
                    }), I.map((e, t) => (0, r.jsx)("span", {
                        style: {
                            fontSize: "13px",
                            color: E
                        },
                        children: e
                    }, t)).reduce((e, t, n) => 0 === n ? [t] : [...e, (0, r.jsx)("span", {
                        style: {
                            fontSize: "11px",
                            color: L
                        },
                        children: "·"
                    }, `dot-${n}`), t], [])]
                }), (0, r.jsx)("h3", {
                    style: {
                        margin: "0 0 6px",
                        fontSize: "16px",
                        lineHeight: 1.45,
                        fontWeight: 500,
                        color: T,
                        fontFamily: "'Noto Serif SC', serif",
                        transition: "color 0.2s ease"
                    },
                    dangerouslySetInnerHTML: {
                        __html: v
                    }
                }), (0, r.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        gap: "12px"
                    },
                    children: [b && (0, r.jsx)("p", {
                        style: {
                            margin: 0,
                            fontSize: "12.5px",
                            lineHeight: 1.65,
                            color: M,
                            flex: 1,
                            fontFamily: "'Noto Serif SC', serif"
                        },
                        dangerouslySetInnerHTML: {
                            __html: j
                        }
                    }), (0, r.jsxs)("div", {
                        style: {
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            gap: "3px"
                        },
                        children: [f && !p && (0, r.jsx)("span", {
                            style: {
                                fontSize: "10px",
                                color: $
                            },
                            children: l.externalHint
                        }), f ? (0, r.jsx)(k, {
                            size: 12,
                            strokeWidth: 1.5,
                            style: {
                                color: p ? y : "transparent",
                                transition: "color 0.2s ease"
                            }
                        }) : (0, r.jsx)(m.ArrowRight, {
                            size: 12,
                            strokeWidth: 1.5,
                            style: {
                                color: p ? y : "transparent",
                                transition: "color 0.2s ease"
                            }
                        })]
                    })]
                })]
            })]
        });
        return (0, r.jsx)(d.motion.div, {
            initial: {
                opacity: 0,
                y: 6
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .2,
                delay: .04 * i,
                ease: "easeOut"
            },
            children: f ? (0, r.jsx)("a", {
                href: h,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: a,
                style: {
                    textDecoration: "none",
                    display: "block"
                },
                children: F
            }) : (0, r.jsx)(o.default, {
                href: h,
                onClick: a,
                style: {
                    textDecoration: "none",
                    display: "block"
                },
                children: F
            })
        })
    }

    function _({
        isOpen: e,
        onClose: t
    }) {
        let o = j[(0, l.useLang)().lang ? ? "zh-Hans"] ? ? j["zh-Hans"],
            {
                theme: i
            } = (0, a.useTheme)(),
            s = "dark" === i,
            [f, h] = (0, n.useState)(""),
            [y, x] = (0, n.useState)([]),
            [g, m] = (0, n.useState)(!1),
            [b, k] = (0, n.useState)(!1),
            v = (0, n.useRef)(null),
            S = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
            e ? setTimeout(() => v.current ? .focus(), 60) : (h(""), x([]), m(!1), k(!1))
        }, [e]), (0, n.useEffect)(() => {
            let r = e => {
                "Escape" === e.key && t()
            };
            return e && window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r)
        }, [e, t]), (0, n.useEffect)(() => (document.body.style.overflow = e ? "hidden" : "", () => {
            document.body.style.overflow = ""
        }), [e]);
        let w = (0, n.useCallback)(e => {
                if (S.current && clearTimeout(S.current), e.trim().length < 1) {
                    x([]), m(!1), k(!1);
                    return
                }
                m(!0), k(!1), S.current = setTimeout(async () => {
                    try {
                        let t = await fetch(`/api/search?query=${encodeURIComponent(e.trim())}`),
                            r = await t.json();
                        x(r.results ? ? [])
                    } catch {
                        x([])
                    } finally {
                        m(!1), k(!0)
                    }
                }, 300)
            }, []),
            T = b && !g && 0 === y.length && f.trim().length > 0,
            M = !g && y.length > 0,
            L = s ? "#261c14" : "#faf7f2",
            E = s ? "#d4916a" : "#c9845a",
            $ = s ? "#3d2e22" : "#e8e0d0",
            R = s ? "rgba(12, 8, 5, 0.85)" : "rgba(44, 31, 20, 0.72)",
            I = s ? "#ede8df" : "#2c1f14",
            F = s ? "#d4916a" : "#c9845a",
            P = s ? "#d4916a" : "#c9845a",
            A = s ? "#9a8c7e" : "#8a7d6e",
            B = s ? "#ede8df" : "#2c1f14",
            O = s ? "#5a4e44" : "#b8b0a4",
            D = s ? "#9a8c7e" : "#8a7d6e",
            W = s ? "#5a4e44" : "#b8b0a4",
            N = s ? "#5a4e44" : "#b8b0a4",
            U = s ? "#3d2e22" : "#e8e0d0",
            H = s ? "#3d2e22 transparent" : "#d8d0c0 transparent",
            q = s ? "0 24px 80px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)" : "0 24px 80px rgba(44,31,20,0.28), 0 4px 16px rgba(44,31,20,0.12)";
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("style", {
                children: `
        @keyframes skpulse { 0%,100%{opacity:1} 50%{opacity:0.45} }
      `
            }), (0, r.jsx)(c.AnimatePresence, {
                children: e && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(d.motion.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: .25
                        },
                        onClick: t,
                        style: {
                            position: "fixed",
                            inset: 0,
                            zIndex: 200,
                            background: R,
                            backdropFilter: "blur(4px)",
                            WebkitBackdropFilter: "blur(4px)"
                        },
                        "aria-hidden": "true"
                    }, "backdrop"), (0, r.jsx)(d.motion.div, {
                        initial: {
                            opacity: 0,
                            y: -16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -10
                        },
                        transition: {
                            duration: .24,
                            ease: [.22, 1, .36, 1]
                        },
                        onClick: e => e.stopPropagation(),
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            zIndex: 201,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            padding: "0 16px",
                            paddingTop: "clamp(48px, 8vh, 96px)",
                            pointerEvents: "none"
                        },
                        children: (0, r.jsx)("div", {
                            style: {
                                width: "100%",
                                maxWidth: "680px",
                                pointerEvents: "all"
                            },
                            children: (0, r.jsxs)("div", {
                                style: {
                                    background: L,
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    boxShadow: q,
                                    borderTop: `3px solid ${E}`,
                                    transition: "background 0.3s ease"
                                },
                                children: [(0, r.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "14px",
                                        padding: "20px 24px",
                                        borderBottom: `1px solid ${$}`,
                                        transition: "border-color 0.3s ease"
                                    },
                                    children: [(0, r.jsx)(p.Search, {
                                        size: 18,
                                        strokeWidth: 1.5,
                                        style: {
                                            color: P,
                                            flexShrink: 0
                                        }
                                    }), (0, r.jsx)("input", {
                                        ref: v,
                                        type: "text",
                                        value: f,
                                        onChange: e => {
                                            let t = e.target.value;
                                            h(t), w(t)
                                        },
                                        placeholder: o.placeholder,
                                        autoComplete: "off",
                                        spellCheck: !1,
                                        style: {
                                            flex: 1,
                                            background: "transparent",
                                            border: "none",
                                            outline: "none",
                                            fontSize: "17px",
                                            color: I,
                                            caretColor: F,
                                            fontFamily: "'Noto Serif SC', serif",
                                            fontWeight: 300,
                                            transition: "color 0.3s ease"
                                        }
                                    }), f ? (0, r.jsx)("button", {
                                        onClick: () => {
                                            h(""), x([]), k(!1), v.current ? .focus()
                                        },
                                        style: {
                                            flexShrink: 0,
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            padding: "4px",
                                            color: A,
                                            display: "flex",
                                            alignItems: "center",
                                            borderRadius: "50%",
                                            transition: "color 0.2s ease"
                                        },
                                        onMouseEnter: e => e.currentTarget.style.color = B,
                                        onMouseLeave: e => e.currentTarget.style.color = A,
                                        "aria-label": "清空",
                                        children: (0, r.jsx)(u.X, {
                                            size: 15,
                                            strokeWidth: 1.5
                                        })
                                    }) : (0, r.jsx)("span", {
                                        style: {
                                            flexShrink: 0,
                                            fontSize: "11px",
                                            color: O,
                                            fontFamily: "monospace",
                                            userSelect: "none"
                                        },
                                        "aria-hidden": "true",
                                        children: "ESC"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    style: {
                                        maxHeight: "clamp(300px, 55vh, 520px)",
                                        overflowY: "auto",
                                        padding: "0 24px",
                                        scrollbarWidth: "thin",
                                        scrollbarColor: H
                                    },
                                    children: [g && (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)(C, {
                                            isDark: s
                                        }), (0, r.jsx)(C, {
                                            isDark: s
                                        }), (0, r.jsx)(C, {
                                            isDark: s
                                        })]
                                    }), M && (0, r.jsxs)(d.motion.div, {
                                        initial: "hidden",
                                        animate: "visible",
                                        variants: {
                                            hidden: {},
                                            visible: {
                                                transition: {
                                                    staggerChildren: .04
                                                }
                                            }
                                        },
                                        children: [(0, r.jsx)("div", {
                                            style: {
                                                padding: "14px 0 2px",
                                                fontSize: "11px",
                                                color: N,
                                                letterSpacing: "0.05em",
                                                fontFamily: "monospace",
                                                display: "flex",
                                                justifyContent: "flex-end"
                                            },
                                            children: o.resultCount(y.length)
                                        }), y.map((e, n) => (0, r.jsx)(z, {
                                            result: e,
                                            query: f,
                                            index: n,
                                            onClose: t,
                                            s: o,
                                            isDark: s
                                        }, e._id)), (0, r.jsx)("div", {
                                            style: {
                                                height: "16px"
                                            }
                                        })]
                                    }), T && (0, r.jsxs)("div", {
                                        style: {
                                            padding: "48px 0 40px",
                                            textAlign: "center"
                                        },
                                        children: [(0, r.jsx)("div", {
                                            style: {
                                                fontSize: "64px",
                                                lineHeight: 1,
                                                color: U,
                                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                                marginBottom: "12px",
                                                userSelect: "none"
                                            },
                                            children: "？"
                                        }), (0, r.jsx)("p", {
                                            style: {
                                                margin: 0,
                                                fontSize: "14px",
                                                color: D,
                                                fontFamily: "'Noto Serif SC', serif"
                                            },
                                            children: o.noResults
                                        })]
                                    }), !f && !g && (0, r.jsxs)("div", {
                                        style: {
                                            padding: "36px 0 32px",
                                            textAlign: "center"
                                        },
                                        children: [(0, r.jsx)("p", {
                                            style: {
                                                margin: "0 0 8px",
                                                fontSize: "13px",
                                                color: D,
                                                fontFamily: "'Noto Serif SC', serif",
                                                letterSpacing: "0.03em"
                                            },
                                            children: o.hint
                                        }), (0, r.jsx)("p", {
                                            style: {
                                                margin: 0,
                                                fontSize: "11px",
                                                color: W,
                                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                                fontStyle: "italic",
                                                letterSpacing: "0.05em"
                                            },
                                            children: o.hintSub
                                        })]
                                    })]
                                })]
                            })
                        })
                    }, "panel")]
                })
            })]
        })
    }
    let T = [{
        href: "/content",
        hans: "内容",
        hant: "內容"
    }, {
        href: "/courses",
        hans: "课程",
        hant: "課程"
    }, {
        href: "/timeline",
        hans: "历史",
        hant: "歷史"
    }, {
        href: "/subjects",
        hans: "学科",
        hant: "學科"
    }, {
        href: "/quiz",
        hans: "自省",
        hant: "自省"
    }, {
        href: t.default.env.NEXT_PUBLIC_ZIDU_FORUM_URL || "https://www.zidu.app/plaza",
        hans: "论坛",
        hant: "論壇",
        external: !0
    }, {
        href: "/shop",
        hans: "APP",
        hant: "APP"
    }];

    function M({
        isOpen: e,
        onClose: t
    }) {
        let [o, i] = (0, n.useState)(""), [s, p] = (0, n.useState)("idle"), [f, h] = (0, n.useState)(""), {
            convert: y
        } = (0, l.useLang)(), {
            theme: x
        } = (0, a.useTheme)(), g = "dark" === x;
        (0, n.useEffect)(() => {
            if (!e) return;
            let r = e => {
                "Escape" === e.key && t()
            };
            return window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r)
        }, [e, t]), (0, n.useEffect)(() => (document.body.style.overflow = e ? "hidden" : "", () => {
            document.body.style.overflow = ""
        }), [e]);
        let m = (0, n.useCallback)(async () => {
                if (!o || !o.includes("@")) {
                    h(y("请输入有效的邮件地址")), p("error");
                    return
                }
                p("loading");
                try {
                    if ((await fetch("/api/subscribe", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: o
                            })
                        })).ok) p("success"), h(y("订阅成功！欢迎加入。")), i(""), setTimeout(t, 2200);
                    else throw Error("failed")
                } catch {
                    p("error"), h(y("出错了，请稍后再试。"))
                }
            }, [o, y, t]),
            b = g ? "#3d2e22" : "#d8d0c0",
            k = g ? "#ede8df" : "#2c1f14",
            v = "#8a7d6e",
            j = g ? "#d4916a" : "#c9845a";
        return (0, r.jsx)(c.AnimatePresence, {
            children: e && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(d.motion.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .25
                    },
                    onClick: t,
                    style: {
                        position: "fixed",
                        inset: 0,
                        zIndex: 200,
                        backgroundColor: g ? "rgba(0,0,0,0.72)" : "rgba(44,31,20,0.45)",
                        backdropFilter: "blur(4px)",
                        WebkitBackdropFilter: "blur(4px)"
                    }
                }, "overlay"), (0, r.jsx)(d.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 24,
                        scale: .97
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 16,
                        scale: .97
                    },
                    transition: {
                        duration: .3,
                        ease: [.22, 1, .36, 1]
                    },
                    style: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 201,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "1rem",
                        pointerEvents: "none"
                    },
                    children: (0, r.jsxs)("div", {
                        onClick: e => e.stopPropagation(),
                        style: {
                            position: "relative",
                            width: "min(560px, calc(100vw - 2rem))",
                            pointerEvents: "all",
                            backgroundColor: g ? "#221a12" : "#ffffff",
                            borderRight: `1px solid ${b}`,
                            borderBottom: `1px solid ${b}`,
                            borderLeft: `1px solid ${b}`,
                            borderTop: `3px solid ${j}`,
                            borderRadius: "4px",
                            padding: "clamp(2rem, 5vw, 3rem)",
                            boxShadow: g ? "0 32px 64px rgba(0,0,0,0.6)" : "0 24px 48px rgba(44,31,20,0.18)"
                        },
                        children: [(0, r.jsx)("button", {
                            onClick: t,
                            "aria-label": "关闭",
                            style: {
                                position: "absolute",
                                top: "1.25rem",
                                right: "1.25rem",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: v,
                                padding: "0.25rem",
                                transition: "color 0.2s"
                            },
                            onMouseEnter: e => e.currentTarget.style.color = k,
                            onMouseLeave: e => e.currentTarget.style.color = v,
                            children: (0, r.jsx)(u.X, {
                                size: 18
                            })
                        }), (0, r.jsx)("p", {
                            style: {
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontSize: "0.8rem",
                                fontStyle: "italic",
                                color: j,
                                letterSpacing: "0.08em",
                                marginBottom: "0.75rem"
                            },
                            children: "Newsletter"
                        }), (0, r.jsx)("h2", {
                            style: {
                                fontFamily: 'var(--font-display), "Noto Serif SC", serif',
                                fontSize: "clamp(1.4rem, 3vw, 1.75rem)",
                                fontWeight: 500,
                                color: k,
                                lineHeight: 1.3,
                                marginBottom: "0.6rem"
                            },
                            children: y("加入 2,000+ 位深度阅读者")
                        }), (0, r.jsx)("p", {
                            style: {
                                fontSize: "0.9rem",
                                color: v,
                                lineHeight: 1.7,
                                marginBottom: "2rem"
                            },
                            children: y("每周最少一次，收到新内容摘要与思考")
                        }), "success" === s ? (0, r.jsx)(d.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            style: {
                                textAlign: "center",
                                padding: "1.5rem 0",
                                color: j,
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontSize: "1rem",
                                fontStyle: "italic",
                                letterSpacing: "0.04em"
                            },
                            children: f
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: "0.75rem",
                                    flexWrap: "wrap"
                                },
                                children: [(0, r.jsx)("input", {
                                    type: "email",
                                    value: o,
                                    onChange: e => {
                                        i(e.target.value), h("")
                                    },
                                    onKeyDown: e => {
                                        "Enter" === e.key && m()
                                    },
                                    placeholder: y("您的电子邮件"),
                                    disabled: "loading" === s,
                                    style: {
                                        flex: "1 1 200px",
                                        padding: "0.75rem 1rem",
                                        backgroundColor: g ? "#2a1f15" : "#f8f4ee",
                                        border: `1px solid ${"error"===s?"#c0614a":b}`,
                                        borderRadius: "2px",
                                        color: k,
                                        fontSize: "0.9rem",
                                        letterSpacing: "0.02em",
                                        outline: "none",
                                        transition: "border-color 0.2s",
                                        fontFamily: "inherit"
                                    },
                                    onFocus: e => e.target.style.borderColor = j,
                                    onBlur: e => e.target.style.borderColor = "error" === s ? "#c0614a" : b
                                }), (0, r.jsx)("button", {
                                    onClick: m,
                                    disabled: "loading" === s,
                                    style: {
                                        padding: "0.75rem 1.75rem",
                                        backgroundColor: j,
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "2px",
                                        fontSize: "0.9rem",
                                        letterSpacing: "0.12em",
                                        cursor: "loading" === s ? "wait" : "pointer",
                                        fontFamily: "inherit",
                                        transition: "background-color 0.2s, opacity 0.2s",
                                        opacity: "loading" === s ? .7 : 1,
                                        whiteSpace: "nowrap"
                                    },
                                    onMouseEnter: e => {
                                        "loading" !== s && (e.currentTarget.style.backgroundColor = g ? "#c4815a" : "#b5733e")
                                    },
                                    onMouseLeave: e => {
                                        e.currentTarget.style.backgroundColor = j
                                    },
                                    children: "loading" === s ? "…" : y("订阅")
                                })]
                            }), "error" === s && f && (0, r.jsx)("p", {
                                style: {
                                    fontSize: "0.8rem",
                                    color: "#c0614a",
                                    marginTop: "0.5rem"
                                },
                                children: f
                            }), (0, r.jsx)("p", {
                                style: {
                                    fontSize: "0.78rem",
                                    color: v,
                                    marginTop: "1rem",
                                    letterSpacing: "0.02em"
                                },
                                children: y("不发广告，随时可退订")
                            })]
                        })]
                    })
                }, "modal")]
            })
        })
    }

    function L({
        href: e,
        children: t,
        external: i,
        isDark: a
    }) {
        let [l, s] = (0, n.useState)(!1);
        return (0, r.jsx)(o.default, {
            href: e,
            target: i ? "_blank" : void 0,
            rel: i ? "noopener noreferrer" : void 0,
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            style: {
                color: l ? a ? "#ede8df" : "#5a4f43" : a ? "#9a8c7e" : "#8a7d6e",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                transition: "color 0.3s ease",
                textDecoration: "none"
            },
            children: t
        })
    }
    e.s(["default", 0, function() {
        let {
            theme: e
        } = (0, a.useTheme)(), t = "dark" === e, {
            lang: d
        } = (0, l.useLang)(), c = (0, i.usePathname)(), [p, u] = (0, n.useState)(!1), [f, h] = (0, n.useState)(!1), [y, x] = (0, n.useState)(!1), [g, m] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
            x(!0)
        }, []), (0, n.useEffect)(() => {
            let e = () => u(window.scrollY > 20);
            return window.addEventListener("scroll", e, {
                passive: !0
            }), () => window.removeEventListener("scroll", e)
        }, []), (0, n.useEffect)(() => {
            h(!1)
        }, [c]);
        let b = (0, n.useCallback)(() => {
                let e = t ? "light" : "dark";
                localStorage.setItem("theme", e), document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(e), window.location.reload()
            }, [t]),
            k = (0, n.useCallback)(e => {
                e !== d && (localStorage.setItem("lang", e), window.location.reload())
            }, [d]),
            v = t ? "#1c1510" : "#faf7f2",
            j = t ? "#3d2e22" : "#ddd5c8",
            S = t ? "#ede8df" : "#2c1f14",
            w = t ? "#9a8c7e" : "#8a7d6e",
            C = t ? "#d4916a" : "#c9845a",
            z = e => "zh-Hant" === d ? e.hant : e.hans,
            M = e => c === e || "/" !== e && c.startsWith(e);
        return y ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("header", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    height: "64px",
                    backgroundColor: p ? t ? "rgba(28,21,16,0.95)" : "rgba(250,247,242,0.95)" : v,
                    borderBottom: `1px solid ${p?j:"transparent"}`,
                    backdropFilter: p ? "blur(12px)" : "none",
                    transition: "background-color 0.3s ease, border-color 0.3s ease"
                },
                children: (0, r.jsxs)("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto",
                        padding: "0 clamp(1.5rem, 5vw, 3rem)",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [(0, r.jsx)(o.default, {
                        href: "/",
                        style: {
                            textDecoration: "none"
                        },
                        children: (0, r.jsx)("span", {
                            style: {
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontStyle: "italic",
                                fontSize: "1.05rem",
                                color: S,
                                letterSpacing: "0.04em",
                                transition: "color 0.2s ease"
                            },
                            children: "Angelo Wong"
                        })
                    }), (0, r.jsx)("nav", {
                        className: "desktop-only",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.1rem"
                        },
                        children: T.map(e => (0, r.jsx)(o.default, {
                            href: e.href,
                            target: e.external ? "_blank" : void 0,
                            rel: e.external ? "noopener noreferrer" : void 0,
                            style: {
                                padding: "0.4rem 0.75rem",
                                fontSize: "0.82rem",
                                letterSpacing: "0.06em",
                                color: M(e.href) ? C : w,
                                textDecoration: "none",
                                borderBottom: `1px solid ${M(e.href)?C:"transparent"}`,
                                transition: "color 0.2s ease, border-color 0.2s ease"
                            },
                            onMouseEnter: t => {
                                M(e.href) || (t.currentTarget.style.color = S)
                            },
                            onMouseLeave: t => {
                                M(e.href) || (t.currentTarget.style.color = w)
                            },
                            children: z(e)
                        }, e.href))
                    }), (0, r.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem"
                        },
                        children: [(0, r.jsx)(s.default, {
                            onOpen: () => m(!0)
                        }), (0, r.jsx)("div", {
                            style: {
                                display: "flex",
                                gap: "1px",
                                padding: "2px",
                                border: `1px solid ${j}`,
                                borderRadius: "3px"
                            },
                            children: ["zh-Hans", "zh-Hant"].map(e => (0, r.jsx)("button", {
                                onClick: () => k(e),
                                style: {
                                    padding: "0.2rem 0.45rem",
                                    fontSize: "0.68rem",
                                    background: d === e ? C : "transparent",
                                    color: d === e ? t ? "#1c1510" : "#faf7f2" : w,
                                    border: "none",
                                    borderRadius: "2px",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease"
                                },
                                children: "zh-Hans" === e ? "简" : "繁"
                            }, e))
                        }), (0, r.jsx)("button", {
                            onClick: b,
                            "aria-label": "Toggle theme",
                            style: {
                                width: "32px",
                                height: "32px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "transparent",
                                border: `1px solid ${j}`,
                                borderRadius: "3px",
                                cursor: "pointer",
                                color: w,
                                fontSize: "0.9rem",
                                transition: "all 0.2s ease"
                            },
                            onMouseEnter: e => {
                                e.currentTarget.style.borderColor = C, e.currentTarget.style.color = C
                            },
                            onMouseLeave: e => {
                                e.currentTarget.style.borderColor = j, e.currentTarget.style.color = w
                            },
                            children: t ? "☀" : "☽"
                        }), (0, r.jsx)("button", {
                            className: "mobile-only",
                            onClick: () => h(e => !e),
                            "aria-label": "Menu",
                            style: {
                                width: "32px",
                                height: "32px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "5px",
                                background: "transparent",
                                border: `1px solid ${j}`,
                                borderRadius: "3px",
                                cursor: "pointer"
                            },
                            children: [0, 1, 2].map(e => (0, r.jsx)("span", {
                                style: {
                                    width: "14px",
                                    height: "1px",
                                    background: w,
                                    display: "block",
                                    transform: f ? 0 === e ? "rotate(45deg) translate(4px, 4px)" : 2 === e ? "rotate(-45deg) translate(4px, -4px)" : "none" : "none",
                                    opacity: f && 1 === e ? 0 : 1,
                                    transition: "transform 0.25s ease, opacity 0.25s ease"
                                }
                            }, e))
                        })]
                    })]
                })
            }), f && (0, r.jsx)("div", {
                className: "mobile-only",
                onClick: () => h(!1),
                style: {
                    position: "fixed",
                    top: "64px",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 99,
                    backgroundColor: v,
                    borderTop: `1px solid ${j}`,
                    padding: "1.5rem clamp(1.5rem, 5vw, 3rem)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                    overflowY: "auto"
                },
                children: T.map(e => (0, r.jsxs)(o.default, {
                    href: e.href,
                    target: e.external ? "_blank" : void 0,
                    rel: e.external ? "noopener noreferrer" : void 0,
                    style: {
                        padding: "0.875rem 0",
                        fontSize: "1rem",
                        letterSpacing: "0.06em",
                        color: M(e.href) ? C : S,
                        textDecoration: "none",
                        borderBottom: `1px solid ${j}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [z(e), (0, r.jsx)("span", {
                        style: {
                            color: M(e.href) ? C : w
                        },
                        children: "→"
                    })]
                }, e.href))
            }), (0, r.jsx)("div", {
                style: {
                    height: "64px"
                }
            }), (0, r.jsx)(_, {
                isOpen: g,
                onClose: () => m(!1)
            })]
        }) : (0, r.jsx)("header", {
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                height: "64px",
                backgroundColor: v
            }
        })
    }], 342724);
    let E = t.default.env.NEXT_PUBLIC_ZIDU_FORUM_URL || "https://www.zidu.app/plaza";

    function $({
        isDark: e,
        onClick: t
    }) {
        let [o, i] = (0, n.useState)(!1);
        return (0, r.jsx)("button", {
            onClick: t,
            onMouseEnter: () => i(!0),
            onMouseLeave: () => i(!1),
            style: {
                background: "none",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                cursor: "pointer",
                padding: 0,
                paddingBottom: "1px",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                color: o ? e ? "#c4815a" : "#b5733e" : e ? "#d4916a" : "#c9845a",
                borderBottom: `1px solid ${e?"#d4916a55":"#c9845a55"}`,
                transition: "color 0.3s ease, border-color 0.3s ease",
                fontFamily: "inherit"
            },
            children: "订阅通讯"
        })
    }
    e.s(["default", 0, function() {
        let {
            theme: e
        } = (0, a.useTheme)(), {
            convert: t
        } = (0, l.useLang)(), o = "dark" === e, [i, s] = (0, n.useState)(!1), d = (0, n.useCallback)(() => s(!0), []), c = (0, n.useCallback)(() => s(!1), []);
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("footer", {
                style: {
                    padding: "clamp(2rem, 4vw, 2.5rem) clamp(1.5rem, 5vw, 3rem)",
                    borderTop: `1px solid ${o?"#3d2e22":"#ddd5c8"}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem",
                    backgroundColor: o ? "#1c1510" : "#faf7f2",
                    transition: "background-color 0.3s ease, border-color 0.3s ease"
                },
                children: [(0, r.jsx)("span", {
                    style: {
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontStyle: "italic",
                        color: o ? "#9a8c7e" : "#8a7d6e",
                        fontSize: "0.9rem",
                        letterSpacing: "0.05em",
                        transition: "color 0.3s ease"
                    },
                    children: "Angelo Wong"
                }), (0, r.jsxs)("div", {
                    style: {
                        display: "flex",
                        gap: "2rem",
                        flexWrap: "wrap",
                        alignItems: "center"
                    },
                    children: [(0, r.jsx)(L, {
                        href: "https://www.youtube.com/@AngeloWongX",
                        external: !0,
                        isDark: o,
                        children: "YouTube"
                    }), (0, r.jsx)(L, {
                        href: "/content",
                        isDark: o,
                        children: t("内容")
                    }), (0, r.jsx)(L, {
                        href: "/courses",
                        isDark: o,
                        children: t("课程")
                    }), (0, r.jsx)(L, {
                        href: "/timeline",
                        isDark: o,
                        children: t("历史")
                    }), (0, r.jsx)(L, {
                        href: "/subjects",
                        isDark: o,
                        children: t("学科")
                    }), (0, r.jsx)(L, {
                        href: "/quiz",
                        isDark: o,
                        children: t("自省")
                    }), (0, r.jsx)(L, {
                        href: E,
                        external: !0,
                        isDark: o,
                        children: t("论坛")
                    }), (0, r.jsx)(L, {
                        href: "/shop",
                        isDark: o,
                        children: t("APP")
                    }), (0, r.jsx)(L, {
                        href: "/about",
                        isDark: o,
                        children: t("关于")
                    }), (0, r.jsx)($, {
                        isDark: o,
                        onClick: d
                    })]
                })]
            }), (0, r.jsx)(M, {
                isOpen: i,
                onClose: c
            })]
        })
    }], 56691)
}]);