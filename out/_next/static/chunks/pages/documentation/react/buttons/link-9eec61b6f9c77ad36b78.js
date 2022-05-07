(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3940],
  {
    9080: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
        });
      var o = t(85893),
        l = t(67294),
        i = t(29041),
        r = t(82830),
        s = t(68286),
        c = t(5981),
        u = t(81957),
        p = t(85187),
        a = t(28300);
      function d() {
        var e = (0, l.useState)(null),
          n = e[0],
          t = e[1];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.Z, { title: "React Buttons" }),
            (0, o.jsx)(s.Z, {}),
            (0, o.jsxs)(r.Z, {
              children: [
                (0, o.jsx)(c.Z, {
                  title: "React Buttons",
                  description:
                    "Use Material Tailwind buttons for actions in forms, dialogues, and more with support for multiple sizes, states, and more.",
                }),
                (0, o.jsx)(u.Z, { title: "Button" }),
                (0, o.jsx)(p.Z, {
                  copyText: "Buttons" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Buttons" : "");
                  },
                  buttonType: "link",
                  size: "regular",
                  rounded: !1,
                  buttonChildren: "Button",
                  rippleEffect: 'ripple="dark"',
                  ripple: "dark",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: "Button",
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(u.Z, { title: "Rounded Button" }),
                (0, o.jsx)(p.Z, {
                  copyText: "Buttons" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Buttons" : "");
                  },
                  buttonType: "link",
                  size: "regular",
                  rounded: !0,
                  buttonChildren: "Rounded Button",
                  rippleEffect: 'ripple="dark"',
                  ripple: "dark",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: "Rounded Button",
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(u.Z, { title: "Small Button" }),
                (0, o.jsx)(p.Z, {
                  copyText: "Buttons" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Buttons" : "");
                  },
                  buttonType: "link",
                  size: "sm",
                  rounded: !1,
                  buttonChildren: "Small Button",
                  rippleEffect: 'ripple="dark"',
                  ripple: "dark",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: "Small Button",
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(u.Z, { title: "Regular Button" }),
                (0, o.jsx)(p.Z, {
                  copyText: "Buttons" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Buttons" : "");
                  },
                  buttonType: "link",
                  size: "regular",
                  rounded: !1,
                  buttonChildren: "Regular Button",
                  rippleEffect: 'ripple="dark"',
                  ripple: "dark",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: "Regular Button",
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(u.Z, { title: "Large Button" }),
                (0, o.jsx)(p.Z, {
                  copyText: "Buttons" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Buttons" : "");
                  },
                  buttonType: "link",
                  size: "lg",
                  rounded: !1,
                  buttonChildren: "Large Button",
                  rippleEffect: 'ripple="dark"',
                  ripple: "dark",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: "Large Button",
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(u.Z, { title: "Block Level Button" }),
                (0, o.jsx)(p.Z, {
                  copyText: "Buttons" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Buttons" : "");
                  },
                  buttonType: "link",
                  size: "lg",
                  rounded: !1,
                  buttonChildren: "Block Level Button",
                  rippleEffect: 'ripple="dark"',
                  ripple: "dark",
                  blockLevel: "block={true}",
                  withIconOnly: "iconOnly={false}",
                  block: !0,
                  children: "Block Level Button",
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(u.Z, { title: "With Icon Before" }),
                (0, o.jsxs)(p.Z, {
                  copyText: "Buttons" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Buttons" : "");
                  },
                  buttonType: "link",
                  size: "regular",
                  rounded: !1,
                  rippleEffect: 'ripple="dark"',
                  hasIcon: !0,
                  buttonChildren: '<Icon name="favorite" /> With Icon Before',
                  ripple: "dark",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: [
                    (0, o.jsx)(a.Z, { name: "favorite" }),
                    "With Icon Before",
                  ],
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(u.Z, { title: "With Icon After" }),
                (0, o.jsxs)(p.Z, {
                  copyText: "Buttons" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Buttons" : "");
                  },
                  buttonType: "link",
                  size: "regular",
                  rounded: !1,
                  rippleEffect: 'ripple="dark"',
                  hasIcon: !0,
                  buttonChildren: 'With Icon After <Icon name="favorite" />',
                  ripple: "dark",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: [
                    "With Icon After",
                    (0, o.jsx)(a.Z, { name: "favorite" }),
                  ],
                }),
                (0, o.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, o.jsx)(u.Z, { title: "With Icon Only" }),
                (0, o.jsx)(p.Z, {
                  copyText: "Buttons" === n ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return t(e ? "Buttons" : "");
                  },
                  buttonType: "link",
                  size: "regular",
                  rounded: !0,
                  rippleEffect: 'ripple="dark"',
                  hasIcon: !0,
                  buttonChildren: '<Icon name="favorite" size="sm" />',
                  iconOnly: !0,
                  ripple: "dark",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={true}",
                  children: (0, o.jsx)(a.Z, { name: "favorite", size: "sm" }),
                }),
              ],
            }),
          ],
        });
      }
    },
    82795: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/buttons/link",
        function () {
          return t(9080);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 1e3, 8969, 8485, 5592, 4031, 2888, 179], function () {
      return (n = 82795), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
