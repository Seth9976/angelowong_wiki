(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 233525, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 718967, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DecodeError: function() {
            return y
        },
        MiddlewareNotFoundError: function() {
            return v
        },
        MissingStaticPage: function() {
            return b
        },
        NormalizeError: function() {
            return _
        },
        PageNotFoundError: function() {
            return w
        },
        SP: function() {
            return m
        },
        ST: function() {
            return h
        },
        WEB_VITALS: function() {
            return i
        },
        execOnce: function() {
            return o
        },
        getDisplayName: function() {
            return d
        },
        getLocationOrigin: function() {
            return u
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return l
        },
        isResSent: function() {
            return f
        },
        loadGetInitialProps: function() {
            return p
        },
        normalizeRepeatedSlashes: function() {
            return g
        },
        stringifyError: function() {
            return x
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function o(e) {
        let t, r = !1;
        return (...n) => (r || (r = !0, t = e(...n)), t)
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        l = e => s.test(e);

    function u() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function c() {
        let {
            href: e
        } = window.location, t = u();
        return e.substring(t.length)
    }

    function d(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function f(e) {
        return e.finished || e.headersSent
    }

    function g(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function p(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await p(t.Component, t.ctx)
        } : {};
        let n = await e.getInitialProps(t);
        if (r && f(r)) return n;
        if (!n) throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: !1,
            configurable: !0
        });
        return n
    }
    let m = "u" > typeof performance,
        h = m && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class y extends Error {}
    class _ extends Error {}
    class w extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class b extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class v extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function x(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 998183, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        assign: function() {
            return l
        },
        searchParamsToUrlQuery: function() {
            return i
        },
        urlQueryToSearchParams: function() {
            return s
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });

    function i(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
        }
        return t
    }

    function o(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function s(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n) t.append(r, o(e));
            else t.set(r, o(n));
        return t
    }

    function l(e, ...t) {
        for (let r of t) {
            for (let t of r.keys()) e.delete(t);
            for (let [t, n] of r.entries()) e.append(t, n)
        }
        return e
    }
}, 704401, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645);
    let n = (0, r.createContext)({
            lang: "zh-Hans",
            toggle: () => {},
            convert: e => e
        }),
        a = {
            爱: "愛",
            办: "辦",
            报: "報",
            边: "邊",
            变: "變",
            标: "標",
            别: "別",
            补: "補",
            参: "參",
            产: "產",
            长: "長",
            场: "場",
            车: "車",
            称: "稱",
            传: "傳",
            创: "創",
            从: "從",
            当: "當",
            导: "導",
            点: "點",
            电: "電",
            东: "東",
            动: "動",
            断: "斷",
            对: "對",
            发: "發",
            风: "風",
            复: "複",
            个: "個",
            观: "觀",
            过: "過",
            还: "還",
            号: "號",
            话: "話",
            华: "華",
            画: "畫",
            汇: "匯",
            会: "會",
            机: "機",
            极: "極",
            济: "濟",
            记: "記",
            际: "際",
            继: "繼",
            间: "間",
            将: "將",
            进: "進",
            经: "經",
            开: "開",
            来: "來",
            乐: "樂",
            类: "類",
            历: "歷",
            联: "聯",
            两: "兩",
            领: "領",
            论: "論",
            马: "馬",
            没: "沒",
            门: "門",
            们: "們",
            灭: "滅",
            难: "難",
            脑: "腦",
            农: "農",
            欧: "歐",
            盘: "盤",
            气: "氣",
            钱: "錢",
            强: "強",
            亲: "親",
            区: "區",
            权: "權",
            让: "讓",
            认: "認",
            时: "時",
            实: "實",
            势: "勢",
            书: "書",
            树: "樹",
            数: "數",
            说: "說",
            苏: "蘇",
            岁: "歲",
            听: "聽",
            头: "頭",
            图: "圖",
            团: "團",
            万: "萬",
            为: "為",
            问: "問",
            无: "無",
            现: "現",
            线: "線",
            乡: "鄉",
            响: "響",
            写: "寫",
            选: "選",
            学: "學",
            业: "業",
            义: "義",
            艺: "藝",
            阴: "陰",
            应: "應",
            语: "語",
            与: "與",
            员: "員",
            远: "遠",
            运: "運",
            战: "戰",
            这: "這",
            证: "證",
            只: "隻",
            种: "種",
            众: "眾",
            专: "專",
            准: "準",
            资: "資",
            总: "總",
            组: "組",
            阶: "階",
            级: "級",
            纪: "紀",
            课: "課",
            讲: "講",
            视: "視",
            频: "頻",
            链: "鏈",
            节: "節",
            连: "連",
            载: "載",
            续: "續",
            读: "讀",
            讨: "討",
            评: "評",
            译: "譯",
            词: "詞",
            诗: "詩",
            给: "給",
            约: "約",
            编: "編",
            辑: "輯",
            审: "審",
            阅: "閱",
            览: "覽",
            帮: "幫",
            务: "務",
            库: "庫",
            储: "儲",
            网: "網",
            络: "絡",
            台: "臺",
            湾: "灣",
            陆: "陸",
            杂: "雜",
            志: "誌",
            题: "題",
            体: "體",
            系: "係",
            统: "統",
            结: "結",
            构: "構",
            型: "型",
            样: "樣",
            测: "測",
            试: "試",
            验: "驗",
            确: "確"
        };
    Object.fromEntries(Object.entries(a).map(([e, t]) => [t, e])), e.s(["LangProvider", 0, function({
        children: e
    }) {
        let [i, o] = (0, r.useState)("zh-Hans");
        (0, r.useEffect)(() => {
            let e = localStorage.getItem("lang");
            if (e) return void o(e);
            let t = navigator.language || "";
            (t.startsWith("zh-TW") || t.startsWith("zh-HK") || t.startsWith("zh-MO")) && o("zh-Hant")
        }, []);
        let s = (0, r.useCallback)(() => {
                o(e => {
                    let t = "zh-Hans" === e ? "zh-Hant" : "zh-Hans";
                    return localStorage.setItem("lang", t), t
                })
            }, []),
            l = (0, r.useCallback)(e => {
                if ("zh-Hant" === i) return e ? e.split("").map(e => a[e] || e).join("") : e ? ? "";
                return e
            }, [i]);
        return (0, t.jsx)(n.Provider, {
            value: {
                lang: i,
                toggle: s,
                convert: l
            },
            children: e
        })
    }, "useLang", 0, function() {
        return (0, r.useContext)(n)
    }])
}, 493681, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645);
    let n = (0, r.createContext)({
        theme: "light",
        toggleTheme: () => {}
    });
    e.s(["ThemeProvider", 0, function({
        children: e
    }) {
        let [a, i] = (0, r.useState)("light"), [o, s] = (0, r.useState)(!1);
        return (0, r.useEffect)(() => {
            let e = localStorage.getItem("theme");
            "light" === e || "dark" === e ? i(e) : window.matchMedia("(prefers-color-scheme: dark)").matches ? i("dark") : i("light"), s(!0)
        }, []), (0, r.useEffect)(() => {
            if (!o) return;
            let e = document.documentElement;
            "dark" === a ? e.classList.add("dark") : e.classList.remove("dark"), localStorage.setItem("theme", a)
        }, [a, o]), (0, t.jsx)(n.Provider, {
            value: {
                theme: a,
                toggleTheme: () => {
                    i(e => "light" === e ? "dark" : "light")
                }
            },
            children: e
        })
    }, "useTheme", 0, function() {
        return (0, r.useContext)(n)
    }])
}, 461316, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = function({
        html: e,
        height: t = null,
        width: r = null,
        children: i,
        dataNtpc: o = ""
    }) {
        return (0, a.useEffect)(() => {
            o && performance.mark("mark_feature_usage", {
                detail: {
                    feature: `next-third-parties-${o}`
                }
            })
        }, [o]), (0, n.jsxs)(n.Fragment, {
            children: [i, e ? (0, n.jsx)("div", {
                style: {
                    height: null != t ? `${t}px` : "auto",
                    width: null != r ? `${r}px` : "auto"
                },
                "data-ntpc": o,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            }) : null]
        })
    };
    let n = e.r(843476),
        a = e.r(271645)
}, 808341, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        cancelIdleCallback: function() {
            return o
        },
        requestIdleCallback: function() {
            return i
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let i = "u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        },
        o = "u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 479520, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return w
        },
        handleClientScriptLoad: function() {
            return h
        },
        initScriptLoader: function() {
            return y
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let i = e.r(555682),
        o = e.r(190809),
        s = e.r(843476),
        l = i._(e.r(174080)),
        u = o._(e.r(271645)),
        c = e.r(742732),
        d = e.r(922737),
        f = e.r(808341),
        g = new Map,
        p = new Set,
        m = e => {
            let {
                src: t,
                id: r,
                onLoad: n = () => {},
                onReady: a = null,
                dangerouslySetInnerHTML: i,
                children: o = "",
                strategy: s = "afterInteractive",
                onError: u,
                stylesheets: c
            } = e, f = r || t;
            if (f && p.has(f)) return;
            if (g.has(t)) {
                p.add(f), g.get(t).then(n, u);
                return
            }
            let m = () => {
                    a && a(), p.add(f)
                },
                h = document.createElement("script"),
                y = new Promise((e, t) => {
                    h.addEventListener("load", function(t) {
                        e(), n && n.call(this, t), m()
                    }), h.addEventListener("error", function(e) {
                        t(e)
                    })
                }).catch(function(e) {
                    u && u(e)
                });
            i ? (h.innerHTML = i.__html || "", m()) : o ? (h.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : "", m()) : t && (h.src = t, g.set(t, y)), (0, d.setAttributesFromProps)(h, e), "worker" === s && h.setAttribute("type", "text/partytown"), h.setAttribute("data-nscript", s), c && (e => {
                if (l.default.preinit) return e.forEach(e => {
                    l.default.preinit(e, {
                        as: "style"
                    })
                });
                if ("u" > typeof window) {
                    let t = document.head;
                    e.forEach(e => {
                        let r = document.createElement("link");
                        r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                    })
                }
            })(c), document.body.appendChild(h)
        };

    function h(e) {
        let {
            strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
            (0, f.requestIdleCallback)(() => m(e))
        }) : m(e)
    }

    function y(e) {
        e.forEach(h), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
            let t = e.id || e.getAttribute("src");
            p.add(t)
        })
    }

    function _(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: a = null,
            strategy: i = "afterInteractive",
            onError: o,
            stylesheets: d,
            ...g
        } = e, {
            updateScripts: h,
            scripts: y,
            getIsSsr: _,
            appDir: w,
            nonce: b
        } = (0, u.useContext)(c.HeadManagerContext);
        b = g.nonce || b;
        let v = (0, u.useRef)(!1);
        (0, u.useEffect)(() => {
            let e = t || r;
            v.current || (a && e && p.has(e) && a(), v.current = !0)
        }, [a, t, r]);
        let x = (0, u.useRef)(!1);
        if ((0, u.useEffect)(() => {
                if (!x.current) {
                    if ("afterInteractive" === i) m(e);
                    else "lazyOnload" === i && ("complete" === document.readyState ? (0, f.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                        (0, f.requestIdleCallback)(() => m(e))
                    }));
                    x.current = !0
                }
            }, [e, i]), ("beforeInteractive" === i || "worker" === i) && (h ? (y[i] = (y[i] || []).concat([{
                id: t,
                src: r,
                onLoad: n,
                onReady: a,
                onError: o,
                ...g,
                nonce: b
            }]), h(y)) : _ && _() ? p.add(t || r) : _ && !_() && m({ ...e,
                nonce: b
            })), w) {
            if (d && d.forEach(e => {
                    l.default.preinit(e, {
                        as: "style"
                    })
                }), "beforeInteractive" === i)
                if (!r) return g.dangerouslySetInnerHTML && (g.children = g.dangerouslySetInnerHTML.__html, delete g.dangerouslySetInnerHTML), (0, s.jsx)("script", {
                    nonce: b,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...g,id:t}])})`
                    }
                });
                else return l.default.preload(r, g.integrity ? {
                    as: "script",
                    integrity: g.integrity,
                    nonce: b,
                    crossOrigin: g.crossOrigin
                } : {
                    as: "script",
                    nonce: b,
                    crossOrigin: g.crossOrigin
                }), (0, s.jsx)("script", {
                    nonce: b,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r,{...g,id:t}])})`
                    }
                });
            "afterInteractive" === i && r && l.default.preload(r, g.integrity ? {
                as: "script",
                integrity: g.integrity,
                nonce: b,
                crossOrigin: g.crossOrigin
            } : {
                as: "script",
                nonce: b,
                crossOrigin: g.crossOrigin
            })
        }
        return null
    }
    Object.defineProperty(_, "__nextScript", {
        value: !0
    });
    let w = _;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 3303, (e, t, r) => {
    t.exports = e.r(479520)
}, 19598, (e, t, r) => {
    "use strict";
    var n = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.sendGTMEvent = void 0, r.GoogleTagManager = function(e) {
        let {
            gtmId: t,
            gtmScriptUrl: r,
            dataLayerName: n = "dataLayer",
            auth: l,
            preview: u,
            dataLayer: c,
            nonce: d
        } = e;
        s = n;
        let f = new URL(r || "https://www.googletagmanager.com/gtm.js");
        return t && f.searchParams.set("id", t), "dataLayer" !== n && f.searchParams.set("l", n), l && f.searchParams.set("gtm_auth", l), u && (f.searchParams.set("gtm_preview", u), f.searchParams.set("gtm_cookies_win", "x")), (0, i.useEffect)(() => {
            performance.mark("mark_feature_usage", {
                detail: {
                    feature: "next-third-parties-gtm"
                }
            })
        }, []), (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(o.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                    __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${c?`w[l].push(${JSON.stringify(c)})`:""}
      })(window,'${n}');`
                },
                nonce: d
            }), (0, a.jsx)(o.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: f.href,
                nonce: d
            })]
        })
    };
    let a = e.r(843476),
        i = e.r(271645),
        o = n(e.r(3303)),
        s = "dataLayer";
    r.sendGTMEvent = (e, t) => {
        let r = t || s;
        window[r] = window[r] || [], window[r].push(e)
    }
}, 654576, (e, t, r) => {
    "use strict";
    let n;
    var a = e.e && e.e.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.GoogleAnalytics = function(e) {
        let {
            gaId: t,
            debugMode: r,
            dataLayerName: a = "dataLayer",
            nonce: l
        } = e;
        return void 0 === n && (n = a), (0, o.useEffect)(() => {
            performance.mark("mark_feature_usage", {
                detail: {
                    feature: "next-third-parties-ga"
                }
            })
        }, []), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(s.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                    __html: `
          window['${a}'] = window['${a}'] || [];
          function gtag(){window['${a}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${r?",{ 'debug_mode': true }":""});`
                },
                nonce: l
            }), (0, i.jsx)(s.default, {
                id: "_next-ga",
                src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
                nonce: l
            })]
        })
    }, r.sendGAEvent = function() {
        void 0 === n ? console.warn("@next/third-parties: GA has not been initialized") : window[n] ? window[n].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${n} does not exist`)
    };
    let i = e.r(843476),
        o = e.r(271645),
        s = a(e.r(3303))
}]);