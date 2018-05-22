// Compiled using marko@4.9.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/marko-jest$1.0.0/components/Parent.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/dist/runtime/helper-loadTemplate"),
    Child_template = marko_loadTemplate(require.resolve("./Child.marko")),
    marko_loadTag = marko_helpers.t,
    Child_tag = marko_loadTag(Child_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"Parent\">\n    " +
    marko_escapeXml(require("./random.js")) +
    "\n    " +
    marko_escapeXml(require("./random.js")) +
    "\n    ");

  Child_tag({}, out, __component, "1");

  out.w("\n    ");

  Child_tag({}, out, __component, "2");

  out.w("\n</div>");
}

marko_template._ = marko_renderer(render, {
    ae_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-jest$1.0.0/components/Parent.marko",
    tags: [
      "./Child.marko"
    ]
  };
