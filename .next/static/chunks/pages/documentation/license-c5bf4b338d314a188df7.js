(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [799],
  {
    84166: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(26265),
        i = r(85893),
        o = r(38347);
      r(67294);
      function a(e, t) {
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
        white: "text-gray-200",
        blueGray: "text-blue-gray-700",
        gray: "text-gray-700",
        brown: "text-brown-700",
        deepOrange: "text-deep-orange-700",
        orange: "text-orange-700",
        amber: "text-amber-700",
        yellow: "text-yellow-600",
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
      function s(e) {
        var t = e.children,
          r = e.color,
          n = (0, o.Z)(e, ["children", "color"]);
        return (0, i.jsx)(
          "p",
          l(
            l({}, n),
            {},
            {
              className: "".concat(
                c[r],
                " text-lg font-light leading-relaxed mt-6 mb-4"
              ),
              children: t,
            }
          )
        );
      }
      s.defaultProps = { color: "blueGray" };
    },
    47874: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        });
      var n = r(85893),
        i = (r(67294), r(29041)),
        o = r(82830),
        a = r(68286),
        l = r(5981),
        c = r(84166);
      function s() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.Z, { title: "License" }),
            (0, n.jsx)(a.Z, {}),
            (0, n.jsxs)(o.Z, {
              children: [
                (0, n.jsx)(l.Z, {
                  title: "License",
                  description:
                    "Learn more about the Material Tailwind license.",
                }),
                (0, n.jsx)(c.Z, { color: "gray", children: "MIT License" }),
                (0, n.jsxs)(c.Z, {
                  color: "gray",
                  children: [
                    "Copyright \xa9 2021 Material Tailwind by",
                    " ",
                    (0, n.jsx)("a", {
                      className: "text-light-blue-500",
                      href: "https://creative-tim.com?ref=material-tailwind",
                      children: "Creative Tim",
                    }),
                  ],
                }),
                (0, n.jsx)("p", {
                  className: "text-gray-700 font-light mb-5 mt-6",
                  children:
                    "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \u201cSoftware\u201d), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:",
                }),
                (0, n.jsx)("p", {
                  className: "text-gray-700 font-light mb-5",
                  children:
                    "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",
                }),
                (0, n.jsx)("p", {
                  className: "text-gray-700 font-light",
                  children:
                    "THE SOFTWARE IS PROVIDED \u201cAS IS\u201d, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
                }),
              ],
            }),
          ],
        });
      }
    },
    79841: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/license",
        function () {
          return r(47874);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 1e3, 8485, 5592, 2888, 179], function () {
      return (t = 79841), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
