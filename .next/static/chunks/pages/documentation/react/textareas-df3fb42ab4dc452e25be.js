(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7739],
  {
    20640: function (e, t, r) {
      "use strict";
      var n = r(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var r,
          a,
          i,
          l,
          c,
          u,
          s = !1;
        t || (t = {}), (r = t.debug || !1);
        try {
          if (
            ((i = n()),
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
            u.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format))
                if (
                  (n.preventDefault(), "undefined" === typeof n.clipboardData)
                ) {
                  r && console.warn("unable to use e.clipboardData"),
                    r && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var a = o[t.format] || o.default;
                  window.clipboardData.setData(a, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
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
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(l)
              : c.removeAllRanges()),
            u && document.body.removeChild(u),
            i();
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
      var n = r(85893),
        o = (r(67294), r(20921)),
        a = r(84283),
        i = r(74855),
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
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              r
                ? (0, n.jsx)("div", {
                    id: "colors",
                    className:
                      "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                    style: { width: "100%", bottom: "-14px" },
                    children: (0, n.jsx)("div", {
                      className:
                        "flex flew-wrap justify-center items-center bg-white px-2",
                      children: l.map(function (e, t) {
                        return (0, n.jsx)(
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
              (0, n.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  (0, n.jsx)(i.CopyToClipboard, {
                    text: p,
                    onCopy: function () {
                      return s(!0);
                    },
                    children: (0, n.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: d,
                    }),
                  }),
                  (0, n.jsx)(o.Z, {
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
    81957: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(85893);
      r(67294);
      function o(e) {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("h2", {
              className: "font-serif font-medium text-xl mb-2 text-gray-900",
              children: e.title,
            }),
            (0, n.jsx)("p", {
              className: "text-gray-700 mb-4 font-light",
              children: e.description,
            }),
          ],
        });
      }
    },
    47640: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = r(85893),
        o = r(26265),
        a = r(59999),
        i = r(38347);
      r(67294);
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                (0, o.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var u = {
          blueGray: "mt-input-blue-gray-500",
          gray: "mt-input-gray-500",
          brown: "mt-input-brown-500",
          deepOrange: "mt-input-deep-orange-500",
          orange: "mt-input-orange-500",
          amber: "mt-input-amber-500",
          yellow: "mt-input-yellow-600",
          lime: "mt-input-lime-500",
          lightGreen: "mt-input-light-green-500",
          green: "mt-input-green-500",
          teal: "mt-input-teal-500",
          cyan: "mt-input-cyan-500",
          lightBlue: "mt-input-light-blue-500",
          blue: "mt-input-blue-500",
          indigo: "mt-input-indigo-500",
          deepPurple: "mt-input-deep-purple-500",
          purple: "mt-input-purple-500",
          pink: "mt-input-pink-500",
          red: "mt-input-red-500",
        },
        s = {
          blueGray: "mt-input-outline-blue-gray-500",
          gray: "mt-input-outline-gray-500",
          brown: "mt-input-outline-brown-500",
          deepOrange: "mt-input-outline-deep-orange-500",
          orange: "mt-input-outline-orange-500",
          amber: "mt-input-outline-amber-500",
          yellow: "mt-input-outline-yellow-600",
          lime: "mt-input-outline-lime-500",
          lightGreen: "mt-input-outline-light-green-500",
          green: "mt-input-outline-green-500",
          teal: "mt-input-outline-teal-500",
          cyan: "mt-input-outline-cyan-500",
          lightBlue: "mt-input-outline-light-blue-500",
          blue: "mt-input-outline-blue-500",
          indigo: "mt-input-outline-indigo-500",
          deepPurple: "mt-input-outline-deep-purple-500",
          purple: "mt-input-outline-purple-500",
          pink: "mt-input-outline-pink-500",
          red: "mt-input-outline-red-500",
        },
        p = {
          blueGray: "border-blue-gray-500",
          gray: "border-gray-500",
          brown: "border-brown-500",
          deepOrange: "border-deep-orange-500",
          orange: "border-orange-500",
          amber: "border-amber-500",
          yellow: "border-yellow-600",
          lime: "border-lime-500",
          lightGreen: "border-light-green-500",
          green: "border-green-500",
          teal: "border-teal-500",
          cyan: "border-cyan-500",
          lightBlue: "border-light-blue-500",
          blue: "border-blue-500",
          indigo: "border-indigo-500",
          deepPurple: "border-deep-purple-500",
          purple: "border-purple-500",
          pink: "border-pink-500",
          red: "border-red-500",
        };
      function d(e) {
        var t,
          r,
          o,
          l,
          d,
          f = e.placeholder,
          b = e.color,
          y = e.size,
          m = e.outline,
          g = e.error,
          h = e.success,
          x = (0, i.Z)(e, [
            "placeholder",
            "color",
            "size",
            "outline",
            "error",
            "success",
          ]),
          w = [],
          j = ["w-full", "h-auto", "relative"];
        g
          ? ((o = p.red), (l = u.red), (d = s.red))
          : h
          ? ((o = p.green), (l = u.green), (d = s.green))
          : ((o = "border-gray-300"), (l = u[b]), (d = s[b]));
        var v,
          O,
          C = [
            "text-gray-400",
            "absolute",
            "left-0",
            "".concat(m ? "-top-1.5" : "-top-0.5"),
            "w-full",
            "h-full",
            "".concat(
              !m && "border border-t-0 border-l-0 border-r-0 border-b-1"
            ),
            o,
            "pointer-events-none",
            "".concat(m && "flex"),
            "".concat(m && "sm" === y && "text-sm"),
            "".concat(m && "leading-10"),
            "".concat(m && "transition-all"),
            "".concat(m && "duration-300"),
          ],
          T = [
            "w-full",
            "h-full",
            "text-gray-800",
            "leading-normal",
            "shadow-none",
            "outline-none",
            "resize-none",
            "focus:outline-none",
            "focus:ring-0",
            "focus:text-gray-800",
          ],
          P = [].concat(T, [
            "".concat(m ? "px-3" : "px-0"),
            "".concat(m && "pt-1.5 pb-0.5"),
            "text-sm",
          ]),
          k = [].concat(T, [
            "".concat(m ? "px-3" : "px-0"),
            "".concat(m && "pt-2.5 pb-1.5"),
          ]),
          E = [l, "mt-input", "texterea", "bg-transparent", "border-none"],
          N = [
            d,
            o,
            "mt-input-outline",
            "bg-transparent",
            "border",
            "border-1",
            "border-gray-300",
            "rounded-lg",
            "focus:border-2",
          ];
        "sm" === y
          ? (v = w).push.apply(v, (0, a.Z)(P))
          : (O = w).push.apply(O, (0, a.Z)(k));
        return (
          m ? (t = w).push.apply(t, N) : (r = w).push.apply(r, E),
          (j = j.join(" ")),
          (C = C.join(" ")),
          (w = w.join(" ")),
          (0, n.jsxs)("div", {
            className: j,
            children: [
              (0, n.jsx)(
                "textarea",
                c(
                  c({}, x),
                  {},
                  {
                    placeholder: " ",
                    className: "\n                    "
                      .concat(w, "\n                    ")
                      .concat(
                        g && m && "mt-input-outline-error",
                        "\n                    "
                      )
                      .concat(h && m && "mt-input-outline-success"),
                    rows: "7",
                  }
                )
              ),
              (0, n.jsx)("label", {
                className: C,
                children: m
                  ? f
                  : (0, n.jsx)("span", {
                      className: "".concat(
                        "sm" === y && "text-sm",
                        " absolute top-0 transition-all duration-300"
                      ),
                      children: f,
                    }),
              }),
              g &&
                (0, n.jsx)("span", {
                  className: "block absolute ".concat(
                    m ? "-bottom-4" : "-bottom-5",
                    " text-xs text-red-500"
                  ),
                  children: g,
                }),
              h &&
                (0, n.jsx)("span", {
                  className: "block absolute ".concat(
                    m ? "-bottom-4" : "-bottom-5",
                    " text-xs text-green-500"
                  ),
                  children: h,
                }),
            ],
          })
        );
      }
      d.defaultProps = { color: "lightBlue", size: "regular", outline: !1 };
    },
    86893: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return g;
          },
        });
      var n = r(85893),
        o = r(67294),
        a = r(29041),
        i = r(82830),
        l = r(68286),
        c = r(5981),
        u = r(81957),
        s = r(26265),
        p = r(38347),
        d = r(53085),
        f = r(47640);
      function b(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function m(e) {
        var t = e.copyText,
          r = e.onCopy,
          a = e.placeholder,
          i = e.size,
          l = e.outline,
          c = e.errorMessage,
          u = e.successMessage,
          s = (0, p.Z)(e, [
            "copyText",
            "onCopy",
            "placeholder",
            "size",
            "outline",
            "errorMessage",
            "successMessage",
          ]),
          b = (0, o.useState)("lightBlue"),
          m = b[0],
          g = b[1],
          h = (0, o.useState)("react"),
          x = h[0],
          w = h[1],
          j =
            'import React from "react";\nimport Textarea from "@material-tailwind/react/Textarea";\n\nexport default function Textarea() {\n    return (\n        <Textarea\n            color="'
              .concat(m, '"\n            size="')
              .concat(i, '"\n            outline={')
              .concat(l, '}\n            placeholder="')
              .concat(a, '"')
              .concat(c ? '\n            error="'.concat(c, '"') : "")
              .concat(
                u ? '\n            success="'.concat(u, '"') : "",
                "\n        />\n    )\n}"
              );
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(d.Z, {
            copyText: t,
            onCopy: r,
            activeColor: m,
            activeFramework: x,
            codeToShow: j,
            onColorClick: function (e) {
              return g(e);
            },
            onFrameworkClick: function (e) {
              return w(e);
            },
            children: (0, n.jsx)("div", {
              className: "w-full p-10  mx-auto ".concat(c || u ? "mb-10" : ""),
              children: (0, n.jsx)(
                f.Z,
                y({ color: m, size: i, outline: l, placeholder: a }, s)
              ),
            }),
          }),
        });
      }
      function g() {
        var e = (0, o.useState)(null),
          t = e[0],
          r = e[1];
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(a.Z, { title: "React Textarea" }),
            (0, n.jsx)(l.Z, {}),
            (0, n.jsxs)(i.Z, {
              children: [
                (0, n.jsx)(c.Z, {
                  title: "React Textarea",
                  description:
                    "Easily create textarea with different status and sizes using Material Tailwind textarea component",
                }),
                (0, n.jsx)(u.Z, { title: "Textarea" }),
                (0, n.jsx)(m, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Textarea",
                  size: "regular",
                  outline: !1,
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(u.Z, { title: "Outline Textare" }),
                (0, n.jsx)(m, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Textarea",
                  size: "regular",
                  outline: !0,
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(u.Z, { title: "Textarea with small font size" }),
                (0, n.jsx)(m, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Textarea with small font size",
                  size: "sm",
                  outline: !1,
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(u.Z, {
                  title: "Outline Textarea with small font size",
                }),
                (0, n.jsx)(m, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Textarea with small font size",
                  size: "sm",
                  outline: !0,
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(u.Z, { title: "Textarea with Error" }),
                (0, n.jsx)(m, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Textarea with Error",
                  size: "Regular",
                  outline: !1,
                  errorMessage: "Its an error",
                  error: "Its an error",
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(u.Z, { title: "Outline Textarea with Error" }),
                (0, n.jsx)(m, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Textarea with Error",
                  size: "Regular",
                  outline: !0,
                  errorMessage: "Its an error",
                  error: "Its an error",
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(u.Z, { title: "Textarea with Success" }),
                (0, n.jsx)(m, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Textarea with Success",
                  size: "Regular",
                  outline: !1,
                  successMessage: "Its a success",
                  success: "Its a success",
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(u.Z, { title: "Outline Textarea with Success" }),
                (0, n.jsx)(m, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Textarea with Success",
                  size: "Regular",
                  outline: !0,
                  successMessage: "Its a success",
                  success: "Its a success",
                }),
              ],
            }),
          ],
        });
      }
    },
    22041: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/textareas",
        function () {
          return r(86893);
        },
      ]);
    },
    74300: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var n = a(r(67294)),
        o = a(r(20640));
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
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e, t) {
        return !t || ("object" !== i(t) && "function" !== typeof t) ? f(e) : t;
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
      function b(e, t) {
        return (b =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e, t, r) {
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
      var m = (function (e) {
        function t() {
          var e, r;
          u(this, t);
          for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            y(
              f((r = p(this, (e = d(t)).call.apply(e, [this].concat(i))))),
              "onClick",
              function (e) {
                var t = r.props,
                  a = t.text,
                  i = t.onCopy,
                  l = t.children,
                  c = t.options,
                  u = n.default.Children.only(l),
                  s = (0, o.default)(a, c);
                i && i(a, s),
                  u &&
                    u.props &&
                    "function" === typeof u.props.onClick &&
                    u.props.onClick(e);
              }
            ),
            r
          );
        }
        var r, a, i;
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
          (r = t),
          (a = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  r = c(e, ["text", "onCopy", "options", "children"]),
                  o = n.default.Children.only(t);
                return n.default.cloneElement(
                  o,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? l(r, !0).forEach(function (t) {
                            y(e, t, r[t]);
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
          ]) && s(r.prototype, a),
          i && s(r, i),
          t
        );
      })(n.default.PureComponent);
      (t.CopyToClipboard = m),
        y(m, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, t, r) {
      "use strict";
      var n = r(74300).CopyToClipboard;
      (n.CopyToClipboard = n), (e.exports = n);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, r = [], n = 0;
          n < e.rangeCount;
          n++
        )
          r.push(e.getRangeAt(n));
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
      return (t = 22041), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
