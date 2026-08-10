/* @ds-bundle: {"format":4,"namespace":"LetsRedaODesignSystem_c8c5b3","components":[{"name":"PriceCard","sourcePath":"components/content/PriceCard.jsx"},{"name":"ResultCard","sourcePath":"components/content/ResultCard.jsx"},{"name":"TestimonialBubble","sourcePath":"components/content/TestimonialBubble.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Highlight","sourcePath":"components/core/Highlight.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionTitle","sourcePath":"components/core/SectionTitle.jsx"},{"name":"Sparkle","sourcePath":"components/core/Sparkle.jsx"},{"name":"WaveShape","sourcePath":"components/core/WaveShape.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/content/PriceCard.jsx":"1e8bec4c6111","components/content/ResultCard.jsx":"430e32df1a7b","components/content/TestimonialBubble.jsx":"b2324978e764","components/core/Badge.jsx":"6465c7ab08a3","components/core/Button.jsx":"27628a6c303c","components/core/Card.jsx":"654c29585afd","components/core/Highlight.jsx":"716dd5ff7e34","components/core/Logo.jsx":"8bfc22a17052","components/core/SectionTitle.jsx":"5153b117fa91","components/core/Sparkle.jsx":"5f213d3ff7dd","components/core/WaveShape.jsx":"f5eb36f72790","components/forms/Checkbox.jsx":"a8fe99f308eb","components/forms/Input.jsx":"d61b531d2c12","components/forms/Select.jsx":"1d7ca8d65ffa","ui_kits/site/CourseScreen.jsx":"39d82f6ef7cc","ui_kits/site/EnrollModal.jsx":"a3f58cdb0d73","ui_kits/site/HeroScreen.jsx":"4aa9df477b9c","ui_kits/site/PricingScreen.jsx":"13a6500d57a1","ui_kits/site/ProfessoraScreen.jsx":"9a3c0ba6ac4d","ui_kits/site/ResultsScreen.jsx":"feba324e85bc","ui_kits/site/SiteFooter.jsx":"397757bcdb60","ui_kits/site/SiteHeader.jsx":"5e84d64dbba2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LetsRedaODesignSystem_c8c5b3 = window.LetsRedaODesignSystem_c8c5b3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ResultCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SHAPE_FILL = {
  lime: "var(--lime-400)",
  yellow: "var(--yellow-300)"
};
function ResultCard({
  name,
  score,
  photo,
  shapeTone = "lime",
  sparkleTone = "purple",
  assetBase = "assets",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "18px 18px 14px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      overflow: "hidden",
      boxShadow: "var(--shadow-none)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-strong)",
      textTransform: "lowercase",
      textAlign: "center",
      lineHeight: 1.1,
      position: "relative",
      zIndex: 2,
      padding: "0 30px"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: -26,
      top: "18%",
      width: 40,
      height: "64%",
      background: SHAPE_FILL[shapeTone],
      borderRadius: "var(--radius-pill)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: -26,
      top: "18%",
      width: 40,
      height: "64%",
      background: SHAPE_FILL[shapeTone],
      borderRadius: "var(--radius-pill)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      position: "relative",
      width: 148,
      height: 148,
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "26px",
      color: "var(--text-strong)",
      letterSpacing: "0.06em",
      zIndex: 2
    }
  }, score), /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}/logo-lets-redacao.png`,
    alt: "",
    "aria-hidden": "true",
    style: {
      width: 34,
      opacity: 0.9,
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}/sparkle-${sparkleTone}.png`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      width: 26,
      zIndex: 3
    }
  }));
}
Object.assign(__ds_scope, { ResultCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ResultCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TestimonialBubble({
  variant = "message",
  handle,
  time,
  children,
  style,
  ...rest
}) {
  const inline = variant === "comment";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-bubble)",
      borderRadius: "var(--radius-sm)",
      padding: inline ? "8px 12px" : "12px 14px 8px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--neutral-900)",
      lineHeight: 1.35,
      maxWidth: 340,
      boxShadow: "var(--shadow-none)",
      ...style
    }
  }, rest), inline ? /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--neutral-900)",
      fontWeight: "var(--fw-body-strong)"
    }
  }, handle), " ", children) : /*#__PURE__*/React.createElement(React.Fragment, null, handle ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: "var(--fw-body-strong)",
      color: "var(--neutral-900)",
      marginBottom: 2
    }
  }, handle) : null, /*#__PURE__*/React.createElement("p", null, children), time ? /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "right",
      fontSize: "11px",
      color: "var(--neutral-600)",
      marginTop: 4
    }
  }, time) : null));
}
Object.assign(__ds_scope, { TestimonialBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialBubble.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  lime: {
    background: "var(--lime-400)",
    color: "var(--purple-800)"
  },
  yellow: {
    background: "var(--yellow-300)",
    color: "var(--purple-800)"
  },
  lilac: {
    background: "var(--purple-300)",
    color: "var(--cream-50)"
  },
  purple: {
    background: "var(--purple-800)",
    color: "var(--cream-50)"
  },
  cream: {
    background: "var(--cream-200)",
    color: "var(--purple-800)"
  }
};
function Badge({
  tone = "lime",
  size = "md",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-body-strong)",
      fontSize: size === "sm" ? "var(--fs-body-xs)" : "var(--fs-body-sm)",
      padding: size === "sm" ? "3px 10px" : "5px 14px",
      borderRadius: "var(--radius-pill)",
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      ...TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "8px 18px",
    fontSize: "var(--fs-body-sm)"
  },
  md: {
    padding: "12px 26px",
    fontSize: "var(--fs-body-md)"
  },
  lg: {
    padding: "16px 34px",
    fontSize: "var(--fs-body-lg)"
  }
};
const VARIANTS = {
  primary: {
    background: "var(--action-bg)",
    color: "var(--action-fg)",
    border: "2px solid var(--action-bg)"
  },
  accent: {
    background: "var(--action-accent-bg)",
    color: "var(--action-accent-fg)",
    border: "2px solid var(--action-accent-bg)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-body)",
    border: "2px solid var(--border-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-body)",
    border: "2px solid transparent"
  }
};
const HOVER = {
  primary: {
    background: "var(--action-bg-hover)",
    borderColor: "var(--action-bg-hover)"
  },
  accent: {
    background: "var(--action-accent-bg-hover)",
    borderColor: "var(--action-accent-bg-hover)"
  },
  outline: {
    background: "var(--purple-100)"
  },
  ghost: {
    background: "var(--purple-100)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-body-strong)",
      letterSpacing: "var(--ls-label)",
      lineHeight: 1.1,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
      opacity: disabled ? 0.4 : 1,
      transform: press ? "scale(var(--press-scale))" : "none",
      ...SIZES[size],
      ...VARIANTS[variant],
      ...(hover && !disabled ? HOVER[variant] : null),
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PriceCard({
  label = "investimento",
  amount = "R$180",
  period = "mensais",
  note,
  badge,
  ctaLabel = "garanta sua vaga",
  onCta,
  bullets = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      padding: "var(--space-8)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      maxWidth: 380,
      boxShadow: "var(--shadow-none)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-body-strong)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "yellow",
    size: "sm"
  }, badge) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-display-bold)",
      fontSize: "var(--fs-display-md)",
      color: "var(--text-strong)"
    }
  }, amount), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-body-strong)",
      color: "var(--text-body)"
    }
  }, period)), bullets.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: "var(--space-2)"
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: "grid",
      gridTemplateColumns: "18px 1fr",
      gap: "var(--space-2)",
      fontSize: "var(--fs-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 10,
      height: 10,
      marginTop: 6,
      borderRadius: "var(--radius-pill)",
      background: "var(--lime-400)"
    }
  }), /*#__PURE__*/React.createElement("span", null, b)))) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "accent",
    size: "lg",
    block: true,
    onClick: onCta
  }, ctaLabel), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-xs)",
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, note) : null);
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  cream: {
    background: "var(--surface-card)",
    color: "var(--text-body)"
  },
  sunken: {
    background: "var(--surface-sunken)",
    color: "var(--text-body)"
  },
  lime: {
    background: "var(--surface-accent)",
    color: "var(--text-on-accent)"
  },
  lilac: {
    background: "var(--surface-invert)",
    color: "var(--text-on-invert)"
  }
};
function Card({
  surface = "cream",
  radius = "lg",
  bordered = false,
  padding,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: `var(--radius-${radius})`,
      padding: padding ?? "var(--pad-card)",
      border: bordered ? "var(--border-hairline)" : "none",
      boxShadow: "var(--shadow-none)",
      ...SURFACES[surface],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Highlight.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Highlight({
  tone = "yellow",
  block = false,
  children,
  style,
  ...rest
}) {
  const fill = tone === "lime" ? "var(--marker-lime)" : "var(--marker)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: block ? "block" : "inline",
      background: fill,
      boxDecorationBreak: "clone",
      WebkitBoxDecorationBreak: "clone",
      padding: block ? "2px 10px 4px" : "0.04em 0.12em 0.1em",
      color: "var(--text-strong)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Highlight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Highlight.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  tone = "pink",
  width = 120,
  assetBase = "assets",
  style,
  ...rest
}) {
  const file = tone === "cream" ? "logo-lets-redacao-cream.png" : "logo-lets-redacao.png";
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetBase}/${file}`,
    alt: "lets reda\xE7\xE3o",
    style: {
      width,
      height: "auto",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: "var(--fs-display-sm)",
  md: "var(--fs-display-md)",
  lg: "var(--fs-display-lg)",
  xl: "var(--fs-display-xl)"
};
function SectionTitle({
  as = "h2",
  size = "lg",
  tone = "lilac",
  align = "center",
  children,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-display)",
      fontSize: SIZES[size],
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      textTransform: "lowercase",
      color: tone === "deep" ? "var(--text-strong)" : tone === "cream" ? "var(--text-on-invert)" : "var(--text-heading)",
      textAlign: align,
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/core/Sparkle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  purple: "sparkle-purple.png",
  yellow: "sparkle-yellow.png",
  "yellow-pair": "sparkle-yellow-pair.png"
};
function Sparkle({
  tone = "purple",
  size = 48,
  assetBase = "assets",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetBase}/${SRC[tone]}`,
    alt: "",
    "aria-hidden": "true",
    style: {
      width: size,
      height: "auto",
      pointerEvents: "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Sparkle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Sparkle.jsx", error: String((e && e.message) || e) }); }

