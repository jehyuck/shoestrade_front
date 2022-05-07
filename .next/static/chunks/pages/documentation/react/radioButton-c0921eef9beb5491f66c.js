(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1409],
  {
    20640: function (e, t, r) {
      "use strict";
      var o = r(11742),
        n = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var r,
          i,
          a,
          l,
          c,
          u,
          s = !1;
        t || (t = {}), (r = t.debug || !1);
        try {
          if (
            ((a = o()),
            (l = document.createRange()),
            (c = document.getSelection()),
            ((u = document.createElement("span")).textContent = e),
            (u.style.all = "unset"),
            (u.style.position = "fixed"),
            (u.style.top = 0),
            (u.style.clip = "rect(0, 0, 0, 0)"),
            (u.style.whiteSpace = "pre"),
            (u.style.webkitUserSelect = "text"),
            (u.style.MozUserSelect = "text"),
            (u.style.msUserSelect = "text"),
            (u.style.userSelect = "text"),
            u.addEventListener("copy", function (o) {
              if ((o.stopPropagation(), t.format))
                if (
                  (o.preventDefault(), "undefined" === typeof o.clipboardData)
                ) {
                  r && console.warn("unable to use e.clipboardData"),
                    r && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = n[t.format] || n.default;
                  window.clipboardData.setData(i, e);
                } else
                  o.clipboardData.clearData(),
                    o.clipboardData.setData(t.format, e);
              t.onCopy && (o.preventDefault(), t.onCopy(o.clipboardData));
            }),
            document.body.appendChild(u),
            l.selectNodeContents(u),
            c.addRange(l),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          s = !0;
        } catch (p) {
          r && console.error("unable to copy using execCommand: ", p),
            r && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (s = !0);
          } catch (p) {
            r && console.error("unable to copy using clipboardData: ", p),
              r && console.error("falling back to prompt"),
              (i = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(i, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(l)
              : c.removeAllRanges()),
            u && document.body.removeChild(u),
            a();
        }
        return s;
      };
    },
    53085: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var o = r(85893),
        n = (r(67294), r(20921)),
        i = r(84283),
        a = r(74855),
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
      function u(e) {
        var t = e.children,
          r = e.activeColor,
          u = (e.activeFramework, e.onColorClick),
          s = (e.onFrameworkClick, e.onCopy),
          p = e.codeToShow,
          d = e.copyText;
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              r
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
                                  r === c[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              u(c[t]), s(!1);
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
                  (0, o.jsx)(a.CopyToClipboard, {
                    text: p,
                    onCopy: function () {
                      return s(!0);
                    },
                    children: (0, o.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: d,
                    }),
                  }),
                  (0, o.jsx)(n.Z, {
                    language: "jsx",
                    style: i.Vg,
                    children: p,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    76220: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var o = r(85893),
        n = r(26265),
        i = r(38347);
      r(67294);
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var c = {
        blueGray: "mt-radio-blue-gray-500",
        gray: "mt-radio-gray-500",
        brown: "mt-radio-brown-500",
        deepOrange: "mt-radio-deep-orange-500",
        orange: "mt-radio-orange-500",
        amber: "mt-radio-amber-500",
        yellow: "mt-radio-yellow-600",
        lime: "mt-radio-lime-500",
        lightGreen: "mt-radio-light-green-500",
        green: "mt-radio-green-500",
        teal: "mt-radio-teal-500",
        cyan: "mt-radio-cyan-500",
        lightBlue: "mt-radio-light-blue-500",
        blue: "mt-radio-blue-500",
        indigo: "mt-radio-indigo-500",
        deepPurple: "mt-radio-deep-purple-500",
        purple: "mt-radio-purple-500",
        pink: "mt-radio-pink-500",
        red: "mt-radio-red-500",
      };
      function u(e) {
        var t = e.color,
          r = e.text,
          n = e.id,
          a = (0, i.Z)(e, ["color", "text", "id"]);
        return (0, o.jsxs)("div", {
          className: "flex items-center",
          children: [
            (0, o.jsx)(
              "input",
              l(
                l({}, a),
                {},
                {
                  id: n,
                  type: "radio",
                  className: "mt-radio ".concat(
                    c[t],
                    " hidden overflow-hidden"
                  ),
                }
              )
            ),
            (0, o.jsxs)("label", {
              htmlFor: n,
              className:
                "flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300",
              children: [
                (0, o.jsx)("span", {
                  className:
                    "relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300",
                }),
                r,
              ],
            }),
          ],
        });
      }
      u.defaultProps = { color: "lightBlue" };
    },
    38642: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return d;
          },
        });
      var o = r(85893),
        n = r(67294),
        i = r(29041),
        a = r(82830),
        l = r(68286),
        c = r(5981),
        u = r(53085),
        s = r(76220);
      function p(e) {
        var t = e.copyText,
          r = e.onCopy,
          i = (0, n.useState)("lightBlue"),
          a = i[0],
          l = i[1],
          c = (0, n.useState)("react"),
          p = c[0],
          d = c[1],
          f =
            'import React from "react";\nimport Radio from "@material-tailwind/react/Radio"\n\nexport default function RadioButton() {\n    return (\n        <Radio\n            color="'
              .concat(
                a,
                '"\n            text="Option 1"\n            id="option-1"\n            name="option"\n        />\n        <Radio\n            color="'
              )
              .concat(
                a,
                '"\n            text="Option 2"\n            id="option-2"\n            name="option"\n        />\n    )\n}'
              );
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)(u.Z, {
            copyText: t,
            onCopy: r,
            activeColor: a,
            activeFramework: p,
            codeToShow: f,
            onColorClick: function (e) {
              return l(e);
            },
            onFrameworkClick: function (e) {
              return d(e);
            },
            children: (0, o.jsxs)("div", {
              className: "flex justify-center py-5",
              children: [
                (0, o.jsx)("div", {
                  className: "mr-10",
                  children: (0, o.jsx)(s.Z, {
                    color: a,
                    text: "Option 1",
                    id: "option-1",
                    name: "option",
                  }),
                }),
                (0, o.jsx)("div", {
                  children: (0, o.jsx)(s.Z, {
                    color: a,
                    text: "Option 2",
                    id: "option-2",
                    name: "option",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function d() {
        var e = (0, n.useState)(null),
          t = e[0],
          r = e[1];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.Z, { title: "React Radio Button" }),
            (0, o.jsx)(l.Z, {}),
            (0, o.jsxs)(a.Z, {
              children: [
                (0, o.jsx)(c.Z, {
                  title: "React Radio Button",
                  description:
                    "Easy to use Material Tailwind radio button component.",
                }),
                (0, o.jsx)(p, {
                  copyText: "Alerts" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Alerts" : "");
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
    95354: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/radioButton",
        function () {
          return r(38642);
        },
      ]);
    },
    74300: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var o = i(r(67294)),
        n = i(r(20640));
      function i(e) {
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
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function c(e, t) {
        if (null == e) return {};
        var r,
          o,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              o,
              n = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (r = i[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (r = i[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function p(e, t) {
        return !t || ("object" !== a(t) && "function" !== typeof t) ? f(e) : t;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
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
      function m(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var b = (function (e) {
        function t() {
          var e, r;
          u(this, t);
          for (var i = arguments.length, a = new Array(i), l = 0; l < i; l++)
            a[l] = arguments[l];
          return (
            m(
              f((r = p(this, (e = d(t)).call.apply(e, [this].concat(a))))),
              "onClick",
              function (e) {
                var t = r.props,
                  i = t.text,
                  a = t.onCopy,
                  l = t.children,
                  c = t.options,
                  u = o.default.Children.only(l),
                  s = (0, n.default)(i, c);
                a && a(i, s),
                  u &&
                    u.props &&
                    "function" === typeof u.props.onClick &&
                    u.props.onClick(e);
              }
            ),
            r
          );
        }
        var r, i, a;
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
          (r = t),
          (i = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  r = c(e, ["text", "onCopy", "options", "children"]),
                  n = o.default.Children.only(t);
                return o.default.cloneElement(
                  n,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? l(r, !0).forEach(function (t) {
                            m(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : l(r).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t)
                            );
                          });
                    }
                    return e;
                  })({}, r, { onClick: this.onClick })
                );
              },
            },
          ]) && s(r.prototype, i),
          a && s(r, a),
          t
        );
      })(o.default.PureComponent);
      (t.CopyToClipboard = b),
        m(b, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, t, r) {
      "use strict";
      var o = r(74300).CopyToClipboard;
      (o.CopyToClipboard = o), (e.exports = o);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, r = [], o = 0;
          o < e.rangeCount;
          o++
        )
          r.push(e.getRangeAt(o));
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
                r.forEach(function (t) {
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
      return (t = 95354), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
