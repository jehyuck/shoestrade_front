(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4820],
  {
    591: function (t, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          default: function () {
            return b;
          },
        });
      var e = r(85893),
        o = r(74047),
        u = r(52700),
        c = r(4706),
        i = r(8127),
        f = r(44102),
        s = r(20775),
        a = r(26265),
        l = r(67294),
        p = r(11163);
      function y(t) {
        var n = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            e = (0, s.Z)(t);
          if (n) {
            var o = (0, s.Z)(this).constructor;
            r = Reflect.construct(e, arguments, o);
          } else r = e.apply(this, arguments);
          return (0, f.Z)(this, r);
        };
      }
      var b = (function (t) {
        (0, i.Z)(r, t);
        var n = y(r);
        function r() {
          var t;
          (0, o.Z)(this, r);
          for (var e = arguments.length, u = new Array(e), i = 0; i < e; i++)
            u[i] = arguments[i];
          return (
            (t = n.call.apply(n, [this].concat(u))),
            (0, a.Z)((0, c.Z)(t), "componentDidMount", function () {
              p.default.push("/presentation");
            }),
            t
          );
        }
        return (
          (0, u.Z)(r, [
            {
              key: "render",
              value: function () {
                return (0, e.jsx)("div", {});
              },
            },
          ]),
          r
        );
      })(l.Component);
    },
    60556: function (t, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_error",
        function () {
          return r(591);
        },
      ]);
    },
    4706: function (t, n, r) {
      "use strict";
      function e(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      r.d(n, {
        Z: function () {
          return e;
        },
      });
    },
    74047: function (t, n, r) {
      "use strict";
      function e(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      r.d(n, {
        Z: function () {
          return e;
        },
      });
    },
    52700: function (t, n, r) {
      "use strict";
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var e = n[r];
          (e.enumerable = e.enumerable || !1),
            (e.configurable = !0),
            "value" in e && (e.writable = !0),
            Object.defineProperty(t, e.key, e);
        }
      }
      function o(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      }
      r.d(n, {
        Z: function () {
          return o;
        },
      });
    },
    20775: function (t, n, r) {
      "use strict";
      function e(t) {
        return (e = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      r.d(n, {
        Z: function () {
          return e;
        },
      });
    },
    8127: function (t, n, r) {
      "use strict";
      function e(t, n) {
        return (e =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function o(t, n) {
        if ("function" !== typeof n && null !== n)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(n && n.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          n && e(t, n);
      }
      r.d(n, {
        Z: function () {
          return o;
        },
      });
    },
    44102: function (t, n, r) {
      "use strict";
      function e(t) {
        return (e =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      r.d(n, {
        Z: function () {
          return u;
        },
      });
      var o = r(4706);
      function u(t, n) {
        return !n || ("object" !== e(n) && "function" !== typeof n)
          ? (0, o.Z)(t)
          : n;
      }
    },
    11163: function (t, n, r) {
      t.exports = r(72441);
    },
  },
  function (t) {
    t.O(0, [9774, 2888, 179], function () {
      return (n = 60556), t((t.s = n));
      var n;
    });
    var n = t.O();
    _N_E = n;
  },
]);
