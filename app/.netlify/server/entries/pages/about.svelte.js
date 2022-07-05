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
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_76a30155 = require("../../chunks/index-76a30155.js");
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about.svelte-1swr7a0.svelte-1swr7a0{font-family:'Montserrat', sans-serif;color:#212121}@media only screen and (min-width: 1024px){.about.svelte-1swr7a0.svelte-1swr7a0{padding:2rem 8rem}}h2.svelte-1swr7a0.svelte-1swr7a0{font-family:Futura;text-align:center}svg.svelte-1swr7a0.svelte-1swr7a0{height:2rem;width:2rem}.quote-right.svelte-1swr7a0.svelte-1swr7a0{position:absolute}blockquote.svelte-1swr7a0.svelte-1swr7a0{line-height:1.6}blockquote.svelte-1swr7a0 p.svelte-1swr7a0{font-family:'Montserrat', sans-serif;float:right}.about-bechdel.svelte-1swr7a0.svelte-1swr7a0{font-family:'Montserrat', sans-serif;padding:2rem 0}.about-bechdel.svelte-1swr7a0 p.svelte-1swr7a0{font-family:'Montserrat', sans-serif;line-height:1.6;padding:1rem}.comic-strip.svelte-1swr7a0.svelte-1swr7a0{text-align:center}",
  map: null
};
const About = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"about svelte-1swr7a0"}"><hr>
<h2 class="${"svelte-1swr7a0"}">About the test</h2>

<blockquote class="${"svelte-1swr7a0"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}" class="${"svelte-1swr7a0"}"><path d="${"M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"}"></path></svg>
	All these relationships between women, I thought, rapidly recalling the splendid gallery of fictitious women, are too simple. ... 
	And I tried to remember any case in the course of my reading where two women are represented as friends. ... 
	They are now and then mothers and daughters. But almost without exception they are shown in their relation to men. It was strange to think that all the great women 
	of fiction were, until Jane Austen&#39;s day, not only seen by the other sex, but seen only in relation to the other sex. And how small a part of a woman&#39;s life is that...
	<svg class="${"quote-right svelte-1swr7a0"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}"><path d="${"M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z"}"></path></svg>
	<p class="${"svelte-1swr7a0"}">- Virginia Woolf, <em>A Room of Ones Own</em></p></blockquote>

<div class="${"about-bechdel svelte-1swr7a0"}"><p class="${"svelte-1swr7a0"}">The Bechdel Test measures the representation of women in fiction. It asks three questions: 
	</p>
		<ol><li>Are there at least two named women in this film?
			</li>
			<li>Do these women talk to each other?
			</li>
			<li>Do these women talk to each other about something besides a man?
			</li></ol>
	<p class="${"svelte-1swr7a0"}">If the film passes all three criteria, it passes the Bechdel Test.
		
		Roughly 50% of films pass the Bechdel test. The point of the Bechdel Test is to indicate the active presence of women in the field of film and other fiction. 
		
		The test is named after the cartoonist Alison Bechdel, and the test first appeared in her 1985 comic strip Dykes to Watch Out For.
	</p>
	<div class="${"comic-strip svelte-1swr7a0"}"><img src="${"images/dykestowatchoutfor.jpeg"}" alt="${"bechdel test comic strip"}"></div></div>

</section>`;
});
