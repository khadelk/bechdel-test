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
  default: () => Data
});
module.exports = __toCommonJS(stdin_exports);
var import_index_76a30155 = require("../../chunks/index-76a30155.js");
var import_stores_eeb6b843 = require("../../chunks/stores-eeb6b843.js");
var import_d3 = require("d3");
var NumMoviesByRating_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h2.svelte-xmfxrk.svelte-xmfxrk{text-align:center;margin:auto}svg.svelte-xmfxrk.svelte-xmfxrk{fill:#212121;display:block;margin:auto}.bar.svelte-xmfxrk.svelte-xmfxrk{fill:#bebef6;border:1px solid #cbc9ff;transition:fill 0.3s ease-in-out}.bar.svelte-xmfxrk.svelte-xmfxrk:hover{fill:#d8d6fc;border:3px solid #bebef6}.tooltip.svelte-xmfxrk.svelte-xmfxrk{position:absolute;opacity:0;z-index:1;padding:0.5rem;border-radius:0.5rem;border:1px solid #212121;pointer-events:none;background-color:white;transition:opacity 0.3s ease-in}.tick-0.svelte-xmfxrk line.svelte-xmfxrk{stroke:#212121}.rating-0.svelte-xmfxrk line.svelte-xmfxrk{stroke:#212121;stroke-width:2}",
  map: null
};
const height = 500;
const width = 500;
const NumMoviesByRating = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  let $bechdelData, $$unsubscribe_bechdelData;
  $$unsubscribe_bechdelData = (0, import_index_76a30155.a)(import_stores_eeb6b843.b, (value) => $bechdelData = value);
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  let data = [];
  for (let i2 = 0; i2 < 4; i2++) {
    let count = 0;
    let newObj = {};
    $bechdelData.forEach((movie) => {
      if (movie.rating == i2) {
        newObj["rating"] = i2;
        newObj["count"] = count += 1;
      }
    });
    data = [...data, newObj];
  }
  const maxCount = (0, import_d3.max)(data.map((d) => d.count));
  const maxTick = maxCount + 500 - maxCount % 500;
  const yScale = (0, import_d3.scaleLinear)().domain([0, maxTick]).range([height - margin.bottom, margin.top]);
  const xScale = (0, import_d3.scaleBand)().domain(data.map((d) => d.rating)).range([margin.left, width - margin.right]).padding(0.5);
  const yTicks = [0];
  let i = 0;
  while (i < maxTick) {
    i += 500;
    yTicks.push(i);
  }
  $$result.css.add(css$1);
  $$unsubscribe_bechdelData();
  return `<h2 class="${"svelte-xmfxrk"}">Number of movies by rating</h2>

${(0, import_index_76a30155.f)(data, (d) => {
    return `<div id="${"rating-" + (0, import_index_76a30155.e)(d.rating)}" class="${"tooltip svelte-xmfxrk"}">${(0, import_index_76a30155.e)(d.count)} movies
	</div>`;
  })}

<svg${(0, import_index_76a30155.b)("width", width, 0)}${(0, import_index_76a30155.b)("height", height + 50, 0)} class="${"svelte-xmfxrk"}">${(0, import_index_76a30155.f)(yTicks, (tick) => {
    return `<g class="${"tick-" + (0, import_index_76a30155.e)(tick) + " svelte-xmfxrk"}" transform="${"translate(0, " + (0, import_index_76a30155.e)(yScale(tick)) + ")"}"><line x2="${"100%"}" class="${"svelte-xmfxrk"}"></line><text>${(0, import_index_76a30155.e)(tick)}</text></g>`;
  })}${(0, import_index_76a30155.f)(data, (d) => {
    return `
	<g transform="${"translate(" + (0, import_index_76a30155.e)(xScale(d.rating)) + ", " + (0, import_index_76a30155.e)(height) + ")"}"><text style="${"text-anchor: center"}"${(0, import_index_76a30155.b)("x", (xScale.bandwidth() - 4) / 2, 0)}>${(0, import_index_76a30155.e)(d.rating)}</text></g>
	
	<g class="${"rating-" + (0, import_index_76a30155.e)(d.rating) + " svelte-xmfxrk"}"><line${(0, import_index_76a30155.b)("y2", height, 0)} class="${"svelte-xmfxrk"}"></line><rect class="${"bar svelte-xmfxrk"}"${(0, import_index_76a30155.b)("x", xScale(d.rating), 0)}${(0, import_index_76a30155.b)("y", yScale(d.count), 0)}${(0, import_index_76a30155.b)("width", xScale.bandwidth(), 0)}${(0, import_index_76a30155.b)("height", yScale(0) - yScale(d.count), 0)}></rect></g>`;
  })}</svg>`;
});
var MoviesByGenre_svelte_svelte_type_style_lang = "";
var data_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-1s5iwrk{text-align:center}",
  map: null
};
const Data = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_76a30155.v)(NumMoviesByRating, "NumMoviesByRating").$$render($$result, {}, {}, {})}



<div><h2 class="${"svelte-1s5iwrk"}">More data to come...</h2>
</div>`;
});
