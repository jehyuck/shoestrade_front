(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4441],
  {
    20640: function (e, r, t) {
      "use strict";
      var o = t(11742),
        n = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, r) {
        var t,
          l,
          a,
          i,
          c,
          u,
          g = !1;
        r || (r = {}), (t = r.debug || !1);
        try {
          if (
            ((a = o()),
            (i = document.createRange()),
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
              if ((o.stopPropagation(), r.format))
                if (
                  (o.preventDefault(), "undefined" === typeof o.clipboardData)
                ) {
                  t && console.warn("unable to use e.clipboardData"),
                    t && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var l = n[r.format] || n.default;
                  window.clipboardData.setData(l, e);
                } else
                  o.clipboardData.clearData(),
                    o.clipboardData.setData(r.format, e);
              r.onCopy && (o.preventDefault(), r.onCopy(o.clipboardData));
            }),
            document.body.appendChild(u),
            i.selectNodeContents(u),
            c.addRange(i),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          g = !0;
        } catch (s) {
          t && console.error("unable to copy using execCommand: ", s),
            t && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(r.format || "text", e),
              r.onCopy && r.onCopy(window.clipboardData),
              (g = !0);
          } catch (s) {
            t && console.error("unable to copy using clipboardData: ", s),
              t && console.error("falling back to prompt"),
              (l = (function (e) {
                var r =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, r);
              })(
                "message" in r ? r.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(l, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(i)
              : c.removeAllRanges()),
            u && document.body.removeChild(u),
            a();
        }
        return g;
      };
    },
    43953: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return u;
        },
      });
      var o = t(85893),
        n = t(26265),
        l = t(38347);
      t(67294);
      function a(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function i(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? a(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var c = {
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
      };
      function u(e) {
        var r = e.children,
          t = e.color,
          n = (0, l.Z)(e, ["children", "color"]);
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)(
            "div",
            i(
              i({}, n),
              {},
              {
                className:
                  "flex items-center gap-3 text-white p-4 pr-12 border-0 rounded-lg relative mb-4 ".concat(
                    c[t],
                    " transition-all duration-300"
                  ),
                children: r,
              }
            )
          ),
        });
      }
      u.defaultProps = { color: "lightBlue" };
    },
    46445: function (e, r, t) {
      "use strict";
      var o = t(26265),
        n = t(85893),
        l = t(59999),
        a = t(38347),
        i = t(67294),
        c = t(39931),
        u = t.n(c);
      function g(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function s(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? g(Object(t), !0).forEach(function (r) {
                (0, o.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var b = {
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
        },
        d = {
          blueGray: "hover:bg-blue-gray-700",
          gray: "hover:bg-gray-700",
          brown: "hover:bg-brown-700",
          deepOrange: "hover:bg-deep-orange-700",
          orange: "hover:bg-orange-700",
          amber: "hover:bg-amber-700",
          yellow: "hover:bg-yellow-700",
          lime: "hover:bg-lime-700",
          lightGreen: "hover:bg-light-green-700",
          green: "hover:bg-green-700",
          teal: "hover:bg-teal-700",
          cyan: "hover:bg-cyan-700",
          lightBlue: "hover:bg-light-blue-700",
          blue: "hover:bg-blue-700",
          indigo: "hover:bg-indigo-700",
          deepPurple: "hover:bg-deep-purple-700",
          purple: "hover:bg-purple-700",
          pink: "hover:bg-pink-700",
          red: "hover:bg-red-700",
        },
        p = {
          blueGray: "focus:bg-blue-gray-400",
          gray: "focus:bg-gray-400",
          brown: "focus:bg-brown-400",
          deepOrange: "focus:bg-deep-orange-400",
          orange: "focus:bg-orange-400",
          amber: "focus:bg-amber-400",
          yellow: "focus:bg-yellow-500",
          lime: "focus:bg-lime-400",
          lightGreen: "focus:bg-light-green-400",
          green: "focus:bg-green-400",
          teal: "focus:bg-teal-400",
          cyan: "focus:bg-cyan-400",
          lightBlue: "focus:bg-light-blue-400",
          blue: "focus:bg-blue-400",
          indigo: "focus:bg-indigo-400",
          deepPurple: "focus:bg-deep-purple-400",
          purple: "focus:bg-purple-400",
          pink: "focus:bg-pink-400",
          red: "focus:bg-red-400",
        },
        h = {
          blueGray: "active:bg-blue-gray-800",
          gray: "active:bg-gray-800",
          brown: "active:bg-brown-800",
          deepOrange: "active:bg-deep-orange-800",
          orange: "active:bg-orange-800",
          amber: "active:bg-amber-800",
          yellow: "active:bg-yellow-800",
          lime: "active:bg-lime-800",
          lightGreen: "active:bg-light-green-800",
          green: "active:bg-green-800",
          teal: "active:bg-teal-800",
          cyan: "active:bg-cyan-800",
          lightBlue: "active:bg-light-blue-800",
          blue: "active:bg-blue-800",
          indigo: "active:bg-indigo-800",
          deepPurple: "active:bg-deep-purple-800",
          purple: "active:bg-purple-800",
          pink: "active:bg-pink-800",
          red: "active:bg-red-800",
        },
        f = {
          blueGray: "shadow-md-blue-gray",
          gray: "shadow-md-gray",
          brown: "shadow-md-brown",
          deepOrange: "shadow-md-deep-orange",
          orange: "shadow-md-orange",
          amber: "shadow-md-amber",
          yellow: "shadow-md-yellow",
          lime: "shadow-md-lime",
          lightGreen: "shadow-md-light-green",
          green: "shadow-md-green",
          teal: "shadow-md-teal",
          cyan: "shadow-md-cyan",
          lightBlue: "shadow-md-light-blue",
          blue: "shadow-md-blue",
          indigo: "shadow-md-indigo",
          deepPurple: "shadow-md-deep-purple",
          purple: "shadow-md-purple",
          pink: "shadow-md-pink",
          red: "shadow-md-red",
        },
        y = {
          blueGray: "hover:shadow-lg-blue-gray",
          gray: "hover:shadow-lg-gray",
          brown: "hover:shadow-lg-brown",
          deepOrange: "hover:shadow-lg-deep-orange",
          orange: "hover:shadow-lg-orange",
          amber: "hover:shadow-lg-amber",
          yellow: "hover:shadow-lg-yellow",
          lime: "hover:shadow-lg-lime",
          lightGreen: "hover:shadow-lg-light-green",
          green: "hover:shadow-lg-green",
          teal: "hover:shadow-lg-teal",
          cyan: "hover:shadow-lg-cyan",
          lightBlue: "hover:shadow-lg-light-blue",
          blue: "hover:shadow-lg-blue",
          indigo: "hover:shadow-lg-indigo",
          deepPurple: "hover:shadow-lg-deep-purple",
          purple: "hover:shadow-lg-purple",
          pink: "hover:shadow-lg-pink",
          red: "hover:shadow-lg-red",
        },
        m = {
          blueGray: "text-blue-gray-500",
          gray: "text-gray-500",
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
        },
        v = {
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
        },
        w = {
          blueGray: "hover:bg-blue-gray-50",
          gray: "hover:bg-gray-50",
          brown: "hover:bg-brown-50",
          deepOrange: "hover:bg-deep-orange-50",
          orange: "hover:bg-orange-50",
          amber: "hover:bg-amber-50",
          yellow: "hover:bg-yellow-50",
          lime: "hover:bg-lime-50",
          lightGreen: "hover:bg-light-green-50",
          green: "hover:bg-green-50",
          teal: "hover:bg-teal-50",
          cyan: "hover:bg-cyan-50",
          lightBlue: "hover:bg-light-blue-50",
          blue: "hover:bg-blue-50",
          indigo: "hover:bg-indigo-50",
          deepPurple: "hover:bg-deep-purple-50",
          purple: "hover:bg-purple-50",
          pink: "hover:bg-pink-50",
          red: "hover:bg-red-50",
        },
        x = {
          blueGray: "hover:border-blue-gray-700",
          gray: "hover:border-gray-700",
          brown: "hover:border-brown-700",
          deepOrange: "hover:border-deep-orange-700",
          orange: "hover:border-orange-700",
          amber: "hover:border-amber-700",
          yellow: "hover:border-yellow-700",
          lime: "hover:border-lime-700",
          lightGreen: "hover:border-light-green-700",
          green: "hover:border-green-700",
          teal: "hover:border-teal-700",
          cyan: "hover:border-cyan-700",
          lightBlue: "hover:border-light-blue-700",
          blue: "hover:border-blue-700",
          indigo: "hover:border-indigo-700",
          deepPurple: "hover:border-deep-purple-700",
          purple: "hover:border-purple-700",
          pink: "hover:border-pink-700",
          red: "hover:border-red-700",
        },
        j = {
          blueGray: "hover:text-blue-gray-700",
          gray: "hover:text-gray-700",
          brown: "hover:text-brown-700",
          deepOrange: "hover:text-deep-orange-700",
          orange: "hover:text-orange-700",
          amber: "hover:text-amber-700",
          yellow: "hover:text-yellow-700",
          lime: "hover:text-lime-700",
          lightGreen: "hover:text-light-green-700",
          green: "hover:text-green-700",
          teal: "hover:text-teal-700",
          cyan: "hover:text-cyan-700",
          lightBlue: "hover:text-light-blue-700",
          blue: "hover:text-blue-700",
          indigo: "hover:text-indigo-700",
          deepPurple: "hover:text-deep-purple-700",
          purple: "hover:text-purple-700",
          pink: "hover:text-pink-700",
          red: "hover:text-red-700",
        },
        k = {
          blueGray: "active:bg-blue-gray-100",
          gray: "active:bg-gray-100",
          brown: "active:bg-brown-100",
          deepOrange: "active:bg-deep-orange-100",
          orange: "active:bg-orange-100",
          amber: "active:bg-amber-100",
          yellow: "active:bg-yellow-100",
          lime: "active:bg-lime-100",
          lightGreen: "active:bg-light-green-100",
          green: "active:bg-green-100",
          teal: "active:bg-teal-100",
          cyan: "active:bg-cyan-100",
          lightBlue: "active:bg-light-blue-100",
          blue: "active:bg-blue-100",
          indigo: "active:bg-indigo-100",
          deepPurple: "active:bg-deep-purple-100",
          purple: "active:bg-purple-100",
          pink: "active:bg-pink-100",
          red: "active:bg-red-100",
        },
        O = (0, i.forwardRef)(function (e, r) {
          var t,
            o,
            i = e.children,
            c = e.color,
            g = e.buttonType,
            O = e.size,
            C = e.rounded,
            P = e.iconOnly,
            N = e.block,
            S = e.ripple,
            T = e.className,
            A = (0, a.Z)(e, [
              "children",
              "color",
              "buttonType",
              "size",
              "rounded",
              "iconOnly",
              "block",
              "ripple",
              "className",
            ]),
            G = new (u())(),
            D = [],
            E = [
              N && "w-full",
              "flex",
              "items-center",
              "justify-center",
              "gap-1",
              "font-bold",
              "outline-none",
              "uppercase",
              "tracking-wider",
              "focus:outline-none",
              "focus:shadow-none",
              "transition-all",
              "duration-300",
              (C = C ? "rounded-full" : "rounded-lg"),
            ],
            Z = ["text-white", b[c], d[c], p[c], h[c], f[c], y[c]],
            _ = [
              "bg-transparent",
              "border",
              "border-solid",
              "shadow-none",
              m[c],
              v[c],
              w[c],
              x[c],
              j[c],
              w[c],
              k[c],
            ],
            B = ["bg-transparent", m[c], w[c], j[c], w[c], k[c]],
            R = [].concat(E, [
              P ? "w-8 h-8 p-0 grid place-items-center" : "py-1.5 px-4",
              "text-xs",
              "leading-normal",
            ]),
            F = [].concat(E, [
              P ? "w-10 h-10 p-0 grid place-items-center" : "py-2.5 px-6",
              "text-xs",
              "leading-normal",
            ]),
            z = [].concat(E, [
              P ? "w-12 h-12 p-0 grid place-items-center" : "py-3 px-7",
              "text-sm",
              "leading-relaxed",
            ]);
          if ("sm" === O) (t = D).push.apply(t, (0, l.Z)(R));
          else if ("lg" === O) {
            var M;
            (M = D).push.apply(M, (0, l.Z)(z));
          } else {
            var U;
            (U = D).push.apply(U, (0, l.Z)(F));
          }
          if ("outline" === g) (o = D).push.apply(o, _);
          else if ("link" === g) {
            var I;
            (I = D).push.apply(I, B);
          } else {
            var L;
            (L = D).push.apply(L, Z);
          }
          return (
            (D = D.join(" ")),
            (0, n.jsx)(
              "button",
              s(
                s({}, A),
                {},
                {
                  className: "".concat(D, " ").concat(T),
                  ref: r,
                  onMouseUp: function (e) {
                    "dark" === S && G.create(e, "dark"),
                      "light" === S && G.create(e, "light");
                  },
                  children: i,
                }
              )
            )
          );
        });
      (O.defaultProps = {
        color: "lightBlue",
        buttonType: "filled",
        size: "regular",
        rounded: !1,
        block: !1,
      }),
        (r.Z = O);
    },
    53085: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return u;
        },
      });
      var o = t(85893),
        n = (t(67294), t(20921)),
        l = t(84283),
        a = t(74855),
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
      function u(e) {
        var r = e.children,
          t = e.activeColor,
          u = (e.activeFramework, e.onColorClick),
          g = (e.onFrameworkClick, e.onCopy),
          s = e.codeToShow,
          b = e.copyText;
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              t
                ? (0, o.jsx)("div", {
                    id: "colors",
                    className:
                      "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                    style: { width: "100%", bottom: "-14px" },
                    children: (0, o.jsx)("div", {
                      className:
                        "flex flew-wrap justify-center items-center bg-white px-2",
                      children: i.map(function (e, r) {
                        return (0, o.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  t === c[r]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              u(c[r]), g(!1);
                            },
                          },
                          r
                        );
                      }),
                    }),
                  })
                : null,
              r,
              (0, o.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  (0, o.jsx)(a.CopyToClipboard, {
                    text: s,
                    onCopy: function () {
                      return g(!0);
                    },
                    children: (0, o.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: b,
                    }),
                  }),
                  (0, o.jsx)(n.Z, {
                    language: "jsx",
                    style: l.Vg,
                    children: s,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    49777: function (e, r, t) {
      "use strict";
      function o(e, r, t) {
        switch (e) {
          case "react":
          case "angular":
          case "html":
          case "vue":
          case "javascript":
            break;
          default:
            r(!0), t(e);
        }
      }
      t.d(r, {
        Z: function () {
          return o;
        },
      });
    },
    81957: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return n;
        },
      });
      var o = t(85893);
      t(67294);
      function n(e) {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("h2", {
              className: "font-serif font-medium text-xl mb-2 text-gray-900",
              children: e.title,
            }),
            (0, o.jsx)("p", {
              className: "text-gray-700 mb-4 font-light",
              children: e.description,
            }),
          ],
        });
      }
    },
    92209: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return y;
          },
        });
      var o = t(85893),
        n = t(67294),
        l = t(29041),
        a = t(82830),
        i = t(68286),
        c = t(5981),
        u = t(81957),
        g = t(53085),
        s = t(49777),
        b = t(43953);
      function d(e) {
        var r = e.copyText,
          t = e.onCopy,
          l = (0, n.useState)("lightBlue"),
          a = l[0],
          i = l[1],
          c = (0, n.useState)("react")[0],
          u = (0, n.useState)(!1),
          d = u[0],
          p = u[1],
          h = (0, n.useState)(),
          f = h[0],
          y = h[1],
          m = (0, s.Z)(c, p, y),
          v =
            'import React from "react";\nimport Alert from "@material-tailwind/react/Alert";\n\nexport default function Alert() {\n    return (\n        <Alert color="'.concat(
              a,
              '">Material Tailwind Alerts</Alert>\n    );\n}'
            );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            d
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return p(!1);
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
                                    return p(!1);
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
                                  f,
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
            (0, o.jsx)(g.Z, {
              copyText: r,
              onCopy: t,
              activeColor: a,
              activeFramework: c,
              codeToShow: v,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: m,
              children: (0, o.jsxs)(b.Z, {
                color: a,
                children: [
                  (0, o.jsxs)("span", {
                    className: "font-medium uppercase",
                    children: [a, "!"],
                  }),
                  " This is a ",
                  a.toLowerCase(),
                  " alert - check it out!",
                ],
              }),
            }),
          ],
        });
      }
      var p = t(46445),
        h = {
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
        };
      function f(e) {
        var r = e.copyText,
          t = e.onCopy,
          l = (0, n.useState)("lightBlue"),
          a = l[0],
          i = l[1],
          c = (0, n.useState)("react")[0],
          u = (0, n.useState)(!0),
          b = u[0],
          d = u[1],
          f = (0, n.useState)(!1),
          y = f[0],
          m = f[1],
          v = (0, n.useState)(),
          w = v[0],
          x = v[1],
          j = (0, s.Z)(c, m, x),
          k =
            'import React from "react";\nimport ClosingAlert from "@material-tailwind/react/ClosingAlert";\n\nexport default function ClosingAlert() {\n    return (\n        <ClosingAlert color="'.concat(
              a,
              '">Material Tailwind Tailwind Closing Alerts</ClosingAlert>\n    );\n}'
            );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            y
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return m(!1);
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
                                    return m(!1);
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
                                  w,
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
            (0, o.jsx)(g.Z, {
              copyText: r,
              onCopy: t,
              activeColor: a,
              activeFramework: c,
              codeToShow: k,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: j,
              children: b
                ? (0, o.jsxs)("div", {
                    className:
                      "flex items-center gap-3 text-white p-4 pr-12 border-0 rounded-lg relative mb-4 ".concat(
                        h[a],
                        " transition-all duration-300"
                      ),
                    children: [
                      (0, o.jsxs)("span", {
                        className: "font-medium uppercase",
                        children: [a, "!"],
                      }),
                      " ",
                      "This is a ",
                      a.toLowerCase(),
                      " closing alert - check it out!",
                      (0, o.jsx)("button", {
                        className:
                          "absolute right-4 top-1/3 transform -translate-y-1/3 w-6 h-6 bg-transparent text-2xl outline-none focus:outline-none",
                        onClick: function (e) {
                          return (function (e) {
                            var r,
                              t = e.target.parentNode.parentNode;
                            t.classList.add("opacity-0"),
                              Array.from(t.classList).map(function (e) {
                                return e.includes("duration")
                                  ? (r = e.split("-")[1])
                                  : null;
                              }),
                              setTimeout(
                                function () {
                                  return d(!1);
                                },
                                r ? parseInt(r, 10) + 100 : 250
                              );
                          })(e);
                        },
                        children: (0, o.jsx)("span", {
                          className: "leading-none text-4xl",
                          children: "\xd7",
                        }),
                      }),
                    ],
                  })
                : (0, o.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, o.jsx)(p.Z, {
                      color: a,
                      onClick: function () {
                        return d(!0);
                      },
                      children: "Revert Changes",
                    }),
                  }),
            }),
          ],
        });
      }
      function y() {
        var e = (0, n.useState)(null),
          r = e[0],
          t = e[1];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(l.Z, { title: "React Alerts" }),
            (0, o.jsx)(i.Z, {}),
            (0, o.jsxs)(a.Z, {
              children: [
                (0, o.jsx)(c.Z, {
                  title: "React Alerts",
                  description:
                    "Provide contextual feedback messages for typical user actions with the handful of available and flexible Material Tailwind alerts.",
                }),
                (0, o.jsx)(u.Z, { title: "Simple Alert" }),
                (0, o.jsx)(d, {
                  copyText: "Alerts" === r ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Alerts" : "");
                  },
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(u.Z, { title: "Closing Alert" }),
                (0, o.jsx)(f, {
                  copyText: "Alerts" === r ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Alerts" : "");
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
    25837: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/alerts",
        function () {
          return t(92209);
        },
      ]);
    },
    74300: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.CopyToClipboard = void 0);
      var o = l(t(67294)),
        n = l(t(20640));
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
      function i(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function c(e, r) {
        if (null == e) return {};
        var t,
          o,
          n = (function (e, r) {
            if (null == e) return {};
            var t,
              o,
              n = {},
              l = Object.keys(e);
            for (o = 0; o < l.length; o++)
              (t = l[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (o = 0; o < l.length; o++)
            (t = l[o]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (n[t] = e[t]));
        }
        return n;
      }
      function u(e, r) {
        if (!(e instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function g(e, r) {
        for (var t = 0; t < r.length; t++) {
          var o = r[t];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function s(e, r) {
        return !r || ("object" !== a(r) && "function" !== typeof r) ? d(e) : r;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e, r) {
        return (p =
          Object.setPrototypeOf ||
          function (e, r) {
            return (e.__proto__ = r), e;
          })(e, r);
      }
      function h(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      var f = (function (e) {
        function r() {
          var e, t;
          u(this, r);
          for (var l = arguments.length, a = new Array(l), i = 0; i < l; i++)
            a[i] = arguments[i];
          return (
            h(
              d((t = s(this, (e = b(r)).call.apply(e, [this].concat(a))))),
              "onClick",
              function (e) {
                var r = t.props,
                  l = r.text,
                  a = r.onCopy,
                  i = r.children,
                  c = r.options,
                  u = o.default.Children.only(i),
                  g = (0, n.default)(l, c);
                a && a(l, g),
                  u &&
                    u.props &&
                    "function" === typeof u.props.onClick &&
                    u.props.onClick(e);
              }
            ),
            t
          );
        }
        var t, l, a;
        return (
          (function (e, r) {
            if ("function" !== typeof r && null !== r)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(r && r.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              r && p(e, r);
          })(r, e),
          (t = r),
          (l = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  r = (e.text, e.onCopy, e.options, e.children),
                  t = c(e, ["text", "onCopy", "options", "children"]),
                  n = o.default.Children.only(r);
                return o.default.cloneElement(
                  n,
                  (function (e) {
                    for (var r = 1; r < arguments.length; r++) {
                      var t = null != arguments[r] ? arguments[r] : {};
                      r % 2
                        ? i(t, !0).forEach(function (r) {
                            h(e, r, t[r]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(t)
                          )
                        : i(t).forEach(function (r) {
                            Object.defineProperty(
                              e,
                              r,
                              Object.getOwnPropertyDescriptor(t, r)
                            );
                          });
                    }
                    return e;
                  })({}, t, { onClick: this.onClick })
                );
              },
            },
          ]) && g(t.prototype, l),
          a && g(t, a),
          r
        );
      })(o.default.PureComponent);
      (r.CopyToClipboard = f),
        h(f, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, r, t) {
      "use strict";
      var o = t(74300).CopyToClipboard;
      (o.CopyToClipboard = o), (e.exports = o);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var r = document.activeElement, t = [], o = 0;
          o < e.rangeCount;
          o++
        )
          t.push(e.getRangeAt(o));
        switch (r.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            r.blur();
            break;
          default:
            r = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                t.forEach(function (r) {
                  e.addRange(r);
                }),
              r && r.focus();
          }
        );
      };
    },
  },
  function (e) {
    e.O(0, [9774, 1e3, 7053, 8485, 5592, 2888, 179], function () {
      return (r = 25837), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
