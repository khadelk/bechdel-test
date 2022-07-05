import { c as create_ssr_component, b as add_attribute } from "../../chunks/index-76a30155.js";
import "d3";
var datatest_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bar.svelte-8fwaok{fill:green;transition:fill 0.3s ease-out}.bar.svelte-8fwaok:hover{fill:rgb(127, 201, 127)}.tooltip.svelte-8fwaok{position:absolute;opacity:0;z-index:1;pointer-events:none;background-color:pink;transition:opacity 0.3s ease-in}",
  map: null
};
const height = 500;
const Datatest = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"rating"}" class="${"tooltip svelte-8fwaok"}">hello
</div>

<svg width="${"1000"}"${add_attribute("height", height, 0)}><g><rect class="${"bar svelte-8fwaok"}" x="${"15"}"${add_attribute("y", height - 100, 0)} width="${"50"}" height="${"100"}"></rect></g></svg>`;
});
export { Datatest as default };
