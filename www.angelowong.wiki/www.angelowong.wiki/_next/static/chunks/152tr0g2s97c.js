(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 87316, e => {
    "use strict";
    let t = (0, e.i(475254).default)("calendar", [
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }]
    ]);
    e.s(["Calendar", 0, t], 87316)
}, 924170, e => {
    "use strict";
    var t = e.i(843476),
        s = e.i(271645),
        n = e.i(704401);

    function a({
        articleId: e,
        parentId: i,
        onSuccess: c,
        onCancel: l,
        compact: r
    }) {
        let {
            convert: m
        } = (0, n.useLang)(), [o, d] = (0, s.useState)(""), [h, u] = (0, s.useState)(""), [p, g] = (0, s.useState)(""), [x, y] = (0, s.useState)("idle"), [j, b] = (0, s.useState)(!1), f = (0, s.useRef)(null), v = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
            let e = localStorage.getItem("aw_subscriber_email");
            e && (b(!0), g(e))
        }, []);
        let k = o.trim().length > 0 && h.trim().length > 0,
            S = () => {
                let e = p.trim();
                e && e.includes("@") && N(e)
            },
            N = async t => {
                y("submitting");
                try {
                    if (!(await fetch("/api/comments", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                articleId: e,
                                nickname: o.trim(),
                                content: h.trim(),
                                email: t,
                                parentId: i ? ? null
                            })
                        })).ok) throw Error();
                    localStorage.setItem("aw_subscriber_email", t), b(!0), y("success"), u(""), d(""), v.current && (v.current.style.height = "auto"), setTimeout(() => {
                        y("idle"), c()
                    }, 1500)
                } catch {
                    y("error"), setTimeout(() => y(j ? "idle" : "need-subscribe"), 3e3)
                }
            },
            w = "success" === x ? "#7a9e7e" : "error" === x ? "#c97a5a" : k ? "#c9845a" : "#b0a898",
            I = m("submitting" === x ? "发布中…" : "success" === x ? "已发布 ✓" : "error" === x ? "发布失败" : "need-subscribe" === x ? "订阅并发布" : "发布");
        return (0, t.jsxs)("div", {
            className: r ? "comment-compose comment-compose--compact" : "comment-compose",
            children: [(0, t.jsxs)("div", {
                style: {
                    padding: r ? "0.75rem 1rem 0" : "1rem 1.25rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    flexWrap: "wrap"
                },
                children: [(0, t.jsx)("span", {
                    className: "comment-compose-label",
                    children: m("以")
                }), (0, t.jsx)("input", {
                    type: "text",
                    value: o,
                    onChange: e => d(e.target.value),
                    placeholder: m("你的昵称"),
                    maxLength: 20,
                    className: "comment-input"
                }), (0, t.jsx)("span", {
                    className: "comment-compose-label",
                    children: m("的身份留言")
                })]
            }), (0, t.jsx)("div", {
                style: {
                    padding: r ? "0.5rem 1rem 0" : "0.75rem 1.25rem 0"
                },
                children: (0, t.jsx)("textarea", {
                    ref: v,
                    value: h,
                    onChange: e => {
                        u(e.target.value);
                        let t = e.target;
                        t.style.height = "auto", t.style.height = `${t.scrollHeight}px`
                    },
                    placeholder: m(i ? "写下你的回复…" : "写下你的想法…"),
                    rows: r ? 2 : 3,
                    maxLength: 1e3,
                    className: "comment-textarea"
                })
            }), (0, t.jsx)("div", {
                style: {
                    maxHeight: "need-subscribe" === x ? "80px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease"
                },
                children: (0, t.jsxs)("div", {
                    style: {
                        padding: "0 1.25rem 0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        flexWrap: "wrap"
                    },
                    children: [(0, t.jsx)("span", {
                        className: "comment-compose-label",
                        children: m("留言需订阅邮件 →")
                    }), (0, t.jsx)("input", {
                        ref: f,
                        type: "email",
                        value: p,
                        onChange: e => g(e.target.value),
                        onKeyDown: e => "Enter" === e.key && S(),
                        placeholder: "your@email.com",
                        className: "comment-email-input"
                    })]
                })
            }), (0, t.jsxs)("div", {
                style: {
                    padding: r ? "0.5rem 1rem 0.75rem" : "0.75rem 1.25rem 1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [(0, t.jsx)("span", {
                    className: "comment-char-count",
                    children: h.length > 0 ? `${h.length} / 1000` : ""
                }), (0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center"
                    },
                    children: [l && (0, t.jsx)("button", {
                        onClick: l,
                        className: "comment-action-btn",
                        style: {
                            fontSize: "0.78rem"
                        },
                        children: m("取消")
                    }), (0, t.jsx)("button", {
                        onClick: "need-subscribe" === x ? S : () => {
                            k && (j ? N(p) : (y("need-subscribe"), setTimeout(() => f.current ? .focus(), 150)))
                        },
                        disabled: !k || "submitting" === x || "success" === x || "need-subscribe" === x && (!p.trim() || !p.includes("@")),
                        style: {
                            background: "none",
                            border: `1px solid ${"success"===x?"#7a9e7e":"error"===x?"#c97a5a":k?"#c9845a":"#c8bfb0"}`,
                            borderRadius: "4px",
                            padding: "0.35rem 1rem",
                            fontSize: "0.8rem",
                            color: w,
                            fontFamily: '"Noto Serif SC", Georgia, serif',
                            cursor: k && "submitting" !== x && "success" !== x ? "pointer" : "default",
                            transition: "all 0.2s",
                            letterSpacing: "0.04em"
                        },
                        onMouseEnter: e => {
                            if (k && "submitting" !== x && "success" !== x) {
                                let t = e.target;
                                t.style.background = "#c9845a", t.style.color = "#faf7f2"
                            }
                        },
                        onMouseLeave: e => {
                            let t = e.target;
                            t.style.background = "none", t.style.color = w
                        },
                        children: I
                    })]
                })]
            })]
        })
    }

    function i({
        comment: e,
        articleId: c,
        likedIds: l,
        onLike: r,
        onReplySuccess: m,
        isReply: o
    }) {
        var d;
        let h, u, p, {
                convert: g
            } = (0, n.useLang)(),
            [x, y] = (0, s.useState)(!1),
            [j, b] = (0, s.useState)(!1),
            f = l.has(e.id);
        return (0, t.jsx)("div", {
            id: `c-${e.id}`,
            className: o ? "comment-item comment-item--reply" : "comment-item",
            children: (0, t.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start"
                },
                children: [(0, t.jsx)("div", {
                    className: "comment-avatar",
                    children: e.author_name.trim().slice(0, 2).toUpperCase()
                }), (0, t.jsxs)("div", {
                    style: {
                        flex: 1,
                        minWidth: 0
                    },
                    children: [(0, t.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            marginBottom: "0.4rem"
                        },
                        children: [(0, t.jsx)("span", {
                            className: "comment-author",
                            children: e.author_name
                        }), (0, t.jsx)("span", {
                            className: "comment-time",
                            children: (d = e.created_at, (p = Math.floor((u = Math.floor((h = Math.floor((Date.now() - new Date(d).getTime()) / 6e4)) / 60)) / 24)) > 30 ? new Date(d).toLocaleDateString("zh-CN", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            }) : g(p > 0 ? `${p} 天前` : u > 0 ? `${u} 小时前` : h > 0 ? `${h} 分钟前` : "刚刚"))
                        })]
                    }), (0, t.jsx)("p", {
                        className: "comment-body",
                        children: e.body
                    }), (0, t.jsxs)("div", {
                        className: "comment-actions",
                        children: [(0, t.jsxs)("button", {
                            onClick: () => r(e.id),
                            className: `comment-action-btn ${f?"comment-action-btn--liked":""}`,
                            children: [(0, t.jsx)("span", {
                                children: f ? "♥" : "♡"
                            }), e.like_count > 0 && (0, t.jsx)("span", {
                                children: e.like_count
                            })]
                        }), !o && (0, t.jsx)("button", {
                            onClick: () => y(e => !e),
                            className: "comment-action-btn",
                            children: (0, t.jsx)("span", {
                                children: g("回复")
                            })
                        }), (0, t.jsx)("button", {
                            onClick: () => {
                                let t = `${window.location.origin}${window.location.pathname}#c-${e.id}`;
                                navigator.clipboard.writeText(t).then(() => {
                                    b(!0), setTimeout(() => b(!1), 2e3)
                                })
                            },
                            className: "comment-action-btn",
                            children: (0, t.jsx)("span", {
                                children: "↗"
                            })
                        })]
                    }), x && (0, t.jsx)("div", {
                        style: {
                            marginTop: "1rem"
                        },
                        children: (0, t.jsx)(a, {
                            articleId: c,
                            parentId: e.id,
                            compact: !0,
                            onSuccess: () => {
                                y(!1), m()
                            },
                            onCancel: () => y(!1)
                        })
                    }), e.replies && e.replies.length > 0 && (0, t.jsx)("div", {
                        className: "comment-replies",
                        children: e.replies.map(e => (0, t.jsx)(i, {
                            comment: e,
                            articleId: c,
                            likedIds: l,
                            onLike: r,
                            onReplySuccess: m,
                            isReply: !0
                        }, e.id))
                    })]
                })]
            })
        })
    }
    e.s(["default", 0, function({
        articleId: e
    }) {
        let c, l, {
                convert: r
            } = (0, n.useLang)(),
            [m, o] = (0, s.useState)([]),
            [d, h] = (0, s.useState)(!0),
            [u, p] = (0, s.useState)(new Set),
            g = () => {
                fetch(`/api/comments?articleId=${encodeURIComponent(e)}`).then(e => e.json()).then(e => o(Array.isArray(e) ? e : [])).catch(() => {}).finally(() => h(!1))
            };
        (0, s.useEffect)(() => {
            let e = localStorage.getItem("aw_liked_comments");
            if (e) try {
                p(new Set(JSON.parse(e)))
            } catch {}
            g()
        }, [e]);
        let x = async e => {
                if (u.has(e)) return;
                let t = new Set(u);
                t.add(e), p(t), localStorage.setItem("aw_liked_comments", JSON.stringify([...t])), o(t => t.map(t => t.id === e ? { ...t,
                    like_count: t.like_count + 1
                } : t)), await fetch(`/api/comments/${e}/like`, {
                    method: "POST"
                })
            },
            y = (c = new Map, l = [], m.forEach(e => c.set(e.id, { ...e,
                replies: []
            })), c.forEach(e => {
                e.parent_id && c.has(e.parent_id) ? c.get(e.parent_id).replies.push(e) : l.push(e)
            }), l);
        return (0, t.jsxs)("section", {
            className: "comments-section",
            children: [(0, t.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.75rem",
                    marginBottom: "2rem"
                },
                children: [(0, t.jsx)("h3", {
                    className: "comments-title",
                    children: r("讨论")
                }), m.length > 0 && (0, t.jsxs)("span", {
                    className: "comments-count",
                    children: [m.length, " ", r("条留言")]
                })]
            }), d ? (0, t.jsx)("div", {
                style: {
                    height: "2rem"
                }
            }) : 0 === y.length ? (0, t.jsx)("p", {
                className: "comments-empty",
                children: r("暂无留言，成为第一个留言的人")
            }) : (0, t.jsx)("div", {
                style: {
                    marginBottom: "2.5rem"
                },
                children: y.map(s => (0, t.jsx)(i, {
                    comment: s,
                    articleId: e,
                    likedIds: u,
                    onLike: x,
                    onReplySuccess: g
                }, s.id))
            }), (0, t.jsx)(a, {
                articleId: e,
                onSuccess: g
            }), (0, t.jsx)("p", {
                className: "comment-fine-print",
                children: r("留言需订阅邮件，邮箱不公开显示")
            })]
        })
    }])
}, 670093, e => {
    e.v(t => Promise.all(["static/chunks/0ogl~aoding55.js", "static/chunks/0v-1di-~x8ow6.js"].map(t => e.l(t))).then(() => t(182028)))
}, 135621, e => {
    e.v(t => Promise.all(["static/chunks/0p~n7_bjk-ly3.js", "static/chunks/0-i3b~r.9~1.i.js", "static/chunks/0c4679ceqmz22.js"].map(t => e.l(t))).then(() => t(434725)))
}]);