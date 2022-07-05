import { c as create_ssr_component, e as escape, n as null_to_empty, v as validate_component } from "../../chunks/index-76a30155.js";
var Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-1vuu4sw.svelte-1vuu4sw{border:1px solid #212121;border-radius:0.5rem}nav.svelte-1vuu4sw ul.svelte-1vuu4sw{display:flex;justify-content:space-between;list-style:none;margin:0;padding:0}nav.svelte-1vuu4sw ul li.svelte-1vuu4sw{padding:0.5rem 1rem}li.selected.svelte-1vuu4sw.svelte-1vuu4sw{background-color:#212121;border-radius:0.4rem;transition:0.5s ease}.selected.svelte-1vuu4sw a.svelte-1vuu4sw{color:white}nav.svelte-1vuu4sw ul li a.svelte-1vuu4sw{color:black;text-decoration:none;padding:0.5rem 0rem}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"svelte-1vuu4sw"}"><ul class="${"svelte-1vuu4sw"}"><li class="${escape(null_to_empty("selected")) + " svelte-1vuu4sw"}"><a href="${"./"}" class="${"svelte-1vuu4sw"}">Movies</a></li>
		<li class="${escape(null_to_empty("")) + " svelte-1vuu4sw"}"><a href="${"./about"}" class="${"svelte-1vuu4sw"}">About the Test</a></li>
		<li class="${escape(null_to_empty("")) + " svelte-1vuu4sw"}"><a href="${"./data"}" class="${"svelte-1vuu4sw"}">Data</a></li></ul>
</nav>`;
});
var index = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1{font-family:'Futura';color:#212121}section, p, div{font-family:'Open Sans', sans-serif}header.svelte-1im9ei9{margin:1rem}.heading.svelte-1im9ei9{height:min-content;color:#212121;display:flex;flex-direction:column;flex-flow:column;align-items:center;justify-content:center}@media only screen and (min-width: 624px){h1.svelte-1im9ei9{font-size:4rem}}h1.svelte-1im9ei9{font-family:'Futura';text-align:center;margin:1rem 0}header.svelte-1im9ei9{text-align:center}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-1im9ei9"}"><section class="${"heading svelte-1im9ei9"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
	<h1 class="${"svelte-1im9ei9"}">The Bechdel Test</h1>
	<div class="${"def"}">To pass the Bechdel test, a film must contain at least two named women characters who talk to each other about something other than a man. <br>
		A red &quot;X&quot; indicates a movie doesn&#39;t pass the Bechdel test and a green checkmark indicates the movie passes the test.
	</div></section></header>



${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
