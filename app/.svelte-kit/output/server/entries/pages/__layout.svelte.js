import { c as create_ssr_component, e as escape, n as null_to_empty, v as validate_component } from "../../chunks/index-76a30155.js";
var Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-1vuu4sw.svelte-1vuu4sw{border:1px solid #212121;border-radius:0.5rem}nav.svelte-1vuu4sw ul.svelte-1vuu4sw{display:flex;justify-content:space-between;list-style:none;margin:0;padding:0}nav.svelte-1vuu4sw ul li.svelte-1vuu4sw{padding:0.5rem 1rem}li.selected.svelte-1vuu4sw.svelte-1vuu4sw{background-color:#212121;border-radius:0.4rem;transition:0.5s ease}.selected.svelte-1vuu4sw a.svelte-1vuu4sw{color:white}nav.svelte-1vuu4sw ul li a.svelte-1vuu4sw{color:black;text-decoration:none;padding:0.5rem 0rem}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"svelte-1vuu4sw"}"><ul class="${"svelte-1vuu4sw"}"><li class="${escape(null_to_empty("selected")) + " svelte-1vuu4sw"}"><a href="${"./"}" class="${"svelte-1vuu4sw"}">Movies</a></li>
		<li class="${escape(null_to_empty("")) + " svelte-1vuu4sw"}"><a href="${"./about"}" class="${"svelte-1vuu4sw"}">About the test</a></li>
		<li class="${escape(null_to_empty("")) + " svelte-1vuu4sw"}"><a href="${"./data"}" class="${"svelte-1vuu4sw"}">Data</a></li></ul>
</nav>`;
});
var index = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1{font-family:'Futura';color:#212121}section, p, div{font-family:'Open Sans', sans-serif}header.svelte-f5nhno.svelte-f5nhno{margin:1rem}.heading.svelte-f5nhno.svelte-f5nhno{height:min-content;color:#212121;display:flex;flex-direction:column;flex-flow:column;align-items:center;justify-content:center}@media only screen and (min-width: 624px){h1.svelte-f5nhno.svelte-f5nhno{font-size:4rem}}h1.svelte-f5nhno.svelte-f5nhno{font-family:'Futura';text-align:center;margin:1rem 0}header.svelte-f5nhno.svelte-f5nhno{text-align:center}ol.svelte-f5nhno li.svelte-f5nhno{list-style:none}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-f5nhno"}"><section class="${"heading svelte-f5nhno"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
	<h1 class="${"svelte-f5nhno"}">the bechdel test</h1>
	<div class="${"def"}">/bech\xB7del test/ n.
		<ol class="${"svelte-f5nhno"}"><li class="${"svelte-f5nhno"}">1. It has to have at least two [named] women in it</li>
			<li class="${"svelte-f5nhno"}">2. Who talk to each other</li>
			<li class="${"svelte-f5nhno"}">3. About something besides a man</li></ol></div></section></header>



${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
