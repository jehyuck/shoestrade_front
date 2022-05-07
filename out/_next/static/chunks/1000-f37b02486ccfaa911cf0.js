(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1e3],
  {
    31736: function (e, t, n) {
      "use strict";
      var r = n(13861),
        o = n(67294),
        i = n(73935);
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      var s = "undefined" !== typeof window && "undefined" !== typeof document;
      function c(e, t) {
        e &&
          ("function" === typeof e && e(t),
          {}.hasOwnProperty.call(e, "current") && (e.current = t));
      }
      function u() {
        return s && document.createElement("div");
      }
      function f(e, t) {
        if (e === t) return !0;
        if (
          "object" === typeof e &&
          null != e &&
          "object" === typeof t &&
          null != t
        ) {
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (var n in e) {
            if (!t.hasOwnProperty(n)) return !1;
            if (!f(e[n], t[n])) return !1;
          }
          return !0;
        }
        return !1;
      }
      function p(e) {
        var t = [];
        return (
          e.forEach(function (e) {
            t.find(function (t) {
              return f(e, t);
            }) || t.push(e);
          }),
          t
        );
      }
      function l(e, t) {
        var n, r;
        return Object.assign({}, t, {
          popperOptions: Object.assign({}, e.popperOptions, t.popperOptions, {
            modifiers: p(
              [].concat(
                (null == (n = e.popperOptions) ? void 0 : n.modifiers) || [],
                (null == (r = t.popperOptions) ? void 0 : r.modifiers) || []
              )
            ),
          }),
        });
      }
      var d = s ? o.useLayoutEffect : o.useEffect;
      function v(e) {
        var t = (0, o.useRef)();
        return (
          t.current || (t.current = "function" === typeof e ? e() : e),
          t.current
        );
      }
      function m(e, t, n) {
        n.split(/\s+/).forEach(function (n) {
          n && e.classList[t](n);
        });
      }
      var h = {
        name: "className",
        defaultValue: "",
        fn: function (e) {
          var t = e.popper.firstElementChild,
            n = function () {
              var t;
              return !!(null == (t = e.props.render) ? void 0 : t.$$tippy);
            };
          function r() {
            (e.props.className && !n()) || m(t, "add", e.props.className);
          }
          return {
            onCreate: r,
            onBeforeUpdate: function () {
              n() && m(t, "remove", e.props.className);
            },
            onAfterUpdate: r,
          };
        },
      };
      function g(e) {
        return function (t) {
          var n = t.children,
            r = t.content,
            s = t.visible,
            f = t.singleton,
            p = t.render,
            m = t.reference,
            g = t.disabled,
            y = void 0 !== g && g,
            b = t.ignoreAttributes,
            w = void 0 === b || b,
            O =
              (t.__source,
              t.__self,
              a(t, [
                "children",
                "content",
                "visible",
                "singleton",
                "render",
                "reference",
                "disabled",
                "ignoreAttributes",
                "__source",
                "__self",
              ])),
            x = void 0 !== s,
            E = void 0 !== f,
            j = (0, o.useState)(!1),
            A = j[0],
            T = j[1],
            L = (0, o.useState)({}),
            D = L[0],
            k = L[1],
            C = (0, o.useState)(),
            P = C[0],
            M = C[1],
            S = v(function () {
              return { container: u(), renders: 1 };
            }),
            R = Object.assign({ ignoreAttributes: w }, O, {
              content: S.container,
            });
          x && ((R.trigger = "manual"), (R.hideOnClick = !1)), E && (y = !0);
          var I = R,
            H = R.plugins || [];
          p &&
            (I = Object.assign({}, R, {
              plugins: E
                ? [].concat(H, [
                    {
                      fn: function () {
                        return {
                          onTrigger: function (e, t) {
                            var n = f.data.children.find(function (e) {
                              return e.instance.reference === t.currentTarget;
                            }).content;
                            M(n);
                          },
                        };
                      },
                    },
                  ])
                : H,
              render: function () {
                return { popper: S.container };
              },
            }));
          var B = [m].concat(n ? [n.type] : []);
          return (
            d(function () {
              var t = m;
              m && m.hasOwnProperty("current") && (t = m.current);
              var n = e(
                t || S.ref || u(),
                Object.assign({}, I, { plugins: [h].concat(R.plugins || []) })
              );
              return (
                (S.instance = n),
                y && n.disable(),
                s && n.show(),
                E && f.hook({ instance: n, content: r, props: I }),
                T(!0),
                function () {
                  n.destroy(), null == f || f.cleanup(n);
                }
              );
            }, B),
            d(function () {
              var e;
              if (1 !== S.renders) {
                var t = S.instance;
                t.setProps(l(t.props, I)),
                  null == (e = t.popperInstance) || e.forceUpdate(),
                  y ? t.disable() : t.enable(),
                  x && (s ? t.show() : t.hide()),
                  E && f.hook({ instance: t, content: r, props: I });
              } else S.renders++;
            }),
            d(function () {
              var e;
              if (p) {
                var t = S.instance;
                t.setProps({
                  popperOptions: Object.assign({}, t.props.popperOptions, {
                    modifiers: [].concat(
                      (
                        (null == (e = t.props.popperOptions)
                          ? void 0
                          : e.modifiers) || []
                      ).filter(function (e) {
                        return "$$tippyReact" !== e.name;
                      }),
                      [
                        {
                          name: "$$tippyReact",
                          enabled: !0,
                          phase: "beforeWrite",
                          requires: ["computeStyles"],
                          fn: function (e) {
                            var t,
                              n = e.state,
                              r =
                                null == (t = n.modifiersData) ? void 0 : t.hide;
                            (D.placement === n.placement &&
                              D.referenceHidden ===
                                (null == r ? void 0 : r.isReferenceHidden) &&
                              D.escaped ===
                                (null == r ? void 0 : r.hasPopperEscaped)) ||
                              k({
                                placement: n.placement,
                                referenceHidden:
                                  null == r ? void 0 : r.isReferenceHidden,
                                escaped:
                                  null == r ? void 0 : r.hasPopperEscaped,
                              }),
                              (n.attributes.popper = {});
                          },
                        },
                      ]
                    ),
                  }),
                });
              }
            }, [D.placement, D.referenceHidden, D.escaped].concat(B)),
            o.createElement(
              o.Fragment,
              null,
              n
                ? (0, o.cloneElement)(n, {
                    ref: function (e) {
                      (S.ref = e), c(n.ref, e);
                    },
                  })
                : null,
              A &&
                (0, i.createPortal)(
                  p
                    ? p(
                        (function (e) {
                          var t = { "data-placement": e.placement };
                          return (
                            e.referenceHidden &&
                              (t["data-reference-hidden"] = ""),
                            e.escaped && (t["data-escaped"] = ""),
                            t
                          );
                        })(D),
                        P,
                        S.instance
                      )
                    : r,
                  S.container
                )
            )
          );
        };
      }
      function y(e) {
        return function (t) {
          var n = void 0 === t ? {} : t,
            r = n.disabled,
            i = void 0 !== r && r,
            s = n.overrides,
            c = void 0 === s ? [] : s,
            u = (0, o.useState)(!1),
            f = u[0],
            p = u[1],
            m = v({ children: [], renders: 1 });
          return (
            d(
              function () {
                if (f) {
                  var t = m.children,
                    n = m.sourceData;
                  if (n) {
                    var r = e(
                      t.map(function (e) {
                        return e.instance;
                      }),
                      Object.assign({}, n.props, {
                        popperOptions: n.instance.props.popperOptions,
                        overrides: c,
                        plugins: [h].concat(n.props.plugins || []),
                      })
                    );
                    return (
                      (m.instance = r),
                      i && r.disable(),
                      function () {
                        r.destroy(),
                          (m.children = t.filter(function (e) {
                            return !e.instance.state.isDestroyed;
                          }));
                      }
                    );
                  }
                } else p(!0);
              },
              [f]
            ),
            d(function () {
              if (f)
                if (1 !== m.renders) {
                  var e = m.children,
                    t = m.instance,
                    n = m.sourceData;
                  if (t && n) {
                    var r = n.props,
                      o = (r.content, a(r, ["content"]));
                    t.setProps(
                      l(t.props, Object.assign({}, o, { overrides: c }))
                    ),
                      t.setInstances(
                        e.map(function (e) {
                          return e.instance;
                        })
                      ),
                      i ? t.disable() : t.enable();
                  }
                } else m.renders++;
            }),
            (0, o.useMemo)(function () {
              return [
                {
                  data: m,
                  hook: function (e) {
                    m.sourceData = e;
                  },
                  cleanup: function () {
                    m.sourceData = null;
                  },
                },
                {
                  hook: function (e) {
                    m.children.find(function (t) {
                      var n = t.instance;
                      return e.instance === n;
                    }) ||
                      (m.children.push(e),
                      m.instance &&
                        !m.instance.state.isDestroyed &&
                        m.instance.setInstances(
                          m.children.map(function (e) {
                            return e.instance;
                          })
                        ));
                  },
                  cleanup: function (e) {
                    (m.children = m.children.filter(function (t) {
                      return t.instance !== e;
                    })),
                      m.instance &&
                        !m.instance.state.isDestroyed &&
                        m.instance.setInstances(
                          m.children.map(function (e) {
                            return e.instance;
                          })
                        );
                  },
                },
              ];
            }, [])
          );
        };
      }
      var b = function (e, t) {
          return (0, o.forwardRef)(function (n, r) {
            var i = n.children,
              s = a(n, ["children"]);
            return o.createElement(
              e,
              Object.assign({}, t, s),
              i
                ? (0, o.cloneElement)(i, {
                    ref: function (e) {
                      c(r, e), c(i.ref, e);
                    },
                  })
                : null
            );
          });
        },
        w = (r.XB, b(g(r.ZP)));
      t.ZP = w;
    },
    39931: function (e) {
      e.exports = class {
        constructor() {
          (this.x = 0), (this.y = 0), (this.z = 0);
        }
        findFurthestPoint(e, t, n, r, o, i) {
          return (
            (this.x = e - n > t / 2 ? 0 : t),
            (this.y = r - i > o / 2 ? 0 : o),
            (this.z = Math.hypot(this.x - (e - n), this.y - (r - i))),
            this.z
          );
        }
        appyStyles(e, t, n, r, o) {
          e.classList.add("ripple"),
            (e.style.backgroundColor =
              "dark" === t ? "rgba(0,0,0, 0.2)" : "rgba(255,255,255, 0.3)"),
            (e.style.borderRadius = "50%"),
            (e.style.pointerEvents = "none"),
            (e.style.position = "absolute"),
            (e.style.left = o.clientX - n.left - r + "px"),
            (e.style.top = o.clientY - n.top - r + "px"),
            (e.style.width = e.style.height = 2 * r + "px");
        }
        applyAnimation(e) {
          e.animate(
            [
              { transform: "scale(0)", opacity: 1 },
              { transform: "scale(1.5)", opacity: 0 },
            ],
            { duration: 500, easing: "linear" }
          );
        }
        create(e, t) {
          const n = e.currentTarget;
          (n.style.position = "relative"), (n.style.overflow = "hidden");
          const r = n.getBoundingClientRect(),
            o = this.findFurthestPoint(
              e.clientX,
              n.offsetWidth,
              r.left,
              e.clientY,
              n.offsetHeight,
              r.top
            ),
            i = document.createElement("span");
          this.appyStyles(i, t, r, o, e),
            this.applyAnimation(i),
            n.appendChild(i),
            setTimeout(() => i.remove(), 500);
        }
      };
    },
    16071: function (e, t, n) {
      "use strict";
      var r = n(53848),
        o = n(69448);
      t.default = void 0;
      var i = o(n(67294)),
        a = n(11689),
        s = n(72441),
        c = n(75749),
        u = {};
      function f(e, t, n, r) {
        if (e && (0, a.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0;
          });
          var o =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          u[t + "%" + n + (o ? "%" + o : "")] = !0;
        }
      }
      var p = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, s.useRouter)(),
          o = (n && n.asPath) || "/",
          p = i.default.useMemo(
            function () {
              var t = (0, a.resolveHref)(o, e.href, !0),
                n = r(t, 2),
                i = n[0],
                s = n[1];
              return {
                href: i,
                as: e.as ? (0, a.resolveHref)(o, e.as) : s || i,
              };
            },
            [o, e.href, e.as]
          ),
          l = p.href,
          d = p.as,
          v = e.children,
          m = e.replace,
          h = e.shallow,
          g = e.scroll,
          y = e.locale;
        "string" === typeof v && (v = i.default.createElement("a", null, v));
        var b = i.Children.only(v),
          w = b && "object" === typeof b && b.ref,
          O = (0, c.useIntersection)({ rootMargin: "200px" }),
          x = r(O, 2),
          E = x[0],
          j = x[1],
          A = i.default.useCallback(
            function (e) {
              E(e),
                w &&
                  ("function" === typeof w
                    ? w(e)
                    : "object" === typeof w && (w.current = e));
            },
            [w, E]
          );
        (0, i.useEffect)(
          function () {
            var e = j && t && (0, a.isLocalURL)(l),
              r = "undefined" !== typeof y ? y : n && n.locale,
              o = u[l + "%" + d + (r ? "%" + r : "")];
            e && !o && f(n, l, d, { locale: r });
          },
          [d, l, j, y, t, n]
        );
        var T = {
          ref: A,
          onClick: function (e) {
            b.props &&
              "function" === typeof b.props.onClick &&
              b.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, o, i, s, c) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, a.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == s && (s = r.indexOf("#") < 0),
                    t[o ? "replace" : "push"](n, r, {
                      shallow: i,
                      locale: c,
                      scroll: s,
                    }));
                })(e, n, l, d, m, h, g, y);
          },
          onMouseEnter: function (e) {
            (0, a.isLocalURL)(l) &&
              (b.props &&
                "function" === typeof b.props.onMouseEnter &&
                b.props.onMouseEnter(e),
              f(n, l, d, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === b.type && !("href" in b.props))) {
          var L = "undefined" !== typeof y ? y : n && n.locale,
            D =
              n &&
              n.isLocaleDomain &&
              (0, a.getDomainLocale)(
                d,
                L,
                n && n.locales,
                n && n.domainLocales
              );
          T.href =
            D ||
            (0, a.addBasePath)((0, a.addLocale)(d, L, n && n.defaultLocale));
        }
        return i.default.cloneElement(b, T);
      };
      t.default = p;
    },
    75749: function (e, t, n) {
      "use strict";
      var r = n(53848);
      (t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !a,
            c = (0, o.useRef)(),
            u = (0, o.useState)(!1),
            f = r(u, 2),
            p = f[0],
            l = f[1],
            d = (0, o.useCallback)(
              function (e) {
                c.current && (c.current(), (c.current = void 0)),
                  n ||
                    p ||
                    (e &&
                      e.tagName &&
                      (c.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || "",
                              n = s.get(t);
                            if (n) return n;
                            var r = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && n && t(n);
                                });
                              }, e);
                            return (
                              s.set(
                                t,
                                (n = { id: t, observer: o, elements: r })
                              ),
                              n
                            );
                          })(n),
                          o = r.id,
                          i = r.observer,
                          a = r.elements;
                        return (
                          a.set(e, t),
                          i.observe(e),
                          function () {
                            a.delete(e),
                              i.unobserve(e),
                              0 === a.size && (i.disconnect(), s.delete(o));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && l(e);
                        },
                        { rootMargin: t }
                      )));
              },
              [n, t, p]
            );
          return (
            (0, o.useEffect)(
              function () {
                if (!a && !p) {
                  var e = (0, i.requestIdleCallback)(function () {
                    return l(!0);
                  });
                  return function () {
                    return (0, i.cancelIdleCallback)(e);
                  };
                }
              },
              [p]
            ),
            [d, p]
          );
        });
      var o = n(67294),
        i = n(98391),
        a = "undefined" !== typeof IntersectionObserver;
      var s = new Map();
    },
    41664: function (e, t, n) {
      e.exports = n(16071);
    },
    75093: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    38347: function (e, t, n) {
      "use strict";
      function r(e, t) {
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
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    64121: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(40355);
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, s = e[Symbol.iterator]();
                  !(r = (a = s.next()).done) &&
                  (n.push(a.value), !t || n.length !== t);
                  r = !0
                );
              } catch (c) {
                (o = !0), (i = c);
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            }
          })(e, t) ||
          (0, r.Z)(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    59999: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(75093);
      var o = n(40355);
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (0, o.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    40355: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(75093);
      function o(e, t) {
        if (e) {
          if ("string" === typeof e) return (0, r.Z)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.Z)(e, t)
              : void 0
          );
        }
      }
    },
    11163: function (e, t, n) {
      e.exports = n(72441);
    },
    13861: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.getBoundingClientRect();
        return {
          width: t.width,
          height: t.height,
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          x: t.left,
          y: t.top,
        };
      }
      function o(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function i(e) {
        var t = o(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function a(e) {
        return e instanceof o(e).Element || e instanceof Element;
      }
      function s(e) {
        return e instanceof o(e).HTMLElement || e instanceof HTMLElement;
      }
      function c(e) {
        return (
          "undefined" !== typeof ShadowRoot &&
          (e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      function u(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function f(e) {
        return ((a(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function p(e) {
        return r(f(e)).left + i(e).scrollLeft;
      }
      function l(e) {
        return o(e).getComputedStyle(e);
      }
      function d(e) {
        var t = l(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function v(e, t, n) {
        void 0 === n && (n = !1);
        var a = f(t),
          c = r(e),
          l = s(t),
          v = { scrollLeft: 0, scrollTop: 0 },
          m = { x: 0, y: 0 };
        return (
          (l || (!l && !n)) &&
            (("body" !== u(t) || d(a)) &&
              (v = (function (e) {
                return e !== o(e) && s(e)
                  ? { scrollLeft: (t = e).scrollLeft, scrollTop: t.scrollTop }
                  : i(e);
                var t;
              })(t)),
            s(t)
              ? (((m = r(t)).x += t.clientLeft), (m.y += t.clientTop))
              : a && (m.x = p(a))),
          {
            x: c.left + v.scrollLeft - m.x,
            y: c.top + v.scrollTop - m.y,
            width: c.width,
            height: c.height,
          }
        );
      }
      function m(e) {
        var t = r(e),
          n = e.offsetWidth,
          o = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - o) <= 1 && (o = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
        );
      }
      function h(e) {
        return "html" === u(e)
          ? e
          : e.assignedSlot || e.parentNode || (c(e) ? e.host : null) || f(e);
      }
      function g(e) {
        return ["html", "body", "#document"].indexOf(u(e)) >= 0
          ? e.ownerDocument.body
          : s(e) && d(e)
          ? e
          : g(h(e));
      }
      function y(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = g(e),
          i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          a = o(r),
          s = i ? [a].concat(a.visualViewport || [], d(r) ? r : []) : r,
          c = t.concat(s);
        return i ? c : c.concat(y(h(s)));
      }
      function b(e) {
        return ["table", "td", "th"].indexOf(u(e)) >= 0;
      }
      function w(e) {
        return s(e) && "fixed" !== l(e).position ? e.offsetParent : null;
      }
      function O(e) {
        for (var t = o(e), n = w(e); n && b(n) && "static" === l(n).position; )
          n = w(n);
        return n &&
          ("html" === u(n) || ("body" === u(n) && "static" === l(n).position))
          ? t
          : n ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  s(e) &&
                  "fixed" === l(e).position
                )
                  return null;
                for (
                  var n = h(e);
                  s(n) && ["html", "body"].indexOf(u(n)) < 0;

                ) {
                  var r = l(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      n.d(t, {
        XB: function () {
          return st;
        },
        ZP: function () {
          return ct;
        },
        ki: function () {
          return ve;
        },
      });
      var x = "top",
        E = "bottom",
        j = "right",
        A = "left",
        T = "auto",
        L = [x, E, j, A],
        D = "start",
        k = "end",
        C = "viewport",
        P = "popper",
        M = L.reduce(function (e, t) {
          return e.concat([t + "-" + D, t + "-" + k]);
        }, []),
        S = [].concat(L, [T]).reduce(function (e, t) {
          return e.concat([t, t + "-" + D, t + "-" + k]);
        }, []),
        R = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function I(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function o(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && o(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || o(e);
          }),
          r
        );
      }
      function H(e) {
        var t;
        return function () {
          return (
            t ||
              (t = new Promise(function (n) {
                Promise.resolve().then(function () {
                  (t = void 0), n(e());
                });
              })),
            t
          );
        };
      }
      var B = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function N() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" === typeof e.getBoundingClientRect);
        });
      }
      function V(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? B : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, B, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            s = [],
            c = !1,
            u = {
              state: o,
              setOptions: function (n) {
                f(),
                  (o.options = Object.assign({}, i, o.options, n)),
                  (o.scrollParents = {
                    reference: a(e)
                      ? y(e)
                      : e.contextElement
                      ? y(e.contextElement)
                      : [],
                    popper: y(t),
                  });
                var c = (function (e) {
                  var t = I(e);
                  return R.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(r, o.options.modifiers))
                );
                return (
                  (o.orderedModifiers = c.filter(function (e) {
                    return e.enabled;
                  })),
                  o.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      i = e.effect;
                    if ("function" === typeof i) {
                      var a = i({ state: o, name: t, instance: u, options: r }),
                        c = function () {};
                      s.push(a || c);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = o.elements,
                    t = e.reference,
                    n = e.popper;
                  if (N(t, n)) {
                    (o.rects = {
                      reference: v(t, O(n), "fixed" === o.options.strategy),
                      popper: m(n),
                    }),
                      (o.reset = !1),
                      (o.placement = o.options.placement),
                      o.orderedModifiers.forEach(function (e) {
                        return (o.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var r = 0; r < o.orderedModifiers.length; r++)
                      if (!0 !== o.reset) {
                        var i = o.orderedModifiers[r],
                          a = i.fn,
                          s = i.options,
                          f = void 0 === s ? {} : s,
                          p = i.name;
                        "function" === typeof a &&
                          (o =
                            a({ state: o, options: f, name: p, instance: u }) ||
                            o);
                      } else (o.reset = !1), (r = -1);
                  }
                }
              },
              update: H(function () {
                return new Promise(function (e) {
                  u.forceUpdate(), e(o);
                });
              }),
              destroy: function () {
                f(), (c = !0);
              },
            };
          if (!N(e, t)) return u;
          function f() {
            s.forEach(function (e) {
              return e();
            }),
              (s = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var W = { passive: !0 };
      var _ = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            i = r.scroll,
            a = void 0 === i || i,
            s = r.resize,
            c = void 0 === s || s,
            u = o(t.elements.popper),
            f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            a &&
              f.forEach(function (e) {
                e.addEventListener("scroll", n.update, W);
              }),
            c && u.addEventListener("resize", n.update, W),
            function () {
              a &&
                f.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, W);
                }),
                c && u.removeEventListener("resize", n.update, W);
            }
          );
        },
        data: {},
      };
      function U(e) {
        return e.split("-")[0];
      }
      function q(e) {
        return e.split("-")[1];
      }
      function Z(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function $(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? U(o) : null,
          a = o ? q(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          c = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case x:
            t = { x: s, y: n.y - r.height };
            break;
          case E:
            t = { x: s, y: n.y + n.height };
            break;
          case j:
            t = { x: n.x + n.width, y: c };
            break;
          case A:
            t = { x: n.x - r.width, y: c };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var u = i ? Z(i) : null;
        if (null != u) {
          var f = "y" === u ? "height" : "width";
          switch (a) {
            case D:
              t[u] = t[u] - (n[f] / 2 - r[f] / 2);
              break;
            case k:
              t[u] = t[u] + (n[f] / 2 - r[f] / 2);
          }
        }
        return t;
      }
      var z = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (e) {
            var t = e.state,
              n = e.name;
            t.modifiersData[n] = $({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement,
            });
          },
          data: {},
        },
        F = Math.max,
        X = Math.min,
        Y = Math.round,
        K = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function J(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          i = e.placement,
          a = e.offsets,
          s = e.position,
          c = e.gpuAcceleration,
          u = e.adaptive,
          p = e.roundOffsets,
          d =
            !0 === p
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    r = window.devicePixelRatio || 1;
                  return { x: Y(Y(t * r) / r) || 0, y: Y(Y(n * r) / r) || 0 };
                })(a)
              : "function" === typeof p
              ? p(a)
              : a,
          v = d.x,
          m = void 0 === v ? 0 : v,
          h = d.y,
          g = void 0 === h ? 0 : h,
          y = a.hasOwnProperty("x"),
          b = a.hasOwnProperty("y"),
          w = A,
          T = x,
          L = window;
        if (u) {
          var D = O(n),
            k = "clientHeight",
            C = "clientWidth";
          D === o(n) &&
            "static" !== l((D = f(n))).position &&
            ((k = "scrollHeight"), (C = "scrollWidth")),
            (D = D),
            i === x && ((T = E), (g -= D[k] - r.height), (g *= c ? 1 : -1)),
            i === A && ((w = j), (m -= D[C] - r.width), (m *= c ? 1 : -1));
        }
        var P,
          M = Object.assign({ position: s }, u && K);
        return c
          ? Object.assign(
              {},
              M,
              (((P = {})[T] = b ? "0" : ""),
              (P[w] = y ? "0" : ""),
              (P.transform =
                (L.devicePixelRatio || 1) < 2
                  ? "translate(" + m + "px, " + g + "px)"
                  : "translate3d(" + m + "px, " + g + "px, 0)"),
              P)
            )
          : Object.assign(
              {},
              M,
              (((t = {})[T] = b ? g + "px" : ""),
              (t[w] = y ? m + "px" : ""),
              (t.transform = ""),
              t)
            );
      }
      var G = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              r = t.attributes[e] || {},
              o = t.elements[e];
            s(o) &&
              u(o) &&
              (Object.assign(o.style, n),
              Object.keys(r).forEach(function (e) {
                var t = r[e];
                !1 === t
                  ? o.removeAttribute(e)
                  : o.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var r = t.elements[e],
                  o = t.attributes[e] || {},
                  i = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                s(r) &&
                  u(r) &&
                  (Object.assign(r.style, i),
                  Object.keys(o).forEach(function (e) {
                    r.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      var Q = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function ee(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Q[e];
        });
      }
      var te = { start: "end", end: "start" };
      function ne(e) {
        return e.replace(/start|end/g, function (e) {
          return te[e];
        });
      }
      function re(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && c(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function oe(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function ie(e, t) {
        return t === C
          ? oe(
              (function (e) {
                var t = o(e),
                  n = f(e),
                  r = t.visualViewport,
                  i = n.clientWidth,
                  a = n.clientHeight,
                  s = 0,
                  c = 0;
                return (
                  r &&
                    ((i = r.width),
                    (a = r.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((s = r.offsetLeft), (c = r.offsetTop))),
                  { width: i, height: a, x: s + p(e), y: c }
                );
              })(e)
            )
          : s(t)
          ? (function (e) {
              var t = r(e);
              return (
                (t.top = t.top + e.clientTop),
                (t.left = t.left + e.clientLeft),
                (t.bottom = t.top + e.clientHeight),
                (t.right = t.left + e.clientWidth),
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
              );
            })(t)
          : oe(
              (function (e) {
                var t,
                  n = f(e),
                  r = i(e),
                  o = null == (t = e.ownerDocument) ? void 0 : t.body,
                  a = F(
                    n.scrollWidth,
                    n.clientWidth,
                    o ? o.scrollWidth : 0,
                    o ? o.clientWidth : 0
                  ),
                  s = F(
                    n.scrollHeight,
                    n.clientHeight,
                    o ? o.scrollHeight : 0,
                    o ? o.clientHeight : 0
                  ),
                  c = -r.scrollLeft + p(e),
                  u = -r.scrollTop;
                return (
                  "rtl" === l(o || n).direction &&
                    (c += F(n.clientWidth, o ? o.clientWidth : 0) - a),
                  { width: a, height: s, x: c, y: u }
                );
              })(f(e))
            );
      }
      function ae(e, t, n) {
        var r =
            "clippingParents" === t
              ? (function (e) {
                  var t = y(h(e)),
                    n =
                      ["absolute", "fixed"].indexOf(l(e).position) >= 0 && s(e)
                        ? O(e)
                        : e;
                  return a(n)
                    ? t.filter(function (e) {
                        return a(e) && re(e, n) && "body" !== u(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          o = [].concat(r, [n]),
          i = o[0],
          c = o.reduce(function (t, n) {
            var r = ie(e, n);
            return (
              (t.top = F(r.top, t.top)),
              (t.right = X(r.right, t.right)),
              (t.bottom = X(r.bottom, t.bottom)),
              (t.left = F(r.left, t.left)),
              t
            );
          }, ie(e, i));
        return (
          (c.width = c.right - c.left),
          (c.height = c.bottom - c.top),
          (c.x = c.left),
          (c.y = c.top),
          c
        );
      }
      function se(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function ce(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function ue(e, t) {
        void 0 === t && (t = {});
        var n = t,
          o = n.placement,
          i = void 0 === o ? e.placement : o,
          s = n.boundary,
          c = void 0 === s ? "clippingParents" : s,
          u = n.rootBoundary,
          p = void 0 === u ? C : u,
          l = n.elementContext,
          d = void 0 === l ? P : l,
          v = n.altBoundary,
          m = void 0 !== v && v,
          h = n.padding,
          g = void 0 === h ? 0 : h,
          y = se("number" !== typeof g ? g : ce(g, L)),
          b = d === P ? "reference" : P,
          w = e.elements.reference,
          O = e.rects.popper,
          A = e.elements[m ? b : d],
          T = ae(a(A) ? A : A.contextElement || f(e.elements.popper), c, p),
          D = r(w),
          k = $({
            reference: D,
            element: O,
            strategy: "absolute",
            placement: i,
          }),
          M = oe(Object.assign({}, O, k)),
          S = d === P ? M : D,
          R = {
            top: T.top - S.top + y.top,
            bottom: S.bottom - T.bottom + y.bottom,
            left: T.left - S.left + y.left,
            right: S.right - T.right + y.right,
          },
          I = e.modifiersData.offset;
        if (d === P && I) {
          var H = I[i];
          Object.keys(R).forEach(function (e) {
            var t = [j, E].indexOf(e) >= 0 ? 1 : -1,
              n = [x, E].indexOf(e) >= 0 ? "y" : "x";
            R[e] += H[n] * t;
          });
        }
        return R;
      }
      function fe(e, t, n) {
        return F(e, X(t, n));
      }
      function pe(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function le(e) {
        return [x, j, E, A].some(function (t) {
          return e[t] >= 0;
        });
      }
      var de = V({
          defaultModifiers: [
            _,
            z,
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = n.gpuAcceleration,
                  o = void 0 === r || r,
                  i = n.adaptive,
                  a = void 0 === i || i,
                  s = n.roundOffsets,
                  c = void 0 === s || s,
                  u = {
                    placement: U(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    J(
                      Object.assign({}, u, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: a,
                        roundOffsets: c,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      J(
                        Object.assign({}, u, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: c,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement }
                  ));
              },
              data: {},
            },
            G,
            {
              name: "offset",
              enabled: !0,
              phase: "main",
              requires: ["popperOffsets"],
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name,
                  o = n.offset,
                  i = void 0 === o ? [0, 0] : o,
                  a = S.reduce(function (e, n) {
                    return (
                      (e[n] = (function (e, t, n) {
                        var r = U(e),
                          o = [A, x].indexOf(r) >= 0 ? -1 : 1,
                          i =
                            "function" === typeof n
                              ? n(Object.assign({}, t, { placement: e }))
                              : n,
                          a = i[0],
                          s = i[1];
                        return (
                          (a = a || 0),
                          (s = (s || 0) * o),
                          [A, j].indexOf(r) >= 0
                            ? { x: s, y: a }
                            : { x: a, y: s }
                        );
                      })(n, t.rects, i)),
                      e
                    );
                  }, {}),
                  s = a[t.placement],
                  c = s.x,
                  u = s.y;
                null != t.modifiersData.popperOffsets &&
                  ((t.modifiersData.popperOffsets.x += c),
                  (t.modifiersData.popperOffsets.y += u)),
                  (t.modifiersData[r] = a);
              },
            },
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name;
                if (!t.modifiersData[r]._skip) {
                  for (
                    var o = n.mainAxis,
                      i = void 0 === o || o,
                      a = n.altAxis,
                      s = void 0 === a || a,
                      c = n.fallbackPlacements,
                      u = n.padding,
                      f = n.boundary,
                      p = n.rootBoundary,
                      l = n.altBoundary,
                      d = n.flipVariations,
                      v = void 0 === d || d,
                      m = n.allowedAutoPlacements,
                      h = t.options.placement,
                      g = U(h),
                      y =
                        c ||
                        (g === h || !v
                          ? [ee(h)]
                          : (function (e) {
                              if (U(e) === T) return [];
                              var t = ee(e);
                              return [ne(e), t, ne(t)];
                            })(h)),
                      b = [h].concat(y).reduce(function (e, n) {
                        return e.concat(
                          U(n) === T
                            ? (function (e, t) {
                                void 0 === t && (t = {});
                                var n = t,
                                  r = n.placement,
                                  o = n.boundary,
                                  i = n.rootBoundary,
                                  a = n.padding,
                                  s = n.flipVariations,
                                  c = n.allowedAutoPlacements,
                                  u = void 0 === c ? S : c,
                                  f = q(r),
                                  p = f
                                    ? s
                                      ? M
                                      : M.filter(function (e) {
                                          return q(e) === f;
                                        })
                                    : L,
                                  l = p.filter(function (e) {
                                    return u.indexOf(e) >= 0;
                                  });
                                0 === l.length && (l = p);
                                var d = l.reduce(function (t, n) {
                                  return (
                                    (t[n] = ue(e, {
                                      placement: n,
                                      boundary: o,
                                      rootBoundary: i,
                                      padding: a,
                                    })[U(n)]),
                                    t
                                  );
                                }, {});
                                return Object.keys(d).sort(function (e, t) {
                                  return d[e] - d[t];
                                });
                              })(t, {
                                placement: n,
                                boundary: f,
                                rootBoundary: p,
                                padding: u,
                                flipVariations: v,
                                allowedAutoPlacements: m,
                              })
                            : n
                        );
                      }, []),
                      w = t.rects.reference,
                      O = t.rects.popper,
                      k = new Map(),
                      C = !0,
                      P = b[0],
                      R = 0;
                    R < b.length;
                    R++
                  ) {
                    var I = b[R],
                      H = U(I),
                      B = q(I) === D,
                      N = [x, E].indexOf(H) >= 0,
                      V = N ? "width" : "height",
                      W = ue(t, {
                        placement: I,
                        boundary: f,
                        rootBoundary: p,
                        altBoundary: l,
                        padding: u,
                      }),
                      _ = N ? (B ? j : A) : B ? E : x;
                    w[V] > O[V] && (_ = ee(_));
                    var Z = ee(_),
                      $ = [];
                    if (
                      (i && $.push(W[H] <= 0),
                      s && $.push(W[_] <= 0, W[Z] <= 0),
                      $.every(function (e) {
                        return e;
                      }))
                    ) {
                      (P = I), (C = !1);
                      break;
                    }
                    k.set(I, $);
                  }
                  if (C)
                    for (
                      var z = function (e) {
                          var t = b.find(function (t) {
                            var n = k.get(t);
                            if (n)
                              return n.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (P = t), "break";
                        },
                        F = v ? 3 : 1;
                      F > 0;
                      F--
                    ) {
                      if ("break" === z(F)) break;
                    }
                  t.placement !== P &&
                    ((t.modifiersData[r]._skip = !0),
                    (t.placement = P),
                    (t.reset = !0));
                }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 },
            },
            {
              name: "preventOverflow",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name,
                  o = n.mainAxis,
                  i = void 0 === o || o,
                  a = n.altAxis,
                  s = void 0 !== a && a,
                  c = n.boundary,
                  u = n.rootBoundary,
                  f = n.altBoundary,
                  p = n.padding,
                  l = n.tether,
                  d = void 0 === l || l,
                  v = n.tetherOffset,
                  h = void 0 === v ? 0 : v,
                  g = ue(t, {
                    boundary: c,
                    rootBoundary: u,
                    padding: p,
                    altBoundary: f,
                  }),
                  y = U(t.placement),
                  b = q(t.placement),
                  w = !b,
                  T = Z(y),
                  L = "x" === T ? "y" : "x",
                  k = t.modifiersData.popperOffsets,
                  C = t.rects.reference,
                  P = t.rects.popper,
                  M =
                    "function" === typeof h
                      ? h(
                          Object.assign({}, t.rects, { placement: t.placement })
                        )
                      : h,
                  S = { x: 0, y: 0 };
                if (k) {
                  if (i || s) {
                    var R = "y" === T ? x : A,
                      I = "y" === T ? E : j,
                      H = "y" === T ? "height" : "width",
                      B = k[T],
                      N = k[T] + g[R],
                      V = k[T] - g[I],
                      W = d ? -P[H] / 2 : 0,
                      _ = b === D ? C[H] : P[H],
                      $ = b === D ? -P[H] : -C[H],
                      z = t.elements.arrow,
                      Y = d && z ? m(z) : { width: 0, height: 0 },
                      K = t.modifiersData["arrow#persistent"]
                        ? t.modifiersData["arrow#persistent"].padding
                        : { top: 0, right: 0, bottom: 0, left: 0 },
                      J = K[R],
                      G = K[I],
                      Q = fe(0, C[H], Y[H]),
                      ee = w ? C[H] / 2 - W - Q - J - M : _ - Q - J - M,
                      te = w ? -C[H] / 2 + W + Q + G + M : $ + Q + G + M,
                      ne = t.elements.arrow && O(t.elements.arrow),
                      re = ne
                        ? "y" === T
                          ? ne.clientTop || 0
                          : ne.clientLeft || 0
                        : 0,
                      oe = t.modifiersData.offset
                        ? t.modifiersData.offset[t.placement][T]
                        : 0,
                      ie = k[T] + ee - oe - re,
                      ae = k[T] + te - oe;
                    if (i) {
                      var se = fe(d ? X(N, ie) : N, B, d ? F(V, ae) : V);
                      (k[T] = se), (S[T] = se - B);
                    }
                    if (s) {
                      var ce = "x" === T ? x : A,
                        pe = "x" === T ? E : j,
                        le = k[L],
                        de = le + g[ce],
                        ve = le - g[pe],
                        me = fe(d ? X(de, ie) : de, le, d ? F(ve, ae) : ve);
                      (k[L] = me), (S[L] = me - le);
                    }
                  }
                  t.modifiersData[r] = S;
                }
              },
              requiresIfExists: ["offset"],
            },
            {
              name: "arrow",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t,
                  n = e.state,
                  r = e.name,
                  o = e.options,
                  i = n.elements.arrow,
                  a = n.modifiersData.popperOffsets,
                  s = U(n.placement),
                  c = Z(s),
                  u = [A, j].indexOf(s) >= 0 ? "height" : "width";
                if (i && a) {
                  var f = (function (e, t) {
                      return se(
                        "number" !==
                          typeof (e =
                            "function" === typeof e
                              ? e(
                                  Object.assign({}, t.rects, {
                                    placement: t.placement,
                                  })
                                )
                              : e)
                          ? e
                          : ce(e, L)
                      );
                    })(o.padding, n),
                    p = m(i),
                    l = "y" === c ? x : A,
                    d = "y" === c ? E : j,
                    v =
                      n.rects.reference[u] +
                      n.rects.reference[c] -
                      a[c] -
                      n.rects.popper[u],
                    h = a[c] - n.rects.reference[c],
                    g = O(i),
                    y = g
                      ? "y" === c
                        ? g.clientHeight || 0
                        : g.clientWidth || 0
                      : 0,
                    b = v / 2 - h / 2,
                    w = f[l],
                    T = y - p[u] - f[d],
                    D = y / 2 - p[u] / 2 + b,
                    k = fe(w, D, T),
                    C = c;
                  n.modifiersData[r] =
                    (((t = {})[C] = k), (t.centerOffset = k - D), t);
                }
              },
              effect: function (e) {
                var t = e.state,
                  n = e.options.element,
                  r = void 0 === n ? "[data-popper-arrow]" : n;
                null != r &&
                  ("string" !== typeof r ||
                    (r = t.elements.popper.querySelector(r))) &&
                  re(t.elements.popper, r) &&
                  (t.elements.arrow = r);
              },
              requires: ["popperOffsets"],
              requiresIfExists: ["preventOverflow"],
            },
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  o = t.rects.popper,
                  i = t.modifiersData.preventOverflow,
                  a = ue(t, { elementContext: "reference" }),
                  s = ue(t, { altBoundary: !0 }),
                  c = pe(a, r),
                  u = pe(s, o, i),
                  f = le(c),
                  p = le(u);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: c,
                  popperEscapeOffsets: u,
                  isReferenceHidden: f,
                  hasPopperEscaped: p,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": f,
                      "data-popper-escaped": p,
                    }
                  ));
              },
            },
          ],
        }),
        ve =
          '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
        me = "tippy-content",
        he = "tippy-backdrop",
        ge = "tippy-arrow",
        ye = "tippy-svg-arrow",
        be = { passive: !0, capture: !0 };
      function we(e, t, n) {
        if (Array.isArray(e)) {
          var r = e[t];
          return null == r ? (Array.isArray(n) ? n[t] : n) : r;
        }
        return e;
      }
      function Oe(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
      }
      function xe(e, t) {
        return "function" === typeof e ? e.apply(void 0, t) : e;
      }
      function Ee(e, t) {
        return 0 === t
          ? e
          : function (r) {
              clearTimeout(n),
                (n = setTimeout(function () {
                  e(r);
                }, t));
            };
        var n;
      }
      function je(e, t) {
        var n = Object.assign({}, e);
        return (
          t.forEach(function (e) {
            delete n[e];
          }),
          n
        );
      }
      function Ae(e) {
        return [].concat(e);
      }
      function Te(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Le(e) {
        return e.split("-")[0];
      }
      function De(e) {
        return [].slice.call(e);
      }
      function ke() {
        return document.createElement("div");
      }
      function Ce(e) {
        return ["Element", "Fragment"].some(function (t) {
          return Oe(e, t);
        });
      }
      function Pe(e) {
        return Oe(e, "MouseEvent");
      }
      function Me(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e);
      }
      function Se(e) {
        return Ce(e)
          ? [e]
          : (function (e) {
              return Oe(e, "NodeList");
            })(e)
          ? De(e)
          : Array.isArray(e)
          ? e
          : De(document.querySelectorAll(e));
      }
      function Re(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function Ie(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function He(e) {
        var t,
          n = Ae(e)[0];
        return (null == n || null == (t = n.ownerDocument) ? void 0 : t.body)
          ? n.ownerDocument
          : document;
      }
      function Be(e, t, n) {
        var r = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e[r](t, n);
        });
      }
      var Ne = { isTouch: !1 },
        Ve = 0;
      function We() {
        Ne.isTouch ||
          ((Ne.isTouch = !0),
          window.performance && document.addEventListener("mousemove", _e));
      }
      function _e() {
        var e = performance.now();
        e - Ve < 20 &&
          ((Ne.isTouch = !1), document.removeEventListener("mousemove", _e)),
          (Ve = e);
      }
      function Ue() {
        var e = document.activeElement;
        if (Me(e)) {
          var t = e._tippy;
          e.blur && !t.state.isVisible && e.blur();
        }
      }
      var qe =
          "undefined" !== typeof window && "undefined" !== typeof document
            ? navigator.userAgent
            : "",
        Ze = /MSIE |Trident\//.test(qe);
      var $e = {
          animateFill: !1,
          followCursor: !1,
          inlinePositioning: !1,
          sticky: !1,
        },
        ze = Object.assign(
          {
            appendTo: function () {
              return document.body;
            },
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          $e,
          {},
          {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999,
          }
        ),
        Fe = Object.keys(ze);
      function Xe(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
          var r = n.name,
            o = n.defaultValue;
          return r && (t[r] = void 0 !== e[r] ? e[r] : o), t;
        }, {});
        return Object.assign({}, e, {}, t);
      }
      function Ye(e, t) {
        var n = Object.assign(
          {},
          t,
          { content: xe(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t
                    ? Object.keys(Xe(Object.assign({}, ze, { plugins: t })))
                    : Fe
                ).reduce(function (t, n) {
                  var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                  if (!r) return t;
                  if ("content" === n) t[n] = r;
                  else
                    try {
                      t[n] = JSON.parse(r);
                    } catch (o) {
                      t[n] = r;
                    }
                  return t;
                }, {});
              })(e, t.plugins)
        );
        return (
          (n.aria = Object.assign({}, ze.aria, {}, n.aria)),
          (n.aria = {
            expanded:
              "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
            content:
              "auto" === n.aria.content
                ? t.interactive
                  ? null
                  : "describedby"
                : n.aria.content,
          }),
          n
        );
      }
      function Ke(e, t) {
        e.innerHTML = t;
      }
      function Je(e) {
        var t = ke();
        return (
          !0 === e
            ? (t.className = ge)
            : ((t.className = ye), Ce(e) ? t.appendChild(e) : Ke(t, e)),
          t
        );
      }
      function Ge(e, t) {
        Ce(t.content)
          ? (Ke(e, ""), e.appendChild(t.content))
          : "function" !== typeof t.content &&
            (t.allowHTML ? Ke(e, t.content) : (e.textContent = t.content));
      }
      function Qe(e) {
        var t = e.firstElementChild,
          n = De(t.children);
        return {
          box: t,
          content: n.find(function (e) {
            return e.classList.contains(me);
          }),
          arrow: n.find(function (e) {
            return e.classList.contains(ge) || e.classList.contains(ye);
          }),
          backdrop: n.find(function (e) {
            return e.classList.contains(he);
          }),
        };
      }
      function et(e) {
        var t = ke(),
          n = ke();
        (n.className = "tippy-box"),
          n.setAttribute("data-state", "hidden"),
          n.setAttribute("tabindex", "-1");
        var r = ke();
        function o(n, r) {
          var o = Qe(t),
            i = o.box,
            a = o.content,
            s = o.arrow;
          r.theme
            ? i.setAttribute("data-theme", r.theme)
            : i.removeAttribute("data-theme"),
            "string" === typeof r.animation
              ? i.setAttribute("data-animation", r.animation)
              : i.removeAttribute("data-animation"),
            r.inertia
              ? i.setAttribute("data-inertia", "")
              : i.removeAttribute("data-inertia"),
            (i.style.maxWidth =
              "number" === typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth),
            r.role ? i.setAttribute("role", r.role) : i.removeAttribute("role"),
            (n.content === r.content && n.allowHTML === r.allowHTML) ||
              Ge(a, e.props),
            r.arrow
              ? s
                ? n.arrow !== r.arrow &&
                  (i.removeChild(s), i.appendChild(Je(r.arrow)))
                : i.appendChild(Je(r.arrow))
              : s && i.removeChild(s);
        }
        return (
          (r.className = me),
          r.setAttribute("data-state", "hidden"),
          Ge(r, e.props),
          t.appendChild(n),
          n.appendChild(r),
          o(e.props, e.props),
          { popper: t, onUpdate: o }
        );
      }
      et.$$tippy = !0;
      var tt = 1,
        nt = [],
        rt = [];
      function ot(e, t) {
        var n,
          r,
          o,
          i,
          a,
          s,
          c,
          u,
          f,
          p = Ye(
            e,
            Object.assign(
              {},
              ze,
              {},
              Xe(
                ((n = t),
                Object.keys(n).reduce(function (e, t) {
                  return void 0 !== n[t] && (e[t] = n[t]), e;
                }, {}))
              )
            )
          ),
          l = !1,
          d = !1,
          v = !1,
          m = !1,
          h = [],
          g = Ee(X, p.interactiveDebounce),
          y = tt++,
          b = (f = p.plugins).filter(function (e, t) {
            return f.indexOf(e) === t;
          }),
          w = {
            id: y,
            reference: e,
            popper: ke(),
            popperInstance: null,
            props: p,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: b,
            clearDelayTimeouts: function () {
              clearTimeout(r), clearTimeout(o), cancelAnimationFrame(i);
            },
            setProps: function (t) {
              0;
              if (w.state.isDestroyed) return;
              R("onBeforeUpdate", [w, t]), z();
              var n = w.props,
                r = Ye(
                  e,
                  Object.assign({}, w.props, {}, t, { ignoreAttributes: !0 })
                );
              (w.props = r),
                $(),
                n.interactiveDebounce !== r.interactiveDebounce &&
                  (B(), (g = Ee(X, r.interactiveDebounce)));
              n.triggerTarget && !r.triggerTarget
                ? Ae(n.triggerTarget).forEach(function (e) {
                    e.removeAttribute("aria-expanded");
                  })
                : r.triggerTarget && e.removeAttribute("aria-expanded");
              H(), S(), E && E(n, r);
              w.popperInstance &&
                (G(),
                ee().forEach(function (e) {
                  requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
                }));
              R("onAfterUpdate", [w, t]);
            },
            setContent: function (e) {
              w.setProps({ content: e });
            },
            show: function () {
              0;
              var e = w.state.isVisible,
                t = w.state.isDestroyed,
                n = !w.state.isEnabled,
                r = Ne.isTouch && !w.props.touch,
                o = we(w.props.duration, 0, ze.duration);
              if (e || t || n || r) return;
              if (k().hasAttribute("disabled")) return;
              if ((R("onShow", [w], !1), !1 === w.props.onShow(w))) return;
              (w.state.isVisible = !0), D() && (x.style.visibility = "visible");
              S(), _(), w.state.isMounted || (x.style.transition = "none");
              if (D()) {
                var i = P(),
                  a = i.box,
                  s = i.content;
                Re([a, s], 0);
              }
              (c = function () {
                var e;
                if (w.state.isVisible && !m) {
                  if (
                    ((m = !0),
                    x.offsetHeight,
                    (x.style.transition = w.props.moveTransition),
                    D() && w.props.animation)
                  ) {
                    var t = P(),
                      n = t.box,
                      r = t.content;
                    Re([n, r], o), Ie([n, r], "visible");
                  }
                  I(),
                    H(),
                    Te(rt, w),
                    null == (e = w.popperInstance) || e.forceUpdate(),
                    (w.state.isMounted = !0),
                    R("onMount", [w]),
                    w.props.animation &&
                      D() &&
                      (function (e, t) {
                        q(e, t);
                      })(o, function () {
                        (w.state.isShown = !0), R("onShown", [w]);
                      });
                }
              }),
                (function () {
                  var e,
                    t = w.props.appendTo,
                    n = k();
                  e =
                    (w.props.interactive && t === ze.appendTo) || "parent" === t
                      ? n.parentNode
                      : xe(t, [n]);
                  e.contains(x) || e.appendChild(x);
                  G(), !1;
                })();
            },
            hide: function () {
              0;
              var e = !w.state.isVisible,
                t = w.state.isDestroyed,
                n = !w.state.isEnabled,
                r = we(w.props.duration, 1, ze.duration);
              if (e || t || n) return;
              if ((R("onHide", [w], !1), !1 === w.props.onHide(w))) return;
              (w.state.isVisible = !1),
                (w.state.isShown = !1),
                (m = !1),
                (l = !1),
                D() && (x.style.visibility = "hidden");
              if ((B(), U(), S(), D())) {
                var o = P(),
                  i = o.box,
                  a = o.content;
                w.props.animation && (Re([i, a], r), Ie([i, a], "hidden"));
              }
              I(),
                H(),
                w.props.animation
                  ? D() &&
                    (function (e, t) {
                      q(e, function () {
                        !w.state.isVisible &&
                          x.parentNode &&
                          x.parentNode.contains(x) &&
                          t();
                      });
                    })(r, w.unmount)
                  : w.unmount();
            },
            hideWithInteractivity: function (e) {
              0;
              C().addEventListener("mousemove", g), Te(nt, g), g(e);
            },
            enable: function () {
              w.state.isEnabled = !0;
            },
            disable: function () {
              w.hide(), (w.state.isEnabled = !1);
            },
            unmount: function () {
              0;
              w.state.isVisible && w.hide();
              if (!w.state.isMounted) return;
              Q(),
                ee().forEach(function (e) {
                  e._tippy.unmount();
                }),
                x.parentNode && x.parentNode.removeChild(x);
              (rt = rt.filter(function (e) {
                return e !== w;
              })),
                (w.state.isMounted = !1),
                R("onHidden", [w]);
            },
            destroy: function () {
              0;
              if (w.state.isDestroyed) return;
              w.clearDelayTimeouts(),
                w.unmount(),
                z(),
                delete e._tippy,
                (w.state.isDestroyed = !0),
                R("onDestroy", [w]);
            },
          };
        if (!p.render) return w;
        var O = p.render(w),
          x = O.popper,
          E = O.onUpdate;
        x.setAttribute("data-tippy-root", ""),
          (x.id = "tippy-" + w.id),
          (w.popper = x),
          (e._tippy = w),
          (x._tippy = w);
        var j = b.map(function (e) {
            return e.fn(w);
          }),
          A = e.hasAttribute("aria-expanded");
        return (
          $(),
          H(),
          S(),
          R("onCreate", [w]),
          p.showOnCreate && te(),
          x.addEventListener("mouseenter", function () {
            w.props.interactive && w.state.isVisible && w.clearDelayTimeouts();
          }),
          x.addEventListener("mouseleave", function (e) {
            w.props.interactive &&
              w.props.trigger.indexOf("mouseenter") >= 0 &&
              (C().addEventListener("mousemove", g), g(e));
          }),
          w
        );
        function T() {
          var e = w.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function L() {
          return "hold" === T()[0];
        }
        function D() {
          var e;
          return !!(null == (e = w.props.render) ? void 0 : e.$$tippy);
        }
        function k() {
          return u || e;
        }
        function C() {
          var e = k().parentNode;
          return e ? He(e) : document;
        }
        function P() {
          return Qe(x);
        }
        function M(e) {
          return (w.state.isMounted && !w.state.isVisible) ||
            Ne.isTouch ||
            (a && "focus" === a.type)
            ? 0
            : we(w.props.delay, e ? 0 : 1, ze.delay);
        }
        function S() {
          (x.style.pointerEvents =
            w.props.interactive && w.state.isVisible ? "" : "none"),
            (x.style.zIndex = "" + w.props.zIndex);
        }
        function R(e, t, n) {
          var r;
          (void 0 === n && (n = !0),
          j.forEach(function (n) {
            n[e] && n[e].apply(void 0, t);
          }),
          n) && (r = w.props)[e].apply(r, t);
        }
        function I() {
          var t = w.props.aria;
          if (t.content) {
            var n = "aria-" + t.content,
              r = x.id;
            Ae(w.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(n);
              if (w.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
              else {
                var o = t && t.replace(r, "").trim();
                o ? e.setAttribute(n, o) : e.removeAttribute(n);
              }
            });
          }
        }
        function H() {
          !A &&
            w.props.aria.expanded &&
            Ae(w.props.triggerTarget || e).forEach(function (e) {
              w.props.interactive
                ? e.setAttribute(
                    "aria-expanded",
                    w.state.isVisible && e === k() ? "true" : "false"
                  )
                : e.removeAttribute("aria-expanded");
            });
        }
        function B() {
          C().removeEventListener("mousemove", g),
            (nt = nt.filter(function (e) {
              return e !== g;
            }));
        }
        function N(e) {
          if (
            (!Ne.isTouch || (!v && "mousedown" !== e.type)) &&
            (!w.props.interactive || !x.contains(e.target))
          ) {
            if (k().contains(e.target)) {
              if (Ne.isTouch) return;
              if (w.state.isVisible && w.props.trigger.indexOf("click") >= 0)
                return;
            } else R("onClickOutside", [w, e]);
            !0 === w.props.hideOnClick &&
              (w.clearDelayTimeouts(),
              w.hide(),
              (d = !0),
              setTimeout(function () {
                d = !1;
              }),
              w.state.isMounted || U());
          }
        }
        function V() {
          v = !0;
        }
        function W() {
          v = !1;
        }
        function _() {
          var e = C();
          e.addEventListener("mousedown", N, !0),
            e.addEventListener("touchend", N, be),
            e.addEventListener("touchstart", W, be),
            e.addEventListener("touchmove", V, be);
        }
        function U() {
          var e = C();
          e.removeEventListener("mousedown", N, !0),
            e.removeEventListener("touchend", N, be),
            e.removeEventListener("touchstart", W, be),
            e.removeEventListener("touchmove", V, be);
        }
        function q(e, t) {
          var n = P().box;
          function r(e) {
            e.target === n && (Be(n, "remove", r), t());
          }
          if (0 === e) return t();
          Be(n, "remove", s), Be(n, "add", r), (s = r);
        }
        function Z(t, n, r) {
          void 0 === r && (r = !1),
            Ae(w.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, r),
                h.push({ node: e, eventType: t, handler: n, options: r });
            });
        }
        function $() {
          var e;
          L() &&
            (Z("touchstart", F, { passive: !0 }),
            Z("touchend", Y, { passive: !0 })),
            ((e = w.props.trigger), e.split(/\s+/).filter(Boolean)).forEach(
              function (e) {
                if ("manual" !== e)
                  switch ((Z(e, F), e)) {
                    case "mouseenter":
                      Z("mouseleave", Y);
                      break;
                    case "focus":
                      Z(Ze ? "focusout" : "blur", K);
                      break;
                    case "focusin":
                      Z("focusout", K);
                  }
              }
            );
        }
        function z() {
          h.forEach(function (e) {
            var t = e.node,
              n = e.eventType,
              r = e.handler,
              o = e.options;
            t.removeEventListener(n, r, o);
          }),
            (h = []);
        }
        function F(e) {
          var t,
            n = !1;
          if (w.state.isEnabled && !J(e) && !d) {
            var r = "focus" === (null == (t = a) ? void 0 : t.type);
            (a = e),
              (u = e.currentTarget),
              H(),
              !w.state.isVisible &&
                Pe(e) &&
                nt.forEach(function (t) {
                  return t(e);
                }),
              "click" === e.type &&
              (w.props.trigger.indexOf("mouseenter") < 0 || l) &&
              !1 !== w.props.hideOnClick &&
              w.state.isVisible
                ? (n = !0)
                : te(e),
              "click" === e.type && (l = !n),
              n && !r && ne(e);
          }
        }
        function X(e) {
          var t = e.target,
            n = k().contains(t) || x.contains(t);
          ("mousemove" === e.type && n) ||
            ((function (e, t) {
              var n = t.clientX,
                r = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                  o = e.popperState,
                  i = e.props.interactiveBorder,
                  a = Le(o.placement),
                  s = o.modifiersData.offset;
                if (!s) return !0;
                var c = "bottom" === a ? s.top.y : 0,
                  u = "top" === a ? s.bottom.y : 0,
                  f = "right" === a ? s.left.x : 0,
                  p = "left" === a ? s.right.x : 0,
                  l = t.top - r + c > i,
                  d = r - t.bottom - u > i,
                  v = t.left - n + f > i,
                  m = n - t.right - p > i;
                return l || d || v || m;
              });
            })(
              ee()
                .concat(x)
                .map(function (e) {
                  var t,
                    n =
                      null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                  return n
                    ? {
                        popperRect: e.getBoundingClientRect(),
                        popperState: n,
                        props: p,
                      }
                    : null;
                })
                .filter(Boolean),
              e
            ) &&
              (B(), ne(e)));
        }
        function Y(e) {
          J(e) ||
            (w.props.trigger.indexOf("click") >= 0 && l) ||
            (w.props.interactive ? w.hideWithInteractivity(e) : ne(e));
        }
        function K(e) {
          (w.props.trigger.indexOf("focusin") < 0 && e.target !== k()) ||
            (w.props.interactive &&
              e.relatedTarget &&
              x.contains(e.relatedTarget)) ||
            ne(e);
        }
        function J(e) {
          return !!Ne.isTouch && L() !== e.type.indexOf("touch") >= 0;
        }
        function G() {
          Q();
          var t = w.props,
            n = t.popperOptions,
            r = t.placement,
            o = t.offset,
            i = t.getReferenceClientRect,
            a = t.moveTransition,
            s = D() ? Qe(x).arrow : null,
            u = i
              ? {
                  getBoundingClientRect: i,
                  contextElement: i.contextElement || k(),
                }
              : e,
            f = [
              { name: "offset", options: { offset: o } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !a } },
              {
                name: "$$tippy",
                enabled: !0,
                phase: "beforeWrite",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state;
                  if (D()) {
                    var n = P().box;
                    ["placement", "reference-hidden", "escaped"].forEach(
                      function (e) {
                        "placement" === e
                          ? n.setAttribute("data-placement", t.placement)
                          : t.attributes.popper["data-popper-" + e]
                          ? n.setAttribute("data-" + e, "")
                          : n.removeAttribute("data-" + e);
                      }
                    ),
                      (t.attributes.popper = {});
                  }
                },
              },
            ];
          D() &&
            s &&
            f.push({ name: "arrow", options: { element: s, padding: 3 } }),
            f.push.apply(f, (null == n ? void 0 : n.modifiers) || []),
            (w.popperInstance = de(
              u,
              x,
              Object.assign({}, n, {
                placement: r,
                onFirstUpdate: c,
                modifiers: f,
              })
            ));
        }
        function Q() {
          w.popperInstance &&
            (w.popperInstance.destroy(), (w.popperInstance = null));
        }
        function ee() {
          return De(x.querySelectorAll("[data-tippy-root]"));
        }
        function te(e) {
          w.clearDelayTimeouts(), e && R("onTrigger", [w, e]), _();
          var t = M(!0),
            n = T(),
            o = n[0],
            i = n[1];
          Ne.isTouch && "hold" === o && i && (t = i),
            t
              ? (r = setTimeout(function () {
                  w.show();
                }, t))
              : w.show();
        }
        function ne(e) {
          if (
            (w.clearDelayTimeouts(),
            R("onUntrigger", [w, e]),
            w.state.isVisible)
          ) {
            if (
              !(
                w.props.trigger.indexOf("mouseenter") >= 0 &&
                w.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                l
              )
            ) {
              var t = M(!1);
              t
                ? (o = setTimeout(function () {
                    w.state.isVisible && w.hide();
                  }, t))
                : (i = requestAnimationFrame(function () {
                    w.hide();
                  }));
            }
          } else U();
        }
      }
      function it(e, t) {
        void 0 === t && (t = {});
        var n = ze.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", We, be),
          window.addEventListener("blur", Ue);
        var r = Object.assign({}, t, { plugins: n }),
          o = Se(e).reduce(function (e, t) {
            var n = t && ot(t, r);
            return n && e.push(n), e;
          }, []);
        return Ce(e) ? o[0] : o;
      }
      (it.defaultProps = ze),
        (it.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            ze[t] = e[t];
          });
        }),
        (it.currentInput = Ne);
      var at = Object.assign({}, G, {
          effect: function (e) {
            var t = e.state,
              n = {
                popper: {
                  position: t.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            Object.assign(t.elements.popper.style, n.popper),
              (t.styles = n),
              t.elements.arrow &&
                Object.assign(t.elements.arrow.style, n.arrow);
          },
        }),
        st = function (e, t) {
          var n;
          void 0 === t && (t = {});
          var r,
            o = e,
            i = [],
            a = t.overrides,
            s = [],
            c = !1;
          function u() {
            i = o.map(function (e) {
              return e.reference;
            });
          }
          function f(e) {
            o.forEach(function (t) {
              e ? t.enable() : t.disable();
            });
          }
          function p(e) {
            return o.map(function (t) {
              var n = t.setProps;
              return (
                (t.setProps = function (o) {
                  n(o), t.reference === r && e.setProps(o);
                }),
                function () {
                  t.setProps = n;
                }
              );
            });
          }
          function l(e, t) {
            var n = i.indexOf(t);
            if (t !== r) {
              r = t;
              var s = (a || []).concat("content").reduce(function (e, t) {
                return (e[t] = o[n].props[t]), e;
              }, {});
              e.setProps(
                Object.assign({}, s, {
                  getReferenceClientRect:
                    "function" === typeof s.getReferenceClientRect
                      ? s.getReferenceClientRect
                      : function () {
                          return t.getBoundingClientRect();
                        },
                })
              );
            }
          }
          f(!1), u();
          var d = {
              fn: function () {
                return {
                  onDestroy: function () {
                    f(!0);
                  },
                  onHidden: function () {
                    r = null;
                  },
                  onClickOutside: function (e) {
                    e.props.showOnCreate && !c && ((c = !0), (r = null));
                  },
                  onShow: function (e) {
                    e.props.showOnCreate && !c && ((c = !0), l(e, i[0]));
                  },
                  onTrigger: function (e, t) {
                    l(e, t.currentTarget);
                  },
                };
              },
            },
            v = it(
              ke(),
              Object.assign({}, je(t, ["overrides"]), {
                plugins: [d].concat(t.plugins || []),
                triggerTarget: i,
                popperOptions: Object.assign({}, t.popperOptions, {
                  modifiers: [].concat(
                    (null == (n = t.popperOptions) ? void 0 : n.modifiers) ||
                      [],
                    [at]
                  ),
                }),
              })
            ),
            m = v.show;
          (v.show = function (e) {
            if ((m(), !r && null == e)) return l(v, i[0]);
            if (!r || null != e) {
              if ("number" === typeof e) return i[e] && l(v, i[e]);
              if (o.includes(e)) {
                var t = e.reference;
                return l(v, t);
              }
              return i.includes(e) ? l(v, e) : void 0;
            }
          }),
            (v.showNext = function () {
              var e = i[0];
              if (!r) return v.show(0);
              var t = i.indexOf(r);
              v.show(i[t + 1] || e);
            }),
            (v.showPrevious = function () {
              var e = i[i.length - 1];
              if (!r) return v.show(e);
              var t = i.indexOf(r),
                n = i[t - 1] || e;
              v.show(n);
            });
          var h = v.setProps;
          return (
            (v.setProps = function (e) {
              (a = e.overrides || a), h(e);
            }),
            (v.setInstances = function (e) {
              f(!0),
                s.forEach(function (e) {
                  return e();
                }),
                (o = e),
                f(!1),
                u(),
                p(v),
                v.setProps({ triggerTarget: i });
            }),
            (s = p(v)),
            v
          );
        };
      it.setDefaultProps({ render: et });
      var ct = it;
    },
  },
]);
