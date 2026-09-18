/* @ds-bundle: {"format":4,"namespace":"CafMandacaruDesignSystem_977c1f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"MenuItem","sourcePath":"components/core/MenuItem.jsx"},{"name":"MenuSection","sourcePath":"components/core/MenuSection.jsx"},{"name":"Ornament","sourcePath":"components/core/Ornament.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"8568849e74a9","components/core/Button.jsx":"5bc5c638b269","components/core/Card.jsx":"e657d4bd0b15","components/core/Input.jsx":"a4e6671a4bc6","components/core/MenuItem.jsx":"a002e72ead93","components/core/MenuSection.jsx":"1bf66f2ef397","components/core/Ornament.jsx":"49337c808334","components/core/Tabs.jsx":"e1bc481c1ed5","components/core/Tag.jsx":"26a98917ca64","components/core/Toast.jsx":"aad9c6a2fae3","ui_kits/cardapio/CardapioPages.jsx":"8b5c065bfa6c","ui_kits/cardapio/menu-data.js":"46c7174b2e5d","ui_kits/site/Site.jsx":"af95320467a5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CafMandacaruDesignSystem_977c1f = window.CafMandacaruDesignSystem_977c1f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: ["var(--areia-200)", "var(--cacau-800)"],
  green: ["var(--cacto-700)", "var(--flor-100)"],
  red: ["var(--hibisco-600)", "var(--flor-100)"],
  gold: ["var(--ouro-500)", "var(--cacau-900)"],
  ink: ["var(--cacau-800)", "var(--flor-200)"]
};
function Badge({
  tone = "neutral",
  children,
  style
}) {
  const [bg, fg] = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "3px 8px",
      background: bg,
      color: fg,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      lineHeight: 1.2,
      borderRadius: "var(--radius-xs)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: "6px 12px",
    fontSize: "var(--text-sm)"
  },
  md: {
    padding: "10px 18px",
    fontSize: "var(--text-sm)"
  },
  lg: {
    padding: "14px 26px",
    fontSize: "var(--text-md)"
  }
};
const looks = {
  primary: {
    background: "var(--action-primary)",
    color: "var(--action-primary-text)",
    hover: "var(--action-primary-hover)"
  },
  accent: {
    background: "var(--action-accent)",
    color: "var(--action-accent-text)",
    hover: "var(--action-accent-hover)"
  },
  green: {
    background: "var(--action-green)",
    color: "var(--flor-100)",
    hover: "var(--action-green-hover)"
  },
  secondary: {
    background: "var(--surface-card)",
    color: "var(--action-secondary-text)",
    hover: "var(--surface-tint)"
  },
  ghost: {
    background: "transparent",
    color: "var(--action-secondary-text)",
    hover: "var(--surface-tint)",
    flat: true
  }
};
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  disabled,
  fullWidth,
  children,
  style,
  ...rest
}) {
  const [st, setSt] = React.useState("rest");
  const l = looks[variant] || looks.primary;
  const shadow = l.flat ? "none" : st === "press" ? "none" : st === "hover" ? "var(--shadow-hard-sm)" : "var(--shadow-hard)";
  const shift = l.flat ? 0 : st === "press" ? 4 : st === "hover" ? 2 : 0;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled
  }, rest, {
    onMouseEnter: () => setSt("hover"),
    onMouseLeave: () => setSt("rest"),
    onMouseDown: () => setSt("press"),
    onMouseUp: () => setSt("hover"),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      width: fullWidth ? "100%" : undefined,
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      letterSpacing: ".01em",
      lineHeight: 1.2,
      border: l.flat ? "2px solid transparent" : "2px solid var(--border-ink)",
      borderRadius: "var(--radius-xs)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      background: st !== "rest" && !disabled ? l.hover : l.background,
      color: l.color,
      boxShadow: disabled ? "none" : shadow,
      transform: disabled ? "none" : `translate(${shift}px,${shift}px)`,
      transition: "transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out),background var(--dur-fast)",
      ...sizes[size],
      ...style
    }
  }), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  variant = "paper",
  shadow = true,
  padding = 24,
  children,
  style
}) {
  const v = {
    paper: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "2px solid var(--border-ink)"
    },
    noite: {
      background: "var(--cacto-900)",
      color: "var(--flor-200)",
      border: "2px solid var(--cacto-900)"
    },
    ink: {
      background: "var(--cacau-800)",
      color: "var(--flor-200)",
      border: "2px solid var(--cacau-800)"
    },
    gold: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--border-gold)",
      outline: "1px solid var(--border-gold)",
      outlineOffset: 3
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding,
      borderRadius: "var(--radius-xs)",
      boxShadow: shadow && variant !== "gold" ? "var(--shadow-hard)" : "none",
      fontFamily: "var(--font-body)",
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  textarea,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const T = textarea ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement(T, _extends({}, rest, {
    onFocus: e => {
      setF(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setF(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      padding: "10px 12px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      color: "var(--text-body)",
      background: "var(--surface-raised)",
      border: `2px solid ${error ? "var(--status-danger)" : "var(--border-ink)"}`,
      borderRadius: "var(--radius-xs)",
      outline: f ? "3px solid var(--focus-ring)" : "none",
      outlineOffset: 2,
      minHeight: textarea ? 96 : undefined,
      resize: textarea ? "vertical" : undefined
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--status-danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/MenuItem.jsx
try { (() => {
function MenuItem({
  name,
  price,
  description,
  note,
  badge,
  size = "md",
  style
}) {
  const big = size === "lg";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      color: "inherit",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: big ? "var(--text-lg)" : "var(--text-md)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, name, badge), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      flex: 1,
      borderBottom: "2px dotted var(--areia-400)",
      transform: "translateY(-5px)",
      minWidth: 16
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: big ? "var(--text-lg)" : "var(--text-md)",
      color: "var(--text-price)",
      whiteSpace: "nowrap"
    }
  }, "R$ ", price)), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, description), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "var(--text-script-sm)",
      color: "var(--text-accent)",
      marginTop: 2,
      lineHeight: 1.1
    }
  }, note));
}
Object.assign(__ds_scope, { MenuItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MenuItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Ornament.jsx
try { (() => {
function Ornament({
  label = "···",
  color = "var(--ouro-600)",
  weight = 2,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      color,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      letterSpacing: ".35em",
      textTransform: "uppercase",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderTop: `${weight}px solid currentColor`
    }
  }), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderTop: `${weight}px solid currentColor`
    }
  }));
}
Object.assign(__ds_scope, { Ornament });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Ornament.jsx", error: String((e && e.message) || e) }); }

// components/core/MenuSection.jsx
try { (() => {
function MenuSection({
  title,
  intro,
  children,
  align = "center",
  gap = 12,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Ornament, {
    style: {
      marginBottom: 6
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-display-sm)",
      lineHeight: .95,
      letterSpacing: ".02em",
      textTransform: "uppercase",
      textAlign: align,
      margin: "0 0 6px",
      color: "inherit"
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: align,
      fontFamily: "var(--font-script)",
      fontSize: "var(--text-script-sm)",
      color: "var(--text-accent)",
      margin: "0 0 10px",
      lineHeight: 1.1
    }
  }, intro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap,
      marginTop: 10
    }
  }, children));
}
Object.assign(__ds_scope, { MenuSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MenuSection.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function Tabs({
  items,
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 0,
      borderBottom: "2px solid var(--border-ink)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.value),
      style: {
        padding: "10px 16px",
        marginBottom: -2,
        background: "none",
        border: "none",
        borderBottom: `4px solid ${on ? "var(--hibisco-600)" : "transparent"}`,
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-display-xs)",
        letterSpacing: ".04em",
        textTransform: "uppercase",
        color: on ? "var(--text-heading)" : "var(--text-muted)",
        cursor: "pointer",
        transition: "color var(--dur-fast)"
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected,
  onClick,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      border: "2px solid var(--border-ink)",
      background: selected ? "var(--action-primary)" : "transparent",
      color: selected ? "var(--action-primary-text)" : "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      cursor: onClick ? "pointer" : "default",
      lineHeight: 1.2,
      transition: "background var(--dur-fast)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
function Toast({
  tone = "ink",
  title,
  children,
  action,
  onAction,
  style
}) {
  const bg = {
    ink: "var(--cacau-800)",
    green: "var(--cacto-800)",
    red: "var(--hibisco-700)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "12px 16px",
      background: bg,
      color: "var(--flor-200)",
      boxShadow: "var(--shadow-soft)",
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      maxWidth: 420,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: .85
    }
  }, children)), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: "none",
      border: "none",
      color: "var(--ouro-300)",
      fontFamily: "inherit",
      fontWeight: 600,
      fontSize: "inherit",
      cursor: "pointer",
      textDecoration: "underline",
      textUnderlineOffset: 3
    }
  }, action));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cardapio/CardapioPages.jsx
try { (() => {
// Cardápio impresso — A4 frente e verso (794×1123 @96dpi)
const {
  Badge,
  Ornament,
  MenuItem,
  MenuSection
} = window.CafMandacaruDesignSystem_977c1f;
const M = window.CM_MENU;
const D = {
  fontFamily: "var(--font-display)",
  fontWeight: 400,
  letterSpacing: ".02em",
  lineHeight: .95,
  textTransform: "uppercase"
};
function Page({
  children,
  theme,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme,
    className: "cm-grain",
    style: {
      width: 794,
      height: 1123,
      background: "var(--surface-page)",
      color: "var(--text-body)",
      position: "relative",
      overflow: "hidden",
      padding: "44px 56px",
      display: "flex",
      flexDirection: "column",
      boxShadow: "var(--shadow-soft)",
      ...style
    }
  }, children);
}
function Section({
  s,
  gap = 8,
  size
}) {
  return /*#__PURE__*/React.createElement(MenuSection, {
    title: s.title,
    intro: s.intro,
    gap: gap
  }, s.items.map(it => /*#__PURE__*/React.createElement(MenuItem, {
    key: it.name,
    name: it.name,
    price: it.price,
    description: it.description,
    size: size,
    badge: it.star ? /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Da casa") : null
  })));
}
function Frente() {
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/banana-leaf.png",
    alt: "",
    style: {
      position: "absolute",
      width: 560,
      right: -250,
      top: -140,
      transform: "rotate(-35deg)",
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hibiscus.png",
    alt: "",
    style: {
      position: "absolute",
      width: 260,
      left: -110,
      bottom: -70
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol.png?v=2",
    alt: "",
    style: {
      height: 150
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark.png?v=2",
    alt: "Caf\xE9 Mandacaru",
    style: {
      width: 340,
      display: "block",
      margin: "6px auto 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-caps",
    style: {
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, "Boipeba \xB7 Bahia \xB7 caf\xE9 da manh\xE3 & lanche")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "28px 40px",
      marginTop: 32,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Section, {
    s: M.cuscuz
  }), /*#__PURE__*/React.createElement(Section, {
    s: M.quiche
  }), /*#__PURE__*/React.createElement(Section, {
    s: M.bruschettas
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Section, {
    s: M.panqueca
  }), /*#__PURE__*/React.createElement(Section, {
    s: M.doce
  }), /*#__PURE__*/React.createElement(Section, {
    s: M.bowl
  }), /*#__PURE__*/React.createElement(Section, {
    s: M.bolo
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      position: "relative",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "cm-script",
    style: {
      color: "var(--hibisco-600)"
    }
  }, "com mais R$ 3 voc\xEA pode ter seu cuscuz com leite de coco"), /*#__PURE__*/React.createElement("div", {
    className: "cm-caps",
    style: {
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, "vire para bebidas & adicionais \xB7\xB7\xB7")));
}
function Verso() {
  return /*#__PURE__*/React.createElement(Page, {
    theme: "noite"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mandacaru-flower.png",
    alt: "",
    style: {
      position: "absolute",
      width: 520,
      right: -190,
      bottom: -170
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...D,
      fontSize: 64,
      color: "var(--text-heading)"
    }
  }, "Bebidas", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ouro-500)"
    }
  }, "& adicionais")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol.png?v=2",
    alt: "",
    style: {
      height: 110
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      maxWidth: 420,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    s: M.bebidas,
    gap: 12,
    size: "lg"
  }), /*#__PURE__*/React.createElement("p", {
    className: "cm-script",
    style: {
      color: "var(--ouro-300)",
      marginTop: 14,
      fontSize: 22
    }
  }, "tudo com leite de coco, sem leite de vaca")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      maxWidth: 420,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    s: M.adicionais,
    gap: 8
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark.png?v=2",
    alt: "Caf\xE9 Mandacaru",
    style: {
      width: 200
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-caps",
    style: {
      color: "var(--text-muted)",
      textAlign: "right",
      lineHeight: 1.8
    }
  }, "@cafemandacaru", /*#__PURE__*/React.createElement("br", null), "Boipeba \xB7 Bahia")));
}
Object.assign(window, {
  CardapioFrente: Frente,
  CardapioVerso: Verso
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cardapio/CardapioPages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cardapio/menu-data.js
try { (() => {
// Menu data — source of truth for the cardápio (from the owner's text).
window.CM_MENU = {
  cuscuz: {
    title: "Cuscuz do Mandacaru",
    intro: "Mais 3 reais e seu cuscuz com leite de coco",
    items: [{
      name: "Cuscuz com Ovo",
      price: 18
    }, {
      name: "Cuscuz com Banana-da-Terra",
      price: 21
    }, {
      name: "Cuscuz com Caponata",
      price: 24
    }, {
      name: "Cuscuz com Carne Seca",
      price: 29
    }, {
      name: "Cuscuz com Queijo Coalho",
      price: 29
    }, {
      name: "Cuscuz Sertão",
      price: 34,
      description: "Carne seca + queijo coalho",
      star: true
    }]
  },
  panqueca: {
    title: "Panqueca Primavera",
    items: [{
      name: "Trio Primavera",
      price: 27,
      description: "Caponata de berinjela + ovo"
    }, {
      name: "Trio Primavera Sertão",
      price: 34,
      description: "Caponata de berinjela + carne seca"
    }]
  },
  doce: {
    title: "Trio de Panqueca Doce",
    items: [{
      name: "Trio de Panqueca Doce",
      price: 19,
      description: "Com geleia ou melado de cana"
    }]
  },
  quiche: {
    title: "Quiche de Grão-de-Bico",
    items: [{
      name: "Quiche de grão-de-bico com PANCs",
      price: 17
    }]
  },
  bruschettas: {
    title: "Bruschettas",
    items: [{
      name: "Tomate Confit",
      price: 24
    }, {
      name: "Caponata de Berinjela",
      price: 24
    }]
  },
  bowl: {
    title: "Bowl",
    items: [{
      name: "Bowl de Frutas com Granola",
      price: 17
    }]
  },
  bolo: {
    title: "Bolo",
    items: [{
      name: "Bolo do Dia",
      price: 10
    }]
  },
  bebidas: {
    title: "Bebidas",
    items: [{
      name: "Café",
      price: 9
    }, {
      name: "Café com Leite de Coco (Pingado)",
      price: 14
    }, {
      name: "Água de Coco",
      price: 10
    }, {
      name: "Suco de Polpa",
      price: 14
    }, {
      name: "Suco Verde",
      price: 17
    }, {
      name: "Chocolate Quente (Leite de Coco)",
      price: 18
    }]
  },
  adicionais: {
    title: "Adicionais",
    items: [{
      name: "Queijo Coalho",
      price: 7
    }, {
      name: "Banana-da-Terra",
      price: 7
    }, {
      name: "Caponata de Berinjela",
      price: 8
    }, {
      name: "Ovo",
      price: 5
    }, {
      name: "Carne Seca",
      price: 9
    }, {
      name: "Granola doce ou salgada",
      price: 5
    }, {
      name: "Geleia",
      price: 4
    }, {
      name: "Melado de cana",
      price: 4
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cardapio/menu-data.js", error: String((e && e.message) || e) }); }

// ui_kits/site/Site.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Ornament,
  MenuItem,
  MenuSection,
  Card,
  Input,
  Toast
} = window.CafMandacaruDesignSystem_977c1f;
const M = window.CM_MENU;
const D = {
  fontFamily: "var(--font-display)",
  fontWeight: 400,
  letterSpacing: ".02em",
  lineHeight: .95,
  textTransform: "uppercase",
  color: "var(--text-heading)"
};
const wrap = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 32px"
};
const I = ({
  n
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: {
    width: 20,
    height: 20
  }
});
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 5,
      background: "var(--areia-100)",
      borderBottom: "2px solid var(--border-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark.png?v=2",
    alt: "Caf\xE9 Mandacaru",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28,
      fontWeight: 500,
      fontSize: 15
    }
  }, ["Cardápio", "O café", "Onde", "Contato"].map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#" + x.toLowerCase().replace(/\s/g, ""),
    style: {
      textDecoration: "none",
      color: "var(--text-body)"
    }
  }, x))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "accent",
    icon: /*#__PURE__*/React.createElement(I, {
      n: "message-circle"
    })
  }, "WhatsApp")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cm-grain",
    style: {
      background: "var(--areia-100)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/banana-leaf.png",
    alt: "",
    style: {
      position: "absolute",
      width: 820,
      right: -300,
      top: -160,
      transform: "rotate(-30deg)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hibiscus.png",
    alt: "",
    style: {
      position: "absolute",
      width: 420,
      right: 60,
      bottom: -140
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "96px 32px 120px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-caps",
    style: {
      color: "var(--hibisco-600)"
    }
  }, "Boipeba \xB7 Bahia"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...D,
      fontSize: "clamp(56px,7vw,104px)",
      marginTop: 16,
      maxWidth: 760
    }
  }, "Cuscuz, caf\xE9 e ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cacto-700)"
    }
  }, "leite de coco")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      maxWidth: 480,
      marginTop: 24,
      color: "var(--text-body)"
    }
  }, "Um caf\xE9 roots numa ilha sem carro. Sert\xE3o que encontra o mar: pancs na quiche, melado na panqueca, carcar\xE1 no telhado."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 36,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent"
  }, "Ver card\xE1pio"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(I, {
      n: "map-pin"
    })
  }, "Como chegar")), /*#__PURE__*/React.createElement("p", {
    className: "cm-script",
    style: {
      color: "var(--hibisco-600)",
      marginTop: 40,
      fontSize: 28
    }
  }, "aberto todo dia, das 7h \xE0s 14h")));
}
function Destaques() {
  const picks = [M.cuscuz.items[5], M.panqueca.items[1], M.quiche.items[0]];
  return /*#__PURE__*/React.createElement("section", {
    id: "card\xE1pio",
    style: {
      background: "var(--surface-page)",
      padding: "96px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Ornament, {
    label: "card\xE1pio",
    color: "var(--cacau-800)"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...D,
      fontSize: 56,
      textAlign: "center",
      margin: "20px 0 48px"
    }
  }, "Do sert\xE3o pra mesa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: 32
    }
  }, picks.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    padding: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      background: ["var(--cacto-900)", "var(--ouro-500)", "var(--hibisco-600)"][i],
      display: "grid",
      placeItems: "center",
      color: "var(--flor-100)",
      fontSize: 12,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      fontWeight: 600,
      borderBottom: "2px solid var(--border-ink)"
    }
  }, "foto do prato"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(MenuItem, {
    name: p.name,
    price: p.price,
    description: p.description || "Grão-de-bico e PANCs da ilha",
    size: "lg",
    badge: i === 0 ? /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Da casa") : null
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement(MenuSection, {
    title: M.cuscuz.title,
    intro: M.cuscuz.intro,
    align: "left",
    gap: 12
  }, M.cuscuz.items.map(it => /*#__PURE__*/React.createElement(MenuItem, _extends({
    key: it.name
  }, it)))), /*#__PURE__*/React.createElement(MenuSection, {
    title: M.bebidas.title,
    align: "left",
    gap: 12
  }, M.bebidas.items.map(it => /*#__PURE__*/React.createElement(MenuItem, _extends({
    key: it.name
  }, it))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(I, {
      n: "arrow-down"
    })
  }, "Card\xE1pio completo"))));
}
function Sobre() {
  return /*#__PURE__*/React.createElement("section", {
    id: "ocaf\xE9",
    "data-theme": "noite",
    className: "cm-grain",
    style: {
      background: "var(--surface-page)",
      color: "var(--text-body)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mandacaru-flower.png",
    alt: "",
    style: {
      position: "absolute",
      width: 620,
      left: -220,
      bottom: -220
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "112px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol.png?v=2",
    alt: "",
    style: {
      width: 360,
      justifySelf: "center"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cm-caps",
    style: {
      color: "var(--ouro-500)"
    }
  }, "O caf\xE9"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...D,
      fontSize: 56,
      color: "var(--text-heading)",
      marginTop: 16
    }
  }, "Mandacaru floresce \xE0 noite"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      marginTop: 24,
      color: "var(--text-body)"
    }
  }, "A flor do mandacaru abre uma vez e s\xF3 de madrugada. A gente abre cedo, com caf\xE9 passado na hora, cuscuz de milho e leite de coco feito aqui. Sem leite de vaca, sem pressa, sem asfalto."), /*#__PURE__*/React.createElement("p", {
    className: "cm-script",
    style: {
      color: "var(--ouro-300)",
      marginTop: 24,
      fontSize: 26
    }
  }, "o carcar\xE1 \xE9 de verdade. ele mora no telhado."))));
}
function Onde() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "onde",
    style: {
      padding: "96px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Ornament, {
    label: "onde",
    color: "var(--cacau-800)",
    style: {
      justifyContent: "flex-start"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...D,
      fontSize: 48,
      marginTop: 20
    }
  }, "Velha Boipeba, perto do cais"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "28px 0 0",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      fontSize: 17
    }
  }, [["map-pin", "Rua da Praia, Velha Boipeba — Cairu, BA"], ["clock", "Todo dia · 7h às 14h"], ["instagram", "@cafemandacaru"]].map(([n, t]) => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--hibisco-600)"
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: n
  })), t)))), /*#__PURE__*/React.createElement(Card, {
    id: "contato"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...D,
      fontSize: 22
    }
  }, "Reserva pra grupo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Maria"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Pessoas",
    type: "number",
    placeholder: "6"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Dia",
    type: "date"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "WhatsApp",
    placeholder: "75 9\u2026"
  }), sent ? /*#__PURE__*/React.createElement(Toast, {
    tone: "green",
    title: "Recebemos!",
    action: "Fechar",
    onAction: () => setSent(false)
  }, "Te respondemos no WhatsApp") : /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true),
    fullWidth: true
  }, "Pedir reserva")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--cacau-900)",
      color: "var(--flor-200)",
      padding: "48px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark.png?v=2",
    alt: "Caf\xE9 Mandacaru",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-caps",
    style: {
      color: "var(--ouro-300)"
    }
  }, "Boipeba \xB7 Bahia \xB7 desde sempre")));
}
function Site() {
  React.useEffect(() => {
    window.lucide && lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Destaques, null), /*#__PURE__*/React.createElement(Sobre, null), /*#__PURE__*/React.createElement(Onde, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  Site
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.MenuSection = __ds_scope.MenuSection;

__ds_ns.Ornament = __ds_scope.Ornament;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

})();
