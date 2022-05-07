(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4771],
  {
    20640: function (e, r, t) {
      "use strict";
      var n = t(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, r) {
        var t,
          l,
          a,
          i,
          u,
          c,
          g = !1;
        r || (r = {}), (t = r.debug || !1);
        try {
          if (
            ((a = n()),
            (i = document.createRange()),
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
            c.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), r.format))
                if (
                  (n.preventDefault(), "undefined" === typeof n.clipboardData)
                ) {
                  t && console.warn("unable to use e.clipboardData"),
                    t && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var l = o[r.format] || o.default;
                  window.clipboardData.setData(l, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(r.format, e);
              r.onCopy && (n.preventDefault(), r.onCopy(n.clipboardData));
            }),
            document.body.appendChild(c),
            i.selectNodeContents(c),
            u.addRange(i),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          g = !0;
        } catch (b) {
          t && console.error("unable to copy using execCommand: ", b),
            t && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(r.format || "text", e),
              r.onCopy && r.onCopy(window.clipboardData),
              (g = !0);
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
          u &&
            ("function" == typeof u.removeRange
              ? u.removeRange(i)
              : u.removeAllRanges()),
            c && document.body.removeChild(c),
            a();
        }
        return g;
      };
    },
    74300: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.CopyToClipboard = void 0);
      var n = l(t(67294)),
        o = l(t(20640));
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
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function u(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (t = l[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (t = l[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      function c(e, r) {
        if (!(e instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function g(e, r) {
        for (var t = 0; t < r.length; t++) {
          var n = r[t];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function b(e, r) {
        return !r || ("object" !== a(r) && "function" !== typeof r) ? d(e) : r;
      }
      function s(e) {
        return (
          (s = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          s(e)
        );
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e, r) {
        return (
          (p =
            Object.setPrototypeOf ||
            function (e, r) {
              return (e.__proto__ = r), e;
            }),
          p(e, r)
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
          c(this, r);
          for (var l = arguments.length, a = new Array(l), i = 0; i < l; i++)
            a[i] = arguments[i];
          return (
            h(
              d((t = b(this, (e = s(r)).call.apply(e, [this].concat(a))))),
              "onClick",
              function (e) {
                var r = t.props,
                  l = r.text,
                  a = r.onCopy,
                  i = r.children,
                  u = r.options,
                  c = n.default.Children.only(i),
                  g = (0, o.default)(l, u);
                a && a(l, g),
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
              r && p(e, r);
          })(r, e),
          (t = r),
          (l = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  r = (e.text, e.onCopy, e.options, e.children),
                  t = u(e, ["text", "onCopy", "options", "children"]),
                  o = n.default.Children.only(r);
                return n.default.cloneElement(
                  o,
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
          l && g(t.prototype, l),
          a && g(t, a),
          r
        );
      })(n.default.PureComponent);
      (r.CopyToClipboard = y),
        h(y, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, r, t) {
      "use strict";
      var n = t(74300).CopyToClipboard;
      (n.CopyToClipboard = n), (e.exports = n);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var r = document.activeElement, t = [], n = 0;
          n < e.rangeCount;
          n++
        )
          t.push(e.getRangeAt(n));
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
    23063: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/labels",
        function () {
          return t(95065);
        },
      ]);
    },
    61398: function (e, r, t) {
      "use strict";
      var n = t(85893),
        o = t(67294),
        l = t(45697),
        a = t.n(l),
        i = t(39931),
        u = t.n(i);
      function c(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
        return n;
      }
      function g(e, r, t) {
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
      function b(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (t = l[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (t = l[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return c(e);
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
            if ("string" === typeof e) return c(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return c(e, r);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var d = {
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
        p = {
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
        O = (0, o.forwardRef)(function (e, r) {
          var t,
            o,
            l = e.children,
            a = e.color,
            i = e.buttonType,
            c = e.size,
            O = e.rounded,
            N = e.iconOnly,
            P = e.block,
            S = e.ripple,
            T = e.className,
            G = b(e, [
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
            R = new (u())(),
            E = [],
            L = [
              P && "w-full",
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
            _ = ["text-white", d[a], p[a], h[a], y[a], f[a], m[a]],
            B = [
              "bg-transparent",
              "border",
              "border-solid",
              "shadow-none",
              v[a],
              x[a],
              w[a],
              j[a],
              k[a],
              w[a],
              C[a],
            ],
            D = ["bg-transparent", v[a], w[a], k[a], w[a], C[a]],
            A = s(L).concat([
              N ? "w-8 h-8 p-0 grid place-items-center" : "py-1.5 px-4",
              "text-xs",
              "leading-normal",
            ]),
            Z = s(L).concat([
              N ? "w-10 h-10 p-0 grid place-items-center" : "py-2.5 px-6",
              "text-xs",
              "leading-normal",
            ]),
            F = s(L).concat([
              N ? "w-12 h-12 p-0 grid place-items-center" : "py-3 px-7",
              "text-sm",
              "leading-relaxed",
            ]);
          if ("sm" === c) (t = E).push.apply(t, s(A));
          else if ("lg" === c) {
            var q;
            (q = E).push.apply(q, s(F));
          } else {
            var z;
            (z = E).push.apply(z, s(Z));
          }
          if ("outline" === i) (o = E).push.apply(o, s(B));
          else if ("link" === i) {
            var I;
            (I = E).push.apply(I, s(D));
          } else {
            var U;
            (U = E).push.apply(U, s(_));
          }
          return (
            (E = E.join(" ")),
            (0, n.jsx)(
              "button",
              (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = null != arguments[r] ? arguments[r] : {},
                    n = Object.keys(t);
                  "function" === typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                      Object.getOwnPropertySymbols(t).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      })
                    )),
                    n.forEach(function (r) {
                      g(e, r, t[r]);
                    });
                }
                return e;
              })({}, G, {
                className: "".concat(E, " ").concat(T),
                ref: r,
                onMouseUp: function (e) {
                  "dark" === S && R.create(e, "dark"),
                    "light" === S && R.create(e, "light");
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
          return b;
        },
      });
      var n = t(85893),
        o = (t(67294), t(45697)),
        l = t.n(o),
        a = t(73483),
        i = t(84283),
        u = t(74855),
        c = [
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
      function b(e) {
        var r = e.children,
          t = e.activeColor,
          o = (e.activeFramework, e.onColorClick),
          l = (e.onFrameworkClick, e.onCopy),
          b = e.codeToShow,
          s = e.copyText;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              t
                ? (0, n.jsx)("div", {
                    id: "colors",
                    className:
                      "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                    style: { width: "100%", bottom: "-14px" },
                    children: (0, n.jsx)("div", {
                      className:
                        "flex flew-wrap justify-center items-center bg-white px-2",
                      children: c.map(function (e, r) {
                        return (0, n.jsx)(
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
                              o(g[r]), l(!1);
                            },
                          },
                          r
                        );
                      }),
                    }),
                  })
                : null,
              r,
              (0, n.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  (0, n.jsx)(u.CopyToClipboard, {
                    text: b,
                    onCopy: function () {
                      return l(!0);
                    },
                    children: (0, n.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: s,
                    }),
                  }),
                  (0, n.jsx)(a.Z, {
                    language: "jsx",
                    style: i.Vg,
                    children: b,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      b.propTypes = {
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
      function n(e, r, t) {
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
          return n;
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
      var n = t(85893),
        o = (t(67294), t(45697)),
        l = t.n(o);
      function a(e) {
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
      a.propTypes = {
        title: l().oneOfType([l().string, l().node]),
        description: l().oneOfType([l().string, l().node]),
      };
    },
    81853: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return u;
        },
      });
      var n = t(85893),
        o = (t(67294), t(45697)),
        l = t.n(o),
        a = {
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
        i = {
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
      function u(e) {
        var r = e.children,
          t = e.color,
          o = e.className;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            className:
              "max-w-max flex items-center justify-between py-1 px-3 rounded-full "
                .concat(a[t], " last:mr-0 mr-1 transition-all duration-300 ")
                .concat(o),
            children: (0, n.jsx)("span", {
              className: "text-xs font-semibold uppercase ".concat(i[t]),
              children: r,
            }),
          }),
        });
      }
      u.propTypes = {
        children: l().node.isRequired,
        color: l().string.isRequired,
      };
    },
    95065: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return v;
          },
        });
      var n = t(85893),
        o = t(67294),
        l = t(94254),
        a = t(84790),
        i = t(91169),
        u = t(27460),
        c = t(28754),
        g = t(62332),
        b = t(79827),
        s = t(81853);
      function d(e) {
        var r = e.copyText,
          t = e.onCopy,
          l = (0, o.useState)("lightBlue"),
          a = l[0],
          i = l[1],
          u = (0, o.useState)("react")[0],
          c = (0, o.useState)(!1),
          d = c[0],
          p = c[1],
          h = (0, o.useState)(),
          y = h[0],
          f = h[1],
          m = (0, b.Z)(u, p, f),
          v =
            'import React from "react";\nimport Label from "@material-tailwind/react/Label";\n\nexport default function Label() {\n    return (\n        <Label color="'.concat(
              a,
              '">Label</Label>\n    );\n}'
            );
        return (0, n.jsxs)(n.Fragment, {
          children: [
            d
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return p(!1);
                      },
                      children: (0, n.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, n.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, n.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, n.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return p(!1);
                                  },
                                  children: (0, n.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, n.jsxs)("p", {
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
                    (0, n.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, n.jsx)(g.Z, {
              copyText: r,
              onCopy: t,
              activeColor: a,
              activeFramework: u,
              codeToShow: v,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: m,
              children: (0, n.jsx)("div", {
                className: "flex justify-center",
                children: (0, n.jsx)(s.Z, { color: a, children: "Label" }),
              }),
            }),
          ],
        });
      }
      var p = t(61398),
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
        f = {
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
      function m(e) {
        var r = e.copyText,
          t = e.onCopy,
          l = (0, o.useState)("lightBlue"),
          a = l[0],
          i = l[1],
          u = (0, o.useState)("react")[0],
          c = (0, o.useState)(!0),
          s = c[0],
          d = c[1],
          m = (0, o.useState)(!1),
          v = m[0],
          x = m[1],
          w = (0, o.useState)(),
          j = w[0],
          k = w[1],
          C = (0, b.Z)(u, x, k),
          O =
            'import React from "react";\nimport ClosingLabel from "@material-tailwind/react/ClosingLabel";\n\nexport default function ClosingLabel() {\n    return (\n        <ClosingLabel color="'.concat(
              a,
              '">Label</ClosingLabel>\n    );\n}'
            );
        return (0, n.jsxs)(n.Fragment, {
          children: [
            v
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return x(!1);
                      },
                      children: (0, n.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, n.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, n.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, n.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return x(!1);
                                  },
                                  children: (0, n.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, n.jsxs)("p", {
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
                    (0, n.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, n.jsx)(g.Z, {
              copyText: r,
              onCopy: t,
              activeColor: a,
              activeFramework: u,
              codeToShow: O,
              onColorClick: function (e) {
                return i(e);
              },
              onFrameworkClick: C,
              children: (0, n.jsx)("div", {
                className: "flex justify-center",
                children: s
                  ? (0, n.jsxs)("div", {
                      className:
                        "max-w-max flex items-center justify-between py-1 pl-3 pr-1 rounded-full ".concat(
                          h[a],
                          " last:mr-0 mr-1 transition-all duration-300"
                        ),
                      children: [
                        (0, n.jsx)("span", {
                          className: "text-xs font-semibold ".concat(
                            f[a],
                            " uppercase mr-2"
                          ),
                          children: "Label",
                        }),
                        (0, n.jsx)("span", {
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
                                  return d(!1);
                                },
                                r ? parseInt(r, 10) + 100 : 250
                              );
                          },
                          children: "\xd7",
                        }),
                      ],
                    })
                  : (0, n.jsx)(p.Z, {
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
      function v() {
        var e = (0, o.useState)(null),
          r = e[0],
          t = e[1];
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(l.Z, { title: "React Lables" }),
            (0, n.jsx)(i.Z, {}),
            (0, n.jsxs)(a.Z, {
              children: [
                (0, n.jsx)(u.Z, {
                  title: "React Labels",
                  description:
                    "Simple and controlled Material Tailwind lables, let the user to choice to close the label using react.",
                }),
                (0, n.jsx)(c.Z, { title: "Simple Label" }),
                (0, n.jsx)(d, {
                  copyText: "Labels" === r ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Labels" : "");
                  },
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(c.Z, { title: "Closing Label" }),
                (0, n.jsx)(m, {
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
  },
  function (e) {
    e.O(0, [9774, 3335, 573, 7554, 2730, 2888, 179], function () {
      return (r = 23063), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
