(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5304],
  {
    28507: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var l = n(85893),
        o = n(67294),
        i = n(29041),
        r = n(82830),
        s = n(68286),
        c = n(5981),
        u = n(81957),
        p = n(85187),
        d = n(28300);
      function a() {
        var e = (0, o.useState)(null),
          t = e[0],
          n = e[1];
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(i.Z, { title: "React Buttons" }),
            (0, l.jsx)(s.Z, {}),
            (0, l.jsxs)(r.Z, {
              children: [
                (0, l.jsx)(c.Z, {
                  title: "React Buttons",
                  description:
                    "Use Material Tailwind buttons for actions in forms, dialogues, and more with support for multiple sizes, states, and more.",
                }),
                (0, l.jsx)(u.Z, { title: "Button" }),
                (0, l.jsx)(p.Z, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  buttonType: "filled",
                  size: "regular",
                  rounded: !1,
                  buttonChildren: "Button",
                  rippleEffect: 'ripple="light"',
                  ripple: "light",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: "Button",
                }),
                (0, l.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, l.jsx)(u.Z, { title: "Rounded Button" }),
                (0, l.jsx)(p.Z, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  buttonType: "filled",
                  size: "regular",
                  rounded: !0,
                  buttonChildren: "Rounded Button",
                  rippleEffect: 'ripple="light"',
                  ripple: "light",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: "Rounded Button",
                }),
                (0, l.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, l.jsx)(u.Z, { title: "Small Button" }),
                (0, l.jsx)(p.Z, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  buttonType: "filled",
                  size: "sm",
                  rounded: !1,
                  buttonChildren: "Small Button",
                  rippleEffect: 'ripple="light"',
                  ripple: "light",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: "Small Button",
                }),
                (0, l.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, l.jsx)(u.Z, { title: "Regular Button" }),
                (0, l.jsx)(p.Z, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  buttonType: "filled",
                  size: "regular",
                  rounded: !1,
                  buttonChildren: "Regular Button",
                  rippleEffect: 'ripple="light"',
                  ripple: "light",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: "Regular Button",
                }),
                (0, l.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, l.jsx)(u.Z, { title: "Large Button" }),
                (0, l.jsx)(p.Z, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  buttonType: "filled",
                  size: "lg",
                  rounded: !1,
                  buttonChildren: "Large Button",
                  rippleEffect: 'ripple="light"',
                  ripple: "light",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: "Large Button",
                }),
                (0, l.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, l.jsx)(u.Z, { title: "Block Level Button" }),
                (0, l.jsx)(p.Z, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  buttonType: "filled",
                  size: "lg",
                  rounded: !1,
                  buttonChildren: "Block Level Button",
                  rippleEffect: 'ripple="light"',
                  ripple: "light",
                  blockLevel: "block={true}",
                  withIconOnly: "iconOnly={false}",
                  block: !0,
                  children: "Block Level Button",
                }),
                (0, l.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, l.jsx)(u.Z, { title: "With Icon Before" }),
                (0, l.jsxs)(p.Z, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  buttonType: "filled",
                  size: "regular",
                  rounded: !1,
                  hasIcon: !0,
                  buttonChildren:
                    '<Icon name="favorite" size="sm" /> With Icon Before',
                  rippleEffect: 'ripple="light"',
                  ripple: "light",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: [
                    (0, l.jsx)(d.Z, { name: "favorite", size: "sm" }),
                    "With Icon Before",
                  ],
                }),
                (0, l.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, l.jsx)(u.Z, { title: "With Icon After" }),
                (0, l.jsxs)(p.Z, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  buttonType: "filled",
                  size: "regular",
                  rounded: !1,
                  hasIcon: !0,
                  buttonChildren:
                    'With Icon After <Icon name="favorite" size="sm" />',
                  rippleEffect: 'ripple="light"',
                  ripple: "light",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={false}",
                  children: [
                    "With Icon After",
                    (0, l.jsx)(d.Z, { name: "favorite", size: "sm" }),
                  ],
                }),
                (0, l.jsx)("div", { className: "h-20", children: "\xa0" }),
                (0, l.jsx)(u.Z, { title: "With Icon Only" }),
                (0, l.jsx)(p.Z, {
                  copyText: "Buttons" === t ? "Copied" : "Copy",
                  onCopy: function (e) {
                    return n(e ? "Buttons" : "");
                  },
                  buttonType: "filled",
                  size: "regular",
                  rounded: !0,
                  hasIcon: !0,
                  buttonChildren: '<Icon name="favorite" size="sm" />',
                  iconOnly: !0,
                  rippleEffect: 'ripple="light"',
                  ripple: "light",
                  blockLevel: "block={false}",
                  withIconOnly: "iconOnly={true}",
                  children: (0, l.jsx)(d.Z, { name: "favorite", size: "sm" }),
                }),
              ],
            }),
          ],
        });
      }
    },
    13256: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/react/buttons/filled",
        function () {
          return n(28507);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 1e3, 8969, 8485, 5592, 4031, 2888, 179], function () {
      return (t = 13256), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
