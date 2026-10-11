(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 977360, e => {
    "use strict";
    var r = e.i(843476),
        t = e.i(271645),
        o = e.i(522016),
        a = e.i(704401),
        i = e.i(493681),
        n = e.i(342724),
        l = e.i(56691);
    let s = "zidu-shelf",
        d = [{
            id: s,
            hans: "电子书",
            hant: "電子書"
        }, {
            id: "article",
            hans: "商业",
            hant: "商業"
        }, {
            id: "thinking",
            hans: "逻辑",
            hant: "邏輯"
        }, {
            id: "history",
            hans: "历史",
            hant: "歷史"
        }, {
            id: "bookreview",
            hans: "书评",
            hant: "書評"
        }, {
            id: "essay",
            hans: "散文与诗",
            hant: "散文與詩"
        }],
        c = [{
            light: "#c9845a",
            dark: "#d4916a"
        }, {
            light: "#a8874a",
            dark: "#c2a468"
        }, {
            light: "#b3697a",
            dark: "#c98a99"
        }, {
            light: "#6f8a80",
            dark: "#8fac9f"
        }, {
            light: "#6f7d99",
            dark: "#8fa0c2"
        }, {
            light: "#a85a45",
            dark: "#c47a63"
        }, {
            light: "#8a7a4a",
            dark: "#b0a06a"
        }, {
            light: "#8a6f8a",
            dark: "#ad91ad"
        }];

    function m({
        label: e,
        active: o,
        onClick: a,
        accentColor: i,
        mutedColor: n,
        borderColor: l
    }) {
        let [s, d] = (0, t.useState)(!1);
        return (0, r.jsx)("button", {
            onClick: a,
            onMouseEnter: () => d(!0),
            onMouseLeave: () => d(!1),
            style: {
                padding: "0.25rem 1rem",
                borderRadius: "100px",
                fontSize: "0.78rem",
                fontFamily: "var(--font-display), Georgia, serif",
                letterSpacing: "0.06em",
                border: `1px solid ${o||s?i:l}`,
                background: o ? i : "transparent",
                color: o ? "#faf7f2" : s ? i : n,
                cursor: "pointer",
                transition: "all 0.2s ease",
                lineHeight: "1.6"
            },
            children: e
        })
    }

    function p({
        item: e,
        isDark: a,
        convert: i,
        cardBg: n,
        cardBgHover: l,
        borderColor: s,
        accentColor: d,
        titleColor: m,
        mutedColor: h,
        tagBg: g
    }) {
        let [u, f] = (0, t.useState)(!1), x = "内容" !== i("内容") ? "zh-Hant" : "zh-Hans", b = "titleHant" in e && "zh-Hant" === x && e.titleHant ? e.titleHant : e.title ? ? "", y = "zh-Hant" === x && e.excerptHant ? e.excerptHant : e.excerpt ? ? "", v = function(e, r) {
            if (!e) return "";
            try {
                return new Date(e).toLocaleDateString("zh-Hant" === r ? "zh-TW" : "zh-CN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })
            } catch {
                return ""
            }
        }(e.publishedAt, x), k = e.tags ? ? [], j = `/content/${e.slug}`, w = function(e, r, t) {
            var o = e ? e.slug ? .current || e._id : t || "untagged";
            let a = 0;
            for (let e = 0; e < o.length; e++) a = 31 * a + o.charCodeAt(e) >>> 0;
            let i = c[a % c.length];
            return r ? i.dark : i.light
        }(k[0], a, e._id), C = u ? `${d}70` : s;
        return (0, r.jsxs)(o.default, {
            href: j,
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            style: {
                display: "block",
                position: "relative",
                overflow: "hidden",
                backgroundColor: u ? l : n,
                border: `1px solid ${C}`,
                borderRadius: "3px",
                padding: "clamp(1.25rem, 2.5vw, 1.75rem)",
                paddingLeft: w ? "clamp(1.5rem, 2.5vw, 2rem)" : "clamp(1.25rem, 2.5vw, 1.75rem)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: u ? a ? "0 4px 20px rgba(0,0,0,0.25)" : "0 4px 20px rgba(90,79,67,0.07)" : "none"
            },
            children: [w && (0, r.jsx)("div", {
                style: {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    background: w,
                    opacity: u ? .95 : .65,
                    transition: "opacity 0.3s ease"
                }
            }), k.length > 0 && (0, r.jsx)("div", {
                style: {
                    display: "flex",
                    gap: "0.4rem",
                    flexWrap: "wrap",
                    marginBottom: "0.875rem"
                },
                children: k.slice(0, 3).map((e, t) => {
                    let o = 0 === t && w;
                    return (0, r.jsx)("span", {
                        style: {
                            fontSize: "0.68rem",
                            padding: "0.1rem 0.5rem",
                            borderRadius: "2px",
                            background: o ? `${w}1f` : g,
                            color: o ? w : h,
                            border: `1px solid ${o?`${w}60`:s}`,
                            letterSpacing: "0.06em",
                            transition: "background 0.3s ease, border-color 0.3s ease, color 0.3s ease"
                        },
                        children: i(e.name.zhHans)
                    }, e._id)
                })
            }), (0, r.jsx)("h3", {
                style: {
                    fontSize: "clamp(1rem, 2vw, 1.15rem)",
                    fontWeight: 500,
                    color: m,
                    lineHeight: 1.65,
                    marginBottom: "0.6rem",
                    letterSpacing: "0.02em",
                    transition: "color 0.3s ease"
                },
                children: b
            }), y && (0, r.jsx)("p", {
                style: {
                    fontSize: "0.85rem",
                    color: h,
                    lineHeight: 1.75,
                    marginBottom: "1rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    transition: "color 0.3s ease"
                },
                children: y
            }), (0, r.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: "1rem",
                    fontSize: "0.75rem",
                    color: h,
                    alignItems: "center"
                },
                children: [v && (0, r.jsx)("span", {
                    children: v
                }), e.readTime && (0, r.jsxs)("span", {
                    children: [e.readTime, " ", i("分钟")]
                }), e.isPremium && (0, r.jsx)("span", {
                    style: {
                        color: d,
                        transition: "color 0.3s ease"
                    },
                    children: i("付费")
                })]
            })]
        })
    }

    function h({
        books: e,
        convert: t,
        cardBg: o,
        cardBgHover: a,
        borderColor: i,
        accentColor: n,
        titleColor: l,
        mutedColor: s
    }) {
        let d = "内容" !== t("内容") ? "zh-Hant" : "zh-Hans";
        return 0 === e.length ? (0, r.jsxs)("div", {
            children: [(0, r.jsx)("p", {
                style: {
                    color: s,
                    fontSize: "0.9rem",
                    letterSpacing: "0.08em",
                    lineHeight: 1.8
                },
                children: t("字渡书架接入中，稍后再来看看。")
            }), (0, r.jsx)("p", {
                style: {
                    marginTop: "0.5rem",
                    color: n,
                    fontSize: "0.82rem"
                },
                children: (0, r.jsx)("a", {
                    href: "https://zidu.app",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                        color: n,
                        textDecoration: "none",
                        borderBottom: `1px solid ${n}`
                    },
                    children: t("先去字渡看看")
                })
            })]
        }) : (0, r.jsx)("div", {
            style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
                gap: "clamp(1rem, 3vw, 1.75rem)"
            },
            children: e.map(e => {
                let t = "zh-Hant" === d && e.titleZhHant ? e.titleZhHant : e.title;
                return (0, r.jsxs)("a", {
                    href: e.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                        display: "block",
                        textDecoration: "none",
                        borderRadius: "3px",
                        overflow: "hidden",
                        backgroundColor: o,
                        border: `1px solid ${i}`,
                        transition: "background-color 0.3s ease, border-color 0.3s ease"
                    },
                    onMouseEnter: e => {
                        e.currentTarget.style.backgroundColor = a
                    },
                    onMouseLeave: e => {
                        e.currentTarget.style.backgroundColor = o
                    },
                    children: [(0, r.jsx)("div", {
                        style: {
                            position: "relative",
                            width: "100%",
                            aspectRatio: "2 / 3",
                            backgroundColor: i
                        },
                        children: (0, r.jsx)("img", {
                            src: e.coverImageUrl,
                            alt: t,
                            loading: "lazy",
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block"
                            }
                        })
                    }), (0, r.jsx)("div", {
                        style: {
                            padding: "0.7rem 0.85rem"
                        },
                        children: (0, r.jsx)("p", {
                            style: {
                                fontSize: "0.85rem",
                                color: l,
                                lineHeight: 1.5,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                            },
                            children: t
                        })
                    })]
                }, e.id)
            })
        })
    }
    e.s(["default", 0, function({
        articles: e,
        videos: o,
        podcasts: c,
        bookReviews: g,
        prosePoems: u,
        tags: f,
        awShelfBooks: x
    }) {
        let {
            convert: b
        } = (0, a.useLang)(), {
            theme: y
        } = (0, i.useTheme)(), v = "dark" === y, [k, j] = (0, t.useState)(s), [w, C] = (0, t.useState)("all"), S = v ? "#3d2e22" : "#ddd5c8", z = v ? "#d4916a" : "#c9845a", H = v ? "#ede8df" : "#1a1510", B = v ? "#9a8c7e" : "#8a7d6e", T = v ? "#261c14" : "#f0ebe0", W = v ? "#2e2218" : "#ede8dc", $ = v ? "#1c1510" : "#faf7f2", _ = (0, t.useMemo)(() => {
            switch (k) {
                case s:
                case "thinking":
                case "history":
                default:
                    return [];
                case "article":
                    return e;
                case "bookreview":
                    return g;
                case "essay":
                    return u
            }
        }, [k, e, o, c, g, u]), L = (0, t.useMemo)(() => f.filter(e => e.contentTypes ? .includes(k)), [f, k]), M = (0, t.useMemo)(() => "all" === w ? _ : _.filter(e => (e.tags ? ? []).some(e => e.slug ? .current === w)), [_, w]);
        return b("__lang__"), (0, r.jsxs)("main", {
            style: {
                minHeight: "100vh",
                backgroundColor: v ? "#1c1510" : "#faf7f2",
                transition: "background-color 0.3s ease"
            },
            children: [(0, r.jsx)(n.default, {}), (0, r.jsxs)("section", {
                style: {
                    padding: "clamp(8rem, 14vw, 11rem) clamp(1.5rem, 5vw, 3rem) clamp(3rem, 5vw, 4rem)",
                    borderBottom: `1px solid ${S}`,
                    transition: "border-color 0.3s ease"
                },
                children: [(0, r.jsx)("p", {
                    style: {
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontStyle: "italic",
                        color: z,
                        fontSize: "0.82rem",
                        letterSpacing: "0.22em",
                        marginBottom: "0.75rem",
                        transition: "color 0.3s ease"
                    },
                    children: "Content"
                }), (0, r.jsx)("h1", {
                    style: {
                        fontSize: "clamp(2rem, 5vw, 3.2rem)",
                        fontWeight: 300,
                        color: H,
                        letterSpacing: "0.04em",
                        lineHeight: 1.2,
                        transition: "color 0.3s ease"
                    },
                    children: b("内容")
                }), (0, r.jsx)("p", {
                    style: {
                        marginTop: "1rem",
                        color: B,
                        fontSize: "1rem",
                        maxWidth: "520px",
                        lineHeight: 1.8,
                        transition: "color 0.3s ease"
                    },
                    children: b("以文明为坐标，以思想为经纬。")
                })]
            }), (0, r.jsx)("section", {
                style: {
                    padding: "0 clamp(1.5rem, 5vw, 3rem)",
                    borderBottom: `1px solid ${S}`,
                    overflowX: "auto",
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    transition: "border-color 0.3s ease"
                },
                children: (0, r.jsx)("div", {
                    style: {
                        display: "flex",
                        minWidth: "max-content"
                    },
                    children: d.map(e => {
                        let t = k === e.id;
                        return (0, r.jsx)("button", {
                            onClick: () => {
                                j(e.id), C("all")
                            },
                            style: {
                                padding: "1rem 1.4rem",
                                fontSize: "0.9rem",
                                fontFamily: "var(--font-display), Georgia, serif",
                                background: "none",
                                borderTop: "none",
                                borderRight: "none",
                                borderLeft: "none",
                                borderBottom: `2px solid ${t?z:"transparent"}`,
                                marginBottom: "-1px",
                                cursor: "pointer",
                                color: t ? z : B,
                                whiteSpace: "nowrap",
                                transition: "color 0.2s, border-color 0.2s",
                                letterSpacing: "0.04em"
                            },
                            children: b(e.hans)
                        }, e.id)
                    })
                })
            }), L.length > 0 && (0, r.jsxs)("section", {
                style: {
                    padding: "1.1rem clamp(1.5rem, 5vw, 3rem)",
                    borderBottom: `1px solid ${S}`,
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                    transition: "border-color 0.3s ease"
                },
                children: [(0, r.jsx)(m, {
                    label: b("全部"),
                    active: "all" === w,
                    onClick: () => C("all"),
                    accentColor: z,
                    mutedColor: B,
                    borderColor: S
                }), L.map(e => (0, r.jsx)(m, {
                    label: b(e.name.zhHans),
                    active: w === e.slug ? .current,
                    onClick: () => C(e.slug ? .current),
                    accentColor: z,
                    mutedColor: B,
                    borderColor: S
                }, e._id))]
            }), (0, r.jsx)("section", {
                style: {
                    padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 3rem)",
                    maxWidth: "1200px"
                },
                children: k === s ? (0, r.jsx)(h, {
                    books: x,
                    convert: b,
                    cardBg: T,
                    cardBgHover: W,
                    borderColor: S,
                    accentColor: z,
                    titleColor: H,
                    mutedColor: B
                }) : 0 === M.length ? (0, r.jsx)("p", {
                    style: {
                        color: B,
                        fontSize: "0.9rem",
                        letterSpacing: "0.08em"
                    },
                    children: b("暂无内容，请在后台发布。")
                }) : (0, r.jsx)("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "1.25rem"
                    },
                    children: M.map(e => (0, r.jsx)(p, {
                        item: e,
                        isDark: v,
                        convert: b,
                        cardBg: T,
                        cardBgHover: W,
                        borderColor: S,
                        accentColor: z,
                        titleColor: H,
                        mutedColor: B,
                        tagBg: $
                    }, e._id))
                })
            }), (0, r.jsx)(l.default, {})]
        })
    }])
}]);