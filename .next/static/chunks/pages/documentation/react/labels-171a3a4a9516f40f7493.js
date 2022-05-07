(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4771],
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
          g,
          c,
          u = !1;
        r || (r = {}), (t = r.debug || !1);
        try {
          if (
            ((a = o()),
            (i = document.createRange()),
            (g = document.getSelection()),
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
            document.body.appendChild(c),
            i.selectNodeContents(c),
            g.addRange(i),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          u = !0;
        } catch (b) {
          t && console.error("unable to copy using execCommand: ", b),
            t && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(r.format || "text", e),
              r.onCopy && r.onCopy(window.clipboardData),
              (u = !0);
          } catch (b) {
            t && console.error("unable to copy using clipboardData: ", b),
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
          g &&
            ("function" == typeof g.removeRange
              ? g.removeRange(i)
              : g.removeAllRanges()),
            c && document.body.removeChild(c),
            a();
        }
        return u;
      };
    },
    46445: function (e, r, t) {
      "use strict";
      var o = t(26265),
        n = t(85893),
        l = t(59999),
        a = t(38347),
        i = t(67294),
        g = t(39931),
        c = t.n(g);
      function u(e, r) {
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
      function b(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? u(Object(t), !0).forEach(function (r) {
                (0, o.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var p = {
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
        s = {
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
        d = {
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
        y = {
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
        m = {
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
        f = {
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
        x = {
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
        v = {
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
        w = {
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
        C = (0, i.forwardRef)(function (e, r) {
          var t,
            o,
            i = e.children,
            g = e.color,
            u = e.buttonType,
            C = e.size,
            O = e.rounded,
            P = e.iconOnly,
            N = e.block,
            G = e.ripple,
            S = e.className,
            T = (0, a.Z)(e, [
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
            D = new (c())(),
            L = [],
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
              (O = O ? "rounded-full" : "rounded-lg"),
            ],
            _ = ["text-white", p[g], s[g], d[g], h[g], y[g], m[g]],
            Z = [
              "bg-transparent",
              "border",
              "border-solid",
              "shadow-none",
              f[g],
              x[g],
              v[g],
              w[g],
              j[g],
              v[g],
              k[g],
            ],
            B = ["bg-transparent", f[g], v[g], j[g], v[g], k[g]],
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
            A = [].concat(E, [
              P ? "w-12 h-12 p-0 grid place-items-center" : "py-3 px-7",
              "text-sm",
              "leading-relaxed",
            ]);
          if ("sm" === C) (t = L).push.apply(t, (0, l.Z)(R));
          else if ("lg" === C) {
            var z;
            (z = L).push.apply(z, (0, l.Z)(A));
          } else {
            var U;
            (U = L).push.apply(U, (0, l.Z)(F));
          }
          if ("outline" === u) (o = L).push.apply(o, Z);
          else if ("link" === u) {
            var I;
            (I = L).push.apply(I, B);
          } else {
            var M;
            (M = L).push.apply(M, _);
          }
          return (
            (L = L.join(" ")),
            (0, n.jsx)(
              "button",
              b(
                b({}, T),
                {},
                {
                  className: "".concat(L, " ").concat(S),
                  ref: r,
                  onMouseUp: function (e) {
                    "dark" === G && D.create(e, "dark"),
                      "light" === G && D.create(e, "light");
                  },
                  children: i,
                }
              )
            )
          );
        });
      (C.defaultProps = {
        color: "lightBlue",
        buttonType: "filled",
        size: "regular",
        rounded: !1,
        block: !1,
      }),
        (r.Z = C);
    },
    53085: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return c;
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
        g = [
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
        var r = e.children,
          t = e.activeColor,
          c = (e.activeFramework, e.onColorClick),
          u = (e.onFrameworkClick, e.onCopy),
          b = e.codeToShow,
          p = e.copyText;
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
                                  t === g[r]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              c(g[r]), u(!1);
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
                    text: b,
                    onCopy: function () {
                      return u(!0);
                    },
                    children: (0, o.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: p,
                    }),
                  }),
                  (0, o.jsx)(n.Z, {
                    language: "jsx",
                    style: l.Vg,
                    children: b,
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
    16189: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return a;
        },
      });
      var o = t(85893),
        n =
          (t(67294),
          {
            blueGray: "bg-blue-gray-100",
            gray: "bg-gray-100",
            brown: "bg-brown-100",
            deepOrange: "bg-deep-orange-100",
            orange: "bg-orange-100",
            amber: "bg-amber-100",
            yellow: "bg-yellow-100",
            lime: "bg-lime-100",
            lightGreen: "bg-light-green-100",
            green: "bg-green-100",
            teal: "bg-teal-100",
            cyan: "bg-cyan-100",
            lightBlue: "bg-light-blue-100",
            blue: "bg-blue-100",
            indigo: "bg-indigo-100",
            deepPurple: "bg-deep-purple-100",
            purple: "bg-purple-100",
            pink: "bg-pink-100",
            red: "bg-red-100",
          }),
        l = {
          blueGray: "text-blue-gray-700",
          gray: "text-gray-700",
          brown: "text-brown-700",
          deepOrange: "text-deep-orange-700",
          orange: "text-orange-700",
          amber: "text-amber-700",
          yellow: "text-yellow-700",
          lime: "text-lime-700",
          lightGreen: "text-light-green-700",
          green: "text-green-700",
          teal: "text-teal-700",
          cyan: "text-cyan-700",
          lightBlue: "text-light-blue-700",
          blue: "text-blue-700",
          indigo: "text-indigo-700",
          deepPurple: "text-deep-purple-700",
          purple: "text-purple-700",
          pink: "text-pink-700",
          red: "text-red-700",
        };
      function a(e) {
        var r = e.children,
          t = e.color,
          a = e.className;
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)("div", {
            className:
              "max-w-max flex items-center justify-between py-1 px-3 rounded-full "
                .concat(n[t], " last:mr-0 mr-1 transition-all duration-300 ")
                .concat(a),
            children: (0, o.jsx)("span", {
              className: "text-xs font-semibold uppercase ".concat(l[t]),
              children: r,
            }),
          }),
        });
      }
    },
    34888: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return x;
          },
        });
      var o = t(85893),
        n = t(67294),
        l = t(29041),
        a = t(82830),
        i = t(68286),
        g = t(5981),
        c = t(81957),
        u = t(53085),
        b = t(49777),
        p = t(16189);
      function s(e) {
        var r = e.copyText,
          t = e.onCopy,
          l = (0, n.useState)("lightBlue"),
          a = l[0],
          i = l[1],
          g = (0, n.useState)("react")[0],
          c = (0, n.useState)(!1),
          s = c[0],
          d = c[1],
          h = (0, n.useState)(),
          y = h[0],
          m = h[1],
          f = (0, b.Z)(g, d, m),
          x =
            'import React from "react";\nimport Label from "@material-tailwind/react/Label";\n\nexport default function Label() {\n    return (\n        <Label color="'.concat(
              a,
              '">Label</Label>\n    );\n}'
            );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            s
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return d(!1);
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
                                    return d(!1);
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
                                  y,
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
            (0, o.jsx)(u.Z, {
              copyText: r,
              onCopy: t,
              activeColor: a,
              activeFramework: g,
              codeToShow: x,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: f,
              children: (0, o.jsx)("div", {
                className: "flex justify-center",
                children: (0, o.jsx)(p.Z, { color: a, children: "Label" }),
              }),
            }),
          ],
        });
      }
      var d = t(46445),
        h = {
          blueGray: "bg-blue-gray-100",
          gray: "bg-gray-100",
          brown: "bg-brown-100",
          deepOrange: "bg-deep-orange-100",
          orange: "bg-orange-100",
          amber: "bg-amber-100",
          yellow: "bg-yellow-100",
          lime: "bg-lime-100",
          lightGreen: "bg-light-green-100",
          green: "bg-green-100",
          teal: "bg-teal-100",
          cyan: "bg-cyan-100",
          lightBlue: "bg-light-blue-100",
          blue: "bg-blue-100",
          indigo: "bg-indigo-100",
          deepPurple: "bg-deep-purple-100",
          purple: "bg-purple-100",
          pink: "bg-pink-100",
          red: "bg-red-100",
        },
        y = {
          blueGray: "bg-blue-gray-900",
          gray: "bg-gray-900",
          brown: "bg-brown-900",
          deepOrange: "bg-deep-orange-900",
          orange: "bg-orange-900",
          amber: "bg-amber-900",
          yellow: "bg-yellow-900",
          lime: "bg-lime-900",
          lightGreen: "bg-light-green-900",
          green: "bg-green-900",
          teal: "bg-teal-900",
          cyan: "bg-cyan-900",
          lightBlue: "bg-light-blue-900",
          blue: "bg-blue-900",
          indigo: "bg-indigo-900",
          deepPurple: "bg-deep-purple-900",
          purple: "bg-purple-900",
          pink: "bg-pink-900",
          red: "bg-red-900",
        },
        m = {
          blueGray: "text-blue-gray-700",
          gray: "text-gray-700",
          brown: "text-brown-700",
          deepOrange: "text-deep-orange-700",
          orange: "text-orange-700",
          amber: "text-amber-700",
          yellow: "text-yellow-700",
          lime: "text-lime-700",
          lightGreen: "text-light-green-700",
          green: "text-green-700",
          teal: "text-teal-700",
          cyan: "text-cyan-700",
          lightBlue: "text-light-blue-700",
          blue: "text-blue-700",
          indigo: "text-indigo-700",
          deepPurple: "text-deep-purple-700",
          purple: "text-purple-700",
          pink: "text-pink-700",
          red: "text-red-700",
        };
      function f(e) {
        var r = e.copyText,
          t = e.onCopy,
          l = (0, n.useState)("lightBlue"),
          a = l[0],
          i = l[1],
          g = (0, n.useState)("react")[0],
          c = (0, n.useState)(!0),
          p = c[0],
          s = c[1],
          f = (0, n.useState)(!1),
          x = f[0],
          v = f[1],
          w = (0, n.useState)(),
          j = w[0],
          k = w[1],
          C = (0, b.Z)(g, v, k),
          O =
            'import React from "react";\nimport ClosingLabel from "@material-tailwind/react/ClosingLabel";\n\nexport default function ClosingLabel() {\n    return (\n        <ClosingLabel color="'.concat(
              a,
              '">Label</ClosingLabel>\n    );\n}'
            );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            x
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return v(!1);
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
                                    return v(!1);
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
                                  j,
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
            (0, o.jsx)(u.Z, {
              copyText: r,
              onCopy: t,
              activeColor: a,
              activeFramework: g,
              codeToShow: O,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: C,
              children: (0, o.jsx)("div", {
                className: "flex justify-center",
                children: p
                  ? (0, o.jsxs)("div", {
                      className:
                        "max-w-max flex items-center justify-between py-1 pl-3 pr-1 rounded-full ".concat(
                          h[a],
                          " last:mr-0 mr-1 transition-all duration-300"
                        ),
                      children: [
                        (0, o.jsx)("span", {
                          className: "text-xs font-semibold ".concat(
                            m[a],
                            " uppercase mr-2"
                          ),
                          children: "Label",
                        }),
                        (0, o.jsx)("span", {
                          className: "".concat(
                            y[a],
                            " text-white text-sm leading-none rounded-full w-4 h-4 cursor-pointer grid place-items-center p-0"
                          ),
                          onClick: function (e) {
                            var r,
                              t = e.target.parentNode;
                            t.classList.add("opacity-0"),
                              Array.from(t.classList).map(function (e) {
                                return e.includes("duration")
                                  ? (r = e.split("-")[1])
                                  : null;
                              }),
                              setTimeout(
                                function () {
                                  return s(!1);
                                },
                                r ? parseInt(r, 10) + 100 : 250
                              );
                          },
                          children: "\xd7",
                        }),
                      ],
                    })
                  : (0, o.jsx)(d.Z, {
                      color: a,
                      onClick: function () {
                        return s(!0);
                      },
                      children: "Revert Changes",
                    }),
              }),
            }),
          ],
        });
      }
      function x() {
        var e = (0, n.useState)(null),
          r = e[0],
          t = e[1];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(l.Z, { title: "React Lables" }),
            (0, o.jsx)(i.Z, {}),
            (0, o.jsxs)(a.Z, {
              children: [
                (0, o.jsx)(g.Z, {
                  title: "React Labels",
                  description:
                    "Simple and controlled Material Tailwind lables, let the user to choice to close the label using react.",
                }),
                (0, o.jsx)(c.Z, { title: "Simple Label" }),
                (0, o.jsx)(s, {
                  copyText: "Labels" === r ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Labels" : "");
                  },
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(c.Z, { title: "Closing Label" }),
                (0, o.jsx)(f, {
                  copyText: "Labels" === r ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Labels" : "");
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
    66541: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/labels",
        function () {
          return t(34888);
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
      function g(e, r) {
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
      function c(e, r) {
        if (!(e instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, r) {
        for (var t = 0; t < r.length; t++) {
          var o = r[t];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function b(e, r) {
        return !r || ("object" !== a(r) && "function" !== typeof r) ? s(e) : r;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function s(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function d(e, r) {
        return (d =
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
      var y = (function (e) {
        function r() {
          var e, t;
          c(this, r);
          for (var l = arguments.length, a = new Array(l), i = 0; i < l; i++)
            a[i] = arguments[i];
          return (
            h(
              s((t = b(this, (e = p(r)).call.apply(e, [this].concat(a))))),
              "onClick",
              function (e) {
                var r = t.props,
                  l = r.text,
                  a = r.onCopy,
                  i = r.children,
                  g = r.options,
                  c = o.default.Children.only(i),
                  u = (0, n.default)(l, g);
                a && a(l, u),
                  c &&
                    c.props &&
                    "function" === typeof c.props.onClick &&
                    c.props.onClick(e);
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
              r && d(e, r);
          })(r, e),
          (t = r),
          (l = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  r = (e.text, e.onCopy, e.options, e.children),
                  t = g(e, ["text", "onCopy", "options", "children"]),
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
          ]) && u(t.prototype, l),
          a && u(t, a),
          r
        );
      })(o.default.PureComponent);
      (r.CopyToClipboard = y),
        h(y, "defaultProps", { onCopy: void 0, options: void 0 });
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
      return (r = 66541), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
