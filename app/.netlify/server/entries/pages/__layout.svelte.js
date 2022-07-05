var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_76a30155 = require("../../chunks/index-76a30155.js");
var Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-1vuu4sw.svelte-1vuu4sw{border:1px solid #212121;border-radius:0.5rem}nav.svelte-1vuu4sw ul.svelte-1vuu4sw{display:flex;justify-content:space-between;list-style:none;margin:0;padding:0}nav.svelte-1vuu4sw ul li.svelte-1vuu4sw{padding:0.5rem 1rem}li.selected.svelte-1vuu4sw.svelte-1vuu4sw{background-color:#212121;border-radius:0.4rem;transition:0.5s ease}.selected.svelte-1vuu4sw a.svelte-1vuu4sw{color:white}nav.svelte-1vuu4sw ul li a.svelte-1vuu4sw{color:black;text-decoration:none;padding:0.5rem 0rem}",
  map: null
};
const Nav = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"svelte-1vuu4sw"}"><ul class="${"svelte-1vuu4sw"}"><li class="${(0, import_index_76a30155.e)((0, import_index_76a30155.n)("selected")) + " svelte-1vuu4sw"}"><a href="${"./"}" class="${"svelte-1vuu4sw"}">Movies</a></li>
		<li class="${(0, import_index_76a30155.e)((0, import_index_76a30155.n)("")) + " svelte-1vuu4sw"}"><a href="${"./about"}" class="${"svelte-1vuu4sw"}">About the Test</a></li>
		<li class="${(0, import_index_76a30155.e)((0, import_index_76a30155.n)("")) + " svelte-1vuu4sw"}"><a href="${"./data"}" class="${"svelte-1vuu4sw"}">Data</a></li></ul>
</nav>`;
});
var index = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1{font-family:'Futura';color:#212121}section, p, div{font-family:'Open Sans', sans-serif}header.svelte-1im9ei9{margin:1rem}.heading.svelte-1im9ei9{height:min-content;color:#212121;display:flex;flex-direction:column;flex-flow:column;align-items:center;justify-content:center}@media only screen and (min-width: 624px){h1.svelte-1im9ei9{font-size:4rem}}h1.svelte-1im9ei9{font-family:'Futura';text-align:center;margin:1rem 0}header.svelte-1im9ei9{text-align:center}",
  map: null
};
const _layout = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-1im9ei9"}"><section class="${"heading svelte-1im9ei9"}">${(0, import_index_76a30155.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
	<h1 class="${"svelte-1im9ei9"}">The Bechdel Test</h1>
	<div class="${"def"}">To pass the Bechdel test, a film must contain at least two named women characters who talk to each other about something other than a man. <br>
		A red &quot;X&quot; indicates a movie doesn&#39;t pass the Bechdel test and a green checkmark indicates the movie passes the test.
	</div></section></header>



${slots.default ? slots.default({}) : ``}`;
});
