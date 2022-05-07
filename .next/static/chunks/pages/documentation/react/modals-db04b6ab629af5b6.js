(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9397],
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
          d = !1;
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
          d = !0;
        } catch (s) {
          t && console.error("unable to copy using execCommand: ", s),
            t && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(r.format || "text", e),
              r.onCopy && r.onCopy(window.clipboardData),
              (d = !0);
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
        return d;
      };
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
        return (
          (a =
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
                }),
          a(e)
        );
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
      function d(e, r) {
        for (var t = 0; t < r.length; t++) {
          var o = r[t];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function s(e, r) {
        return !r || ("object" !== a(r) && "function" !== typeof r) ? p(e) : r;
      }
      function g(e) {
        return (
          (g = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          g(e)
        );
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e, r) {
        return (
          (b =
            Object.setPrototypeOf ||
            function (e, r) {
              return (e.__proto__ = r), e;
            }),
          b(e, r)
        );
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
          u(this, r);
          for (var l = arguments.length, a = new Array(l), i = 0; i < l; i++)
            a[i] = arguments[i];
          return (
            h(
              p((t = s(this, (e = g(r)).call.apply(e, [this].concat(a))))),
              "onClick",
              function (e) {
                var r = t.props,
                  l = r.text,
                  a = r.onCopy,
                  i = r.children,
                  c = r.options,
                  u = o.default.Children.only(i),
                  d = (0, n.default)(l, c);
                a && a(l, d),
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
              r && b(e, r);
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
          ]),
          l && d(t.prototype, l),
          a && d(t, a),
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
    73716: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/modals",
        function () {
          return t(14318);
        },
      ]);
    },
    61398: function (e, r, t) {
      "use strict";
      var o = t(85893),
        n = t(67294),
        l = t(45697),
        a = t.n(l),
        i = t(39931),
        c = t.n(i);
      function u(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, o = new Array(r); t < r; t++) o[t] = e[t];
        return o;
      }
      function d(e, r, t) {
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
      function s(e, r) {
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
      function g(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return u(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, r) {
            if (!e) return;
            if ("string" === typeof e) return u(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return u(e, r);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
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
        b = {
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
        h = {
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
        y = {
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
        j = {
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
        k = {
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
        C = {
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
        O = (0, n.forwardRef)(function (e, r) {
          var t,
            n,
            l = e.children,
            a = e.color,
            i = e.buttonType,
            u = e.size,
            O = e.rounded,
            S = e.iconOnly,
            T = e.block,
            M = e.ripple,
            P = e.className,
            N = s(e, [
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
            R = new (c())(),
            B = [],
            G = [
              T && "w-full",
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
            E = ["text-white", p[a], b[a], h[a], y[a], f[a], m[a]],
            Z = [
              "bg-transparent",
              "border",
              "border-solid",
              "shadow-none",
              v[a],
              w[a],
              x[a],
              j[a],
              k[a],
              x[a],
              C[a],
            ],
            _ = ["bg-transparent", v[a], x[a], k[a], x[a], C[a]],
            z = g(G).concat([
              S ? "w-8 h-8 p-0 grid place-items-center" : "py-1.5 px-4",
              "text-xs",
              "leading-normal",
            ]),
            A = g(G).concat([
              S ? "w-10 h-10 p-0 grid place-items-center" : "py-2.5 px-6",
              "text-xs",
              "leading-normal",
            ]),
            D = g(G).concat([
              S ? "w-12 h-12 p-0 grid place-items-center" : "py-3 px-7",
              "text-sm",
              "leading-relaxed",
            ]);
          if ("sm" === u) (t = B).push.apply(t, g(z));
          else if ("lg" === u) {
            var I;
            (I = B).push.apply(I, g(D));
          } else {
            var q;
            (q = B).push.apply(q, g(A));
          }
          if ("outline" === i) (n = B).push.apply(n, g(Z));
          else if ("link" === i) {
            var F;
            (F = B).push.apply(F, g(_));
          } else {
            var U;
            (U = B).push.apply(U, g(E));
          }
          return (
            (B = B.join(" ")),
            (0, o.jsx)(
              "button",
              (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = null != arguments[r] ? arguments[r] : {},
                    o = Object.keys(t);
                  "function" === typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                      Object.getOwnPropertySymbols(t).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      })
                    )),
                    o.forEach(function (r) {
                      d(e, r, t[r]);
                    });
                }
                return e;
              })({}, N, {
                className: "".concat(B, " ").concat(P),
                ref: r,
                onMouseUp: function (e) {
                  "dark" === M && R.create(e, "dark"),
                    "light" === M && R.create(e, "light");
                },
                children: l,
              })
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
        (O.propTypes = {
          children: a().node.isRequired,
          color: a().string.isRequired,
          buttonType: a().string.isRequired,
          size: a().string.isRequired,
          rounded: a().bool.isRequired,
          block: a().bool.isRequired,
          ripple: a().string,
        }),
        (r.Z = O);
    },
    62332: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return s;
        },
      });
      var o = t(85893),
        n = (t(67294), t(45697)),
        l = t.n(n),
        a = t(73483),
        i = t(84283),
        c = t(74855),
        u = [
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
        d = [
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
        var r = e.children,
          t = e.activeColor,
          n = (e.activeFramework, e.onColorClick),
          l = (e.onFrameworkClick, e.onCopy),
          s = e.codeToShow,
          g = e.copyText;
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
                      children: u.map(function (e, r) {
                        return (0, o.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  t === d[r]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              n(d[r]), l(!1);
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
                  (0, o.jsx)(c.CopyToClipboard, {
                    text: s,
                    onCopy: function () {
                      return l(!0);
                    },
                    children: (0, o.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: g,
                    }),
                  }),
                  (0, o.jsx)(a.Z, {
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
      s.propTypes = {
        copyText: l().string.isRequired,
        onCopy: l().func.isRequired,
        activeColor: l().oneOf([
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
          !1,
        ]),
        activeFramework: l().oneOf(["html", "react", "vue", "angular"]),
        codeToShow: l().string.isRequired,
        children: l().node.isRequired,
        onColorClick: l().func,
        onFrameworkClick: l().func,
      };
    },
    79827: function (e, r, t) {
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
    28754: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return a;
        },
      });
      var o = t(85893),
        n = (t(67294), t(45697)),
        l = t.n(n);
      function a(e) {
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
      a.propTypes = {
        title: l().oneOfType([l().string, l().node]),
        description: l().oneOfType([l().string, l().node]),
      };
    },
    90420: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return a;
        },
      });
      var o = t(85893),
        n = (t(67294), t(45697)),
        l = t.n(n);
      function a(e) {
        var r,
          t = e.children,
          n = e.size,
          l = e.active,
          a = e.toggler;
        return (
          (r =
            "sm" === n ? "max-w-sm" : "lg" === n ? "max-w-6xl" : "max-w-3xl"),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", {
                className: "".concat(
                  l
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none",
                  " grid place-items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500"
                ),
                onClick: a,
                children: (0, o.jsx)("div", {
                  className: "transform "
                    .concat(
                      l
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-10",
                      " w-auto my-6 mx-auto "
                    )
                    .concat(r, " transition-all duration-500"),
                  children: (0, o.jsx)("div", {
                    className: "border-0 p-6 ".concat(
                      "lg" === n
                        ? "rounded-xl shadow-xl"
                        : "rounded-lg shadow-lg",
                      " flex flex-col w-full bg-white outline-none focus:outline-none"
                    ),
                    onClick: function (e) {
                      return e.stopPropagation();
                    },
                    children: t,
                  }),
                }),
              }),
              (0, o.jsx)("div", {
                className: "".concat(
                  l
                    ? "opacity-25 pointer-events-auto"
                    : "opacity-0 pointer-events-none",
                  " fixed inset-0 z-40 bg-black transition-all duration-500"
                ),
              }),
            ],
          })
        );
      }
      (a.defaultProps = { size: "regular" }),
        (a.propTypes = {
          children: l().node.isRequired,
          size: l().string.isRequired,
          active: l().bool.isRequired,
          toggler: l().func.isRequired,
        });
    },
    88770: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return a;
        },
      });
      var o = t(85893),
        n = (t(67294), t(45697)),
        l = t.n(n);
      function a(e) {
        var r = e.children;
        return (0, o.jsx)("div", {
          className: "relative flex-auto mb-6",
          children: r,
        });
      }
      a.propTypes = { children: l().node.isRequired };
    },
    76676: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return a;
        },
      });
      var o = t(85893),
        n = (t(67294), t(45697)),
        l = t.n(n);
      function a(e) {
        var r = e.children;
        return (0, o.jsx)("div", {
          className: "flex items-center justify-end gap-4",
          children: r,
        });
      }
      a.propTypes = { children: l().node.isRequired };
    },
    11558: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return a;
        },
      });
      var o = t(85893),
        n = (t(67294), t(45697)),
        l = t.n(n);
      function a(e) {
        var r = e.children,
          t = e.toggler;
        return (0, o.jsxs)("div", {
          className: "flex items-center justify-between mb-6",
          children: [
            (0, o.jsx)("h5", {
              className: "text-gray-900 text-2xl font-bold mt-0 mb-0",
              children: r,
            }),
            (0, o.jsx)("button", {
              className:
                "p-1 bg-transparent absolute top-2 right-4 text-gray-900 text-3xl leading-none outline-none focus:outline-none",
              onClick: t,
              children: (0, o.jsx)("span", {
                className: "text-gray-900 text-3xl block",
                children: "\xd7",
              }),
            }),
          ],
        });
      }
      a.propTypes = {
        children: l().node.isRequired,
        toggler: l().func.isRequired,
      };
    },
    14318: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return w;
          },
        });
      var o = t(85893),
        n = t(67294),
        l = t(94254),
        a = t(84790),
        i = t(91169),
        c = t(27460),
        u = t(28754),
        d = t(62332),
        s = t(79827),
        g = t(90420),
        p = t(11558),
        b = t(88770),
        h = t(76676),
        y = t(61398);
      function f(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, o = new Array(r); t < r; t++) o[t] = e[t];
        return o;
      }
      function m(e, r) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, r) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var o,
                n,
                l = [],
                a = !0,
                i = !1;
              try {
                for (
                  t = t.call(e);
                  !(a = (o = t.next()).done) &&
                  (l.push(o.value), !r || l.length !== r);
                  a = !0
                );
              } catch (c) {
                (i = !0), (n = c);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (i) throw n;
                }
              }
              return l;
            }
          })(e, r) ||
          (function (e, r) {
            if (!e) return;
            if ("string" === typeof e) return f(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return f(e, r);
          })(e, r) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function v(e) {
        var r = e.copyText,
          t = e.onCopy,
          l = e.size,
          a = e.modalSize,
          i = (0, n.useState)("lightBlue"),
          c = i[0],
          u = i[1],
          f = (0, n.useState)("react")[0],
          v = (0, n.useState)(!1),
          w = v[0],
          x = v[1],
          j = (0, n.useState)(),
          k = j[0],
          C = j[1],
          O = m(n.useState(!1), 2),
          S = O[0],
          T = O[1],
          M = (0, s.Z)(f, x, C),
          P =
            'import React, { useState } from "react";\nimport Modal from "@material-tailwind/react/Modal";\nimport ModalHeader from "@material-tailwind/react/ModalHeader";\nimport ModalBody from "@material-tailwind/react/ModalBody";\nimport ModalFooter from "@material-tailwind/react/ModalFooter";\nimport Button from "@material-tailwind/react/Button";\n\nexport default function Modal() {\n    const [showModal, setShowModal] = React.useState(false);\n\n    return (\n        <>\n            <Button\n                color="'
              .concat(
                c,
                '"\n                type="button"\n                onClick={(e) => setShowModalCode(true)}\n                ripple="light"\n            >\n                Open '
              )
              .concat(
                a,
                ' Modal\n            </Button>\n\n            <Modal size="'
              )
              .concat(
                l,
                '" active={showModal} toggler={() => setShowModal(false)}>\n                <ModalHeader toggler={() => setShowModal(false)}>\n                    Modal Title\n                </ModalHeader>\n                <ModalBody>\n                    <p className="text-base leading-relaxed text-gray-600 font-normal">\n                        I always felt like I could do anything. That\u2019s the main thing people\n                        are controlled by! Thoughts- their perception of themselves! They\'re\n                        slowed down by their perception of themselves. If you\'re taught you\n                        can\u2019t do anything, you won\u2019t do anything. I was taught I could do\n                        everything.\n                    </p>\n                </ModalBody>\n                <ModalFooter>\n                    <Button \n                        color="red"\n                        buttonType="link"\n                        onClick={(e) => setShowModalCode(false)}\n                        ripple="dark"\n                    >\n                        Close\n                    </Button>\n\n                    <Button\n                        color="green"\n                        onClick={(e) => setShowModalCode(false)}\n                        ripple="light"\n                    >\n                        Save Changes\n                    </Button>\n                </ModalFooter>\n            </Modal>\n        </>\n    );\n}'
              );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            w
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return x(!1);
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
                                    return x(!1);
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
                                  k,
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
            (0, o.jsx)(d.Z, {
              copyText: r,
              onCopy: t,
              activeColor: c,
              activeFramework: f,
              codeToShow: P,
              onColorClick: function (e) {
                return u(e);
              },
              onFrameworkClick: M,
              children: (0, o.jsxs)("div", {
                className: "flex justify-center",
                children: [
                  (0, o.jsxs)(y.Z, {
                    color: c,
                    type: "button",
                    onClick: function (e) {
                      return T(!0);
                    },
                    ripple: "light",
                    children: ["Open ", a, " Modal"],
                  }),
                  (0, o.jsxs)(g.Z, {
                    size: l,
                    active: S,
                    toggler: function () {
                      return T(!1);
                    },
                    children: [
                      (0, o.jsx)(p.Z, {
                        toggler: function () {
                          return T(!1);
                        },
                        children: "Regular Modal",
                      }),
                      (0, o.jsx)(b.Z, {
                        children: (0, o.jsx)("p", {
                          className:
                            "text-base leading-relaxed text-gray-600 font-normal",
                          children:
                            "I always felt like I could do anything. That\u2019s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can\u2019t do anything, you won\u2019t do anything. I was taught I could do everything.",
                        }),
                      }),
                      (0, o.jsxs)(h.Z, {
                        children: [
                          (0, o.jsx)(y.Z, {
                            color: "red",
                            buttonType: "link",
                            onClick: function (e) {
                              return T(!1);
                            },
                            ripple: "dark",
                            children: "Close",
                          }),
                          (0, o.jsx)(y.Z, {
                            color: "green",
                            onClick: function (e) {
                              return T(!1);
                            },
                            ripple: "light",
                            children: "Save Changes",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function w() {
        var e = (0, n.useState)(null),
          r = e[0],
          t = e[1];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(l.Z, { title: "React Modals" }),
            (0, o.jsx)(i.Z, {}),
            (0, o.jsxs)(a.Z, {
              children: [
                (0, o.jsx)(c.Z, {
                  title: "React Modals",
                  description:
                    "React plugin that opens on top of the page content for extra details, notifications to the user or any other new content.",
                }),
                (0, o.jsx)(u.Z, { title: "Small Modal" }),
                (0, o.jsx)(v, {
                  copyText: "Modal" === r ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Modal" : "");
                  },
                  size: "sm",
                  modalSize: "small",
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(u.Z, { title: "Regular Modal" }),
                (0, o.jsx)(v, {
                  copyText: "Modal" === r ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Modal" : "");
                  },
                  size: "regular",
                  modalSize: "regular",
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(u.Z, { title: "Large Modal" }),
                (0, o.jsx)(v, {
                  copyText: "Modal" === r ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Modal" : "");
                  },
                  size: "lg",
                  modalSize: "large",
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [9774, 3335, 573, 7554, 2730, 2888, 179], function () {
      return (r = 73716), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
