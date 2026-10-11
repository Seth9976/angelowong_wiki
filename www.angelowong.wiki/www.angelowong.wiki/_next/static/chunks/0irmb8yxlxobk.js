(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 387652, e => {
    "use strict";
    var t = e.i(271645),
        r = e.i(749652);
    let i = {
        some: 0,
        all: 1
    };
    e.s(["useInView", 0, function(e, {
        root: o,
        margin: a,
        amount: n,
        once: s = !1,
        initial: l = !1
    } = {}) {
        let [c, d] = (0, t.useState)(l);
        return (0, t.useEffect)(() => {
            if (!e.current || s && c) return;
            let t = {
                root: o && o.current || void 0,
                margin: a,
                amount: n
            };
            return function(e, t, {
                root: o,
                margin: a,
                amount: n = "some"
            } = {}) {
                let s = (0, r.resolveElements)(e),
                    l = new WeakMap,
                    c = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = l.get(e.target);
                            if (!!r !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let r = t(e.target, e);
                                    "function" == typeof r ? l.set(e.target, r) : c.unobserve(e.target)
                                } else "function" == typeof r && (r(e), l.delete(e.target))
                        })
                    }, {
                        root: o,
                        rootMargin: a,
                        threshold: "number" == typeof n ? n : i[n]
                    });
                return s.forEach(e => c.observe(e)), () => c.disconnect()
            }(e.current, () => (d(!0), s ? void 0 : () => d(!1)), t)
        }, [o, e, a, s, n]), c
    }], 387652)
}, 778917, e => {
    "use strict";
    let t = (0, e.i(475254).default)("external-link", [
        ["path", {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }],
        ["path", {
            d: "M10 14 21 3",
            key: "gplh6r"
        }],
        ["path", {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }]
    ]);
    e.s(["ExternalLink", 0, t], 778917)
}, 201703, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645),
        i = e.i(846932),
        o = e.i(387652),
        a = e.i(778917);
    let n = (0, e.i(475254).default)("circle", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]
    ]);
    var s = e.i(342724),
        l = e.i(56691),
        c = e.i(704401),
        d = e.i(493681);
    let m = {
        连载中: "#c9845a",
        更新中: "#c9845a",
        已完结: "#a8700a"
    };

    function p({
        series: e,
        index: s,
        isDark: l
    }) {
        let [d, f] = (0, r.useState)(!1), u = (0, r.useRef)(null), g = (0, o.useInView)(u, {
            once: !0,
            margin: "-40px"
        }), {
            convert: x
        } = (0, c.useLang)(), h = e.accentColor || (l ? "#d4916a" : "#c9845a"), y = m[e.status] || "#a8700a", b = e.youtubePlaylistUrl || "https://www.youtube.com/@AngeloWongX", v = d ? `${h}60` : l ? "#3d2e22" : "#ddd5c8", j = l ? "#3d2e22" : "#ddd5c8", w = l ? "#9a8c7e" : "#8a7d6e";
        return (0, t.jsxs)(i.motion.a, {
            ref: u,
            href: b,
            target: "_blank",
            rel: "noopener noreferrer",
            initial: {
                opacity: 0,
                x: -20
            },
            animate: g ? {
                opacity: 1,
                x: 0
            } : {},
            transition: {
                delay: .08 * s,
                duration: .6
            },
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            style: {
                display: "block",
                backgroundColor: d ? l ? "#2e2218" : "#f0ebe0" : l ? "#261c14" : "#faf7f2",
                border: `1px solid ${v}`,
                borderRadius: "3px",
                padding: "clamp(1.5rem, 3vw, 2rem)",
                cursor: "pointer",
                transition: "all 0.4s ease",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
                boxShadow: d ? l ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(90,79,67,0.08)" : "none"
            },
            children: [(0, t.jsx)("div", {
                style: {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    background: h,
                    opacity: d ? .9 : .35,
                    transition: "opacity 0.4s ease"
                }
            }), (0, t.jsxs)("div", {
                style: {
                    paddingLeft: "0.75rem"
                },
                children: [(0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "0.75rem"
                    },
                    children: [(0, t.jsx)("div", {
                        style: {
                            display: "flex",
                            gap: "0.6rem",
                            alignItems: "center",
                            flexWrap: "wrap"
                        },
                        children: (0, t.jsxs)("span", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.3rem",
                                fontSize: "0.72rem",
                                letterSpacing: "0.1em",
                                color: y,
                                border: `1px solid ${y}50`,
                                padding: "0.15rem 0.55rem",
                                borderRadius: "2px"
                            },
                            children: [(0, t.jsx)(n, {
                                size: 5,
                                fill: y,
                                color: y
                            }), x(e.status)]
                        })
                    }), (0, t.jsx)(a.ExternalLink, {
                        size: 14,
                        color: d ? l ? "#d4916a" : "#c9845a" : l ? "#9a8c7e" : "#8a7d6e",
                        style: {
                            flexShrink: 0,
                            transition: "color 0.3s ease"
                        }
                    })]
                }), (0, t.jsx)("h2", {
                    style: {
                        fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                        fontWeight: 500,
                        color: l ? "#ede8df" : "#1a1510",
                        letterSpacing: "0.04em",
                        marginBottom: "0.3rem",
                        transition: "color 0.3s ease"
                    },
                    children: x(e.title)
                }), e.subtitle && (0, t.jsx)("p", {
                    style: {
                        fontSize: "0.85rem",
                        color: l ? "#9a8c7e" : "#8a7d6e",
                        marginBottom: "0.9rem",
                        letterSpacing: "0.02em",
                        transition: "color 0.3s ease"
                    },
                    children: x(e.subtitle)
                }), e.description && (0, t.jsx)("p", {
                    style: {
                        fontSize: "0.9rem",
                        color: d ? l ? "#c8bfb4" : "#5a4f43" : l ? "#9a8c7e" : "#8a7d6e",
                        lineHeight: 1.75,
                        marginBottom: "1rem",
                        transition: "color 0.3s ease"
                    },
                    children: x(e.description)
                }), e.tags && e.tags.length > 0 && (0, t.jsx)("div", {
                    style: {
                        display: "flex",
                        gap: "0.5rem",
                        flexWrap: "wrap"
                    },
                    children: e.tags.map(e => (0, t.jsx)("span", {
                        style: {
                            fontSize: "0.7rem",
                            color: w,
                            border: `1px solid ${j}`,
                            padding: "0.1rem 0.45rem",
                            borderRadius: "2px",
                            letterSpacing: "0.06em",
                            transition: "color 0.3s ease, border-color 0.3s ease"
                        },
                        children: x(e)
                    }, e))
                })]
            })]
        })
    }
    e.s(["default", 0, function({
        series: e = []
    }) {
        let a = (0, r.useRef)(null),
            n = (0, o.useInView)(a, {
                once: !0
            }),
            {
                convert: m
            } = (0, c.useLang)(),
            {
                theme: f
            } = (0, d.useTheme)(),
            u = "dark" === f,
            g = u ? "#3d2e22" : "#ddd5c8";
        return (0, t.jsxs)("main", {
            style: {
                minHeight: "100vh",
                backgroundColor: u ? "#1c1510" : "#faf7f2",
                transition: "background-color 0.3s ease"
            },
            children: [(0, t.jsx)(s.default, {}), (0, t.jsx)("section", {
                ref: a,
                style: {
                    padding: "clamp(8rem, 14vw, 11rem) clamp(1.5rem, 5vw, 3rem) clamp(3rem, 5vw, 4rem)",
                    borderBottom: `1px solid ${g}`,
                    transition: "border-color 0.3s ease"
                },
                children: (0, t.jsxs)(i.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .7
                    },
                    children: [(0, t.jsx)("p", {
                        style: {
                            fontFamily: "var(--font-display), Georgia, serif",
                            fontStyle: "italic",
                            color: u ? "#d4916a" : "#c9845a",
                            fontSize: "0.82rem",
                            letterSpacing: "0.22em",
                            marginBottom: "0.75rem",
                            transition: "color 0.3s ease"
                        },
                        children: "Courses & Series"
                    }), (0, t.jsx)("h1", {
                        style: {
                            fontSize: "clamp(2rem, 5vw, 3.2rem)",
                            fontWeight: 300,
                            color: u ? "#ede8df" : "#1a1510",
                            letterSpacing: "0.04em",
                            lineHeight: 1.2,
                            transition: "color 0.3s ease"
                        },
                        children: m("系列课程")
                    }), (0, t.jsx)("p", {
                        style: {
                            marginTop: "1rem",
                            color: u ? "#c8bfb4" : "#5a4f43",
                            fontSize: "1rem",
                            maxWidth: "520px",
                            lineHeight: 1.8,
                            transition: "color 0.3s ease"
                        },
                        children: m("每一个系列都是一次完整的思想旅程。视频永久免费，在 YouTube 观看。")
                    })]
                })
            }), (0, t.jsx)("section", {
                style: {
                    padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                    maxWidth: "900px"
                },
                children: 0 === e.length ? (0, t.jsx)("p", {
                    style: {
                        color: u ? "#9a8c7e" : "#8a7d6e",
                        fontSize: "0.9rem",
                        letterSpacing: "0.1em"
                    },
                    children: m("暂无内容，请在后台发布课程系列。")
                }) : e.map((e, r) => (0, t.jsx)(p, {
                    series: e,
                    index: r,
                    isDark: u
                }, e._id))
            }), (0, t.jsx)(l.default, {})]
        })
    }], 201703)
}]);