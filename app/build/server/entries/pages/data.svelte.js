import { c as create_ssr_component, a as subscribe, f as each, b as add_attribute, e as escape, v as validate_component } from "../../chunks/index-76a30155.js";
import { b as bechdelData } from "../../chunks/stores-eeb6b843.js";
import { max, scaleLinear, scaleBand } from "d3";
var NumMoviesByRating_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h2.svelte-xmfxrk.svelte-xmfxrk{text-align:center;margin:auto}svg.svelte-xmfxrk.svelte-xmfxrk{fill:#212121;display:block;margin:auto}.bar.svelte-xmfxrk.svelte-xmfxrk{fill:#bebef6;border:1px solid #cbc9ff;transition:fill 0.3s ease-in-out}.bar.svelte-xmfxrk.svelte-xmfxrk:hover{fill:#d8d6fc;border:3px solid #bebef6}.tooltip.svelte-xmfxrk.svelte-xmfxrk{position:absolute;opacity:0;z-index:1;padding:0.5rem;border-radius:0.5rem;border:1px solid #212121;pointer-events:none;background-color:white;transition:opacity 0.3s ease-in}.tick-0.svelte-xmfxrk line.svelte-xmfxrk{stroke:#212121}.rating-0.svelte-xmfxrk line.svelte-xmfxrk{stroke:#212121;stroke-width:2}",
  map: null
};
const height = 500;
const width = 500;
const NumMoviesByRating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $bechdelData, $$unsubscribe_bechdelData;
  $$unsubscribe_bechdelData = subscribe(bechdelData, (value) => $bechdelData = value);
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
  const maxCount = max(data.map((d) => d.count));
  const maxTick = maxCount + 500 - maxCount % 500;
  const yScale = scaleLinear().domain([0, maxTick]).range([height - margin.bottom, margin.top]);
  const xScale = scaleBand().domain(data.map((d) => d.rating)).range([margin.left, width - margin.right]).padding(0.5);
  const yTicks = [0];
  let i = 0;
  while (i < maxTick) {
    i += 500;
    yTicks.push(i);
  }
  $$result.css.add(css$1);
  $$unsubscribe_bechdelData();
  return `<h2 class="${"svelte-xmfxrk"}">Number of movies by rating</h2>

${each(data, (d) => {
    return `<div id="${"rating-" + escape(d.rating)}" class="${"tooltip svelte-xmfxrk"}">${escape(d.count)} movies
	</div>`;
  })}

<svg${add_attribute("width", width, 0)}${add_attribute("height", height + 50, 0)} class="${"svelte-xmfxrk"}">${each(yTicks, (tick) => {
    return `<g class="${"tick-" + escape(tick) + " svelte-xmfxrk"}" transform="${"translate(0, " + escape(yScale(tick)) + ")"}"><line x2="${"100%"}" class="${"svelte-xmfxrk"}"></line><text>${escape(tick)}</text></g>`;
  })}${each(data, (d) => {
    return `
	<g transform="${"translate(" + escape(xScale(d.rating)) + ", " + escape(height) + ")"}"><text style="${"text-anchor: center"}"${add_attribute("x", (xScale.bandwidth() - 4) / 2, 0)}>${escape(d.rating)}</text></g>
	
	<g class="${"rating-" + escape(d.rating) + " svelte-xmfxrk"}"><line${add_attribute("y2", height, 0)} class="${"svelte-xmfxrk"}"></line><rect class="${"bar svelte-xmfxrk"}"${add_attribute("x", xScale(d.rating), 0)}${add_attribute("y", yScale(d.count), 0)}${add_attribute("width", xScale.bandwidth(), 0)}${add_attribute("height", yScale(0) - yScale(d.count), 0)}></rect></g>`;
  })}</svg>`;
});
var MoviesByGenre_svelte_svelte_type_style_lang = "";
var data_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-1s5iwrk{text-align:center}",
  map: null
};
const Data = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(NumMoviesByRating, "NumMoviesByRating").$$render($$result, {}, {}, {})}



<div><h2 class="${"svelte-1s5iwrk"}">More data to come...</h2>
</div>`;
});
export { Data as default };
