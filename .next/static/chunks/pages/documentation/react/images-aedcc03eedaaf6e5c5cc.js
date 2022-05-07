(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1162],
  {
    20640: function (e, t, n) {
      "use strict";
      var r = n(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          a,
          c,
          i,
          l,
          s,
          u = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((c = r()),
            (i = document.createRange()),
            (l = document.getSelection()),
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
                  var a = o[t.format] || o.default;
                  window.clipboardData.setData(a, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(s),
            i.selectNodeContents(s),
            l.addRange(i),
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
          l &&
            ("function" == typeof l.removeRange
              ? l.removeRange(i)
              : l.removeAllRanges()),
            s && document.body.removeChild(s),
            c();
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
        o = (n(67294), n(20921)),
        a = n(84283),
        c = n(74855),
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
        l = [
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
                                  n === l[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              s(l[t]), u(!1);
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
                  (0, r.jsx)(c.CopyToClipboard, {
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
                    style: a.Vg,
                    children: d,
                  }),
                ],
              }),
            ],
          }),
        });
      }
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
    91066: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(85893),
        o = n(26265),
        a = n(38347);
      n(67294);
      function c(e, t) {
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
            ? c(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e) {
        var t = e.src,
          n = e.raised,
          o = e.rounded,
          c = e.className,
          l = (0, a.Z)(e, ["src", "raised", "rounded", "className"]);
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(
            "img",
            i(
              i({}, l),
              {},
              {
                src: t,
                className: ""
                  .concat(o ? "rounded-full" : "rounded-xl", " ")
                  .concat(
                    n ? "shadow-lg" : "",
                    " max-w-full h-auto align-middle border-none "
                  )
                  .concat(c),
              }
            )
          ),
        });
      }
      l.defaultProps = { raised: !1, rounded: !1 };
    },
    63140: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var r = n(85893),
        o = n(67294),
        a = n(29041),
        c = n(82830),
        i = n(68286),
        l = n(5981),
        s = n(81957),
        u = n(53085),
        d = n(91066);
      function p(e) {
        var t = e.copyText,
          n = e.onCopy,
          o = e.src,
          a = e.rounded,
          c = e.raised,
          i = e.alt,
          l =
            'import React from "react";\nimport Image from "@material-tailwind/react/Image";\n\nexport default function Image() {\n    return (\n        <Image\n            src="image-link-here"\n            rounded={'
              .concat(a, "}\n            raised={")
              .concat(c, '}\n            alt="')
              .concat(i, '"\n        />\n    )\n}');
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(u.Z, {
            copyText: t,
            onCopy: n,
            codeToShow: l,
            children: (0, r.jsx)("div", {
              className: "flex justify-center w-full",
              children: (0, r.jsx)("div", {
                className: "w-72",
                children: (0, r.jsx)(d.Z, {
                  src: o,
                  rounded: a,
                  raised: c,
                  alt: i,
                }),
              }),
            }),
          }),
        });
      }
      function f() {
        var e = (0, o.useState)(null),
          t = e[0],
          u = e[1];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(a.Z, { title: "React Images" }),
            (0, r.jsx)(i.Z, {}),
            (0, r.jsxs)(c.Z, {
              children: [
                (0, r.jsx)(l.Z, {
                  title: "React Images",
                  description:
                    "Material Tailwind images for display different images in different forms.",
                }),
                (0, r.jsx)(s.Z, { title: "Image" }),
                (0, r.jsx)(p, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return u(e ? "Buttons" : "");
                  },
                  src: n(9516),
                  raised: !1,
                  rounded: !1,
                  alt: "Image",
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Rounded Image" }),
                (0, r.jsx)(p, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return u(e ? "Buttons" : "");
                  },
                  src: n(80081),
                  raised: !1,
                  rounded: !0,
                  alt: "Rounded Image",
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Raised Image" }),
                (0, r.jsx)(p, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return u(e ? "Buttons" : "");
                  },
                  src: n(38845),
                  raised: !0,
                  rounded: !1,
                  alt: "Raised Image",
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, { title: "Rounded Raised Image" }),
                (0, r.jsx)(p, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return u(e ? "Buttons" : "");
                  },
                  src: n(62784),
                  raised: !0,
                  rounded: !0,
                  alt: "Rounded Raised Image",
                }),
              ],
            }),
          ],
        });
      }
    },
    71186: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/images",
        function () {
          return n(63140);
        },
      ]);
    },
    74300: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var r = a(n(67294)),
        o = a(n(20640));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        return (c =
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
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
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
        return !t || ("object" !== c(t) && "function" !== typeof t) ? f(e) : t;
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
      function y(e, t) {
        return (y =
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
          for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++)
            c[i] = arguments[i];
          return (
            m(
              f((n = d(this, (e = p(t)).call.apply(e, [this].concat(c))))),
              "onClick",
              function (e) {
                var t = n.props,
                  a = t.text,
                  c = t.onCopy,
                  i = t.children,
                  l = t.options,
                  s = r.default.Children.only(i),
                  u = (0, o.default)(a, l);
                c && c(a, u),
                  s &&
                    s.props &&
                    "function" === typeof s.props.onClick &&
                    s.props.onClick(e);
              }
            ),
            n
          );
        }
        var n, a, c;
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && y(e, t);
          })(t, e),
          (n = t),
          (a = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = l(e, ["text", "onCopy", "options", "children"]),
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
          ]) && u(n.prototype, a),
          c && u(n, c),
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
    9516: function (e) {
      e.exports =
        "/_next/static/images/team-1-800x800-fa5a7ac2c81a43925586ea85f2fea332.jpg";
    },
    80081: function (e) {
      e.exports =
        "/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg";
    },
    38845: function (e) {
      e.exports =
        "/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg";
    },
    62784: function (e) {
      e.exports =
        "/_next/static/images/team-4-470x470-4ef82ef45a9598d24c4c951ead4d626a.png";
    },
  },
  function (e) {
    e.O(0, [9774, 1e3, 7053, 8485, 5592, 2888, 179], function () {
      return (t = 71186), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
