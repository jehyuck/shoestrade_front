(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8262],
  {
    20640: function (e, t, n) {
      "use strict";
      var r = n(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          i,
          l,
          a,
          u,
          c,
          p = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((l = r()),
            (a = document.createRange()),
            (u = document.getSelection()),
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
            c.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), t.format))
                if (
                  (r.preventDefault(), "undefined" === typeof r.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = o[t.format] || o.default;
                  window.clipboardData.setData(i, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(c),
            a.selectNodeContents(c),
            u.addRange(a),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          p = !0;
        } catch (s) {
          n && console.error("unable to copy using execCommand: ", s),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (p = !0);
          } catch (s) {
            n && console.error("unable to copy using clipboardData: ", s),
              n && console.error("falling back to prompt"),
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
          u &&
            ("function" == typeof u.removeRange
              ? u.removeRange(a)
              : u.removeAllRanges()),
            c && document.body.removeChild(c),
            l();
        }
        return p;
      };
    },
    53085: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(85893),
        o = (n(67294), n(46577)),
        i = n(84283),
        l = n(74855),
        a = [
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
        u = [
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
          p = (e.onFrameworkClick, e.onCopy),
          s = e.codeToShow,
          d = e.copyText;
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
                      children: a.map(function (e, t) {
                        return (0, r.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  n === u[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              c(u[t]), p(!1);
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
                  (0, r.jsx)(l.CopyToClipboard, {
                    text: s,
                    onCopy: function () {
                      return p(!0);
                    },
                    children: (0, r.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: d,
                    }),
                  }),
                  (0, r.jsx)(o.Z, {
                    language: "jsx",
                    style: i.Vg,
                    children: s,
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
    50992: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(85893),
        o = n(26265),
        i = n(59999),
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
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
        p = {
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
        s = {
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
          n,
          o,
          a,
          d,
          m,
          b = e.placeholder,
          y = e.color,
          g = e.size,
          f = e.outline,
          h = e.error,
          x = e.success,
          j = (0, l.Z)(e, [
            "placeholder",
            "color",
            "size",
            "outline",
            "error",
            "success",
          ]),
          w = [],
          v = ["w-full", "relative"];
        h
          ? ((o = s.red), (a = c.red), (d = p.red), (m = s.red))
          : x
          ? ((o = s.green), (a = c.green), (d = p.green), (m = s.green))
          : ((o = "border-gray-300"), (a = c[y]), (d = p[y]), (m = s[y]));
        var O,
          C = [
            "text-gray-400",
            "absolute",
            "left-0",
            "".concat(f ? "-top-1.5" : "-top-0.5"),
            "w-full",
            "h-full",
            "".concat(
              !f && "border border-t-0 border-l-0 border-r-0 border-b-1"
            ),
            o,
            "pointer-events-none",
            "".concat(f && "flex"),
            "".concat(f && "sm" === g && "text-sm"),
            "".concat(f && "leading-10"),
            "".concat(f && "transition-all"),
            "".concat(f && "duration-300"),
          ],
          P = [
            "w-full",
            "h-full",
            "text-gray-800",
            "leading-normal",
            "shadow-none",
            "outline-none",
            "focus:outline-none",
            "focus:ring-0",
            "focus:text-gray-800",
          ],
          I = [].concat(P, [
            "".concat(f ? "px-3" : "px-0"),
            "".concat(f && "pt-1.5 pb-0.5"),
            "text-sm",
          ]),
          k = [].concat(P, [
            "".concat(f ? "px-3" : "px-0"),
            "".concat(f && "pt-2.5 pb-1.5"),
          ]),
          N = [].concat(P, [
            "".concat(f ? "px-3" : "px-0"),
            "".concat(f && "pt-3.5 pb-2.5"),
          ]),
          S = [a, "mt-input", "bg-transparent", "border-none"],
          Z = [
            d,
            o,
            "mt-input-outline",
            "bg-transparent",
            "border",
            "border-1",
            "border-gray-300",
            "rounded-lg",
            "focus:border-2",
            "focus:".concat(m),
          ];
        if ("sm" === g) v.push("h-9"), (O = w).push.apply(O, (0, i.Z)(I));
        else if ("lg" === g) {
          var T;
          v.push("h-12"), (T = w).push.apply(T, (0, i.Z)(N));
        } else {
          var B;
          v.push("h-11"), (B = w).push.apply(B, (0, i.Z)(k));
        }
        return (
          f ? (t = w).push.apply(t, Z) : (n = w).push.apply(n, S),
          (v = v.join(" ")),
          (C = C.join(" ")),
          (w = w.join(" ")),
          (0, r.jsxs)("div", {
            className: v,
            children: [
              (0, r.jsx)(
                "input",
                u(
                  u({}, j),
                  {},
                  {
                    placeholder: " ",
                    className: ""
                      .concat(w, " ")
                      .concat(h && "mt-input-outline-error", " ")
                      .concat(x && "mt-input-outline-success"),
                  }
                )
              ),
              (0, r.jsx)("label", {
                className: C,
                children: f
                  ? b
                  : (0, r.jsx)("span", {
                      className: "".concat(
                        "sm" === g && "text-sm",
                        " absolute top-1/4 transition-all duration-300"
                      ),
                      children: b,
                    }),
              }),
              h &&
                (0, r.jsx)("span", {
                  className: "block mt-1 text-xs text-red-500",
                  children: h,
                }),
              x &&
                (0, r.jsx)("span", {
                  className: "block mt-1 text-xs text-green-500",
                  children: x,
                }),
            ],
          })
        );
      }
      d.defaultProps = { color: "lightBlue", size: "regular", outline: !1 };
    },
    53584: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(85893),
        o = n(26265),
        i = n(59999),
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
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
        p = {
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
        s = {
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
          n,
          o,
          a,
          d,
          m,
          b,
          y,
          g = e.placeholder,
          f = e.color,
          h = e.size,
          x = e.outline,
          j = e.error,
          w = e.success,
          v = e.iconFamily,
          O = e.iconName,
          C = (0, l.Z)(e, [
            "placeholder",
            "color",
            "size",
            "outline",
            "error",
            "success",
            "iconFamily",
            "iconName",
          ]),
          P = [],
          I = ["w-full", "relative"];
        j
          ? ((d = s.red), (m = c.red), (b = p.red), (y = s.red))
          : w
          ? ((d = s.green), (m = c.green), (b = p.green), (y = s.green))
          : ((d = "border-gray-300"), (m = c[f]), (b = p[f]), (y = s[f]));
        var k,
          N = [
            "text-gray-500",
            "absolute",
            "left-0",
            "".concat(x ? "-top-1.5" : "-top-0.5"),
            "w-full",
            "h-full",
            d,
            "pointer-events-none",
            "".concat(
              !x && "border border-t-0 border-l-0 border-r-0 border-b-1"
            ),
            "".concat(x && "flex"),
            "".concat(x && "sm" === h && "text-sm"),
            "".concat(x && "leading-10"),
            "".concat(x && "transition-all"),
            "".concat(x && "duration-300"),
          ],
          S = [
            "w-full",
            "h-full",
            "text-gray-800",
            "leading-normal",
            "shadow-none",
            "outline-none",
            "focus:outline-none",
            "focus:ring-0",
            "focus:text-gray-800",
          ],
          Z = [].concat(S, [
            "".concat(x ? "pl-2 pr-7" : "pl-0 pr-6"),
            "".concat(x && "pt-1.5 pb-0.5"),
            "text-sm",
          ]),
          T = [].concat(S, [
            "".concat(x ? "pl-3 pr-9" : "pl-0 pr-7"),
            "".concat(x && "pt-2.5 pb-1.5"),
          ]),
          B = [].concat(S, [
            "".concat(x ? "pl-3 pr-9" : "pl-0 pr-7"),
            "".concat(x && "pt-3.5 pb-2.5"),
          ]),
          D = [m, "mt-input", "bg-transparent", "border", "border-none"],
          E = [
            b,
            d,
            "mt-input-outline",
            "bg-transparent",
            "border",
            "border-1",
            "border-gray-300",
            "rounded-lg",
            "focus:border-2",
            "focus:".concat(y),
          ];
        if ("sm" === h)
          I.push("h-9"), (k = P).push.apply(k, (0, i.Z)(Z)), (a = "text-lg");
        else if ("lg" === h) {
          var z;
          I.push("h-12"), (z = P).push.apply(z, (0, i.Z)(B)), (a = "text-xl");
        } else {
          var _;
          I.push("h-11"), (_ = P).push.apply(_, (0, i.Z)(T)), (a = "text-2xl");
        }
        return (
          x ? (t = P).push.apply(t, E) : (n = P).push.apply(n, D),
          (I = I.join(" ")),
          (N = N.join(" ")),
          (P = P.join(" ")),
          "material-icons" === v
            ? (o = (0, r.jsx)(
                "span",
                u(
                  u({}, C),
                  {},
                  {
                    className: ""
                      .concat(
                        v,
                        " p-0 text-gray-600 text-opacity-60 border-none absolute top-1/2 "
                      )
                      .concat(
                        x ? ("sm" === h ? "right-2" : "right-3") : "right-0",
                        " transform -translate-y-1/2 "
                      )
                      .concat(a),
                    children: O,
                  }
                )
              ))
            : "font-awesome" === v &&
              (o = (0, r.jsx)(
                "i",
                u(
                  u({}, C),
                  {},
                  {
                    className: "fas "
                      .concat(
                        O,
                        " text-gray-600 text-opacity-60 border-none absolute top-1/2 "
                      )
                      .concat(
                        x ? ("sm" === h ? "right-2" : "right-3") : "right-0",
                        " transform -translate-y-1/2 "
                      )
                      .concat(a),
                  }
                )
              )),
          (0, r.jsxs)("div", {
            className: I,
            children: [
              o,
              (0, r.jsx)(
                "input",
                u(
                  u({}, C),
                  {},
                  {
                    placeholder: " ",
                    className: ""
                      .concat(P, " ")
                      .concat(j && "mt-input-outline-error", " ")
                      .concat(w && "mt-input-outline-success"),
                  }
                )
              ),
              (0, r.jsx)("label", {
                className: N,
                children: x
                  ? g
                  : (0, r.jsx)("span", {
                      className: "".concat(
                        "sm" === h && "text-sm",
                        " absolute top-1/4 transition-all duration-300"
                      ),
                      children: g,
                    }),
              }),
              j &&
                (0, r.jsx)("span", {
                  className: "block mt-1 text-xs text-red-500",
                  children: j,
                }),
            ],
          })
        );
      }
      d.defaultProps = {
        color: "lightBlue",
        size: "regular",
        outline: !1,
        iconFamily: "material-icons",
      };
    },
    46500: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var r = n(85893),
        o = n(67294),
        i = n(29041),
        l = n(82830),
        a = n(68286),
        u = n(5981),
        c = n(81957),
        p = n(26265),
        s = n(38347),
        d = n(53085),
        m = n(50992);
      function b(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                (0, p.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function g(e) {
        var t = e.copyText,
          n = e.onCopy,
          i = e.placeholder,
          l = e.size,
          a = e.outline,
          u = e.errorMessage,
          c = e.successMessage,
          p = (0, s.Z)(e, [
            "copyText",
            "onCopy",
            "placeholder",
            "size",
            "outline",
            "errorMessage",
            "successMessage",
          ]),
          b = (0, o.useState)("lightBlue"),
          g = b[0],
          f = b[1],
          h = (0, o.useState)("react"),
          x = h[0],
          j = h[1],
          w =
            'import React from "react";\nimport Input from "@material-tailwind/react/Input";\n\nexport default function Input() {\n    return (\n        <Input\n            type="text"\n            color="'
              .concat(g, '"\n            size="')
              .concat(l, '"\n            outline={')
              .concat(a, '}\n            placeholder="')
              .concat(i, '"')
              .concat(u ? '\n            error="'.concat(u, '"') : "")
              .concat(
                c ? '\n            success="'.concat(c, '"') : "",
                "\n        />\n    )\n}"
              );
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(d.Z, {
            copyText: t,
            onCopy: n,
            activeColor: g,
            activeFramework: x,
            codeToShow: w,
            onColorClick: function (e) {
              return f(e);
            },
            onFrameworkClick: function (e) {
              return j(e);
            },
            children: (0, r.jsx)("div", {
              className: "w-72 mx-auto ".concat(u || c ? "mb-10" : ""),
              children: (0, r.jsx)(
                m.Z,
                y(
                  {
                    type: "text",
                    color: g,
                    size: l,
                    outline: a,
                    placeholder: i,
                  },
                  p
                )
              ),
            }),
          }),
        });
      }
      var f = n(53584);
      function h(e) {
        var t = e.copyText,
          n = e.onCopy,
          i = e.placeholder,
          l = e.size,
          a = e.outline,
          u = (0, o.useState)("lightBlue"),
          c = u[0],
          p = u[1],
          s = (0, o.useState)("react"),
          m = s[0],
          b = s[1],
          y =
            'import React from "react";\nimport InputIcon from "@material-tailwind/react/InputIcon";\n\nexport default function Input() {\n    return (\n        <InputIcon\n            type="text"\n            color="'
              .concat(c, '"\n            size="')
              .concat(l, '"\n            outline={')
              .concat(a, '}\n            placeholder="')
              .concat(
                i,
                '"\n            iconFamily="material-icons"\n            iconName="person"\n        />\n    )\n}'
              );
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(d.Z, {
            copyText: t,
            onCopy: n,
            activeColor: c,
            activeFramework: m,
            codeToShow: y,
            onColorClick: function (e) {
              return p(e);
            },
            onFrameworkClick: function (e) {
              return b(e);
            },
            children: (0, r.jsx)("div", {
              className: "w-72 mx-auto",
              children: (0, r.jsx)(f.Z, {
                type: "text",
                color: c,
                size: l,
                outline: a,
                placeholder: i,
                iconFamily: "material-icons",
                iconName: "person",
              }),
            }),
          }),
        });
      }
      function x() {
        var e = (0, o.useState)(null),
          t = e[0],
          n = e[1];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.Z, { title: "React Inputs" }),
            (0, r.jsx)(a.Z, {}),
            (0, r.jsxs)(l.Z, {
              children: [
                (0, r.jsx)(u.Z, {
                  title: "React Inputs",
                  description:
                    "Easily create inputs with different status and sizes using Material Tailwind inputs",
                }),
                (0, r.jsx)(c.Z, { title: "Input" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Input",
                  size: "regular",
                  outline: !1,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Outline Input" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Input",
                  size: "regular",
                  outline: !0,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Small Input" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Small Input",
                  size: "sm",
                  outline: !1,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Large Input" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Large Input",
                  size: "lg",
                  outline: !1,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Small Outline Input" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Small Outline Input",
                  size: "sm",
                  outline: !0,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Large Outline Input" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Large Outline Input",
                  size: "lg",
                  outline: !0,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Input with Icon" }),
                (0, r.jsx)(h, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Input with Icon",
                  size: "regular",
                  outline: !1,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Outline Input with Icon" }),
                (0, r.jsx)(h, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Input with Icon",
                  size: "regular",
                  outline: !0,
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Input with Error" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Input with Error",
                  size: "Regular",
                  outline: !1,
                  errorMessage: "Its an error",
                  error: "Its an error",
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Outline Input with Error" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Input with Error",
                  size: "Regular",
                  outline: !0,
                  errorMessage: "Its an error",
                  error: "Its an error",
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Input with Success" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Input with Success",
                  size: "Regular",
                  outline: !1,
                  successMessage: "Its a success",
                  success: "Its a success",
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(c.Z, { title: "Outline Input with Success" }),
                (0, r.jsx)(g, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  placeholder: "Outline Input with Success",
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
    95299: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/inputs",
        function () {
          return n(46500);
        },
      ]);
    },
    74300: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var r = i(n(67294)),
        o = i(n(20640));
      function i(e) {
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
      function u(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e, t) {
        return !t || ("object" !== l(t) && "function" !== typeof t) ? m(e) : t;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e) {
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
      function y(e, t, n) {
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
          for (var i = arguments.length, l = new Array(i), a = 0; a < i; a++)
            l[a] = arguments[a];
          return (
            y(
              m((n = s(this, (e = d(t)).call.apply(e, [this].concat(l))))),
              "onClick",
              function (e) {
                var t = n.props,
                  i = t.text,
                  l = t.onCopy,
                  a = t.children,
                  u = t.options,
                  c = r.default.Children.only(a),
                  p = (0, o.default)(i, u);
                l && l(i, p),
                  c &&
                    c.props &&
                    "function" === typeof c.props.onClick &&
                    c.props.onClick(e);
              }
            ),
            n
          );
        }
        var n, i, l;
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
          (i = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = u(e, ["text", "onCopy", "options", "children"]),
                  o = r.default.Children.only(t);
                return r.default.cloneElement(
                  o,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? a(n, !0).forEach(function (t) {
                            y(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : a(n).forEach(function (t) {
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
          ]) && p(n.prototype, i),
          l && p(n, l),
          t
        );
      })(r.default.PureComponent);
      (t.CopyToClipboard = g),
        y(g, "defaultProps", { onCopy: void 0, options: void 0 });
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
      return (t = 95299), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
