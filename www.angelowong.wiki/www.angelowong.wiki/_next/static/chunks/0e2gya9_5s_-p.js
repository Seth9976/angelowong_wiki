(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 488143, (e, t, r) => {
    "use strict";

    function i({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: n,
        blurDataURL: o,
        objectFit: l
    }) {
        let a = r ? 40 * r : e,
            s = n ? 40 * n : t,
            d = a && s ? `viewBox='0 0 ${a} ${s}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return i
        }
    })
}, 987690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        VALID_LOADERS: function() {
            return o
        },
        imageConfigDefault: function() {
            return l
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"],
        l = {
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
            return d
        }
    }), e.r(233525);
    let i = e.r(543369),
        n = e.r(488143),
        o = e.r(987690),
        l = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function a(e) {
        return void 0 !== e.default
    }

    function s(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function d({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: c = !1,
        preload: u = !1,
        loading: f,
        className: m,
        quality: p,
        width: g,
        height: h,
        fill: y = !1,
        style: b,
        overrideSrc: v,
        onLoad: x,
        onLoadingComplete: w,
        placeholder: j = "empty",
        blurDataURL: _,
        fetchPriority: S,
        decoding: C = "async",
        layout: P,
        objectFit: O,
        objectPosition: E,
        lazyBoundary: R,
        lazyRoot: z,
        ...I
    }, M) {
        var $;
        let D, k, T, {
                imgConf: A,
                showAltText: B,
                blurComplete: L,
                defaultLoader: F
            } = M,
            N = A || o.imageConfigDefault;
        if ("allSizes" in N) D = N;
        else {
            let e = [...N.deviceSizes, ...N.imageSizes].sort((e, t) => e - t),
                t = N.deviceSizes.sort((e, t) => e - t),
                r = N.qualities ? .sort((e, t) => e - t);
            D = { ...N,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === F) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let U = I.loader || F;
        delete I.loader, delete I.srcSet;
        let W = "__next_img_default" in U;
        if (W) {
            if ("custom" === D.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = U;
            U = t => {
                let {
                    config: r,
                    ...i
                } = t;
                return e(i)
            }
        }
        if (P) {
            "fill" === P && (y = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[P];
            e && (b = { ...b,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[P];
            r && !t && (t = r)
        }
        let H = "",
            q = s(g),
            G = s(h);
        if (($ = e) && "object" == typeof $ && (a($) || void 0 !== $.src)) {
            let t = a(e) ? e.default : e;
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
            if (k = t.blurWidth, T = t.blurHeight, _ = _ || t.blurDataURL, H = t.src, !y)
                if (q || G) {
                    if (q && !G) {
                        let e = q / t.width;
                        G = Math.round(t.height * e)
                    } else if (!q && G) {
                        let e = G / t.height;
                        q = Math.round(t.width * e)
                    }
                } else q = t.width, G = t.height
        }
        let X = !c && !u && ("lazy" === f || void 0 === f);
        (!(e = "string" == typeof e ? e : H) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, X = !1), D.unoptimized && (r = !0), W && !D.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let V = s(p),
            J = Object.assign(y ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: O,
                objectPosition: E
            } : {}, B ? {} : {
                color: "transparent"
            }, b),
            K = L || "empty" === j ? null : "blur" === j ? `url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:q,heightInt:G,blurWidth:k,blurHeight:T,blurDataURL:_||"",objectFit:J.objectFit})}")` : `url("${j}")`,
            Q = l.includes(J.objectFit) ? "fill" === J.objectFit ? "100% 100%" : "cover" : J.objectFit,
            Y = K ? {
                backgroundSize: Q,
                backgroundPosition: J.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: K
            } : {},
            Z = function({
                config: e,
                src: t,
                unoptimized: r,
                width: n,
                quality: o,
                sizes: l,
                loader: a
            }) {
                if (r) {
                    if (t.startsWith("/") && !t.startsWith("//")) {
                        let e = (0, i.getDeploymentId)();
                        if (e) {
                            let r = t.indexOf("?");
                            if (-1 !== r) {
                                let i = new URLSearchParams(t.slice(r + 1));
                                i.get("dpl") || (i.append("dpl", e), t = t.slice(0, r) + "?" + i.toString())
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
                    widths: s,
                    kind: d
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, i) {
                    if (i) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            n = [];
                        for (let e; e = r.exec(i);) n.push(parseInt(e[2]));
                        if (n.length) {
                            let r = .01 * Math.min(...n);
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
                }(e, n, l), c = s.length - 1;
                return {
                    sizes: l || "w" !== d ? l : "100vw",
                    srcSet: s.map((r, i) => `${a({config:e,src:t,quality:o,width:r})} ${"w"===d?r:i+1}${d}`).join(", "),
                    src: a({
                        config: e,
                        src: t,
                        quality: o,
                        width: s[c]
                    })
                }
            }({
                config: D,
                src: e,
                unoptimized: r,
                width: q,
                quality: V,
                sizes: t,
                loader: U
            }),
            ee = X ? "lazy" : f;
        return {
            props: { ...I,
                loading: ee,
                fetchPriority: S,
                width: q,
                height: G,
                decoding: C,
                className: m,
                style: { ...J,
                    ...Y
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: v || Z.src
            },
            meta: {
                unoptimized: r,
                preload: u || c,
                placeholder: j,
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
            return a
        }
    });
    let i = e.r(271645),
        n = "u" < typeof window,
        o = n ? () => {} : i.useLayoutEffect,
        l = n ? () => {} : i.useEffect;

    function a(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function a() {
            if (t && t.mountedInstances) {
                let e = i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return n && (t ? .mountedInstances ? .add(e.children), a()), o(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), o(() => (t && (t._pendingUpdate = a), () => {
            t && (t._pendingUpdate = a)
        })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 325633, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        default: function() {
            return g
        },
        defaultHead: function() {
            return u
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let o = e.r(555682),
        l = e.r(190809),
        a = e.r(843476),
        s = l._(e.r(271645)),
        d = o._(e.r(898879)),
        c = e.r(742732);

    function u() {
        return [(0, a.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, a.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(233525);
    let m = ["name", "httpEquiv", "charSet", "itemProp"];

    function p(e) {
        let t, r, i, n;
        return e.reduce(f, []).reverse().concat(u().reverse()).filter((t = new Set, r = new Set, i = new Set, n = {}, e => {
            let o = !0,
                l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                l = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? o = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? o = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = m.length; t < r; t++) {
                        let r = m[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) i.has(r) ? o = !1 : i.add(r);
                            else {
                                let t = e.props[r],
                                    i = n[r] || new Set;
                                ("name" !== r || !l) && i.has(t) ? o = !1 : (i.add(t), n[r] = i)
                            }
                    }
            }
            return o
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return s.default.cloneElement(e, {
                key: r
            })
        })
    }
    let g = function({
        children: e
    }) {
        let t = (0, s.useContext)(c.HeadManagerContext);
        return (0, a.jsx)(d.default, {
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
            return o
        }
    });
    let i = e.r(555682)._(e.r(271645)),
        n = e.r(987690),
        o = i.default.createContext(n.imageConfigDefault)
}, 65856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let i = e.r(555682)._(e.r(271645)).default.createContext(null)
}, 670965, (e, t, r) => {
    "use strict";

    function i(e, t) {
        let r = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return i
        }
    })
}, 1948, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let i = e.r(670965),
        n = e.r(543369);

    function o({
        config: e,
        src: t,
        width: r,
        quality: l
    }) {
        let a = (0, n.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//")) {
            let e = t.indexOf("?");
            if (-1 !== e) {
                let r = new URLSearchParams(t.slice(e + 1)),
                    i = r.get("dpl");
                if (i) {
                    a = i, r.delete("dpl");
                    let n = r.toString();
                    t = t.slice(0, e) + (n ? "?" + n : "")
                }
            }
        }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let s = (0, i.findClosestQuality)(l, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&a?`&dpl=${a}`:""}`
    }
    o.__next_img_default = !0;
    let l = o
}, 605500, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return x
        }
    });
    let i = e.r(555682),
        n = e.r(190809),
        o = e.r(843476),
        l = n._(e.r(271645)),
        a = i._(e.r(174080)),
        s = i._(e.r(325633)),
        d = e.r(908927),
        c = e.r(987690),
        u = e.r(918556);
    e.r(233525);
    let f = e.r(65856),
        m = i._(e.r(1948)),
        p = e.r(818581),
        g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function h(e, t, r, i, n, o, l) {
        let a = e ? .src;
        e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && n(!0), r ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let i = !1,
                        n = !1;
                    r.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => i,
                        isPropagationStopped: () => n,
                        persist: () => {},
                        preventDefault: () => {
                            i = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            n = !0, t.stopPropagation()
                        }
                    })
                }
                i ? .current && i.current(e)
            }
        }))
    }

    function y(e) {
        return l.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, l.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: r,
        height: i,
        width: n,
        decoding: a,
        className: s,
        style: d,
        fetchPriority: c,
        placeholder: u,
        loading: f,
        unoptimized: m,
        fill: g,
        onLoadRef: b,
        onLoadingCompleteRef: v,
        setBlurComplete: x,
        setShowAltText: w,
        sizesInput: j,
        onLoad: _,
        onError: S,
        ...C
    }, P) => {
        let O = (0, l.useCallback)(e => {
                e && (S && (e.src = e.src), e.complete && h(e, u, b, v, x, m, j))
            }, [e, u, b, v, x, S, m, j]),
            E = (0, p.useMergedRef)(P, O);
        return (0, o.jsx)("img", { ...C,
            ...y(c),
            loading: f,
            width: n,
            height: i,
            decoding: a,
            "data-nimg": g ? "fill" : "1",
            className: s,
            style: d,
            sizes: r,
            srcSet: t,
            src: e,
            ref: E,
            onLoad: e => {
                h(e.currentTarget, u, b, v, x, m, j)
            },
            onError: e => {
                w(!0), "empty" !== u && x(!0), S && S(e)
            }
        })
    });

    function v({
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
        return e && a.default.preload ? (a.default.preload(t.src, r), null) : (0, o.jsx)(s.default, {
            children: (0, o.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let x = (0, l.forwardRef)((e, t) => {
        let r = (0, l.useContext)(f.RouterContext),
            i = (0, l.useContext)(u.ImageConfigContext),
            n = (0, l.useMemo)(() => {
                let e = g || i || c.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    n = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: n,
                    localPatterns: "u" < typeof window ? i ? .localPatterns : e.localPatterns
                }
            }, [i]),
            {
                onLoad: a,
                onLoadingComplete: s
            } = e,
            p = (0, l.useRef)(a);
        (0, l.useEffect)(() => {
            p.current = a
        }, [a]);
        let h = (0, l.useRef)(s);
        (0, l.useEffect)(() => {
            h.current = s
        }, [s]);
        let [y, x] = (0, l.useState)(!1), [w, j] = (0, l.useState)(!1), {
            props: _,
            meta: S
        } = (0, d.getImgProps)(e, {
            defaultLoader: m.default,
            imgConf: n,
            blurComplete: y,
            showAltText: w
        });
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(b, { ..._,
                unoptimized: S.unoptimized,
                placeholder: S.placeholder,
                fill: S.fill,
                onLoadRef: p,
                onLoadingCompleteRef: h,
                setBlurComplete: x,
                setShowAltText: j,
                sizesInput: e.sizes,
                ref: t
            }), S.preload ? (0, o.jsx)(v, {
                isAppRouter: !r,
                imgAttributes: _
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
    var i = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return d
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let o = e.r(555682),
        l = e.r(908927),
        a = e.r(605500),
        s = o._(e.r(1948));

    function d(e) {
        let {
            props: t
        } = (0, l.getImgProps)(e, {
            defaultLoader: s.default,
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
    let c = a.Image
}, 657688, (e, t, r) => {
    t.exports = e.r(794909)
}, 371112, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(271645),
        i = e.i(657688),
        n = e.i(522016),
        o = e.i(846932),
        l = e.i(342724),
        a = e.i(56691),
        s = e.i(493681),
        d = e.i(704401);
    let c = {
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
                delay: .06 * e
            }
        })
    };

    function u({
        subject: e,
        index: l,
        isHant: a,
        isDark: s,
        convert: d,
        cardBg: f,
        cardHover: m,
        borderColor: p,
        accentColor: g,
        titleColor: h,
        mutedColor: y
    }) {
        let [b, v] = (0, r.useState)(!1), x = a && e.titleZhHant || e.title, w = a && e.descriptionZhHant || e.description;
        return (0, t.jsx)(o.motion.div, {
            custom: l,
            variants: c,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: !0,
                margin: "-40px"
            },
            children: (0, t.jsxs)(n.default, {
                href: `/subjects/${e.slug}`,
                onMouseEnter: () => v(!0),
                onMouseLeave: () => v(!1),
                style: {
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: b ? m : f,
                    borderTop: `1px solid ${b?g+"55":p}`,
                    borderRight: `1px solid ${b?g+"55":p}`,
                    borderBottom: `1px solid ${b?g+"55":p}`,
                    borderLeft: `3px solid ${g}`,
                    borderRadius: "3px",
                    textDecoration: "none",
                    overflow: "hidden",
                    transition: "all 0.22s ease",
                    boxShadow: b ? s ? "0 6px 24px rgba(0,0,0,0.25)" : "0 6px 24px rgba(90,79,67,0.09)" : "none",
                    minHeight: "190px"
                },
                children: [e.coverImageUrl && (0, t.jsx)("div", {
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "120px"
                    },
                    children: (0, t.jsx)(i.default, {
                        src: e.coverImageUrl,
                        alt: x,
                        fill: !0,
                        style: {
                            objectFit: "cover"
                        },
                        sizes: "(max-width: 768px) 100vw, 33vw"
                    })
                }), (0, t.jsxs)("div", {
                    style: {
                        padding: "clamp(1.1rem,2vw,1.4rem)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flex: 1
                    },
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsx)("p", {
                            style: {
                                fontFamily: "var(--font-display), Georgia, serif",
                                fontStyle: "italic",
                                color: g,
                                fontSize: "0.6rem",
                                letterSpacing: "0.2em",
                                marginBottom: "0.5rem"
                            },
                            children: "Subject"
                        }), (0, t.jsx)("h3", {
                            style: {
                                fontSize: "clamp(1rem,1.9vw,1.15rem)",
                                fontWeight: 500,
                                color: h,
                                lineHeight: 1.5,
                                letterSpacing: "0.02em",
                                marginBottom: "0.5rem",
                                fontFamily: '"Noto Serif SC", serif'
                            },
                            children: x
                        }), w && (0, t.jsx)("p", {
                            style: {
                                fontSize: "0.8rem",
                                color: y,
                                lineHeight: 1.7,
                                fontFamily: '"Noto Serif SC", serif',
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                            },
                            children: w
                        })]
                    }), (0, t.jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "1rem"
                        },
                        children: [(0, t.jsxs)("span", {
                            style: {
                                fontSize: "0.72rem",
                                color: y,
                                fontFamily: "Georgia, serif",
                                fontStyle: "italic",
                                letterSpacing: "0.06em"
                            },
                            children: [e.knowledgePointCount, " ", d("个知识点")]
                        }), (0, t.jsx)("span", {
                            style: {
                                fontSize: "1rem",
                                color: g,
                                transform: b ? "translateX(3px)" : "none",
                                transition: "transform 0.2s ease"
                            },
                            children: "→"
                        })]
                    })]
                })]
            })
        })
    }
    e.s(["default", 0, function({
        subjects: e
    }) {
        let {
            theme: r
        } = (0, s.useTheme)(), {
            convert: i
        } = (0, d.useLang)(), n = "dark" === r, c = "测" !== i("测"), f = n ? "#3d2e22" : "#ddd5c8", m = n ? "#d4916a" : "#c9845a", p = n ? "#ede8df" : "#1a1510", g = n ? "#9a8c7e" : "#8a7d6e", h = n ? "#261c14" : "#f0ebe0", y = n ? "#2e2218" : "#ede8dc";
        return (0, t.jsxs)("main", {
            style: {
                minHeight: "100vh",
                backgroundColor: n ? "#1c1510" : "#faf7f2",
                transition: "background-color 0.3s ease"
            },
            children: [(0, t.jsx)(l.default, {}), (0, t.jsx)("section", {
                style: {
                    padding: "clamp(8rem,14vw,11rem) clamp(1.5rem,5vw,3rem) clamp(3rem,5vw,4rem)",
                    borderBottom: `1px solid ${f}`
                },
                children: (0, t.jsxs)(o.motion.div, {
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
                    children: [(0, t.jsx)("p", {
                        style: {
                            fontFamily: "var(--font-display), Georgia, serif",
                            fontStyle: "italic",
                            color: m,
                            fontSize: "0.82rem",
                            letterSpacing: "0.22em",
                            marginBottom: "0.75rem"
                        },
                        children: "Learning Map"
                    }), (0, t.jsx)("h1", {
                        style: {
                            fontSize: "clamp(2rem,5vw,3.2rem)",
                            fontWeight: 300,
                            color: p,
                            letterSpacing: "0.04em",
                            lineHeight: 1.2,
                            marginBottom: "1rem"
                        },
                        children: c ? "學科學習地圖" : "学科学习地图"
                    }), (0, t.jsx)("p", {
                        style: {
                            color: n ? "#c8bfb4" : "#5a4f43",
                            fontSize: "1rem",
                            maxWidth: "520px",
                            lineHeight: 1.8,
                            fontFamily: '"Noto Serif SC", serif'
                        },
                        children: c ? "按學科整理知識點，配上推薦書目、章節與論文，走完一條路徑，再用選擇題檢驗自己。" : "按学科整理知识点，配上推荐书目、章节与论文，走完一条路径，再用选择题检验自己。"
                    })]
                })
            }), (0, t.jsx)("section", {
                style: {
                    padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,3rem)",
                    maxWidth: "1100px"
                },
                children: 0 === e.length ? (0, t.jsx)("p", {
                    style: {
                        color: g,
                        fontSize: "0.9rem",
                        letterSpacing: "0.1em"
                    },
                    children: i("暂无学科内容，请在后台发布学科。")
                }) : (0, t.jsx)("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: "1.25rem"
                    },
                    children: e.map((e, r) => (0, t.jsx)(u, {
                        subject: e,
                        index: r,
                        isHant: c,
                        isDark: n,
                        convert: i,
                        cardBg: h,
                        cardHover: y,
                        borderColor: f,
                        accentColor: m,
                        titleColor: p,
                        mutedColor: g
                    }, e._id))
                })
            }), (0, t.jsx)(a.default, {})]
        })
    }])
}]);