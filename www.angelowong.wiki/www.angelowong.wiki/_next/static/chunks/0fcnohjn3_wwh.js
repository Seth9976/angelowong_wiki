(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 831483, e => {
    "use strict";
    var i = e.i(843476),
        t = e.i(271645),
        r = e.i(846932),
        n = e.i(88653),
        a = e.i(493681);
    let o = {
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
            theme: l
        } = (0, a.useTheme)(), s = "dark" === l, d = "zh-Hant" === e, [p, c] = (0, t.useState)(!1), [x, f] = (0, t.useState)(!1), [g, h] = (0, t.useState)(!1), m = s ? "#4a3828" : "#d0c4b4", u = "#07c160", y = "#009cde";
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                style: {
                    margin: "4rem 0 0",
                    padding: "2.75rem 2rem",
                    backgroundColor: s ? "rgba(201,132,90,0.06)" : "rgba(201,132,90,0.05)",
                    border: `1px solid ${s?"#3d2e22":"#ddd5c8"}`,
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    textAlign: "center",
                    transition: "background-color 0.3s ease, border-color 0.3s ease"
                },
                children: [(0, i.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        marginBottom: "0.25rem"
                    },
                    children: [(0, i.jsx)("div", {
                        style: {
                            width: "2rem",
                            height: "1px",
                            backgroundColor: m
                        }
                    }), (0, i.jsx)("svg", {
                        width: "10",
                        height: "10",
                        viewBox: "0 0 10 10",
                        fill: m,
                        children: (0, i.jsx)("path", {
                            d: "M5 0 L5.9 3.8 L10 5 L5.9 6.2 L5 10 L4.1 6.2 L0 5 L4.1 3.8 Z"
                        })
                    }), (0, i.jsx)("div", {
                        style: {
                            width: "2rem",
                            height: "1px",
                            backgroundColor: m
                        }
                    })]
                }), (0, i.jsx)("p", {
                    style: {
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        fontSize: "0.72rem",
                        letterSpacing: "0.18em",
                        color: s ? "#6b5e52" : "#b0a090",
                        margin: 0,
                        transition: "color 0.3s ease"
                    },
                    children: d ? "如果內容對你有所幫助" : "如果内容对你有所帮助"
                }), (0, i.jsx)("p", {
                    style: {
                        fontFamily: '"Noto Serif SC", Georgia, serif',
                        fontSize: "clamp(1.15rem, 2.6vw, 1.4rem)",
                        fontWeight: 300,
                        color: s ? "#ede8df" : "#1a1510",
                        lineHeight: 1.5,
                        letterSpacing: "0.06em",
                        margin: 0,
                        transition: "color 0.3s ease"
                    },
                    children: d ? "讓我們成為彼此的光" : "让我们成为彼此的光"
                }), (0, i.jsx)("p", {
                    style: {
                        fontSize: "0.82rem",
                        color: s ? "#7a6d60" : "#a09080",
                        lineHeight: 1.85,
                        margin: "0 0 0.5rem",
                        maxWidth: "24rem",
                        letterSpacing: "0.03em",
                        transition: "color 0.3s ease"
                    },
                    children: d ? "您的支持，讓獨立創作得以持續；每一份贊賞，都是對知識探索的鼓勵" : "您的支持，让独立创作得以持续；每一份赞赏，都是对知识探索的鼓励"
                }), (0, i.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    },
                    children: [(0, i.jsxs)("button", {
                        onClick: () => c(!0),
                        onMouseEnter: () => f(!0),
                        onMouseLeave: () => f(!1),
                        style: { ...o,
                            border: `1px solid ${u}`,
                            backgroundColor: x ? u : "transparent",
                            color: x ? "#fff" : u
                        },
                        children: [(0, i.jsx)("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            style: {
                                flexShrink: 0
                            },
                            children: (0, i.jsx)("path", {
                                d: "M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c-.276-.94-.418-1.92-.418-2.93 0-3.763 3.251-6.82 7.508-6.82.28 0 .556.012.831.035C15.81 4.246 12.588 2.188 8.691 2.188zm-2.75 3.687a1.077 1.077 0 1 1 0 2.154 1.077 1.077 0 0 1 0-2.154zm5.5 0a1.077 1.077 0 1 1 0 2.154 1.077 1.077 0 0 1 0-2.154zM17.294 9.5c-3.736 0-6.771 2.662-6.771 5.942 0 3.28 3.035 5.941 6.77 5.941a8.3 8.3 0 0 0 2.447-.364.748.748 0 0 1 .616.083l1.638.959a.28.28 0 0 0 .144.047.253.253 0 0 0 .25-.254c0-.062-.025-.123-.041-.184l-.336-1.274a.509.509 0 0 1 .183-.573C23.214 18.7 24 17.161 24 15.442 24 12.162 20.965 9.5 17.294 9.5zm-2.25 3.239a.928.928 0 1 1 0 1.855.928.928 0 0 1 0-1.855zm4.5 0a.928.928 0 1 1 0 1.855.928.928 0 0 1 0-1.855z"
                            })
                        }), d ? "微信贊賞" : "微信赞赏"]
                    }), (0, i.jsxs)("a", {
                        href: "https://paypal.me/ZeningW",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onMouseEnter: () => h(!0),
                        onMouseLeave: () => h(!1),
                        style: { ...o,
                            border: `1px solid ${y}`,
                            backgroundColor: g ? y : "transparent",
                            color: g ? "#fff" : y
                        },
                        children: [(0, i.jsx)("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            style: {
                                flexShrink: 0
                            },
                            children: (0, i.jsx)("path", {
                                d: "M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                            })
                        }), "PayPal"]
                    })]
                }), (0, i.jsx)("p", {
                    style: {
                        fontSize: "0.72rem",
                        color: s ? "#6b5e52" : "#b0a090",
                        margin: "0.1rem 0 0",
                        letterSpacing: "0.04em",
                        transition: "color 0.3s ease"
                    },
                    children: d ? "掃描二維碼即可抖內" : "扫描二维码即可赞赏"
                })]
            }), (0, i.jsx)(n.AnimatePresence, {
                children: p && (0, i.jsx)(r.motion.div, {
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
                    onClick: () => c(!1),
                    style: {
                        position: "fixed",
                        inset: 0,
                        zIndex: 9e3,
                        backgroundColor: s ? "rgba(10,7,4,0.85)" : "rgba(30,20,12,0.72)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1.5rem"
                    },
                    children: (0, i.jsxs)(r.motion.div, {
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
                            backgroundColor: s ? "#221810" : "#faf7f2",
                            border: `1px solid ${s?"#3d2e22":"#ddd5c8"}`,
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
                        children: [(0, i.jsx)("button", {
                            onClick: () => c(!1),
                            style: {
                                position: "absolute",
                                top: "0.75rem",
                                right: "0.75rem",
                                width: "1.6rem",
                                height: "1.6rem",
                                borderRadius: "50%",
                                backgroundColor: s ? "#3d2e22" : "#e8e0d0",
                                border: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: s ? "#9a8c7e" : "#8a7d6e",
                                fontSize: "0.95rem",
                                lineHeight: 1,
                                transition: "background-color 0.2s ease"
                            },
                            children: "×"
                        }), (0, i.jsx)("div", {
                            style: {
                                width: "100%",
                                borderRadius: "4px",
                                overflow: "hidden"
                            },
                            children: (0, i.jsx)("img", {
                                src: "/images/wechat-tip.jpg",
                                alt: "Angelo Wong 微信赞赏码",
                                style: {
                                    width: "100%",
                                    height: "auto",
                                    display: "block"
                                }
                            })
                        }), (0, i.jsx)("p", {
                            style: {
                                fontSize: "0.78rem",
                                color: s ? "#7a6d60" : "#a09080",
                                textAlign: "center",
                                lineHeight: 1.8,
                                margin: 0,
                                letterSpacing: "0.04em",
                                transition: "color 0.3s ease"
                            },
                            children: d ? "打開微信，掃描二維碼即可贊賞" : "打开微信，扫描二维码即可赞赏"
                        })]
                    }, "modal")
                }, "overlay")
            })]
        })
    }])
}, 993478, e => {
    "use strict";
    var i = e.i(247167),
        t = e.i(843476),
        r = e.i(271645),
        n = e.i(342724),
        a = e.i(56691),
        o = e.i(831483),
        l = e.i(704401),
        s = e.i(493681),
        d = e.i(846932);
    let p = {
            "zh-Hans": {
                tagline: "字渡",
                taglineSub: "见路不走，即见因果；见相非相，即见如来",
                sectionMembership: "一次性买断深度阅读会员",
                sectionZiduMembership: "字渡会员",
                sectionZiduMembershipSub: "字渡（zidu.app）是独立的海外中文阅读平台，与上方 angelowong.wiki 自己的会员是两回事，购买后在字渡站内使用",
                sectionZiduContent: "字渡核心内容",
                sectionZiduContentSub: "字渡（zidu.app）区别于其它阅读平台的地方——三个真正的核心卖点，加上配套功能，点击任意模块直接前往字渡站内体验",
                recommended: "推荐",
                buyNow: "立即获取",
                freeSignup: "免费注册",
                joinNow: "加入会员",
                notifyMe: "通知我",
                perYear: "/ 永久",
                oneTimeNote: "一次性付款 · 永久使用",
                refund: "Powered by Stripe",
                refundSub: "感谢您参与保护数字版权",
                currency: "US$",
                includes: "包含内容",
                viewModule: "前往体验",
                sectionPwa: "下载APP",
                sectionPwaSub: "不用去应用商店下载，直接添加到主屏幕就能用，不占用手机存储空间。",
                pwaIosTitle: "iPhone / iPad",
                pwaIosP1: "推荐用 Safari 打开本页 → 点击底部「分享」按钮 → 选择「添加到主屏幕」→ 点击「添加」。",
                pwaIosP2: "其他浏览器找不到这个选项？复制网址，改用 Safari 打开再操作一次。",
                pwaAndroidTitle: "Android",
                pwaAndroidP1: "推荐用 Chrome 打开本页 → 点击右上角「⋮」菜单 → 选择「安装应用」或「添加到主屏幕」。",
                pwaAndroidP2: "其他安卓浏览器一般也能在菜单里找到「添加到桌面」类似选项。",
                pwaVisitZidu: "前往 www.zidu.app",
                freeColumnLabel: "免费",
                paidColumnLabel: "付费会员",
                freeColumnSub: "注册即可使用部分内容",
                paidColumnSub: "月费 / 年费 / 终身，功能完全相同",
                partialLabel: "部分",
                sectionZiduPricingTitle: "选择你的付费方案",
                coreLabel: "核心卖点",
                supportLabel: "配套功能"
            },
            "zh-Hant": {
                tagline: "字渡",
                taglineSub: "見路不走，即見因果；見相非相，即見如來",
                sectionMembership: "終身深度閱讀會員",
                sectionZiduMembership: "字渡會員",
                sectionZiduMembershipSub: "字渡（zidu.app）是獨立的海外中文閱讀平台，與上方 angelowong.wiki 自己的會員是兩回事，購買後在字渡站內使用",
                sectionZiduContent: "字渡核心內容",
                sectionZiduContentSub: "字渡（zidu.app）區別於其它閱讀平台的地方——三個真正的核心賣點，加上配套功能，點擊任意模組直接前往字渡站內體驗",
                recommended: "推薦",
                buyNow: "立即獲取",
                freeSignup: "免費註冊",
                joinNow: "加入會員",
                notifyMe: "通知我",
                perYear: "/ 永久",
                oneTimeNote: "一次付款 · 終身使用",
                refund: "Powered by Stripe",
                refundSub: "感謝您參與保護數位版權",
                currency: "US$",
                includes: "包含內容",
                viewModule: "前往體驗",
                sectionPwa: "下載APP",
                sectionPwaSub: "不用去應用商店下載，直接添加到主螢幕就能用，不佔用手機儲存空間。",
                pwaIosTitle: "iPhone / iPad",
                pwaIosP1: "推薦用 Safari 打開本頁 → 點擊底部「分享」按鈕 → 選擇「添加到主螢幕」→ 點擊「添加」。",
                pwaIosP2: "其他瀏覽器找不到這個選項？複製網址，改用 Safari 打開再操作一次。",
                pwaAndroidTitle: "Android",
                pwaAndroidP1: "推薦用 Chrome 打開本頁 → 點擊右上角「⋮」菜單 → 選擇「安裝應用」或「添加到主螢幕」。",
                pwaAndroidP2: "其他安卓瀏覽器一般也能在菜單裡找到「添加到桌面」類似選項。",
                pwaVisitZidu: "前往 www.zidu.app",
                freeColumnLabel: "免費",
                paidColumnLabel: "付費會員",
                freeColumnSub: "註冊即可使用部分內容",
                paidColumnSub: "月費 / 年費 / 終身，功能完全相同",
                partialLabel: "部分",
                sectionZiduPricingTitle: "選擇你的付費方案",
                coreLabel: "核心賣點",
                supportLabel: "配套功能"
            }
        },
        c = i.default.env.NEXT_PUBLIC_ZIDU_LOGIN_URL || "https://www.zidu.app/login",
        x = i.default.env.NEXT_PUBLIC_ZIDU_CHECKOUT_URL || "https://www.zidu.app/checkout",
        f = {
            monthly: "monthly",
            yearly: "annual",
            lifetime: "lifetime"
        },
        g = i.default.env.NEXT_PUBLIC_ZIDU_SHELF_URL || "https://zidu.app/shelf",
        h = i.default.env.NEXT_PUBLIC_ZIDU_NOTES_URL || "https://zidu.app/notes",
        m = i.default.env.NEXT_PUBLIC_ZIDU_SALON_URL || "https://zidu.app/salon",
        u = i.default.env.NEXT_PUBLIC_ZIDU_FORUM_URL || "https://www.zidu.app/plaza",
        y = i.default.env.NEXT_PUBLIC_ZIDU_AI_URL || "https://zidu.app/ai-assistant",
        b = i.default.env.NEXT_PUBLIC_ZIDU_NETWORKING_URL || "https://zidu.app/networking",
        S = {
            "zh-Hans": {
                title: "「深度阅读者」终身会员",
                description: "一次性买断，做出合理决策的思维方式",
                includes: ["终身Claude AI支持", "终身全免Angelo作品", "终身与Angelo互动机会", "终身获取理论学习工具", "终身获取图书与论文资料"],
                price: "US$288",
                lsUrl: "https://YOUR_LEMON_SQUEEZY_LINK_MEMBERSHIP"
            },
            "zh-Hant": {
                title: "「深度閱讀者」終身會員",
                description: "一次性買斷，做出合理決策的思考方式",
                includes: ["終身Claude AI支持", "終身全免Angelo作品", "終身與Angelo互動機會", "終身獲取理論學習工具", "終身獲取圖書與論文資料"],
                price: "US$288",
                lsUrl: "https://YOUR_LEMON_SQUEEZY_LINK_MEMBERSHIP"
            }
        },
        w = [{
            id: "free",
            plan: "free",
            "zh-Hans": {
                title: "免费版",
                tagline: "先注册看看",
                description: "无需付费即可注册字渡账号，率先体验论坛社区，感受读者社群氛围，随时可以升级解锁完整功能。",
                price: "免费",
                priceUnit: "注册即可使用"
            },
            "zh-Hant": {
                title: "免費版",
                tagline: "先註冊看看",
                description: "無需付費即可註冊字渡帳號，率先體驗論壇社群，感受讀者社群氛圍，隨時可以升級解鎖完整功能。",
                price: "免費",
                priceUnit: "註冊即可使用"
            }
        }, {
            id: "monthly",
            plan: "monthly",
            "zh-Hans": {
                title: "月费会员",
                tagline: "随时开始，随时停",
                description: "按月订阅可使用字渡全部功能：完整书架访问、划线笔记、语音读书会沙龙、论坛发帖与私信、AI 阅读助手，适合想先体验的读者。",
                price: "US$8",
                priceUnit: "/ 月"
            },
            "zh-Hant": {
                title: "月費會員",
                tagline: "隨時開始，隨時停",
                description: "按月訂閱可使用字渡全部功能：完整書架訪問、劃線筆記、語音讀書會沙龍、論壇發帖與私信、AI 閱讀助手，適合想先體驗的讀者。",
                price: "US$8",
                priceUnit: "/ 月"
            }
        }, {
            id: "yearly",
            plan: "yearly",
            recommended: !0,
            "zh-Hans": {
                title: "年费会员",
                tagline: "更划算的长期选择",
                description: "同样享有全部功能，折合每月约 US$7.3，适合确定会持续使用的读者。",
                price: "US$88",
                priceUnit: "/ 年",
                priceSub: "约合每月 US$7.3"
            },
            "zh-Hant": {
                title: "年費會員",
                tagline: "更划算的長期選擇",
                description: "同樣享有全部功能，折合每月約 US$7.3，適合確定會持續使用的讀者。",
                price: "US$88",
                priceUnit: "/ 年",
                priceSub: "約合每月 US$7.3"
            }
        }, {
            id: "lifetime",
            plan: "lifetime",
            "zh-Hans": {
                title: "终身会员",
                tagline: "一次付费，永久使用",
                description: "永久使用字渡当前及未来新增的所有功能。",
                price: "US$288",
                priceUnit: "/ 永久"
            },
            "zh-Hant": {
                title: "終身會員",
                tagline: "一次付費，永久使用",
                description: "永久使用字渡當前及未來新增的所有功能。",
                price: "US$288",
                priceUnit: "/ 永久"
            }
        }],
        j = [{
            id: "knowledge-graph",
            "zh-Hans": "人类知识图谱",
            "zh-Hant": "人類知識圖譜",
            free: !0
        }, {
            id: "systematic-learning",
            "zh-Hans": "系统性理论学习",
            "zh-Hant": "系統性理論學習",
            free: "partial"
        }, {
            id: "first-principles",
            "zh-Hans": "第一性原理网络",
            "zh-Hant": "第一性原理網絡",
            free: !0
        }, {
            id: "shelf",
            "zh-Hans": "完整书架访问",
            "zh-Hant": "完整書架訪問",
            free: !1
        }, {
            id: "reading",
            "zh-Hans": "先进阅读体验（多种阅读模式、划线、笔记）",
            "zh-Hant": "先進閱讀體驗（多種閱讀模式、劃線、筆記）",
            free: !1
        }, {
            id: "voice-room",
            "zh-Hans": "语音房",
            "zh-Hant": "語音房",
            free: !1
        }, {
            id: "book-club",
            "zh-Hans": "读书会",
            "zh-Hant": "讀書會",
            free: !1
        }, {
            id: "co-reading",
            "zh-Hans": "共读图书、网络任意链接内容",
            "zh-Hant": "共讀圖書、網絡任意連結內容",
            free: !1
        }, {
            id: "ai-room-summary",
            "zh-Hans": "AI房间总结",
            "zh-Hant": "AI房間總結",
            free: !1
        }, {
            id: "forum",
            "zh-Hans": "论坛发帖与私信",
            "zh-Hant": "論壇發帖與私信",
            free: !0
        }, {
            id: "ai",
            "zh-Hans": "AI 阅读助手",
            "zh-Hant": "AI 閱讀助手",
            free: !1
        }, {
            id: "sync",
            "zh-Hans": "跨设备同步",
            "zh-Hant": "跨裝置同步",
            free: !0
        }, {
            id: "upload",
            "zh-Hans": "个人图书上传",
            "zh-Hant": "個人圖書上傳",
            free: !1
        }, {
            id: "early-access",
            "zh-Hans": "优先体验新功能",
            "zh-Hant": "優先體驗新功能",
            free: !1
        }, {
            id: "networking-perk",
            "zh-Hans": "优质人际关系网络",
            "zh-Hant": "優質人際關係網絡",
            free: !0
        }],
        v = [{
            id: "shelf",
            tier: "core",
            href: g,
            "zh-Hans": {
                title: "书架",
                description: "包含人类基础知识架构的知识图谱、由浅入深的系统性理论学习、基于第一性原理的知识网络、和丰富的精选书籍，所有内容均可划线、笔记、分享。"
            },
            "zh-Hant": {
                title: "書架",
                description: "包含人類基础知识架構的知识圖譜、由淺入深的系統性理論學習、基於第一性原理的知識網絡、和豐富的精選書籍，所有內容均可劃線、筆記、分享。"
            }
        }, {
            id: "salon",
            tier: "core",
            href: m,
            "zh-Hans": {
                title: "语音读书会",
                description: "和其他读者实时语音共读一本书，也可以共读网络上的任意链接内容、书架里任意公共或个人图书；AI 自动生成讨论精华，没能参加也不会错过重点。"
            },
            "zh-Hant": {
                title: "語音讀書會",
                description: "和其他讀者即時語音共讀一本書，也可以共讀網絡上的任意連結內容、書架裡任意公共或個人圖書；AI 自動生成討論精華，沒能參加也不會錯過重點。"
            }
        }, {
            id: "ai-assistant",
            tier: "core",
            href: y,
            "zh-Hans": {
                title: "Claude 支持",
                description: "从读书会到阅读本身，一流 AI Claude 全程帮你抓重点、答疑惑——读书会自动转录总结，阅读时读到不懂的背景、想深入讨论某个观点，随时向 AI 提问。"
            },
            "zh-Hant": {
                title: "Claude 支持",
                description: "從讀書會到閱讀本身，一流 AI Claude 全程幫你抓重點、答疑惑——讀書會自動轉錄總結，閱讀時讀到不懂的背景、想深入討論某個觀點，隨時向 AI 提問。"
            }
        }, {
            id: "reading-experience",
            tier: "support",
            href: h,
            "zh-Hans": {
                title: "先进阅读体验",
                description: "阅读屏幕模式多样、可划线、做笔记、卡片分享、留言交流。"
            },
            "zh-Hant": {
                title: "先進閱讀體驗",
                description: "閱讀螢幕模式多樣、可劃線、做筆記、卡片分享、留言交流。"
            }
        }, {
            id: "forum",
            tier: "support",
            href: u,
            "zh-Hans": {
                title: "论坛",
                description: "书评、共读招募、提问、思考随笔、建议反馈六个板块的书友社区。"
            },
            "zh-Hant": {
                title: "論壇",
                description: "書評、共讀招募、提問、思考隨筆、建議反饋六個板塊的書友社群。"
            }
        }, {
            id: "networking",
            tier: "support",
            href: b,
            "zh-Hans": {
                title: "优质人际关系网络",
                description: "为深入发展精英群体间人际关系而专门设计，朋友在精不在多，帮助建立长期、有效、有价值的顶级社会关系网络。"
            },
            "zh-Hant": {
                title: "優質人際關係網絡",
                description: "為深入發展精英群體間人際關係而專門設計，朋友在精不在多，幫助建立長期、有效、有價值的頂級社會關係網絡。"
            }
        }],
        z = {
            hidden: {
                opacity: 0,
                y: 24
            },
            visible: e => ({
                opacity: 1,
                y: 0,
                transition: {
                    duration: .6,
                    delay: .1 * e,
                    ease: [.22, 1, .36, 1]
                }
            })
        };

    function C({
        isDark: e,
        style: i
    }) {
        let r = e ? "#d4916a" : "#c9845a";
        return (0, t.jsxs)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            style: {
                flexShrink: 0,
                marginTop: "3px",
                ...i
            },
            children: [(0, t.jsx)("circle", {
                cx: "7",
                cy: "7",
                r: "6.5",
                stroke: r,
                strokeOpacity: "0.5"
            }), (0, t.jsx)("path", {
                d: "M4.5 7L6.5 9L9.5 5.5",
                stroke: r,
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        })
    }

    function k({
        isDark: e,
        style: i
    }) {
        let r = e ? "#5a4f42" : "#c4b8a8";
        return (0, t.jsxs)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            style: {
                flexShrink: 0,
                ...i
            },
            children: [(0, t.jsx)("circle", {
                cx: "7",
                cy: "7",
                r: "6.5",
                stroke: r,
                strokeOpacity: "0.5"
            }), (0, t.jsx)("path", {
                d: "M5 5L9 9M9 5L5 9",
                stroke: r,
                strokeWidth: "1.2",
                strokeLinecap: "round"
            })]
        })
    }

    function H({
        children: e,
        isDark: i
    }) {
        return (0, t.jsxs)("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "32px"
            },
            children: [(0, t.jsx)("span", {
                style: {
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: i ? "#9a8c7e" : "#8a7d6e"
                },
                children: e
            }), (0, t.jsx)("span", {
                style: {
                    flex: 1,
                    height: "1px",
                    background: i ? "linear-gradient(to right, #3d2e22 0%, transparent 100%)" : "linear-gradient(to right, #e0d8cd 0%, transparent 100%)"
                }
            })]
        })
    }

    function L({
        lang: e,
        isDark: i
    }) {
        let r = p[e],
            n = S[e],
            a = i ? "#d4916a40" : "#c9845a60",
            o = i ? "#ede8df" : "#2c1f14",
            l = i ? "#3d2e22" : "#e0d8cd",
            s = i ? "#d4916a" : "#c9845a";
        return (0, t.jsxs)(d.motion.div, {
            custom: 0,
            variants: z,
            initial: "hidden",
            animate: "visible",
            style: {
                position: "relative",
                background: i ? "linear-gradient(145deg, #2e2218 0%, #261c14 100%)" : "linear-gradient(145deg, #ffffff 0%, #faf7f2 100%)",
                border: `1px solid ${a}`,
                borderRadius: "4px",
                padding: "clamp(32px, 5vw, 52px) clamp(28px, 5vw, 52px)",
                boxShadow: i ? "0 0 40px #d4916a06, 0 8px 32px #00000030, inset 0 1px 0 #d4916a18" : "0 0 40px #c9845a08, 0 8px 32px #2c1f1412, inset 0 1px 0 #c9845a20",
                overflow: "hidden",
                transition: "background 0.3s ease, border-color 0.3s ease"
            },
            children: [(0, t.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "-60px",
                    right: "-60px",
                    width: "240px",
                    height: "240px",
                    background: `radial-gradient(circle, ${s}06 0%, transparent 70%)`,
                    pointerEvents: "none"
                }
            }), (0, t.jsx)("div", {
                style: {
                    position: "absolute",
                    bottom: "-40px",
                    left: "10%",
                    width: "180px",
                    height: "180px",
                    background: "radial-gradient(circle, #f0c97a05 0%, transparent 70%)",
                    pointerEvents: "none"
                }
            }), (0, t.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    background: `linear-gradient(135deg, ${s}, ${i?"#c4815a":"#b5704a"})`,
                    color: "#faf7f2",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    padding: "5px 12px",
                    borderRadius: "2px",
                    fontFamily: "'Noto Serif SC', serif"
                },
                children: r.recommended
            }), (0, t.jsxs)("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "28px"
                },
                children: [(0, t.jsxs)("div", {
                    children: [(0, t.jsx)("div", {
                        style: {
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "clamp(22px, 3vw, 28px)",
                            color: i ? "#ede8df" : "#2c1f14",
                            lineHeight: 1.3,
                            marginBottom: "12px",
                            fontWeight: 600,
                            transition: "color 0.3s ease"
                        },
                        children: n.title
                    }), (0, t.jsx)("p", {
                        style: {
                            fontFamily: "'Noto Serif SC', serif",
                            fontSize: "14px",
                            color: i ? "#9a8c7e" : "#8a7d6e",
                            lineHeight: 1.8,
                            margin: "0 0 24px",
                            transition: "color 0.3s ease"
                        },
                        children: n.description
                    }), (0, t.jsx)("div", {
                        style: {
                            fontSize: "11px",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: i ? "#9a8c7e" : "#8a7d6e",
                            marginBottom: "14px",
                            fontFamily: "'Noto Serif SC', serif"
                        },
                        children: r.includes
                    }), (0, t.jsx)("ul", {
                        style: {
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        },
                        children: n.includes.map((e, r) => (0, t.jsxs)("li", {
                            style: {
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "10px",
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "13.5px",
                                color: o,
                                lineHeight: 1.6
                            },
                            children: [(0, t.jsx)(C, {
                                isDark: i
                            }), (0, t.jsx)("span", {
                                children: e
                            })]
                        }, r))
                    })]
                }), (0, t.jsxs)("div", {
                    style: {
                        borderTop: `1px solid ${l}`,
                        paddingTop: "24px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "20px"
                    },
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("div", {
                            style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "clamp(36px, 5vw, 48px)",
                                color: i ? "#d4916a" : "#c9845a",
                                lineHeight: 1,
                                fontWeight: 700,
                                transition: "color 0.3s ease"
                            },
                            children: [n.price, (0, t.jsx)("span", {
                                style: {
                                    fontSize: "16px",
                                    color: i ? "#9a8c7e" : "#8a7d6e",
                                    fontWeight: 400,
                                    marginLeft: "6px"
                                },
                                children: r.perYear
                            })]
                        }), (0, t.jsx)("div", {
                            style: {
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "12px",
                                color: i ? "#b8844a" : "#9a6b3a",
                                marginTop: "6px",
                                opacity: .85
                            },
                            children: r.oneTimeNote
                        })]
                    }), (0, t.jsx)("a", {
                        href: n.lsUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            display: "inline-block",
                            background: `linear-gradient(135deg, ${s} 0%, ${i?"#c4815a":"#b5704a"} 100%)`,
                            color: "#faf7f2",
                            fontFamily: "'Noto Serif SC', serif",
                            fontSize: "15px",
                            padding: "14px 36px",
                            borderRadius: "3px",
                            textDecoration: "none",
                            letterSpacing: "0.05em",
                            boxShadow: `0 4px 20px ${s}30`,
                            transition: "all 0.25s ease",
                            whiteSpace: "nowrap"
                        },
                        onMouseEnter: e => {
                            e.currentTarget.style.transform = "translateY(-2px)", e.currentTarget.style.boxShadow = `0 8px 28px ${s}40`
                        },
                        onMouseLeave: e => {
                            e.currentTarget.style.transform = "translateY(0)", e.currentTarget.style.boxShadow = `0 4px 20px ${s}30`
                        },
                        children: r.joinNow
                    })]
                })]
            })]
        })
    }

    function I({
        lang: e,
        isDark: i
    }) {
        let n = p[e],
            a = i ? "#3d2e22" : "#e0d8cd",
            o = i ? "#3d2e2280" : "#e0d8cd80",
            l = i ? "linear-gradient(180deg, #3a2c1e 0%, #2e2218 100%)" : "linear-gradient(180deg, #fdf6ec 0%, #fbf3e9 100%)",
            s = i ? "#ede8df" : "#2c1f14",
            d = i ? "#c7bcae" : "#4a3d2e",
            c = i ? "#9a8c7e" : "#8a7d6e",
            x = i ? "#d4916a" : "#c9845a",
            f = i ? "#d4916a22" : "#c9845a18",
            g = i ? "#f0c97a" : "#b5822e",
            h = i ? "linear-gradient(145deg, #2e2218 0%, #261c14 100%)" : "linear-gradient(145deg, #ffffff 0%, #faf7f2 100%)",
            m = i ? "#d4916a30" : "#c9845a45",
            u = i ? "0 0 40px #d4916a05, 0 8px 32px #00000025, inset 0 1px 0 #d4916a12" : "0 0 40px #c9845a06, 0 8px 32px #2c1f140f, inset 0 1px 0 #c9845a15";
        return (0, t.jsxs)("div", {
            style: {
                position: "relative",
                background: h,
                border: `1px solid ${m}`,
                borderRadius: "6px",
                boxShadow: u,
                padding: "clamp(4px, 1vw, 10px)",
                overflow: "hidden",
                transition: "background 0.3s ease, border-color 0.3s ease"
            },
            children: [(0, t.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "-50px",
                    right: "-50px",
                    width: "200px",
                    height: "200px",
                    background: `radial-gradient(circle, ${x}06 0%, transparent 70%)`,
                    pointerEvents: "none"
                }
            }), (0, t.jsx)("div", {
                style: {
                    position: "absolute",
                    bottom: "-30px",
                    left: "5%",
                    width: "160px",
                    height: "160px",
                    background: "radial-gradient(circle, #f0c97a05 0%, transparent 70%)",
                    pointerEvents: "none"
                }
            }), (0, t.jsx)("div", {
                style: {
                    overflowX: "auto",
                    WebkitOverflowScrolling: "touch",
                    position: "relative"
                },
                children: (0, t.jsxs)("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "minmax(200px, 1.8fr) repeat(2, minmax(120px, 1fr))",
                        minWidth: "440px",
                        borderRadius: "4px",
                        overflow: "hidden"
                    },
                    children: [(0, t.jsx)("div", {
                        style: {
                            padding: "20px 16px",
                            borderBottom: `1px solid ${a}`
                        }
                    }), (0, t.jsxs)("div", {
                        style: {
                            padding: "20px 10px",
                            textAlign: "center",
                            borderBottom: `1px solid ${a}`,
                            borderLeft: `1px solid ${a}`
                        },
                        children: [(0, t.jsx)("div", {
                            style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "clamp(16px, 2vw, 19px)",
                                color: s,
                                fontWeight: 600,
                                lineHeight: 1.3,
                                marginBottom: "8px"
                            },
                            children: n.freeColumnLabel
                        }), (0, t.jsx)("div", {
                            style: {
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "10.5px",
                                color: c,
                                lineHeight: 1.5
                            },
                            children: n.freeColumnSub
                        })]
                    }), (0, t.jsxs)("div", {
                        style: {
                            padding: "20px 10px",
                            textAlign: "center",
                            borderBottom: `1px solid ${a}`,
                            borderLeft: `1px solid ${a}`,
                            background: l
                        },
                        children: [(0, t.jsx)("div", {
                            style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "clamp(16px, 2vw, 19px)",
                                color: s,
                                fontWeight: 600,
                                lineHeight: 1.3,
                                marginBottom: "8px"
                            },
                            children: n.paidColumnLabel
                        }), (0, t.jsx)("div", {
                            style: {
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "10.5px",
                                color: c,
                                lineHeight: 1.5
                            },
                            children: n.paidColumnSub
                        })]
                    }), j.map(s => (0, t.jsxs)(r.Fragment, {
                        children: [(0, t.jsx)("div", {
                            style: {
                                padding: "14px 16px",
                                borderBottom: `1px solid ${o}`,
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "12.5px",
                                color: d,
                                lineHeight: 1.5,
                                display: "flex",
                                alignItems: "center"
                            },
                            children: s[e]
                        }), (0, t.jsxs)("div", {
                            style: {
                                padding: "14px 10px",
                                borderBottom: `1px solid ${o}`,
                                borderLeft: `1px solid ${a}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: [!0 === s.free && (0, t.jsx)(C, {
                                isDark: i,
                                style: {
                                    marginTop: 0
                                }
                            }), !1 === s.free && (0, t.jsx)(k, {
                                isDark: i
                            }), "partial" === s.free && (0, t.jsx)("span", {
                                style: {
                                    fontFamily: "'Noto Serif SC', serif",
                                    fontSize: "11px",
                                    color: g,
                                    background: f,
                                    padding: "3px 10px",
                                    borderRadius: "10px",
                                    whiteSpace: "nowrap"
                                },
                                children: n.partialLabel
                            })]
                        }), (0, t.jsx)("div", {
                            style: {
                                padding: "14px 10px",
                                borderBottom: `1px solid ${o}`,
                                borderLeft: `1px solid ${a}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: l
                            },
                            children: (0, t.jsx)(C, {
                                isDark: i,
                                style: {
                                    marginTop: 0
                                }
                            })
                        })]
                    }, s.id))]
                })
            })]
        })
    }

    function T({
        lang: e,
        isDark: i
    }) {
        let r = p[e],
            n = i ? "linear-gradient(145deg, #2e2218 0%, #261c14 100%)" : "linear-gradient(145deg, #ffffff 0%, #faf7f2 100%)",
            a = i ? "#d4916a30" : "#c9845a45",
            o = i ? "#d4916a" : "#c9845a",
            l = i ? "0 0 40px #d4916a05, 0 8px 32px #00000025, inset 0 1px 0 #d4916a12" : "0 0 40px #c9845a06, 0 8px 32px #2c1f140f, inset 0 1px 0 #c9845a15",
            s = i ? "#ede8df" : "#2c1f14",
            d = i ? "#d4916a" : "#c9845a",
            g = i ? "#f0c97a" : "#b5822e",
            h = i ? "#9a8c7e" : "#8a7d6e",
            m = i ? "#d4916a" : "#c9845a",
            u = i ? "#d4916a40" : "#c9845a60",
            y = i ? "#d4916a" : "#c9845a",
            b = i ? "#c4815a" : "#b5704a";
        return (0, t.jsx)("div", {
            className: "shop-pricing-grid",
            style: {
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px"
            },
            children: w.map(p => {
                let S = p[e],
                    w = "free" === p.plan,
                    j = w ? c : `${x}?plan=${f[p.plan]||p.plan}`,
                    v = w ? r.freeSignup : r.buyNow;
                return (0, t.jsxs)("div", {
                    style: {
                        position: "relative",
                        background: n,
                        border: `1px solid ${p.recommended?o:a}`,
                        borderRadius: "6px",
                        boxShadow: l,
                        padding: "clamp(20px, 3vw, 28px) clamp(16px, 2.5vw, 22px)",
                        textAlign: "center",
                        transition: "background 0.3s ease, border-color 0.3s ease"
                    },
                    children: [p.recommended && (0, t.jsx)("div", {
                        style: {
                            position: "absolute",
                            top: "-11px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: `linear-gradient(135deg, ${m}, ${b})`,
                            color: "#faf7f2",
                            fontSize: "9px",
                            letterSpacing: "0.1em",
                            padding: "4px 12px",
                            borderRadius: "10px",
                            fontFamily: "'Noto Serif SC', serif",
                            whiteSpace: "nowrap",
                            boxShadow: `0 2px 12px ${y}30`
                        },
                        children: r.recommended
                    }), (0, t.jsx)("div", {
                        style: {
                            fontFamily: "'Noto Serif SC', serif",
                            fontSize: "10.5px",
                            color: d,
                            marginBottom: "6px",
                            letterSpacing: "0.02em"
                        },
                        children: S.tagline
                    }), (0, t.jsx)("div", {
                        style: {
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "clamp(15px, 2vw, 18px)",
                            color: s,
                            fontWeight: 600,
                            lineHeight: 1.3,
                            marginBottom: "12px"
                        },
                        children: S.title
                    }), (0, t.jsx)("div", {
                        style: {
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "clamp(24px, 3.2vw, 30px)",
                            color: g,
                            fontWeight: 700,
                            lineHeight: 1
                        },
                        children: S.price
                    }), (0, t.jsx)("div", {
                        style: {
                            fontFamily: "'Noto Serif SC', serif",
                            fontSize: "11px",
                            color: h,
                            marginTop: "3px",
                            marginBottom: "18px"
                        },
                        children: S.priceUnit
                    }), p.recommended ? (0, t.jsx)("a", {
                        href: j,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            display: "inline-block",
                            width: "100%",
                            background: `linear-gradient(135deg, ${y} 0%, ${b} 100%)`,
                            color: "#faf7f2",
                            fontFamily: "'Noto Serif SC', serif",
                            fontSize: "13px",
                            padding: "11px 12px",
                            borderRadius: "3px",
                            textDecoration: "none",
                            letterSpacing: "0.02em",
                            boxShadow: `0 4px 16px ${y}35`,
                            transition: "all 0.25s ease",
                            whiteSpace: "nowrap"
                        },
                        onMouseEnter: e => {
                            let i = e.currentTarget;
                            i.style.transform = "translateY(-2px)", i.style.boxShadow = `0 8px 22px ${y}45`
                        },
                        onMouseLeave: e => {
                            let i = e.currentTarget;
                            i.style.transform = "translateY(0)", i.style.boxShadow = `0 4px 16px ${y}35`
                        },
                        children: v
                    }) : (0, t.jsx)("a", {
                        href: j,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            display: "inline-block",
                            border: `1px solid ${u}`,
                            color: m,
                            fontFamily: "'Noto Serif SC', serif",
                            fontSize: "12.5px",
                            padding: "10px 12px",
                            borderRadius: "3px",
                            textDecoration: "none",
                            letterSpacing: "0.02em",
                            transition: "all 0.2s ease",
                            whiteSpace: "nowrap",
                            width: "100%"
                        },
                        onMouseEnter: e => {
                            let t = e.currentTarget;
                            t.style.background = i ? "#d4916a18" : "#c9845a12", t.style.borderColor = i ? "#d4916a" : "#c9845a"
                        },
                        onMouseLeave: e => {
                            let i = e.currentTarget;
                            i.style.background = "transparent", i.style.borderColor = u
                        },
                        children: v
                    })]
                }, p.id)
            })
        })
    }

    function N({
        mod: e,
        lang: i,
        index: r,
        isDark: n
    }) {
        let a = p[i],
            o = e[i],
            l = n ? "#d4916a35" : "#c9845a50";
        return (0, t.jsxs)(d.motion.a, {
            href: e.href,
            target: "_blank",
            rel: "noopener noreferrer",
            custom: r,
            variants: z,
            initial: "hidden",
            animate: "visible",
            whileHover: {
                y: -4
            },
            style: {
                position: "relative",
                display: "block",
                textDecoration: "none",
                background: n ? "linear-gradient(145deg, #2e2218 0%, #261c14 100%)" : "linear-gradient(145deg, #ffffff 0%, #faf7f2 100%)",
                border: `1px solid ${l}`,
                borderRadius: "4px",
                padding: "clamp(26px, 4vw, 36px)",
                overflow: "hidden",
                boxShadow: n ? "0 8px 28px #00000025" : "0 8px 28px #2c1f140c",
                transition: "border-color 0.3s ease, background 0.3s ease"
            },
            onMouseEnter: e => {
                e.currentTarget.style.borderColor = n ? "#d4916a70" : "#c9845a80"
            },
            onMouseLeave: e => {
                e.currentTarget.style.borderColor = l
            },
            children: [(0, t.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "140px",
                    height: "140px",
                    background: `radial-gradient(circle, ${n?"#d4916a":"#c9845a"}08 0%, transparent 70%)`,
                    pointerEvents: "none"
                }
            }), (0, t.jsx)("span", {
                style: {
                    display: "inline-block",
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "10.5px",
                    color: n ? "#f0c97a" : "#b5822e",
                    background: n ? "#d4916a1a" : "#c9845a15",
                    padding: "3px 10px",
                    borderRadius: "10px",
                    letterSpacing: "0.05em",
                    marginBottom: "14px"
                },
                children: a.coreLabel
            }), (0, t.jsx)("div", {
                style: {
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(19px, 2.8vw, 23px)",
                    color: n ? "#ede8df" : "#2c1f14",
                    lineHeight: 1.35,
                    marginBottom: "12px",
                    fontWeight: 600
                },
                children: o.title
            }), (0, t.jsx)("p", {
                style: {
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "13.5px",
                    color: n ? "#c7bcae" : "#5a4d3e",
                    lineHeight: 1.85,
                    margin: "0 0 20px"
                },
                children: o.description
            }), (0, t.jsxs)("div", {
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "12.5px",
                    color: n ? "#d4916a" : "#c9845a",
                    letterSpacing: "0.05em"
                },
                children: [a.viewModule, (0, t.jsx)("span", {
                    "aria-hidden": "true",
                    children: "→"
                })]
            })]
        })
    }

    function $({
        mod: e,
        lang: i,
        index: r,
        isDark: n,
        isLast: a
    }) {
        let o = p[i],
            l = e[i];
        return (0, t.jsxs)(d.motion.a, {
            href: e.href,
            target: "_blank",
            rel: "noopener noreferrer",
            custom: r,
            variants: z,
            initial: "hidden",
            animate: "visible",
            style: {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                gap: "4px 12px",
                textDecoration: "none",
                padding: "14px 4px",
                borderBottom: a ? "none" : `1px solid ${n?"#3d2e2280":"#e0d8cd80"}`
            },
            children: [(0, t.jsx)("span", {
                style: {
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "13.5px",
                    color: n ? "#ede8df" : "#2c1f14",
                    fontWeight: 600,
                    whiteSpace: "nowrap"
                },
                children: l.title
            }), (0, t.jsx)("span", {
                style: {
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "12px",
                    color: n ? "#9a8c7e" : "#8a7d6e",
                    lineHeight: 1.6,
                    flex: 1,
                    minWidth: "200px"
                },
                children: l.description
            }), (0, t.jsxs)("span", {
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "11.5px",
                    color: n ? "#d4916a" : "#c9845a",
                    letterSpacing: "0.03em",
                    whiteSpace: "nowrap"
                },
                children: [o.viewModule, (0, t.jsx)("span", {
                    "aria-hidden": "true",
                    children: "→"
                })]
            })]
        })
    }

    function U({
        title: e,
        p1: i,
        p2: r,
        isDark: n
    }) {
        let a = n ? "#9a8c7e" : "#8a7d6e";
        return (0, t.jsxs)("div", {
            style: {
                background: n ? "#261c14" : "#ffffff",
                border: `1px solid ${n?"#3d2e22":"#e0d8cd"}`,
                borderRadius: "4px",
                padding: "clamp(24px, 4vw, 32px)",
                transition: "background 0.3s ease, border-color 0.3s ease"
            },
            children: [(0, t.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "16px"
                },
                children: [(0, t.jsx)("span", {
                    style: {
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: n ? "#d4916a" : "#c9845a",
                        flexShrink: 0
                    }
                }), (0, t.jsx)("div", {
                    style: {
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(18px, 2.5vw, 22px)",
                        color: n ? "#ede8df" : "#2c1f14",
                        fontWeight: 600
                    },
                    children: e
                })]
            }), (0, t.jsx)("p", {
                style: {
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "13px",
                    color: a,
                    lineHeight: 1.9,
                    margin: "0 0 14px"
                },
                children: i
            }), (0, t.jsx)("p", {
                style: {
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "13px",
                    color: a,
                    lineHeight: 1.9,
                    margin: 0
                },
                children: r
            })]
        })
    }
    e.s(["default", 0, function({
        products: e
    }) {
        let {
            lang: i
        } = (0, l.useLang)(), {
            theme: r
        } = (0, s.useTheme)(), c = "dark" === r, x = p[i], f = c ? "#1c1510" : "#f5f0e8", g = c ? "#d4916a" : "#c9845a", h = c ? "#ede8df" : "#2c1f14", m = c ? "#9a8c7e" : "#8a7d6e", u = c ? "linear-gradient(to right, #d4916a30, #3d2e22 60%, transparent)" : "linear-gradient(to right, #c9845a40, #e0d8cd 60%, transparent)", y = c ? "#3d2e22" : "#e0d8cd", b = c ? "#ede8df" : "#2c1f14", S = c ? "#9a8c7e" : "#8a7d6e";
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(n.default, {}), (0, t.jsx)("style", {
                children: `
        .shop-section { position: relative; overflow: hidden; }
        .shop-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; z-index: -1; opacity: 0.15;
        }
        @media (min-width: 768px) {
          .shop-core-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .shop-pwa-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .shop-pricing-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .shop-core-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `
            }), (0, t.jsx)("section", {
                className: "shop-section",
                style: {
                    background: f,
                    paddingBottom: "80px",
                    transition: "background 0.3s ease"
                },
                children: (0, t.jsxs)("div", {
                    style: {
                        maxWidth: "960px",
                        margin: "0 auto",
                        padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 48px) 0",
                        position: "relative",
                        zIndex: 1
                    },
                    children: [(0, t.jsxs)(d.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .7,
                            ease: [.22, 1, .36, 1]
                        },
                        style: {
                            marginBottom: "clamp(48px, 8vw, 80px)"
                        },
                        children: [(0, t.jsx)("div", {
                            style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "11px",
                                letterSpacing: "0.25em",
                                textTransform: "uppercase",
                                color: g,
                                marginBottom: "20px"
                            },
                            children: "Shop"
                        }), (0, t.jsx)("h1", {
                            style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "clamp(22px, 4vw, 32px)",
                                color: h,
                                lineHeight: 1.5,
                                fontWeight: 400,
                                margin: "0 0 16px",
                                maxWidth: "640px",
                                transition: "color 0.3s ease"
                            },
                            children: x.tagline
                        }), (0, t.jsx)("p", {
                            style: {
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "14px",
                                color: m,
                                lineHeight: 1.9,
                                margin: 0,
                                maxWidth: "500px",
                                transition: "color 0.3s ease"
                            },
                            children: x.taglineSub
                        }), (0, t.jsx)("div", {
                            style: {
                                marginTop: "32px",
                                height: "1px",
                                background: u
                            }
                        })]
                    }), (0, t.jsxs)("section", {
                        style: {
                            marginBottom: "clamp(56px, 8vw, 80px)"
                        },
                        children: [(0, t.jsx)(H, {
                            isDark: c,
                            children: x.sectionMembership
                        }), (0, t.jsx)(L, {
                            lang: i,
                            isDark: c
                        })]
                    }), (0, t.jsxs)("section", {
                        style: {
                            marginBottom: "clamp(56px, 8vw, 80px)"
                        },
                        children: [(0, t.jsx)(H, {
                            isDark: c,
                            children: x.sectionZiduMembership
                        }), (0, t.jsx)("p", {
                            style: {
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "12.5px",
                                color: m,
                                lineHeight: 1.8,
                                margin: "-16px 0 24px",
                                maxWidth: "560px"
                            },
                            children: x.sectionZiduMembershipSub
                        }), (0, t.jsx)(I, {
                            lang: i,
                            isDark: c
                        }), (0, t.jsx)("div", {
                            style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "clamp(17px, 2.5vw, 20px)",
                                color: h,
                                fontWeight: 600,
                                margin: "40px 0 20px"
                            },
                            children: x.sectionZiduPricingTitle
                        }), (0, t.jsx)(T, {
                            lang: i,
                            isDark: c
                        })]
                    }), (0, t.jsxs)("section", {
                        style: {
                            marginBottom: "clamp(56px, 8vw, 80px)"
                        },
                        children: [(0, t.jsx)(H, {
                            isDark: c,
                            children: x.sectionZiduContent
                        }), (0, t.jsx)("p", {
                            style: {
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "12.5px",
                                color: m,
                                lineHeight: 1.8,
                                margin: "-16px 0 24px",
                                maxWidth: "560px"
                            },
                            children: x.sectionZiduContentSub
                        }), (0, t.jsx)("div", {
                            className: "shop-core-grid",
                            style: {
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                gap: "20px"
                            },
                            children: v.filter(e => "core" === e.tier).map((e, r) => (0, t.jsx)(N, {
                                mod: e,
                                lang: i,
                                index: r,
                                isDark: c
                            }, e.id))
                        }), (0, t.jsx)("div", {
                            style: {
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "11px",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: m,
                                margin: "32px 0 4px"
                            },
                            children: x.supportLabel
                        }), (0, t.jsx)("div", {
                            style: {
                                borderTop: `1px solid ${c?"#3d2e22":"#e0d8cd"}`,
                                padding: "4px 0 0"
                            },
                            children: v.filter(e => "support" === e.tier).map((e, r, n) => (0, t.jsx)($, {
                                mod: e,
                                lang: i,
                                index: r,
                                isDark: c,
                                isLast: r === n.length - 1
                            }, e.id))
                        })]
                    }), (0, t.jsxs)("section", {
                        style: {
                            marginTop: "clamp(56px, 8vw, 80px)"
                        },
                        children: [(0, t.jsx)(H, {
                            isDark: c,
                            children: x.sectionPwa
                        }), (0, t.jsx)("p", {
                            style: {
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "12.5px",
                                color: m,
                                lineHeight: 1.8,
                                margin: "-16px 0 24px",
                                maxWidth: "600px"
                            },
                            children: x.sectionPwaSub
                        }), (0, t.jsxs)("div", {
                            className: "shop-pwa-grid",
                            style: {
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                gap: "20px"
                            },
                            children: [(0, t.jsx)(U, {
                                title: x.pwaIosTitle,
                                p1: x.pwaIosP1,
                                p2: x.pwaIosP2,
                                isDark: c
                            }), (0, t.jsx)(U, {
                                title: x.pwaAndroidTitle,
                                p1: x.pwaAndroidP1,
                                p2: x.pwaAndroidP2,
                                isDark: c
                            })]
                        }), (0, t.jsxs)("a", {
                            href: "https://www.zidu.app",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                marginTop: "24px",
                                background: `linear-gradient(135deg, ${c?"#d4916a":"#c9845a"} 0%, ${c?"#c4815a":"#b5704a"} 100%)`,
                                color: "#faf7f2",
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "13.5px",
                                padding: "11px 26px",
                                borderRadius: "3px",
                                textDecoration: "none",
                                letterSpacing: "0.03em",
                                boxShadow: `0 4px 16px ${c?"#d4916a":"#c9845a"}30`,
                                transition: "all 0.25s ease"
                            },
                            onMouseEnter: e => {
                                e.currentTarget.style.transform = "translateY(-2px)"
                            },
                            onMouseLeave: e => {
                                e.currentTarget.style.transform = "translateY(0)"
                            },
                            children: [x.pwaVisitZidu, (0, t.jsx)("span", {
                                "aria-hidden": "true",
                                children: "→"
                            })]
                        })]
                    }), (0, t.jsx)(o.default, {
                        lang: i
                    }), (0, t.jsxs)(d.motion.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .8,
                            delay: .4
                        },
                        style: {
                            borderTop: `1px solid ${y}`,
                            paddingTop: "40px",
                            marginTop: "clamp(56px, 8vw, 80px)",
                            textAlign: "center",
                            paddingBottom: "20px"
                        },
                        children: [(0, t.jsxs)("div", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "12px"
                            },
                            children: [(0, t.jsxs)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                children: [(0, t.jsx)("path", {
                                    d: "M8 1.5L2 4v4c0 3.3 2.5 6.2 6 6.8 3.5-.6 6-3.5 6-6.8V4L8 1.5z",
                                    stroke: c ? "#d4916a" : "#c9845a",
                                    strokeWidth: "1",
                                    strokeLinejoin: "round"
                                }), (0, t.jsx)("path", {
                                    d: "M5.5 8.5L7 10L10.5 6",
                                    stroke: c ? "#d4916a" : "#c9845a",
                                    strokeWidth: "1",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })]
                            }), (0, t.jsx)("span", {
                                style: {
                                    fontFamily: "'Noto Serif SC', serif",
                                    fontSize: "14px",
                                    color: b,
                                    lineHeight: 1.7,
                                    transition: "color 0.3s ease"
                                },
                                children: x.refund
                            })]
                        }), (0, t.jsx)("p", {
                            style: {
                                fontFamily: "'Noto Serif SC', serif",
                                fontSize: "12px",
                                color: S,
                                lineHeight: 1.8,
                                margin: 0,
                                transition: "color 0.3s ease"
                            },
                            children: x.refundSub
                        })]
                    })]
                })
            }), (0, t.jsx)(a.default, {})]
        })
    }])
}]);