(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6375],
  {
    46445: function (e, r, l) {
      "use strict";
      var o = l(26265),
        t = l(85893),
        n = l(59999),
        a = l(38347),
        i = l(67294),
        g = l(39931),
        d = l.n(g);
      function b(e, r) {
        var l = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            l.push.apply(l, o);
        }
        return l;
      }
      function h(e) {
        for (var r = 1; r < arguments.length; r++) {
          var l = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? b(Object(l), !0).forEach(function (r) {
                (0, o.Z)(e, r, l[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
            : b(Object(l)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(l, r)
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
        u = {
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
        c = {
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
        v = {
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
        w = {
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
        x = {
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
        f = {
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
          var l,
            o,
            i = e.children,
            g = e.color,
            b = e.buttonType,
            O = e.size,
            G = e.rounded,
            P = e.iconOnly,
            Z = e.block,
            B = e.ripple,
            N = e.className,
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
            M = new (d())(),
            _ = [],
            E = [
              Z && "w-full",
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
              (G = G ? "rounded-full" : "rounded-lg"),
            ],
            F = ["text-white", p[g], s[g], u[g], c[g], v[g], y[g]],
            I = [
              "bg-transparent",
              "border",
              "border-solid",
              "shadow-none",
              m[g],
              w[g],
              x[g],
              f[g],
              j[g],
              x[g],
              k[g],
            ],
            S = ["bg-transparent", m[g], x[g], j[g], x[g], k[g]],
            L = [].concat(E, [
              P ? "w-8 h-8 p-0 grid place-items-center" : "py-1.5 px-4",
              "text-xs",
              "leading-normal",
            ]),
            V = [].concat(E, [
              P ? "w-10 h-10 p-0 grid place-items-center" : "py-2.5 px-6",
              "text-xs",
              "leading-normal",
            ]),
            z = [].concat(E, [
              P ? "w-12 h-12 p-0 grid place-items-center" : "py-3 px-7",
              "text-sm",
              "leading-relaxed",
            ]);
          if ("sm" === O) (l = _).push.apply(l, (0, n.Z)(L));
          else if ("lg" === O) {
            var D;
            (D = _).push.apply(D, (0, n.Z)(z));
          } else {
            var q;
            (q = _).push.apply(q, (0, n.Z)(V));
          }
          if ("outline" === b) (o = _).push.apply(o, I);
          else if ("link" === b) {
            var A;
            (A = _).push.apply(A, S);
          } else {
            var C;
            (C = _).push.apply(C, F);
          }
          return (
            (_ = _.join(" ")),
            (0, t.jsx)(
              "button",
              h(
                h({}, T),
                {},
                {
                  className: "".concat(_, " ").concat(N),
                  ref: r,
                  onMouseUp: function (e) {
                    "dark" === B && M.create(e, "dark"),
                      "light" === B && M.create(e, "light");
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
    81957: function (e, r, l) {
      "use strict";
      l.d(r, {
        Z: function () {
          return t;
        },
      });
      var o = l(85893);
      l(67294);
      function t(e) {
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
    27130: function (e, r, l) {
      "use strict";
      l.r(r),
        l.d(r, {
          default: function () {
            return p;
          },
        });
      var o = l(85893),
        t = (l(67294), l(29041)),
        n = l(82830),
        a = l(68286),
        i = l(46577),
        g = l(84283),
        d = l(5981),
        b = l(81957),
        h = l(46445);
      function p() {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(t.Z, { title: "Quick Start Guide" }),
            (0, o.jsx)(a.Z, {}),
            (0, o.jsxs)(n.Z, {
              children: [
                (0, o.jsx)(d.Z, {
                  title: "Quick Start",
                  description:
                    "Learn how to use Material Tailwind components from this documentation to quickly and easily create elegant and flexible pages.",
                }),
                (0, o.jsx)(d.Z, { title: "Installation" }),
                (0, o.jsx)(b.Z, {
                  title: "NPM",
                  description: (0, o.jsx)(o.Fragment, {
                    children: "Install Material Tailwind via NPM",
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "mb-12",
                  children: (0, o.jsx)(i.Z, {
                    language: "html",
                    style: g.Vg,
                    children: "npm i -E @material-tailwind/react",
                  }),
                }),
                (0, o.jsx)(b.Z, {
                  title: "Yarn",
                  description: (0, o.jsx)(o.Fragment, {
                    children: "Install Material Tailwind via Yarn",
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "mb-12",
                  children: (0, o.jsx)(i.Z, {
                    language: "html",
                    style: g.Vg,
                    children: "yarn add @material-tailwind/react -E",
                  }),
                }),
                (0, o.jsx)(b.Z, {
                  title: "Import Material Tailwind Style Sheet",
                  description: (0, o.jsxs)(o.Fragment, {
                    children: [
                      "Import the",
                      " ",
                      (0, o.jsx)("code", {
                        className: "text-light-blue-500",
                        children: "tailwind.css",
                      }),
                      " ",
                      "into your",
                      " ",
                      (0, o.jsx)("code", {
                        className: "text-light-blue-500",
                        children: "app.js",
                      }),
                      " ",
                      "file. Make sure to import the",
                      " ",
                      (0, o.jsx)("code", {
                        className: "text-light-blue-500",
                        children: "tailwind.css",
                      }),
                      " ",
                      "style sheet after all other style sheets.",
                    ],
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "mb-12",
                  children: (0, o.jsx)(i.Z, {
                    language: "jsx",
                    style: g.Vg,
                    children: 'import "@material-tailwind/react/tailwind.css";',
                  }),
                }),
                (0, o.jsx)(b.Z, {
                  title: "Link Material Icons Fonts to your project",
                  description: (0, o.jsx)(o.Fragment, {
                    children:
                      "Add a link for the material icons fonts inside the head of your project, so to use the material icons with material tailwind components. You can also use font awesome font family for the project just add a link for it inside the head of your project.",
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "mb-12",
                  children: (0, o.jsx)(i.Z, {
                    language: "jsx",
                    style: g.Vg,
                    children:
                      '// Material Icons Link\n<link\n    href="https://fonts.googleapis.com/icon?family=Material+Icons"\n    rel="stylesheet"\n/>\n\n// Font Awesome Link\n<link\n    rel="stylesheet"\n    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"\n    integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="\n    crossOrigin="anonymous"\n/>',
                  }),
                }),
                (0, o.jsx)(b.Z, {
                  title: "Example",
                  description: (0, o.jsx)(o.Fragment, {
                    children: "Import the components you need",
                  }),
                }),
                (0, o.jsxs)("div", {
                  className:
                    "border border-solid border-gray-300 rounded-lg my-4 p-4 pt-6 relative",
                  children: [
                    (0, o.jsx)("div", {
                      className: "pb-4",
                      children: (0, o.jsx)(h.Z, {
                        color: "lightBlue",
                        ripple: "light",
                        children: "Button",
                      }),
                    }),
                    (0, o.jsxs)(i.Z, {
                      language: "jsx",
                      style: g.Vg,
                      children: [
                        'import React from "react";\nimport Button from "@material-tailwind/react/Button";\n\nexport default function Example() {\n    return (\n        <Button color="lightBlue" ripple="light">Button</Button>\n    )\n}',
                        ";",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    41768: function (e, r, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/quick-start",
        function () {
          return l(27130);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 1e3, 8969, 8485, 5592, 2888, 179], function () {
      return (r = 41768), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
