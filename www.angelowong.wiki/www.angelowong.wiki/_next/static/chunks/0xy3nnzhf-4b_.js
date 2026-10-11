(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 794758, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(924170),
        o = e.i(704401),
        i = e.i(493681);
    let n = {
        "zh-Hans": {
            label: "相关视频",
            button: "前往 YouTube 观看 →",
            fallbackDescription: "这篇文章对应的视频版本，适合在通勤途中收看。"
        },
        "zh-Hant": {
            label: "相關影片",
            button: "前往 YouTube 觀看 →",
            fallbackDescription: "這篇文章對應的影片版本，適合在通勤途中收看。"
        }
    };

    function l({
        video: e,
        articleTitle: r
    }) {
        let a, {
                lang: s
            } = (0, o.useLang)(),
            {
                theme: d
            } = (0, i.useTheme)(),
            c = "dark" === d,
            p = n[s];
        if (!e ? .youtubeUrl) return null;
        let m = (a = function(e) {
            if (!e || "string" != typeof e) return null;
            let t = e.trim();
            for (let e of [/(?:youtube\.com\/watch\?(?:[^&]*&)*v=)([a-zA-Z0-9_-]{11})/, /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/, /(?:youtube(?:-nocookie)?\.com\/embed\/)([a-zA-Z0-9_-]{11})/, /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/, /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/, /(?:youtube\.com\/live\/)([a-zA-Z0-9_-]{11})/]) {
                let r = t.match(e);
                if (r && r[1]) return r[1]
            }
            return null
        }(e.youtubeUrl)) ? function(e, t = {}) {
            let r = new URLSearchParams({
                rel: "0",
                modestbranding: "1",
                ...t
            }).toString();
            return `https://www.youtube-nocookie.com/embed/${e}?${r}`
        }(a) : null;
        if (!m) return null;
        let f = e.videoTitle || r || "",
            g = e.videoDescription || p.fallbackDescription,
            x = c ? "#d4916a" : "#c9845a",
            u = c ? "#c4815a" : "#b5734e";
        return (0, t.jsxs)("section", {
            "aria-label": p.label,
            style: {
                backgroundColor: c ? "#261c14" : "#f2ece2",
                borderLeft: `3px solid ${c?"#d4916a":"#c9845a"}`,
                borderRadius: "8px",
                padding: "clamp(20px, 4vw, 32px)",
                marginBottom: "32px",
                transition: "background-color 0.3s ease, border-color 0.3s ease"
            },
            children: [(0, t.jsx)("div", {
                style: {
                    marginBottom: "20px"
                },
                children: (0, t.jsx)("span", {
                    style: {
                        display: "inline-block",
                        backgroundColor: c ? "#d4916a" : "#c9845a",
                        color: "#faf7f2",
                        fontSize: "11px",
                        fontWeight: "600",
                        letterSpacing: "0.08em",
                        padding: "3px 10px",
                        borderRadius: "4px",
                        fontFamily: '"Noto Serif SC", serif',
                        transition: "background-color 0.3s ease"
                    },
                    children: p.label
                })
            }), (0, t.jsxs)("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "20px"
                },
                className: "related-video-grid",
                children: [(0, t.jsx)("div", {
                    className: "related-video-embed",
                    style: {
                        width: "100%"
                    },
                    children: (0, t.jsx)("div", {
                        style: {
                            position: "relative",
                            paddingBottom: "56.25%",
                            height: 0,
                            overflow: "hidden",
                            borderRadius: "8px",
                            backgroundColor: c ? "#1c1510" : "#2c1f14"
                        },
                        children: (0, t.jsx)("iframe", {
                            src: m,
                            title: f,
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            allowFullScreen: !0,
                            loading: "lazy",
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                border: "none",
                                borderRadius: "8px"
                            }
                        })
                    })
                }), (0, t.jsxs)("div", {
                    className: "related-video-info",
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "12px"
                    },
                    children: [f && (0, t.jsx)("h3", {
                        style: {
                            fontFamily: '"Noto Serif SC", serif',
                            fontSize: "clamp(16px, 2.5vw, 20px)",
                            fontWeight: "600",
                            color: c ? "#ede8df" : "#2c1f14",
                            lineHeight: "1.4",
                            margin: 0,
                            transition: "color 0.3s ease"
                        },
                        children: f
                    }), (0, t.jsx)("p", {
                        style: {
                            fontFamily: '"Noto Serif SC", serif',
                            fontSize: "14px",
                            color: c ? "#9a8c7e" : "#8a7d6e",
                            lineHeight: "1.7",
                            margin: 0,
                            transition: "color 0.3s ease"
                        },
                        children: g
                    }), (0, t.jsx)("a", {
                        href: e.youtubeUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            display: "inline-block",
                            alignSelf: "flex-start",
                            backgroundColor: x,
                            color: "#faf7f2",
                            fontFamily: '"Noto Serif SC", serif',
                            fontSize: "14px",
                            fontWeight: "600",
                            padding: "10px 20px",
                            borderRadius: "6px",
                            textDecoration: "none",
                            transition: "background-color 0.2s ease, transform 0.1s ease",
                            letterSpacing: "0.02em"
                        },
                        onMouseEnter: e => {
                            e.currentTarget.style.backgroundColor = u
                        },
                        onMouseLeave: e => {
                            e.currentTarget.style.backgroundColor = x
                        },
                        children: p.button
                    })]
                })]
            }), (0, t.jsx)("style", {
                children: `
        @media (min-width: 768px) {
          .related-video-grid {
            grid-template-columns: 60% 1fr !important;
            gap: 28px !important;
          }
        }
      `
            })]
        })
    }
    var a = e.i(271645),
        s = e.i(522016),
        d = e.i(657688),
        c = e.i(236726);

    function p({
        mode: e,
        articles: r,
        currentSlug: o,
        categoryTitle: i,
        lang: n
    }) {
        let l = "zh-Hant" === n;
        return "horizontal" === e ? (0, t.jsxs)("div", {
            style: {
                backgroundColor: "#f2ece2",
                borderBottom: "1px solid #ddd5c8",
                borderTop: "1px solid #ddd5c8",
                padding: "0 1.5rem"
            },
            children: [i && (0, t.jsxs)("p", {
                style: {
                    color: "#8a7d6e",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    paddingTop: "0.75rem",
                    marginBottom: "0.5rem"
                },
                children: [i, (0, t.jsxs)("span", {
                    style: {
                        marginLeft: "0.5rem",
                        color: "#ddd5c8"
                    },
                    children: ["(", r.length, " ", "篇", ")"]
                })]
            }), (0, t.jsx)("div", {
                style: {
                    display: "flex",
                    gap: "0.5rem",
                    overflowX: "auto",
                    paddingBottom: "0.75rem",
                    scrollbarWidth: "none"
                },
                children: r.map((e, r) => {
                    let i = l ? e.titleHant ? ? e.title : e.title,
                        n = e.slug === o;
                    return (0, t.jsxs)(s.default, {
                        href: "/content/" + e.slug,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            flexShrink: 0,
                            padding: "0.35rem 0.75rem",
                            borderRadius: "3px",
                            fontSize: "0.8rem",
                            fontFamily: '"Noto Serif SC", Georgia, serif',
                            textDecoration: "none",
                            backgroundColor: n ? "rgba(201,132,90,0.12)" : "transparent",
                            border: n ? "1px solid rgba(201,132,90,0.4)" : "1px solid transparent",
                            color: n ? "#c9845a" : "#8a7d6e",
                            whiteSpace: "nowrap",
                            maxWidth: "160px"
                        },
                        children: [(0, t.jsx)("span", {
                            style: {
                                fontSize: "0.65rem",
                                opacity: .6,
                                flexShrink: 0
                            },
                            children: String(r + 1).padStart(2, "0")
                        }), (0, t.jsx)("span", {
                            style: {
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            },
                            children: i
                        }), e.isPremium && (0, t.jsx)("span", {
                            style: {
                                color: "#c9845a",
                                fontSize: "0.65rem",
                                flexShrink: 0
                            },
                            children: "¥"
                        })]
                    }, e._id)
                })
            })]
        }) : (0, t.jsxs)("div", {
            style: {
                backgroundColor: "#f2ece2",
                border: "1px solid #ddd5c8",
                borderRadius: "4px",
                overflow: "hidden"
            },
            children: [(0, t.jsxs)("div", {
                style: {
                    padding: "1rem 1.25rem",
                    borderBottom: "1px solid #ddd5c8"
                },
                children: [(0, t.jsx)("p", {
                    style: {
                        color: "#8a7d6e",
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: "0.25rem"
                    },
                    children: l ? "系列導覽" : "系列导览"
                }), i && (0, t.jsx)("h3", {
                    style: {
                        color: "#1a1510",
                        fontSize: "0.9375rem",
                        fontFamily: '"Noto Serif SC", Georgia, serif',
                        fontWeight: 500,
                        lineHeight: 1.4
                    },
                    children: i
                }), (0, t.jsxs)("p", {
                    style: {
                        color: "#8a7d6e",
                        fontSize: "0.75rem",
                        marginTop: "0.25rem"
                    },
                    children: [r.length, " ", "篇文章"]
                })]
            }), (0, t.jsx)("nav", {
                style: {
                    maxHeight: "65vh",
                    overflowY: "auto"
                },
                children: r.map((e, r) => {
                    let i = l ? e.titleHant ? ? e.title : e.title,
                        n = e.slug === o;
                    return (0, t.jsxs)(s.default, {
                        href: "/content/" + e.slug,
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.625rem",
                            padding: "0.75rem 1.25rem",
                            borderBottom: "1px solid rgba(221,213,200,0.6)",
                            textDecoration: "none",
                            backgroundColor: n ? "rgba(201,132,90,0.07)" : "transparent",
                            transition: "background-color 0.15s"
                        },
                        children: [(0, t.jsx)("span", {
                            style: {
                                fontSize: "0.65rem",
                                color: n ? "#c9845a" : "#8a7d6e",
                                opacity: .7,
                                flexShrink: 0,
                                paddingTop: "3px",
                                minWidth: "1.5rem"
                            },
                            children: String(r + 1).padStart(2, "0")
                        }), (0, t.jsxs)("div", {
                            style: {
                                flex: 1,
                                minWidth: 0
                            },
                            children: [(0, t.jsx)("p", {
                                style: {
                                    color: n ? "#1a1510" : "#5a4f43",
                                    fontSize: "0.8125rem",
                                    fontFamily: '"Noto Serif SC", Georgia, serif',
                                    lineHeight: 1.5,
                                    paddingLeft: n ? "0.5rem" : "0",
                                    borderLeft: n ? "2px solid #c9845a" : "2px solid transparent",
                                    transition: "all 0.15s"
                                },
                                children: i
                            }), (0, t.jsx)("div", {
                                style: {
                                    marginTop: "0.25rem"
                                },
                                children: e.isPremium ? (0, t.jsx)("span", {
                                    style: {
                                        fontSize: "0.6rem",
                                        color: "#c9845a",
                                        backgroundColor: "rgba(201,132,90,0.1)",
                                        border: "1px solid rgba(201,132,90,0.25)",
                                        borderRadius: "2px",
                                        padding: "1px 5px",
                                        letterSpacing: "0.04em"
                                    },
                                    children: l ? "付費" : "付费"
                                }) : (0, t.jsx)("span", {
                                    style: {
                                        fontSize: "0.6rem",
                                        color: "#8a7d6e",
                                        backgroundColor: "rgba(138,125,110,0.08)",
                                        border: "1px solid rgba(138,125,110,0.2)",
                                        borderRadius: "2px",
                                        padding: "1px 5px"
                                    },
                                    children: l ? "免費" : "免费"
                                })
                            })]
                        })]
                    }, e._id)
                })
            })]
        })
    }
    var m = e.i(153165);

    function f({
        articleRef: e,
        lang: t,
        onOpenNewsletter: r
    }) {
        (0, a.useEffect)(() => {
            if (document.getElementById("rp-css")) return;
            let e = document.createElement("style");
            return e.id = "rp-css", e.textContent = "@keyframes rfSlideUp{from{opacity:0;transform:translateX(-50%) translateY(14px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}", document.head.appendChild(e), () => {
                e.remove()
            }
        }, []);
        let {
            theme: o
        } = (0, i.useTheme)(), n = "dark" === o, l = n ? "#3d2e22" : "#ddd5c8", [s, d] = (0, a.useState)(0), [c, p] = (0, a.useState)(!1), [m, g] = (0, a.useState)(!1), x = (0, a.useRef)(!1), u = "zh-Hant" === t;
        return (0, a.useEffect)(() => {
            let t = () => {
                let t = e.current;
                if (!t) return;
                let r = t.offsetHeight,
                    o = window.innerHeight,
                    i = window.scrollY,
                    n = t.getBoundingClientRect().top + i,
                    l = Math.min(100, Math.max(0, (i - n + o) / (r + o) * 100));
                d(l), !(l >= 80) || x.current || m || (x.current = !0, p(!0))
            };
            return window.addEventListener("scroll", t, {
                passive: !0
            }), t(), () => window.removeEventListener("scroll", t)
        }, [e, m]), a.default.createElement(a.default.Fragment, null, a.default.createElement("div", {
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                backgroundColor: n ? "#3d2e22" : "#ddd5c8",
                zIndex: 100,
                transition: "background-color 0.3s ease"
            }
        }, a.default.createElement("div", {
            style: {
                height: "100%",
                width: String(s) + "%",
                backgroundColor: "#c9845a",
                transition: "width 0.1s linear"
            }
        })), c && !m ? a.default.createElement("div", {
            style: {
                position: "fixed",
                bottom: "1.5rem",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 200,
                animation: "rfSlideUp 0.35s ease-out forwards",
                width: "calc(100vw - 2rem)",
                maxWidth: "520px"
            }
        }, a.default.createElement("div", {
            style: {
                position: "relative",
                backgroundColor: n ? "#261c14" : "#faf7f2",
                borderRight: `1px solid ${l}`,
                borderBottom: `1px solid ${l}`,
                borderLeft: `1px solid ${l}`,
                borderTop: "2px solid #c9845a",
                borderRadius: "4px",
                padding: "0.875rem 2.75rem 0.875rem 1.125rem",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.625rem",
                boxShadow: n ? "0 8px 32px rgba(0,0,0,0.45)" : "0 8px 32px rgba(90,79,67,0.15)",
                transition: "background-color 0.3s ease, border-color 0.3s ease"
            }
        }, a.default.createElement("button", {
            onClick: () => {
                g(!0), p(!1)
            },
            "aria-label": "关闭",
            style: {
                position: "absolute",
                top: "0.625rem",
                right: "0.75rem",
                backgroundColor: "transparent",
                border: "none",
                color: n ? "#6b5a4e" : "#8a7d6e",
                cursor: "pointer",
                padding: "0.25rem",
                fontSize: "1rem",
                lineHeight: 1,
                transition: "color 0.3s ease"
            }
        }, "✕"), a.default.createElement("p", {
            style: {
                color: n ? "#ede8df" : "#2a1f15",
                fontSize: "0.875rem",
                fontFamily: '"Noto Serif SC", Georgia, serif',
                lineHeight: 1.5,
                margin: 0,
                flex: "1 1 160px",
                transition: "color 0.3s ease"
            }
        }, u ? "喜歡這篇內容？訂閱通訊或解鎖完整系列。" : "喜欢这篇内容？订阅通讯或解锁完整系列。"), a.default.createElement("div", {
            style: {
                display: "flex",
                gap: "0.5rem",
                flexShrink: 0
            }
        }, a.default.createElement("button", {
            onClick: r,
            style: {
                backgroundColor: "transparent",
                color: n ? "#9a8c7e" : "#5a4f43",
                border: `1px solid ${n?"#3d2e22":"#ddd5c8"}`,
                borderRadius: "3px",
                padding: "0.5rem 0.875rem",
                fontSize: "0.8125rem",
                fontFamily: '"Noto Serif SC", Georgia, serif',
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.3s ease, border-color 0.3s ease"
            }
        }, u ? "訂閱通訊" : "订阅通讯"), a.default.createElement("a", {
            href: "/shop",
            style: {
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#c9845a",
                color: "#faf7f2",
                borderRadius: "3px",
                padding: "0.5rem 0.875rem",
                fontSize: "0.8125rem",
                fontFamily: '"Noto Serif SC", Georgia, serif',
                fontWeight: 500,
                textDecoration: "none",
                whiteSpace: "nowrap"
            }
        }, u ? "解鎖系列" : "解锁系列")))) : null)
    }
    let g = {
            title: "订阅免费通讯",
            subtitle: "每篇付费文章，我都会发送一份精华摘要版到你的邮箱。",
            placeholder: "你的邮箱地址",
            submit: "免费订阅",
            submitting: "订阅中…",
            success: "✓ 订阅成功！请查收确认邮件。",
            error: "提交失败，请稍后重试。",
            close: "关闭",
            privacy: "绝不发送垃圾邮件，随时可以退订。"
        },
        x = {
            title: "訂閱免費通訊",
            subtitle: "每篇付費文章，我都會發送一份精華摘要版到你的信箱。",
            placeholder: "你的信箱地址",
            submit: "免費訂閱",
            submitting: "訂閱中…",
            success: "✓ 訂閱成功！請查收確認信件。",
            error: "提交失敗，請稍後重試。",
            close: "關閉",
            privacy: "絕不發送垃圾郵件，隨時可以退訂。"
        };

    function u({
        lang: e,
        onClose: r
    }) {
        let o = "zh-Hant" === e ? x : g,
            [i, n] = (0, a.useState)(""),
            [l, s] = (0, a.useState)("idle");
        (0, a.useEffect)(() => {
            let e = e => {
                "Escape" === e.key && r()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
        }, [r]), (0, a.useEffect)(() => (document.body.style.overflow = "hidden", () => {
            document.body.style.overflow = ""
        }), []);
        let d = async () => {
            if (i && i.includes("@")) {
                s("loading");
                try {
                    (await fetch("/api/subscribe", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: i,
                            lang: e
                        })
                    })).ok ? s("success") : s("error")
                } catch {
                    s("error")
                }
            }
        };
        return (0, t.jsx)("div", {
            style: {
                position: "fixed",
                inset: 0,
                zIndex: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                backgroundColor: "rgba(13,11,9,0.85)",
                backdropFilter: "blur(4px)"
            },
            onClick: e => {
                e.target === e.currentTarget && r()
            },
            children: (0, t.jsxs)("div", {
                style: {
                    backgroundColor: "#1a1510",
                    border: "1px solid #2a1f15",
                    borderRadius: "12px",
                    padding: "2.5rem 2rem",
                    width: "100%",
                    maxWidth: "420px",
                    position: "relative",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.7)"
                },
                children: [(0, t.jsx)("button", {
                    onClick: r,
                    style: {
                        position: "absolute",
                        top: "1.125rem",
                        right: "1.25rem",
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#8a7d6e",
                        fontSize: "1.125rem",
                        cursor: "pointer",
                        lineHeight: 1,
                        padding: "0.25rem",
                        transition: "color 0.15s"
                    },
                    onMouseEnter: e => e.currentTarget.style.color = "#ede8df",
                    onMouseLeave: e => e.currentTarget.style.color = "#8a7d6e",
                    "aria-label": o.close,
                    children: "✕"
                }), (0, t.jsx)("div", {
                    style: {
                        fontSize: "2rem",
                        marginBottom: "1.25rem",
                        textAlign: "center"
                    },
                    children: "✉️"
                }), (0, t.jsx)("h2", {
                    style: {
                        color: "#ede8df",
                        fontSize: "1.3125rem",
                        fontFamily: '"Noto Serif SC", serif',
                        fontWeight: 700,
                        textAlign: "center",
                        marginBottom: "0.625rem",
                        letterSpacing: "0.02em"
                    },
                    children: o.title
                }), (0, t.jsx)("p", {
                    style: {
                        color: "#8a7d6e",
                        fontSize: "0.875rem",
                        textAlign: "center",
                        lineHeight: 1.6,
                        fontFamily: '"Noto Serif SC", serif',
                        marginBottom: "1.75rem"
                    },
                    children: o.subtitle
                }), "success" === l ? (0, t.jsx)("p", {
                    style: {
                        textAlign: "center",
                        color: "#c9845a",
                        fontSize: "0.9375rem",
                        fontFamily: '"Noto Serif SC", serif',
                        padding: "1rem 0"
                    },
                    children: o.success
                }) : (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("input", {
                        type: "email",
                        value: i,
                        onChange: e => n(e.target.value),
                        onKeyDown: e => {
                            "Enter" === e.key && d()
                        },
                        placeholder: o.placeholder,
                        disabled: "loading" === l,
                        style: {
                            width: "100%",
                            backgroundColor: "#0d0b09",
                            border: "1px solid #2a1f15",
                            borderRadius: "6px",
                            color: "#ede8df",
                            padding: "0.75rem 1rem",
                            fontSize: "0.9375rem",
                            fontFamily: '"Noto Serif SC", serif',
                            outline: "none",
                            marginBottom: "0.75rem",
                            boxSizing: "border-box",
                            transition: "border-color 0.15s"
                        },
                        onFocus: e => e.target.style.borderColor = "#c9845a",
                        onBlur: e => e.target.style.borderColor = "#2a1f15"
                    }), "error" === l && (0, t.jsx)("p", {
                        style: {
                            color: "#e07070",
                            fontSize: "0.8125rem",
                            marginBottom: "0.75rem"
                        },
                        children: o.error
                    }), (0, t.jsx)("button", {
                        onClick: d,
                        disabled: "loading" === l || !i,
                        style: {
                            width: "100%",
                            backgroundColor: i ? "#c9845a" : "#2a1f15",
                            color: i ? "#0d0b09" : "#8a7d6e",
                            border: "none",
                            borderRadius: "6px",
                            padding: "0.875rem",
                            fontFamily: '"Noto Serif SC", serif',
                            fontWeight: 700,
                            fontSize: "0.9375rem",
                            cursor: i ? "pointer" : "not-allowed",
                            transition: "all 0.2s",
                            letterSpacing: "0.02em"
                        },
                        children: "loading" === l ? o.submitting : o.submit
                    })]
                }), (0, t.jsx)("p", {
                    style: {
                        textAlign: "center",
                        color: "#8a7d6e",
                        fontSize: "0.75rem",
                        marginTop: "1rem",
                        fontStyle: "italic"
                    },
                    children: o.privacy
                })]
            })
        })
    }
    let h = "#f0ece3",
        y = "#d8d0c0",
        b = "#c9845a",
        S = "#2c1f14",
        j = "#8a7d6e",
        v = {
            "zh-Hant": {
                floatBtn: "生成分享圖",
                mobileReady: "生成分享圖 →",
                mobileEmpty: "請先長按選取文字",
                mobileIdle: "長按文字可生成分享圖",
                modalTitle: "分享圖預覽",
                shareBtn: "分享圖片…",
                downloadBtn: "下載圖片",
                closeBtn: "關閉",
                generating: "正在生成…",
                scanLabel: "掃碼閱讀"
            },
            "zh-Hans": {
                floatBtn: "生成分享图",
                mobileReady: "生成分享图 →",
                mobileEmpty: "请先长按选取文字",
                mobileIdle: "长按文字可生成分享图",
                modalTitle: "分享图预览",
                shareBtn: "分享图片…",
                downloadBtn: "下载图片",
                closeBtn: "关闭",
                generating: "正在生成…",
                scanLabel: "扫码阅读"
            }
        },
        w = new Set(["P", "H1", "H2", "H3", "H4", "H5", "H6", "BLOCKQUOTE", "LI", "DIV"]);

    function k({
        articleTitle: r,
        authorName: o = "Angelo Wong",
        pageUrl: i,
        lang: n = "zh-Hans"
    }) {
        let l = v[n] ? ? v["zh-Hans"],
            [s, d] = (0, a.useState)(!1),
            [c, p] = (0, a.useState)(!1),
            [m, f] = (0, a.useState)({
                x: 0,
                y: 0
            }),
            g = (0, a.useRef)([]),
            [x, u] = (0, a.useState)("idle"),
            C = (0, a.useRef)([]),
            [z, T] = (0, a.useState)(!1),
            [B, E] = (0, a.useState)(null),
            [F, R] = (0, a.useState)(!1),
            [H, N] = (0, a.useState)([]),
            W = (0, a.useRef)(null),
            I = (0, a.useRef)(null),
            L = i ? ? window.location.href;
        (0, a.useEffect)(() => {
            d(window.matchMedia("(pointer: coarse)").matches)
        }, []);
        let A = (0, a.useCallback)(() => {
            let e = window.getSelection();
            if (!e || !e.toString().trim()) return [];
            try {
                let t = function(e) {
                    let t;
                    if (0 === e.rangeCount) return [];
                    let r = e.getRangeAt(0),
                        o = document.createTreeWalker(r.commonAncestorContainer.nodeType === Node.TEXT_NODE ? r.commonAncestorContainer.parentElement : r.commonAncestorContainer, NodeFilter.SHOW_TEXT, {
                            acceptNode: e => r.intersectsNode(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                        }),
                        i = new Map,
                        n = [];
                    for (; t = o.nextNode();) {
                        let e = t,
                            o = e.textContent ? ? "";
                        if (e === r.startContainer && e === r.endContainer ? o = o.slice(r.startOffset, r.endOffset) : e === r.startContainer ? o = o.slice(r.startOffset) : e === r.endContainer && (o = o.slice(0, r.endOffset)), !(o = o.replace(/\s+/g, " ")).trim()) continue;
                        let l = e.parentElement;
                        for (; l && !w.has(l.tagName);) l = l.parentElement;
                        l || (l = document.body), i.has(l) || (i.set(l, []), n.push(l)), i.get(l).push(o)
                    }
                    return n.map(e => i.get(e).join("").trim()).filter(e => e.length > 0)
                }(e);
                if (0 === t.length) return e.toString().split(/\n+/).map(e => e.trim()).filter(Boolean);
                return t
            } catch {
                return e.toString().split(/\n+/).map(e => e.trim()).filter(Boolean)
            }
        }, []);
        (0, a.useEffect)(() => {
            if (s) return;
            let e = e => {
                    e.target.closest("[data-share-ui]") || setTimeout(() => {
                        let e = A();
                        if (!e.length) return void p(!1);
                        let t = window.getSelection().getRangeAt(0).getBoundingClientRect();
                        g.current = e, f({
                            x: Math.min(t.right, window.innerWidth - 155),
                            y: t.bottom + 10
                        }), p(!0)
                    }, 50)
                },
                t = e => {
                    e.target.closest("[data-share-ui]") || p(!1)
                };
            return document.addEventListener("mouseup", e), document.addEventListener("mousedown", t), () => {
                document.removeEventListener("mouseup", e), document.removeEventListener("mousedown", t)
            }
        }, [s, A]), (0, a.useEffect)(() => {
            let e;
            if (!s) return;
            let t = () => {
                clearTimeout(e), e = setTimeout(() => {
                    let e = A();
                    C.current = e, u(e.length > 0 ? "ready" : "idle")
                }, 400)
            };
            return document.addEventListener("selectionchange", t), () => {
                document.removeEventListener("selectionchange", t), clearTimeout(e)
            }
        }, [s, A]);
        let D = (0, a.useCallback)(async (t, r) => {
                let o = (await e.A(673378)).default;
                await o.toCanvas(t, r, {
                    width: 80,
                    margin: 1,
                    color: {
                        dark: S,
                        light: h
                    }
                })
            }, []),
            $ = (0, a.useCallback)(async t => {
                if (!t.length) {
                    u("empty"), setTimeout(() => u("idle"), 2e3);
                    return
                }
                if (N(t), p(!1), R(!0), T(!0), E(null), window.getSelection() ? .removeAllRanges(), await new Promise(e => setTimeout(e, 150)), I.current && await D(I.current, L), await new Promise(e => setTimeout(e, 60)), !W.current) return void R(!1);
                let r = (await e.A(48503)).default;
                await document.fonts.ready, E((await r(W.current, {
                    scale: 2.5,
                    useCORS: !0,
                    backgroundColor: h,
                    logging: !1,
                    windowWidth: 560
                })).toDataURL("image/png")), R(!1), u("idle")
            }, [L, D]),
            G = async () => {
                if (B) {
                    try {
                        let e = await fetch(B),
                            t = await e.blob(),
                            o = new File([t], "quote.png", {
                                type: "image/png"
                            });
                        if (navigator.share && navigator.canShare ? .({
                                files: [o]
                            })) return void await navigator.share({
                            files: [o],
                            title: r
                        })
                    } catch {}(() => {
                        if (!B) return;
                        let e = document.createElement("a");
                        e.href = B, e.download = `angelo-wong-${Date.now()}.png`, e.click()
                    })()
                }
            },
            O = "u" > typeof navigator && !!navigator.share;
        return (0, t.jsxs)(t.Fragment, {
            children: [!s && c && (0, t.jsxs)("button", {
                "data-share-ui": !0,
                onClick: () => $(g.current),
                style: {
                    position: "fixed",
                    top: m.y,
                    left: m.x,
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 14px",
                    background: b,
                    color: "#fff",
                    border: "none",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontFamily: '"Noto Serif SC", serif',
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                    boxShadow: "0 2px 16px rgba(44,31,20,0.28)",
                    whiteSpace: "nowrap",
                    userSelect: "none"
                },
                children: [(0, t.jsxs)("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    children: [(0, t.jsx)("path", {
                        d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                    }), (0, t.jsx)("polyline", {
                        points: "16 6 12 2 8 6"
                    }), (0, t.jsx)("line", {
                        x1: "12",
                        y1: "2",
                        x2: "12",
                        y2: "15"
                    })]
                }), l.floatBtn]
            }), s && (0, t.jsxs)("button", {
                "data-share-ui": !0,
                onClick: () => {
                    "empty" !== x && $(C.current)
                },
                style: {
                    position: "fixed",
                    bottom: "24px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "10px 22px",
                    background: "ready" === x ? b : "empty" === x ? "#b36040" : "rgba(30,20,12,0.78)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    color: "#fff",
                    border: "ready" === x ? "none" : "1px solid rgba(255,255,255,0.18)",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontFamily: '"Noto Serif SC", serif',
                    letterSpacing: "0.05em",
                    cursor: "empty" === x ? "default" : "pointer",
                    boxShadow: "ready" === x ? "0 4px 24px rgba(201,132,90,0.5)" : "0 4px 20px rgba(0,0,0,0.3)",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    touchAction: "manipulation",
                    transition: "background 0.2s ease, box-shadow 0.2s ease"
                },
                children: [(0, t.jsx)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    children: "ready" === x ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("path", {
                            d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                        }), (0, t.jsx)("polyline", {
                            points: "16 6 12 2 8 6"
                        }), (0, t.jsx)("line", {
                            x1: "12",
                            y1: "2",
                            x2: "12",
                            y2: "15"
                        })]
                    }) : (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("line", {
                            x1: "17",
                            y1: "10",
                            x2: "3",
                            y2: "10"
                        }), (0, t.jsx)("line", {
                            x1: "21",
                            y1: "6",
                            x2: "3",
                            y2: "6"
                        }), (0, t.jsx)("line", {
                            x1: "21",
                            y1: "14",
                            x2: "3",
                            y2: "14"
                        }), (0, t.jsx)("line", {
                            x1: "17",
                            y1: "18",
                            x2: "3",
                            y2: "18"
                        })]
                    })
                }), "ready" === x ? l.mobileReady : "empty" === x ? l.mobileEmpty : l.mobileIdle]
            }), (0, t.jsx)("div", {
                style: {
                    position: "fixed",
                    top: "-9999px",
                    left: "-9999px",
                    pointerEvents: "none"
                },
                children: (0, t.jsxs)("div", {
                    ref: W,
                    style: {
                        width: "520px",
                        background: h,
                        fontFamily: '"Noto Serif SC","Songti SC",serif',
                        overflow: "visible"
                    },
                    children: [(0, t.jsxs)("div", {
                        style: {
                            padding: "14px 28px",
                            borderBottom: `1px solid ${y}`,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        children: [(0, t.jsx)("span", {
                            style: {
                                fontSize: "11px",
                                color: j,
                                letterSpacing: "0.12em"
                            },
                            children: "angelowong.wiki"
                        }), (0, t.jsx)("span", {
                            style: {
                                fontSize: "10px",
                                color: "#c8bfb0",
                                letterSpacing: "0.1em"
                            },
                            children: "ANGELO WONG"
                        })]
                    }), (0, t.jsxs)("div", {
                        style: {
                            display: "flex",
                            padding: "32px 28px 28px"
                        },
                        children: [(0, t.jsx)("div", {
                            style: {
                                width: "3px",
                                background: b,
                                borderRadius: "2px",
                                flexShrink: 0,
                                marginRight: "20px",
                                alignSelf: "stretch"
                            }
                        }), (0, t.jsx)("div", {
                            style: {
                                flex: 1
                            },
                            children: H.map((e, r) => (0, t.jsx)("p", {
                                style: {
                                    margin: r < H.length - 1 ? "0 0 1.2em 0" : "0",
                                    fontSize: "17px",
                                    lineHeight: "1.85",
                                    color: S,
                                    letterSpacing: "0.03em",
                                    fontFamily: '"Noto Serif SC","Songti SC",serif'
                                },
                                children: e
                            }, r))
                        })]
                    }), (0, t.jsx)("div", {
                        style: {
                            height: "1px",
                            background: y,
                            margin: "0 28px"
                        }
                    }), (0, t.jsxs)("div", {
                        style: {
                            padding: "16px 28px 20px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end"
                        },
                        children: [(0, t.jsxs)("div", {
                            children: [(0, t.jsx)("p", {
                                style: {
                                    margin: "0 0 4px",
                                    fontSize: "13px",
                                    color: S,
                                    fontWeight: 600,
                                    maxWidth: "320px",
                                    lineHeight: "1.5"
                                },
                                children: r
                            }), (0, t.jsx)("p", {
                                style: {
                                    margin: 0,
                                    fontSize: "11px",
                                    color: j,
                                    letterSpacing: "0.06em"
                                },
                                children: o
                            })]
                        }), (0, t.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "4px"
                            },
                            children: [(0, t.jsx)("canvas", {
                                ref: I,
                                style: {
                                    borderRadius: "4px"
                                }
                            }), (0, t.jsx)("span", {
                                style: {
                                    fontSize: "9px",
                                    color: j,
                                    letterSpacing: "0.06em"
                                },
                                children: l.scanLabel
                            })]
                        })]
                    })]
                })
            }), z && (0, t.jsx)("div", {
                "data-share-ui": !0,
                onClick: e => {
                    e.target === e.currentTarget && T(!1)
                },
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 1e4,
                    background: "rgba(44,31,20,0.75)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px",
                    backdropFilter: "blur(4px)"
                },
                children: (0, t.jsxs)("div", {
                    style: {
                        background: h,
                        borderRadius: "12px",
                        overflow: "hidden",
                        maxWidth: "560px",
                        width: "100%",
                        boxShadow: "0 24px 64px rgba(44,31,20,0.32)",
                        display: "flex",
                        flexDirection: "column",
                        maxHeight: "90vh"
                    },
                    children: [(0, t.jsxs)("div", {
                        style: {
                            padding: "16px 20px",
                            borderBottom: `1px solid ${y}`,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexShrink: 0
                        },
                        children: [(0, t.jsx)("span", {
                            style: {
                                fontSize: "13px",
                                color: S,
                                fontFamily: '"Noto Serif SC",serif',
                                letterSpacing: "0.04em"
                            },
                            children: l.modalTitle
                        }), (0, t.jsx)("button", {
                            onClick: () => T(!1),
                            style: {
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: j,
                                padding: "4px",
                                fontSize: "22px",
                                lineHeight: 1
                            },
                            children: "×"
                        })]
                    }), (0, t.jsx)("div", {
                        style: {
                            padding: "20px",
                            background: "#e8e0d0",
                            minHeight: "160px",
                            overflowY: "auto",
                            display: "flex",
                            alignItems: F ? "center" : "flex-start",
                            justifyContent: "center",
                            flex: 1
                        },
                        children: F ? (0, t.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "12px",
                                color: j,
                                fontSize: "13px",
                                fontFamily: '"Noto Serif SC",serif'
                            },
                            children: [(0, t.jsx)("div", {
                                style: {
                                    width: "24px",
                                    height: "24px",
                                    border: `2px solid ${y}`,
                                    borderTopColor: b,
                                    borderRadius: "50%",
                                    animation: "aw-spin 0.8s linear infinite"
                                }
                            }), l.generating]
                        }) : B ? (0, t.jsx)("img", {
                            src: B,
                            alt: l.modalTitle,
                            style: {
                                width: "100%",
                                borderRadius: "6px",
                                boxShadow: "0 4px 20px rgba(44,31,20,0.15)"
                            }
                        }) : null
                    }), !F && B && (0, t.jsxs)("div", {
                        style: {
                            padding: "16px 20px",
                            display: "flex",
                            gap: "10px",
                            borderTop: `1px solid ${y}`,
                            flexShrink: 0
                        },
                        children: [(0, t.jsx)("button", {
                            onClick: G,
                            style: {
                                flex: 1,
                                padding: "11px",
                                background: b,
                                color: "#fff",
                                border: "none",
                                borderRadius: "6px",
                                fontSize: "14px",
                                fontFamily: '"Noto Serif SC",serif',
                                letterSpacing: "0.04em",
                                cursor: "pointer"
                            },
                            children: O ? l.shareBtn : l.downloadBtn
                        }), (0, t.jsx)("button", {
                            onClick: () => T(!1),
                            style: {
                                padding: "11px 16px",
                                background: "none",
                                color: j,
                                border: `1px solid ${y}`,
                                borderRadius: "6px",
                                fontSize: "14px",
                                fontFamily: '"Noto Serif SC",serif',
                                cursor: "pointer"
                            },
                            children: l.closeBtn
                        })]
                    })]
                })
            }), (0, t.jsx)("style", {
                children: "@keyframes aw-spin { to { transform: rotate(360deg); } }"
            })]
        })
    }
    var C = e.i(831483),
        z = e.i(342724),
        T = e.i(56691),
        B = e.i(475254);
    let E = (0, B.default)("bookmark", [
            ["path", {
                d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
                key: "oz39mx"
            }]
        ]),
        F = (0, B.default)("bookmark-check", [
            ["path", {
                d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
                key: "oz39mx"
            }],
            ["path", {
                d: "m9 10 2 2 4-4",
                key: "1gnqz4"
            }]
        ]),
        R = "aw_bookmarks";

    function H() {
        try {
            let e = localStorage.getItem(R);
            return e ? JSON.parse(e) : []
        } catch {
            return []
        }
    }

    function N({
        slug: e,
        title: r,
        isHant: o,
        isDark: i,
        accentColor: n,
        metaColor: l
    }) {
        let [s, d] = (0, a.useState)(!1), [c, p] = (0, a.useState)(!1), [m, f] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
            p(!0), d(H().includes(e))
        }, [e]);
        let g = (0, a.useCallback)(() => {
            let t, r = H();
            r.includes(e) ? t = r.filter(t => t !== e) : (t = [e, ...r], f(!0), setTimeout(() => f(!1), 600)), localStorage.setItem(R, JSON.stringify(t)), d(t.includes(e)), window.dispatchEvent(new CustomEvent("aw_bookmarks_changed", {
                detail: t
            }))
        }, [e]);
        return c ? (0, t.jsxs)("button", {
            onClick: g,
            title: s ? o ? "移除書籤" : "移除书签" : o ? "加入書籤" : "加入书签",
            style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.75rem",
                background: "none",
                border: `1px solid ${s?n+"80":i?"#3d2e22":"#ddd5c8"}`,
                borderRadius: "3px",
                cursor: "pointer",
                color: s ? n : l,
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                transition: "all 0.22s ease",
                transform: m ? "scale(1.12)" : "scale(1)",
                flexShrink: 0
            },
            children: [s ? (0, t.jsx)(F, {
                size: 13,
                strokeWidth: 2
            }) : (0, t.jsx)(E, {
                size: 13,
                strokeWidth: 1.5
            }), (0, t.jsx)("span", {
                style: {
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic"
                },
                children: s ? o ? "已書籤" : "已书签" : o ? "書籤" : "书签"
            })]
        }) : null
    }

    function W({
        prevArticle: e,
        nextArticle: r,
        isHant: o,
        isDark: i
    }) {
        if (!e && !r) return null;
        let n = i ? "#2a1f15" : "#e0d8cc",
            l = i ? "#1f1610" : "#f5f0e8",
            d = i ? "#261c12" : "#ede6d8",
            c = i ? "#5a4a3a" : "#b0a090",
            p = i ? "#d8d0c4" : "#2a1f15",
            m = i ? "#d4916a" : "#c9845a",
            f = i ? "#2a1f15" : "#e0d8cc",
            g = ({
                article: e,
                direction: r
            }) => {
                let [i, f] = (0, a.useState)(!1), g = o ? e.titleHant ? ? e.title : e.title, x = o ? e.category ? .titleHant ? ? e.category ? .title : e.category ? .title, u = "prev" === r;
                return (0, t.jsxs)(s.default, {
                    href: `/content/${e.slug}`,
                    style: {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.45rem",
                        padding: "1.4rem 1.6rem 1.5rem",
                        backgroundColor: i ? d : l,
                        border: `1px solid ${i?m:n}`,
                        borderRadius: "3px",
                        textDecoration: "none",
                        transition: "background-color 0.22s ease, border-color 0.22s ease",
                        alignItems: u ? "flex-start" : "flex-end",
                        textAlign: u ? "left" : "right",
                        minWidth: 0
                    },
                    onMouseEnter: () => f(!0),
                    onMouseLeave: () => f(!1),
                    children: [(0, t.jsxs)("span", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            fontSize: "0.7rem",
                            letterSpacing: "0.14em",
                            color: i ? m : c,
                            fontFamily: "Georgia, serif",
                            fontStyle: "italic",
                            flexDirection: u ? "row" : "row-reverse",
                            transition: "color 0.22s ease"
                        },
                        children: [(0, t.jsx)("svg", {
                            width: "14",
                            height: "8",
                            viewBox: "0 0 14 8",
                            fill: "none",
                            style: {
                                transform: u ? "none" : "scaleX(-1)",
                                opacity: i ? 1 : .5,
                                transition: "opacity 0.22s ease"
                            },
                            children: (0, t.jsx)("path", {
                                d: "M0 4H12M9 1L12.5 4L9 7",
                                stroke: m,
                                strokeWidth: "1.2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        }), u ? "上一篇" : "下一篇"]
                    }), x && (0, t.jsx)("span", {
                        style: {
                            fontSize: "0.68rem",
                            color: m,
                            letterSpacing: "0.1em",
                            fontFamily: "Georgia, serif",
                            fontStyle: "italic",
                            opacity: .8
                        },
                        children: x
                    }), (0, t.jsx)("span", {
                        style: {
                            fontSize: "1.05rem",
                            fontFamily: '"Noto Serif SC", Georgia, serif',
                            color: i ? m : p,
                            lineHeight: 1.6,
                            fontWeight: 400,
                            transition: "color 0.22s ease",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                        },
                        children: g
                    })]
                })
            };
        return (0, t.jsxs)("div", {
            style: {
                marginTop: "3.5rem"
            },
            children: [(0, t.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem"
                },
                children: [(0, t.jsx)("div", {
                    style: {
                        flex: 1,
                        height: "1px",
                        backgroundColor: f
                    }
                }), (0, t.jsx)("span", {
                    style: {
                        fontSize: "0.68rem",
                        letterSpacing: "0.2em",
                        color: c,
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        whiteSpace: "nowrap"
                    },
                    children: o ? "繼續閱讀" : "继续阅读"
                }), (0, t.jsx)("div", {
                    style: {
                        flex: 1,
                        height: "1px",
                        backgroundColor: f
                    }
                })]
            }), (0, t.jsx)("div", {
                style: {
                    display: "flex",
                    gap: "0.75rem"
                },
                children: e && r ? (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(g, {
                        article: e,
                        direction: "prev"
                    }), (0, t.jsx)(g, {
                        article: r,
                        direction: "next"
                    })]
                }) : e ? (0, t.jsx)(g, {
                    article: e,
                    direction: "prev"
                }) : r ? (0, t.jsx)(g, {
                    article: r,
                    direction: "next"
                }) : null
            })]
        })
    }
    e.s(["default", 0, function({
        article: e,
        seriesArticles: n,
        prevArticle: g,
        nextArticle: x
    }) {
        var h;
        let y, b, S, j, v, w, B, E, F, R, H, {
                lang: I
            } = (0, o.useLang)(),
            {
                theme: L
            } = (0, i.useTheme)(),
            A = "dark" === L,
            [D, $] = (0, a.useState)(!1),
            G = (0, a.useRef)(null),
            O = "zh-Hant" === I,
            M = (y = A ? "#cfc8be" : "#3d3028", b = A ? "#ede8df" : "#1a1510", S = A ? "#3d2e22" : "#ddd5c8", j = A ? "#9a8c7e" : "#8a7d6e", v = A ? "#261c14" : "#f2ece2", w = A ? "#d4916a" : "#c9845a", B = A ? "#ede8df" : "#1a1510", E = A ? "#b8a898" : "#6b5a4e", F = A ? "#d4916a" : "#c9845a", R = A ? "#3d2e22" : "#ddd5c8", H = A ? "#9a8c7e" : "#8a7d6e", {
                block: {
                    normal: ({
                        children: e
                    }) => (0, t.jsx)("p", {
                        style: {
                            color: y,
                            lineHeight: "1.95",
                            marginBottom: "1.6em",
                            fontSize: "1.0625rem",
                            fontFamily: '"Noto Serif SC", Georgia, serif',
                            transition: "color 0.3s ease"
                        },
                        children: e
                    }),
                    h2: ({
                        children: e
                    }) => (0, t.jsx)("h2", {
                        style: {
                            color: b,
                            fontSize: "1.35rem",
                            fontWeight: 600,
                            marginTop: "2.5em",
                            marginBottom: "0.75em",
                            fontFamily: '"Noto Serif SC", Georgia, serif',
                            letterSpacing: "0.02em",
                            borderBottom: `1px solid ${S}`,
                            paddingBottom: "0.4em",
                            transition: "color 0.3s ease, border-color 0.3s ease"
                        },
                        children: e
                    }),
                    h3: ({
                        children: e
                    }) => (0, t.jsx)("h3", {
                        style: {
                            color: b,
                            fontSize: "1.15rem",
                            fontWeight: 600,
                            marginTop: "2em",
                            marginBottom: "0.6em",
                            fontFamily: '"Noto Serif SC", Georgia, serif',
                            transition: "color 0.3s ease"
                        },
                        children: e
                    }),
                    blockquote: ({
                        children: e
                    }) => (0, t.jsx)("blockquote", {
                        style: {
                            borderLeft: `3px solid ${w}`,
                            paddingLeft: "1.25em",
                            margin: "2em 0",
                            color: j,
                            fontStyle: "italic",
                            fontFamily: "Georgia, serif",
                            fontSize: "1.1rem",
                            lineHeight: "1.8",
                            backgroundColor: v,
                            borderRadius: "0 4px 4px 0",
                            paddingTop: "0.75em",
                            paddingBottom: "0.75em",
                            paddingRight: "1em",
                            transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease"
                        },
                        children: e
                    })
                },
                marks: {
                    strong: ({
                        children: e
                    }) => (0, t.jsx)("strong", {
                        style: {
                            color: B,
                            fontWeight: 700
                        },
                        children: e
                    }),
                    em: ({
                        children: e
                    }) => (0, t.jsx)("em", {
                        style: {
                            color: E,
                            fontStyle: "italic"
                        },
                        children: e
                    }),
                    link: ({
                        value: e,
                        children: t
                    }) => a.default.createElement("a", {
                        href: e ? .href ? ? "#",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: F,
                            textDecoration: "underline",
                            textUnderlineOffset: "3px",
                            transition: "color 0.3s ease"
                        }
                    }, t)
                },
                types: {
                    image: ({
                        value: e
                    }) => e ? .asset ? .url ? (0, t.jsxs)("figure", {
                        style: {
                            margin: "2.5em 0"
                        },
                        children: [(0, t.jsx)("img", {
                            src: e.asset.url,
                            alt: e.alt ? ? "",
                            style: {
                                width: "100%",
                                borderRadius: "4px",
                                border: `1px solid ${R}`,
                                transition: "border-color 0.3s ease"
                            }
                        }), e.caption && (0, t.jsx)("figcaption", {
                            style: {
                                textAlign: "center",
                                fontSize: "0.875rem",
                                color: H,
                                marginTop: "0.75em",
                                fontStyle: "italic",
                                transition: "color 0.3s ease"
                            },
                            children: e.caption
                        })]
                    }) : null
                }
            });
        (0, a.useEffect)(() => {
            let e = () => $(!0);
            return window.addEventListener("openNewsletterModal", e), () => window.removeEventListener("openNewsletterModal", e)
        }, []);
        let _ = O ? e.titleHant ? ? e.title : e.title,
            U = O ? e.excerptHant ? ? e.excerpt : e.excerpt,
            P = O ? e.bodyHant ? ? e.body : e.body,
            X = O ? e.category ? .titleHant ? ? e.category ? .title : e.category ? .title,
            Y = (h = e.contentType, h && "article" !== h ? "bookReview" === h ? O ? "書評" : "书评" : "prosePoem" === h ? O ? "散文與詩" : "散文与诗" : O ? "內容" : "内容" : O ? "內容" : "内容"),
            Z = A ? "#1c1510" : "#faf7f2",
            q = A ? "#ede8df" : "#2a1f15",
            J = A ? "#9a8c7e" : "#8a7d6e",
            K = A ? "#3d2e22" : "#ddd5c8",
            V = A ? "#d4916a" : "#c9845a",
            Q = A ? "#ede8df" : "#1a1510",
            ee = A ? "#9a8c7e" : "#8a7d6e",
            et = A ? "#3d2e22" : "#ddd5c8",
            er = A ? "rgba(212,145,106,0.12)" : "rgba(201,132,90,0.1)",
            eo = A ? "rgba(212,145,106,0.35)" : "rgba(201,132,90,0.35)",
            ei = A ? "#9a8c7e" : "#5a4f43",
            en = A ? "#3d2e22" : "#ddd5c8",
            el = A ? "#3d2e22" : "#ddd5c8",
            ea = A ? "#9a8c7e" : "#8a7d6e",
            es = A ? "linear-gradient(to bottom, rgba(28,21,16,0) 40%, rgba(28,21,16,0.95) 100%)" : "linear-gradient(to bottom, rgba(250,247,242,0) 40%, rgba(250,247,242,0.95) 100%)",
            ed = A ? "#1c1510" : "#faf7f2",
            ec = A ? "#261c14" : "#e8e0d0",
            ep = A ? "#3d2e22" : "#d8d0c0",
            em = A ? "#1c1510" : "#faf7f2",
            ef = A ? "#ede8df" : "#2c1f14",
            eg = A ? "#3d2e22" : "#d8d0c0";
        return (0, t.jsxs)("div", {
            style: {
                backgroundColor: Z,
                color: q,
                minHeight: "100vh",
                transition: "background-color 0.3s ease, color 0.3s ease"
            },
            children: [(0, t.jsx)(f, {
                articleRef: G,
                lang: I,
                onOpenNewsletter: () => $(!0)
            }), (0, t.jsx)(z.default, {}), e.mainImageUrl && (0, t.jsxs)("div", {
                style: {
                    position: "relative",
                    width: "100%",
                    height: "clamp(200px, 35vw, 420px)"
                },
                children: [(0, t.jsx)(d.default, {
                    src: e.mainImageUrl,
                    alt: e.mainImageAlt ? ? _ ? ? "",
                    fill: !0,
                    style: {
                        objectFit: "cover",
                        objectPosition: "center"
                    },
                    priority: !0
                }), (0, t.jsx)("div", {
                    style: {
                        position: "absolute",
                        inset: 0,
                        background: es
                    }
                })]
            }), (0, t.jsxs)("div", {
                style: {
                    maxWidth: n.length > 1 ? "72rem" : "52rem",
                    margin: "0 auto",
                    padding: "0 clamp(1.25rem, 4vw, 1.5rem)",
                    display: "flex",
                    gap: "4rem",
                    alignItems: "flex-start"
                },
                children: [(0, t.jsxs)("div", {
                    style: {
                        flex: 1,
                        minWidth: 0,
                        maxWidth: n.length > 1 ? "52rem" : "100%"
                    },
                    children: [(0, t.jsxs)("header", {
                        style: {
                            padding: e.mainImageUrl ? "2rem 0 0" : "clamp(7rem, 12vw, 9rem) 0 0"
                        },
                        children: [(0, t.jsxs)("nav", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                fontSize: "0.8rem",
                                color: J,
                                marginBottom: "1.75rem",
                                letterSpacing: "0.04em",
                                flexWrap: "wrap"
                            },
                            children: [(0, t.jsx)(s.default, {
                                href: "/",
                                style: {
                                    color: J,
                                    textDecoration: "none"
                                },
                                children: O ? "首頁" : "首页"
                            }), (0, t.jsx)("span", {
                                style: {
                                    color: K
                                },
                                children: "/"
                            }), (0, t.jsx)(s.default, {
                                href: "/content",
                                style: {
                                    color: J,
                                    textDecoration: "none"
                                },
                                children: O ? "內容" : "内容"
                            }), e.contentType && "article" !== e.contentType ? (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("span", {
                                    style: {
                                        color: K
                                    },
                                    children: "/"
                                }), (0, t.jsx)("span", {
                                    style: {
                                        color: J
                                    },
                                    children: Y
                                })]
                            }) : X ? (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("span", {
                                    style: {
                                        color: K
                                    },
                                    children: "/"
                                }), (0, t.jsx)("span", {
                                    style: {
                                        color: J
                                    },
                                    children: X
                                })]
                            }) : null, e.tags && e.tags.length > 0 && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("span", {
                                    style: {
                                        color: K
                                    },
                                    children: "/"
                                }), (0, t.jsx)("span", {
                                    style: {
                                        color: V
                                    },
                                    children: O ? e.tags[0].nameHant ? ? e.tags[0].name : e.tags[0].name
                                })]
                            })]
                        }), X && (0, t.jsx)("p", {
                            style: {
                                fontFamily: "Georgia, serif",
                                fontStyle: "italic",
                                color: V,
                                fontSize: "0.82rem",
                                letterSpacing: "0.18em",
                                marginBottom: "0.75rem",
                                transition: "color 0.3s ease"
                            },
                            children: X
                        }), (0, t.jsx)("h1", {
                            style: {
                                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                                fontFamily: '"Noto Serif SC", Georgia, serif',
                                fontWeight: 300,
                                lineHeight: 1.3,
                                color: Q,
                                letterSpacing: "0.03em",
                                marginBottom: "1.25rem",
                                transition: "color 0.3s ease"
                            },
                            children: _
                        }), (0, t.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                gap: "0.5rem 1rem",
                                marginBottom: "1.5rem",
                                fontSize: "0.82rem",
                                color: ee,
                                letterSpacing: "0.06em"
                            },
                            children: [e.publishedAt && (0, t.jsx)("span", {
                                children: function(e) {
                                    if (!e) return "";
                                    let t = new Date(e);
                                    return t.getFullYear() + " 年 " + (t.getMonth() + 1) + " 月 " + t.getDate() + " 日"
                                }(e.publishedAt)
                            }), e.readTime && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("span", {
                                    style: {
                                        color: et
                                    },
                                    children: "·"
                                }), (0, t.jsx)("span", {
                                    children: O ? `約 ${e.readTime} 分鐘閱讀` : `约 ${e.readTime} 分钟阅读`
                                })]
                            }), e.emailGated && (0, t.jsx)("span", {
                                style: {
                                    backgroundColor: er,
                                    color: V,
                                    border: `1px solid ${eo}`,
                                    borderRadius: "3px",
                                    padding: "1px 8px",
                                    fontSize: "0.72rem",
                                    letterSpacing: "0.08em",
                                    transition: "background-color 0.3s ease, border-color 0.3s ease"
                                },
                                children: O ? "訂閱閱讀" : "订阅阅读"
                            }), (0, t.jsx)("div", {
                                style: {
                                    marginLeft: "auto"
                                },
                                children: (0, t.jsx)(N, {
                                    slug: e.slug ? ? "",
                                    title: _ ? ? "",
                                    isHant: O,
                                    isDark: A,
                                    accentColor: V,
                                    metaColor: ee
                                })
                            })]
                        }), U && (0, t.jsx)("p", {
                            style: {
                                color: ei,
                                fontSize: "1.0625rem",
                                lineHeight: "1.8",
                                fontStyle: "italic",
                                fontFamily: "Georgia, serif",
                                borderLeft: `2px solid ${en}`,
                                paddingLeft: "1.25rem",
                                marginBottom: "0",
                                transition: "color 0.3s ease, border-color 0.3s ease"
                            },
                            children: U
                        })]
                    }), (0, t.jsx)("div", {
                        style: {
                            height: "1px",
                            backgroundColor: el,
                            margin: "2rem 0",
                            transition: "background-color 0.3s ease"
                        }
                    }), n.length > 1 && (0, t.jsx)("div", {
                        className: "lg:hidden",
                        style: {
                            marginBottom: "1.5rem"
                        },
                        children: (0, t.jsx)(p, {
                            mode: "horizontal",
                            articles: n,
                            currentSlug: e.slug ? ? "",
                            categoryTitle: X,
                            lang: I
                        })
                    }), (0, t.jsxs)("main", {
                        ref: G,
                        children: [P && P.length > 0 ? (0, t.jsx)(m.default, {
                            enabled: e.emailGated ? ? !1,
                            lang: I,
                            fadeColor: ed,
                            cardBg: ec,
                            cardBorder: ep,
                            inputBg: em,
                            inputColor: ef,
                            inputBorder: eg,
                            accentColor: V,
                            children: (0, t.jsx)(c.PortableText, {
                                value: P,
                                components: M
                            })
                        }) : (0, t.jsx)("p", {
                            style: {
                                color: ea,
                                fontStyle: "italic"
                            },
                            children: O ? "內容準備中…" : "内容准备中…"
                        }), (0, t.jsx)("div", {
                            style: {
                                marginTop: "5rem"
                            },
                            children: (0, t.jsx)(l, {
                                video: e.relatedVideo,
                                articleTitle: _ ? ? ""
                            })
                        }), (0, t.jsx)(k, {
                            articleTitle: _ ? ? "",
                            authorName: "Angelo Wong",
                            lang: I
                        }), (0, t.jsx)(C.default, {
                            lang: I
                        }), (0, t.jsx)(W, {
                            prevArticle: g,
                            nextArticle: x,
                            isHant: O,
                            isDark: A
                        }), (0, t.jsx)("div", {
                            style: {
                                marginTop: "3rem",
                                paddingBottom: "5rem"
                            },
                            children: (0, t.jsx)(r.default, {
                                articleId: e._id
                            })
                        })]
                    })]
                }), n.length > 1 && (0, t.jsx)("aside", {
                    className: "hidden lg:block",
                    style: {
                        width: "16rem",
                        flexShrink: 0,
                        position: "sticky",
                        top: "5rem"
                    },
                    children: (0, t.jsx)(p, {
                        mode: "sidebar",
                        articles: n,
                        currentSlug: e.slug ? ? "",
                        categoryTitle: X,
                        lang: I
                    })
                })]
            }), (0, t.jsx)(T.default, {}), D && (0, t.jsx)(u, {
                lang: I,
                onClose: () => $(!1)
            })]
        })
    }], 794758)
}]);