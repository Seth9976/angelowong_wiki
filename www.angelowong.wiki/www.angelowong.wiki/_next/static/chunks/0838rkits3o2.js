(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 236726, 908035, e => {
    "use strict";
    var t = e.i(843476);

    function r(e) {
        return "span" === e._type && "text" in e && "string" == typeof e.text && (void 0 === e.marks || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
    }

    function n(e) {
        return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
    }

    function i(e) {
        return n(e) && "listItem" in e && "string" == typeof e.listItem && (void 0 === e.level || "number" == typeof e.level)
    }

    function l(e) {
        return "@list" === e._type
    }

    function s(e) {
        return "@span" === e._type
    }

    function o(e) {
        return "@text" === e._type
    }
    let a = ["strong", "em", "code", "underline", "strike-through"];

    function c(e, t, n) {
        if (!r(e) || !e.marks || !e.marks.length) return [];
        let i = e.marks.slice(),
            l = {};
        return i.forEach(e => {
            l[e] = 1;
            for (let i = t + 1; i < n.length; i++) {
                let t = n[i];
                if (t && r(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) l[e]++;
                else break
            }
        }), i.sort((e, t) => (function(e, t, r) {
            let n = e[t],
                i = e[r];
            if (n !== i) return i - n;
            let l = a.indexOf(t),
                s = a.indexOf(r);
            return l === s ? t.localeCompare(r) : l - s
        })(l, e, t))
    }

    function d(e) {
        let {
            children: t
        } = e, n = e.markDefs ? ? [];
        if (!t || !t.length) return [];
        let i = t.map(c),
            l = {
                _type: "@span",
                children: [],
                markType: "<unknown>"
            },
            s = [l];
        for (let e = 0; e < t.length; e++) {
            let l = t[e];
            if (!l) continue;
            let o = i[e] || [],
                a = 1;
            if (s.length > 1)
                for (; a < s.length; a++) {
                    let e = s[a] ? .markKey || "",
                        t = o.indexOf(e);
                    if (-1 === t) break;
                    o.splice(t, 1)
                }
            let c = (s = s.slice(0, a))[s.length - 1];
            if (c) {
                for (let e of o) {
                    let t = n ? .find(t => t._key === e),
                        r = {
                            _type: "@span",
                            _key: l._key,
                            children: [],
                            markDef: t,
                            markType: t ? t._type : e,
                            markKey: e
                        };
                    c.children.push(r), s.push(r), c = r
                }
                if (r(l)) {
                    let e = l.text.split("\n");
                    for (let t = e.length; t-- > 1;) e.splice(t, 0, "\n");
                    c.children = c.children.concat(e.map(e => ({
                        _type: "@text",
                        text: e
                    })))
                } else c.children = c.children.concat(l)
            }
        }
        return l.children
    }

    function u(e, t) {
        let r = [],
            n;
        for (let o = 0; o < e.length; o++) {
            let a = e[o];
            if (a) {
                var l, s;
                if (!i(a)) {
                    r.push(a), n = void 0;
                    continue
                }
                if (!n) {
                    n = m(a, o, t), r.push(n);
                    continue
                }
                if (l = a, s = n, (l.level || 1) === s.level && l.listItem === s.listItem) {
                    n.children.push(a);
                    continue
                }
                if ((a.level || 1) > n.level) {
                    let e = m(a, o, t);
                    if ("html" === t) {
                        let t = n.children[n.children.length - 1],
                            r = { ...t,
                                children: [...t.children, e]
                            };
                        n.children[n.children.length - 1] = r
                    } else n.children.push(e);
                    n = e;
                    continue
                }
                if ((a.level || 1) < n.level) {
                    let e = r[r.length - 1],
                        i = e && f(e, a);
                    if (i) {
                        (n = i).children.push(a);
                        continue
                    }
                    n = m(a, o, t), r.push(n);
                    continue
                }
                if (a.listItem !== n.listItem) {
                    let e = r[r.length - 1],
                        i = e && f(e, {
                            level: a.level || 1
                        });
                    if (i && i.listItem === a.listItem) {
                        (n = i).children.push(a);
                        continue
                    }
                    n = m(a, o, t), r.push(n);
                    continue
                }
                console.warn("Unknown state encountered for block", a), r.push(a)
            }
        }
        return r
    }

    function m(e, t, r) {
        return {
            _type: "@list",
            _key: `${e._key||`${t}`}-parent`,
            mode: r,
            level: e.level || 1,
            listItem: e.listItem,
            children: [e]
        }
    }

    function f(e, t) {
        let n = t.level || 1,
            i = t.listItem || "normal",
            s = "string" == typeof t.listItem;
        if (l(e) && (e.level || 1) === n && s && (e.listItem || "normal") === i) return e;
        if (!("children" in e)) return;
        let o = e.children[e.children.length - 1];
        return o && !r(o) ? f(o, t) : void 0
    }

    function p(e) {
        let t = "";
        return e.children.forEach(e => {
            o(e) ? t += e.text : s(e) && (t += p(e))
        }), t
    }
    let h = /^\s/,
        g = /\s$/,
        y = "html";
    e.s(["LIST_NEST_MODE_HTML", 0, y, "buildMarksTree", 0, d, "isPortableTextBlock", 0, n, "isPortableTextListItemBlock", 0, i, "isPortableTextToolkitList", 0, l, "isPortableTextToolkitSpan", 0, s, "isPortableTextToolkitTextNode", 0, o, "nestLists", 0, u, "spanToPlainText", 0, p, "toPlainText", 0, function(e) {
        let t = Array.isArray(e) ? e : [e],
            i = "";
        return t.forEach((e, l) => {
            if (!n(e)) return;
            let s = !1;
            e.children.forEach(e => {
                r(e) ? (i += s && i && !g.test(i) && !h.test(e.text) ? " " : "", i += e.text, s = !1) : s = !0
            }), l !== t.length - 1 && (i += "\n\n")
        }), i
    }], 908035);
    var x = e.i(271645);
    let b = {
            textDecoration: "underline"
        },
        j = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
        v = e => j(`block type "${e}"`, "types");

    function k(e) {
        console.warn(e)
    }
    let S = {
            display: "none"
        },
        w = {
            types: {},
            block: {
                normal: ({
                    children: e
                }) => (0, t.jsx)("p", {
                    children: e
                }),
                blockquote: ({
                    children: e
                }) => (0, t.jsx)("blockquote", {
                    children: e
                }),
                h1: ({
                    children: e
                }) => (0, t.jsx)("h1", {
                    children: e
                }),
                h2: ({
                    children: e
                }) => (0, t.jsx)("h2", {
                    children: e
                }),
                h3: ({
                    children: e
                }) => (0, t.jsx)("h3", {
                    children: e
                }),
                h4: ({
                    children: e
                }) => (0, t.jsx)("h4", {
                    children: e
                }),
                h5: ({
                    children: e
                }) => (0, t.jsx)("h5", {
                    children: e
                }),
                h6: ({
                    children: e
                }) => (0, t.jsx)("h6", {
                    children: e
                })
            },
            marks: {
                em: ({
                    children: e
                }) => (0, t.jsx)("em", {
                    children: e
                }),
                strong: ({
                    children: e
                }) => (0, t.jsx)("strong", {
                    children: e
                }),
                code: ({
                    children: e
                }) => (0, t.jsx)("code", {
                    children: e
                }),
                underline: ({
                    children: e
                }) => (0, t.jsx)("span", {
                    style: b,
                    children: e
                }),
                "strike-through": ({
                    children: e
                }) => (0, t.jsx)("del", {
                    children: e
                }),
                link: ({
                    children: e,
                    value: r
                }) => (0, t.jsx)("a", {
                    href: r ? .href,
                    children: e
                })
            },
            list: {
                number: ({
                    children: e
                }) => (0, t.jsx)("ol", {
                    children: e
                }),
                bullet: ({
                    children: e
                }) => (0, t.jsx)("ul", {
                    children: e
                })
            },
            listItem: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            hardBreak: () => (0, t.jsx)("br", {}),
            unknownType: ({
                value: e,
                isInline: r
            }) => {
                let n = v(e._type);
                return (0, t.jsx)(r ? "span" : "div", {
                    style: S,
                    children: n
                })
            },
            unknownMark: ({
                markType: e,
                children: r
            }) => (0, t.jsx)("span", {
                className: `unknown__pt__mark__${e}`,
                children: r
            }),
            unknownList: ({
                children: e
            }) => (0, t.jsx)("ul", {
                children: e
            }),
            unknownListItem: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            unknownBlockStyle: ({
                children: e
            }) => (0, t.jsx)("p", {
                children: e
            })
        };

    function _(e, t, r) {
        let n = t[r],
            i = e[r];
        return "function" == typeof n || n && "function" == typeof i ? n : n ? { ...i,
            ...n
        } : i
    }

    function I(e) {
        let {
            node: t,
            index: r,
            isInline: n,
            renderNode: i
        } = e, l = d(t).map((e, t) => i({
            node: e,
            isInline: !0,
            index: t,
            renderNode: i
        }));
        return {
            _key: t._key || `block-${r}`,
            children: l,
            index: r,
            isInline: n,
            node: t
        }
    }

    function C() {}
    e.s(["PortableText", 0, function({
        value: e,
        components: r,
        listNestingMode: a,
        onMissingComponent: c = k
    }) {
        let d = c || C,
            m = u(Array.isArray(e) ? e : [e], a || y),
            f = (0, x.useMemo)(() => r ? function(e, t) {
                let {
                    block: r,
                    list: n,
                    listItem: i,
                    marks: l,
                    types: s,
                    ...o
                } = t;
                return { ...e,
                    block: _(e, t, "block"),
                    list: _(e, t, "list"),
                    listItem: _(e, t, "listItem"),
                    marks: _(e, t, "marks"),
                    types: _(e, t, "types"),
                    ...o
                }
            }(w, r) : w, [r]),
            h = (0, x.useMemo)(() => {
                var e, r;
                return e = f, r = d,
                    function a(c) {
                        var d, u, m, f, h, g, y, x;
                        let b, k, {
                                node: S,
                                index: w,
                                isInline: _
                            } = c,
                            C = S._key || `node-${w}`;
                        return l(S) ? function(n, i, l) {
                            let s = n.children.map((e, t) => a({
                                    node: e._key ? e : { ...e,
                                        _key: `li-${i}-${t}`
                                    },
                                    index: t,
                                    isInline: !1,
                                    renderNode: a
                                })),
                                o = e.list,
                                c = ("function" == typeof o ? o : o[n.listItem]) || e.unknownList;
                            if (c === e.unknownList) {
                                let e = n.listItem || "bullet";
                                r(j(`list style "${e}"`, "list"), {
                                    nodeType: "listStyle",
                                    type: e
                                })
                            }
                            return (0, t.jsx)(c, {
                                value: n,
                                index: i,
                                isInline: !1,
                                renderNode: a,
                                children: s
                            }, l)
                        }(S, w, C) : i(S) ? function(n, i, l) {
                            let s = I({
                                    node: n,
                                    index: i,
                                    isInline: !1,
                                    renderNode: a
                                }),
                                o = e.listItem,
                                c = ("function" == typeof o ? o : o[n.listItem]) || e.unknownListItem;
                            if (c === e.unknownListItem) {
                                let e = n.listItem || "bullet";
                                r(j(`list item style "${e}"`, "listItem"), {
                                    type: e,
                                    nodeType: "listItemStyle"
                                })
                            }
                            let d = s.children;
                            if (n.style && "normal" !== n.style) {
                                let {
                                    listItem: e,
                                    ...t
                                } = n;
                                d = a({
                                    node: t,
                                    index: i,
                                    isInline: !1,
                                    renderNode: a
                                })
                            }
                            return (0, t.jsx)(c, {
                                value: n,
                                index: i,
                                isInline: !1,
                                renderNode: a,
                                children: d
                            }, l)
                        }(S, w, C) : s(S) ? function(n, i) {
                            let {
                                markDef: l,
                                markType: s,
                                markKey: o
                            } = n, c = e.marks[s] || e.unknownMark, d = n.children.map((e, t) => a({
                                node: e,
                                index: t,
                                isInline: !0,
                                renderNode: a
                            }));
                            return c === e.unknownMark && r(j(`mark type "${s}"`, "marks"), {
                                nodeType: "mark",
                                type: s
                            }), (0, t.jsx)(c, {
                                text: p(n),
                                value: l,
                                markType: s,
                                markKey: o,
                                renderNode: a,
                                children: d
                            }, i)
                        }(S, C) : S._type in e.types ? (d = S, u = w, m = C, f = _, (b = e.types[d._type]) ? (0, t.jsx)(b, {
                            value: d,
                            isInline: f,
                            index: u,
                            renderNode: a
                        }, m) : null) : n(S) ? function(n, i, l, s) {
                            let {
                                _key: o,
                                ...c
                            } = I({
                                node: n,
                                index: i,
                                isInline: s,
                                renderNode: a
                            }), d = c.node.style || "normal", u = ("function" == typeof e.block ? e.block : e.block[d]) || e.unknownBlockStyle;
                            return u === e.unknownBlockStyle && r(j(`block style "${d}"`, "block"), {
                                nodeType: "blockStyle",
                                type: d
                            }), (0, t.jsx)(u, { ...c,
                                value: c.node,
                                renderNode: a
                            }, l)
                        }(S, w, C, _) : o(S) ? function(r, n) {
                            if ("\n" === r.text) {
                                let r = e.hardBreak;
                                return r ? (0, t.jsx)(r, {}, n) : "\n"
                            }
                            return r.text
                        }(S, C) : (h = S, g = w, y = C, x = _, r(v(h._type), {
                            nodeType: "block",
                            type: h._type
                        }), k = e.unknownType, (0, t.jsx)(k, {
                            value: h,
                            isInline: x,
                            index: g,
                            renderNode: a
                        }, y))
                    }
            }, [f, d]);
        return (0, t.jsx)(t.Fragment, {
            children: m.map((e, t) => h({
                node: e,
                index: t,
                isInline: !1,
                renderNode: h
            }))
        })
    }], 236726)
}, 488143, (e, t, r) => {
    "use strict";

    function n({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: i,
        blurDataURL: l,
        objectFit: s
    }) {
        let o = r ? 40 * r : e,
            a = i ? 40 * i : t,
            c = o && a ? `viewBox='0 0 ${o} ${a}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${l}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 987690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return l
        },
        imageConfigDefault: function() {
            return s
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let l = ["default", "imgix", "cloudinary", "akamai", "custom"],
        s = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumDiskCacheSize: void 0,
            maximumRedirects: 3,
            maximumResponseBody: 5e7,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1,
            customCacheHandler: !1
        }
}, 908927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return c
        }
    }), e.r(233525);
    let n = e.r(543369),
        i = e.r(488143),
        l = e.r(987690),
        s = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function o(e) {
        return void 0 !== e.default
    }

    function a(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function c({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: d = !1,
        preload: u = !1,
        loading: m,
        className: f,
        quality: p,
        width: h,
        height: g,
        fill: y = !1,
        style: x,
        overrideSrc: b,
        onLoad: j,
        onLoadingComplete: v,
        placeholder: k = "empty",
        blurDataURL: S,
        fetchPriority: w,
        decoding: _ = "async",
        layout: I,
        objectFit: C,
        objectPosition: P,
        lazyBoundary: O,
        lazyRoot: E,
        ...z
    }, T) {
        var R;
        let $, M, N, {
                imgConf: A,
                showAltText: L,
                blurComplete: D,
                defaultLoader: B
            } = T,
            F = A || l.imageConfigDefault;
        if ("allSizes" in F) $ = F;
        else {
            let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
                t = F.deviceSizes.sort((e, t) => e - t),
                r = F.qualities ? .sort((e, t) => e - t);
            $ = { ...F,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === B) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let W = z.loader || B;
        delete z.loader, delete z.srcSet;
        let H = "__next_img_default" in W;
        if (H) {
            if ("custom" === $.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = W;
            W = t => {
                let {
                    config: r,
                    ...n
                } = t;
                return e(n)
            }
        }
        if (I) {
            "fill" === I && (y = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[I];
            e && (x = { ...x,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[I];
            r && !t && (t = r)
        }
        let G = "",
            U = a(h),
            q = a(g);
        if ((R = e) && "object" == typeof R && (o(R) || void 0 !== R.src)) {
            let t = o(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (M = t.blurWidth, N = t.blurHeight, S = S || t.blurDataURL, G = t.src, !y)
                if (U || q) {
                    if (U && !q) {
                        let e = U / t.width;
                        q = Math.round(t.height * e)
                    } else if (!U && q) {
                        let e = q / t.height;
                        U = Math.round(t.width * e)
                    }
                } else U = t.width, q = t.height
        }
        let J = !d && !u && ("lazy" === m || void 0 === m);
        (!(e = "string" == typeof e ? e : G) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, J = !1), $.unoptimized && (r = !0), H && !$.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let X = a(p),
            K = Object.assign(y ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: C,
                objectPosition: P
            } : {}, L ? {} : {
                color: "transparent"
            }, x),
            V = D || "empty" === k ? null : "blur" === k ? `url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:U,heightInt:q,blurWidth:M,blurHeight:N,blurDataURL:S||"",objectFit:K.objectFit})}")` : `url("${k}")`,
            Q = s.includes(K.objectFit) ? "fill" === K.objectFit ? "100% 100%" : "cover" : K.objectFit,
            Y = V ? {
                backgroundSize: Q,
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V
            } : {},
            Z = function({
                config: e,
                src: t,
                unoptimized: r,
                width: i,
                quality: l,
                sizes: s,
                loader: o
            }) {
                if (r) {
                    if (t.startsWith("/") && !t.startsWith("//")) {
                        let e = (0, n.getDeploymentId)();
                        if (e) {
                            let r = t.indexOf("?");
                            if (-1 !== r) {
                                let n = new URLSearchParams(t.slice(r + 1));
                                n.get("dpl") || (n.append("dpl", e), t = t.slice(0, r) + "?" + n.toString())
                            } else t += `?dpl=${e}`
                        }
                    }
                    return {
                        src: t,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: a,
                    kind: c
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, n) {
                    if (n) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            i = [];
                        for (let e; e = r.exec(n);) i.push(parseInt(e[2]));
                        if (i.length) {
                            let r = .01 * Math.min(...i);
                            return {
                                widths: t.filter(t => t >= e[0] * r),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof r ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, i, s), d = a.length - 1;
                return {
                    sizes: s || "w" !== c ? s : "100vw",
                    srcSet: a.map((r, n) => `${o({config:e,src:t,quality:l,width:r})} ${"w"===c?r:n+1}${c}`).join(", "),
                    src: o({
                        config: e,
                        src: t,
                        quality: l,
                        width: a[d]
                    })
                }
            }({
                config: $,
                src: e,
                unoptimized: r,
                width: U,
                quality: X,
                sizes: t,
                loader: W
            }),
            ee = J ? "lazy" : m;
        return {
            props: { ...z,
                loading: ee,
                fetchPriority: w,
                width: U,
                height: q,
                decoding: _,
                className: f,
                style: { ...K,
                    ...Y
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: b || Z.src
            },
            meta: {
                unoptimized: r,
                preload: u || d,
                placeholder: k,
                fill: y
            }
        }
    }
}, 898879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(271645),
        i = "u" < typeof window,
        l = i ? () => {} : n.useLayoutEffect,
        s = i ? () => {} : n.useEffect;

    function o(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function o() {
            if (t && t.mountedInstances) {
                let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return i && (t ? .mountedInstances ? .add(e.children), o()), l(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), l(() => (t && (t._pendingUpdate = o), () => {
            t && (t._pendingUpdate = o)
        })), s(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 325633, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return h
        },
        defaultHead: function() {
            return u
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let l = e.r(555682),
        s = e.r(190809),
        o = e.r(843476),
        a = s._(e.r(271645)),
        c = l._(e.r(898879)),
        d = e.r(742732);

    function u() {
        return [(0, o.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, o.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function m(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(233525);
    let f = ["name", "httpEquiv", "charSet", "itemProp"];

    function p(e) {
        let t, r, n, i;
        return e.reduce(m, []).reverse().concat(u().reverse()).filter((t = new Set, r = new Set, n = new Set, i = {}, e => {
            let l = !0,
                s = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                s = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? l = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? l = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = f.length; t < r; t++) {
                        let r = f[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) n.has(r) ? l = !1 : n.add(r);
                            else {
                                let t = e.props[r],
                                    n = i[r] || new Set;
                                ("name" !== r || !s) && n.has(t) ? l = !1 : (n.add(t), i[r] = n)
                            }
                    }
            }
            return l
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return a.default.cloneElement(e, {
                key: r
            })
        })
    }
    let h = function({
        children: e
    }) {
        let t = (0, a.useContext)(d.HeadManagerContext);
        return (0, o.jsx)(c.default, {
            reduceComponentsToState: p,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 918556, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(555682)._(e.r(271645)),
        i = e.r(987690),
        l = n.default.createContext(i.imageConfigDefault)
}, 65856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(555682)._(e.r(271645)).default.createContext(null)
}, 670965, (e, t, r) => {
    "use strict";

    function n(e, t) {
        let r = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 1948, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(670965),
        i = e.r(543369);

    function l({
        config: e,
        src: t,
        width: r,
        quality: s
    }) {
        let o = (0, i.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//")) {
            let e = t.indexOf("?");
            if (-1 !== e) {
                let r = new URLSearchParams(t.slice(e + 1)),
                    n = r.get("dpl");
                if (n) {
                    o = n, r.delete("dpl");
                    let i = r.toString();
                    t = t.slice(0, e) + (i ? "?" + i : "")
                }
            }
        }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let a = (0, n.findClosestQuality)(s, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${a}${t.startsWith("/")&&o?`&dpl=${o}`:""}`
    }
    l.__next_img_default = !0;
    let s = l
}, 605500, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return j
        }
    });
    let n = e.r(555682),
        i = e.r(190809),
        l = e.r(843476),
        s = i._(e.r(271645)),
        o = n._(e.r(174080)),
        a = n._(e.r(325633)),
        c = e.r(908927),
        d = e.r(987690),
        u = e.r(918556);
    e.r(233525);
    let m = e.r(65856),
        f = n._(e.r(1948)),
        p = e.r(818581),
        h = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function g(e, t, r, n, i, l, s) {
        let o = e ? .src;
        e && e["data-loaded-src"] !== o && (e["data-loaded-src"] = o, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && i(!0), r ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let n = !1,
                        i = !1;
                    r.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => n,
                        isPropagationStopped: () => i,
                        persist: () => {},
                        preventDefault: () => {
                            n = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            i = !0, t.stopPropagation()
                        }
                    })
                }
                n ? .current && n.current(e)
            }
        }))
    }

    function y(e) {
        return s.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let x = (0, s.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: r,
        height: n,
        width: i,
        decoding: o,
        className: a,
        style: c,
        fetchPriority: d,
        placeholder: u,
        loading: m,
        unoptimized: f,
        fill: h,
        onLoadRef: x,
        onLoadingCompleteRef: b,
        setBlurComplete: j,
        setShowAltText: v,
        sizesInput: k,
        onLoad: S,
        onError: w,
        ..._
    }, I) => {
        let C = (0, s.useCallback)(e => {
                e && (w && (e.src = e.src), e.complete && g(e, u, x, b, j, f, k))
            }, [e, u, x, b, j, w, f, k]),
            P = (0, p.useMergedRef)(I, C);
        return (0, l.jsx)("img", { ..._,
            ...y(d),
            loading: m,
            width: i,
            height: n,
            decoding: o,
            "data-nimg": h ? "fill" : "1",
            className: a,
            style: c,
            sizes: r,
            srcSet: t,
            src: e,
            ref: P,
            onLoad: e => {
                g(e.currentTarget, u, x, b, j, f, k)
            },
            onError: e => {
                v(!0), "empty" !== u && j(!0), w && w(e)
            }
        })
    });

    function b({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...y(t.fetchPriority)
        };
        return e && o.default.preload ? (o.default.preload(t.src, r), null) : (0, l.jsx)(a.default, {
            children: (0, l.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let j = (0, s.forwardRef)((e, t) => {
        let r = (0, s.useContext)(m.RouterContext),
            n = (0, s.useContext)(u.ImageConfigContext),
            i = (0, s.useMemo)(() => {
                let e = h || n || d.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    i = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: i,
                    localPatterns: "u" < typeof window ? n ? .localPatterns : e.localPatterns
                }
            }, [n]),
            {
                onLoad: o,
                onLoadingComplete: a
            } = e,
            p = (0, s.useRef)(o);
        (0, s.useEffect)(() => {
            p.current = o
        }, [o]);
        let g = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
            g.current = a
        }, [a]);
        let [y, j] = (0, s.useState)(!1), [v, k] = (0, s.useState)(!1), {
            props: S,
            meta: w
        } = (0, c.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: i,
            blurComplete: y,
            showAltText: v
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(x, { ...S,
                unoptimized: w.unoptimized,
                placeholder: w.placeholder,
                fill: w.fill,
                onLoadRef: p,
                onLoadingCompleteRef: g,
                setBlurComplete: j,
                setShowAltText: k,
                sizesInput: e.sizes,
                ref: t
            }), w.preload ? (0, l.jsx)(b, {
                isAppRouter: !r,
                imgAttributes: S
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 794909, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return d
        },
        getImageProps: function() {
            return c
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let l = e.r(555682),
        s = e.r(908927),
        o = e.r(605500),
        a = l._(e.r(1948));

    function c(e) {
        let {
            props: t
        } = (0, s.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let d = o.Image
}, 657688, (e, t, r) => {
    t.exports = e.r(794909)
}, 153165, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645);
    let n = "aw_email_subscribed";
    e.s(["default", 0, function({
        children: e,
        enabled: i,
        lang: l = "zh-Hans",
        fadeColor: s = "#faf7f2",
        cardBg: o = "#e8e0d0",
        cardBorder: a = "#d8d0c0",
        inputBg: c = "#faf7f2",
        inputColor: d = "#2c1f14",
        inputBorder: u = "#d8d0c0",
        accentColor: m = "#c9845a"
    }) {
        let [f, p] = (0, r.useState)(!1), [h, g] = (0, r.useState)(""), [y, x] = (0, r.useState)("idle"), [b, j] = (0, r.useState)(!1), [v, k] = (0, r.useState)(560), S = (0, r.useRef)(null), w = (0, r.useRef)(null), _ = "zh-Hant" === l, I = "#2c1f14" === d ? "#8a7d6e" : "#9a8c7e", C = "#2c1f14" === d ? "#ddd5c8" : "#3d2e22";
        (0, r.useEffect)(() => {
            if (j(!0), "true" === localStorage.getItem(n)) return void p(!0);
            let e = () => {
                w.current && k(Math.max(600, .45 * w.current.scrollHeight))
            };
            requestAnimationFrame(() => {
                e(), setTimeout(e, 200)
            })
        }, []);
        let P = async () => {
            let e = h.trim();
            if (!e || !e.includes("@")) {
                x("error"), S.current ? .focus();
                return
            }
            x("loading");
            try {
                (await fetch("/api/subscribe", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: e
                    })
                })).ok ? (x("success"), setTimeout(() => {
                    localStorage.setItem(n, "true"), p(!0)
                }, 600)) : x("error")
            } catch {
                x("error")
            }
        };
        return !i || f ? (0, t.jsx)(t.Fragment, {
            children: e
        }) : b ? (0, t.jsxs)("div", {
            children: [(0, t.jsx)("div", {
                style: {
                    maxHeight: `${v}px`,
                    overflow: "hidden",
                    WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                    maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)"
                },
                children: (0, t.jsx)("div", {
                    ref: w,
                    children: e
                })
            }), (0, t.jsx)("div", {
                style: {
                    textAlign: "center",
                    margin: "2.5rem 0 2rem",
                    color: I,
                    fontSize: "1.1rem",
                    letterSpacing: "0.5em",
                    userSelect: "none"
                },
                children: "· · ·"
            }), (0, t.jsxs)("div", {
                style: {
                    maxWidth: "34rem",
                    margin: "0 auto",
                    padding: "0 0 4rem"
                },
                children: [(0, t.jsx)("p", {
                    style: {
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        fontSize: "0.78rem",
                        letterSpacing: "0.18em",
                        color: m,
                        marginBottom: "1rem",
                        textAlign: "center"
                    },
                    children: _ ? "繼續閱讀" : "继续阅读"
                }), (0, t.jsx)("h3", {
                    style: {
                        fontFamily: '"Noto Serif SC", Georgia, serif',
                        fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                        fontWeight: 300,
                        lineHeight: 1.5,
                        color: d,
                        textAlign: "center",
                        marginBottom: "1rem",
                        letterSpacing: "0.03em"
                    },
                    children: _ ? "留下信箱，閱讀全文" : "留下邮箱，阅读全文"
                }), (0, t.jsx)("p", {
                    style: {
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        fontSize: "0.92rem",
                        lineHeight: 1.85,
                        color: I,
                        textAlign: "center",
                        marginBottom: "2rem"
                    },
                    children: _ ? "我不會發廣告，只發值得讀的東西。\n訂閱後可免費讀所有郵件鎖定的文章，隨時可退訂。" : "我不会发广告，只发值得读的东西。\n订阅后可免费读所有邮件锁定的文章，随时可退订。"
                }), (0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    },
                    children: [(0, t.jsx)("input", {
                        ref: S,
                        type: "email",
                        value: h,
                        onChange: e => {
                            g(e.target.value), x("idle")
                        },
                        onKeyDown: e => "Enter" === e.key && P(),
                        placeholder: "your@email.com",
                        style: {
                            flex: "1 1 200px",
                            maxWidth: "260px",
                            padding: "0.7rem 1rem",
                            borderRadius: "4px",
                            border: `1px solid ${"error"===y?m:C}`,
                            background: c,
                            color: d,
                            fontSize: "0.9rem",
                            fontFamily: "Georgia, serif",
                            outline: "none",
                            transition: "border-color 0.2s"
                        }
                    }), (0, t.jsx)("button", {
                        onClick: P,
                        disabled: "loading" === y || "success" === y,
                        style: {
                            padding: "0.7rem 1.5rem",
                            borderRadius: "4px",
                            border: `1px solid ${m}`,
                            background: "success" === y ? "transparent" : m,
                            color: "success" === y ? m : "#fff",
                            fontSize: "0.88rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            fontFamily: '"Noto Serif SC", serif',
                            cursor: "loading" === y ? "not-allowed" : "pointer",
                            whiteSpace: "nowrap",
                            transition: "background 0.25s, color 0.25s",
                            opacity: "loading" === y ? .7 : 1
                        },
                        children: "loading" === y ? _ ? "處理中…" : "处理中…" : "success" === y ? _ ? "✓ 解鎖中" : "✓ 解锁中" : _ ? "免費閱讀" : "免费阅读"
                    })]
                }), "error" === y && (0, t.jsx)("p", {
                    style: {
                        color: m,
                        fontSize: "0.8rem",
                        marginTop: "0.75rem",
                        textAlign: "center",
                        fontStyle: "italic",
                        fontFamily: "Georgia, serif"
                    },
                    children: _ ? "請輸入有效的電子郵件地址。" : "请输入有效的电子邮件地址。"
                }), (0, t.jsx)("p", {
                    style: {
                        fontSize: "0.75rem",
                        color: I,
                        textAlign: "center",
                        marginTop: "1.25rem",
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        opacity: .7
                    },
                    children: _ ? "訂閱即表示同意收取不定期郵件，隨時可退訂。" : "订阅即表示同意收取不定期邮件，随时可退订。"
                })]
            })]
        }) : null
    }])
}, 831483, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645),
        n = e.i(846932),
        i = e.i(88653),
        l = e.i(493681);
    let s = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.45rem",
        width: "9.5rem",
        height: "2.6rem",
        boxSizing: "border-box",
        borderRadius: "3px",
        fontSize: "0.83rem",
        fontFamily: '"Noto Serif SC", Georgia, serif',
        letterSpacing: "0.1em",
        cursor: "pointer",
        textDecoration: "none",
        transition: "background-color 0.22s ease, color 0.22s ease",
        flexShrink: 0
    };
    e.s(["default", 0, function({
        lang: e
    }) {
        let {
            theme: o
        } = (0, l.useTheme)(), a = "dark" === o, c = "zh-Hant" === e, [d, u] = (0, r.useState)(!1), [m, f] = (0, r.useState)(!1), [p, h] = (0, r.useState)(!1), g = a ? "#4a3828" : "#d0c4b4", y = "#07c160", x = "#009cde";
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("div", {
                style: {
                    margin: "4rem 0 0",
                    padding: "2.75rem 2rem",
                    backgroundColor: a ? "rgba(201,132,90,0.06)" : "rgba(201,132,90,0.05)",
                    border: `1px solid ${a?"#3d2e22":"#ddd5c8"}`,
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    textAlign: "center",
                    transition: "background-color 0.3s ease, border-color 0.3s ease"
                },
                children: [(0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        marginBottom: "0.25rem"
                    },
                    children: [(0, t.jsx)("div", {
                        style: {
                            width: "2rem",
                            height: "1px",
                            backgroundColor: g
                        }
                    }), (0, t.jsx)("svg", {
                        width: "10",
                        height: "10",
                        viewBox: "0 0 10 10",
                        fill: g,
                        children: (0, t.jsx)("path", {
                            d: "M5 0 L5.9 3.8 L10 5 L5.9 6.2 L5 10 L4.1 6.2 L0 5 L4.1 3.8 Z"
                        })
                    }), (0, t.jsx)("div", {
                        style: {
                            width: "2rem",
                            height: "1px",
                            backgroundColor: g
                        }
                    })]
                }), (0, t.jsx)("p", {
                    style: {
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        fontSize: "0.72rem",
                        letterSpacing: "0.18em",
                        color: a ? "#6b5e52" : "#b0a090",
                        margin: 0,
                        transition: "color 0.3s ease"
                    },
                    children: c ? "如果內容對你有所幫助" : "如果内容对你有所帮助"
                }), (0, t.jsx)("p", {
                    style: {
                        fontFamily: '"Noto Serif SC", Georgia, serif',
                        fontSize: "clamp(1.15rem, 2.6vw, 1.4rem)",
                        fontWeight: 300,
                        color: a ? "#ede8df" : "#1a1510",
                        lineHeight: 1.5,
                        letterSpacing: "0.06em",
                        margin: 0,
                        transition: "color 0.3s ease"
                    },
                    children: c ? "讓我們成為彼此的光" : "让我们成为彼此的光"
                }), (0, t.jsx)("p", {
                    style: {
                        fontSize: "0.82rem",
                        color: a ? "#7a6d60" : "#a09080",
                        lineHeight: 1.85,
                        margin: "0 0 0.5rem",
                        maxWidth: "24rem",
                        letterSpacing: "0.03em",
                        transition: "color 0.3s ease"
                    },
                    children: c ? "您的支持，讓獨立創作得以持續；每一份贊賞，都是對知識探索的鼓勵" : "您的支持，让独立创作得以持续；每一份赞赏，都是对知识探索的鼓励"
                }), (0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    },
                    children: [(0, t.jsxs)("button", {
                        onClick: () => u(!0),
                        onMouseEnter: () => f(!0),
                        onMouseLeave: () => f(!1),
                        style: { ...s,
                            border: `1px solid ${y}`,
                            backgroundColor: m ? y : "transparent",
                            color: m ? "#fff" : y
                        },
                        children: [(0, t.jsx)("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            style: {
                                flexShrink: 0
                            },
                            children: (0, t.jsx)("path", {
                                d: "M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c-.276-.94-.418-1.92-.418-2.93 0-3.763 3.251-6.82 7.508-6.82.28 0 .556.012.831.035C15.81 4.246 12.588 2.188 8.691 2.188zm-2.75 3.687a1.077 1.077 0 1 1 0 2.154 1.077 1.077 0 0 1 0-2.154zm5.5 0a1.077 1.077 0 1 1 0 2.154 1.077 1.077 0 0 1 0-2.154zM17.294 9.5c-3.736 0-6.771 2.662-6.771 5.942 0 3.28 3.035 5.941 6.77 5.941a8.3 8.3 0 0 0 2.447-.364.748.748 0 0 1 .616.083l1.638.959a.28.28 0 0 0 .144.047.253.253 0 0 0 .25-.254c0-.062-.025-.123-.041-.184l-.336-1.274a.509.509 0 0 1 .183-.573C23.214 18.7 24 17.161 24 15.442 24 12.162 20.965 9.5 17.294 9.5zm-2.25 3.239a.928.928 0 1 1 0 1.855.928.928 0 0 1 0-1.855zm4.5 0a.928.928 0 1 1 0 1.855.928.928 0 0 1 0-1.855z"
                            })
                        }), c ? "微信贊賞" : "微信赞赏"]
                    }), (0, t.jsxs)("a", {
                        href: "https://paypal.me/ZeningW",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onMouseEnter: () => h(!0),
                        onMouseLeave: () => h(!1),
                        style: { ...s,
                            border: `1px solid ${x}`,
                            backgroundColor: p ? x : "transparent",
                            color: p ? "#fff" : x
                        },
                        children: [(0, t.jsx)("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            style: {
                                flexShrink: 0
                            },
                            children: (0, t.jsx)("path", {
                                d: "M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                            })
                        }), "PayPal"]
                    })]
                }), (0, t.jsx)("p", {
                    style: {
                        fontSize: "0.72rem",
                        color: a ? "#6b5e52" : "#b0a090",
                        margin: "0.1rem 0 0",
                        letterSpacing: "0.04em",
                        transition: "color 0.3s ease"
                    },
                    children: c ? "掃描二維碼即可抖內" : "扫描二维码即可赞赏"
                })]
            }), (0, t.jsx)(i.AnimatePresence, {
                children: d && (0, t.jsx)(n.motion.div, {
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
                        duration: .22
                    },
                    onClick: () => u(!1),
                    style: {
                        position: "fixed",
                        inset: 0,
                        zIndex: 9e3,
                        backgroundColor: a ? "rgba(10,7,4,0.85)" : "rgba(30,20,12,0.72)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1.5rem"
                    },
                    children: (0, t.jsxs)(n.motion.div, {
                        initial: {
                            opacity: 0,
                            scale: .94,
                            y: 14
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            scale: .94,
                            y: 14
                        },
                        transition: {
                            duration: .26,
                            ease: [.22, 1, .36, 1]
                        },
                        onClick: e => e.stopPropagation(),
                        style: {
                            position: "relative",
                            backgroundColor: a ? "#221810" : "#faf7f2",
                            border: `1px solid ${a?"#3d2e22":"#ddd5c8"}`,
                            borderRadius: "6px",
                            padding: "2.25rem 2rem",
                            maxWidth: "17rem",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1.25rem",
                            boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
                            transition: "background-color 0.3s ease, border-color 0.3s ease"
                        },
                        children: [(0, t.jsx)("button", {
                            onClick: () => u(!1),
                            style: {
                                position: "absolute",
                                top: "0.75rem",
                                right: "0.75rem",
                                width: "1.6rem",
                                height: "1.6rem",
                                borderRadius: "50%",
                                backgroundColor: a ? "#3d2e22" : "#e8e0d0",
                                border: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: a ? "#9a8c7e" : "#8a7d6e",
                                fontSize: "0.95rem",
                                lineHeight: 1,
                                transition: "background-color 0.2s ease"
                            },
                            children: "×"
                        }), (0, t.jsx)("div", {
                            style: {
                                width: "100%",
                                borderRadius: "4px",
                                overflow: "hidden"
                            },
                            children: (0, t.jsx)("img", {
                                src: "/images/wechat-tip.jpg",
                                alt: "Angelo Wong 微信赞赏码",
                                style: {
                                    width: "100%",
                                    height: "auto",
                                    display: "block"
                                }
                            })
                        }), (0, t.jsx)("p", {
                            style: {
                                fontSize: "0.78rem",
                                color: a ? "#7a6d60" : "#a09080",
                                textAlign: "center",
                                lineHeight: 1.8,
                                margin: 0,
                                letterSpacing: "0.04em",
                                transition: "color 0.3s ease"
                            },
                            children: c ? "打開微信，掃描二維碼即可贊賞" : "打开微信，扫描二维码即可赞赏"
                        })]
                    }, "modal")
                }, "overlay")
            })]
        })
    }])
}, 924170, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645),
        n = e.i(704401);

    function i({
        articleId: e,
        parentId: l,
        onSuccess: s,
        onCancel: o,
        compact: a
    }) {
        let {
            convert: c
        } = (0, n.useLang)(), [d, u] = (0, r.useState)(""), [m, f] = (0, r.useState)(""), [p, h] = (0, r.useState)(""), [g, y] = (0, r.useState)("idle"), [x, b] = (0, r.useState)(!1), j = (0, r.useRef)(null), v = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
            let e = localStorage.getItem("aw_subscriber_email");
            e && (b(!0), h(e))
        }, []);
        let k = d.trim().length > 0 && m.trim().length > 0,
            S = () => {
                let e = p.trim();
                e && e.includes("@") && w(e)
            },
            w = async t => {
                y("submitting");
                try {
                    if (!(await fetch("/api/comments", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                articleId: e,
                                nickname: d.trim(),
                                content: m.trim(),
                                email: t,
                                parentId: l ? ? null
                            })
                        })).ok) throw Error();
                    localStorage.setItem("aw_subscriber_email", t), b(!0), y("success"), f(""), u(""), v.current && (v.current.style.height = "auto"), setTimeout(() => {
                        y("idle"), s()
                    }, 1500)
                } catch {
                    y("error"), setTimeout(() => y(x ? "idle" : "need-subscribe"), 3e3)
                }
            },
            _ = "success" === g ? "#7a9e7e" : "error" === g ? "#c97a5a" : k ? "#c9845a" : "#b0a898",
            I = c("submitting" === g ? "发布中…" : "success" === g ? "已发布 ✓" : "error" === g ? "发布失败" : "need-subscribe" === g ? "订阅并发布" : "发布");
        return (0, t.jsxs)("div", {
            className: a ? "comment-compose comment-compose--compact" : "comment-compose",
            children: [(0, t.jsxs)("div", {
                style: {
                    padding: a ? "0.75rem 1rem 0" : "1rem 1.25rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    flexWrap: "wrap"
                },
                children: [(0, t.jsx)("span", {
                    className: "comment-compose-label",
                    children: c("以")
                }), (0, t.jsx)("input", {
                    type: "text",
                    value: d,
                    onChange: e => u(e.target.value),
                    placeholder: c("你的昵称"),
                    maxLength: 20,
                    className: "comment-input"
                }), (0, t.jsx)("span", {
                    className: "comment-compose-label",
                    children: c("的身份留言")
                })]
            }), (0, t.jsx)("div", {
                style: {
                    padding: a ? "0.5rem 1rem 0" : "0.75rem 1.25rem 0"
                },
                children: (0, t.jsx)("textarea", {
                    ref: v,
                    value: m,
                    onChange: e => {
                        f(e.target.value);
                        let t = e.target;
                        t.style.height = "auto", t.style.height = `${t.scrollHeight}px`
                    },
                    placeholder: c(l ? "写下你的回复…" : "写下你的想法…"),
                    rows: a ? 2 : 3,
                    maxLength: 1e3,
                    className: "comment-textarea"
                })
            }), (0, t.jsx)("div", {
                style: {
                    maxHeight: "need-subscribe" === g ? "80px" : "0",
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
                        children: c("留言需订阅邮件 →")
                    }), (0, t.jsx)("input", {
                        ref: j,
                        type: "email",
                        value: p,
                        onChange: e => h(e.target.value),
                        onKeyDown: e => "Enter" === e.key && S(),
                        placeholder: "your@email.com",
                        className: "comment-email-input"
                    })]
                })
            }), (0, t.jsxs)("div", {
                style: {
                    padding: a ? "0.5rem 1rem 0.75rem" : "0.75rem 1.25rem 1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [(0, t.jsx)("span", {
                    className: "comment-char-count",
                    children: m.length > 0 ? `${m.length} / 1000` : ""
                }), (0, t.jsxs)("div", {
                    style: {
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center"
                    },
                    children: [o && (0, t.jsx)("button", {
                        onClick: o,
                        className: "comment-action-btn",
                        style: {
                            fontSize: "0.78rem"
                        },
                        children: c("取消")
                    }), (0, t.jsx)("button", {
                        onClick: "need-subscribe" === g ? S : () => {
                            k && (x ? w(p) : (y("need-subscribe"), setTimeout(() => j.current ? .focus(), 150)))
                        },
                        disabled: !k || "submitting" === g || "success" === g || "need-subscribe" === g && (!p.trim() || !p.includes("@")),
                        style: {
                            background: "none",
                            border: `1px solid ${"success"===g?"#7a9e7e":"error"===g?"#c97a5a":k?"#c9845a":"#c8bfb0"}`,
                            borderRadius: "4px",
                            padding: "0.35rem 1rem",
                            fontSize: "0.8rem",
                            color: _,
                            fontFamily: '"Noto Serif SC", Georgia, serif',
                            cursor: k && "submitting" !== g && "success" !== g ? "pointer" : "default",
                            transition: "all 0.2s",
                            letterSpacing: "0.04em"
                        },
                        onMouseEnter: e => {
                            if (k && "submitting" !== g && "success" !== g) {
                                let t = e.target;
                                t.style.background = "#c9845a", t.style.color = "#faf7f2"
                            }
                        },
                        onMouseLeave: e => {
                            let t = e.target;
                            t.style.background = "none", t.style.color = _
                        },
                        children: I
                    })]
                })]
            })]
        })
    }

    function l({
        comment: e,
        articleId: s,
        likedIds: o,
        onLike: a,
        onReplySuccess: c,
        isReply: d
    }) {
        var u;
        let m, f, p, {
                convert: h
            } = (0, n.useLang)(),
            [g, y] = (0, r.useState)(!1),
            [x, b] = (0, r.useState)(!1),
            j = o.has(e.id);
        return (0, t.jsx)("div", {
            id: `c-${e.id}`,
            className: d ? "comment-item comment-item--reply" : "comment-item",
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
                            children: (u = e.created_at, (p = Math.floor((f = Math.floor((m = Math.floor((Date.now() - new Date(u).getTime()) / 6e4)) / 60)) / 24)) > 30 ? new Date(u).toLocaleDateString("zh-CN", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            }) : h(p > 0 ? `${p} 天前` : f > 0 ? `${f} 小时前` : m > 0 ? `${m} 分钟前` : "刚刚"))
                        })]
                    }), (0, t.jsx)("p", {
                        className: "comment-body",
                        children: e.body
                    }), (0, t.jsxs)("div", {
                        className: "comment-actions",
                        children: [(0, t.jsxs)("button", {
                            onClick: () => a(e.id),
                            className: `comment-action-btn ${j?"comment-action-btn--liked":""}`,
                            children: [(0, t.jsx)("span", {
                                children: j ? "♥" : "♡"
                            }), e.like_count > 0 && (0, t.jsx)("span", {
                                children: e.like_count
                            })]
                        }), !d && (0, t.jsx)("button", {
                            onClick: () => y(e => !e),
                            className: "comment-action-btn",
                            children: (0, t.jsx)("span", {
                                children: h("回复")
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
                    }), g && (0, t.jsx)("div", {
                        style: {
                            marginTop: "1rem"
                        },
                        children: (0, t.jsx)(i, {
                            articleId: s,
                            parentId: e.id,
                            compact: !0,
                            onSuccess: () => {
                                y(!1), c()
                            },
                            onCancel: () => y(!1)
                        })
                    }), e.replies && e.replies.length > 0 && (0, t.jsx)("div", {
                        className: "comment-replies",
                        children: e.replies.map(e => (0, t.jsx)(l, {
                            comment: e,
                            articleId: s,
                            likedIds: o,
                            onLike: a,
                            onReplySuccess: c,
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
        let s, o, {
                convert: a
            } = (0, n.useLang)(),
            [c, d] = (0, r.useState)([]),
            [u, m] = (0, r.useState)(!0),
            [f, p] = (0, r.useState)(new Set),
            h = () => {
                fetch(`/api/comments?articleId=${encodeURIComponent(e)}`).then(e => e.json()).then(e => d(Array.isArray(e) ? e : [])).catch(() => {}).finally(() => m(!1))
            };
        (0, r.useEffect)(() => {
            let e = localStorage.getItem("aw_liked_comments");
            if (e) try {
                p(new Set(JSON.parse(e)))
            } catch {}
            h()
        }, [e]);
        let g = async e => {
                if (f.has(e)) return;
                let t = new Set(f);
                t.add(e), p(t), localStorage.setItem("aw_liked_comments", JSON.stringify([...t])), d(t => t.map(t => t.id === e ? { ...t,
                    like_count: t.like_count + 1
                } : t)), await fetch(`/api/comments/${e}/like`, {
                    method: "POST"
                })
            },
            y = (s = new Map, o = [], c.forEach(e => s.set(e.id, { ...e,
                replies: []
            })), s.forEach(e => {
                e.parent_id && s.has(e.parent_id) ? s.get(e.parent_id).replies.push(e) : o.push(e)
            }), o);
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
                    children: a("讨论")
                }), c.length > 0 && (0, t.jsxs)("span", {
                    className: "comments-count",
                    children: [c.length, " ", a("条留言")]
                })]
            }), u ? (0, t.jsx)("div", {
                style: {
                    height: "2rem"
                }
            }) : 0 === y.length ? (0, t.jsx)("p", {
                className: "comments-empty",
                children: a("暂无留言，成为第一个留言的人")
            }) : (0, t.jsx)("div", {
                style: {
                    marginBottom: "2.5rem"
                },
                children: y.map(r => (0, t.jsx)(l, {
                    comment: r,
                    articleId: e,
                    likedIds: f,
                    onLike: g,
                    onReplySuccess: h
                }, r.id))
            }), (0, t.jsx)(i, {
                articleId: e,
                onSuccess: h
            }), (0, t.jsx)("p", {
                className: "comment-fine-print",
                children: a("留言需订阅邮件，邮箱不公开显示")
            })]
        })
    }])
}, 673378, e => {
    e.v(t => Promise.all(["static/chunks/0kauo_1p4s347.js"].map(t => e.l(t))).then(() => t(973134)))
}, 48503, e => {
    e.v(t => Promise.all(["static/chunks/10-qc793i1~os.js"].map(t => e.l(t))).then(() => t(915833)))
}]);