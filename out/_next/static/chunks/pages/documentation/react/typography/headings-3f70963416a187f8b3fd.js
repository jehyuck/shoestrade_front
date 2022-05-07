(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2462],
  {
    20640: function (e, t, n) {
      "use strict";
      var r = n(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          l,
          a,
          i,
          c,
          s,
          u = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((a = r()),
            (i = document.createRange()),
            (c = document.getSelection()),
            ((s = document.createElement("span")).textContent = e),
            (s.style.all = "unset"),
            (s.style.position = "fixed"),
            (s.style.top = 0),
            (s.style.clip = "rect(0, 0, 0, 0)"),
            (s.style.whiteSpace = "pre"),
            (s.style.webkitUserSelect = "text"),
            (s.style.MozUserSelect = "text"),
            (s.style.msUserSelect = "text"),
            (s.style.userSelect = "text"),
            s.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), t.format))
                if (
                  (r.preventDefault(), "undefined" === typeof r.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var l = o[t.format] || o.default;
                  window.clipboardData.setData(l, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(s),
            i.selectNodeContents(s),
            c.addRange(i),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          u = !0;
        } catch (d) {
          n && console.error("unable to copy using execCommand: ", d),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (u = !0);
          } catch (d) {
            n && console.error("unable to copy using clipboardData: ", d),
              n && console.error("falling back to prompt"),
              (l = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(l, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(i)
              : c.removeAllRanges()),
            s && document.body.removeChild(s),
            a();
        }
        return u;
      };
    },
    53085: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(85893),
        o = (n(67294), n(46577)),
        l = n(84283),
        a = n(74855),
        i = [
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
        c = [
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
      function s(e) {
        var t = e.children,
          n = e.activeColor,
          s = (e.activeFramework, e.onColorClick),
          u = (e.onFrameworkClick, e.onCopy),
          d = e.codeToShow,
          p = e.copyText;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              n
                ? (0, r.jsx)("div", {
                    id: "colors",
                    className:
                      "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                    style: { width: "100%", bottom: "-14px" },
                    children: (0, r.jsx)("div", {
                      className:
                        "flex flew-wrap justify-center items-center bg-white px-2",
                      children: i.map(function (e, t) {
                        return (0, r.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  n === c[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              s(c[t]), u(!1);
                            },
                          },
                          t
                        );
                      }),
                    }),
                  })
                : null,
              t,
              (0, r.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  (0, r.jsx)(a.CopyToClipboard, {
                    text: d,
                    onCopy: function () {
                      return u(!0);
                    },
                    children: (0, r.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: p,
                    }),
                  }),
                  (0, r.jsx)(o.Z, {
                    language: "jsx",
                    style: l.Vg,
                    children: d,
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
      function r(e, t, n) {
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
          return r;
        },
      });
    },
    81957: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(85893);
      n(67294);
      function o(e) {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("h2", {
              className: "font-serif font-medium text-xl mb-2 text-gray-900",
              children: e.title,
            }),
            (0, r.jsx)("p", {
              className: "text-gray-700 mb-4 font-light",
              children: e.description,
            }),
          ],
        });
      }
    },
    75075: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(26265),
        o = n(85893),
        l = n(38347);
      n(67294);
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = {
        white: "text-white",
        blueGray: "text-blue-gray-500",
        gray: "text-gray-900",
        brown: "text-brown-500",
        deepOrange: "text-deep-orange-500",
        orange: "text-orange-500",
        amber: "text-amber-500",
        yellow: "text-yellow-600",
        lime: "text-lime-500",
        lightGreen: "text-light-green-500",
        green: "text-green-500",
        teal: "text-teal-500",
        cyan: "text-cyan-500",
        lightBlue: "text-light-blue-500",
        blue: "text-blue-500",
        indigo: "text-indigo-500",
        deepPurple: "text-deep-purple-500",
        purple: "text-purple-500",
        pink: "text-pink-500",
        red: "text-red-500",
      };
      function s(e) {
        var t = e.children,
          n = e.color,
          r = (0, l.Z)(e, ["children", "color"]);
        return (0, o.jsx)(
          "h1",
          i(
            i({}, r),
            {},
            {
              className: "".concat(
                c[n],
                " text-6xl font-serif font-bold leading-normal mt-0 mb-2"
              ),
              children: t,
            }
          )
        );
      }
      s.defaultProps = { color: "gray" };
    },
    84141: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(26265),
        o = n(85893),
        l = n(38347);
      n(67294);
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = {
        white: "text-white",
        blueGray: "text-blue-gray-500",
        gray: "text-gray-900",
        brown: "text-brown-500",
        deepOrange: "text-deep-orange-500",
        orange: "text-orange-500",
        amber: "text-amber-500",
        yellow: "text-yellow-600",
        lime: "text-lime-500",
        lightGreen: "text-light-green-500",
        green: "text-green-500",
        teal: "text-teal-500",
        cyan: "text-cyan-500",
        lightBlue: "text-light-blue-500",
        blue: "text-blue-500",
        indigo: "text-indigo-500",
        deepPurple: "text-deep-purple-500",
        purple: "text-purple-500",
        pink: "text-pink-500",
        red: "text-red-500",
      };
      function s(e) {
        var t = e.children,
          n = e.color,
          r = (0, l.Z)(e, ["children", "color"]);
        return (0, o.jsx)(
          "h1",
          i(
            i({}, r),
            {},
            {
              className: "".concat(
                c[n],
                " text-5xl font-serif font-bold leading-normal mt-0 mb-2"
              ),
              children: t,
            }
          )
        );
      }
      s.defaultProps = { color: "gray" };
    },
    47853: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(26265),
        o = n(85893),
        l = n(38347);
      n(67294);
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = {
        white: "text-white",
        blueGray: "text-blue-gray-500",
        gray: "text-gray-900",
        brown: "text-brown-500",
        deepOrange: "text-deep-orange-500",
        orange: "text-orange-500",
        amber: "text-amber-500",
        yellow: "text-yellow-600",
        lime: "text-lime-500",
        lightGreen: "text-light-green-500",
        green: "text-green-500",
        teal: "text-teal-500",
        cyan: "text-cyan-500",
        lightBlue: "text-light-blue-500",
        blue: "text-blue-500",
        indigo: "text-indigo-500",
        deepPurple: "text-deep-purple-500",
        purple: "text-purple-500",
        pink: "text-pink-500",
        red: "text-red-500",
      };
      function s(e) {
        var t = e.children,
          n = e.color,
          r = (0, l.Z)(e, ["children", "color"]);
        return (0, o.jsx)(
          "h1",
          i(
            i({}, r),
            {},
            {
              className: "".concat(
                c[n],
                " text-4xl font-serif font-bold leading-normal mt-0 mb-2"
              ),
              children: t,
            }
          )
        );
      }
      s.defaultProps = { color: "gray" };
    },
    7774: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(26265),
        o = n(85893),
        l = n(38347);
      n(67294);
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = {
        white: "text-white",
        blueGray: "text-blue-gray-500",
        gray: "text-gray-900",
        brown: "text-brown-500",
        deepOrange: "text-deep-orange-500",
        orange: "text-orange-500",
        amber: "text-amber-500",
        yellow: "text-yellow-600",
        lime: "text-lime-500",
        lightGreen: "text-light-green-500",
        green: "text-green-500",
        teal: "text-teal-500",
        cyan: "text-cyan-500",
        lightBlue: "text-light-blue-500",
        blue: "text-blue-500",
        indigo: "text-indigo-500",
        deepPurple: "text-deep-purple-500",
        purple: "text-purple-500",
        pink: "text-pink-500",
        red: "text-red-500",
      };
      function s(e) {
        var t = e.children,
          n = e.color,
          r = (0, l.Z)(e, ["children", "color"]);
        return (0, o.jsx)(
          "h1",
          i(
            i({}, r),
            {},
            {
              className: "".concat(
                c[n],
                " text-3xl font-serif font-bold leading-normal mt-0 mb-2"
              ),
              children: t,
            }
          )
        );
      }
      s.defaultProps = { color: "gray" };
    },
    8880: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(26265),
        o = n(85893),
        l = n(38347);
      n(67294);
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = {
        white: "text-white",
        blueGray: "text-blue-gray-500",
        gray: "text-gray-900",
        brown: "text-brown-500",
        deepOrange: "text-deep-orange-500",
        orange: "text-orange-500",
        amber: "text-amber-500",
        yellow: "text-yellow-600",
        lime: "text-lime-500",
        lightGreen: "text-light-green-500",
        green: "text-green-500",
        teal: "text-teal-500",
        cyan: "text-cyan-500",
        lightBlue: "text-light-blue-500",
        blue: "text-blue-500",
        indigo: "text-indigo-500",
        deepPurple: "text-deep-purple-500",
        purple: "text-purple-500",
        pink: "text-pink-500",
        red: "text-red-500",
      };
      function s(e) {
        var t = e.children,
          n = e.color,
          r = (0, l.Z)(e, ["children", "color"]);
        return (0, o.jsx)(
          "h1",
          i(
            i({}, r),
            {},
            {
              className: "".concat(
                c[n],
                " text-2xl font-serif font-bold leading-normal mt-0 mb-2"
              ),
              children: t,
            }
          )
        );
      }
      s.defaultProps = { color: "gray" };
    },
    74023: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(26265),
        o = n(85893),
        l = n(38347);
      n(67294);
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = {
        white: "text-white",
        blueGray: "text-blue-gray-500",
        gray: "text-gray-900",
        brown: "text-brown-500",
        deepOrange: "text-deep-orange-500",
        orange: "text-orange-500",
        amber: "text-amber-500",
        yellow: "text-yellow-600",
        lime: "text-lime-500",
        lightGreen: "text-light-green-500",
        green: "text-green-500",
        teal: "text-teal-500",
        cyan: "text-cyan-500",
        lightBlue: "text-light-blue-500",
        blue: "text-blue-500",
        indigo: "text-indigo-500",
        deepPurple: "text-deep-purple-500",
        purple: "text-purple-500",
        pink: "text-pink-500",
        red: "text-red-500",
      };
      function s(e) {
        var t = e.children,
          n = e.color,
          r = (0, l.Z)(e, ["children", "color"]);
        return (0, o.jsx)(
          "h1",
          i(
            i({}, r),
            {},
            {
              className: "".concat(
                c[n],
                " text-xl font-serif font-bold leading-normal mt-0 mb-2"
              ),
              children: t,
            }
          )
        );
      }
      s.defaultProps = { color: "gray" };
    },
    18689: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var r = n(85893),
        o = n(67294),
        l = n(29041),
        a = n(82830),
        i = n(68286),
        c = n(5981),
        s = n(81957),
        u = n(53085),
        d = n(49777),
        p = n(75075);
      function f(e) {
        var t = e.copyText,
          n = e.onCopy,
          l = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          a = l[0],
          i = l[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          f = s[0],
          x = s[1],
          m = (0, o.useState)(),
          b = m[0],
          y = m[1],
          g = (0, d.Z)(c, x, y),
          h =
            'import React from "react";\nimport H1 from "@material-tailwind/react/Heading1";\n\nexport default function H1() {\n    return (\n        <H1 color="'.concat(
              a,
              '">Material Tailwind</H1>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            f
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return x(!1);
                      },
                      children: (0, r.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, r.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, r.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return x(!1);
                                  },
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, r.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  b,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, r.jsx)(u.Z, {
              copyText: t,
              onCopy: n,
              activeColor: a,
              activeFramework: c,
              codeToShow: h,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: g,
              children: (0, r.jsx)(p.Z, {
                color: a,
                children: "Material Tailwind",
              }),
            }),
          ],
        });
      }
      var x = n(84141);
      function m(e) {
        var t = e.copyText,
          n = e.onCopy,
          l = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          a = l[0],
          i = l[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          p = s[0],
          f = s[1],
          m = (0, o.useState)(),
          b = m[0],
          y = m[1],
          g = (0, d.Z)(c, f, y),
          h =
            'import React from "react";\nimport H2 from "@material-tailwind/react/Heading2";\n\nexport default function H2() {\n    return (\n        <H2 color="'.concat(
              a,
              '">Material Tailwind</H2>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            p
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return f(!1);
                      },
                      children: (0, r.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, r.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, r.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return f(!1);
                                  },
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, r.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  b,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, r.jsx)(u.Z, {
              copyText: t,
              onCopy: n,
              activeColor: a,
              activeFramework: c,
              codeToShow: h,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: g,
              children: (0, r.jsx)(x.Z, {
                color: a,
                children: "Material Tailwind",
              }),
            }),
          ],
        });
      }
      var b = n(47853);
      function y(e) {
        var t = e.copyText,
          n = e.onCopy,
          l = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          a = l[0],
          i = l[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          p = s[0],
          f = s[1],
          x = (0, o.useState)(),
          m = x[0],
          y = x[1],
          g = (0, d.Z)(c, f, y),
          h =
            'import React from "react";\nimport H3 from "@material-tailwind/react/Heading3";\n\nexport default function H3() {\n    return (\n        <H3 color="'.concat(
              a,
              '">Material Tailwind</H3>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            p
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return f(!1);
                      },
                      children: (0, r.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, r.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, r.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return f(!1);
                                  },
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, r.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  m,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, r.jsx)(u.Z, {
              copyText: t,
              onCopy: n,
              activeColor: a,
              activeFramework: c,
              codeToShow: h,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: g,
              children: (0, r.jsx)(b.Z, {
                color: a,
                children: "Material Tailwind",
              }),
            }),
          ],
        });
      }
      var g = n(7774);
      function h(e) {
        var t = e.copyText,
          n = e.onCopy,
          l = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          a = l[0],
          i = l[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          p = s[0],
          f = s[1],
          x = (0, o.useState)(),
          m = x[0],
          b = x[1],
          y = (0, d.Z)(c, f, b),
          h =
            'import React from "react";\nimport H4 from "@material-tailwind/react/Heading4";\n\nexport default function H4() {\n    return (\n        <H4 color="'.concat(
              a,
              '">Material Tailwind</H4>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            p
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return f(!1);
                      },
                      children: (0, r.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, r.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, r.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return f(!1);
                                  },
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, r.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  m,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, r.jsx)(u.Z, {
              copyText: t,
              onCopy: n,
              activeColor: a,
              activeFramework: c,
              codeToShow: h,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: y,
              children: (0, r.jsx)(g.Z, {
                color: a,
                children: "Material Tailwind",
              }),
            }),
          ],
        });
      }
      var w = n(8880);
      function j(e) {
        var t = e.copyText,
          n = e.onCopy,
          l = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          a = l[0],
          i = l[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          p = s[0],
          f = s[1],
          x = (0, o.useState)(),
          m = x[0],
          b = x[1],
          y = (0, d.Z)(c, f, b),
          g =
            'import React from "react";\nimport H5 from "@material-tailwind/react/Heading5";\n\nexport default function H5() {\n    return (\n        <H5 color="'.concat(
              a,
              '">Material Tailwind</H5>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            p
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return f(!1);
                      },
                      children: (0, r.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, r.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, r.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return f(!1);
                                  },
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, r.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  m,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, r.jsx)(u.Z, {
              copyText: t,
              onCopy: n,
              activeColor: a,
              activeFramework: c,
              codeToShow: g,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: y,
              children: (0, r.jsx)(w.Z, {
                color: a,
                children: "Material Tailwind",
              }),
            }),
          ],
        });
      }
      var v = n(74023);
      function O(e) {
        var t = e.copyText,
          n = e.onCopy,
          l = (e.value, e.percentage, (0, o.useState)("lightBlue")),
          a = l[0],
          i = l[1],
          c = (0, o.useState)("react")[0],
          s = (0, o.useState)(!1),
          p = s[0],
          f = s[1],
          x = (0, o.useState)(),
          m = x[0],
          b = x[1],
          y = (0, d.Z)(c, f, b),
          g =
            'import React from "react";\nimport H6 from "@material-tailwind/react/Heading6";\n\nexport default function H6() {\n    return (\n        <H6 color="'.concat(
              a,
              '">Material Tailwind</H6>\n    );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            p
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return f(!1);
                      },
                      children: (0, r.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, r.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, r.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return f(!1);
                                  },
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, r.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  m,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, r.jsx)(u.Z, {
              copyText: t,
              onCopy: n,
              activeColor: a,
              activeFramework: c,
              codeToShow: g,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: y,
              children: (0, r.jsx)(v.Z, {
                color: a,
                children: "Material Tailwind",
              }),
            }),
          ],
        });
      }
      function C() {
        var e = (0, o.useState)(null),
          t = e[0],
          n = e[1];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l.Z, { title: "React Headings" }),
            (0, r.jsx)(i.Z, {}),
            (0, r.jsxs)(a.Z, {
              children: [
                (0, r.jsx)(c.Z, {
                  title: "React Headings",
                  description:
                    "Different levels of headings for creating titles.",
                }),
                (0, r.jsx)(s.Z, { title: "Heading 1" }),
                (0, r.jsx)(f, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Heading 2" }),
                (0, r.jsx)(m, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Heading 3" }),
                (0, r.jsx)(y, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Heading 4" }),
                (0, r.jsx)(h, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Heading 5" }),
                (0, r.jsx)(j, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Heading 6" }),
                (0, r.jsx)(O, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
    59565: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/typography/headings",
        function () {
          return n(18689);
        },
      ]);
    },
    74300: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var r = l(n(67294)),
        o = l(n(20640));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        return (a =
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
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e, t) {
        return !t || ("object" !== a(t) && "function" !== typeof t) ? f(e) : t;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function x(e, t) {
        return (x =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function m(e, t, n) {
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
      var b = (function (e) {
        function t() {
          var e, n;
          s(this, t);
          for (var l = arguments.length, a = new Array(l), i = 0; i < l; i++)
            a[i] = arguments[i];
          return (
            m(
              f((n = d(this, (e = p(t)).call.apply(e, [this].concat(a))))),
              "onClick",
              function (e) {
                var t = n.props,
                  l = t.text,
                  a = t.onCopy,
                  i = t.children,
                  c = t.options,
                  s = r.default.Children.only(i),
                  u = (0, o.default)(l, c);
                a && a(l, u),
                  s &&
                    s.props &&
                    "function" === typeof s.props.onClick &&
                    s.props.onClick(e);
              }
            ),
            n
          );
        }
        var n, l, a;
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && x(e, t);
          })(t, e),
          (n = t),
          (l = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = c(e, ["text", "onCopy", "options", "children"]),
                  o = r.default.Children.only(t);
                return r.default.cloneElement(
                  o,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? i(n, !0).forEach(function (t) {
                            m(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : i(n).forEach(function (t) {
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
          ]) && u(n.prototype, l),
          a && u(n, a),
          t
        );
      })(r.default.PureComponent);
      (t.CopyToClipboard = b),
        m(b, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, t, n) {
      "use strict";
      var r = n(74300).CopyToClipboard;
      (r.CopyToClipboard = r), (e.exports = r);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
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
    e.O(0, [9774, 1e3, 8969, 8485, 5592, 2888, 179], function () {
      return (t = 59565), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
