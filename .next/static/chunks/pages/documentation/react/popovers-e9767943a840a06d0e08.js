(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4355],
  {
    20640: function (e, r, o) {
      "use strict";
      var t = o(11742),
        n = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, r) {
        var o,
          a,
          l,
          i,
          c,
          u,
          p = !1;
        r || (r = {}), (o = r.debug || !1);
        try {
          if (
            ((l = t()),
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
            u.addEventListener("copy", function (t) {
              if ((t.stopPropagation(), r.format))
                if (
                  (t.preventDefault(), "undefined" === typeof t.clipboardData)
                ) {
                  o && console.warn("unable to use e.clipboardData"),
                    o && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var a = n[r.format] || n.default;
                  window.clipboardData.setData(a, e);
                } else
                  t.clipboardData.clearData(),
                    t.clipboardData.setData(r.format, e);
              r.onCopy && (t.preventDefault(), r.onCopy(t.clipboardData));
            }),
            document.body.appendChild(u),
            i.selectNodeContents(u),
            c.addRange(i),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          p = !0;
        } catch (d) {
          o && console.error("unable to copy using execCommand: ", d),
            o && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(r.format || "text", e),
              r.onCopy && r.onCopy(window.clipboardData),
              (p = !0);
          } catch (d) {
            o && console.error("unable to copy using clipboardData: ", d),
              o && console.error("falling back to prompt"),
              (a = (function (e) {
                var r =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, r);
              })(
                "message" in r ? r.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(a, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(i)
              : c.removeAllRanges()),
            u && document.body.removeChild(u),
            l();
        }
        return p;
      };
    },
    46445: function (e, r, o) {
      "use strict";
      var t = o(26265),
        n = o(85893),
        a = o(59999),
        l = o(38347),
        i = o(67294),
        c = o(39931),
        u = o.n(c);
      function p(e, r) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            o.push.apply(o, t);
        }
        return o;
      }
      function d(e) {
        for (var r = 1; r < arguments.length; r++) {
          var o = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? p(Object(o), !0).forEach(function (r) {
                (0, t.Z)(e, r, o[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : p(Object(o)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(o, r)
                );
              });
        }
        return e;
      }
      var g = {
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
        b = {
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
        v = {
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
        m = {
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
        C = (0, i.forwardRef)(function (e, r) {
          var o,
            t,
            i = e.children,
            c = e.color,
            p = e.buttonType,
            C = e.size,
            P = e.rounded,
            O = e.iconOnly,
            N = e.block,
            Z = e.ripple,
            T = e.className,
            G = (0, l.Z)(e, [
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
            S = new (u())(),
            D = [],
            R = [
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
              (P = P ? "rounded-full" : "rounded-lg"),
            ],
            B = ["text-white", g[c], s[c], b[c], h[c], f[c], y[c]],
            E = [
              "bg-transparent",
              "border",
              "border-solid",
              "shadow-none",
              v[c],
              m[c],
              w[c],
              x[c],
              j[c],
              w[c],
              k[c],
            ],
            _ = ["bg-transparent", v[c], w[c], j[c], w[c], k[c]],
            M = [].concat(R, [
              O ? "w-8 h-8 p-0 grid place-items-center" : "py-1.5 px-4",
              "text-xs",
              "leading-normal",
            ]),
            A = [].concat(R, [
              O ? "w-10 h-10 p-0 grid place-items-center" : "py-2.5 px-6",
              "text-xs",
              "leading-normal",
            ]),
            z = [].concat(R, [
              O ? "w-12 h-12 p-0 grid place-items-center" : "py-3 px-7",
              "text-sm",
              "leading-relaxed",
            ]);
          if ("sm" === C) (o = D).push.apply(o, (0, a.Z)(M));
          else if ("lg" === C) {
            var F;
            (F = D).push.apply(F, (0, a.Z)(z));
          } else {
            var U;
            (U = D).push.apply(U, (0, a.Z)(A));
          }
          if ("outline" === p) (t = D).push.apply(t, E);
          else if ("link" === p) {
            var I;
            (I = D).push.apply(I, _);
          } else {
            var H;
            (H = D).push.apply(H, B);
          }
          return (
            (D = D.join(" ")),
            (0, n.jsx)(
              "button",
              d(
                d({}, G),
                {},
                {
                  className: "".concat(D, " ").concat(T),
                  ref: r,
                  onMouseUp: function (e) {
                    "dark" === Z && S.create(e, "dark"),
                      "light" === Z && S.create(e, "light");
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
    53085: function (e, r, o) {
      "use strict";
      o.d(r, {
        Z: function () {
          return u;
        },
      });
      var t = o(85893),
        n = (o(67294), o(20921)),
        a = o(84283),
        l = o(74855),
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
          o = e.activeColor,
          u = (e.activeFramework, e.onColorClick),
          p = (e.onFrameworkClick, e.onCopy),
          d = e.codeToShow,
          g = e.copyText;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              o
                ? (0, t.jsx)("div", {
                    id: "colors",
                    className:
                      "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                    style: { width: "100%", bottom: "-14px" },
                    children: (0, t.jsx)("div", {
                      className:
                        "flex flew-wrap justify-center items-center bg-white px-2",
                      children: i.map(function (e, r) {
                        return (0, t.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  o === c[r]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              u(c[r]), p(!1);
                            },
                          },
                          r
                        );
                      }),
                    }),
                  })
                : null,
              r,
              (0, t.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  (0, t.jsx)(l.CopyToClipboard, {
                    text: d,
                    onCopy: function () {
                      return p(!0);
                    },
                    children: (0, t.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: g,
                    }),
                  }),
                  (0, t.jsx)(n.Z, {
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
    49777: function (e, r, o) {
      "use strict";
      function t(e, r, o) {
        switch (e) {
          case "react":
          case "angular":
          case "html":
          case "vue":
          case "javascript":
            break;
          default:
            r(!0), o(e);
        }
      }
      o.d(r, {
        Z: function () {
          return t;
        },
      });
    },
    81957: function (e, r, o) {
      "use strict";
      o.d(r, {
        Z: function () {
          return n;
        },
      });
      var t = o(85893);
      o(67294);
      function n(e) {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("h2", {
              className: "font-serif font-medium text-xl mb-2 text-gray-900",
              children: e.title,
            }),
            (0, t.jsx)("p", {
              className: "text-gray-700 mb-4 font-light",
              children: e.description,
            }),
          ],
        });
      }
    },
    37262: function (e, r, o) {
      "use strict";
      var t = o(85893),
        n = o(67294),
        a = o(31736),
        l = o(13861),
        i = (0, n.forwardRef)(function (e, r) {
          var o = e.children,
            n = e.placement;
          return (0,
          t.jsx)(a.ZP, { content: o, placement: n, reference: r, trigger: "click", animation: "shift-away", arrow: l.ki, className: "arrow-light", interactive: !0 });
        });
      (i.defaultProps = { placement: "top" }), (r.Z = i);
    },
    7520: function (e, r, o) {
      "use strict";
      o.d(r, {
        Z: function () {
          return n;
        },
      });
      var t = o(85893);
      o(67294);
      function n(e) {
        var r = e.children,
          o = e.className;
        return (0, t.jsx)("div", {
          className: "text-gray-700 font-normal px-4 pb-4 ".concat(o),
          children: r,
        });
      }
    },
    64165: function (e, r, o) {
      "use strict";
      o.d(r, {
        Z: function () {
          return n;
        },
      });
      var t = o(85893);
      o(67294);
      function n(e) {
        var r = e.children,
          o = e.className;
        return (0, t.jsx)("div", {
          className:
            "bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg shadow-xl ".concat(
              o
            ),
          children: r,
        });
      }
    },
    19743: function (e, r, o) {
      "use strict";
      o.d(r, {
        Z: function () {
          return n;
        },
      });
      var t = o(85893);
      o(67294);
      function n(e) {
        var r = e.children,
          o = e.className;
        return (0, t.jsx)("div", {
          className: "text-gray-900 p-4 pb-2 uppercase font-bold ".concat(o),
          children: r,
        });
      }
    },
    87809: function (e, r, o) {
      "use strict";
      o.r(r),
        o.d(r, {
          default: function () {
            return v;
          },
        });
      var t = o(85893),
        n = o(67294),
        a = o(29041),
        l = o(82830),
        i = o(68286),
        c = o(5981),
        u = o(81957),
        p = o(53085),
        d = o(49777),
        g = o(46445),
        s = o(37262),
        b = o(64165),
        h = o(19743),
        f = o(7520);
      function y(e) {
        var r = e.copyText,
          o = e.onCopy,
          a = e.placement,
          l = (0, n.useState)("lightBlue"),
          i = l[0],
          c = l[1],
          u = (0, n.useState)("react")[0],
          y = (0, n.useState)(!1),
          v = y[0],
          m = y[1],
          w = (0, n.useState)(),
          x = w[0],
          j = w[1],
          k = (0, n.useRef)(),
          C = (0, d.Z)(u, m, j),
          P =
            'import React, { useRef } from "react";\nimport Button from "@material-tailwind/react/Button";\nimport Popover from "@material-tailwind/react/Popover";\nimport PopoverContainer from "@material-tailwind/react/PopoverContainer";\nimport PopoverHeader from "@material-tailwind/react/PopoverHeader";\nimport PopoverBody from "@material-tailwind/react/PopoverBody";\n\nexport default function Popover() {\n    const buttonRef = useRef();\n\n    return (\n        <>\n            <Button color="'
              .concat(
                i,
                '" ref={buttonRef} ripple="light">\n                Popover '
              )
              .concat(
                a,
                '\n            </Button>\n\n            <Popover placement="'
              )
              .concat(
                a,
                '" ref={buttonRef}>\n                <PopoverContainer>\n                    <PopoverHeader>Popover '
              )
              .concat(
                a,
                "</PopoverHeader>\n                    <PopoverBody>\n                        And here's some amazing content. It's very engaging. Right?\n                    </PopoverBody>\n                </PopoverContainer>\n            </Popover>\n        </>\n    );\n}"
              );
        return (0, t.jsxs)(t.Fragment, {
          children: [
            v
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return m(!1);
                      },
                      children: (0, t.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, t.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, t.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, t.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return m(!1);
                                  },
                                  children: (0, t.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, t.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  x,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, t.jsx)(p.Z, {
              copyText: r,
              onCopy: o,
              activeColor: i,
              activeFramework: u,
              codeToShow: P,
              onColorClick: function (e) {
                return c(e);
              },
              onFrameworkClick: C,
              children: (0, t.jsxs)("div", {
                className: "flex justify-center",
                children: [
                  (0, t.jsxs)(g.Z, {
                    color: i,
                    ref: k,
                    ripple: "light",
                    children: ["Popover ", a],
                  }),
                  (0, t.jsx)(s.Z, {
                    placement: a,
                    ref: k,
                    children: (0, t.jsxs)(b.Z, {
                      children: [
                        (0, t.jsxs)(h.Z, { children: ["Popover ", a] }),
                        (0, t.jsx)(f.Z, {
                          children:
                            "And here's some amazing content. It's very engaging. Right?",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function v() {
        var e = (0, n.useState)(null),
          r = e[0],
          o = e[1];
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(a.Z, { title: "React Popovers" }),
            (0, t.jsx)(i.Z, {}),
            (0, t.jsxs)(l.Z, {
              children: [
                (0, t.jsx)(c.Z, {
                  title: "React Popovers",
                  description:
                    "Material Tailwind popovers are a small overlay of content that is used to demonstrate secondary information of any component when it is clicked by a user.",
                }),
                (0, t.jsx)(u.Z, { title: "Popover Left" }),
                (0, t.jsx)(y, {
                  copyText: "Modal" === r ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return o(e ? "Modal" : "");
                  },
                  placement: "left",
                }),
                (0, t.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, t.jsx)(u.Z, { title: "Popover Right" }),
                (0, t.jsx)(y, {
                  copyText: "Modal" === r ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return o(e ? "Modal" : "");
                  },
                  placement: "right",
                }),
                (0, t.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, t.jsx)(u.Z, { title: "Popover Top" }),
                (0, t.jsx)(y, {
                  copyText: "Modal" === r ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return o(e ? "Modal" : "");
                  },
                  placement: "top",
                }),
                (0, t.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, t.jsx)(u.Z, { title: "Popover Bottom" }),
                (0, t.jsx)(y, {
                  copyText: "Modal" === r ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return o(e ? "Modal" : "");
                  },
                  placement: "bottom",
                }),
              ],
            }),
          ],
        });
      }
    },
    62979: function (e, r, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/popovers",
        function () {
          return o(87809);
        },
      ]);
    },
    74300: function (e, r, o) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.CopyToClipboard = void 0);
      var t = a(o(67294)),
        n = a(o(20640));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e) {
        return (l =
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
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            o.push.apply(o, t);
        }
        return o;
      }
      function c(e, r) {
        if (null == e) return {};
        var o,
          t,
          n = (function (e, r) {
            if (null == e) return {};
            var o,
              t,
              n = {},
              a = Object.keys(e);
            for (t = 0; t < a.length; t++)
              (o = a[t]), r.indexOf(o) >= 0 || (n[o] = e[o]);
            return n;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (t = 0; t < a.length; t++)
            (o = a[t]),
              r.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (n[o] = e[o]));
        }
        return n;
      }
      function u(e, r) {
        if (!(e instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, r) {
        for (var o = 0; o < r.length; o++) {
          var t = r[o];
          (t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            "value" in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t);
        }
      }
      function d(e, r) {
        return !r || ("object" !== l(r) && "function" !== typeof r) ? s(e) : r;
      }
      function g(e) {
        return (g = Object.setPrototypeOf
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
      function b(e, r) {
        return (b =
          Object.setPrototypeOf ||
          function (e, r) {
            return (e.__proto__ = r), e;
          })(e, r);
      }
      function h(e, r, o) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = o),
          e
        );
      }
      var f = (function (e) {
        function r() {
          var e, o;
          u(this, r);
          for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++)
            l[i] = arguments[i];
          return (
            h(
              s((o = d(this, (e = g(r)).call.apply(e, [this].concat(l))))),
              "onClick",
              function (e) {
                var r = o.props,
                  a = r.text,
                  l = r.onCopy,
                  i = r.children,
                  c = r.options,
                  u = t.default.Children.only(i),
                  p = (0, n.default)(a, c);
                l && l(a, p),
                  u &&
                    u.props &&
                    "function" === typeof u.props.onClick &&
                    u.props.onClick(e);
              }
            ),
            o
          );
        }
        var o, a, l;
        return (
          (function (e, r) {
            if ("function" !== typeof r && null !== r)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(r && r.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              r && b(e, r);
          })(r, e),
          (o = r),
          (a = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  r = (e.text, e.onCopy, e.options, e.children),
                  o = c(e, ["text", "onCopy", "options", "children"]),
                  n = t.default.Children.only(r);
                return t.default.cloneElement(
                  n,
                  (function (e) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = null != arguments[r] ? arguments[r] : {};
                      r % 2
                        ? i(o, !0).forEach(function (r) {
                            h(e, r, o[r]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(o)
                          )
                        : i(o).forEach(function (r) {
                            Object.defineProperty(
                              e,
                              r,
                              Object.getOwnPropertyDescriptor(o, r)
                            );
                          });
                    }
                    return e;
                  })({}, o, { onClick: this.onClick })
                );
              },
            },
          ]) && p(o.prototype, a),
          l && p(o, l),
          r
        );
      })(t.default.PureComponent);
      (r.CopyToClipboard = f),
        h(f, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, r, o) {
      "use strict";
      var t = o(74300).CopyToClipboard;
      (t.CopyToClipboard = t), (e.exports = t);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var r = document.activeElement, o = [], t = 0;
          t < e.rangeCount;
          t++
        )
          o.push(e.getRangeAt(t));
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
                o.forEach(function (r) {
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
      return (r = 62979), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
