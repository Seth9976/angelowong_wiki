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
        amount: s,
        once: l = !1,
        initial: a = !1
    } = {}) {
        let [c, d] = (0, t.useState)(a);
        return (0, t.useEffect)(() => {
            if (!e.current || l && c) return;
            let t = {
                root: n && n.current || void 0,
                margin: o,
                amount: s
            };
            return function(e, t, {
                root: n,
                margin: o,
                amount: s = "some"
            } = {}) {
                let l = (0, i.resolveElements)(e),
                    a = new WeakMap,
                    c = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let i = a.get(e.target);
                            if (!!i !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let i = t(e.target, e);
                                    "function" == typeof i ? a.set(e.target, i) : c.unobserve(e.target)
                                } else "function" == typeof i && (i(e), a.delete(e.target))
                        })
                    }, {
                        root: n,
                        rootMargin: o,
                        threshold: "number" == typeof s ? s : r[s]
                    });
                return l.forEach(e => c.observe(e)), () => c.disconnect()
            }(e.current, () => (d(!0), l ? void 0 : () => d(!1)), t)
        }, [n, e, o, l, s]), c
    }], 387652)
}, 497921, e => {
    "use strict";
    var t = e.i(843476),
        i = e.i(271645),
        r = e.i(846932),
        n = e.i(387652),
        o = e.i(342724),
        s = e.i(56691),
        l = e.i(704401),
        a = e.i(493681);
    e.s(["default", 0, function() {
        let e = (0, i.useRef)(null),
            c = (0, n.useInView)(e, {
                once: !0
            }),
            {
                convert: d
            } = (0, l.useLang)(),
            {
                theme: m
            } = (0, a.useTheme)(),
            p = "dark" === m,
            y = p ? "#3d2e22" : "#ddd5c8",
            h = p ? "#d4916a" : "#c9845a",
            f = p ? "#ede8df" : "#2c1f14",
            u = {
                padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem)",
                maxWidth: "720px"
            },
            g = {
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                fontWeight: 500,
                color: h,
                letterSpacing: "0.12em",
                marginBottom: "1.5rem",
                transition: "color 0.3s ease"
            },
            x = {
                fontSize: "1rem",
                color: p ? "#c8bfb4" : "#4a3f34",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
                transition: "color 0.3s ease"
            };
        d("宇宙 · 生命 · 文明"), d("正在连载 · 大型公开课"), d("当代中国政治经济哲学思想史"), d("纪录片系列"), d("千年诅咒：雅利安种姓制如何塑造现代伊朗与印度"), d("正在连载 · 大型公开课"), d("晚清政治经济哲学史"), d("正在连载 · 播客"), d("中国千年政治哲学思想史"), d("正在连载 · 播客"), d("大马华人流散史"), d("即将上线");
        let j = [d("我不做自媒体"), d("不做媒体"), d("只做经典")];
        return (0, t.jsxs)("main", {
            style: {
                minHeight: "100vh",
                backgroundColor: p ? "#1c1510" : "#faf7f2",
                transition: "background-color 0.3s ease"
            },
            children: [(0, t.jsx)(o.default, {}), (0, t.jsx)("section", {
                ref: e,
                style: {
                    minHeight: "70vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "clamp(8rem, 14vw, 11rem) clamp(1.5rem, 5vw, 3rem) clamp(4rem, 7vw, 6rem)",
                    borderBottom: `1px solid ${y}`,
                    transition: "border-color 0.3s ease"
                },
                children: (0, t.jsxs)("div", {
                    style: {
                        textAlign: "center",
                        position: "relative"
                    },
                    children: [(0, t.jsx)("span", {
                        "aria-hidden": "true",
                        style: {
                            position: "absolute",
                            top: "-3rem",
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontStyle: "italic",
                            fontSize: "clamp(6rem, 14vw, 9rem)",
                            color: h,
                            opacity: .12,
                            lineHeight: 1,
                            pointerEvents: "none",
                            userSelect: "none",
                            transition: "color 0.3s ease"
                        },
                        children: '"'
                    }), j.map((e, i) => (0, t.jsx)(r.motion.p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: c ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .8,
                            delay: .14 * i,
                            ease: [.22, 1, .36, 1]
                        },
                        style: {
                            fontFamily: "'Noto Serif SC', Georgia, serif",
                            fontWeight: 200,
                            fontSize: "clamp(1.45rem, 3.2vw, 1.85rem)",
                            color: f,
                            letterSpacing: "0.18em",
                            lineHeight: 1.45,
                            margin: "0 0 0.1rem",
                            position: "relative",
                            transition: "color 0.3s ease"
                        },
                        children: e
                    }, i)), (0, t.jsx)(r.motion.p, {
                        initial: {
                            opacity: 0,
                            y: 14
                        },
                        animate: c ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .7,
                            delay: .52,
                            ease: [.22, 1, .36, 1]
                        },
                        style: {
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontStyle: "italic",
                            fontWeight: 300,
                            fontSize: "clamp(0.8rem, 1.6vw, 0.88rem)",
                            color: h,
                            letterSpacing: "0.18em",
                            marginTop: "clamp(1.8rem, 3.5vw, 2.5rem)",
                            marginBottom: 0,
                            position: "relative",
                            transition: "color 0.3s ease"
                        },
                        children: "— Angelo Wong"
                    })]
                })
            }), (0, t.jsxs)(r.motion.section, {
                style: u,
                initial: {
                    opacity: 0,
                    y: 24
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .7
                },
                children: [(0, t.jsx)("h2", {
                    style: g,
                    children: d("创作者")
                }), (0, t.jsx)("p", {
                    style: x,
                    children: d("我是一名因深感澳洲与中国教育体制存在重大缺陷，其双双深受政治干预影响，而最终选择进行独立学术研究的学者；同时也是一名新农民、自幼亦爱好于内容创作。")
                }), (0, t.jsx)("p", {
                    style: x,
                    children: d("我的研究与内容，均为试图超越学科限制，而只专注于回答关乎于这个世界的本质问题。")
                }), (0, t.jsx)("p", {
                    style: x,
                    children: d("视频内容永久免费，在 YouTube 公开发布。深度文字内容与课件可通过字渡APP会员获取。")
                })]
            }), (0, t.jsx)("div", {
                style: {
                    borderTop: `1px solid ${y}`,
                    margin: "0 clamp(1.5rem, 5vw, 3rem)",
                    transition: "border-color 0.3s ease"
                }
            }), (0, t.jsxs)(r.motion.section, {
                style: u,
                initial: {
                    opacity: 0,
                    y: 24
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .7,
                    delay: .1
                },
                children: [(0, t.jsx)("h2", {
                    style: g,
                    children: d("创作理念")
                }), (0, t.jsx)("p", {
                    style: x,
                    children: d("世界的本质问题是公共的、知识亦是公共的。")
                }), (0, t.jsx)("p", {
                    style: x,
                    children: d("在AI时代，什么样认知的人，将能够提出什么样的问题，进而获取相对应的回答、理解AI所描述的世界。")
                }), (0, t.jsx)("p", {
                    style: x,
                    children: d("提问能力的差距，将使不同人之间的信息鸿沟，急剧加深。技术平权，反而可能加剧信息不平等，而我，则致力于打破这一处境。")
                }), (0, t.jsx)("p", {
                    style: x,
                    children: d("知识、经验、阅历与认知的系统性提升的前提，是有能力在信息洪流中，筛选出高质量的必要信息。我所做的工作，恰可弥补绝大部分公众，在面对AI时代时的认知不足。")
                })]
            }), (0, t.jsx)("div", {
                style: {
                    borderTop: `1px solid ${y}`,
                    margin: "0 clamp(1.5rem, 5vw, 3rem)",
                    transition: "border-color 0.3s ease"
                }
            }), (0, t.jsxs)(r.motion.section, {
                style: u,
                initial: {
                    opacity: 0,
                    y: 24
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .7,
                    delay: .1
                },
                children: [(0, t.jsx)("h2", {
                    style: g,
                    children: d("最终愿景")
                }), (0, t.jsx)("p", {
                    style: x,
                    children: d("中国教育体制的天然缺陷，令培养完整的人，长期被培养符合工业化需求的人的目标所取代。")
                }), (0, t.jsx)("p", {
                    style: x,
                    children: d("交易思维、商业思维、逻辑思维、批判性思维、创造性思维、系统性思维、健康观念、公民教育等，都不在传统教育的范畴之内。")
                }), (0, t.jsx)("p", {
                    style: x,
                    children: d("而我，正是希望能够在这样的时代背景下，为公众提供必然所需却从未系统性接触过的认知工具和思维方式；以弥补相当多数大众无法在学校和家庭中所获得，而不得不在社会中经历大量不必要的痛苦，才有可能获得的符合社会生存的思维。")
                }), (0, t.jsx)("p", {
                    style: x,
                    children: d("很多时候，不是我们“笨”，更不是我们“缺乏知识”，而是我们“缺乏正确的思维方式”；即使我们已经离开中国，但从小所接受的教育，仍然在深刻地影响着我们，甚至通过我们，而更加糟糕地影响着我们的下一代。")
                }), (0, t.jsx)("p", {
                    style: x,
                    children: d("因此，我希望构建起一个针对中国教育体制缺陷的弥补性学习生态，能够满足有自我教育意识的华人，通过“思想光谱”对自己有清晰的认知，通过“历史轴”建立宏观视野，通过“课程”构建对第一性原理的系统性理解，通过“内容”针对性地弥补自己的不足。并能够在真实获益后，通过“商城”参与到这一“中国教育体制缺陷弥补计划”当中。")
                })]
            }), (0, t.jsxs)(r.motion.section, {
                style: u,
                initial: {
                    opacity: 0,
                    y: 24
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .7,
                    delay: .1
                },
                children: [(0, t.jsx)("h2", {
                    style: g,
                    children: d("联系方式")
                }), (0, t.jsxs)("p", {
                    style: x,
                    children: [d("字渡APP官方账户私信: "), (0, t.jsx)("a", {
                        href: "https://www.zidu.app/profile/5cf7e608-670f-44de-b82d-35ace06f6e0c",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: h,
                            textDecoration: "underline"
                        },
                        children: d("@字渡官方")
                    })]
                })]
            }), (0, t.jsx)(s.default, {})]
        })
    }])
}]);