// components/core/WaveShape.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  band: "wave-lime-band.png",
  upper: "wave-lime-upper.png",
  "blob-top-left": "blob-lime-top-left.png",
  "blob-bottom-left": "blob-lime-bottom-left.png",
  "blob-bottom-right": "blob-lime-bottom-right.png"
};
function WaveShape({
  shape = "band",
  width = "100%",
  assetBase = "assets",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetBase}/${SRC[shape]}`,
    alt: "",
    "aria-hidden": "true",
    style: {
      width,
      height: "auto",
      pointerEvents: "none",
      userSelect: "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { WaveShape });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/WaveShape.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      width: 24,
      height: 24,
      marginTop: 1,
      borderRadius: "var(--radius-xs)",
      border: `2px solid ${checked ? "var(--purple-800)" : "var(--border-subtle)"}`,
      background: checked ? "var(--lime-400)" : "var(--cream-50)",
      display: "grid",
      placeItems: "center",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 6,
      borderLeft: "3px solid var(--purple-800)",
      borderBottom: "3px solid var(--purple-800)",
      transform: "rotate(-45deg) translateY(-2px)"
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  multiline = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const Tag = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "6px",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--fs-label)",
      fontWeight: "var(--fw-body-strong)",
      color: "var(--text-body)"
    }
  }, label) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    id: inputId,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "inherit",
      fontSize: "var(--fs-body-md)",
      color: "var(--text-body)",
      background: "var(--cream-50)",
      padding: "12px 16px",
      borderRadius: multiline ? "var(--radius-md)" : "var(--radius-pill)",
      border: `2px solid ${error ? "var(--danger)" : focus ? "var(--purple-500)" : "var(--border-subtle)"}`,
      outline: "none",
      resize: multiline ? "vertical" : undefined,
      transition: "border-color var(--dur-fast) var(--ease-out)"
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-xs)",
      color: "var(--danger)",
      fontWeight: "var(--fw-body-strong)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "6px",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: "var(--fs-label)",
      fontWeight: "var(--fw-body-strong)",
      color: "var(--text-body)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "inherit",
      fontSize: "var(--fs-body-md)",
      color: "var(--text-body)",
      width: "100%",
      appearance: "none",
      background: "var(--cream-50)",
      padding: "12px 44px 12px 16px",
      borderRadius: "var(--radius-pill)",
      border: `2px solid ${focus ? "var(--purple-500)" : "var(--border-subtle)"}`,
      outline: "none"
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === "string" ? o : o.value,
    value: typeof o === "string" ? o : o.value
  }, typeof o === "string" ? o : o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 18,
      top: "50%",
      width: 9,
      height: 9,
      marginTop: -6,
      borderRight: "2.5px solid var(--purple-800)",
      borderBottom: "2.5px solid var(--purple-800)",
      transform: "rotate(45deg)",
      pointerEvents: "none"
    }
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/CourseScreen.jsx
try { (() => {
const {
  SectionTitle,
  Highlight,
  Card,
  Badge,
  WaveShape,
  Sparkle
} = window.LetsRedaODesignSystem_c8c5b3;
const FACTS = [["02 aulas por semana", "Dias úteis, período noturno — e disponíveis a qualquer momento na nossa plataforma própria."], ["1 redação corrigida por semana", "Toda semana você entrega e recebe a correção completa, competência por competência."], ["encontros com psicóloga", "Na reta final, encontros coletivos para você chegar na prova mais calmo e confiante."], ["materiais extras", "Repertórios, temas e materiais de apoio que asseguram o seu sucesso na prova."]];
function CourseScreen({
  assetBase
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "curso",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--space-20) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(WaveShape, {
    shape: "blob-top-left",
    assetBase: assetBase,
    style: {
      position: "absolute",
      left: 0,
      top: 40,
      height: 340,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 1000,
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    as: "h2",
    size: "lg"
  }, "detalhes do curso"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, FACTS.map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    surface: "cream",
    radius: "xl",
    padding: "var(--space-8)",
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "26px",
      color: "var(--text-strong)",
      textTransform: "lowercase",
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-md)"
    }
  }, d)))), /*#__PURE__*/React.createElement(Card, {
    surface: "lime",
    radius: "xl",
    padding: "var(--space-8)",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-xl)",
      fontWeight: "var(--fw-body-strong)",
      color: "var(--text-strong)",
      flex: 1,
      minWidth: 280
    }
  }, "O curso come\xE7a no dia 02/07, e as vagas s\xE3o realmente limitadas, porque prezamos pelo atendimento completo a cada aluno."), /*#__PURE__*/React.createElement(Badge, {
    tone: "purple"
  }, "termina na semana antes do ENEM"))), /*#__PURE__*/React.createElement(Sparkle, {
    tone: "yellow",
    size: 60,
    assetBase: assetBase,
    style: {
      position: "absolute",
      right: 80,
      top: 120
    }
  }));
}
Object.assign(window, {
  CourseScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/CourseScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/EnrollModal.jsx
try { (() => {
const {
  Card,
  Button,
  Input,
  Select,
  Checkbox,
  SectionTitle,
  Sparkle,
  Badge
} = window.LetsRedaODesignSystem_c8c5b3;
function EnrollModal({
  open,
  onClose,
  assetBase
}) {
  const [step, setStep] = React.useState(0);
  const [mago, setMago] = React.useState(false);
  const [avisos, setAvisos] = React.useState(true);
  React.useEffect(() => {
    if (open) setStep(0);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      background: "var(--veil-purple)",
      display: "grid",
      placeItems: "center",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    onClick: e => e.stopPropagation(),
    surface: "cream",
    radius: "2xl",
    padding: "var(--space-10)",
    style: {
      position: "relative",
      width: "min(520px,100%)",
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    tone: "yellow",
    size: 52,
    assetBase: assetBase,
    style: {
      position: "absolute",
      right: 22,
      top: 18
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "fechar",
    style: {
      position: "absolute",
      left: 22,
      top: 18,
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 20,
      color: "var(--text-muted)",
      lineHeight: 1
    }
  }, "\xD7"), step === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionTitle, {
    size: "sm",
    align: "left"
  }, "garanta a sua vaga"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-md)"
    }
  }, "Turma do Intensivo de Reda\xE7\xE3o \u2014 in\xEDcio em ", /*#__PURE__*/React.createElement("strong", null, "02/07"), ". Vagas para apenas 5% dos alunos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "seu nome",
    placeholder: "como te chamamos?"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "seu whatsapp",
    placeholder: "(32) 90000-0000",
    hint: "usamos s\xF3 pra te avisar da turma"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "qual sua s\xE9rie?",
    options: ["3º ano", "treineiro", "já formado"]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "j\xE1 sou aluno do Mago do PISM (10% de desconto)",
    checked: mago,
    onChange: e => setMago(e.target.checked)
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "quero receber os avisos da turma no whatsapp",
    checked: avisos,
    onChange: e => setAvisos(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "30px",
      color: "var(--text-strong)"
    }
  }, mago ? "R$162" : "R$180"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-xs)",
      color: "var(--text-muted)"
    }
  }, "por m\xEAs")), mago ? /*#__PURE__*/React.createElement(Badge, {
    tone: "yellow",
    size: "sm"
  }, "10% aplicado") : null, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => setStep(1),
    style: {
      marginLeft: "auto"
    }
  }, "confirmar"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "center",
      textAlign: "center",
      padding: "var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + "/sparkle-purple.png",
    alt: "",
    style: {
      width: 64
    }
  }), /*#__PURE__*/React.createElement(SectionTitle, {
    size: "sm",
    tone: "deep"
  }, "vaga reservada!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-md)",
      maxWidth: "38ch"
    }
  }, "A Let\xEDcia vai te chamar no whatsapp com o link de pagamento e o acesso \xE0 plataforma. ", /*#__PURE__*/React.createElement("strong", null, "At\xE9 02/07!")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose
  }, "fechar"))));
}
Object.assign(window, {
  EnrollModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/EnrollModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/HeroScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  SectionTitle,
  Highlight,
  Sparkle,
  WaveShape
} = window.LetsRedaODesignSystem_c8c5b3;
function HeroScreen({
  onEnroll,
  assetBase
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "hero",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--space-16) var(--space-10) var(--space-20)"
    }
  }, /*#__PURE__*/React.createElement(WaveShape, {
    shape: "band",
    assetBase: assetBase,
    style: {
      position: "absolute",
      left: 0,
      top: 300,
      width: "110%",
      opacity: 1
    }
  }), /*#__PURE__*/React.createElement(Sparkle, {
    tone: "yellow",
    size: 78,
    assetBase: assetBase,
    style: {
      position: "absolute",
      right: 110,
      bottom: 180
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 1100,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement(Highlight, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-sm)",
      color: "var(--text-heading)"
    }
  }, "reda\xE7\xE3o enem"))), /*#__PURE__*/React.createElement(SectionTitle, {
    as: "h1",
    size: "xl",
    tone: "deep",
    align: "left"
  }, "magia e reda\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-sm)",
      color: "var(--text-heading)",
      textTransform: "lowercase"
    }
  }, "a magia chegou a reda\xE7\xE3o!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-xl)",
      maxWidth: "46ch"
    }
  }, "O nosso Intensivo de Reda\xE7\xE3o vai ser excepcional. Garanta a sua vaga com os m\xE9todos e acompanhamento da ", /*#__PURE__*/React.createElement("strong", null, "professora Let\xEDcia!")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "lime"
  }, "come\xE7a 02/07"), /*#__PURE__*/React.createElement(Badge, {
    tone: "yellow"
  }, "vagas para apenas 5% dos alunos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onEnroll
  }, "garanta sua vaga"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => document.getElementById("curso")?.parentElement
  }, "ver os detalhes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + "/photo-leticia-hero.png",
    alt: "Professora Let\xEDcia",
    style: {
      position: "relative",
      zIndex: 2,
      height: 520,
      width: "auto"
    }
  }))));
}
Object.assign(window, {
  HeroScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/HeroScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/PricingScreen.jsx
try { (() => {
const {
  SectionTitle,
  PriceCard,
  Card,
  WaveShape,
  Badge
} = window.LetsRedaODesignSystem_c8c5b3;
function PricingScreen({
  onEnroll,
  assetBase
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "valor",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--space-20) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(WaveShape, {
    shape: "blob-bottom-left",
    assetBase: assetBase,
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: 150,
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 1000,
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    as: "h2",
    size: "lg"
  }, "valor do curso"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 380px",
      gap: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--gap-paragraph)",
      maxWidth: "58ch"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      textAlign: "justify"
    }
  }, "Pela procura, qualidade, b\xF4nus e m\xE9todo da professora Let\xEDcia, amparada pela qualidade do curso do Mago, poder\xEDamos cobrar um valor acima do mercado."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      textAlign: "justify"
    }
  }, "Mas o nosso comprometimento com voc\xEAs \xE9 real e, por isso, vamos oferecer a prepara\xE7\xE3o adequada por um ", /*#__PURE__*/React.createElement("strong", null, "valor muito acess\xEDvel,"), " abaixo de outros cursos que oferecem muito menos!"), /*#__PURE__*/React.createElement(Card, {
    surface: "sunken",
    radius: "lg",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Se voc\xEA chegou at\xE9 aqui, n\xE3o pode deixar essa oportunidade passar."), " Uma boa nota na reda\xE7\xE3o \xE9 o que encaminha sua aprova\xE7\xE3o no ENEM!")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 3,
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "cream"
  }, "m\xE9todo de escrita"), /*#__PURE__*/React.createElement(Badge, {
    tone: "cream"
  }, "estudo de temas"), /*#__PURE__*/React.createElement(Badge, {
    tone: "cream"
  }, "monitorias"), /*#__PURE__*/React.createElement(Badge, {
    tone: "cream"
  }, "corre\xE7\xE3o de reda\xE7\xF5es"), /*#__PURE__*/React.createElement(Badge, {
    tone: "cream"
  }, "acompanhamento exclusivo"))), /*#__PURE__*/React.createElement(PriceCard, {
    amount: "R$180",
    period: "mensais",
    badge: "10% p/ alunos do Mago",
    onCta: onEnroll,
    note: "vagas limitadas a 5% dos alunos do Mago do PISM",
    bullets: ["02 aulas por semana na plataforma", "1 redação corrigida toda semana", "encontros com psicóloga na reta final", "materiais extras de repertório"]
  }))));
}
Object.assign(window, {
  PricingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/PricingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ProfessoraScreen.jsx
try { (() => {
const {
  SectionTitle,
  Card,
  WaveShape,
  Sparkle
} = window.LetsRedaODesignSystem_c8c5b3;
function ProfessoraScreen({
  assetBase
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "professora",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--space-20) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(WaveShape, {
    shape: "blob-bottom-right",
    assetBase: assetBase,
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: 320
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 1000,
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    as: "h2",
    size: "lg"
  }, "professora let\xEDcia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "320px 1fr",
      gap: "var(--space-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + "/photo-leticia-square.png",
    alt: "Professora Let\xEDcia",
    style: {
      width: "100%",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--gap-paragraph)",
      maxWidth: "62ch"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      textAlign: "justify"
    }
  }, "A professora Let\xEDcia \xE9 a ", /*#__PURE__*/React.createElement("strong", null, "melhor pessoa"), " para te levar \xE0 reda\xE7\xE3o nota 1000! Isso porque ela \xE9 capaz de unir uma compet\xEAncia brilhante a uma empatia excepcional."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      textAlign: "justify"
    }
  }, "Ela compreende por completo ", /*#__PURE__*/React.createElement("strong", null, "as necessidades dos alunos"), " e, por isso, \xE9 capaz de produzir o acompanhamento necess\xE1rio para a forma\xE7\xE3o da ", /*#__PURE__*/React.createElement("strong", null, "sua escrita textual,"), " a partir das ", /*#__PURE__*/React.createElement("strong", null, "suas dificuldades individuais"), "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      textAlign: "justify"
    }
  }, "Ela acredita que \xE9 capaz de ensinar nuances da escrita a qualquer pessoa, ", /*#__PURE__*/React.createElement("strong", null, "pois reda\xE7\xE3o \xE9 mais f\xE1cil do que voc\xEA imagina.")), /*#__PURE__*/React.createElement(Card, {
    surface: "sunken",
    radius: "lg",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)"
    }
  }, "Em sua grande ", /*#__PURE__*/React.createElement("strong", null, "maioria,"), " os vestibulandos acompanhados pela Let\xEDcia obt\xEAm m\xE9dia de ", /*#__PURE__*/React.createElement("strong", null, "notas acima de 900 na reda\xE7\xE3o do ENEM!")))))), /*#__PURE__*/React.createElement(Sparkle, {
    tone: "purple",
    size: 54,
    assetBase: assetBase,
    style: {
      position: "absolute",
      left: 70,
      bottom: 110
    }
  }));
}
Object.assign(window, {
  ProfessoraScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ProfessoraScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ResultsScreen.jsx
try { (() => {
const {
  SectionTitle,
  Highlight,
  ResultCard,
  TestimonialBubble,
  Sparkle,
  Logo,
  Card
} = window.LetsRedaODesignSystem_c8c5b3;
const STUDENTS = [["ana beatriz mesquita", 960, "lime"], ["ana luiza oliveira cabral", 940, "yellow"], ["leiliane silveira vieira", 960, "lime"], ["vitoria dias sinfronio", 960, "lime"], ["nathália pacheco", 960, "yellow"], ["luísa reis", 960, "lime"]];
const NOTES = [{
  variant: "comment",
  handle: "annahismert",
  text: "Você é a melhor!!! 💜"
}, {
  time: "20:16",
  text: "leeett, vc me salvou dms na redação — repertório 100% adquirido com você"
}, {
  variant: "comment",
  handle: "maria.ramosz",
  text: "Você é a melhor!! 💜"
}, {
  time: "19:53",
  text: "Independente do resultado, você me ajudou demais. Adorei sua didática"
}, {
  variant: "comment",
  handle: "mathewskrambeck",
  text: "Você é inspiração para todos nós educadores 💙💙💙"
}, {
  time: "22:41",
  text: "muito obrigado por tudo 🫶 você é incrível ❤️❤️"
}];
function ResultsScreen({
  assetBase,
  tab,
  onTab
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "resultados",
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-invert)",
      padding: "var(--space-20) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    tone: "purple",
    size: 70,
    assetBase: assetBase,
    style: {
      position: "absolute",
      left: 80,
      bottom: 90
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 1000,
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-10)",
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    as: "h2",
    size: "lg",
    tone: "deep"
  }, "alguns ", /*#__PURE__*/React.createElement(Highlight, null, "resultados")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      background: "rgba(255,252,242,.35)",
      padding: 4,
      borderRadius: "var(--radius-pill)"
    }
  }, [["notas", "notas do enem"], ["feedbacks", "feedbacks"]].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onTab(id),
    style: {
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--radius-pill)",
      padding: "9px 22px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-body-strong)",
      background: tab === id ? "var(--cream-50)" : "transparent",
      color: tab === id ? "var(--text-strong)" : "var(--text-on-invert)"
    }
  }, label))), tab === "notas" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      width: "100%"
    }
  }, STUDENTS.map(([name, score, tone]) => /*#__PURE__*/React.createElement(ResultCard, {
    key: name,
    name: name,
    score: score,
    shapeTone: tone,
    sparkleTone: tone === "yellow" ? "purple" : "purple",
    photo: assetBase + "/placeholder-square.png",
    assetBase: assetBase
  }))) : /*#__PURE__*/React.createElement(Card, {
    surface: "cream",
    radius: "xl",
    padding: "var(--space-8)",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      columnCount: 2,
      columnGap: "var(--space-6)"
    }
  }, NOTES.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      breakInside: "avoid",
      marginBottom: "var(--space-3)",
      marginLeft: i % 3 === 1 ? 18 : 0
    }
  }, /*#__PURE__*/React.createElement(TestimonialBubble, {
    variant: n.variant || "message",
    handle: n.handle,
    time: n.time
  }, n.text))))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-on-invert)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-body-strong)"
    }
  }, "At\xE9 os tutorados treineiros obt\xEAm nota superior a 900."), /*#__PURE__*/React.createElement(Logo, {
    tone: "cream",
    width: 92,
    assetBase: assetBase
  })));
}
Object.assign(window, {
  ResultsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ResultsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteFooter.jsx
try { (() => {
const {
  Logo,
  Button
} = window.LetsRedaODesignSystem_c8c5b3;
function SiteFooter({
  onEnroll,
  assetBase
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-invert-strong)",
      padding: "var(--space-16) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-6)",
      justifyItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "cream",
    width: 110,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-sm)",
      color: "var(--purple-200)",
      textTransform: "lowercase"
    }
  }, "a magia chegou a reda\xE7\xE3o!"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onEnroll
  }, "garanta sua vaga"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-xs)",
      color: "var(--purple-200)"
    }
  }, "Intensivo de Reda\xE7\xE3o ENEM \xB7 professora Let\xEDcia \xB7 em parceria com o Mago do PISM")));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteHeader.jsx
try { (() => {
const {
  Button,
  Logo
} = window.LetsRedaODesignSystem_c8c5b3;
function SiteHeader({
  section,
  onNav,
  onEnroll,
  assetBase
}) {
  const items = [["curso", "detalhes do curso"], ["professora", "professora letícia"], ["resultados", "resultados"], ["valor", "valor"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "var(--veil-cream)",
      backdropFilter: "var(--blur-veil)",
      WebkitBackdropFilter: "var(--blur-veil)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "14px var(--space-10)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("hero"),
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    width: 74,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginLeft: "auto"
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-body-strong)",
      color: section === id ? "var(--text-strong)" : "var(--text-muted)",
      padding: "4px 0",
      borderBottom: section === id ? "2px solid var(--lime-500)" : "2px solid transparent"
    }
  }, label))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: onEnroll
  }, "garanta sua vaga")));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.ResultCard = __ds_scope.ResultCard;

__ds_ns.TestimonialBubble = __ds_scope.TestimonialBubble;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Highlight = __ds_scope.Highlight;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.Sparkle = __ds_scope.Sparkle;

__ds_ns.WaveShape = __ds_scope.WaveShape;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
