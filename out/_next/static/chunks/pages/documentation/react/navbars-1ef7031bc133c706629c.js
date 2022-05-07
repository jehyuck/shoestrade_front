(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7332],
  {
    20640: function (e, n, t) {
      "use strict";
      var r = t(11742),
        a = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, n) {
        var t,
          o,
          i,
          l,
          c,
          s,
          p = !1;
        n || (n = {}), (t = n.debug || !1);
        try {
          if (
            ((i = r()),
            (l = document.createRange()),
            (c = document.getSelection()),
            ((s = document.createElement("span")).textContent = e),
            (s.style.all = "unset"),
            (s.style.position = "fixed"),
            (s.style.top = 0),
            (s.style.clip = "rect(0, 0, 0, 0)"),
            (s.style.whiteSpace = "pre"),
            (s.style.webkitUserSelect = "text"),
            (s.style.MozUserSelect = "text"),
            (s.style.msUserSelect = "text"),
            (s.style.userSelect = "text"),
            s.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), n.format))
                if (
                  (r.preventDefault(), "undefined" === typeof r.clipboardData)
                ) {
                  t && console.warn("unable to use e.clipboardData"),
                    t && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var o = a[n.format] || a.default;
                  window.clipboardData.setData(o, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(n.format, e);
              n.onCopy && (r.preventDefault(), n.onCopy(r.clipboardData));
            }),
            document.body.appendChild(s),
            l.selectNodeContents(s),
            c.addRange(l),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          p = !0;
        } catch (u) {
          t && console.error("unable to copy using execCommand: ", u),
            t && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(n.format || "text", e),
              n.onCopy && n.onCopy(window.clipboardData),
              (p = !0);
          } catch (u) {
            t && console.error("unable to copy using clipboardData: ", u),
              t && console.error("falling back to prompt"),
              (o = (function (e) {
                var n =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, n);
              })(
                "message" in n ? n.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(o, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(l)
              : c.removeAllRanges()),
            s && document.body.removeChild(s),
            i();
        }
        return p;
      };
    },
    53085: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var r = t(85893),
        a = (t(67294), t(46577)),
        o = t(84283),
        i = t(74855),
        l = [
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
      function s(e) {
        var n = e.children,
          t = e.activeColor,
          s = (e.activeFramework, e.onColorClick),
          p = (e.onFrameworkClick, e.onCopy),
          u = e.codeToShow,
          d = e.copyText;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              t
                ? (0, r.jsx)("div", {
                    id: "colors",
                    className:
                      "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                    style: { width: "100%", bottom: "-14px" },
                    children: (0, r.jsx)("div", {
                      className:
                        "flex flew-wrap justify-center items-center bg-white px-2",
                      children: l.map(function (e, n) {
                        return (0, r.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  t === c[n]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              s(c[n]), p(!1);
                            },
                          },
                          n
                        );
                      }),
                    }),
                  })
                : null,
              n,
              (0, r.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  (0, r.jsx)(i.CopyToClipboard, {
                    text: u,
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
                  (0, r.jsx)(a.Z, {
                    language: "jsx",
                    style: o.Vg,
                    children: u,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    49777: function (e, n, t) {
      "use strict";
      function r(e, n, t) {
        switch (e) {
          case "react":
          case "angular":
          case "html":
          case "vue":
          case "javascript":
            break;
          default:
            n(!0), t(e);
        }
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    81957: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(85893);
      t(67294);
      function a(e) {
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
    79973: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(85893),
        a = t(26265),
        o = t(38347);
      t(67294);
      function i(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function l(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? i(Object(t), !0).forEach(function (n) {
                (0, a.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function c(e) {
        var n = e.fontAwesome,
          t = (0, o.Z)(e, ["fontAwesome"]);
        return (0, r.jsxs)("div", {
          className:
            "relative lg:w-60 sm:w-full flex items-center bg-white bg-opacity-20 py-1 px-3 rounded-lg",
          children: [
            n
              ? (0, r.jsx)("i", { class: "fas fa-search text-white text-xl" })
              : (0, r.jsx)("span", {
                  className: "material-icons text-white text-xl mr-2",
                  children: "search",
                }),
            (0, r.jsx)(
              "input",
              l(
                l({}, t),
                {},
                {
                  className:
                    "bg-transparent border-none text-sm leading-snug text-white w-full font-normal placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-0",
                }
              )
            ),
          ],
        });
      }
      c.defaultProps = { fontAwesome: !1 };
    },
    11512: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return O;
          },
        });
      var r = t(85893),
        a = t(67294),
        o = t(29041),
        i = t(82830),
        l = t(68286),
        c = t(5981),
        s = t(81957),
        p = t(53085),
        u = t(49777),
        d = t(13004),
        m = t(41065),
        f = t(79145),
        b = t(60158),
        v = t(56265),
        x = t(29330),
        h = t(94743),
        N = t(84158),
        g = t(19492),
        y = t(79973),
        w = t(28300);
      function j(e) {
        var n = e.copyText,
          t = e.onCopy,
          o = (0, a.useState)("lightBlue"),
          i = o[0],
          l = o[1],
          c = (0, a.useState)("react")[0],
          s = (0, a.useState)(!1),
          j = s[0],
          C = s[1],
          k = (0, a.useState)(),
          Z = k[0],
          O = k[1],
          S = (0, a.useState)(!1),
          I = S[0],
          T = S[1],
          P = (0, u.Z)(c, C, O),
          D =
            'import React, { useState } from "react";\nimport Navbar from "@material-tailwind/react/Navbar";\nimport NavbarContainer from "@material-tailwind/react/NavbarContainer";\nimport NavbarWrapper from "@material-tailwind/react/NavbarWrapper";\nimport NavbarBrand from "@material-tailwind/react/NavbarBrand";\nimport NavbarToggler from "@material-tailwind/react/NavbarToggler";\nimport NavbarCollapse from "@material-tailwind/react/NavbarCollapse";\nimport Nav from "@material-tailwind/react/Nav";\nimport NavItem from "@material-tailwind/react/NavItem";\nimport NavLink from "@material-tailwind/react/NavLink";\nimport NavbarInput from "@material-tailwind/react/NavbarInput";\nimport Icon from "@material-tailwind/react/Icon";\n\nexport default function Navbar() {\n  const [openNavbar, setOpenNavbar] = useState(false);\n\n  return (\n    <Navbar color="'.concat(
              i,
              '" navbar>\n        <NavbarContainer>\n            <NavbarWrapper>\n                <NavbarBrand>Navbar</NavbarBrand>\n                <NavbarToggler\n                    color="white"\n                    onClick={() => setOpenNavbar(!openNavbar)}\n                    ripple="light"\n                />\n            </NavbarWrapper>\n\n            <NavbarCollapse open={openNavbar}>\n                <Nav leftSide>\n                    <NavItem active="light" ripple="light">\n                        <Icon name="language" size="xl" />\n                        Discover\n                    </NavItem>\n                    <NavLink href="#navbar" ripple="light">\n                        <Icon name="account_circle" size="xl" />\n                        Profile\n                    </NavLink>\n                    <NavItem ripple="light">\n                        <Icon name="settings" size="xl" />\n                        Settings\n                    </NavItem>\n                </Nav>\n                <NavbarInput type="text" placeholder="Search here" />\n            </NavbarCollapse>\n        </NavbarContainer>\n    </Navbar>\n  );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            j
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return C(!1);
                      },
                      children: (0, r.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, r.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, r.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return C(!1);
                                  },
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, r.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  Z,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, r.jsx)(p.Z, {
              copyText: n,
              onCopy: t,
              activeColor: i,
              activeFramework: c,
              codeToShow: D,
              onColorClick: function (e) {
                return l(e);
              },
              onFrameworkClick: P,
              children: (0, r.jsx)(d.Z, {
                color: i,
                navbar: !0,
                children: (0, r.jsxs)(m.Z, {
                  children: [
                    (0, r.jsxs)(f.Z, {
                      children: [
                        (0, r.jsx)(b.Z, { children: "Navbar" }),
                        (0, r.jsx)(v.Z, {
                          onClick: function () {
                            return T(!I);
                          },
                          ripple: "light",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(x.Z, {
                      open: I,
                      children: [
                        (0, r.jsxs)(h.Z, {
                          leftSide: !0,
                          children: [
                            (0, r.jsxs)(N.Z, {
                              active: "light",
                              ripple: "light",
                              children: [
                                (0, r.jsx)(w.Z, {
                                  name: "language",
                                  size: "xl",
                                }),
                                "Discover",
                              ],
                            }),
                            (0, r.jsxs)(g.Z, {
                              href: "#navbar",
                              ripple: "light",
                              children: [
                                (0, r.jsx)(w.Z, {
                                  name: "account_circle",
                                  size: "xl",
                                }),
                                "Profile",
                              ],
                            }),
                            (0, r.jsxs)(N.Z, {
                              ripple: "light",
                              children: [
                                (0, r.jsx)(w.Z, {
                                  name: "settings",
                                  size: "xl",
                                }),
                                "Settings",
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)(y.Z, {
                          type: "text",
                          placeholder: "Search here",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function C(e) {
        var n = e.copyText,
          t = e.onCopy,
          o = (0, a.useState)("lightBlue"),
          i = o[0],
          l = o[1],
          c = (0, a.useState)("react")[0],
          s = (0, a.useState)(!1),
          y = s[0],
          j = s[1],
          C = (0, a.useState)(),
          k = C[0],
          Z = C[1],
          O = (0, a.useState)(!1),
          S = O[0],
          I = O[1],
          T = (0, u.Z)(c, j, Z),
          P =
            'import React, { useState } from "react";\nimport Navbar from "@material-tailwind/react/Navbar";\nimport NavbarContainer from "@material-tailwind/react/NavbarContainer";\nimport NavbarWrapper from "@material-tailwind/react/NavbarWrapper";\nimport NavbarBrand from "@material-tailwind/react/NavbarBrand";\nimport NavbarToggler from "@material-tailwind/react/NavbarToggler";\nimport NavbarCollapse from "@material-tailwind/react/NavbarCollapse";\nimport Nav from "@material-tailwind/react/Nav";\nimport NavLink from "@material-tailwind/react/NavLink";\nimport Icon from "@material-tailwind/react/Icon";\n\nexport default function Navbar() {\n  const [openNavbar, setOpenNavbar] = useState(false);\n\n  return (\n    <Navbar color="'.concat(
              i,
              '" navbar>\n        <NavbarContainer>\n            <NavbarWrapper>\n                <NavbarBrand>Navbar</NavbarBrand>\n                <NavbarToggler\n                    color="white"\n                    onClick={() => setOpenNavbar(!openNavbar)}\n                    ripple="light"\n                />\n            </NavbarWrapper>\n\n            <NavbarCollapse open={openNavbar}>\n                <Nav>\n                    <NavItem active="light" ripple="light">\n                        <Icon name="language" size="xl" />\n                        Discover\n                    </NavItem>\n                    <NavLink href="#navbar" ripple="light">\n                        <Icon name="account_circle" size="xl" />\n                        Profile\n                    </NavLink>\n                    <NavItem ripple="light">\n                        <Icon name="settings" size="xl" />\n                        Settings\n                    </NavItem>\n                </Nav>\n            </NavbarCollapse>\n        </NavbarContainer>\n    </Navbar>\n  );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            y
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return j(!1);
                      },
                      children: (0, r.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, r.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, r.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return j(!1);
                                  },
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, r.jsxs)("p", {
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
                    (0, r.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, r.jsx)(p.Z, {
              copyText: n,
              onCopy: t,
              activeColor: i,
              activeFramework: c,
              codeToShow: P,
              onColorClick: function (e) {
                return l(e);
              },
              onFrameworkClick: T,
              children: (0, r.jsx)(d.Z, {
                color: i,
                navbar: !0,
                children: (0, r.jsxs)(m.Z, {
                  children: [
                    (0, r.jsxs)(f.Z, {
                      children: [
                        (0, r.jsx)(b.Z, { children: "Navbar" }),
                        (0, r.jsx)(v.Z, {
                          onClick: function () {
                            return I(!S);
                          },
                          ripple: "light",
                        }),
                      ],
                    }),
                    (0, r.jsx)(x.Z, {
                      open: S,
                      children: (0, r.jsxs)(h.Z, {
                        children: [
                          (0, r.jsxs)(N.Z, {
                            active: "light",
                            ripple: "light",
                            children: [
                              (0, r.jsx)(w.Z, { name: "language", size: "xl" }),
                              "Discover",
                            ],
                          }),
                          (0, r.jsxs)(g.Z, {
                            href: "#navbar",
                            ripple: "light",
                            children: [
                              (0, r.jsx)(w.Z, {
                                name: "account_circle",
                                size: "xl",
                              }),
                              "Profile",
                            ],
                          }),
                          (0, r.jsxs)(N.Z, {
                            ripple: "light",
                            children: [
                              (0, r.jsx)(w.Z, { name: "settings", size: "xl" }),
                              "Settings",
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function k(e) {
        var n = e.copyText,
          t = e.onCopy,
          o = (0, a.useState)("lightBlue"),
          i = o[0],
          l = o[1],
          c = (0, a.useState)("react")[0],
          s = (0, a.useState)(!1),
          y = s[0],
          w = s[1],
          j = (0, a.useState)(),
          C = j[0],
          k = j[1],
          Z = (0, a.useState)(!1),
          O = Z[0],
          S = Z[1],
          I = (0, u.Z)(c, w, k),
          T =
            'import React, { useState } from "react";\nimport Navbar from "@material-tailwind/react/Navbar";\nimport NavbarContainer from "@material-tailwind/react/NavbarContainer";\nimport NavbarWrapper from "@material-tailwind/react/NavbarWrapper";\nimport NavbarBrand from "@material-tailwind/react/NavbarBrand";\nimport NavbarToggler from "@material-tailwind/react/NavbarToggler";\nimport NavbarCollapse from "@material-tailwind/react/NavbarCollapse";\nimport Nav from "@material-tailwind/react/Nav";\nimport NavItem from "@material-tailwind/react/NavItem";\nimport NavLink from "@material-tailwind/react/NavLink";\n\nexport default function Navbar() {\n  const [openNavbar, setOpenNavbar] = useState(false);\n\n  return (\n    <Navbar color="'.concat(
              i,
              '" navbar>\n        <NavbarContainer>\n            <NavbarWrapper>\n                <NavbarBrand>Navbar</NavbarBrand>\n                <NavbarToggler\n                    color="white"\n                    onClick={() => setOpenNavbar(!openNavbar)}\n                    ripple="light"\n                />\n            </NavbarWrapper>\n\n            <NavbarCollapse open={openNavbar}>\n                <Nav>\n                    <NavItem active="light" ripple="light">Discover</NavItem>\n                    <NavLink href="#navbar" ripple="light">Profile</NavLink>\n                    <NavItem ripple="light">Settings</NavItem>\n                </Nav>\n            </NavbarCollapse>\n        </NavbarContainer>\n    </Navbar>\n  );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            y
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return w(!1);
                      },
                      children: (0, r.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, r.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, r.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return w(!1);
                                  },
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, r.jsxs)("p", {
                                className:
                                  "text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",
                                children: [
                                  "At the moment we do not support the choosen framework (",
                                  C,
                                  ") for this component.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, r.jsx)(p.Z, {
              copyText: n,
              onCopy: t,
              activeColor: i,
              activeFramework: c,
              codeToShow: T,
              onColorClick: function (e) {
                return l(e);
              },
              onFrameworkClick: I,
              children: (0, r.jsx)(d.Z, {
                color: i,
                navbar: !0,
                children: (0, r.jsxs)(m.Z, {
                  children: [
                    (0, r.jsxs)(f.Z, {
                      children: [
                        (0, r.jsx)(b.Z, { children: "Navbar" }),
                        (0, r.jsx)(v.Z, {
                          onClick: function () {
                            return S(!O);
                          },
                          ripple: "light",
                        }),
                      ],
                    }),
                    (0, r.jsx)(x.Z, {
                      open: O,
                      children: (0, r.jsxs)(h.Z, {
                        children: [
                          (0, r.jsx)(N.Z, {
                            active: "light",
                            ripple: "light",
                            children: "Discover",
                          }),
                          (0, r.jsx)(g.Z, {
                            href: "#navbar",
                            ripple: "light",
                            children: "Profile",
                          }),
                          (0, r.jsx)(N.Z, {
                            ripple: "light",
                            children: "Settings",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function Z(e) {
        var n = e.copyText,
          t = e.onCopy,
          o = (0, a.useState)("lightBlue"),
          i = o[0],
          l = o[1],
          c = (0, a.useState)("react")[0],
          s = (0, a.useState)(!1),
          y = s[0],
          j = s[1],
          C = (0, a.useState)(),
          k = C[0],
          Z = C[1],
          O = (0, a.useState)(!1),
          S = O[0],
          I = O[1],
          T = (0, u.Z)(c, j, Z),
          P =
            'import React, { useState } from "react";\nimport Navbar from "@material-tailwind/react/Navbar";\nimport NavbarContainer from "@material-tailwind/react/NavbarContainer";\nimport NavbarWrapper from "@material-tailwind/react/NavbarWrapper";\nimport NavbarBrand from "@material-tailwind/react/NavbarBrand";\nimport NavbarToggler from "@material-tailwind/react/NavbarToggler";\nimport NavbarCollapse from "@material-tailwind/react/NavbarCollapse";\nimport Nav from "@material-tailwind/react/Nav";\nimport NavItem from "@material-tailwind/react/NavItem";\nimport NavLink from "@material-tailwind/react/NavLink";\nimport Icon from "@material-tailwind/react/Icon";\n\nexport default function Navbar() {\n  const [openNavbar, setOpenNavbar] = useState(false);\n\n  return (\n    <Navbar color="'.concat(
              i,
              '" navbar>\n        <NavbarContainer>\n            <NavbarWrapper>\n                <NavbarBrand>Navbar</NavbarBrand>\n                <NavbarToggler\n                    color="white"\n                    onClick={() => setOpenNavbar(!openNavbar)}\n                    ripple="light"\n                />\n            </NavbarWrapper>\n\n            <NavbarCollapse open={openNavbar}>\n                <Nav>\n                    <NavItem active="light" ripple="light">\n                        <Icon name="language" size="xl" />\n                    </NavItem>\n                    <NavLink href="#navbar" ripple="light">\n                        <Icon name="account_circle" size="xl" />\n                    </NavLink>\n                    <NavItem ripple="light">\n                        <Icon name="settings" size="xl" />\n                    </NavItem>\n                </Nav>\n            </NavbarCollapse>\n        </NavbarContainer>\n    </Navbar>\n  );\n}'
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            y
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return j(!1);
                      },
                      children: (0, r.jsx)("div", {
                        className: "relative w-auto my-6 mx-auto max-w-sm",
                        children: (0, r.jsxs)("div", {
                          className:
                            "border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
                              children: [
                                (0, r.jsx)("h5", {
                                  className: "text-2xl font-normal mt-0 mb-0 ",
                                  children: "Component not supported",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                  onClick: function () {
                                    return j(!1);
                                  },
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                                    children: "\xd7",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "relative p-6 flex-auto",
                              children: (0, r.jsxs)("p", {
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
                    (0, r.jsx)("div", {
                      className: "opacity-25 fixed inset-0 z-40 bg-black",
                    }),
                  ],
                })
              : null,
            (0, r.jsx)(p.Z, {
              copyText: n,
              onCopy: t,
              activeColor: i,
              activeFramework: c,
              codeToShow: P,
              onColorClick: function (e) {
                return l(e);
              },
              onFrameworkClick: T,
              children: (0, r.jsx)(d.Z, {
                color: i,
                navbar: !0,
                children: (0, r.jsxs)(m.Z, {
                  children: [
                    (0, r.jsxs)(f.Z, {
                      children: [
                        (0, r.jsx)(b.Z, { children: "Navbar" }),
                        (0, r.jsx)(v.Z, {
                          onClick: function () {
                            return I(!S);
                          },
                          ripple: "light",
                        }),
                      ],
                    }),
                    (0, r.jsx)(x.Z, {
                      open: S,
                      children: (0, r.jsxs)(h.Z, {
                        children: [
                          (0, r.jsx)(N.Z, {
                            active: "light",
                            ripple: "light",
                            children: (0, r.jsx)(w.Z, {
                              name: "language",
                              size: "xl",
                            }),
                          }),
                          (0, r.jsx)(g.Z, {
                            href: "#navbar",
                            ripple: "light",
                            children: (0, r.jsx)(w.Z, {
                              name: "account_circle",
                              size: "xl",
                            }),
                          }),
                          (0, r.jsx)(N.Z, {
                            ripple: "light",
                            children: (0, r.jsx)(w.Z, {
                              name: "settings",
                              size: "xl",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function O() {
        var e = (0, a.useState)(null),
          n = e[0],
          t = e[1];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(o.Z, { title: "React Navbars" }),
            (0, r.jsx)(l.Z, {}),
            (0, r.jsxs)(i.Z, {
              children: [
                (0, r.jsx)(c.Z, {
                  title: "React Navbars",
                  description:
                    "Responsive React navigation for your website. You can add in it links, icons, links with icons, search bars and a brand text.",
                }),
                (0, r.jsx)(s.Z, {
                  title: "Navbar",
                  description: (0, r.jsx)(r.Fragment, {
                    children:
                      "A complete navbar with icon and text links and a search input.",
                  }),
                }),
                (0, r.jsx)(j, {
                  copyText: "IconsText" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "IconsText" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, {
                  title: "Icons & Links",
                  description: (0, r.jsx)(r.Fragment, {
                    children:
                      "The most used navbar in real-life website, an naviagtion menu with icon and text links.",
                  }),
                }),
                (0, r.jsx)(C, {
                  copyText: "IconsText" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "IconsText" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, {
                  title: "Links",
                  description: (0, r.jsx)(r.Fragment, {
                    children: "A simple navbar with text links..",
                  }),
                }),
                (0, r.jsx)(k, {
                  copyText: "IconsText" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "IconsText" : "");
                  },
                }),
                (0, r.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, r.jsx)(s.Z, {
                  title: "Icons",
                  description: (0, r.jsx)(r.Fragment, {
                    children: "A simple navbar with icon links.",
                  }),
                }),
                (0, r.jsx)(Z, {
                  copyText: "IconsText" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "IconsText" : "");
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
    8482: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/navbars",
        function () {
          return t(11512);
        },
      ]);
    },
    74300: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.CopyToClipboard = void 0);
      var r = o(t(67294)),
        a = o(t(20640));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        return (i =
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
      function l(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function c(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (t = o[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      function s(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e, n) {
        return !n || ("object" !== i(n) && "function" !== typeof n) ? m(e) : n;
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
      function f(e, n) {
        return (f =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      function b(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var v = (function (e) {
        function n() {
          var e, t;
          s(this, n);
          for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
            i[l] = arguments[l];
          return (
            b(
              m((t = u(this, (e = d(n)).call.apply(e, [this].concat(i))))),
              "onClick",
              function (e) {
                var n = t.props,
                  o = n.text,
                  i = n.onCopy,
                  l = n.children,
                  c = n.options,
                  s = r.default.Children.only(l),
                  p = (0, a.default)(o, c);
                i && i(o, p),
                  s &&
                    s.props &&
                    "function" === typeof s.props.onClick &&
                    s.props.onClick(e);
              }
            ),
            t
          );
        }
        var t, o, i;
        return (
          (function (e, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && f(e, n);
          })(n, e),
          (t = n),
          (o = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  n = (e.text, e.onCopy, e.options, e.children),
                  t = c(e, ["text", "onCopy", "options", "children"]),
                  a = r.default.Children.only(n);
                return r.default.cloneElement(
                  a,
                  (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                      var t = null != arguments[n] ? arguments[n] : {};
                      n % 2
                        ? l(t, !0).forEach(function (n) {
                            b(e, n, t[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(t)
                          )
                        : l(t).forEach(function (n) {
                            Object.defineProperty(
                              e,
                              n,
                              Object.getOwnPropertyDescriptor(t, n)
                            );
                          });
                    }
                    return e;
                  })({}, t, { onClick: this.onClick })
                );
              },
            },
          ]) && p(t.prototype, o),
          i && p(t, i),
          n
        );
      })(r.default.PureComponent);
      (n.CopyToClipboard = v),
        b(v, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, n, t) {
      "use strict";
      var r = t(74300).CopyToClipboard;
      (r.CopyToClipboard = r), (e.exports = r);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var n = document.activeElement, t = [], r = 0;
          r < e.rangeCount;
          r++
        )
          t.push(e.getRangeAt(r));
        switch (n.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            n.blur();
            break;
          default:
            n = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                t.forEach(function (n) {
                  e.addRange(n);
                }),
              n && n.focus();
          }
        );
      };
    },
  },
  function (e) {
    e.O(0, [9774, 1e3, 8969, 8485, 5592, 2888, 179], function () {
      return (n = 8482), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
