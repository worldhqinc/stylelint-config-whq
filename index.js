"use strict";

module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": ["stylelint-order", "stylelint-no-unsupported-browser-features"],
    "defaultSeverity": "warning",
    "rules": {
        "at-rule-empty-line-before": null,
        "declaration-empty-line-before": null,
        "max-empty-lines": null,
        "order/order": [
            "custom-properties",
            "declarations"
        ],
        "order/properties-order": [
            "display",
            "visibility",
            "clip",
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index",
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "align-content",
            "align-items",
            "align-self",
            "justify-content",
            "order",
            "grid",
            "float",
            "clear",
            "box-sizing",
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "overflow",
            "overflow-x",
            "overflow-y",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "border",
            "border-top",
            "border-right",
            "border-bottom",
            "border-left",
            "border-width",
            "border-top-width",
            "border-right-width",
            "border-bottom-width",
            "border-left-width",
            "border-style",
            "border-top-style",
            "border-right-style",
            "border-bottom-style",
            "border-left-style",
            "border-color",
            "border-top-color",
            "border-right-color",
            "border-bottom-color",
            "border-left-color",
            "border-collapse",
            "border-radius",
            "border-spacing",
            "table-layout",
            "caption-side",
            "empty-cells",
            "background",
            "background-color",
            "background-image",
            "background-repeat",
            "background-position",
            "background-size",
            "background-attachment",
            "background-clip",
            "background-blend-mode",
            "box-shadow",
            "object-fit",
            "opacity",
            "outline",
            "outline-width",
            "outline-style",
            "outline-color",
            "direction",
            "font",
            "font-family",
            "font-style",
            "font-variant",
            "font-size",
            "font-stretch",
            "font-weight",
            "letter-spacing",
            "line-height",
            "text-align",
            "text-indent",
            "text-transform",
            "text-decoration",
            "text-shadow",
            "text-stroke",
            "text-overflow",
            "vertical-align",
            "hanging-punctuation",
            "white-space",
            "word-break",
            "word-spacing",
            "color",
            "animation",
            "animation-delay",
            "animation-direction",
            "animation-duration",
            "animation-iteration-count",
            "animation-fill-mode",
            "animation-name",
            "animation-play-state",
            "animation-timing-function",
            "backface-visibility",
            "perspective",
            "perspective-origin",
            "transform",
            "transform-origin",
            "transform-style",
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function",
            "will-change",
            "appearance",
            "cursor",
            "pointer-events",
            "user-select",
            "resize",
            "content",
            "counter-increment",
            "counter-reset",
            "list-style",
            "list-style-image",
            "list-style-position",
            "list-style-type",
            "quotes"
        ],
        "plugin/no-unsupported-browser-features": true,
        "rule-empty-line-before": ["always-multi-line"],
        "selector-type-no-unknown": null,
        "shorthand-property-no-redundant-values": null,
        "string-quotes": "single",
        "value-keyword-case": "lower"
    }
};
