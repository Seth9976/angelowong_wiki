(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 331262, e => {
    "use strict";
    var i = e.i(843476),
        t = e.i(271645),
        n = e.i(522016),
        o = e.i(846932),
        r = e.i(342724),
        l = e.i(56691),
        a = e.i(493681),
        s = e.i(704401);
    let d = [{
            key: "thinking",
            label: "思维类型",
            labelHant: "思維類型",
            english: "Thinking",
            description: "测量你的推理方式、逻辑习惯与历史观——看见你平时看不见的思维盲区。",
            descriptionHant: "測量你的推理方式、邏輯習慣與歷史觀——看見你平時看不見的思維盲區。"
        }, {
            key: "knowledge",
            label: "常识类型",
            labelHant: "常識類型",
            english: "Knowledge",
            description: "检验你是否拥有作为生活于市场经济中的现代公民，所必须知晓的基本常识。",
            descriptionHant: "檢驗你是否擁有作為生活於市場經濟中的現代公民，所必須知曉的基本常識。"
        }, {
            key: "psychology",
            label: "心理类型",
            labelHant: "心理類型",
            english: "Psychology",
            description: "深入人格结构、情绪模式与关系动力——理解驱动你行为的深层心理机制。",
            descriptionHant: "深入人格結構、情緒模式與關係動力——理解驅動你行為的深層心理機制。"
        }, {
            key: "entertainment",
            label: "娱乐类型",
            labelHant: "娛樂類型",
            english: "Entertainment",
            description: "轻松好玩，却不失深度——用趣味与流行文化揭示意想不到的自我侧面。",
            descriptionHant: "輕鬆好玩，卻不失深度——用趣味與流行文化揭示意想不到的自我側面。"
        }],
        c = new Set(["social-position-test-male", "social-position-test-female", "social-position-test-other"]),
        m = {
            hidden: {
                opacity: 0,
                y: 20
            },
            show: e => ({
                opacity: 1,
                y: 0,
                transition: {
                    duration: .5,
                    ease: [.22, 1, .36, 1],
                    delay: .07 * e
                }
            })
        };

    function p({
        cat: e,
        catLabel: n,
        count: o,
        index: r,
        isDark: l,
        accentColor: a,
        titleColor: s,
        mutedColor: d,
        borderColor: c,
        cardBg: m,
        cardHover: f,
        onClick: g
    }) {
        let [h, y] = (0, t.useState)(!1), x = o > 0;
        return (0, i.jsxs)("button", {
            onClick: g,
            onMouseEnter: () => y(!0),
            onMouseLeave: () => y(!1),
            style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "clamp(1.25rem,2.5vw,1.75rem)",
                backgroundColor: h ? f : "transparent",
                borderTop: "none",
                borderLeft: "none",
                borderRight: `1px solid ${c}`,
                borderBottom: `1px solid ${c}`,
                cursor: "pointer",
                textAlign: "left",
                transition: "background-color 0.2s ease",
                minHeight: "120px"
            },
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)("p", {
                    style: {
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontStyle: "italic",
                        fontSize: "0.68rem",
                        color: h ? a : l ? "#5a4a3e" : "#b8b0a4",
                        letterSpacing: "0.18em",
                        marginBottom: "0.5rem",
                        transition: "color 0.2s ease"
                    },
                    children: e.english
                }), (0, i.jsx)("p", {
                    style: {
                        fontSize: "clamp(0.95rem,1.8vw,1.1rem)",
                        color: h ? s : l ? "#9a8c7e" : "#5a4e44",
                        fontFamily: '"Noto Serif SC", serif',
                        letterSpacing: "0.06em",
                        lineHeight: 1.3,
                        transition: "color 0.2s ease",
                        marginBottom: "0"
                    },
                    children: n
                })]
            }), (0, i.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1.25rem"
                },
                children: [x ? (0, i.jsxs)("span", {
                    style: {
                        fontSize: "0.72rem",
                        color: h ? a : d,
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        letterSpacing: "0.06em",
                        transition: "color 0.2s ease"
                    },
                    children: [o, " 份"]
                }) : (0, i.jsx)("span", {
                    style: {
                        fontSize: "0.68rem",
                        color: l ? "#3a2c22" : "#c4bdb0",
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        letterSpacing: "0.06em"
                    },
                    children: "即将上线"
                }), (0, i.jsx)("span", {
                    style: {
                        fontSize: "0.85rem",
                        color: h ? a : l ? "#4a3a2e" : "#c4bdb0",
                        transform: h ? "translateX(2px)" : "none",
                        transition: "all 0.2s ease"
                    },
                    children: "↓"
                })]
            })]
        })
    }

    function f({
        quiz: e,
        index: r,
        isHant: l,
        isDark: a,
        convert: s,
        cardBg: d,
        cardHover: c,
        borderColor: p,
        accentColor: g,
        titleColor: h,
        mutedColor: y
    }) {
        let [x, u] = (0, t.useState)(!1), b = l && e.titleHant || e.title;
        return (0, i.jsx)(o.motion.div, {
            custom: r,
            variants: m,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: !0,
                margin: "-40px"
            },
            children: (0, i.jsxs)(n.default, {
                href: `/quiz/${e.slug}`,
                onMouseEnter: () => u(!0),
                onMouseLeave: () => u(!1),
                style: {
                    display: "flex",
                    backgroundColor: x ? c : d,
                    borderTop: `1px solid ${x?g+"55":p}`,
                    borderRight: `1px solid ${x?g+"55":p}`,
                    borderBottom: `1px solid ${x?g+"55":p}`,
                    borderLeft: `3px solid ${g}`,
                    borderRadius: "3px",
                    textDecoration: "none",
                    overflow: "hidden",
                    transition: "all 0.22s ease",
                    boxShadow: x ? a ? "0 6px 24px rgba(0,0,0,0.25)" : "0 6px 24px rgba(90,79,67,0.09)" : "none",
                    height: "218px"
                },
                children: [(0, i.jsxs)("div", {
                    style: {
                        padding: "clamp(1.1rem,2vw,1.4rem)",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    },
                    children: [(0, i.jsxs)("div", {
                        children: [(0, i.jsx)("p", {
                            style: {
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontStyle: "italic",
                                color: g,
                                fontSize: "0.6rem",
                                letterSpacing: "0.2em",
                                marginBottom: "0.5rem"
                            },
                            children: "Thought Spectrum"
                        }), (0, i.jsx)("h3", {
                            style: {
                                fontSize: "clamp(0.93rem,1.8vw,1.05rem)",
                                fontWeight: 500,
                                color: h,
                                lineHeight: 1.5,
                                letterSpacing: "0.02em",
                                marginBottom: "0.35rem",
                                fontFamily: '"Noto Serif SC", serif',
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                            },
                            children: b
                        }), e.tagline && (0, i.jsx)("p", {
                            style: {
                                fontSize: "0.75rem",
                                color: g,
                                lineHeight: 1.55,
                                fontFamily: '"Noto Serif SC", serif',
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                            },
                            children: s(e.tagline)
                        })]
                    }), (0, i.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: "0.7rem",
                            fontSize: "0.69rem",
                            color: y,
                            flexWrap: "wrap",
                            marginTop: "0.9rem"
                        },
                        children: [e.totalQuestions && (0, i.jsxs)("span", {
                            children: [e.totalQuestions, " ", s("题")]
                        }), e.estimatedMinutes && (0, i.jsxs)("span", {
                            children: [e.estimatedMinutes, " ", s("分钟")]
                        }), e.dimensionCount && (0, i.jsxs)("span", {
                            children: [e.dimensionCount, " ", s("维度")]
                        })]
                    })]
                }), (0, i.jsx)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "1.1rem 0.9rem 1.1rem 0",
                        flexShrink: 0
                    },
                    children: (0, i.jsx)("span", {
                        style: {
                            fontSize: "1rem",
                            color: g,
                            transform: x ? "translateX(3px)" : "none",
                            transition: "transform 0.2s ease"
                        },
                        children: "→"
                    })
                })]
            })
        })
    }
    e.s(["default", 0, function({
        quizzes: e
    }) {
        let {
            theme: n
        } = (0, a.useTheme)(), {
            convert: m
        } = (0, s.useLang)(), g = "dark" === n, h = "测" !== m("测"), y = g ? "#3d2e22" : "#ddd5c8", x = g ? "#d4916a" : "#c9845a", u = g ? "#ede8df" : "#1a1510", b = g ? "#9a8c7e" : "#8a7d6e", S = g ? "#261c14" : "#f0ebe0", j = g ? "#2e2218" : "#ede8dc", v = (0, t.useRef)({}), w = {
            thinking: [],
            knowledge: [],
            entertainment: [],
            psychology: []
        };
        (function(e) {
            let i = e.find(e => c.has(e.slug));
            if (!i) return e;
            let t = { ...i,
                    _id: "social-position-test-merged",
                    slug: "social-position-test",
                    title: "我是否清楚自己在社会上的真实处境？",
                    titleHant: "我是否清楚自己在社會上的真實處境？",
                    tagline: "30道题，照出我对自己经济、权力、风险、期待、评价、上升通道的真实认知"
                },
                n = [],
                o = !1;
            for (let i of e) {
                if (c.has(i.slug)) {
                    o || (n.push(t), o = !0);
                    continue
                }
                n.push(i)
            }
            return n
        })(e).forEach(e => {
            let i = e.category || "thinking";
            w[i] ? w[i].push(e) : w.thinking.push(e)
        });
        let k = (0, t.useCallback)(e => {
            let i = v.current[e];
            if (!i) return;
            let t = i.getBoundingClientRect().top + window.scrollY - 88;
            window.scrollTo({
                top: t,
                behavior: "smooth"
            })
        }, []);
        return (0, i.jsxs)("main", {
            style: {
                minHeight: "100vh",
                backgroundColor: g ? "#1c1510" : "#faf7f2",
                transition: "background-color 0.3s ease"
            },
            children: [(0, i.jsx)(r.default, {}), (0, i.jsxs)("section", {
                style: {
                    padding: "clamp(8rem,14vw,11rem) clamp(1.5rem,5vw,3rem) 0",
                    maxWidth: "960px"
                },
                children: [(0, i.jsxs)(o.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        ease: [.22, 1, .36, 1]
                    },
                    children: [(0, i.jsx)("p", {
                        style: {
                            fontFamily: "var(--font-display), Georgia, serif",
                            fontStyle: "italic",
                            color: x,
                            fontSize: "0.82rem",
                            letterSpacing: "0.22em",
                            marginBottom: "0.75rem"
                        },
                        children: "Thought Spectrum"
                    }), (0, i.jsx)("h1", {
                        style: {
                            fontSize: "clamp(2rem,5vw,3.2rem)",
                            fontWeight: 300,
                            color: u,
                            letterSpacing: "0.04em",
                            lineHeight: 1.2,
                            marginBottom: "1rem"
                        },
                        children: h ? "思想光譜" : "思想光谱"
                    }), (0, i.jsx)("p", {
                        style: {
                            color: b,
                            fontSize: "0.95rem",
                            maxWidth: "480px",
                            lineHeight: 1.85,
                            fontFamily: '"Noto Serif SC", serif',
                            marginBottom: "2.5rem"
                        },
                        children: h ? "測量你的思想坐標。每一份自查，都是一次嚴肅的自我審視。" : "测量你的思想坐标。每一份自查，都是一次严肃的自我审视。"
                    })]
                }), (0, i.jsx)(o.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 16
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .55,
                        delay: .15,
                        ease: [.22, 1, .36, 1]
                    },
                    children: (0, i.jsx)("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                            gap: "0",
                            borderTop: `1px solid ${y}`,
                            borderLeft: `1px solid ${y}`
                        },
                        children: d.map((e, t) => {
                            let n = h ? e.labelHant : e.label,
                                o = w[e.key].length;
                            return (0, i.jsx)(p, {
                                cat: e,
                                catLabel: n,
                                count: o,
                                index: t,
                                isDark: g,
                                accentColor: x,
                                titleColor: u,
                                mutedColor: b,
                                borderColor: y,
                                cardBg: S,
                                cardHover: j,
                                onClick: () => k(e.key)
                            }, e.key)
                        })
                    })
                })]
            }), (0, i.jsx)("div", {
                style: {
                    margin: "clamp(3rem,5vw,4rem) clamp(1.5rem,5vw,3rem) 0",
                    height: "1px",
                    backgroundColor: y,
                    maxWidth: "960px"
                }
            }), (0, i.jsx)("div", {
                style: {
                    padding: "0 clamp(1.5rem,5vw,3rem)"
                },
                children: d.map((e, t) => {
                    let n = w[e.key],
                        r = h ? e.labelHant : e.label,
                        l = h ? e.descriptionHant : e.description,
                        a = 0 === n.length,
                        s = t === d.length - 1;
                    return (0, i.jsxs)("section", {
                        ref: i => {
                            v.current[e.key] = i
                        },
                        style: {
                            paddingTop: "clamp(3rem,5vw,4.5rem)",
                            paddingBottom: s ? "clamp(4rem,7vw,6rem)" : "clamp(3rem,5vw,4.5rem)",
                            borderBottom: s ? "none" : `1px solid ${y}`,
                            maxWidth: "960px"
                        },
                        children: [(0, i.jsxs)(o.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 16
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
                                duration: .5,
                                ease: [.22, 1, .36, 1]
                            },
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-end",
                                flexWrap: "wrap",
                                gap: "0.75rem",
                                marginBottom: "2rem"
                            },
                            children: [(0, i.jsxs)("div", {
                                children: [(0, i.jsx)("p", {
                                    style: {
                                        fontFamily: "var(--font-display), Georgia, serif",
                                        fontStyle: "italic",
                                        fontSize: "0.72rem",
                                        color: x,
                                        letterSpacing: "0.22em",
                                        marginBottom: "0.35rem"
                                    },
                                    children: e.english
                                }), (0, i.jsx)("h2", {
                                    style: {
                                        fontSize: "clamp(1.3rem,2.8vw,1.8rem)",
                                        fontWeight: 300,
                                        color: u,
                                        letterSpacing: "0.05em",
                                        lineHeight: 1.2,
                                        marginBottom: "0.5rem"
                                    },
                                    children: r
                                }), (0, i.jsx)("p", {
                                    style: {
                                        fontSize: "0.83rem",
                                        color: b,
                                        lineHeight: 1.75,
                                        maxWidth: "440px",
                                        fontFamily: '"Noto Serif SC", serif'
                                    },
                                    children: l
                                })]
                            }), !a && (0, i.jsxs)("p", {
                                style: {
                                    fontSize: "0.72rem",
                                    color: g ? "#4a3a2e" : "#c4bdb0",
                                    letterSpacing: "0.1em",
                                    fontFamily: "Georgia, serif",
                                    fontStyle: "italic"
                                },
                                children: [n.length, " ", m("份")]
                            })]
                        }), !a && (0, i.jsx)("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                                gap: "1rem"
                            },
                            children: n.map((e, t) => (0, i.jsx)(f, {
                                quiz: e,
                                index: t,
                                isHant: h,
                                isDark: g,
                                convert: m,
                                cardBg: S,
                                cardHover: j,
                                borderColor: y,
                                accentColor: x,
                                titleColor: u,
                                mutedColor: b
                            }, e._id))
                        }), a && (0, i.jsxs)(o.motion.div, {
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .4,
                                delay: .1
                            },
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.9rem",
                                padding: "1rem 1.4rem",
                                border: `1px dashed ${g?"#3a2c22":"#cdc5bb"}`,
                                borderRadius: "3px"
                            },
                            children: [(0, i.jsx)("span", {
                                style: {
                                    width: "5px",
                                    height: "5px",
                                    borderRadius: "50%",
                                    backgroundColor: g ? "#3a2c22" : "#cdc5bb",
                                    flexShrink: 0
                                }
                            }), (0, i.jsx)("p", {
                                style: {
                                    fontSize: "0.8rem",
                                    color: g ? "#4a3a2e" : "#b0a89e",
                                    fontFamily: '"Noto Serif SC", serif',
                                    letterSpacing: "0.08em",
                                    fontStyle: "italic",
                                    margin: 0
                                },
                                children: m("即将上线")
                            })]
                        })]
                    }, e.key)
                })
            }), (0, i.jsx)(l.default, {})]
        })
    }])
}]);