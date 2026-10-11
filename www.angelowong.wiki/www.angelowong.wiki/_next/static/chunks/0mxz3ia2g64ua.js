(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 710480, e => {
    "use strict";
    var t = e.i(843476),
        i = e.i(271645),
        n = e.i(846932),
        r = e.i(88653),
        a = e.i(342724),
        l = e.i(56691),
        o = e.i(493681),
        s = e.i(704401);
    let d = {
            cosmic: "#6b7fcf",
            geological: "#b8875a",
            life: "#5c9968",
            human: "#c4a84e",
            civilization: "#c9845a"
        },
        c = {
            cosmic: [0x1122e6e01, 138e8],
            geological: [0x202fbf01, 46e8],
            life: [3000001, 54e7],
            human: [10001, 3e6],
            civilization: [1, 1e4]
        },
        p = ["cosmic", "geological", "life", "human", "civilization"];

    function m(e, t) {
        let i = new Set;
        for (let n of p) {
            let [r, a] = c[n];
            e <= a && t >= r && i.add(n)
        }
        return i
    }
    let h = (0, i.forwardRef)(function({
        events: n,
        isDark: r,
        uiLang: a,
        onEventSelect: l,
        onZoomChange: o
    }, s) {
        let h = (0, i.useRef)(null),
            x = (0, i.useRef)(null);
        return (0, i.useImperativeHandle)(s, () => ({
            zoomToEra(e) {
                if (x.current)
                    if ("all" === e) x.current.zoomToRange(1, 138e8);
                    else {
                        let [t, i] = c[e];
                        x.current.zoomToRange(t, i)
                    }
            },
            zoomToRange(e, t) {
                x.current ? .zoomToRange(e, t)
            }
        })), (0, i.useEffect)(() => {
            if (!h.current) return;
            let t = h.current,
                i = !1;
            return e.A(670093).then(e => {
                if (i) return;
                let s = Math.max(t.getBoundingClientRect().width, t.clientWidth, t.offsetWidth) || window.innerWidth - 80 || 1200,
                    h = Math.min(Math.max(.52 * window.innerHeight, 320), 500),
                    g = s - 40 - 40,
                    u = h - 48 - 64,
                    f = u / 2;
                e.select(t).selectAll("*").remove();
                let y = e.select(t).append("svg").attr("width", s).attr("height", h).style("display", "block").style("overflow", "hidden").style("user-select", "none"),
                    b = "tlc" + Math.random().toString(36).slice(2, 8);
                y.append("defs").append("clipPath").attr("id", b).append("rect").attr("x", 0).attr("y", -48).attr("width", g).attr("height", h);
                let v = y.append("g").attr("transform", "translate(40,48)"),
                    j = e.scaleLog().domain([1, 138e8]).range([g, 0]).clamp(!0),
                    z = j,
                    w = v.append("g").attr("clip-path", `url(#${b})`),
                    k = new Map;
                p.forEach(e => {
                    let [t, i] = c[e];
                    k.set(e, w.append("rect").attr("x", j(i)).attr("y", 0).attr("width", Math.max(0, j(t) - j(i))).attr("height", u).attr("fill", d[e]).attr("opacity", .055).attr("pointer-events", "none"))
                });
                let S = {
                        cosmic: 7e9,
                        geological: 12e8,
                        life: 4e7,
                        human: 2e5,
                        civilization: 80
                    },
                    H = {
                        cosmic: "宇宙史",
                        geological: "地质史",
                        life: "生命演化",
                        human: "人类史",
                        civilization: "文明史"
                    },
                    C = v.append("g").attr("pointer-events", "none"),
                    $ = new Map;

                function E(e) {
                    let [t, i] = e.domain(), n = Math.min(1, Math.max(0, (i - t - 5e7) / 2e8));
                    p.forEach(t => {
                        let i = e(S[t]);
                        $.get(t) ? .attr("transform", `translate(${i},${f})`).attr("opacity", i >= 0 && i <= g ? n : 0)
                    })
                }
                p.forEach(e => {
                    let t = j(S[e]),
                        i = C.append("g").attr("transform", `translate(${t},${f})`);
                    i.append("text").attr("text-anchor", "middle").attr("dy", "-2.2rem").attr("font-family", "var(--font-display), Georgia, serif").attr("font-size", "11px").attr("letter-spacing", "0.22em").attr("font-weight", "300").attr("fill", d[e]).attr("opacity", .75).text(H[e]), i.append("line").attr("x1", 0).attr("x2", 0).attr("y1", -20).attr("y2", -8).attr("stroke", d[e]).attr("stroke-width", 1).attr("opacity", .4), $.set(e, i)
                }), v.append("line").attr("x1", 0).attr("x2", g).attr("y1", f).attr("y2", f).attr("stroke", r ? "#3d2e22" : "#d8d0c0").attr("stroke-width", 1);
                let M = v.append("g"),
                    R = [138e8, 1e10, 5e9, 46e8, 2e9, 1e9, 5e8, 25e7, 1e8, 5e7, 25e6, 1e7, 5e6, 1e6, 5e5, 1e5, 5e4, 12e3, 5025, 2025, 1025, 525, 225, 75];

                function T(e, t) {
                    M.selectAll("*").remove();
                    let [i, n] = e.domain(), a = [];
                    R.filter(e => e >= .5 * i && e <= 2 * n).forEach(i => {
                        let n = e(i);
                        if (n < 0 || n > g || a.some(e => 80 > Math.abs(e - n))) return;
                        a.push(n);
                        let l = M.append("g").attr("transform", `translate(${n},${f})`);
                        l.append("line").attr("y1", -6).attr("y2", 6).attr("stroke", r ? "#6a5a4e" : "#a89e90").attr("stroke-width", 1.5), l.append("text").attr("y", 26).attr("text-anchor", "middle").attr("font-size", "13px").attr("font-weight", "400").attr("font-family", "var(--font-display), Georgia, serif").attr("fill", r ? "#9a8c7e" : "#6a5e53").text(function(e, t) {
                            if ("en" === t) {
                                if (e >= 1e9) {
                                    let t = e / 1e9,
                                        i = t >= 10 ? Math.round(t).toString() : t.toFixed(1);
                                    return `${i}B yrs`
                                }
                                if (e >= 1e6) {
                                    let t = e / 1e6,
                                        i = t >= 100 ? Math.round(t).toString() : t.toFixed(0);
                                    return `${i}M yrs`
                                }
                                if (e >= 1e4) return `${Math.round(e/1e3)}k yrs`;
                                let t = 2026 - e;
                                return t <= 0 ? `${Math.abs(Math.round(t))} BCE` : `${Math.round(t)} CE`
                            }
                            if (e >= 1e8) {
                                let i = e / 1e8,
                                    n = i >= 10 ? Math.round(i).toString() : i.toFixed(1);
                                return "zh-Hant" === t ? `${n}億年前` : `${n}亿年前`
                            }
                            if (e >= 1e7) {
                                let i = Math.round(e / 1e6);
                                return "zh-Hant" === t ? `${i}百萬年前` : `${i}百万年前`
                            }
                            if (e >= 1e4) {
                                let t = Math.round(e / 1e4);
                                return `${t}万年前`
                            }
                            let i = 2026 - e;
                            if (i <= 0) {
                                let e = Math.abs(Math.round(i));
                                return `公元前${e}年`
                            }
                            return `公元${Math.round(i)}年`
                        }(i, t))
                    })
                }
                let W = v.append("g").attr("clip-path", `url(#${b})`),
                    A = new Map;

                function B(t, i) {
                    W.selectAll("*").remove(), A.clear(), t.forEach(t => {
                        let n = [9, 6.5, 4.5, 3.5, 2.5][t.importance - 1] ? ? 2.5,
                            a = "en" === i ? t.titleEn || t.title : "zh-Hant" === i && t.titleHant || t.title,
                            o = "en" === i ? 14 : 9,
                            s = a.length > o ? a.slice(0, o - 1) + "…" : a,
                            c = W.append("g").attr("data-id", t._id).style("cursor", "pointer");
                        c.append("circle").attr("class", "nc").attr("r", n).attr("fill", d[t.era]).attr("stroke", r ? "#1c1510" : "#faf7f2").attr("stroke-width", 1 === t.importance ? 1.5 : .5).attr("opacity", t.importance <= 2 ? .88 : .65), c.append("text").attr("class", "nl").attr("text-anchor", "middle").attr("font-family", "var(--font-display), Georgia, serif").attr("font-size", 1 === t.importance ? "12px" : "11px").attr("fill", r ? "#c8bfb2" : "#5a4f43").attr("opacity", 0).text(s), c.on("click", e => {
                            e.stopPropagation(), l(t), W.selectAll(".nc").attr("stroke", function() {
                                return this.parentElement ? .getAttribute("data-id") === t._id ? r ? "#d4916a" : "#c9845a" : r ? "#1c1510" : "#faf7f2"
                            }).attr("stroke-width", function() {
                                return this.parentElement ? .getAttribute("data-id") === t._id ? 2.5 : .5
                            })
                        }), c.on("mouseenter", function() {
                            e.select(this).select(".nc").attr("opacity", 1).attr("stroke-width", 2)
                        }), c.on("mouseleave", function() {
                            e.select(this).select(".nc").attr("opacity", t.importance <= 2 ? .88 : .65).attr("stroke-width", 1 === t.importance ? 1.5 : .5)
                        }), A.set(t._id, c)
                    })
                }

                function I(e, t, i) {
                    var n;
                    let [, r] = e.domain(), a = (n = r - e.domain()[0]) > 3e7 ? 0 : n > 3e6 ? 1 : n > 2e5 ? 2 : 3, l = [], o = [];
                    i.forEach((i, n) => {
                        let r = e(i.yearsAgo),
                            s = i.importance <= t && r >= -20 && r <= g + 20,
                            d = A.get(i._id);
                        d && (d.attr("transform", `translate(${r},${f})`).attr("visibility", s ? "visible" : "hidden"), s && i.importance <= a && r >= 4 && r <= g - 4 && (n % 2 == 0 ? l : o).push({
                            x: r,
                            id: i._id,
                            imp: i.importance
                        }))
                    });
                    let s = (e, t) => {
                        let i = -1 / 0;
                        e.sort((e, t) => e.x - t.x).forEach(({
                            x: e,
                            id: n
                        }) => {
                            let r = A.get(n);
                            if (!r) return;
                            let a = e - i > 100;
                            r.select(".nl").attr("dy", t).attr("opacity", +!!a), a && (i = e)
                        })
                    };
                    A.forEach(e => e.select(".nl").attr("opacity", 0)), a > 0 && (s(l, -16), s(o, 22))
                }
                let L = 1,
                    F = a;
                B(n, a), T(j, a), I(j, L, n), E(j);
                let D = e.zoom().scaleExtent([.8, 5e6]).translateExtent([
                    [-(.05 * g), -1 / 0],
                    [1.05 * g, 1 / 0]
                ]).on("zoom", ({
                    transform: e
                }) => {
                    var t;
                    let [i, r] = (z = e.rescaleX(j)).domain();
                    L = (t = r - i) > 1e9 ? 1 : t > 1e8 ? 2 : t > 5e6 ? 3 : t > 1e5 ? 4 : 5, p.forEach(e => {
                        let [t, i] = c[e], n = k.get(e);
                        n && n.attr("x", z(i)).attr("width", Math.max(0, z(t) - z(i)))
                    }), T(z, F), I(z, L, n), E(z), o(m(i, r), L)
                });
                y.call(D), y.on("click", () => {
                    l(null), W.selectAll(".nc").attr("stroke", r ? "#1c1510" : "#faf7f2").attr("stroke-width", .5)
                }), x.current = {
                    zoomToRange: function(t, i) {
                        let n = j(i),
                            r = j(t) - n;
                        if (r <= 0) return;
                        let a = .84 * g / r,
                            l = -n * a + .08 * g;
                        y.transition().duration(750).ease(e.easeCubicInOut).call(D.transform, e.zoomIdentity.translate(l, 0).scale(a))
                    },
                    update(e, t) {
                        F = t, B(e, t), T(z, t), I(z, L, e)
                    }
                }, o(m(1, 138e8), 2)
            }), () => {
                i = !0, x.current = null, e.A(670093).then(e => e.select(t).selectAll("*").remove())
            }
        }, [r]), (0, i.useEffect)(() => {
            x.current ? .update(n, a)
        }, [n, a]), (0, t.jsx)("div", {
            ref: h,
            style: {
                width: "100%",
                height: "clamp(320px, 52vh, 500px)",
                cursor: "grab",
                userSelect: "none",
                WebkitUserSelect: "none"
            }
        })
    });
    h.displayName = "TimelineViz";
    var x = e.i(37727),
        g = e.i(87316),
        u = e.i(852008),
        f = e.i(475254);
    let y = (0, f.default)("target", [
            ["circle", {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "6",
                key: "1vlfrh"
            }],
            ["circle", {
                cx: "12",
                cy: "12",
                r: "2",
                key: "1c9p78"
            }]
        ]),
        b = (0, f.default)("maximize-2", [
            ["path", {
                d: "M15 3h6v6",
                key: "1q9fwt"
            }],
            ["path", {
                d: "m21 3-7 7",
                key: "1l2asr"
            }],
            ["path", {
                d: "m3 21 7-7",
                key: "tjx5ai"
            }],
            ["path", {
                d: "M9 21H3v-6",
                key: "wtvkvv"
            }]
        ]),
        v = (0, f.default)("minimize-2", [
            ["path", {
                d: "m14 10 7-7",
                key: "oa77jy"
            }],
            ["path", {
                d: "M20 10h-6V4",
                key: "mjg0md"
            }],
            ["path", {
                d: "m3 21 7-7",
                key: "tjx5ai"
            }],
            ["path", {
                d: "M4 14h6v6",
                key: "rmj7iw"
            }]
        ]),
        j = null;
    async function z() {
        return j || (j = (await e.A(135621)).default), j
    }
    let w = {
        cosmic: "#7b9fc7",
        geological: "#8fbc8b",
        life: "#90c080",
        human: "#e8a87c",
        civilization: "#c9845a"
    };

    function k(e, t) {
        let i = Math.abs(Math.round(e)).toLocaleString("zh-CN");
        return e < -1 ? `公元前 ${i} 年` : e <= 1 ? "公元元年" : `${i} 年`
    }

    function S(e, t, i) {
        let n = w[e.era] ? ? "#c9845a",
            r = e.importance ? ? 3,
            a = Math.max(8, 18 - (r - 1) * 2),
            l = document.createElement("div");
        l.style.cssText = `width:${a}px;height:${a}px;border-radius:50%;background:${n};border:2px solid rgba(255,255,255,0.75);box-shadow:0 0 ${1===r?10:6}px ${n}99;cursor:pointer;transition:transform 0.12s ease, box-shadow 0.12s ease;pointer-events:auto;position:relative;z-index:10;margin-left:-${a/2}px;margin-top:-${a/2}px`;
        let o = t && e.titleHant ? e.titleHant : e.title;
        return l.setAttribute("aria-label", o), l.addEventListener("mouseenter", () => {
            l.style.transform = "scale(1.6)", l.style.boxShadow = `0 0 16px ${n}cc`, l.style.zIndex = "20"
        }), l.addEventListener("mouseleave", () => {
            l.style.transform = "scale(1)", l.style.boxShadow = `0 0 ${1===r?10:6}px ${n}99`, l.style.zIndex = "10"
        }), l.addEventListener("click", t => {
            t.stopPropagation(), i(e, t.clientX, t.clientY)
        }), l.addEventListener("touchend", t => {
            t.preventDefault(), t.stopPropagation();
            let n = t.changedTouches[0];
            i(e, n ? n.clientX : window.innerWidth / 2, n ? n.clientY : window.innerHeight / 2)
        }, {
            passive: !1
        }), l
    }

    function H({
        event: e,
        onClose: i,
        isDark: r,
        isHant: a,
        clickX: l,
        clickY: o
    }) {
        let s = window.innerWidth,
            d = window.innerHeight,
            c = l + 300 + 16 < s ? l + 16 : Math.max(16, l - 300 - 16),
            p = a && e.titleHant ? e.titleHant : e.title,
            m = a && e.dateLabelHant ? e.dateLabelHant : e.dateLabel,
            h = a && e.descriptionHant ? e.descriptionHant : e.description,
            u = h.length > 220 ? h.slice(0, 220) + "…" : h,
            f = w[e.era] ? ? "#c9845a";
        return (0, t.jsxs)(n.motion.div, {
            initial: {
                opacity: 0,
                y: 8,
                scale: .97
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            exit: {
                opacity: 0,
                y: 8,
                scale: .97
            },
            transition: {
                duration: .18,
                ease: [.4, 0, .2, 1]
            },
            style: {
                position: "fixed",
                left: `${c}px`,
                top: `${o-130<16?16:o+130>d-16?d-260-16:o-130}px`,
                width: "300px",
                background: "#1e1510ee",
                border: "1px solid rgba(201,132,90,0.45)",
                borderRadius: "10px",
                padding: "16px",
                zIndex: 10010,
                boxShadow: "0 8px 40px rgba(0,0,0,0.75)",
                maxHeight: "280px",
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
                backdropFilter: "blur(12px)"
            },
            children: [(0, t.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "8px"
                },
                children: [(0, t.jsx)("span", {
                    style: {
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: f,
                        textTransform: "uppercase"
                    },
                    children: e.era
                }), (0, t.jsx)("button", {
                    onClick: i,
                    "aria-label": "关闭",
                    style: {
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0 0 0 10px",
                        color: "#8a7d6e",
                        lineHeight: 1,
                        flexShrink: 0
                    },
                    children: (0, t.jsx)(x.X, {
                        size: 14
                    })
                })]
            }), (0, t.jsx)("h3", {
                style: {
                    margin: "0 0 6px",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: 1.4,
                    color: "#ede8df",
                    fontFamily: '"Noto Serif SC", serif'
                },
                children: p
            }), (0, t.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    marginBottom: "8px",
                    color: "#8a7d6e",
                    fontSize: "11px"
                },
                children: [(0, t.jsx)(g.Calendar, {
                    size: 10,
                    strokeWidth: 1.8
                }), m]
            }), (0, t.jsx)("p", {
                style: {
                    margin: 0,
                    fontSize: "12.5px",
                    lineHeight: 1.75,
                    color: "#c8bfb4"
                },
                children: u
            })]
        })
    }

    function C({
        mode: e,
        onChange: i,
        isDark: n
    }) {
        let r = n ? "#3d2e22" : "#d8d0c0",
            a = "#c9845a",
            l = "#8a7d6e";
        return (0, t.jsxs)("div", {
            style: {
                display: "flex",
                gap: "6px",
                alignItems: "center"
            },
            children: [(0, t.jsxs)("button", {
                onClick: () => i("cumulative"),
                title: "全部展示：显示当前年份及之前的所有事件",
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "5px 12px",
                    background: "cumulative" === e ? n ? a + "22" : a + "18" : "transparent",
                    border: `1px solid ${"cumulative"===e?a:r}`,
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "11px",
                    color: "cumulative" === e ? a : l,
                    transition: "all 0.2s ease",
                    letterSpacing: "0.04em",
                    fontFamily: "inherit"
                },
                children: [(0, t.jsx)(u.Layers, {
                    size: 11,
                    strokeWidth: 1.8
                }), "全部展示"]
            }), (0, t.jsxs)("button", {
                onClick: () => i("snapshot"),
                title: "按年份展示：只显示当前年份 ±400 年内的事件",
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "5px 12px",
                    background: "snapshot" === e ? n ? a + "22" : a + "18" : "transparent",
                    border: `1px solid ${"snapshot"===e?a:r}`,
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "11px",
                    color: "snapshot" === e ? a : l,
                    transition: "all 0.2s ease",
                    letterSpacing: "0.04em",
                    fontFamily: "inherit"
                },
                children: [(0, t.jsx)(y, {
                    size: 11,
                    strokeWidth: 1.8
                }), "按年份展示"]
            })]
        })
    }

    function $({
        events: e
    }) {
        let a, l = (0, i.useRef)(null),
            d = (0, i.useRef)(null),
            c = (0, i.useRef)(null),
            p = (0, i.useRef)(null),
            m = (0, i.useRef)([]),
            {
                theme: h
            } = (0, o.useTheme)(),
            x = "dark" === h,
            {
                lang: g,
                convert: u
            } = (0, s.useLang)(),
            f = "zh-Hant" === g,
            [y, j] = (0, i.useState)(!1),
            [E, M] = (0, i.useState)(null),
            [R, T] = (0, i.useState)(0),
            [W, A] = (0, i.useState)(0),
            B = (0, i.useRef)(null),
            [I, L] = (0, i.useState)("cumulative"),
            [F, D] = (0, i.useState)(!1);
        (0, i.useEffect)(() => (F ? (document.body.style.overflow = "hidden", document.body.style.position = "fixed", document.body.style.width = "100%") : (document.body.style.overflow = "", document.body.style.position = "", document.body.style.width = ""), () => {
            document.body.style.overflow = "", document.body.style.position = "", document.body.style.width = ""
        }), [F]);
        let [G, _] = (0, i.useState)({
            x: 200,
            y: 200
        }), O = (0, i.useCallback)((e, t, i) => {
            M(e), _({
                x: t,
                y: i
            })
        }, []), N = (0, i.useCallback)(() => {
            D(e => !e)
        }, []), P = (0, i.useCallback)(e => {
            T(e), B.current && clearTimeout(B.current), B.current = setTimeout(() => A(e), 120)
        }, []), V = (a = e.filter(e => null != e.lat && null != e.lng), "cumulative" === I ? a.filter(e => 2025 - e.yearsAgo <= W) : a.filter(e => 400 >= Math.abs(2025 - e.yearsAgo - W))), X = e.filter(e => null == e.lat || null == e.lng).sort((e, t) => t.yearsAgo - e.yearsAgo);
        (0, i.useEffect)(() => {
            if (!l.current) return;
            let e = !0;
            new Image().src = "https://unpkg.com/three-globe/example/img/earth-day.jpg", (async () => {
                let t = await z();
                if (!e || !l.current) return;
                let i = l.current,
                    n = i.clientWidth || 360,
                    r = Math.min(Math.max(260, Math.round(.58 * n)), 480),
                    a = t({
                        rendererConfig: {
                            antialias: !0,
                            alpha: !0
                        }
                    })(i).width(n).height(r).backgroundColor("rgba(0,0,0,0)").globeImageUrl("https://unpkg.com/three-globe/example/img/earth-day.jpg").atmosphereColor("#c9845a").atmosphereAltitude(.14).htmlElementsData([]).htmlLat(e => e.lat).htmlLng(e => e.lng).htmlAltitude(0).htmlElement(e => S(e, f, O));
                a.renderer().setClearColor(0, 0), a.pointOfView({
                    lat: 32,
                    lng: 32,
                    altitude: 2.2
                }, 0);
                let o = a.controls();
                o.autoRotate = !1, o.enableZoom = !0, o.enablePan = !1, o.minDistance = 150, o.maxDistance = 800, o.touches = {
                    ONE: 2,
                    TWO: 512
                }, o.enableZoom = !0, o.zoomSpeed = 1.2, o.rotateSpeed = .6, p.current = a, e && j(!0)
            })();
            let t = () => {};
            return window.addEventListener("resize", t), () => {
                e = !1, window.removeEventListener("resize", t), B.current && clearTimeout(B.current), l.current && (l.current.innerHTML = "")
            }
        }, []), (0, i.useEffect)(() => {
            if (!c.current) return;
            let e = !1,
                t = new ResizeObserver(t => {
                    for (let i of t) {
                        if (!p.current) return;
                        let {
                            width: t,
                            height: n
                        } = i.contentRect;
                        if (t < 10 || n < 10) return;
                        p.current.width(Math.round(t)).height(Math.round(n)), F && !e && (e = !0, p.current.pointOfView({
                            lat: 32,
                            lng: 32,
                            altitude: 1.8
                        }, 500))
                    }
                });
            return t.observe(c.current), () => t.disconnect()
        }, [F]);
        let Y = (0, i.useRef)("");
        (0, i.useEffect)(() => {
            if (!p.current) return;
            let e = V.map(e => e._id).join(",") + (f ? "h" : "s");
            e !== Y.current && (Y.current = e, m.current = V, p.current.htmlElement(e => S(e, f, O)).htmlElementsData([...V]))
        }, [V, f, O]);
        let U = (R - -12e3) / 14025 * 100,
            Z = x ? "#3d2e22" : "#d8d0c0",
            K = x ? "#ede8df" : "#2c1f14",
            q = "#8a7d6e";
        return (0, t.jsxs)("section", {
            style: {
                paddingBottom: "48px",
                "--globe-thumb-bg": "#c9845a",
                "--globe-thumb-border": x ? "#1c1510" : "#f0ece3"
            },
            children: [(0, t.jsx)("style", {
                children: `
        .tl-globe-slider {
          -webkit-appearance: none; appearance: none;
          width: 100%; height: 22px;
          background: transparent; cursor: pointer; outline: none;
        }
        .tl-globe-slider::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--globe-thumb-bg);
          border: 2.5px solid var(--globe-thumb-border);
          box-shadow: 0 2px 10px rgba(44,31,20,0.35); cursor: pointer;
          transition: transform 0.15s ease;
        }
        .tl-globe-slider::-webkit-slider-thumb:hover,
        .tl-globe-slider:active::-webkit-slider-thumb { transform: scale(1.2); }
        .tl-globe-slider::-moz-range-thumb {
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--globe-thumb-bg);
          border: 2.5px solid var(--globe-thumb-border);
          cursor: pointer;
        }
      `
            }), (0, t.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    flexWrap: "wrap",
                    gap: "12px",
                    padding: "32px clamp(16px, 4vw, 40px) 20px",
                    borderBottom: `1px solid ${Z}`,
                    marginBottom: "24px"
                },
                children: [(0, t.jsxs)("div", {
                    children: [(0, t.jsx)("h2", {
                        style: {
                            margin: "0 0 4px",
                            fontSize: "clamp(18px, 3vw, 26px)",
                            fontWeight: 300,
                            letterSpacing: "0.16em",
                            color: K,
                            fontFamily: '"Noto Serif SC", serif'
                        },
                        children: u("文明地图")
                    }), (0, t.jsx)("p", {
                        style: {
                            margin: 0,
                            fontSize: "12px",
                            color: q,
                            letterSpacing: "0.06em"
                        },
                        children: "cumulative" === I ? u("全部展示该年份之前的所有事件") : "快照：±400 年内的事件"
                    })]
                }), (0, t.jsx)(C, {
                    mode: I,
                    onChange: L,
                    isDark: x
                })]
            }), (0, t.jsxs)("div", {
                ref: d,
                style: { ...F ? {
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        display: "flex",
                        flexDirection: "column",
                        background: x ? "#1c1510" : "#f0ece3",
                        height: "100dvh",
                        width: "100dvw"
                    } : {
                        maxWidth: "860px",
                        width: "100%",
                        margin: "0 auto",
                        padding: "0 clamp(8px, 3vw, 24px)"
                    }
                },
                children: [!y && (0, t.jsxs)("div", {
                    style: {
                        height: "340px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                        color: q
                    },
                    children: [(0, t.jsx)(n.motion.div, {
                        animate: {
                            rotate: 360
                        },
                        transition: {
                            duration: 2.2,
                            repeat: 1 / 0,
                            ease: "linear"
                        },
                        style: {
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            border: "2px solid #d8d0c0",
                            borderTopColor: "#c9845a"
                        }
                    }), (0, t.jsx)("span", {
                        style: {
                            fontSize: "12px",
                            letterSpacing: "0.1em"
                        },
                        children: u("正在加载地球仪…")
                    })]
                }), (0, t.jsxs)("div", {
                    ref: c,
                    style: {
                        position: "relative",
                        flex: F ? "1 1 auto" : void 0,
                        minHeight: F ? 0 : "clamp(260px, 58vw, 480px)",
                        overflow: "hidden",
                        borderRadius: F ? 0 : "14px",
                        background: x ? "#191007" : "#e8e0d0",
                        touchAction: "none"
                    },
                    children: [(0, t.jsx)("div", {
                        ref: l,
                        style: {
                            width: "100%",
                            height: "100%",
                            opacity: +!!y,
                            transition: "opacity 0.5s ease"
                        }
                    }), y && (0, t.jsxs)("div", {
                        style: {
                            position: "absolute",
                            top: "14px",
                            left: "14px",
                            background: "rgba(28,21,16,0.75)",
                            backdropFilter: "blur(6px)",
                            color: "#ede8df",
                            fontSize: "11px",
                            padding: "4px 12px",
                            borderRadius: "20px",
                            border: "1px solid rgba(201,132,90,0.3)",
                            letterSpacing: "0.06em",
                            userSelect: "none",
                            pointerEvents: "none",
                            zIndex: 10
                        },
                        children: [V.length, " ", u("个事件")]
                    }), y && (0, t.jsxs)("div", {
                        style: {
                            position: "absolute",
                            top: "14px",
                            right: "14px",
                            color: "rgba(138,125,110,0.85)",
                            fontSize: "10px",
                            letterSpacing: "0.05em",
                            userSelect: "none",
                            pointerEvents: "none",
                            textAlign: "right",
                            lineHeight: 1.7,
                            zIndex: 10
                        },
                        children: [u("拖拽旋转 · 双指缩放"), (0, t.jsx)("br", {}), u("点击标记查看详情"), X.length > 0 && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("br", {}), u("宇宙/地质/生命史见下方无坐标事件")]
                        })]
                    }), (0, t.jsx)(r.AnimatePresence, {
                        children: E && (0, t.jsx)(H, {
                            event: E,
                            onClose: () => M(null),
                            isDark: x,
                            isHant: f,
                            clickX: G.x,
                            clickY: G.y
                        })
                    })]
                }), y && X.length > 0 && (0, t.jsxs)("div", {
                    style: {
                        flexShrink: 0,
                        padding: F ? "8px clamp(20px, 6vw, 80px) 0" : "10px clamp(8px, 3vw, 24px) 0",
                        background: F ? x ? "#1c1510" : "#f0ece3" : "transparent"
                    },
                    children: [(0, t.jsxs)("div", {
                        style: {
                            fontSize: "10px",
                            color: q,
                            letterSpacing: "0.06em",
                            marginBottom: "6px",
                            padding: "0 2px"
                        },
                        children: [u("无地理坐标事件"), " · ", u("宇宙史 / 地质史 / 生命演化史等"), "（", X.length, "）"]
                    }), (0, t.jsx)("div", {
                        style: {
                            display: "flex",
                            gap: "8px",
                            overflowX: "auto",
                            paddingBottom: "4px",
                            WebkitOverflowScrolling: "touch"
                        },
                        children: X.map(e => {
                            let i = w[e.era] ? ? "#c9845a",
                                n = f && e.titleHant ? e.titleHant : e.title;
                            return (0, t.jsxs)("button", {
                                onClick: t => O(e, t.clientX, t.clientY),
                                style: {
                                    flex: "0 0 auto",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    padding: "6px 12px",
                                    background: x ? "#261c14" : "#e8e0d0",
                                    border: `1px solid ${i}55`,
                                    borderRadius: "20px",
                                    cursor: "pointer",
                                    fontSize: "11px",
                                    color: K,
                                    whiteSpace: "nowrap",
                                    fontFamily: "inherit"
                                },
                                children: [(0, t.jsx)("span", {
                                    style: {
                                        width: "7px",
                                        height: "7px",
                                        borderRadius: "50%",
                                        background: i,
                                        flexShrink: 0
                                    }
                                }), n]
                            }, e._id)
                        })
                    })]
                }), y && (0, t.jsx)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        padding: F ? "8px 20px" : "8px 4px 0",
                        flexShrink: 0,
                        background: F ? x ? "#1c1510" : "#f0ece3" : "transparent"
                    },
                    children: (0, t.jsx)("button", {
                        onClick: N,
                        "aria-label": F ? "退出全屏" : "全屏",
                        style: {
                            background: "transparent",
                            border: `1px solid ${x?"#3d2e22":"#d8d0c0"}`,
                            borderRadius: "8px",
                            padding: "6px 12px",
                            cursor: "pointer",
                            color: "#8a7d6e",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            fontSize: "11px",
                            letterSpacing: "0.06em",
                            transition: "all 0.2s ease"
                        },
                        children: F ? (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(v, {
                                size: 13
                            }), " 退出全屏"]
                        }) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(b, {
                                size: 13
                            }), " 全屏"]
                        })
                    })
                }), (0, t.jsxs)("div", {
                    style: {
                        maxWidth: F ? "100%" : "860px",
                        width: "100%",
                        margin: F ? 0 : "8px auto 0",
                        padding: F ? "4px clamp(20px, 6vw, 80px) 20px" : "0 clamp(16px, 4vw, 40px)",
                        flexShrink: 0,
                        background: F ? x ? "#1c1510" : "#f0ece3" : "transparent",
                        borderTop: F ? `1px solid ${x?"#3d2e22":"#d8d0c0"}` : "none"
                    },
                    children: [(0, t.jsx)("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: F ? "10px" : "14px"
                        },
                        children: (0, t.jsx)(n.motion.span, {
                            initial: {
                                opacity: .5,
                                y: 3
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .1
                            },
                            style: {
                                display: "inline-block",
                                fontSize: F ? "clamp(28px, 4.5vw, 52px)" : "clamp(20px, 5vw, 38px)",
                                fontWeight: F ? 300 : 200,
                                fontFamily: '"Noto Serif SC", serif',
                                letterSpacing: "0.08em",
                                color: R < 0 ? q : x ? "#d4916a" : "#c9845a",
                                transition: "color 0.4s ease"
                            },
                            children: k(R, f)
                        }, 50 * Math.round(R / 50))
                    }), (0, t.jsxs)("div", {
                        style: {
                            position: "relative",
                            marginBottom: "8px"
                        },
                        children: [(0, t.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: "50%",
                                left: 0,
                                right: 0,
                                height: "2px",
                                transform: "translateY(-50%)",
                                background: x ? "#3d2e22" : "#d8d0c0",
                                borderRadius: "2px"
                            }
                        }), (0, t.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: "50%",
                                left: 0,
                                width: `${U}%`,
                                height: "2px",
                                transform: "translateY(-50%)",
                                background: "linear-gradient(to right, #8a7d6e, #c9845a)",
                                borderRadius: "2px",
                                transition: "width 0.04s linear"
                            }
                        }), (0, t.jsx)("input", {
                            type: "range",
                            min: -12e3,
                            max: 2025,
                            step: 25,
                            value: R,
                            onChange: e => P(Number(e.target.value)),
                            className: "tl-globe-slider"
                        })]
                    }), (0, t.jsx)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: [{
                            year: -1e4,
                            label: "前万年"
                        }, {
                            year: -5e3,
                            label: "前5千"
                        }, {
                            year: 0,
                            label: "元年"
                        }, {
                            year: 1e3,
                            label: "1000"
                        }, {
                            year: 2025,
                            label: "今"
                        }].map(({
                            year: e,
                            label: i
                        }) => (0, t.jsx)("button", {
                            onClick: () => P(e),
                            style: {
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontSize: F ? "13px" : "11px",
                                fontWeight: F ? 600 : 400,
                                padding: "4px 6px",
                                color: 600 > Math.abs(R - e) ? x ? "#d4916a" : "#c9845a" : q,
                                transition: "color 0.2s",
                                letterSpacing: "0.06em",
                                fontFamily: "inherit"
                            },
                            children: i
                        }, e))
                    }), "snapshot" === I && (0, t.jsxs)(n.motion.p, {
                        initial: {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            height: "auto"
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        style: {
                            textAlign: "center",
                            fontSize: "11px",
                            color: q,
                            letterSpacing: "0.06em",
                            marginTop: "8px"
                        },
                        children: ["显示 ", k(R - 400, f), " — ", k(R + 400, f), " 之间的事件"]
                    })]
                })]
            })]
        })
    }
    var E = e.i(924170);
    let M = {
            cosmic: {
                "zh-Hans": "🌌 宇宙史",
                "zh-Hant": "🌌 宇宙史",
                en: "🌌 Cosmic"
            },
            geological: {
                "zh-Hans": "🪨 地质史",
                "zh-Hant": "🪨 地質史",
                en: "🪨 Geological"
            },
            life: {
                "zh-Hans": "🌿 生命演化史",
                "zh-Hant": "🌿 生命演化史",
                en: "🌿 Life & Evolution"
            },
            human: {
                "zh-Hans": "🧬 人类史",
                "zh-Hant": "🧬 人類史",
                en: "🧬 Human Prehistory"
            },
            civilization: {
                "zh-Hans": "🏛️ 文明史",
                "zh-Hant": "🏛️ 文明史",
                en: "🏛️ Civilization"
            }
        },
        R = {
            cosmic: {
                "zh-Hans": "宇宙",
                "zh-Hant": "宇宙",
                en: "Cosmic"
            },
            geological: {
                "zh-Hans": "地质",
                "zh-Hant": "地質",
                en: "Geo"
            },
            life: {
                "zh-Hans": "生命",
                "zh-Hant": "生命",
                en: "Life"
            },
            human: {
                "zh-Hans": "人类",
                "zh-Hant": "人類",
                en: "Human"
            },
            civilization: {
                "zh-Hans": "文明",
                "zh-Hant": "文明",
                en: "Civ"
            }
        },
        T = {
            cosmic: "🌌",
            geological: "🪨",
            life: "🌿",
            human: "🧬",
            civilization: "🏛️"
        },
        W = {
            cosmic: "radial-gradient(ellipse 110% 110% at 28% 38%, rgba(12,15,42,0.88) 0%, rgba(25,16,7,0) 68%)",
            geological: "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(42,22,6,0.65) 0%, rgba(25,16,7,0) 62%)",
            life: "radial-gradient(ellipse 100% 100% at 18% 82%, rgba(6,26,10,0.70) 0%, rgba(25,16,7,0) 62%)",
            human: "radial-gradient(ellipse 100% 100% at 72% 82%, rgba(32,24,2,0.58) 0%, rgba(25,16,7,0) 62%)",
            civilization: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(25,16,7,0) 0%, rgba(25,16,7,0) 100%)"
        },
        A = {
            cosmic: "radial-gradient(ellipse 110% 110% at 28% 38%, rgba(168,188,240,0.42) 0%, rgba(247,243,234,0) 65%)",
            geological: "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(210,160,95,0.28) 0%, rgba(247,243,234,0) 62%)",
            life: "radial-gradient(ellipse 100% 100% at 18% 82%, rgba(100,175,108,0.28) 0%, rgba(247,243,234,0) 62%)",
            human: "radial-gradient(ellipse 100% 100% at 72% 82%, rgba(195,170,55,0.24) 0%, rgba(247,243,234,0) 62%)",
            civilization: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(247,243,234,0) 0%, rgba(247,243,234,0) 100%)"
        },
        B = Array.from({
            length: 88
        }, (e, t) => ({
            cx: `${(61.8033988*t%100).toFixed(2)}%`,
            cy: `${(38.1966011*t%100).toFixed(2)}%`,
            r: [.65, .95, .75, 1.25, .55][t % 5],
            opacity: parseFloat((.1 + t % 7 * .055).toFixed(2))
        }));

    function I({
        isDark: e
    }) {
        return (0, t.jsx)("svg", {
            style: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%"
            },
            preserveAspectRatio: "xMidYMid slice",
            children: B.map((i, n) => (0, t.jsx)("circle", {
                cx: i.cx,
                cy: i.cy,
                r: i.r,
                fill: e ? "#b8ccff" : "#6878bb",
                opacity: i.opacity
            }, n))
        })
    }

    function L({
        focusEra: e,
        isDark: i
    }) {
        let a = i ? W[e] : A[e];
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(r.AnimatePresence, {
                children: (0, t.jsx)(n.motion.div, {
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
                        duration: 1.4,
                        ease: "easeInOut"
                    },
                    style: {
                        position: "absolute",
                        inset: 0,
                        background: a,
                        pointerEvents: "none",
                        zIndex: 1
                    }
                }, `ag-${e}-${i?"d":"l"}`)
            }), (0, t.jsx)(r.AnimatePresence, {
                children: "cosmic" === e && (0, t.jsx)(n.motion.div, {
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
                        duration: 1.8,
                        ease: "easeInOut"
                    },
                    style: {
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none",
                        zIndex: 2
                    },
                    children: (0, t.jsx)(I, {
                        isDark: i
                    })
                }, `stars-${i?"d":"l"}`)
            })]
        })
    }
    let F = {
        pageTitle: {
            "zh-Hans": "历史轴",
            "zh-Hant": "歷史軸",
            en: "Timeline"
        },
        pageSubhead: {
            "zh-Hans": "宇宙大历史",
            "zh-Hant": "宇宙大歷史",
            en: "The Grand History"
        },
        pageDesc: {
            "zh-Hans": "从138亿年前的宇宙大爆炸，到生命起源、人类文明——一条跨越所有时代的历史轴。",
            "zh-Hant": "從138億年前的宇宙大爆炸，到生命起源、人類文明——一條跨越所有時代的歷史軸。",
            en: "From the Big Bang to the present — across cosmic, geological, biological and human time."
        },
        all: {
            "zh-Hans": "全部",
            "zh-Hant": "全部",
            en: "All"
        },
        allTopics: {
            "zh-Hans": "所有学科",
            "zh-Hant": "所有學科",
            en: "All Topics"
        },
        readArt: {
            "zh-Hans": "深度阅读",
            "zh-Hant": "深度閱讀",
            en: "Read Article"
        },
        watchVid: {
            "zh-Hans": "观看视频",
            "zh-Hant": "觀看視頻",
            en: "Watch Video"
        },
        more: {
            "zh-Hans": "延伸阅读",
            "zh-Hant": "延伸閱讀",
            en: "Learn More"
        },
        close: {
            "zh-Hans": "关闭",
            "zh-Hant": "關閉",
            en: "Close"
        },
        details: {
            "zh-Hans": "查看详情",
            "zh-Hant": "查看詳情",
            en: "View Details"
        },
        hint: {
            "zh-Hans": "滚轮缩放 · 拖拽平移 · 点击节点查看详情",
            "zh-Hant": "滾輪縮放 · 拖拽平移 · 點擊節點查看詳情",
            en: "Scroll to zoom · Drag to pan · Click a node for details"
        },
        noEvents: {
            "zh-Hans": "暂无匹配事件。",
            "zh-Hant": "暫無匹配事件。",
            en: "No events match."
        },
        events: {
            "zh-Hans": "个事件",
            "zh-Hant": "個事件",
            en: "events"
        },
        commentsHint: {
            "zh-Hans": "发现某条事件的年代、名称或描述有误？欢迎在下方留言指出，请尽量说明是哪一条事件、你认为哪里需要勘误或调整，我们会逐条核对修正。",
            "zh-Hant": "發現某條事件的年代、名稱或描述有誤？歡迎在下方留言指出，請盡量說明是哪一條事件、你認為哪裡需要勘誤或調整，我們會逐條核對修正。",
            en: "Spot a wrong date, name, or description? Leave a comment below — please note which event and what needs correcting, and we’ll review it."
        }
    };

    function D(e, t) {
        return F[e] ? .[t] ? ? F[e] ? .["zh-Hans"] ? ? e
    }

    function G(e, t) {
        return "en" === t && e.titleEn ? e.titleEn : "zh-Hant" === t && e.titleHant ? e.titleHant : e.title
    }

    function _(e, t) {
        return "en" === t && e.dateLabelEn ? e.dateLabelEn : "zh-Hant" === t && e.dateLabelHant ? e.dateLabelHant : e.dateLabel
    }

    function O(e, t) {
        return "en" === t && e.descriptionEn ? e.descriptionEn : "zh-Hant" === t && e.descriptionHant ? e.descriptionHant : e.description
    }

    function N(e, t) {
        return "en" === t && e.name.en ? e.name.en : "zh-Hant" === t && e.name.zhHant ? e.name.zhHant : e.name.zhHans
    }

    function P({
        visibleEras: e,
        isDark: i
    }) {
        return (0, t.jsx)("div", {
            style: {
                position: "absolute",
                bottom: "0.875rem",
                right: "0.875rem",
                opacity: .65,
                pointerEvents: "none"
            },
            children: (0, t.jsx)("svg", {
                width: 62,
                height: 62,
                children: p.map((n, r) => (0, t.jsx)("circle", {
                    cx: 31,
                    cy: 31,
                    r: [29, 23, 17, 12, 7][r],
                    fill: "none",
                    stroke: e.has(n) ? d[n] : i ? "#2e2218" : "#d0c8bc",
                    strokeWidth: e.has(n) ? 1.5 : 1,
                    opacity: e.has(n) ? .9 : .3
                }, n))
            })
        })
    }

    function V({
        event: e,
        lang: i,
        isDark: r,
        isMobile: a,
        onClose: l,
        accent: o,
        titleC: s,
        muted: c,
        border: p
    }) {
        let m = d[e.era],
            h = r ? "#1a1208" : "#f5f0e8",
            x = a ? {
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 200,
                maxHeight: "88vh",
                backgroundColor: h,
                borderRadius: "14px 14px 0 0",
                borderTop: `1px solid ${p}`,
                overflowY: "auto",
                boxShadow: "0 -8px 40px rgba(0,0,0,0.3)"
            } : {
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 200,
                width: "clamp(300px, 36vw, 460px)",
                backgroundColor: h,
                borderLeft: `1px solid ${p}`,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                boxShadow: r ? "-12px 0 40px rgba(0,0,0,0.5)" : "-8px 0 30px rgba(90,79,67,0.1)"
            },
            g = (0, t.jsxs)(t.Fragment, {
                children: [a ? (0, t.jsx)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        padding: "0.75rem 0 0.25rem"
                    },
                    children: (0, t.jsx)("div", {
                        style: {
                            width: 36,
                            height: 4,
                            borderRadius: 2,
                            backgroundColor: r ? "#3d2e22" : "#d0c8bc"
                        }
                    })
                }) : (0, t.jsx)("div", {
                    style: {
                        height: 3,
                        backgroundColor: m,
                        flexShrink: 0
                    }
                }), (0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.7rem 1.5rem 0"
                    },
                    children: [a && (0, t.jsxs)("span", {
                        style: {
                            fontSize: "0.72rem",
                            color: m,
                            fontFamily: "var(--font-display), Georgia, serif",
                            fontStyle: "italic",
                            letterSpacing: "0.12em"
                        },
                        children: [T[e.era], " ", M[e.era][i]]
                    }), (0, t.jsxs)("button", {
                        onClick: l,
                        style: {
                            marginLeft: "auto",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: c,
                            fontSize: "0.72rem",
                            letterSpacing: "0.08em",
                            fontFamily: "var(--font-display), Georgia, serif",
                            padding: "0.2rem 0"
                        },
                        children: ["✕ ", D("close", i)]
                    })]
                }), (0, t.jsxs)("div", {
                    style: {
                        padding: a ? "0.75rem 1.5rem 2.5rem" : "0.25rem 1.75rem 2rem"
                    },
                    children: [(0, t.jsx)("div", {
                        style: {
                            display: "inline-block",
                            padding: "0.25rem 0.75rem",
                            marginBottom: "1rem",
                            borderRadius: "2px",
                            backgroundColor: m + "18",
                            border: `1px solid ${m}40`
                        },
                        children: (0, t.jsx)("p", {
                            style: {
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontStyle: "italic",
                                fontSize: "1rem",
                                fontWeight: 500,
                                color: m,
                                letterSpacing: "0.06em",
                                margin: 0
                            },
                            children: _(e, i)
                        })
                    }), (0, t.jsx)("h2", {
                        style: {
                            fontSize: a ? "1.15rem" : "clamp(1.05rem, 2.2vw, 1.35rem)",
                            fontWeight: 400,
                            color: s,
                            lineHeight: 1.4,
                            letterSpacing: "0.02em",
                            marginBottom: "1.2rem"
                        },
                        children: G(e, i)
                    }), e.imageUrl && (0, t.jsxs)("div", {
                        style: {
                            marginBottom: "1.2rem",
                            borderRadius: 4,
                            overflow: "hidden",
                            border: `1px solid ${p}`
                        },
                        children: [(0, t.jsx)("img", {
                            src: e.imageUrl,
                            alt: e.imageAlt ? ? "",
                            style: {
                                width: "100%",
                                height: "auto",
                                display: "block"
                            }
                        }), e.imageCaption && (0, t.jsx)("p", {
                            style: {
                                fontSize: "0.7rem",
                                color: c,
                                padding: "0.35rem 0.6rem",
                                fontStyle: "italic"
                            },
                            children: e.imageCaption
                        })]
                    }), (0, t.jsx)("p", {
                        style: {
                            fontSize: "0.9rem",
                            color: r ? "#b0a79b" : "#3a2e22",
                            lineHeight: 1.9,
                            marginBottom: "1.4rem"
                        },
                        children: O(e, i)
                    }), (e.tags ? .length ? ? 0) > 0 && (0, t.jsx)("div", {
                        style: {
                            display: "flex",
                            gap: "0.35rem",
                            flexWrap: "wrap",
                            marginBottom: "1.4rem"
                        },
                        children: e.tags.map(e => (0, t.jsx)("span", {
                            style: {
                                fontSize: "0.66rem",
                                padding: "0.12rem 0.5rem",
                                borderRadius: 2,
                                border: `1px solid ${p}`,
                                color: c,
                                letterSpacing: "0.05em"
                            },
                            children: N(e, i)
                        }, e._id))
                    }), (0, t.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.7rem"
                        },
                        children: [e.relatedArticle && (0, t.jsxs)("a", {
                            href: `/content/${e.relatedArticle.slug}`,
                            style: {
                                fontSize: "0.82rem",
                                color: o,
                                textDecoration: "none",
                                borderBottom: `1px solid ${o}30`,
                                paddingBottom: "0.7rem",
                                letterSpacing: "0.05em",
                                display: "flex",
                                gap: "0.5rem",
                                alignItems: "center"
                            },
                            children: [(0, t.jsx)("span", {
                                children: "📝"
                            }), D("readArt", i), ": ", G(e.relatedArticle, i)]
                        }), e.relatedVideo && (0, t.jsxs)("a", {
                            href: `/video/${e.relatedVideo.slug}`,
                            style: {
                                fontSize: "0.82rem",
                                color: o,
                                textDecoration: "none",
                                borderBottom: `1px solid ${o}30`,
                                paddingBottom: "0.7rem",
                                letterSpacing: "0.05em",
                                display: "flex",
                                gap: "0.5rem",
                                alignItems: "center"
                            },
                            children: [(0, t.jsx)("span", {
                                children: "▶"
                            }), D("watchVid", i), ": ", e.relatedVideo.title]
                        }), e.externalUrl && (0, t.jsxs)("a", {
                            href: e.externalUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                fontSize: "0.82rem",
                                color: c,
                                textDecoration: "none",
                                letterSpacing: "0.05em",
                                display: "flex",
                                gap: "0.5rem",
                                alignItems: "center"
                            },
                            children: [(0, t.jsx)("span", {
                                children: "↗"
                            }), e.externalUrlLabel ? ? D("more", i)]
                        })]
                    })]
                })]
            });
        return a ? (0, t.jsx)(n.motion.div, {
            style: x,
            initial: {
                y: "100%"
            },
            animate: {
                y: 0
            },
            exit: {
                y: "100%"
            },
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 300
            },
            children: g
        }) : (0, t.jsx)(n.motion.div, {
            style: x,
            initial: {
                x: 40,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1
            },
            exit: {
                x: 40,
                opacity: 0
            },
            transition: {
                duration: .27,
                ease: [.22, 1, .36, 1]
            },
            children: g
        })
    }

    function X({
        era: e,
        label: i,
        count: n,
        active: r,
        isDark: a,
        onClick: l
    }) {
        let o = "all" === e ? a ? "#d4916a" : "#c9845a" : d[e];
        return (0, t.jsxs)("button", {
            onClick: l,
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.2rem",
                padding: "0.6rem 1.1rem",
                background: r ? a ? o + "22" : o + "15" : "transparent",
                border: `1px solid ${r?o:a?"#3d2e22":"#ddd5c8"}`,
                borderRadius: 8,
                cursor: "pointer",
                transition: "all 0.2s ease",
                flexShrink: 0,
                minWidth: 64
            },
            children: [(0, t.jsx)("span", {
                style: {
                    fontSize: "1.15rem",
                    lineHeight: 1
                },
                children: "all" === e ? "∞" : T[e]
            }), (0, t.jsx)("span", {
                style: {
                    fontSize: "0.68rem",
                    fontFamily: "var(--font-display), Georgia, serif",
                    color: r ? o : a ? "#9a8c7e" : "#8a7d6e",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s"
                },
                children: i
            }), (0, t.jsx)("span", {
                style: {
                    fontSize: "0.6rem",
                    color: r ? o : a ? "#5a4f43" : "#b0a89e",
                    transition: "color 0.2s"
                },
                children: n
            })]
        })
    }

    function Y({
        ev: e,
        lang: n,
        isDark: r,
        cardBg: a,
        border: l,
        titleC: o,
        muted: s,
        onSelect: c
    }) {
        let [p, m] = (0, i.useState)(!1), h = d[e.era], x = O(e, n);
        return (0, t.jsxs)("button", {
            onClick: () => c(e),
            onTouchStart: () => m(!0),
            onTouchEnd: () => m(!1),
            style: {
                display: "block",
                width: "100%",
                textAlign: "left",
                background: p ? r ? "#2e2218" : "#ede8dc" : a,
                borderTop: "none",
                borderRight: "none",
                borderLeft: `3px solid ${h}`,
                borderBottom: `1px solid ${l}`,
                padding: "1rem 1rem 1rem 1.1rem",
                cursor: "pointer",
                transition: "background 0.15s ease",
                WebkitTapHighlightColor: "transparent"
            },
            children: [(0, t.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.3rem"
                },
                children: [(0, t.jsx)("span", {
                    style: {
                        fontSize: "0.7rem",
                        color: h,
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontStyle: "italic",
                        letterSpacing: "0.08em"
                    },
                    children: _(e, n)
                }), e.importance <= 2 && (0, t.jsx)("span", {
                    style: {
                        display: "inline-block",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: h,
                        opacity: .7
                    }
                })]
            }), (0, t.jsx)("h3", {
                style: {
                    fontSize: 1 === e.importance ? "1rem" : "0.9rem",
                    fontWeight: e.importance <= 2 ? 500 : 400,
                    color: o,
                    lineHeight: 1.5,
                    letterSpacing: "0.02em",
                    marginBottom: "0.4rem"
                },
                children: G(e, n)
            }), x && (0, t.jsx)("p", {
                style: {
                    fontSize: "0.8rem",
                    color: s,
                    lineHeight: 1.65,
                    marginBottom: "0.5rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                },
                children: x
            }), (e.tags ? .length ? ? 0) > 0 && (0, t.jsx)("div", {
                style: {
                    display: "flex",
                    gap: "0.3rem",
                    flexWrap: "wrap"
                },
                children: e.tags.slice(0, 3).map(e => (0, t.jsx)("span", {
                    style: {
                        fontSize: "0.6rem",
                        padding: "0.08rem 0.4rem",
                        borderRadius: 2,
                        backgroundColor: r ? "#1c1510" : "#ece7dd",
                        color: s,
                        letterSpacing: "0.04em"
                    },
                    children: N(e, n)
                }, e._id))
            })]
        })
    }

    function U({
        era: e,
        count: i,
        lang: n,
        isDark: r,
        border: a
    }) {
        let l = d[e];
        return (0, t.jsxs)("div", {
            style: {
                padding: "1.25rem 1rem 0.6rem",
                borderTop: `1px solid ${a}`,
                display: "flex",
                alignItems: "baseline",
                gap: "0.6rem",
                marginTop: "0.5rem"
            },
            children: [(0, t.jsx)("span", {
                style: {
                    fontSize: "1.1rem"
                },
                children: T[e]
            }), (0, t.jsx)("span", {
                style: {
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    color: l,
                    fontFamily: "var(--font-display), Georgia, serif",
                    letterSpacing: "0.05em"
                },
                children: M[e][n].replace(/^[^\s]+\s/, "")
            }), (0, t.jsx)("span", {
                style: {
                    fontSize: "0.7rem",
                    color: r ? "#5a4f43" : "#b0a89e"
                },
                children: i
            })]
        })
    }

    function Z({
        label: e,
        active: i,
        color: n,
        muted: r,
        onClick: a
    }) {
        return (0, t.jsx)("button", {
            onClick: a,
            style: {
                padding: "0.9rem 1.1rem",
                fontSize: "0.82rem",
                fontFamily: "var(--font-display), Georgia, serif",
                background: "none",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                borderBottom: `2px solid ${i?n:"transparent"}`,
                marginBottom: -1,
                cursor: "pointer",
                color: i ? n : r,
                whiteSpace: "nowrap",
                transition: "color 0.2s, border-color 0.2s",
                letterSpacing: "0.04em"
            },
            children: e
        })
    }

    function K({
        label: e,
        active: n,
        onClick: r,
        accent: a,
        muted: l,
        border: o
    }) {
        let [s, d] = (0, i.useState)(!1);
        return (0, t.jsx)("button", {
            onClick: r,
            onMouseEnter: () => d(!0),
            onMouseLeave: () => d(!1),
            style: {
                padding: "0.2rem 0.9rem",
                borderRadius: 100,
                fontSize: "0.75rem",
                fontFamily: "var(--font-display), Georgia, serif",
                letterSpacing: "0.05em",
                border: `1px solid ${n||s?a:o}`,
                background: n ? a : "transparent",
                color: n ? "#faf7f2" : s ? a : l,
                cursor: "pointer",
                transition: "all 0.2s ease",
                lineHeight: "1.6"
            },
            children: e
        })
    }
    e.s(["default", 0, function({
        events: e,
        tags: c
    }) {
        let {
            theme: m
        } = (0, o.useTheme)(), {
            lang: x
        } = (0, s.useLang)(), g = "dark" === m, u = "zh-Hant" === x ? "zh-Hant" : "zh-Hans", [f, y] = (0, i.useState)("all"), [b, v] = (0, i.useState)("all"), [j, z] = (0, i.useState)(null), [w, k] = (0, i.useState)(new Set(p)), [S, H] = (0, i.useState)("cosmic"), [C, T] = (0, i.useState)(!1), W = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            let e = () => T(window.innerWidth < 768);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []);
        let A = g ? "#1c1510" : "#faf7f2",
            B = g ? "#1e1510" : "#f5f0e8",
            I = g ? "#3d2e22" : "#ddd5c8",
            F = g ? "#d4916a" : "#c9845a",
            G = g ? "#ede8df" : "#1a1510",
            _ = g ? "#9a8c7e" : "#8a7d6e",
            O = (0, i.useMemo)(() => e.filter(e => {
                let t = "all" === f || e.era === f,
                    i = "all" === b || (e.tags ? ? []).some(e => e.slug ? .current === b);
                return t && i
            }), [e, f, b]),
            q = (0, i.useMemo)(() => {
                if ("all" === f) return c;
                let e = new Set(O.flatMap(e => (e.tags ? ? []).map(e => e._id)));
                return c.filter(t => e.has(t._id))
            }, [c, O, f]),
            J = (0, i.useMemo)(() => {
                let t = {
                    all: O.length
                };
                return p.forEach(i => {
                    t[i] = e.filter(e => {
                        let t = "all" === b || (e.tags ? ? []).some(e => e.slug ? .current === b);
                        return e.era === i && t
                    }).length
                }), t
            }, [e, O, b]),
            Q = (0, i.useMemo)(() => "all" !== f ? null : p.map(e => ({
                era: e,
                events: O.filter(t => t.era === e)
            })).filter(e => e.events.length > 0), [O, f]);

        function ee(t) {
            y(t), v("all"), setTimeout(() => {
                if ("all" === t) return void W.current ? .zoomToEra("all");
                let i = e.filter(e => e.era === t);
                if (i.length > 0) {
                    let e = i.map(e => e.yearsAgo),
                        t = Math.log10(Math.max(1, Math.min(...e))),
                        n = Math.log10(Math.max(...e)),
                        r = (n - t) * .22;
                    W.current ? .zoomToRange(Math.max(1, Math.pow(10, t - r)), Math.pow(10, n + r))
                } else W.current ? .zoomToEra(t)
            }, 50)
        }
        let et = (0, i.useCallback)(e => {
            k(e), H(function(e) {
                for (let t of ["civilization", "human", "life", "geological", "cosmic"])
                    if (e.has(t)) return t;
                return "cosmic"
            }(e))
        }, []);
        return (0, t.jsxs)("main", {
            style: {
                minHeight: "100vh",
                backgroundColor: A,
                transition: "background-color 0.3s ease"
            },
            children: [(0, t.jsx)(a.default, {}), (0, t.jsx)("section", {
                style: {
                    padding: "clamp(8rem,14vw,11rem) clamp(1.5rem,5vw,3rem) clamp(2.5rem,4vw,3.5rem)",
                    borderBottom: `1px solid ${I}`
                },
                children: (0, t.jsx)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: "1rem"
                    },
                    children: (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("p", {
                            style: {
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontStyle: "italic",
                                color: F,
                                fontSize: "0.82rem",
                                letterSpacing: "0.22em",
                                marginBottom: "0.75rem"
                            },
                            children: D("pageSubhead", u)
                        }), (0, t.jsx)("h1", {
                            style: {
                                fontSize: "clamp(2rem,5vw,3.2rem)",
                                fontWeight: 300,
                                color: G,
                                letterSpacing: "0.04em",
                                lineHeight: 1.2
                            },
                            children: D("pageTitle", u)
                        }), (0, t.jsx)("p", {
                            style: {
                                marginTop: "0.875rem",
                                color: _,
                                fontSize: "0.95rem",
                                maxWidth: "560px",
                                lineHeight: 1.8
                            },
                            children: D("pageDesc", u)
                        })]
                    })
                })
            }), (0, t.jsx)("div", {
                style: {
                    borderBottom: `1px solid ${I}`,
                    backgroundColor: g ? "#191007" : "#f7f3ea"
                },
                children: (0, t.jsx)($, {
                    events: e
                })
            }), (0, t.jsx)("div", {
                className: "desktop-only",
                style: {
                    padding: "0 clamp(1.5rem,5vw,3rem)",
                    borderBottom: `1px solid ${I}`,
                    overflowX: "auto",
                    scrollbarWidth: "none"
                },
                children: (0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        minWidth: "max-content"
                    },
                    children: [(0, t.jsx)(Z, {
                        label: D("all", u),
                        active: "all" === f,
                        color: F,
                        muted: _,
                        onClick: () => ee("all")
                    }), p.map(e => (0, t.jsx)(Z, {
                        label: M[e][u],
                        active: f === e,
                        color: d[e],
                        muted: _,
                        onClick: () => ee(e)
                    }, e))]
                })
            }), q.length > 0 && (0, t.jsxs)("section", {
                style: {
                    padding: "0.9rem clamp(1.5rem,5vw,3rem)",
                    borderBottom: `1px solid ${I}`,
                    display: "flex",
                    gap: "0.45rem",
                    flexWrap: "wrap"
                },
                children: [(0, t.jsx)(K, {
                    label: D("allTopics", u),
                    active: "all" === b,
                    onClick: () => v("all"),
                    accent: F,
                    muted: _,
                    border: I
                }), q.map(e => (0, t.jsx)(K, {
                    label: N(e, u),
                    active: b === e.slug ? .current,
                    onClick: () => v(e.slug ? .current),
                    accent: F,
                    muted: _,
                    border: I
                }, e._id))]
            }), (0, t.jsxs)("div", {
                className: "desktop-only",
                style: {
                    position: "relative",
                    borderBottom: `1px solid ${I}`,
                    backgroundColor: g ? "#191007" : "#f7f3ea",
                    overflow: "hidden"
                },
                children: [(0, t.jsx)(L, {
                    focusEra: S,
                    isDark: g
                }), (0, t.jsx)("div", {
                    style: {
                        position: "relative",
                        zIndex: 3,
                        flex: 1,
                        minWidth: 0,
                        width: "100%"
                    },
                    children: (0, t.jsx)(h, {
                        ref: W,
                        events: O,
                        isDark: g,
                        uiLang: u,
                        onEventSelect: z,
                        onZoomChange: (e, t) => et(e)
                    })
                }), (0, t.jsx)("div", {
                    style: {
                        position: "relative",
                        zIndex: 4
                    },
                    children: (0, t.jsx)(P, {
                        visibleEras: w,
                        isDark: g
                    })
                }), (0, t.jsx)("p", {
                    style: {
                        position: "absolute",
                        bottom: "0.5rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: "0.66rem",
                        color: _,
                        letterSpacing: "0.08em",
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                        opacity: .55,
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontStyle: "italic",
                        zIndex: 4
                    },
                    children: D("hint", u)
                })]
            }), (0, t.jsxs)("div", {
                className: "mobile-only",
                children: [(0, t.jsx)("div", {
                    style: {
                        padding: "1rem 1rem 0.875rem",
                        borderBottom: `1px solid ${I}`,
                        overflowX: "auto",
                        scrollbarWidth: "none",
                        WebkitOverflowScrolling: "touch"
                    },
                    children: (0, t.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: "0.5rem",
                            minWidth: "max-content"
                        },
                        children: [(0, t.jsx)(X, {
                            era: "all",
                            label: D("all", u),
                            count: J.all ? ? 0,
                            active: "all" === f,
                            isDark: g,
                            onClick: () => ee("all")
                        }), p.map(e => (0, t.jsx)(X, {
                            era: e,
                            label: R[e][u],
                            count: J[e] ? ? 0,
                            active: f === e,
                            isDark: g,
                            onClick: () => ee(e)
                        }, e))]
                    })
                }), (0, t.jsx)("div", {
                    style: {
                        padding: "0.6rem 1rem 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end"
                    },
                    children: (0, t.jsxs)("span", {
                        style: {
                            fontSize: "0.68rem",
                            color: _,
                            letterSpacing: "0.06em"
                        },
                        children: [O.length, " ", D("events", u)]
                    })
                }), 0 === O.length ? (0, t.jsx)("p", {
                    style: {
                        color: _,
                        fontSize: "0.9rem",
                        padding: "2rem 1rem"
                    },
                    children: D("noEvents", u)
                }) : "all" === f && Q ? Q.map(({
                    era: e,
                    events: i
                }) => (0, t.jsxs)("div", {
                    children: [(0, t.jsx)(U, {
                        era: e,
                        count: i.length,
                        lang: u,
                        isDark: g,
                        border: I
                    }), i.map(e => (0, t.jsx)(Y, {
                        ev: e,
                        lang: u,
                        isDark: g,
                        cardBg: B,
                        border: I,
                        titleC: G,
                        muted: _,
                        onSelect: z
                    }, e._id))]
                }, e)) : O.map(e => (0, t.jsx)(Y, {
                    ev: e,
                    lang: u,
                    isDark: g,
                    cardBg: B,
                    border: I,
                    titleC: G,
                    muted: _,
                    onSelect: z
                }, e._id))]
            }), (0, t.jsx)(r.AnimatePresence, {
                children: j && (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(n.motion.div, {
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
                            duration: .2
                        },
                        onClick: () => z(null),
                        style: {
                            position: "fixed",
                            inset: 0,
                            zIndex: 199,
                            backgroundColor: g ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.2)",
                            backdropFilter: "blur(2px)"
                        }
                    }, "bd"), (0, t.jsx)(V, {
                        event: j,
                        lang: u,
                        isDark: g,
                        isMobile: C,
                        onClose: () => z(null),
                        accent: F,
                        titleC: G,
                        muted: _,
                        border: I
                    }, "dp")]
                })
            }), (0, t.jsx)("section", {
                style: {
                    borderTop: `1px solid ${I}`,
                    padding: "clamp(2.5rem,5vw,3.5rem) clamp(1.5rem,5vw,3rem) clamp(3rem,6vw,4rem)",
                    backgroundColor: g ? "#191007" : "#f7f3ea"
                },
                children: (0, t.jsxs)("div", {
                    style: {
                        maxWidth: "720px",
                        margin: "0 auto"
                    },
                    children: [(0, t.jsx)("p", {
                        style: {
                            marginBottom: "1.5rem",
                            color: _,
                            fontSize: "0.85rem",
                            lineHeight: 1.8,
                            fontFamily: '"Noto Serif SC", Georgia, serif'
                        },
                        children: D("commentsHint", u)
                    }), (0, t.jsx)(E.default, {
                        articleId: "timeline"
                    })]
                })
            }), (0, t.jsx)(l.default, {})]
        })
    }], 710480)
}]);