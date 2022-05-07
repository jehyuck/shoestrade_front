(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5592],
  {
    82830: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return w;
        },
      });
      var n = r(85893),
        a = r(67294),
        i = [
          {
            name: "Getting Started",
            icon: "fas fa-rocket",
            path: "/documentation/quick-start",
            routes: [
              { path: "/documentation/license", name: "License" },
              { path: "/documentation/quick-start", name: "Quick Start" },
              {
                path: "/documentation/what-is-tailwind-css",
                name: "What is Tailwind CSS",
              },
            ],
          },
          {
            name: "React.js Components",
            icon: "fab fa-react",
            path: "/documentation/react/alerts",
            routes: [
              { path: "/documentation/react/alerts", name: "Alerts" },
              {
                name: "Buttons",
                state: "reactButtonsState",
                subRoutes: [
                  {
                    path: "/documentation/react/buttons/filled",
                    name: "Filled",
                  },
                  {
                    path: "/documentation/react/buttons/outline",
                    name: "Outline",
                  },
                  { path: "/documentation/react/buttons/link", name: "Link" },
                ],
              },
              { path: "/documentation/react/cards", name: "Cards" },
              { path: "/documentation/react/checkbox", name: "Checkbox" },
              {
                name: "Dropdowns",
                state: "reactDropdownsState",
                subRoutes: [
                  {
                    path: "/documentation/react/dropdowns/filled",
                    name: "Filled",
                  },
                  {
                    path: "/documentation/react/dropdowns/outline",
                    name: "Outline",
                  },
                  { path: "/documentation/react/dropdowns/link", name: "Link" },
                ],
              },
              {
                name: "Dropups",
                state: "reactDropupsState",
                subRoutes: [
                  {
                    path: "/documentation/react/dropups/filled",
                    name: "Filled",
                  },
                  {
                    path: "/documentation/react/dropups/outline",
                    name: "Outline",
                  },
                  { path: "/documentation/react/dropups/link", name: "Link" },
                ],
              },
              { path: "/documentation/react/images", name: "Images" },
              { path: "/documentation/react/inputs", name: "Inputs" },
              { path: "/documentation/react/labels", name: "Labels" },
              { path: "/documentation/react/menus", name: "Menus" },
              { path: "/documentation/react/modals", name: "Modals" },
              { path: "/documentation/react/navbars", name: "Navbars" },
              { path: "/documentation/react/paginations", name: "Paginations" },
              { path: "/documentation/react/popovers", name: "Popovers" },
              {
                path: "/documentation/react/progressbars",
                name: "Progressbars",
              },
              {
                path: "/documentation/react/radioButton",
                name: "Radio Button",
              },
              {
                name: "Tabs",
                state: "reactTabsState",
                subRoutes: [
                  { path: "/documentation/react/tabs/text", name: "Text" },
                  { path: "/documentation/react/tabs/icon", name: "Icon" },
                ],
              },
              { path: "/documentation/react/textareas", name: "Text Areas" },
              { path: "/documentation/react/tooltips", name: "Tooltips" },
              {
                name: "Typography",
                state: "reactTypographyState",
                subRoutes: [
                  {
                    path: "/documentation/react/typography/headings",
                    name: "Headings",
                  },
                  {
                    path: "/documentation/react/typography/paragraph",
                    name: "Paragraph",
                  },
                  {
                    path: "/documentation/react/typography/leadText",
                    name: "Lead Text",
                  },
                  {
                    path: "/documentation/react/typography/quote",
                    name: "Quote",
                  },
                  {
                    path: "/documentation/react/typography/small",
                    name: "Small",
                  },
                ],
              },
            ],
          },
        ],
        o = r(74047),
        l = r(52700),
        s = r(4706),
        c = r(8127),
        u = r(44102),
        d = r(20775),
        p = r(26265),
        m = r(41664),
        h = r(11163);
      function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(r), !0).forEach(function (e) {
                (0, p.Z)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function x(t) {
        var e = (function () {
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
            n = (0, d.Z)(t);
          if (e) {
            var a = (0, d.Z)(this).constructor;
            r = Reflect.construct(n, arguments, a);
          } else r = n.apply(this, arguments);
          return (0, u.Z)(this, r);
        };
      }
      var g = (function (t) {
          (0, c.Z)(r, t);
          var e = x(r);
          function r(t) {
            var a;
            return (
              (0, o.Z)(this, r),
              (a = e.call(this, t)),
              (0, p.Z)((0, s.Z)(a), "getCollapseStates", function (t) {
                var e = {};
                return (
                  t &&
                    t.map(function (t, r) {
                      return (
                        t.subRoutes
                          ? (e = b(
                              b(
                                (0, p.Z)(
                                  {},
                                  t.state,
                                  a.getCollapseInitialState(t.subRoutes)
                                ),
                                a.getCollapseStates(t.subRoutes)
                              ),
                              e
                            ))
                          : t.routes &&
                            (e = b(b({}, a.getCollapseStates(t.routes)), e)),
                        null
                      );
                    }),
                  e
                );
              }),
              (0, p.Z)((0, s.Z)(a), "getRoutes", function (t) {
                return t.map(function (t, e) {
                  return t.disabled
                    ? (0, n.jsx)(
                        "li",
                        {
                          children: (0, n.jsx)("a", {
                            href: "#pablo",
                            onClick: function (t) {
                              return t.preventDefault();
                            },
                            className:
                              "text-gray-400 text-sm block mb-2 mx-4 no-underline cursor-not-allowed",
                            children: t.name,
                          }),
                        },
                        e
                      )
                    : t.routes
                    ? (0, n.jsxs)(
                        "div",
                        {
                          className: "mb-8",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, n.jsx)("i", {
                                  className: "".concat(
                                    t.icon,
                                    " bg-gradient-to-tr from-light-blue-700 to-light-blue-500 p-2 leading-none rounded-lg text-xs text-white"
                                  ),
                                }),
                                (0, n.jsx)("h4", {
                                  className:
                                    "font-serif text-gray-900 text-base font-medium",
                                  children: t.name,
                                }),
                              ],
                            }),
                            (0, n.jsx)("ul", {
                              className:
                                "block flex-wrap list-none pl-0 mb-0 mt-3",
                              children: a.getRoutes(t.routes),
                            }),
                          ],
                        },
                        e
                      )
                    : t.redirect
                    ? null
                    : t.subRoutes
                    ? (0, n.jsxs)(
                        "li",
                        {
                          className: "",
                          children: [
                            (0, n.jsxs)("a", {
                              href: "#pablo",
                              className:
                                (a.state[t.state]
                                  ? "text-light-blue-500"
                                  : "text-gray-700 hover:text-gray-900 ") +
                                " capitalize text-sm px-2.5 py-1.5 ml-7 rounded-lg block transition-all duration-300",
                              onClick: function (e) {
                                e.preventDefault(),
                                  a.setState(
                                    (0, p.Z)({}, t.state, !a.state[t.state])
                                  );
                              },
                              children: [
                                t.name,
                                " ",
                                (0, n.jsxs)("span", {
                                  className:
                                    "material-icons text-xs align-middle",
                                  style: {
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                  },
                                  children: [
                                    "keyboard_arrow_",
                                    a.state[t.state] ? "up" : "down",
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("ul", {
                              className:
                                (a.state[t.state] ? "block " : "hidden ") +
                                "flex-wrap list-none ml-2",
                              children: a.getRoutes(t.subRoutes),
                            }),
                          ],
                        },
                        e
                      )
                    : (0, n.jsx)(
                        "li",
                        {
                          children: (0, n.jsx)(m.default, {
                            href: t.path,
                            children: (0, n.jsx)("a", {
                              className:
                                (-1 !== a.props.router.pathname.indexOf(t.path)
                                  ? "bg-gray-200 text-gray-900 "
                                  : "text-gray-700 hover:text-gray-900 ") +
                                "capitalize text-sm text-gray-700 px-2.5 py-1.5 ml-7 rounded-lg block transition-all duration-300",
                              children: t.name,
                            }),
                          }),
                        },
                        e
                      );
                });
              }),
              (a.state = a.getCollapseStates(t.routes)),
              a
            );
          }
          return (
            (0, l.Z)(r, [
              {
                key: "getCollapseInitialState",
                value: function (t) {
                  for (var e = 0; e < t.length; e++) {
                    if (
                      t[e].subRoutes &&
                      this.getCollapseInitialState(t[e].subRoutes)
                    )
                      return !0;
                    if (-1 !== this.props.router.pathname.indexOf(t[e].path))
                      return !0;
                  }
                  return !1;
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, n.jsx)("div", {
                    className:
                      "w-72 h-screen px-6 pt-10 pb-16 sticky top-16 z-30 overflow-y-scroll border border-t-0 border-b-0 border-l-0 border-r flex-none lg:block hidden",
                    children: this.getRoutes(this.props.routes),
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        y = (0, h.withRouter)(g);
      function j() {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("footer", {
            className:
              "w-full py-5 px-9 border border-t border-b-0 border-r-0 border-l-0 border-gray-200 mt-16",
            children: (0, n.jsxs)("div", {
              className: "flex justify-between",
              children: [
                (0, n.jsxs)("p", {
                  className: "text-gray-700 text-center",
                  children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " Material Tailwind",
                  ],
                }),
                (0, n.jsxs)("ul", {
                  className: "list-none flex gap-8",
                  children: [
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)("a", {
                        className:
                          "text-gray-700 hover:text-gray-900 block pb-2 text-sm",
                        href: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=material-tailwind",
                        target: "_blank",
                        children: "MIT License",
                      }),
                    }),
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)("a", {
                        className:
                          "text-gray-700 hover:text-gray-900 block pb-2 text-sm",
                        href: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=material-tailwind",
                        target: "_blank",
                        children: "Contribute",
                      }),
                    }),
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)("a", {
                        className:
                          "text-gray-700 hover:text-gray-900 block pb-2 text-sm",
                        href: "https://github.com/creativetimofficial/material-tailwind/blob/main/CODE_OF_CONDUCT.md?ref=material-tailwind",
                        target: "_blank",
                        children: "Code of Conduct",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function w(t) {
        var e = t.children;
        return (0, n.jsx)("div", {
          className: "container max-w-full flex",
          children: (0, n.jsxs)("div", {
            className: "flex w-full",
            children: [
              (0, n.jsx)(y, { routes: i }),
              (0, n.jsxs)("div", {
                className: "w-full flex flex-col justify-between",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "pt-9 px-9 min-w-0 w-full flex-auto flex items-start gap-10",
                    children: (0, n.jsx)("div", {
                      className: "w-full lg:w-8/12",
                      children: e,
                    }),
                  }),
                  (0, n.jsx)(j, {}),
                ],
              }),
            ],
          }),
        });
      }
    },
    5981: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return a;
        },
      });
      var n = r(85893);
      r(67294);
      function a(t) {
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("h1", {
              className: "text-3xl font-serif font-medium text-gray-900 mb-4",
              children: t.title,
            }),
            (0, n.jsx)("p", {
              className: "w-10/12 text-gray-700 font-light",
              children: t.description,
            }),
            (0, n.jsx)("hr", {
              className:
                "border border-t border-b-0 border-l-0 border-r-0 border-gray-200 mt-10 mb-12",
            }),
          ],
        });
      }
    },
    68286: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return g;
        },
      });
      var n = r(85893),
        a = r(64121),
        i = r(67294),
        o = r(41664),
        l = r(13004),
        s = (r(41065), r(79145)),
        c = r(60158),
        u = r(56265),
        d = r(29330),
        p = r(94743),
        m = r(84158),
        h = r(19492),
        f = r(35952),
        b = r(64929),
        x = r(28300);
      function g() {
        var t = i.useState(!1),
          e = (0, a.Z)(t, 2),
          r = e[0],
          g = e[1];
        return (0, n.jsx)(l.Z, {
          color: "lightBlue",
          navbar: !0,
          children: (0, n.jsxs)("div", {
            className:
              "container max-w-full flex flex-col lg:flex-row lg:items-center px-4",
            children: [
              (0, n.jsxs)(s.Z, {
                children: [
                  (0, n.jsx)(o.default, {
                    href: "/",
                    children: (0, n.jsx)("a", {
                      children: (0, n.jsx)(c.Z, {
                        children: "Material Tailwind",
                      }),
                    }),
                  }),
                  (0, n.jsx)(u.Z, {
                    onClick: function () {
                      return g(!r);
                    },
                    ripple: "light",
                  }),
                ],
              }),
              (0, n.jsx)(d.Z, {
                open: r,
                children: (0, n.jsxs)(p.Z, {
                  children: [
                    (0, n.jsx)(o.default, {
                      href: "/documentation/quick-start",
                      children: (0, n.jsx)("a", {
                        children: (0, n.jsxs)(m.Z, {
                          ripple: "light",
                          children: [
                            (0, n.jsx)(x.Z, {
                              name: "description",
                              size: "2xl",
                            }),
                            "\xa0Docs",
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsx)(o.default, {
                      href: "/components",
                      children: (0, n.jsx)("a", {
                        children: (0, n.jsxs)(m.Z, {
                          ripple: "light",
                          children: [
                            (0, n.jsx)(x.Z, { name: "apps", size: "2xl" }),
                            "\xa0Components",
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsxs)(f.Z, {
                      color: "transparent",
                      buttonType: "link",
                      buttonText: (0, n.jsxs)("div", {
                        className: "flex items-center text-xs uppercase",
                        children: [
                          (0, n.jsx)(x.Z, {
                            name: "view_carousel",
                            size: "2xl",
                          }),
                          "\xa0Templates",
                        ],
                      }),
                      ripple: "light",
                      style: {
                        justifyContent: "start",
                        padding: "1.05rem 1.2rem",
                        fontWeight: 500,
                        color: "#fff",
                      },
                      children: [
                        (0, n.jsx)(b.Z, {
                          href: "https://demos.creative-tim.com/material-tailwind-kit-react/#/landing",
                          target: "_blank",
                          rel: "noreferrer",
                          color: "lightBlue",
                          ripple: "light",
                          children: "Landing",
                        }),
                        (0, n.jsx)(b.Z, {
                          href: "https://demos.creative-tim.com/material-tailwind-kit-react/#/profile",
                          target: "_blank",
                          rel: "noreferrer",
                          color: "lightBlue",
                          ripple: "light",
                          children: "Profile",
                        }),
                        (0, n.jsx)(b.Z, {
                          href: "https://demos.creative-tim.com/material-tailwind-kit-react/#/login",
                          target: "_blank",
                          rel: "noreferrer",
                          color: "lightBlue",
                          ripple: "light",
                          children: "Login",
                        }),
                        (0, n.jsx)(b.Z, {
                          href: "https://demos.creative-tim.com/material-tailwind-kit-react/#/register",
                          target: "_blank",
                          rel: "noreferrer",
                          color: "lightBlue",
                          ripple: "light",
                          children: "Register",
                        }),
                        (0, n.jsx)(b.Z, {
                          href: "https://demos.creative-tim.com/material-tailwind-dashboard-react/#/",
                          target: "_blank",
                          rel: "noreferrer",
                          color: "lightBlue",
                          ripple: "light",
                          children: "Dashboard",
                        }),
                      ],
                    }),
                    (0, n.jsxs)(h.Z, {
                      href: "https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind",
                      target: "_blank",
                      rel: "noreferrer",
                      ripple: "light",
                      children: [
                        (0, n.jsx)(x.Z, {
                          family: "font-awesome",
                          name: "fab fa-github",
                          size: "xl",
                        }),
                        "\xa0Github",
                      ],
                    }),
                    (0, n.jsx)(h.Z, {
                      href: "https://github.com/creativetimofficial/material-tailwind/issues?ref=material-tailwind",
                      target: "_blank",
                      rel: "noreferrer",
                      ripple: "light",
                      children: "Issues",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    4706: function (t, e, r) {
      "use strict";
      function n(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      r.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    74047: function (t, e, r) {
      "use strict";
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      r.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    52700: function (t, e, r) {
      "use strict";
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function a(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t;
      }
      r.d(e, {
        Z: function () {
          return a;
        },
      });
    },
    20775: function (t, e, r) {
      "use strict";
      function n(t) {
        return (n = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      r.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    8127: function (t, e, r) {
      "use strict";
      function n(t, e) {
        return (n =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function a(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && n(t, e);
      }
      r.d(e, {
        Z: function () {
          return a;
        },
      });
    },
    44102: function (t, e, r) {
      "use strict";
      function n(t) {
        return (n =
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
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      var a = r(4706);
      function i(t, e) {
        return !e || ("object" !== n(e) && "function" !== typeof e)
          ? (0, a.Z)(t)
          : e;
      }
    },
  },
]);
