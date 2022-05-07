(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4777],
  {
    20640: function (e, t, r) {
      "use strict";
      var o = r(11742),
        n = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var r,
          l,
          a,
          c,
          i,
          p,
          u = !1;
        t || (t = {}), (r = t.debug || !1);
        try {
          if (
            ((a = o()),
            (c = document.createRange()),
            (i = document.getSelection()),
            ((p = document.createElement("span")).textContent = e),
            (p.style.all = "unset"),
            (p.style.position = "fixed"),
            (p.style.top = 0),
            (p.style.clip = "rect(0, 0, 0, 0)"),
            (p.style.whiteSpace = "pre"),
            (p.style.webkitUserSelect = "text"),
            (p.style.MozUserSelect = "text"),
            (p.style.msUserSelect = "text"),
            (p.style.userSelect = "text"),
            p.addEventListener("copy", function (o) {
              if ((o.stopPropagation(), t.format))
                if (
                  (o.preventDefault(), "undefined" === typeof o.clipboardData)
                ) {
                  r && console.warn("unable to use e.clipboardData"),
                    r && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var l = n[t.format] || n.default;
                  window.clipboardData.setData(l, e);
                } else
                  o.clipboardData.clearData(),
                    o.clipboardData.setData(t.format, e);
              t.onCopy && (o.preventDefault(), t.onCopy(o.clipboardData));
            }),
            document.body.appendChild(p),
            c.selectNodeContents(p),
            i.addRange(c),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          u = !0;
        } catch (s) {
          r && console.error("unable to copy using execCommand: ", s),
            r && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (u = !0);
          } catch (s) {
            r && console.error("unable to copy using clipboardData: ", s),
              r && console.error("falling back to prompt"),
              (l = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(l, e);
          }
        } finally {
          i &&
            ("function" == typeof i.removeRange
              ? i.removeRange(c)
              : i.removeAllRanges()),
            p && document.body.removeChild(p),
            a();
        }
        return u;
      };
    },
    53085: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return p;
        },
      });
      var o = r(85893),
        n = (r(67294), r(46577)),
        l = r(84283),
        a = r(74855),
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
        i = [
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
      function p(e) {
        var t = e.children,
          r = e.activeColor,
          p = (e.activeFramework, e.onColorClick),
          u = (e.onFrameworkClick, e.onCopy),
          s = e.codeToShow,
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
                      children: c.map(function (e, t) {
                        return (0, o.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  r === i[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              p(i[t]), u(!1);
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
                    text: s,
                    onCopy: function () {
                      return u(!0);
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
    87265: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var o = r(85893),
        n = r(26265),
        l = r(38347),
        a = r(67294),
        c = r(35952),
        i = r(4030),
        p = r(64929),
        u = r(53085);
      function s(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function f(e) {
        e.children;
        var t = e.copyText,
          r = e.onCopy,
          n = e.buttonType,
          s = e.size,
          f = e.rounded,
          b = e.placement,
          h = e.buttonText,
          y = e.rippleEffect,
          g = e.blockLevel,
          m = (0, l.Z)(e, [
            "children",
            "copyText",
            "onCopy",
            "buttonType",
            "size",
            "rounded",
            "placement",
            "buttonText",
            "rippleEffect",
            "blockLevel",
          ]),
          w = (0, a.useState)("lightBlue"),
          v = w[0],
          O = w[1],
          x = (0, a.useState)("react"),
          j = x[0],
          C = x[1],
          k =
            'import React from "react";\nimport Dropdown from "@material-tailwind/react/Dropdown"\nimport DropdownItem from "@material-tailwind/react/DropdownItem"\nimport DropdownLink from "@material-tailwind/react/DropdownLink"\n\nexport default function Dropdown() {\n    return (\n        <Dropdown\n            color="'
              .concat(v, '"\n            placement="')
              .concat(b, '"\n            buttonText="')
              .concat(h, '"\n            buttonType="')
              .concat(n, '"\n            size="')
              .concat(s, '"\n            rounded={')
              .concat(f, "}\n            ")
              .concat(g, "\n            ")
              .concat(y, '\n        >\n            <DropdownItem color="')
              .concat(
                v,
                '" ripple="light">\n                Action\n            </DropdownItem>\n            <DropdownLink\n                href="#"\n                color={color}\n                ripple="light"\n                onClick={(e) => e.preventDefault()}\n            >\n                Another Action\n            </DropdownLink>\n            <DropdownItem color="'
              )
              .concat(
                v,
                '" ripple="light">\n                Something else\n            </DropdownItem>\n        </Dropdown>\n    )\n}'
              );
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)(u.Z, {
            copyText: t,
            onCopy: r,
            activeColor: v,
            activeFramework: j,
            codeToShow: k,
            onColorClick: function (e) {
              return O(e);
            },
            onFrameworkClick: function (e) {
              return C(e);
            },
            children: (0, o.jsx)("div", {
              className:
                "block={true}" === g ? "w-full" : "flex justify-center ",
              children: (0, o.jsxs)(
                c.Z,
                d(
                  d({}, m),
                  {},
                  {
                    color: v,
                    placement: b,
                    buttonText: h,
                    buttonType: n,
                    size: s,
                    rounded: f,
                    children: [
                      (0, o.jsx)(i.Z, {
                        color: v,
                        ripple: "light",
                        children: "Action",
                      }),
                      (0, o.jsx)(p.Z, {
                        href: "#",
                        color: v,
                        ripple: "light",
                        onClick: function (e) {
                          return e.preventDefault();
                        },
                        children: "Another Action",
                      }),
                      (0, o.jsx)(i.Z, {
                        color: v,
                        ripple: "light",
                        children: "Something Else",
                      }),
                    ],
                  }
                )
              ),
            }),
          }),
        });
      }
    },
    81957: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var o = r(85893);
      r(67294);
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
    4030: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var o = r(26265),
        n = r(85893),
        l = r(38347),
        a = (r(67294), r(39931)),
        c = r.n(a);
      function i(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                (0, o.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
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
          blueGray: "hover:bg-blue-gray-500",
          gray: "hover:bg-gray-500",
          brown: "hover:bg-brown-500",
          deepOrange: "hover:bg-deep-orange-500",
          orange: "hover:bg-orange-500",
          amber: "hover:bg-amber-500",
          yellow: "hover:bg-yellow-600",
          lime: "hover:bg-lime-500",
          lightGreen: "hover:bg-light-green-500",
          green: "hover:bg-green-500",
          teal: "hover:bg-teal-500",
          cyan: "hover:bg-cyan-500",
          lightBlue: "hover:bg-light-blue-500",
          blue: "hover:bg-blue-500",
          indigo: "hover:bg-indigo-500",
          deepPurple: "hover:bg-deep-purple-500",
          purple: "hover:bg-purple-500",
          pink: "hover:bg-pink-500",
          red: "hover:bg-red-500",
        },
        s = {
          blueGray: "hover:shadow-md-blue-gray",
          gray: "hover:shadow-md-gray",
          brown: "hover:shadow-md-brown",
          deepOrange: "hover:shadow-md-deep-orange",
          orange: "hover:shadow-md-orange",
          amber: "hover:shadow-md-amber",
          yellow: "hover:shadow-md-yellow",
          lime: "hover:shadow-md-lime",
          lightGreen: "hover:shadow-md-light-green",
          green: "hover:shadow-md-green",
          teal: "hover:shadow-md-teal",
          cyan: "hover:shadow-md-cyan",
          lightBlue: "hover:shadow-md-light-blue",
          blue: "hover:shadow-md-blue",
          indigo: "hover:shadow-md-indigo",
          deepPurple: "hover:shadow-md-deep-purple",
          purple: "hover:shadow-md-purple",
          pink: "hover:shadow-md-pink",
          red: "hover:shadow-md-red",
        };
      function d(e) {
        var t = e.children,
          r = e.color,
          o = e.ripple,
          a =
            (e.className,
            (0, l.Z)(e, ["children", "color", "ripple", "className"])),
          i = new (c())();
        return (0, n.jsx)(
          "span",
          p(
            p({}, a),
            {},
            {
              className:
                "block w-full text-sm py-3 px-4 font-normal cursor-pointer whitespace-no-wrap rounded-md text-gray-900 hover:text-white "
                  .concat(u[r], " ")
                  .concat(s[r], " transition-all duration-300"),
              onMouseUp: function (e) {
                "dark" === o && i.create(e, "dark"),
                  "light" === o && i.create(e, "light");
              },
              children: t,
            }
          )
        );
      }
      d.defaultProps = { color: "lightBlue" };
    },
    74300: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var o = l(r(67294)),
        n = l(r(20640));
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
      function c(e, t) {
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
      function i(e, t) {
        if (null == e) return {};
        var r,
          o,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              o,
              n = {},
              l = Object.keys(e);
            for (o = 0; o < l.length; o++)
              (r = l[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (o = 0; o < l.length; o++)
            (r = l[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      function p(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function s(e, t) {
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
      function b(e, t) {
        return (b =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function h(e, t, r) {
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
      var y = (function (e) {
        function t() {
          var e, r;
          p(this, t);
          for (var l = arguments.length, a = new Array(l), c = 0; c < l; c++)
            a[c] = arguments[c];
          return (
            h(
              f((r = s(this, (e = d(t)).call.apply(e, [this].concat(a))))),
              "onClick",
              function (e) {
                var t = r.props,
                  l = t.text,
                  a = t.onCopy,
                  c = t.children,
                  i = t.options,
                  p = o.default.Children.only(c),
                  u = (0, n.default)(l, i);
                a && a(l, u),
                  p &&
                    p.props &&
                    "function" === typeof p.props.onClick &&
                    p.props.onClick(e);
              }
            ),
            r
          );
        }
        var r, l, a;
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
          (l = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  r = i(e, ["text", "onCopy", "options", "children"]),
                  n = o.default.Children.only(t);
                return o.default.cloneElement(
                  n,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? c(r, !0).forEach(function (t) {
                            h(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : c(r).forEach(function (t) {
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
          ]) && u(r.prototype, l),
          a && u(r, a),
          t
        );
      })(o.default.PureComponent);
      (t.CopyToClipboard = y),
        h(y, "defaultProps", { onCopy: void 0, options: void 0 });
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
]);
