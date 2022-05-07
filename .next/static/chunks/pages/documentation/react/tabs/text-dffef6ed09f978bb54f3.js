(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3047],
  {
    20640: function (e, t, n) {
      "use strict";
      var o = n(11742),
        r = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          a,
          i,
          l,
          s,
          c,
          u = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((i = o()),
            (l = document.createRange()),
            (s = document.getSelection()),
            ((c = document.createElement("span")).textContent = e),
            (c.style.all = "unset"),
            (c.style.position = "fixed"),
            (c.style.top = 0),
            (c.style.clip = "rect(0, 0, 0, 0)"),
            (c.style.whiteSpace = "pre"),
            (c.style.webkitUserSelect = "text"),
            (c.style.MozUserSelect = "text"),
            (c.style.msUserSelect = "text"),
            (c.style.userSelect = "text"),
            c.addEventListener("copy", function (o) {
              if ((o.stopPropagation(), t.format))
                if (
                  (o.preventDefault(), "undefined" === typeof o.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var a = r[t.format] || r.default;
                  window.clipboardData.setData(a, e);
                } else
                  o.clipboardData.clearData(),
                    o.clipboardData.setData(t.format, e);
              t.onCopy && (o.preventDefault(), t.onCopy(o.clipboardData));
            }),
            document.body.appendChild(c),
            l.selectNodeContents(c),
            s.addRange(l),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          u = !0;
        } catch (p) {
          n && console.error("unable to copy using execCommand: ", p),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (u = !0);
          } catch (p) {
            n && console.error("unable to copy using clipboardData: ", p),
              n && console.error("falling back to prompt"),
              (a = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(a, e);
          }
        } finally {
          s &&
            ("function" == typeof s.removeRange
              ? s.removeRange(l)
              : s.removeAllRanges()),
            c && document.body.removeChild(c),
            i();
        }
        return u;
      };
    },
    53085: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var o = n(85893),
        r = (n(67294), n(20921)),
        a = n(84283),
        i = n(74855),
        l = [
          "blue-gray",
          "gray",
          "brown",
          "deep-orange",
          "orange",
          "amber",
          "yellow",
          "lime",
          "light-green",
          "green",
          "teal",
          "cyan",
          "light-blue",
          "blue",
          "indigo",
          "deep-purple",
          "purple",
          "pink",
          "red",
        ],
        s = [
          "blueGray",
          "gray",
          "brown",
          "deepOrange",
          "orange",
          "amber",
          "yellow",
          "lime",
          "lightGreen",
          "green",
          "teal",
          "cyan",
          "lightBlue",
          "blue",
          "indigo",
          "deepPurple",
          "purple",
          "pink",
          "red",
        ];
      function c(e) {
        var t = e.children,
          n = e.activeColor,
          c = (e.activeFramework, e.onColorClick),
          u = (e.onFrameworkClick, e.onCopy),
          p = e.codeToShow,
          d = e.copyText;
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              n
                ? (0, o.jsx)("div", {
                    id: "colors",
                    className:
                      "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                    style: { width: "100%", bottom: "-14px" },
                    children: (0, o.jsx)("div", {
                      className:
                        "flex flew-wrap justify-center items-center bg-white px-2",
                      children: l.map(function (e, t) {
                        return (0, o.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  n === s[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              c(s[t]), u(!1);
                            },
                          },
                          t
                        );
                      }),
                    }),
                  })
                : null,
              t,
              (0, o.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  (0, o.jsx)(i.CopyToClipboard, {
                    text: p,
                    onCopy: function () {
                      return u(!0);
                    },
                    children: (0, o.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: d,
                    }),
                  }),
                  (0, o.jsx)(r.Z, {
                    language: "jsx",
                    style: a.Vg,
                    children: p,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    49777: function (e, t, n) {
      "use strict";
      function o(e, t, n) {
        switch (e) {
          case "react":
          case "angular":
          case "html":
          case "vue":
          case "javascript":
            break;
          default:
            t(!0), n(e);
        }
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    88659: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var o = n(85893);
      n(67294);
      function r(e) {
        var t = e.children,
          n = e.className;
        return (0, o.jsx)("div", {
          className:
            "relative flex flex-col items-center justify-center bg-white rounded-lg shadow-md w-full p-4 my-8 ".concat(
              n
            ),
          children: t,
        });
      }
    },
    73756: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var o = n(85893);
      n(67294);
      function r(e) {
        var t = e.children;
        return (0, o.jsx)("div", {
          className:
            "relative flex flex-col min-w-0 break-words w-full px-4 pb-4",
          children: (0, o.jsx)("div", {
            className: "flex-auto text-center font-light leading-normal",
            children: t,
          }),
        });
      }
    },
    46501: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var o = n(26265),
        r = n(85893),
        a = n(38347),
        i = (n(67294), n(39931)),
        l = n.n(i);
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e) {
        var t = e.children,
          n = e.active,
          o = e.ripple,
          i = e.className,
          s = (0, a.Z)(e, ["children", "active", "ripple", "className"]),
          u = new (l())();
        return (0, r.jsx)("li", {
          className: "text-center",
          children: (0, r.jsx)(
            "a",
            c(
              c({}, s),
              {},
              {
                className:
                  "flex items-center justify-center gap-1 rounded-lg text-sm font-medium py-4 px-6 leading-normal text-white transition-all duration-300 "
                    .concat(n && "bg-white bg-opacity-20", " ")
                    .concat(i),
                role: "tablist",
                onMouseUp: function (e) {
                  "dark" === o && u.create(e, "dark"),
                    "light" === o && u.create(e, "light");
                },
                children: t,
              }
            )
          ),
        });
      }
      u.defaultProps = { active: !1 };
    },
    9150: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = n(85893),
        r =
          (n(67294),
          {
            blueGray: "bg-blue-gray-500",
            gray: "bg-gray-500",
            brown: "bg-brown-500",
            deepOrange: "bg-deep-orange-500",
            orange: "bg-orange-500",
            amber: "bg-amber-500",
            yellow: "bg-yellow-600",
            lime: "bg-lime-500",
            lightGreen: "bg-light-green-500",
            green: "bg-green-500",
            teal: "bg-teal-500",
            cyan: "bg-cyan-500",
            lightBlue: "bg-light-blue-500",
            blue: "bg-blue-500",
            indigo: "bg-indigo-500",
            deepPurple: "bg-deep-purple-500",
            purple: "bg-purple-500",
            pink: "bg-pink-500",
            red: "bg-red-500",
          }),
        a = {
          blueGray: "shadow-lg-blue-gray",
          gray: "shadow-lg-gray",
          brown: "shadow-lg-brown",
          deepOrange: "shadow-lg-deep-orange",
          orange: "shadow-lg-orange",
          amber: "shadow-lg-amber",
          yellow: "shadow-lg-yellow",
          lime: "shadow-lg-lime",
          lightGreen: "shadow-lg-light-green",
          green: "shadow-lg-green",
          teal: "shadow-lg-teal",
          cyan: "shadow-lg-cyan",
          lightBlue: "shadow-lg-light-blue",
          blue: "shadow-lg-blue",
          indigo: "shadow-lg-indigo",
          deepPurple: "shadow-lg-deep-purple",
          purple: "shadow-lg-purple",
          pink: "shadow-lg-pink",
          red: "shadow-lg-red",
        };
      function i(e) {
        var t = e.children,
          n = e.color,
          i = e.className;
        return (0, o.jsx)("ul", {
          className: ""
            .concat(
              r[n],
              " w-full rounded-lg p-4 mx-5 flex justify-start -mt-12 mb-6 list-none "
            )
            .concat(a[n], " z-10 ")
            .concat(i),
          role: "tablist",
          children: t,
        });
      }
      i.defaultProps = { color: "lightBlue" };
    },
    28728: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var o = n(85893);
      n(67294);
      function r(e) {
        var t = e.children,
          n = e.active,
          r = e.className;
        return (0, o.jsx)("div", {
          className: "".concat(n ? "block" : "hidden", " ").concat(r),
          children: t,
        });
      }
      r.defaultProps = { active: !1 };
    },
    46023: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var o = n(85893),
        r = n(67294),
        a = n(29041),
        i = n(82830),
        l = n(68286),
        s = n(5981),
        c = n(53085),
        u = n(49777),
        p = n(88659),
        d = n(9150),
        h = n(46501),
        b = n(73756),
        f = n(28728);
      function g(e) {
        var t = e.copyText,
          n = e.onCopy,
          a = (0, r.useState)("lightBlue"),
          i = a[0],
          l = a[1],
          s = (0, r.useState)("react")[0],
          g = (0, r.useState)(!1),
          m = g[0],
          y = g[1],
          w = (0, r.useState)(),
          v = w[0],
          x = w[1],
          j = (0, r.useState)(1),
          C = j[0],
          T = j[1],
          k = (0, u.Z)(s, y, x),
          O =
            'import React from "react";\nimport Tab from "@material-tailwind/react/Tab";\nimport TabList from "@material-tailwind/react/TabList";\nimport TabItem from "@material-tailwind/react/TabItem";\nimport TabContent from "@material-tailwind/react/TabContent";\nimport TabPane from "@material-tailwind/react/TabPane";\n\nexport default function Tab() {\n    const [openTab, setOpenTab] = useState(1);\n\n    return (\n        <Tab>\n            <TabList color="'.concat(
              i,
              '">\n                <TabItem\n                    onClick={(e) => {\n                        e.preventDefault();\n                        setOpenTab(1);\n                    }}\n                    ripple="light"\n                    active={openTab === 1 ? true : false}\n                    href="tabItem"\n                >\n                    Discover\n                </TabItem>\n                <TabItem\n                    onClick={(e) => {\n                        e.preventDefault();\n                        setOpenTab(2);\n                    }}\n                    ripple="light"\n                    active={openTab === 2 ? true : false}\n                    href="tabItem"\n                >\n                    Profile\n                </TabItem>\n                <TabItem\n                    onClick={(e) => {\n                        e.preventDefault();\n                        setOpenTab(3);\n                    }}\n                    ripple="light"\n                    active={openTab === 3 ? true : false}\n                    href="tabItem"\n                >\n                    Settings\n                </TabItem>\n            </TabList>\n\n            <TabContent>\n                <TabPane active={openTab === 1 ? true : false}>\n                    <p>\n                        I think that\u2019s a responsibility that I have, to push\n                        possibilities, to show people, this is the level that things\n                        could be at. So when you get something that has the name Kanye\n                        West on it, it\u2019s supposed to be pushing the furthest\n                        possibilities. I will be the leader of a company that ends up\n                        being worth billions of dollars, because I got the answers. I\n                        understand culture. I am the nucleus.\n                    </p>\n                </TabPane>\n                <TabPane active={openTab === 2 ? true : false}>\n                    <p>\n                        I will be the leader of a company that ends up being worth\n                        billions of dollars, because I got the answers. I understand\n                        culture. I am the nucleus. I think that\u2019s a responsibility that\n                        I have, to push possibilities, to show people, this is the level\n                        that things could be at. I think that\u2019s a responsibility that I\n                        have, to push possibilities, to show people, this is the level\n                        that things could be at.\n                    </p>\n                </TabPane>\n                <TabPane active={openTab === 3 ? true : false}>\n                    <p>\n                        I think that\u2019s a responsibility that I have, to push\n                        possibilities, to show people, this is the level that things\n                        could be at. So when you get something that has the name Kanye\n                        West on it, it\u2019s supposed to be pushing the furthest\n                        possibilities. I will be the leader of a company that ends up\n                        being worth billions of dollars, because I got the answers. I\n                        understand culture. I am the nucleus.\n                    </p>\n                </TabPane>\n            </TabContent>\n        </Tab>\n    );\n}'
            );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            m
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return y(!1);
                      },
                      children: (0, o.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, o.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, o.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, o.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, o.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return y(!1);
                                  },
                                  children: (0, o.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, o.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, o.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  v,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, o.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, o.jsx)(c.Z, {
              copyText: t,
              onCopy: n,
              activeColor: i,
              activeFramework: s,
              codeToShow: O,
              onColorClick: function (e) {
                return l(e);
              },
              onFrameworkClick: k,
              children: (0, o.jsxs)(p.Z, {
                children: [
                  (0, o.jsxs)(d.Z, {
                    color: i,
                    children: [
                      (0, o.jsx)(h.Z, {
                        onClick: function (e) {
                          e.preventDefault(), T(1);
                        },
                        ripple: "light",
                        active: 1 === C,
                        href: "tabItem",
                        children: "Discover",
                      }),
                      (0, o.jsx)(h.Z, {
                        onClick: function (e) {
                          e.preventDefault(), T(2);
                        },
                        ripple: "light",
                        active: 2 === C,
                        href: "tabItem",
                        children: "Profile",
                      }),
                      (0, o.jsx)(h.Z, {
                        onClick: function (e) {
                          e.preventDefault(), T(3);
                        },
                        ripple: "light",
                        active: 3 === C,
                        href: "tabItem",
                        children: "Settings",
                      }),
                    ],
                  }),
                  (0, o.jsxs)(b.Z, {
                    children: [
                      (0, o.jsx)(f.Z, {
                        active: 1 === C,
                        children: (0, o.jsx)("p", {
                          children:
                            "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.",
                        }),
                      }),
                      (0, o.jsx)(f.Z, {
                        active: 2 === C,
                        children: (0, o.jsx)("p", {
                          children:
                            "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
                        }),
                      }),
                      (0, o.jsx)(f.Z, {
                        active: 3 === C,
                        children: (0, o.jsx)("p", {
                          children:
                            "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function m() {
        var e = (0, r.useState)(null),
          t = e[0],
          n = e[1];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(a.Z, { title: "React Tabs" }),
            (0, o.jsx)(l.Z, {}),
            (0, o.jsxs)(i.Z, {
              children: [
                (0, o.jsx)(s.Z, {
                  title: "React Tabs",
                  description:
                    "Material Tailwind tab components with menu items and content.",
                }),
                (0, o.jsx)(g, {
                  copyText: "Modal" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Modal" : "");
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
    33496: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/tabs/text",
        function () {
          return n(46023);
        },
      ]);
    },
    74300: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var o = a(n(67294)),
        r = a(n(20640));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        return (i =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (n = a[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function p(e, t) {
        return !t || ("object" !== i(t) && "function" !== typeof t) ? h(e) : t;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e, t) {
        return (b =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var g = (function (e) {
        function t() {
          var e, n;
          c(this, t);
          for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            f(
              h((n = p(this, (e = d(t)).call.apply(e, [this].concat(i))))),
              "onClick",
              function (e) {
                var t = n.props,
                  a = t.text,
                  i = t.onCopy,
                  l = t.children,
                  s = t.options,
                  c = o.default.Children.only(l),
                  u = (0, r.default)(a, s);
                i && i(a, u),
                  c &&
                    c.props &&
                    "function" === typeof c.props.onClick &&
                    c.props.onClick(e);
              }
            ),
            n
          );
        }
        var n, a, i;
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && b(e, t);
          })(t, e),
          (n = t),
          (a = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = s(e, ["text", "onCopy", "options", "children"]),
                  r = o.default.Children.only(t);
                return o.default.cloneElement(
                  r,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? l(n, !0).forEach(function (t) {
                            f(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : l(n).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  })({}, n, { onClick: this.onClick })
                );
              },
            },
          ]) && u(n.prototype, a),
          i && u(n, i),
          t
        );
      })(o.default.PureComponent);
      (t.CopyToClipboard = g),
        f(g, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, t, n) {
      "use strict";
      var o = n(74300).CopyToClipboard;
      (o.CopyToClipboard = o), (e.exports = o);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], o = 0;
          o < e.rangeCount;
          o++
        )
          n.push(e.getRangeAt(o));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
  },
  function (e) {
    e.O(0, [9774, 1e3, 7053, 8485, 5592, 2888, 179], function () {
      return (t = 33496), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
