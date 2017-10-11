"use strict"

module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": ["stylelint-order", "stylelint-no-unsupported-browser-features"],
    "defaultSeverity": "warning",
    "rules": {
        "plugin/no-unsupported-browser-features": true,
        "at-rule-empty-line-before": null,
        "declaration-empty-line-before": null,
        "rule-empty-line-before": null,
        "max-empty-lines": null,
        "shorthand-property-no-redundant-values": null,
        "order/order": [
            "custom-properties",
            "declarations"
        ],
        "order/properties-order": [
            "appearance",
            "box-sizing",
            "clip",
            "display",
            "flex",
            "flex-direction",
            "align-items",
            "justify-content",
            "visibility",
            "float",
            "clear",
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index",
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "overflow",
            "overflow-x",
            "overflow-y",
            "text-overflow",
            "resize",
            "direction",
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
            "border-radius",
            "box-shadow",
            "outline",
            "list-style",
            "table-layout",
            "caption-side",
            "border-collapse",
            "border-spacing",
            "empty-cells",
            "font",
            "font-family",
            "font-style",
            "font-variant",
            "font-size",
            "line-height",
            "text-align",
            "text-indent",
            "text-transform",
            "text-decoration",
            "font-weight",
            "letter-spacing",
            "word-spacing",
            "white-space",
            "vertical-align",
            "color",
            "text-shadow",
            "background",
            "background-color",
            "background-image",
            "background-repeat",
            "background-position",
            "background-size",
            "background-attachment",
            "background-clip",
            "background-blend-mode",
            "opacity",
            "transform",
            "transition",
            "transition-duration",
            "cursor",
            "pointer-events",
            "content",
            "counter-increment",
            "counter-reset",
            "quotes"
        ],
        "selector-type-no-unknown": null
    }
}
