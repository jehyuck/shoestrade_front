(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [143],
  {
    20640: function (e, t, r) {
      "use strict";
      var n = r(11742),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var r,
          a,
          l,
          i,
          c,
          s,
          d = !1;
        t || (t = {}), (r = t.debug || !1);
        try {
          if (
            ((l = n()),
            (i = document.createRange()),
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
            s.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format))
                if (
                  (n.preventDefault(), "undefined" === typeof n.clipboardData)
                ) {
                  r && console.warn("unable to use e.clipboardData"),
                    r && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var a = o[t.format] || o.default;
                  window.clipboardData.setData(a, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(s),
            i.selectNodeContents(s),
            c.addRange(i),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          d = !0;
        } catch (u) {
          r && console.error("unable to copy using execCommand: ", u),
            r && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (d = !0);
          } catch (u) {
            r && console.error("unable to copy using clipboardData: ", u),
              r && console.error("falling back to prompt"),
              (a = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(a, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(i)
              : c.removeAllRanges()),
            s && document.body.removeChild(s),
            l();
        }
        return d;
      };
    },
    82313: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(85893);
      r(67294);
      function o(e) {
        var t = e.children,
          r = e.className;
        return (0, n.jsx)("div", { className: "p-4 ".concat(r), children: t });
      }
    },
    83438: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = r(85893),
        o =
          (r(67294),
          {
            blueGray: "from-blue-gray-500",
            gray: "from-gray-500",
            brown: "from-brown-500",
            deepOrange: "from-deep-orange-500",
            orange: "from-orange-500",
            amber: "from-amber-500",
            yellow: "from-yellow-600",
            lime: "from-lime-500",
            lightGreen: "from-light-green-500",
            green: "from-green-500",
            teal: "from-teal-500",
            cyan: "from-cyan-500",
            lightBlue: "from-light-blue-500",
            blue: "from-blue-500",
            indigo: "from-indigo-500",
            deepPurple: "from-deep-purple-500",
            purple: "from-purple-500",
            pink: "from-pink-500",
            red: "from-red-500",
          }),
        a = {
          blueGray: "to-blue-gray-700",
          gray: "to-gray-700",
          brown: "to-brown-700",
          deepOrange: "to-deep-orange-700",
          orange: "to-orange-700",
          amber: "to-amber-700",
          yellow: "to-yellow-800",
          lime: "to-lime-700",
          lightGreen: "to-light-green-700",
          green: "to-green-700",
          teal: "to-teal-700",
          cyan: "to-cyan-700",
          lightBlue: "to-light-blue-700",
          blue: "to-blue-700",
          indigo: "to-indigo-700",
          deepPurple: "to-deep-purple-700",
          purple: "to-purple-700",
          pink: "to-pink-700",
          red: "to-red-700",
        },
        l = {
          blueGray: "shadow-lg-blue-gray",
          gray: "shadow-lg-gray",
          brown: "shadow-lg-brown",
          deepOrange: "shadow-lg-deep-orange",
          orange: "shadow-lg-orange",
          amber: "shadow-lg-amber",
          yellow: "shadow-lg-yellow",
          lime: "shadow-lg-lime",
          lightGreen: "shadow-lg-light-green",
          green: "shadow-lg-green",
          teal: "shadow-lg-teal",
          cyan: "shadow-lg-cyan",
          lightBlue: "shadow-lg-light-blue",
          blue: "shadow-lg-blue",
          indigo: "shadow-lg-indigo",
          deepPurple: "shadow-lg-deep-purple",
          purple: "shadow-lg-purple",
          pink: "shadow-lg-pink",
          red: "shadow-lg-red",
        },
        i = {
          left: "justify-start",
          right: "justify-end",
          center: "justify-center",
        };
      function c(e) {
        var t,
          r = e.children,
          c = e.color,
          s = e.size,
          d = e.contentPosition,
          u = e.iconOnly,
          p = e.className,
          m = [],
          f = [
            u ? "w-20" : "w-full",
            "h-20",
            "py-4",
            u ? "px-4" : "px-8",
            i[d],
          ],
          x = [
            u ? "w-24" : "w-full",
            "h-24",
            "py-4",
            u ? "px-4" : "px-8",
            i[d],
          ],
          h = [
            u ? "w-28" : "w-full",
            "h-28",
            "py-4",
            u ? "px-4" : "px-8",
            i[d],
          ];
        if ("sm" === s) (t = m).push.apply(t, f);
        else if ("lg" === s) {
          var g;
          (g = m).push.apply(g, h);
        } else {
          var y;
          (y = m).push.apply(y, x);
        }
        return (
          (m = m.join(" ")),
          (0, n.jsx)("div", {
            className: "bg-gradient-to-tr "
              .concat(o[c], " ")
              .concat(
                a[c],
                " -mt-10 mb-4 rounded-xl text-white grid items-center "
              )
              .concat(m, " ")
              .concat(l[c], " ")
              .concat(p),
            children: r,
          })
        );
      }
      c.defaultProps = {
        color: "lightBlue",
        size: "regular",
        contentPosition: "center",
        iconOnly: !1,
      };
    },
    39919: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(85893);
      r(67294);
      function o(e) {
        var t = e.children,
          r = e.className;
        return (0, n.jsx)("div", {
          className: "flex flex-wrap border-b border-gray-200 ".concat(r),
          children: t,
        });
      }
    },
    60863: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(85893);
      r(67294);
      function o(e) {
        var t = e.title,
          r = e.amount,
          o = e.className;
        return (0, n.jsxs)("div", {
          className:
            "w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right ".concat(
              o
            ),
          children: [
            (0, n.jsx)("h5", {
              className:
                "text-gray-500 font-light tracking-wide text-base mb-1",
              children: t,
            }),
            (0, n.jsx)("span", {
              className: "text-3xl text-gray-900",
              children: r,
            }),
          ],
        });
      }
    },
    36993: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(85893),
        o =
          (r(67294),
          {
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
          });
      function a(e) {
        var t = e.children,
          r = e.color,
          a = e.amount,
          l = e.date,
          i = e.className;
        return (0, n.jsxs)("div", {
          className: "text-sm text-gray-700 pt-4 flex items-center ".concat(i),
          children: [
            t,
            (0, n.jsx)("span", {
              className: "".concat(o[r], " ml-1 mr-2"),
              children: a,
            }),
            (0, n.jsx)("span", {
              className: "font-light whitespace-nowrap",
              children: l,
            }),
          ],
        });
      }
      a.defaultProps = { color: "lightBlue" };
    },
    53085: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(85893),
        o = (r(67294), r(20921)),
        a = r(84283),
        l = r(74855),
        i = [
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
        var t = e.children,
          r = e.activeColor,
          s = (e.activeFramework, e.onColorClick),
          d = (e.onFrameworkClick, e.onCopy),
          u = e.codeToShow,
          p = e.copyText;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className:
              "border border-solid border-gray-200 rounded my-4 p-4 relative",
            children: [
              r
                ? (0, n.jsx)("div", {
                    id: "colors",
                    className:
                      "flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",
                    style: { width: "100%", bottom: "-14px" },
                    children: (0, n.jsx)("div", {
                      className:
                        "flex flew-wrap justify-center items-center bg-white px-2",
                      children: i.map(function (e, t) {
                        return (0, n.jsx)(
                          "span",
                          {
                            className:
                              "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-"
                                .concat(e)
                                .concat(
                                  r === c[t]
                                    ? "".concat(
                                        "yellow" === e ? "-600" : "-500",
                                        " shadow-md"
                                      )
                                    : "-200"
                                ),
                            onClick: function () {
                              s(c[t]), d(!1);
                            },
                          },
                          t
                        );
                      }),
                    }),
                  })
                : null,
              t,
              (0, n.jsxs)("div", {
                className: "relative mt-4",
                children: [
                  (0, n.jsx)(l.CopyToClipboard, {
                    text: u,
                    onCopy: function () {
                      return d(!0);
                    },
                    children: (0, n.jsx)("button", {
                      className:
                        "text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",
                      type: "button",
                      children: p,
                    }),
                  }),
                  (0, n.jsx)(o.Z, {
                    language: "jsx",
                    style: a.Vg,
                    children: u,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    49777: function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        switch (e) {
          case "react":
          case "angular":
          case "html":
          case "vue":
          case "javascript":
            break;
          default:
            t(!0), r(e);
        }
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    81957: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(85893);
      r(67294);
      function o(e) {
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
    },
    57892: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return B;
          },
        });
      var n = r(85893),
        o = r(67294),
        a = r(29041),
        l = r(82830),
        i = r(68286),
        c = r(5981),
        s = r(81957),
        d = r(53085),
        u = r(49777),
        p = r(21539),
        m = r(23353),
        f = r(17194),
        x = r(82313),
        h = r(74023),
        g = r(67954),
        y = r(46445);
      function b(e) {
        var t = e.copyText,
          r = e.onCopy,
          a = (0, o.useState)("react")[0],
          l = (0, o.useState)(!1),
          i = l[0],
          c = l[1],
          s = (0, o.useState)(),
          b = s[0],
          w = s[1],
          v = (0, u.Z)(a, c, w);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            i
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return c(!1);
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
                                    return c(!1);
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
                                  b,
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
            (0, n.jsx)(d.Z, {
              copyText: t,
              onCopy: r,
              activeFramework: a,
              codeToShow:
                'import React from "react";\nimport Card from "@material-tailwind/react/Card";\nimport CardImage from "@material-tailwind/react/CardImage";\nimport CardBody from "@material-tailwind/react/CardBody";\nimport CardFooter from "@material-tailwind/react/CardFooter";\nimport H6 from "@material-tailwind/react/Heading6";\nimport Paragraph from "@material-tailwind/react/Paragraph";\nimport Button from "@material-tailwind/react/Button";\n\nexport default function Card() {\n    return (\n        <Card>\n            <CardImage\n                src="shorturl.at/psBK0"\n                alt="Card Image"\n            />\n\n            <CardBody>\n                <H6 color="gray">Card Title</H6>\n                <Paragraph color="gray">\n                    Don\'t be scared of the truth because we need to restart the human\n                    foundation in truth And I love you like Kanye loves Kanye I love\n                    Rick Owens\u2019 bed design but the back is...\n                </Paragraph>\n            </CardBody>\n\n            <CardFooter>\n                <Button color="lightBlue" size="lg" ripple="light">\n                    Read More\n                </Button>\n            </CardFooter>\n        </Card>\n    );\n}',
              onFrameworkClick: v,
              children: (0, n.jsx)("div", {
                className: "flex justify-center bg-gray-100 rounded",
                children: (0, n.jsx)("div", {
                  className: "w-96 pb-10 pt-16",
                  children: (0, n.jsxs)(p.Z, {
                    children: [
                      (0, n.jsx)(m.Z, {
                        src: "https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
                        alt: "Card Image",
                      }),
                      (0, n.jsxs)(f.Z, {
                        children: [
                          (0, n.jsx)(h.Z, {
                            color: "gray",
                            children: "Card Title",
                          }),
                          (0, n.jsx)(g.Z, {
                            color: "gray",
                            children:
                              "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...",
                          }),
                        ],
                      }),
                      (0, n.jsx)(x.Z, {
                        children: (0, n.jsx)(y.Z, {
                          color: "lightBlue",
                          size: "lg",
                          ripple: "light",
                          children: "Read More",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
      var w = r(83438),
        v = r(53584),
        j = r(8880);
      function C(e) {
        var t = e.copyText,
          r = e.onCopy,
          a = (0, o.useState)("react")[0],
          l = (0, o.useState)(!1),
          i = l[0],
          c = l[1],
          s = (0, o.useState)(),
          m = s[0],
          h = s[1],
          g = (0, u.Z)(a, c, h);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            i
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return c(!1);
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
                                    return c(!1);
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
                                  m,
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
            (0, n.jsx)(d.Z, {
              copyText: t,
              onCopy: r,
              activeFramework: a,
              codeToShow:
                'import React from "react";\nimport Card from "@material-tailwind/react/Card";\nimport CardHeader from "@material-tailwind/react/CardHeader";\nimport CardBody from "@material-tailwind/react/CardBody";\nimport CardFooter from "@material-tailwind/react/CardFooter";\nimport InputIcon from "@material-tailwind/react/InputIcon";\nimport Button from "@material-tailwind/react/Button";\nimport H5 from "@material-tailwind/react/Heading5";\n\nexport default function Card() {\n    return (\n        <Card>\n            <CardHeader color="lightBlue" size="lg">\n                <H5 color="white">Login</H5>\n            </CardHeader>\n\n            <CardBody>\n                <div className="mt-4 mb-8 px-4">\n                    <InputIcon\n                        type="text"\n                        color="lightBlue"\n                        placeholder="First Name"\n                        iconName="account_circle"\n                    />\n                </div>\n                <div className="mb-8 px-4">\n                    <InputIcon\n                        type="email"\n                        color="lightBlue"\n                        placeholder="Email Address"\n                        iconName="email"\n                    />\n                </div>\n                <div className="mb-4 px-4">\n                    <InputIcon\n                        type="password"\n                        color="lightBlue"\n                        placeholder="password"\n                        iconName="lock"\n                    />\n                </div>\n            </CardBody>\n            <CardFooter>\n                <div className="flex justify-center">\n                    <Button\n                        color="lightBlue"\n                        buttonType="link"\n                        size="lg"\n                        ripple="dark"\n                    >\n                        Get Started\n                    </Button>\n                </div>\n            </CardFooter>\n        </Card>\n    );\n}',
              onFrameworkClick: g,
              children: (0, n.jsx)("div", {
                className: "flex justify-center bg-gray-100 rounded",
                children: (0, n.jsx)("div", {
                  className: "w-96 pb-10 pt-16",
                  children: (0, n.jsxs)(p.Z, {
                    children: [
                      (0, n.jsx)(w.Z, {
                        color: "lightBlue",
                        size: "lg",
                        children: (0, n.jsx)(j.Z, {
                          color: "white",
                          children: "Login",
                        }),
                      }),
                      (0, n.jsxs)(f.Z, {
                        children: [
                          (0, n.jsx)("div", {
                            className: "mt-4 mb-8 px-4",
                            children: (0, n.jsx)(v.Z, {
                              type: "text",
                              color: "lightBlue",
                              placeholder: "First Name",
                              iconName: "account_circle",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: "mb-8 px-4",
                            children: (0, n.jsx)(v.Z, {
                              type: "email",
                              color: "lightBlue",
                              placeholder: "Email Address",
                              iconName: "email",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: "mb-4 px-4",
                            children: (0, n.jsx)(v.Z, {
                              type: "password",
                              color: "lightBlue",
                              placeholder: "password",
                              iconName: "lock",
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)(x.Z, {
                        children: (0, n.jsx)("div", {
                          className: "flex justify-center",
                          children: (0, n.jsx)(y.Z, {
                            color: "lightBlue",
                            buttonType: "link",
                            size: "lg",
                            ripple: "dark",
                            children: "Get Started",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
      var N = r(39919),
        k = r(60863),
        O = r(36993),
        Z = r(28300);
      function S(e) {
        var t = e.copyText,
          r = e.onCopy,
          a = (0, o.useState)("react")[0],
          l = (0, o.useState)(!1),
          i = l[0],
          c = l[1],
          s = (0, o.useState)(),
          m = s[0],
          f = s[1],
          x = (0, u.Z)(a, c, f);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            i
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                      onClick: function () {
                        return c(!1);
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
                                    return c(!1);
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
                                  m,
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
            (0, n.jsx)(d.Z, {
              copyText: t,
              onCopy: r,
              activeFramework: a,
              codeToShow:
                'import React from "react";\nimport Card from "@material-tailwind/react/Card";\nimport CardRow from "@material-tailwind/react/CardRow";\nimport CardHeader from "@material-tailwind/react/CardHeader";\nimport CardStatus from "@material-tailwind/react/CardStatus";\nimport CardStatusFooter from "@material-tailwind/react/CardStatusFooter";\nimport Icon from "@material-tailwind/react/Icon";\n\nexport default function Card() {\n    return (\n        <Card>\n            <CardRow>\n                <CardHeader color="lightBlue" size="lg" iconOnly>\n                    <Icon name="groups" size="5xl" color="white" />\n                </CardHeader>\n\n                <CardStatus title="Users" amount="350,000" />\n            </CardRow>\n\n            <CardStatusFooter color="green" amount="97%" date="Since one week">\n                <Icon color="green" name="arrow_upward" />\n            </CardStatusFooter>\n        </Card>\n    );\n}',
              onFrameworkClick: x,
              children: (0, n.jsx)("div", {
                className: "flex justify-center bg-gray-100 rounded",
                children: (0, n.jsx)("div", {
                  className: "w-96 pb-10 pt-16",
                  children: (0, n.jsxs)(p.Z, {
                    children: [
                      (0, n.jsxs)(N.Z, {
                        children: [
                          (0, n.jsx)(w.Z, {
                            color: "lightBlue",
                            size: "lg",
                            iconOnly: !0,
                            children: (0, n.jsx)(Z.Z, {
                              name: "groups",
                              size: "5xl",
                              color: "white",
                            }),
                          }),
                          (0, n.jsx)(k.Z, {
                            title: "Users",
                            amount: "350,000",
                          }),
                        ],
                      }),
                      (0, n.jsx)(O.Z, {
                        color: "green",
                        amount: "97%",
                        date: "Since one week",
                        children: (0, n.jsx)(Z.Z, {
                          color: "green",
                          name: "arrow_upward",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
      function B() {
        var e = (0, o.useState)(null),
          t = e[0],
          r = e[1];
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(a.Z, { title: "React Cards" }),
            (0, n.jsx)(i.Z, {}),
            (0, n.jsxs)(l.Z, {
              children: [
                (0, n.jsx)(c.Z, {
                  title: "React Cards",
                  description:
                    "Material Tailwind cards provide a flexible and extensible content container with multiple variants and options, more cards coming soon.",
                }),
                (0, n.jsx)(s.Z, { title: "Blog Card" }),
                (0, n.jsx)(b, {
                  copyText: "Alerts" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Alerts" : "");
                  },
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(s.Z, { title: "Login Card" }),
                (0, n.jsx)(C, {
                  copyText: "Alerts" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Alerts" : "");
                  },
                }),
                (0, n.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, n.jsx)(s.Z, { title: "Status Card" }),
                (0, n.jsx)(S, {
                  copyText: "Alerts" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return r(e ? "Alerts" : "");
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
    64224: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/cards",
        function () {
          return r(57892);
        },
      ]);
    },
    74300: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var n = a(r(67294)),
        o = a(r(20640));
      function a(e) {
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
      function i(e, t) {
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
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function u(e, t) {
        return !t || ("object" !== l(t) && "function" !== typeof t) ? m(e) : t;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
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
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function x(e, t, r) {
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
      var h = (function (e) {
        function t() {
          var e, r;
          s(this, t);
          for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++)
            l[i] = arguments[i];
          return (
            x(
              m((r = u(this, (e = p(t)).call.apply(e, [this].concat(l))))),
              "onClick",
              function (e) {
                var t = r.props,
                  a = t.text,
                  l = t.onCopy,
                  i = t.children,
                  c = t.options,
                  s = n.default.Children.only(i),
                  d = (0, o.default)(a, c);
                l && l(a, d),
                  s &&
                    s.props &&
                    "function" === typeof s.props.onClick &&
                    s.props.onClick(e);
              }
            ),
            r
          );
        }
        var r, a, l;
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && f(e, t);
          })(t, e),
          (r = t),
          (a = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  r = c(e, ["text", "onCopy", "options", "children"]),
                  o = n.default.Children.only(t);
                return n.default.cloneElement(
                  o,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? i(r, !0).forEach(function (t) {
                            x(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : i(r).forEach(function (t) {
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
          ]) && d(r.prototype, a),
          l && d(r, l),
          t
        );
      })(n.default.PureComponent);
      (t.CopyToClipboard = h),
        x(h, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    74855: function (e, t, r) {
      "use strict";
      var n = r(74300).CopyToClipboard;
      (n.CopyToClipboard = n), (e.exports = n);
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, r = [], n = 0;
          n < e.rangeCount;
          n++
        )
          r.push(e.getRangeAt(n));
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
  function (e) {
    e.O(0, [9774, 1e3, 7053, 8485, 5592, 3044, 2888, 179], function () {
      return (t = 64224), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
