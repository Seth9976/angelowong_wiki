(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 387652, e => {
    "use strict";
    var t = e.i(271645),
        i = e.i(749652);
    let r = {
        some: 0,
        all: 1
    };
    e.s(["useInView", 0, function(e, {
        root: n,
        margin: o,
        amount: a,
        once: l = !1,
        initial: s = !1
    } = {}) {
        let [c, d] = (0, t.useState)(s);
        return (0, t.useEffect)(() => {
            if (!e.current || l && c) return;
            let t = {
                root: n && n.current || void 0,
                margin: o,
                amount: a
            };
            return function(e, t, {
                root: n,
                margin: o,
                amount: a = "some"
            } = {}) {
                let l = (0, i.resolveElements)(e),
                    s = new WeakMap,
                    c = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let i = s.get(e.target);
                            if (!!i !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let i = t(e.target, e);
                                    "function" == typeof i ? s.set(e.target, i) : c.unobserve(e.target)
                                } else "function" == typeof i && (i(e), s.delete(e.target))
                        })
                    }, {
                        root: n,
                        rootMargin: o,
                        threshold: "number" == typeof a ? a : r[a]
                    });
                return l.forEach(e => c.observe(e)), () => c.disconnect()
            }(e.current, () => (d(!0), l ? void 0 : () => d(!1)), t)
        }, [n, e, o, l, a]), c
    }], 387652)
}, 503116, e => {
    "use strict";
    let t = (0, e.i(475254).default)("clock", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }]
    ]);
    e.s(["Clock", 0, t], 503116)
}, 207443, e => {
    "use strict";
    var t = e.i(843476),
        i = e.i(271645),
        r = e.i(846932),
        n = e.i(387652),
        o = e.i(522016),
        a = e.i(972520),
        l = e.i(431343),
        s = e.i(503116),
        c = e.i(810980),
        d = e.i(342724),
        m = e.i(56691),
        p = e.i(704401),
        x = e.i(493681),
        u = e.i(88653);
    let f = {
        "zh-TW": {
            defaultTitle: "加入 2,000+ 位深度閱讀者",
            defaultSubtitle: "每週最少一次，收到新內容摘要與思考",
            placeholder: "您的電子郵件",
            button: "訂閱",
            buttonLoading: "送出中…",
            success: "感謝訂閱！期待與您共同探索世界。",
            errorEmpty: "請輸入電子郵件",
            errorInvalid: "郵件格式不正確",
            privacy: "不發廣告，隨時可退訂"
        },
        "zh-CN": {
            defaultTitle: "加入 2,000+ 位深度阅读者",
            defaultSubtitle: "每周最少一次，收到新内容摘要与思考",
            placeholder: "您的电子邮件",
            button: "订阅",
            buttonLoading: "提交中…",
            success: "感谢订阅！期待与您共同探索世界。",
            errorEmpty: "请输入电子邮件",
            errorInvalid: "邮件格式不正确",
            privacy: "不发广告，随时可退订"
        }
    };

    function g({
        lang: e = "zh-TW",
        titleZhTW: n,
        titleZhCN: o,
        subtitleZhTW: a,
        subtitleZhCN: l,
        compact: s = !1
    }) {
        let [c, d] = (0, i.useState)(""), [m, p] = (0, i.useState)("idle"), [h, y] = (0, i.useState)(""), [b, v] = (0, i.useState)(!1), {
            theme: j
        } = (0, x.useTheme)(), S = "dark" === j, w = f[e], C = "zh-TW" === e ? n ? ? w.defaultTitle : o ? ? w.defaultTitle, k = "zh-TW" === e ? a ? ? w.defaultSubtitle : l ? ? w.defaultSubtitle;
        async function z(e) {
            var t;
            if (e.preventDefault(), y(""), !c.trim()) return void y(w.errorEmpty);
            if (t = c.trim(), !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) return void y(w.errorInvalid);
            p("loading");
            try {
                let e = await fetch("/api/subscribe", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: c.trim()
                        })
                    }),
                    t = await e.json();
                e.ok ? p("success") : (p("error"), y(t.error ? ? "订阅失败，请稍后再试"))
            } catch {
                p("error"), y("网络错误，请稍后再试")
            }
        }
        let M = h ? "#d4826a" : S ? "#ede8df" : "#2a1f15",
            T = h ? "#d4826a" : b ? S ? "#d4916a80" : "#c9845a80" : S ? "#3d2e22" : "#d4cdc3",
            L = S ? "#d4916a" : "#c9845a",
            W = S ? "#c4815a" : "#b8734a";
        return (0, t.jsxs)(r.motion.div, {
            id: "subscribe",
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0,
                margin: "-60px"
            },
            transition: {
                duration: .6,
                ease: [.22, 1, .36, 1]
            },
            style: {
                backgroundColor: S ? "#261c14" : "#faf7f2",
                border: `1px solid ${S?"#3d2e22":"#ddd5c8"}`,
                borderRadius: "3px",
                padding: s ? "clamp(1.5rem, 4vw, 2rem) clamp(1.25rem, 4vw, 2rem)" : "clamp(2rem, 5vw, 2.75rem) clamp(1.5rem, 5vw, 2.5rem)",
                position: "relative",
                overflow: "hidden",
                transition: "background-color 0.3s ease, border-color 0.3s ease"
            },
            children: [(0, t.jsx)("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: L,
                    transition: "background-color 0.3s ease"
                }
            }), (0, t.jsx)(u.AnimatePresence, {
                mode: "wait",
                children: "success" === m ? (0, t.jsxs)(r.motion.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.75rem 0",
                        textAlign: "center"
                    },
                    children: [(0, t.jsx)(r.motion.div, {
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: 1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 240,
                            damping: 18,
                            delay: .1
                        },
                        style: {
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: `1px solid ${L}50`,
                            backgroundColor: `${L}10`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: (0, t.jsx)("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: L,
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: (0, t.jsx)("polyline", {
                                points: "20 6 9 17 4 12"
                            })
                        })
                    }), (0, t.jsx)("p", {
                        style: {
                            fontSize: "0.92rem",
                            color: S ? "#ede8df" : "#2a1f15",
                            fontFamily: '"Noto Serif SC", serif',
                            letterSpacing: "0.03em",
                            lineHeight: 1.7
                        },
                        children: w.success
                    })]
                }, "success") : (0, t.jsxs)(r.motion.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    children: [(0, t.jsxs)("div", {
                        className: "ec-layout",
                        children: [(0, t.jsxs)("div", {
                            className: "ec-text",
                            children: [(0, t.jsx)("p", {
                                style: {
                                    fontFamily: "var(--font-display), Georgia, serif",
                                    fontStyle: "italic",
                                    color: L,
                                    fontSize: "0.78rem",
                                    letterSpacing: "0.22em",
                                    marginBottom: "0.5rem",
                                    transition: "color 0.3s ease"
                                },
                                children: "Newsletter"
                            }), (0, t.jsx)("h3", {
                                style: {
                                    fontSize: s ? "1rem" : "clamp(1rem, 2.2vw, 1.15rem)",
                                    fontWeight: 500,
                                    color: S ? "#ede8df" : "#1a1510",
                                    letterSpacing: "0.04em",
                                    lineHeight: 1.55,
                                    marginBottom: "0.35rem",
                                    fontFamily: '"Noto Serif SC", serif',
                                    transition: "color 0.3s ease"
                                },
                                children: C
                            }), (0, t.jsx)("p", {
                                style: {
                                    fontSize: "0.82rem",
                                    color: S ? "#9a8c7e" : "#8a7d6e",
                                    lineHeight: 1.75,
                                    fontFamily: '"Noto Serif SC", serif',
                                    transition: "color 0.3s ease"
                                },
                                children: k
                            })]
                        }), (0, t.jsx)("div", {
                            className: "ec-form",
                            children: (0, t.jsxs)("form", {
                                onSubmit: z,
                                noValidate: !0,
                                children: [(0, t.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        gap: "0.5rem"
                                    },
                                    children: [(0, t.jsx)("input", {
                                        type: "email",
                                        value: c,
                                        onChange: e => {
                                            d(e.target.value), h && y("")
                                        },
                                        placeholder: w.placeholder,
                                        disabled: "loading" === m,
                                        onFocus: () => v(!0),
                                        onBlur: () => v(!1),
                                        style: {
                                            flex: 1,
                                            minWidth: 0,
                                            padding: "0.6rem 0.9rem",
                                            fontSize: "0.85rem",
                                            fontFamily: '"Noto Serif SC", serif',
                                            color: M,
                                            backgroundColor: S ? "#1c1510" : "#e8e2d8",
                                            border: `1px solid ${T}`,
                                            borderRadius: "2px",
                                            outline: "none",
                                            transition: "border-color 0.2s ease, background-color 0.3s ease, color 0.3s ease",
                                            opacity: "loading" === m ? .6 : 1
                                        },
                                        "aria-label": w.placeholder
                                    }), (0, t.jsx)("button", {
                                        type: "submit",
                                        disabled: "loading" === m,
                                        style: {
                                            flexShrink: 0,
                                            padding: "0.6rem 1.2rem",
                                            fontSize: "0.85rem",
                                            fontFamily: '"Noto Serif SC", serif',
                                            fontWeight: 500,
                                            backgroundColor: L,
                                            color: "#faf7f2",
                                            border: "none",
                                            borderRadius: "2px",
                                            cursor: "loading" === m ? "not-allowed" : "pointer",
                                            opacity: "loading" === m ? .7 : 1,
                                            transition: "background-color 0.2s ease",
                                            whiteSpace: "nowrap",
                                            letterSpacing: "0.05em"
                                        },
                                        onMouseEnter: e => {
                                            "loading" !== m && (e.currentTarget.style.backgroundColor = W)
                                        },
                                        onMouseLeave: e => {
                                            e.currentTarget.style.backgroundColor = L
                                        },
                                        children: "loading" === m ? w.buttonLoading : w.button
                                    })]
                                }), (0, t.jsx)(u.AnimatePresence, {
                                    children: h && (0, t.jsx)(r.motion.p, {
                                        initial: {
                                            opacity: 0,
                                            y: -3
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: .2
                                        },
                                        style: {
                                            marginTop: "0.4rem",
                                            fontSize: "0.75rem",
                                            color: "#b94040",
                                            letterSpacing: "0.02em"
                                        },
                                        children: h
                                    })
                                }), !h && (0, t.jsx)("p", {
                                    style: {
                                        marginTop: "0.4rem",
                                        fontSize: "0.72rem",
                                        color: S ? "#6a5e52" : "#a89880",
                                        letterSpacing: "0.03em",
                                        transition: "color 0.3s ease"
                                    },
                                    children: w.privacy
                                })]
                            })
                        })]
                    }), (0, t.jsx)("style", {
                        children: `
              .ec-layout {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 2rem;
              }
              .ec-text { flex: 1; min-width: 0; }
              .ec-form { flex-shrink: 0; width: clamp(240px, 35%, 340px); }
              @media (max-width: 639px) {
                .ec-layout {
                  flex-direction: column !important;
                  align-items: stretch !important;
                  gap: 1.25rem !important;
                }
                .ec-form { width: 100% !important; }
              }
            `
                    })]
                }, "form")
            })]
        })
    }
    let h = {
            连载中: "持续更新",
            更新中: "持续更新",
            已完结: "已完结"
        },
        y = [.22, 1, .36, 1],
        b = {
            hidden: {
                opacity: 0,
                y: 24
            },
            visible: (e = 0) => ({
                opacity: 1,
                y: 0,
                transition: {
                    duration: .65,
                    delay: .12 * e,
                    ease: y
                }
            })
        },
        v = {
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 clamp(1.5rem, 5vw, 3rem)"
        };

    function j({
        C: e
    }) {
        return (0, t.jsx)("div", {
            style: v,
            children: (0, t.jsx)("div", {
                style: {
                    height: "1px",
                    background: e.border
                }
            })
        })
    }

    function S({
        children: e,
        C: i
    }) {
        return (0, t.jsx)("p", {
            style: {
                fontFamily: "var(--font-display), Georgia, serif",
                fontStyle: "italic",
                color: i.accent,
                fontSize: "0.82rem",
                letterSpacing: "0.22em",
                marginBottom: "0.5rem"
            },
            children: e
        })
    }

    function w({
        label: e,
        title: i,
        linkHref: r,
        linkText: n,
        C: l
    }) {
        return (0, t.jsxs)("div", {
            style: {
                marginBottom: "2.5rem"
            },
            children: [(0, t.jsx)(S, {
                C: l,
                children: e
            }), (0, t.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: "1rem"
                },
                children: [(0, t.jsx)("h2", {
                    style: {
                        fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                        fontWeight: 400,
                        letterSpacing: "0.06em",
                        color: l.text
                    },
                    children: i
                }), (0, t.jsxs)(o.default, {
                    href: r,
                    style: {
                        fontSize: "0.82rem",
                        color: l.textMuted,
                        letterSpacing: "0.1em",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        transition: "color 0.2s ease"
                    },
                    onMouseEnter: e => e.currentTarget.style.color = l.accent,
                    onMouseLeave: e => e.currentTarget.style.color = l.textMuted,
                    children: [n, " ", (0, t.jsx)(a.ArrowRight, {
                        size: 12
                    })]
                })]
            })]
        })
    }
    let C = ["新闻为弱者发声，观察为集体指路。", "学术为普及科学，游记为白描世界。", "散文为自省身心，诗词为致敬生活。"];

    function k({
        C: e
    }) {
        let {
            convert: n
        } = (0, p.useLang)(), [l, s] = (0, i.useState)(!1);
        return (0, t.jsxs)("section", {
            style: {
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "clamp(7rem, 12vw, 12rem) clamp(1.5rem, 5vw, 3rem) clamp(4rem, 8vw, 8rem)",
                position: "relative",
                textAlign: "center"
            },
            children: [(0, t.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "min(700px, 90vw)",
                    height: "min(700px, 90vw)",
                    background: `radial-gradient(circle, ${e.accent}0f 0%, transparent 65%)`,
                    pointerEvents: "none"
                }
            }), (0, t.jsxs)("div", {
                style: {
                    maxWidth: "720px",
                    width: "100%",
                    position: "relative"
                },
                children: [C.map((i, o) => (0, t.jsx)(r.motion.p, {
                    custom: o,
                    variants: b,
                    initial: "hidden",
                    animate: "visible",
                    style: {
                        fontSize: "clamp(1.05rem, 3.2vw, 1.55rem)",
                        lineHeight: 2.4,
                        color: e.text,
                        letterSpacing: "0.06em",
                        fontWeight: 400,
                        transition: "color 0.3s ease"
                    },
                    children: n(i)
                }, o)), (0, t.jsx)(r.motion.div, {
                    custom: 3,
                    variants: b,
                    initial: "hidden",
                    animate: "visible",
                    style: {
                        marginTop: "2rem",
                        display: "inline-block"
                    },
                    children: (0, t.jsxs)(o.default, {
                        href: "/about",
                        onMouseEnter: () => s(!0),
                        onMouseLeave: () => s(!1),
                        style: {
                            textDecoration: "none",
                            display: "inline-block"
                        },
                        children: [(0, t.jsx)("p", {
                            style: {
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontStyle: "italic",
                                fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
                                color: l ? e.accentDim : e.accent,
                                letterSpacing: "0.12em",
                                transition: "color 0.25s ease"
                            },
                            children: "— Angelo Wong"
                        }), (0, t.jsx)("div", {
                            style: {
                                height: "1px",
                                marginTop: "6px",
                                background: e.accent,
                                opacity: l ? .6 : .2,
                                width: l ? "100%" : "40%",
                                marginLeft: "auto",
                                marginRight: "auto",
                                transition: "width 0.35s ease, opacity 0.25s ease"
                            }
                        }), (0, t.jsx)("p", {
                            style: {
                                fontSize: "0.68rem",
                                color: e.textMuted,
                                letterSpacing: "0.18em",
                                marginTop: "5px",
                                opacity: +!!l,
                                transition: "opacity 0.25s ease",
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontStyle: "italic"
                            },
                            children: "关于作者 →"
                        })]
                    })
                }), (0, t.jsx)(r.motion.div, {
                    custom: 4,
                    variants: b,
                    initial: "hidden",
                    animate: "visible",
                    style: {
                        height: "1px",
                        background: `linear-gradient(90deg, transparent, ${e.border}, transparent)`,
                        margin: "2.5rem auto",
                        maxWidth: "180px"
                    }
                }), (0, t.jsx)(r.motion.p, {
                    custom: 5,
                    variants: b,
                    initial: "hidden",
                    animate: "visible",
                    style: {
                        fontSize: "clamp(0.95rem, 2.2vw, 1.15rem)",
                        color: e.textSub,
                        lineHeight: 1.8,
                        letterSpacing: "0.04em",
                        marginBottom: "0.5rem",
                        transition: "color 0.3s ease"
                    },
                    children: n("为认真思考世界的人，提供跨学科的深度内容")
                }), (0, t.jsx)(r.motion.p, {
                    custom: 6,
                    variants: b,
                    initial: "hidden",
                    animate: "visible",
                    style: {
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontStyle: "italic",
                        fontSize: "0.85rem",
                        color: e.textMuted,
                        letterSpacing: "0.1em",
                        opacity: .7,
                        marginBottom: "3rem",
                        transition: "color 0.3s ease"
                    },
                    children: "For those who think seriously about the world — depth without shortcuts."
                }), (0, t.jsxs)(r.motion.div, {
                    custom: 7,
                    variants: b,
                    initial: "hidden",
                    animate: "visible",
                    style: {
                        display: "flex",
                        gap: "1rem",
                        justifyContent: "center",
                        flexWrap: "wrap"
                    },
                    children: [(0, t.jsxs)(E, {
                        href: "/content",
                        variant: "primary",
                        C: e,
                        children: [n("探索内容"), " ", (0, t.jsx)(a.ArrowRight, {
                            size: 14
                        })]
                    }), (0, t.jsx)(E, {
                        href: "#subscribe",
                        variant: "ghost",
                        C: e,
                        children: n("订阅通讯")
                    })]
                })]
            }), (0, t.jsx)(r.motion.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 2.4,
                    duration: 1
                },
                style: {
                    position: "absolute",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)"
                },
                children: (0, t.jsx)(r.motion.div, {
                    animate: {
                        y: [0, 8, 0]
                    },
                    transition: {
                        repeat: 1 / 0,
                        duration: 2.6,
                        ease: "easeInOut"
                    },
                    style: {
                        height: "32px",
                        width: "1px",
                        background: `linear-gradient(to bottom, ${e.accent}70, transparent)`
                    }
                })
            })]
        })
    }

    function z({
        C: e
    }) {
        let o = (0, i.useRef)(null),
            a = (0, n.useInView)(o, {
                once: !0,
                margin: "-80px"
            }),
            {
                convert: l
            } = (0, p.useLang)();
        return (0, t.jsxs)("section", {
            ref: o,
            style: { ...v,
                padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 3rem)"
            },
            children: [(0, t.jsxs)(r.motion.div, {
                variants: b,
                initial: "hidden",
                animate: a ? "visible" : "hidden",
                children: [(0, t.jsx)(S, {
                    C: e,
                    children: "Explore"
                }), (0, t.jsx)("h2", {
                    style: {
                        fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                        fontWeight: 400,
                        letterSpacing: "0.06em",
                        color: e.text,
                        marginBottom: "2.5rem"
                    },
                    children: l("工具与索引")
                })]
            }), (0, t.jsxs)("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
                    gap: "1.25rem"
                },
                children: [(0, t.jsx)(M, {
                    index: 0,
                    inView: a,
                    C: e,
                    href: "/timeline",
                    label: "Timeline",
                    title: l("宇宙大历史"),
                    desc: l("从138亿年前的大爆炸到今日文明——一条跨越所有时代的对数时间轴，可缩放探索。"),
                    hint: l("滚轮缩放 · 点击节点查看详情"),
                    accentColor: "#6b7fcf",
                    preview: "timeline"
                }), (0, t.jsx)(M, {
                    index: 1,
                    inView: a,
                    C: e,
                    href: "/quiz",
                    label: "Quiz",
                    title: l("思想光谱"),
                    desc: l("一份关于价值观、政治立场与认识论的测验，帮助你了解自己在思想坐标系中的位置。"),
                    hint: l("约 10 分钟 · 匿名"),
                    accentColor: "#c9845a",
                    preview: "quiz"
                })]
            })]
        })
    }

    function M({
        index: e,
        inView: n,
        href: a,
        label: l,
        title: s,
        desc: c,
        hint: d,
        accentColor: m,
        preview: p,
        C: x
    }) {
        let [u, f] = (0, i.useState)(!1);
        return (0, t.jsx)(r.motion.div, {
            custom: e + 1,
            variants: b,
            initial: "hidden",
            animate: n ? "visible" : "hidden",
            children: (0, t.jsx)(o.default, {
                href: a,
                onMouseEnter: () => f(!0),
                onMouseLeave: () => f(!1),
                style: {
                    textDecoration: "none",
                    display: "block"
                },
                children: (0, t.jsxs)("div", {
                    style: {
                        backgroundColor: u ? x.bgHover : x.bgCard,
                        border: `1px solid ${u?m+"50":x.borderLight}`,
                        borderRadius: "4px",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                        transform: u ? "translateY(-4px)" : "translateY(0)",
                        boxShadow: u ? "0 8px 32px rgba(0,0,0,0.1)" : "none"
                    },
                    children: [(0, t.jsx)("div", {
                        style: {
                            height: "2px",
                            background: m,
                            opacity: u ? 1 : .45,
                            transition: "opacity 0.3s"
                        }
                    }), (0, t.jsx)("div", {
                        style: {
                            height: "130px",
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: "timeline" === p ? (0, t.jsx)(T, {
                            C: x,
                            hovered: u
                        }) : (0, t.jsx)(L, {
                            C: x,
                            hovered: u
                        })
                    }), (0, t.jsxs)("div", {
                        style: {
                            padding: "1.5rem"
                        },
                        children: [(0, t.jsx)("p", {
                            style: {
                                fontSize: "0.68rem",
                                color: m,
                                letterSpacing: "0.22em",
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontStyle: "italic",
                                marginBottom: "0.5rem"
                            },
                            children: l
                        }), (0, t.jsx)("h3", {
                            style: {
                                fontSize: "1.1rem",
                                fontWeight: 500,
                                color: x.text,
                                marginBottom: "0.55rem",
                                letterSpacing: "0.02em",
                                lineHeight: 1.4,
                                transition: "color 0.3s ease"
                            },
                            children: s
                        }), (0, t.jsx)("p", {
                            style: {
                                fontSize: "0.87rem",
                                color: x.textMuted,
                                lineHeight: 1.75,
                                marginBottom: "1.25rem",
                                transition: "color 0.3s ease"
                            },
                            children: c
                        }), (0, t.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            children: [(0, t.jsx)("span", {
                                style: {
                                    fontSize: "0.72rem",
                                    color: x.textMuted,
                                    letterSpacing: "0.06em",
                                    opacity: .65
                                },
                                children: d
                            }), (0, t.jsx)("span", {
                                style: {
                                    fontSize: "0.78rem",
                                    color: m,
                                    opacity: +!!u,
                                    transition: "opacity 0.3s ease",
                                    letterSpacing: "0.06em"
                                },
                                children: "进入 →"
                            })]
                        })]
                    })]
                })
            })
        })
    }

    function T({
        C: e,
        hovered: i
    }) {
        let r = [{
            color: "#6b7fcf",
            label: "宇宙史",
            w: 18
        }, {
            color: "#b8875a",
            label: "地质史",
            w: 20
        }, {
            color: "#5c9968",
            label: "生命演化",
            w: 20
        }, {
            color: "#c4a84e",
            label: "人类史",
            w: 18
        }, {
            color: "#c9845a",
            label: "文明史",
            w: 24
        }];
        return (0, t.jsxs)("div", {
            style: {
                width: "100%",
                height: "100%",
                position: "relative",
                background: e.bgSlab
            },
            children: [(0, t.jsx)("div", {
                style: {
                    display: "flex",
                    height: "100%"
                },
                children: r.map(e => (0, t.jsx)("div", {
                    style: {
                        width: `${e.w}%`,
                        height: "100%",
                        background: e.color,
                        opacity: i ? .12 : .07,
                        transition: "opacity 0.3s"
                    }
                }, e.label))
            }), (0, t.jsx)("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex"
                },
                children: r.map((i, r) => (0, t.jsx)("div", {
                    style: {
                        width: `${i.w}%`,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: "18px",
                        borderLeft: r > 0 ? `1px solid ${e.border}` : "none"
                    },
                    children: (0, t.jsx)("span", {
                        style: {
                            fontSize: "10px",
                            color: i.color,
                            letterSpacing: "0.1em",
                            fontFamily: "serif",
                            opacity: .85,
                            whiteSpace: "nowrap",
                            fontWeight: 300
                        },
                        children: i.label
                    })
                }, i.label))
            }), (0, t.jsxs)("svg", {
                viewBox: "0 0 100 130",
                preserveAspectRatio: "none",
                style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%"
                },
                children: [(0, t.jsx)("line", {
                    x1: "0",
                    y1: "80",
                    x2: "100",
                    y2: "80",
                    stroke: e.border,
                    strokeWidth: "0.4"
                }), [{
                    x: 9,
                    r: 5,
                    c: "#6b7fcf"
                }, {
                    x: 17,
                    r: 3,
                    c: "#6b7fcf"
                }, {
                    x: 24,
                    r: 4,
                    c: "#b8875a"
                }, {
                    x: 35,
                    r: 3,
                    c: "#b8875a"
                }, {
                    x: 44,
                    r: 4,
                    c: "#5c9968"
                }, {
                    x: 54,
                    r: 3,
                    c: "#5c9968"
                }, {
                    x: 63,
                    r: 4,
                    c: "#c4a84e"
                }, {
                    x: 72,
                    r: 3,
                    c: "#c4a84e"
                }, {
                    x: 80,
                    r: 5,
                    c: "#c9845a"
                }, {
                    x: 88,
                    r: 3,
                    c: "#c9845a"
                }, {
                    x: 95,
                    r: 3,
                    c: "#c9845a"
                }].map((e, i) => (0, t.jsx)("circle", {
                    cx: `${e.x}%`,
                    cy: "80",
                    r: .32 * e.r,
                    fill: e.c,
                    opacity: "0.8"
                }, i))]
            })]
        })
    }

    function L({
        C: e,
        hovered: i
    }) {
        return (0, t.jsxs)("div", {
            style: {
                width: "100%",
                height: "100%",
                backgroundColor: e.bgSlab,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 24px",
                gap: "10px",
                position: "relative"
            },
            children: [
                [{
                    left: "自由",
                    right: "权威",
                    val: 32,
                    fromColor: "#6b7fcf",
                    toColor: "#b8875a"
                }, {
                    left: "平等",
                    right: "效率",
                    val: 58,
                    fromColor: "#5c9968",
                    toColor: "#c4a84e"
                }, {
                    left: "全球",
                    right: "民族",
                    val: 25,
                    fromColor: "#c9845a",
                    toColor: "#9a6b3a"
                }, {
                    left: "理性",
                    right: "传统",
                    val: 70,
                    fromColor: "#6b8c9a",
                    toColor: "#8a6b4a"
                }].map((r, n) => (0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                    },
                    children: [(0, t.jsx)("span", {
                        style: {
                            fontSize: "8.5px",
                            color: e.textMuted,
                            width: "22px",
                            textAlign: "right",
                            flexShrink: 0,
                            opacity: .7,
                            letterSpacing: "0.02em"
                        },
                        children: r.left
                    }), (0, t.jsxs)("div", {
                        style: {
                            flex: 1,
                            position: "relative",
                            height: "3px",
                            borderRadius: "2px"
                        },
                        children: [(0, t.jsx)("div", {
                            style: {
                                position: "absolute",
                                inset: 0,
                                borderRadius: "2px",
                                background: `linear-gradient(90deg, ${r.fromColor}50, ${r.toColor}50)`
                            }
                        }), (0, t.jsx)("div", {
                            style: {
                                position: "absolute",
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: `${r.val}%`,
                                borderRadius: "2px",
                                background: `linear-gradient(90deg, ${r.fromColor}, ${r.fromColor}80)`,
                                opacity: i ? .9 : .65,
                                transition: "opacity 0.3s"
                            }
                        }), (0, t.jsx)("div", {
                            style: {
                                position: "absolute",
                                left: `${r.val}%`,
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                backgroundColor: r.fromColor,
                                border: `1.5px solid ${e.bgSlab}`,
                                boxShadow: `0 0 0 1px ${r.fromColor}60`
                            }
                        })]
                    }), (0, t.jsx)("span", {
                        style: {
                            fontSize: "8.5px",
                            color: e.textMuted,
                            width: "22px",
                            flexShrink: 0,
                            opacity: .7,
                            letterSpacing: "0.02em"
                        },
                        children: r.right
                    })]
                }, n)), (0, t.jsx)("p", {
                    style: {
                        position: "absolute",
                        bottom: "7px",
                        right: "14px",
                        fontSize: "7.5px",
                        color: e.textMuted,
                        opacity: .4,
                        fontStyle: "italic",
                        letterSpacing: "0.08em",
                        fontFamily: "serif"
                    },
                    children: "示例"
                })
            ]
        })
    }

    function W({
        items: e,
        C: o
    }) {
        let a = (0, i.useRef)(null),
            l = (0, n.useInView)(a, {
                once: !0,
                margin: "-80px"
            }),
            {
                convert: s
            } = (0, p.useLang)();
        return (0, t.jsxs)("section", {
            ref: a,
            style: { ...v,
                padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 3rem)"
            },
            children: [(0, t.jsx)(r.motion.div, {
                variants: b,
                initial: "hidden",
                animate: l ? "visible" : "hidden",
                children: (0, t.jsx)(w, {
                    label: "Latest",
                    title: s("研究与思考"),
                    linkHref: "/content",
                    linkText: s("查看全部内容"),
                    C: o
                })
            }), 0 === e.length ? (0, t.jsx)("p", {
                style: {
                    color: o.textMuted,
                    fontSize: "0.9rem"
                },
                children: s("内容加载中…")
            }) : (0, t.jsx)("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                    gap: "1.25rem"
                },
                children: e.map((e, i) => (0, t.jsx)(R, {
                    item: e,
                    index: i,
                    inView: l,
                    C: o
                }, e._id))
            })]
        })
    }

    function R({
        item: e,
        index: n,
        inView: a,
        C: d
    }) {
        let [m, x] = (0, i.useState)(!1), {
            convert: u,
            lang: f
        } = (0, p.useLang)(), g = "video" === e._type, h = "/content";
        h = g ? e.slug ? .current ? `/video/${e.slug.current}` : e.youtubeUrl : `/content/${e.slug.current}`;
        let y = g && !e.slug ? .current,
            v = g ? u(e.series ? .title ? e.series.title : "视频") : function(e, t, i) {
                if ("bookReview" === e.contentType) return t ? "書評" : "书评";
                if ("prosePoem" === e.contentType) return t ? "散文與詩" : "散文与诗";
                if (e.category) {
                    if ("object" == typeof e.category) {
                        let r = e.category,
                            n = (t ? r.titleHant : r.title) ? ? r.title ? ? "";
                        if (n) return i(n)
                    }
                    if ("string" == typeof e.category && e.category) return i(e.category)
                }
                return "文章"
            }(e, "zh-Hant" === f, u),
            j = g ? e.duration ? `${e.duration} ${u("分钟")}` : "" : e.readTime ? `${e.readTime} ${u("分钟阅读")}` : "",
            S = (0, t.jsxs)(r.motion.div, {
                custom: n + 1,
                variants: b,
                initial: "hidden",
                animate: a ? "visible" : "hidden",
                onMouseEnter: () => x(!0),
                onMouseLeave: () => x(!1),
                style: {
                    padding: "1.5rem",
                    backgroundColor: m ? d.bgHover : d.bgCard,
                    border: `1px solid ${m?d.accent+"55":d.borderLight}`,
                    borderRadius: "3px",
                    transition: "all 0.3s ease",
                    transform: m ? "translateY(-3px)" : "translateY(0)",
                    boxShadow: m ? "0 6px 24px rgba(0,0,0,0.12)" : "none",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                },
                children: [(0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.9rem"
                    },
                    children: [(0, t.jsx)("span", {
                        style: {
                            fontSize: "0.72rem",
                            color: d.tag,
                            letterSpacing: "0.1em",
                            border: `1px solid ${d.tag}40`,
                            padding: "0.15rem 0.5rem",
                            borderRadius: "2px"
                        },
                        children: v
                    }), g && (0, t.jsx)(l.Play, {
                        size: 13,
                        color: d.textMuted
                    })]
                }), (0, t.jsx)("h3", {
                    style: {
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: d.text,
                        lineHeight: 1.55,
                        marginBottom: "0.6rem",
                        letterSpacing: "0.02em",
                        flex: 1,
                        transition: "color 0.3s ease"
                    },
                    children: u(e.title)
                }), e.excerpt && (0, t.jsx)("p", {
                    style: {
                        fontSize: "0.85rem",
                        color: d.textMuted,
                        lineHeight: 1.7,
                        marginBottom: "1rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                    },
                    children: u(e.excerpt)
                }), (0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "0.75rem",
                        color: d.textMuted
                    },
                    children: [j ? (0, t.jsxs)("span", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem"
                        },
                        children: [g ? (0, t.jsx)(s.Clock, {
                            size: 11
                        }) : (0, t.jsx)(c.BookOpen, {
                            size: 11
                        }), j]
                    }) : (0, t.jsx)("span", {}), (0, t.jsxs)("span", {
                        style: {
                            color: d.accent,
                            opacity: +!!m,
                            transition: "opacity 0.3s ease",
                            letterSpacing: "0.06em"
                        },
                        children: [u(g ? "观看" : "阅读"), " →"]
                    })]
                })]
            });
        return y ? (0, t.jsx)("a", {
            href: h,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
                textDecoration: "none",
                display: "block"
            },
            children: S
        }) : (0, t.jsx)(o.default, {
            href: h,
            style: {
                textDecoration: "none",
                display: "block"
            },
            children: S
        })
    }
    let $ = ["#c9845a", "#9a6b3a", "#7a8c6e", "#b06b46", "#6b7a8c"];

    function I({
        series: e,
        C: o
    }) {
        let a = (0, i.useRef)(null),
            l = (0, n.useInView)(a, {
                once: !0,
                margin: "-80px"
            }),
            {
                convert: s
            } = (0, p.useLang)(),
            c = (0, i.useRef)(null),
            d = (0, i.useRef)(!1),
            m = (0, i.useRef)(0),
            x = (0, i.useRef)(0);
        return (0, t.jsxs)("section", {
            ref: a,
            style: {
                padding: "clamp(4rem, 8vw, 7rem) 0"
            },
            children: [(0, t.jsx)(r.motion.div, {
                variants: b,
                initial: "hidden",
                animate: l ? "visible" : "hidden",
                style: v,
                children: (0, t.jsx)(w, {
                    label: "Series",
                    title: s("核心系列"),
                    linkHref: "/courses",
                    linkText: s("全部课程"),
                    C: o
                })
            }), 0 === e.length ? (0, t.jsx)("div", {
                style: v,
                children: (0, t.jsx)("p", {
                    style: {
                        color: o.textMuted,
                        fontSize: "0.9rem"
                    },
                    children: s("请在后台添加课程系列")
                })
            }) : (0, t.jsx)("div", {
                style: { ...v,
                    overflow: "hidden"
                },
                children: (0, t.jsxs)(r.motion.div, {
                    ref: c,
                    variants: b,
                    initial: "hidden",
                    animate: l ? "visible" : "hidden",
                    onMouseDown: function(e) {
                        d.current = !0, m.current = e.pageX - (c.current ? .offsetLeft ? ? 0), x.current = c.current ? .scrollLeft ? ? 0
                    },
                    onMouseUp: function() {
                        d.current = !1
                    },
                    onMouseLeave: function() {
                        d.current = !1
                    },
                    onMouseMove: function(e) {
                        if (!d.current || !c.current) return;
                        e.preventDefault();
                        let t = e.pageX - c.current.offsetLeft;
                        c.current.scrollLeft = x.current - (t - m.current) * 1.4
                    },
                    className: "hide-scrollbar",
                    style: {
                        display: "flex",
                        gap: "1rem",
                        overflowX: "auto",
                        marginLeft: "calc(-1 * clamp(1.5rem, 5vw, 3rem))",
                        marginRight: "calc(-1 * clamp(1.5rem, 5vw, 3rem))",
                        paddingLeft: "clamp(1.5rem, 5vw, 3rem)",
                        paddingRight: "clamp(1.5rem, 5vw, 3rem)",
                        paddingBottom: "1rem",
                        cursor: "grab",
                        userSelect: "none"
                    },
                    children: [e.map((e, i) => (0, t.jsx)(B, {
                        series: e,
                        index: i,
                        inView: l,
                        fallbackAccent: $[i % $.length],
                        C: o
                    }, e._id)), (0, t.jsx)("div", {
                        style: {
                            width: "1px",
                            flexShrink: 0
                        },
                        "aria-hidden": !0
                    })]
                })
            })]
        })
    }

    function B({
        series: e,
        index: n,
        inView: o,
        fallbackAccent: a,
        C: l
    }) {
        let [s, c] = (0, i.useState)(!1), {
            convert: d
        } = (0, p.useLang)(), m = e.accentColor || a, x = h[e.status] || e.status, u = e.youtubePlaylistUrl || "https://www.youtube.com/@AngeloWongX";
        return (0, t.jsxs)(r.motion.a, {
            href: u,
            target: "_blank",
            rel: "noopener noreferrer",
            custom: n + 1,
            variants: b,
            initial: "hidden",
            animate: o ? "visible" : "hidden",
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            style: {
                flexShrink: 0,
                width: "clamp(240px, 30vw, 300px)",
                minHeight: "210px",
                backgroundColor: s ? l.bgHover : l.bgCard,
                border: `1px solid ${s?m+"70":l.borderLight}`,
                borderRadius: "3px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: s ? "translateY(-4px)" : "translateY(0)",
                position: "relative",
                overflow: "hidden",
                textDecoration: "none",
                boxShadow: s ? "0 8px 32px rgba(0,0,0,0.15)" : "none"
            },
            children: [(0, t.jsx)("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: s ? "3px" : "2px",
                    background: m,
                    transition: "height 0.3s ease"
                }
            }), (0, t.jsxs)("div", {
                children: [(0, t.jsx)("span", {
                    style: {
                        display: "inline-block",
                        padding: "0.18rem 0.55rem",
                        border: `1px solid ${m}50`,
                        color: m,
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        borderRadius: "2px",
                        marginBottom: "0.9rem"
                    },
                    children: d(x)
                }), (0, t.jsx)("h3", {
                    style: {
                        fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                        fontWeight: 500,
                        color: l.text,
                        marginBottom: "0.4rem",
                        lineHeight: 1.45,
                        letterSpacing: "0.02em",
                        transition: "color 0.3s ease"
                    },
                    children: d(e.title)
                }), e.subtitle && (0, t.jsx)("p", {
                    style: {
                        fontSize: "0.78rem",
                        color: l.textMuted,
                        lineHeight: 1.5,
                        marginBottom: "0.5rem"
                    },
                    children: d(e.subtitle)
                }), e.description && (0, t.jsx)("p", {
                    style: {
                        fontSize: "0.78rem",
                        color: l.textMuted,
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                    },
                    children: d(e.description)
                })]
            }), (0, t.jsxs)("span", {
                style: {
                    alignSelf: "flex-end",
                    marginTop: "0.75rem",
                    fontSize: "0.75rem",
                    color: m,
                    opacity: +!!s,
                    transition: "opacity 0.3s ease",
                    letterSpacing: "0.06em"
                },
                children: [d("进入系列"), " →"]
            })]
        })
    }

    function H({
        lang: e,
        C: o
    }) {
        let a = (0, i.useRef)(null),
            l = (0, n.useInView)(a, {
                once: !0,
                margin: "-80px"
            });
        return (0, t.jsx)("section", {
            id: "subscribe",
            ref: a,
            style: {
                padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 3rem)",
                backgroundColor: o.bgSlab,
                transition: "background-color 0.3s ease"
            },
            children: (0, t.jsx)(r.motion.div, {
                variants: b,
                initial: "hidden",
                animate: l ? "visible" : "hidden",
                style: {
                    maxWidth: "680px",
                    margin: "0 auto"
                },
                children: (0, t.jsx)(g, {
                    lang: e
                })
            })
        })
    }

    function D({
        C: e
    }) {
        let l = (0, i.useRef)(null),
            s = (0, n.useInView)(l, {
                once: !0,
                margin: "-80px"
            }),
            {
                convert: c
            } = (0, p.useLang)();
        return (0, t.jsx)("section", {
            ref: l,
            style: {
                padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 3rem) clamp(6rem, 10vw, 10rem)"
            },
            children: (0, t.jsxs)(r.motion.div, {
                variants: b,
                initial: "hidden",
                animate: s ? "visible" : "hidden",
                style: {
                    maxWidth: "800px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    alignItems: "flex-start"
                },
                children: [(0, t.jsx)("p", {
                    style: {
                        fontSize: "1rem",
                        color: e.textSub,
                        lineHeight: 2,
                        letterSpacing: "0.03em",
                        maxWidth: "560px",
                        transition: "color 0.3s ease"
                    },
                    children: c("如果朋友认可这些内容的价值，可以考虑购买课程讲义、电子书，或直接打赏，以支持该项目继续进行。")
                }), (0, t.jsxs)(o.default, {
                    href: "/shop",
                    style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.88rem",
                        color: e.textMuted,
                        letterSpacing: "0.1em",
                        textDecoration: "none",
                        borderBottom: `1px solid ${e.border}`,
                        paddingBottom: "2px",
                        transition: "all 0.3s ease"
                    },
                    onMouseEnter: t => {
                        t.currentTarget.style.color = e.accent, t.currentTarget.style.borderColor = e.accent + "50"
                    },
                    onMouseLeave: t => {
                        t.currentTarget.style.color = e.textMuted, t.currentTarget.style.borderColor = e.border
                    },
                    children: [c("查看可购买内容"), " ", (0, t.jsx)(a.ArrowRight, {
                        size: 13
                    })]
                })]
            })
        })
    }

    function E({
        href: e,
        children: r,
        variant: n,
        C: a
    }) {
        let [l, s] = (0, i.useState)(!1), c = e.startsWith("#"), d = c ? "a" : o.default, m = "primary" === n ? {
            backgroundColor: l ? a.accentDim : a.accent,
            color: "#faf7f2",
            border: "none"
        } : {
            backgroundColor: "transparent",
            color: l ? a.text : a.textSub,
            border: `1px solid ${l?a.accent:a.border}`
        };
        return (0, t.jsx)(d, {
            href: e,
            onClick: function(t) {
                if (!c) return;
                t.preventDefault();
                let i = document.querySelector(e);
                i && i.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            },
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.75rem 1.6rem",
                fontSize: "0.88rem",
                letterSpacing: "0.08em",
                fontWeight: 500,
                borderRadius: "2px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                textDecoration: "none",
                ...m
            },
            children: r
        })
    }
    e.s(["default", 0, function({
        series: e,
        latest: i
    }) {
        var r;
        let {
            lang: n
        } = (0, p.useLang)(), {
            theme: o
        } = (0, x.useTheme)(), a = {
            bg: (r = "dark" === o) ? "#1c1510" : "#faf7f2",
            bgCard: r ? "#261c14" : "#f2ece2",
            bgHover: r ? "#2e2218" : "#ebe3d5",
            bgSlab: r ? "#211810" : "#f0e9dc",
            text: r ? "#ede8df" : "#2c1f14",
            textSub: r ? "#c8bfb4" : "#5a4f43",
            textMuted: r ? "#9a8c7e" : "#8a7d6e",
            accent: r ? "#d4916a" : "#c9845a",
            accentDim: r ? "#c4815a" : "#a8683e",
            tag: r ? "#b8844a" : "#9a6b3a",
            border: r ? "#3d2e22" : "#ddd5c8",
            borderLight: r ? "#3d2e22" : "#e8e0d4"
        };
        return (0, t.jsxs)("main", {
            style: {
                backgroundColor: a.bg,
                minHeight: "100vh",
                transition: "background-color 0.3s ease"
            },
            children: [(0, t.jsx)(d.default, {}), (0, t.jsx)(k, {
                C: a
            }), (0, t.jsx)(j, {
                C: a
            }), (0, t.jsx)(W, {
                items: i,
                C: a
            }), (0, t.jsx)(j, {
                C: a
            }), (0, t.jsx)(I, {
                series: e,
                C: a
            }), (0, t.jsx)(j, {
                C: a
            }), (0, t.jsx)(z, {
                C: a
            }), (0, t.jsx)(j, {
                C: a
            }), (0, t.jsx)(H, {
                lang: "zh-Hant" === n ? "zh-TW" : "zh-CN",
                C: a
            }), (0, t.jsx)(j, {
                C: a
            }), (0, t.jsx)(D, {
                C: a
            }), (0, t.jsx)(m.default, {})]
        })
    }], 207443)
}]);