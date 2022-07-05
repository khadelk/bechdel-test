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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_76a30155 = require("../../chunks/index-76a30155.js");
var import_stores_eeb6b843 = require("../../chunks/stores-eeb6b843.js");
var MovieCard_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".check-circle.svelte-ry8ir8.svelte-ry8ir8{z-index:2;width:48px;height:48px;fill:rgb(44, 194, 44);position:absolute;right:-16px;top:-16px}.black-circle.svelte-ry8ir8.svelte-ry8ir8{z-index:1;width:48px;height:48px;fill:white;position:absolute;right:-16px;top:-16px}.x-circle.svelte-ry8ir8.svelte-ry8ir8{z-index:2;width:48px;height:48px;fill:red;position:absolute;right:-16px;top:-16px}.container.svelte-ry8ir8.svelte-ry8ir8{padding:1rem}.movie-card.svelte-ry8ir8.svelte-ry8ir8{position:relative}.movie-title.svelte-ry8ir8.svelte-ry8ir8{white-space:normal\n	}img.svelte-ry8ir8.svelte-ry8ir8{display:block;border-radius:1rem;width:100%;padding:0;margin:0}.color-overlay.svelte-ry8ir8.svelte-ry8ir8{position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;transition:.5s ease;background:linear-gradient(#e66465, #9198e5)}.movie-card.svelte-ry8ir8:hover .color-overlay.svelte-ry8ir8{opacity:0.9;border-radius:1rem}.text-overlay.svelte-ry8ir8.svelte-ry8ir8{opacity:1;white-space:nowrap;color:white;font-size:20px;font-weight:800;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%)}.text-overlay.svelte-ry8ir8.svelte-ry8ir8:hover{opacity:1}",
  map: null
};
const MovieCard = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let bechdelRating;
  let $bechdelData, $$unsubscribe_bechdelData;
  $$unsubscribe_bechdelData = (0, import_index_76a30155.a)(import_stores_eeb6b843.b, (value) => $bechdelData = value);
  let { movie } = $$props;
  let imdb_id;
  imdb_id = (_a = movie == null ? void 0 : movie.imdb_id) == null ? void 0 : _a.slice(2);
  let bechdelMovie = [];
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css$9);
  bechdelMovie = $bechdelData.filter((data) => {
    var _a2;
    return data.imdbid == ((_a2 = movie == null ? void 0 : movie.imdb_id) == null ? void 0 : _a2.slice(2));
  });
  bechdelRating = (_b = bechdelMovie[0]) == null ? void 0 : _b.rating;
  $$unsubscribe_bechdelData();
  return `${movie.poster_path != null ? `<div class="${"container svelte-ry8ir8"}"><div class="${"movie-card svelte-ry8ir8"}"><svg class="${"black-circle svelte-ry8ir8"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}"><path d="${"M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"}"></path></svg>
		${bechdelRating < 3 ? `<svg class="${"x-circle svelte-ry8ir8"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}"><path d="${"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"}"></path></svg>` : `<svg class="${"check-circle svelte-ry8ir8"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}"><path d="${"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"}"></path></svg>`}
		<a href="${"/" + (0, import_index_76a30155.e)(imdb_id)}"><div class="${"color-overlay svelte-ry8ir8"}"><div class="${"text-overlay svelte-ry8ir8"}"><div class="${"movie-title svelte-ry8ir8"}">${(0, import_index_76a30155.e)(movie.title)} passes ${(0, import_index_76a30155.e)(bechdelRating)}/3 tests </div></div></div>
			<img${(0, import_index_76a30155.b)("src", "https://image.tmdb.org/t/p/w300" + movie.poster_path, 0)}${(0, import_index_76a30155.b)("alt", movie.title, 0)} title="${"Test"}" class="${"svelte-ry8ir8"}"></a></div></div>` : ``}`;
});
var Search_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "input.svelte-2o8lrq{height:2rem;width:60vw;border:1px solid #212121;border-radius:0.5rem}input.svelte-2o8lrq:focus{border:1px solid #212121}.dropdown-results.svelte-2o8lrq{max-width:400px;margin-left:auto;margin-right:auto;left:0;right:0;text-align:center;margin-top:2px;z-index:3;position:absolute;background-color:white;border-radius:10px}a.svelte-2o8lrq{color:black;line-height:1.5rem;text-decoration:none}.search-results.svelte-2o8lrq{display:block;padding:0.5rem 0}.search-results.svelte-2o8lrq:hover{background-color:rgb(223, 219, 219);cursor:pointer}@media only screen and (min-width: 600px){input.svelte-2o8lrq{width:40vw}}",
  map: null
};
const Search = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  let $filteredData, $$unsubscribe_filteredData;
  $$unsubscribe_filteredData = (0, import_index_76a30155.a)(import_stores_eeb6b843.f, (value) => $filteredData = value);
  (0, import_index_76a30155.d)();
  let { searchTerm } = $$props;
  if ($$props.searchTerm === void 0 && $$bindings.searchTerm && searchTerm !== void 0)
    $$bindings.searchTerm(searchTerm);
  $$result.css.add(css$8);
  $$unsubscribe_filteredData();
  return `<div><input type="${"text"}" id="${"movie-search"}" placeholder="${"Search movie..."}" autocomplete="${"off"}" class="${"svelte-2o8lrq"}"${(0, import_index_76a30155.b)("value", searchTerm, 0)}>
	<div class="${"dropdown-results svelte-2o8lrq"}">${searchTerm ? `${`<div class="${"modal"}">${(0, import_index_76a30155.f)($filteredData.slice(0, 16), (movie) => {
    return `<a class="${"search-results svelte-2o8lrq"}" type="${"button"}"${(0, import_index_76a30155.b)("href", movie.imdb_id.slice(2), 0)}>${(0, import_index_76a30155.e)(movie.title)}</a>`;
  })}</div>`}` : ``}</div>
</div>`;
});
var GenreFilter_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".selected.svelte-4n53sp.svelte-4n53sp{background-color:black !important;color:white !important}.options.svelte-4n53sp.svelte-4n53sp{display:flex;flex-wrap:wrap}.options.svelte-4n53sp>div.svelte-4n53sp{justify-self:center;margin:0rem 0rem 1rem 1rem;padding:0.5rem 1rem;background-color:white;border-radius:0.4rem;transition:0.5s ease;color:#212121;cursor:pointer;white-space:nowrap;border:1px solid #212121}",
  map: null
};
const GenreFilter = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  let $movieData, $$unsubscribe_movieData;
  let $genreClicked, $$unsubscribe_genreClicked;
  $$unsubscribe_movieData = (0, import_index_76a30155.a)(import_stores_eeb6b843.m, (value) => $movieData = value);
  $$unsubscribe_genreClicked = (0, import_index_76a30155.a)(import_stores_eeb6b843.g, (value) => $genreClicked = value);
  let { genre } = $$props;
  let current;
  let storeGenres = [];
  $movieData.forEach((movie) => {
    if (movie.genres) {
      movie.genres.forEach((genre2) => {
        if (storeGenres[genre2.name] >= 1) {
          storeGenres[genre2.name] += 1;
        } else {
          storeGenres[genre2.name] = 1;
        }
      });
    }
  });
  let genres = Object.keys(storeGenres);
  if ($$props.genre === void 0 && $$bindings.genre && genre !== void 0)
    $$bindings.genre(genre);
  $$result.css.add(css$7);
  current = genre;
  $$unsubscribe_movieData();
  $$unsubscribe_genreClicked();
  return `<div class="${"genre-options"}">${$genreClicked ? `<div class="${"options svelte-4n53sp"}">${(0, import_index_76a30155.f)(genres, (genre2) => {
    return `<div class="${["svelte-4n53sp", current == genre2 ? "selected" : ""].join(" ").trim()}">${(0, import_index_76a30155.e)(genre2)} </div>`;
  })}</div>` : ``}
</div>`;
});
var BechdelFilter_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".selected.svelte-z2ozv2.svelte-z2ozv2{background-color:black !important;color:white !important}.options.svelte-z2ozv2.svelte-z2ozv2{display:flex;justify-content:center}.options.svelte-z2ozv2>div.svelte-z2ozv2{width:min-content;margin:0rem 0rem 1rem 1rem;padding:0.5rem 1rem;background-color:white;border-radius:0.4rem;transition:0.5s ease;color:#212121;cursor:pointer;white-space:nowrap;border:1px solid #212121}",
  map: null
};
const BechdelFilter = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_bechdelData;
  let $$unsubscribe_filteredBechdelData;
  let $bechdelClicked, $$unsubscribe_bechdelClicked;
  $$unsubscribe_bechdelData = (0, import_index_76a30155.a)(import_stores_eeb6b843.b, (value) => value);
  $$unsubscribe_filteredBechdelData = (0, import_index_76a30155.a)(import_stores_eeb6b843.a, (value) => value);
  $$unsubscribe_bechdelClicked = (0, import_index_76a30155.a)(import_stores_eeb6b843.c, (value) => $bechdelClicked = value);
  const bechdelNums = [0, 1, 2, 3];
  let { rating } = $$props;
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  $$result.css.add(css$6);
  $$unsubscribe_bechdelData();
  $$unsubscribe_filteredBechdelData();
  $$unsubscribe_bechdelClicked();
  return `<div class="${"bechdel"}">${$bechdelClicked ? `<div class="${"options svelte-z2ozv2"}">${(0, import_index_76a30155.f)(bechdelNums, (num) => {
    return `<div class="${["svelte-z2ozv2", rating == num ? "selected" : ""].join(" ").trim()}">${(0, import_index_76a30155.e)(num)}</div>`;
  })}</div>` : ``}
</div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = (0, import_stores_eeb6b843.w)(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = (0, import_index_76a30155.g)();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = (0, import_index_76a30155.g)();
      cancel_task = false;
      task = (0, import_index_76a30155.l)((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
var RangePips_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".rangeSlider{--pip:var(--range-pip, lightslategray);--pip-text:var(--range-pip-text, var(--pip));--pip-active:var(--range-pip-active, darkslategrey);--pip-active-text:var(--range-pip-active-text, var(--pip-active));--pip-hover:var(--range-pip-hover, darkslategrey);--pip-hover-text:var(--range-pip-hover-text, var(--pip-hover));--pip-in-range:var(--range-pip-in-range, var(--pip-active));--pip-in-range-text:var(--range-pip-in-range-text, var(--pip-active-text))}.rangePips{position:absolute;height:1em;left:0;right:0;bottom:-1em}.rangePips.vertical{height:auto;width:1em;left:100%;right:auto;top:0;bottom:0}.rangePips .pip{height:0.4em;position:absolute;top:0.25em;width:1px;white-space:nowrap}.rangePips.vertical .pip{height:1px;width:0.4em;left:0.25em;top:auto;bottom:auto}.rangePips .pipVal{position:absolute;top:0.4em;transform:translate(-50%, 25%)}.rangePips.vertical .pipVal{position:absolute;top:0;left:0.4em;transform:translate(25%, -50%)}.rangePips .pip{transition:all 0.15s ease}.rangePips .pipVal{transition:all 0.15s ease, font-weight 0s linear}.rangePips .pip{color:lightslategray;color:var(--pip-text);background-color:lightslategray;background-color:var(--pip)}.rangePips .pip.selected{color:darkslategrey;color:var(--pip-active-text);background-color:darkslategrey;background-color:var(--pip-active)}.rangePips.hoverable:not(.disabled) .pip:hover{color:darkslategrey;color:var(--pip-hover-text);background-color:darkslategrey;background-color:var(--pip-hover)}.rangePips .pip.in-range{color:darkslategrey;color:var(--pip-in-range-text);background-color:darkslategrey;background-color:var(--pip-in-range)}.rangePips .pip.selected{height:0.75em}.rangePips.vertical .pip.selected{height:1px;width:0.75em}.rangePips .pip.selected .pipVal{font-weight:bold;top:0.75em}.rangePips.vertical .pip.selected .pipVal{top:0;left:0.75em}.rangePips.hoverable:not(.disabled) .pip:not(.selected):hover{transition:none}.rangePips.hoverable:not(.disabled) .pip:not(.selected):hover .pipVal{transition:none;font-weight:bold}",
  map: null
};
const RangePips = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  let pipStep;
  let pipCount;
  let pipVal;
  let isSelected;
  let inRange;
  let { range = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { values = [(max + min) / 2] } = $$props;
  let { vertical = false } = $$props;
  let { reversed = false } = $$props;
  let { hoverable = true } = $$props;
  let { disabled = false } = $$props;
  let { pipstep = void 0 } = $$props;
  let { all = true } = $$props;
  let { first = void 0 } = $$props;
  let { last = void 0 } = $$props;
  let { rest = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { formatter = (v, i) => v } = $$props;
  let { focus = void 0 } = $$props;
  let { orientationStart = void 0 } = $$props;
  let { percentOf = void 0 } = $$props;
  let { moveHandle = void 0 } = $$props;
  let { fixFloat = void 0 } = $$props;
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.reversed === void 0 && $$bindings.reversed && reversed !== void 0)
    $$bindings.reversed(reversed);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.pipstep === void 0 && $$bindings.pipstep && pipstep !== void 0)
    $$bindings.pipstep(pipstep);
  if ($$props.all === void 0 && $$bindings.all && all !== void 0)
    $$bindings.all(all);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0)
    $$bindings.first(first);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  if ($$props.rest === void 0 && $$bindings.rest && rest !== void 0)
    $$bindings.rest(rest);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.formatter === void 0 && $$bindings.formatter && formatter !== void 0)
    $$bindings.formatter(formatter);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.orientationStart === void 0 && $$bindings.orientationStart && orientationStart !== void 0)
    $$bindings.orientationStart(orientationStart);
  if ($$props.percentOf === void 0 && $$bindings.percentOf && percentOf !== void 0)
    $$bindings.percentOf(percentOf);
  if ($$props.moveHandle === void 0 && $$bindings.moveHandle && moveHandle !== void 0)
    $$bindings.moveHandle(moveHandle);
  if ($$props.fixFloat === void 0 && $$bindings.fixFloat && fixFloat !== void 0)
    $$bindings.fixFloat(fixFloat);
  $$result.css.add(css$5);
  pipStep = pipstep || ((max - min) / step >= (vertical ? 50 : 100) ? (max - min) / (vertical ? 10 : 20) : 1);
  pipCount = parseInt((max - min) / (step * pipStep), 10);
  pipVal = function(val) {
    return fixFloat(min + val * step * pipStep);
  };
  isSelected = function(val) {
    return values.some((v) => fixFloat(v) === fixFloat(val));
  };
  inRange = function(val) {
    if (range === "min") {
      return values[0] > val;
    } else if (range === "max") {
      return values[0] < val;
    } else if (range) {
      return values[0] < val && values[1] > val;
    }
  };
  return `<div class="${[
    "rangePips",
    (disabled ? "disabled" : "") + " " + (hoverable ? "hoverable" : "") + " " + (vertical ? "vertical" : "") + " " + (reversed ? "reversed" : "") + " " + (focus ? "focus" : "")
  ].join(" ").trim()}">${all && first !== false || first ? `<span class="${[
    "pip first",
    (isSelected(min) ? "selected" : "") + " " + (inRange(min) ? "in-range" : "")
  ].join(" ").trim()}" style="${(0, import_index_76a30155.e)(orientationStart) + ": 0%;"}">${all === "label" || first === "label" ? `<span class="${"pipVal"}">${prefix ? `<span class="${"pipVal-prefix"}">${(0, import_index_76a30155.e)(prefix)}</span>` : ``}${(0, import_index_76a30155.e)(formatter(fixFloat(min), 0, 0))}${suffix ? `<span class="${"pipVal-suffix"}">${(0, import_index_76a30155.e)(suffix)}</span>` : ``}</span>` : ``}</span>` : ``}

  ${all && rest !== false || rest ? `${(0, import_index_76a30155.f)(Array(pipCount + 1), (_, i) => {
    return `${pipVal(i) !== min && pipVal(i) !== max ? `<span class="${[
      "pip",
      (isSelected(pipVal(i)) ? "selected" : "") + " " + (inRange(pipVal(i)) ? "in-range" : "")
    ].join(" ").trim()}" style="${(0, import_index_76a30155.e)(orientationStart) + ": " + (0, import_index_76a30155.e)(percentOf(pipVal(i))) + "%;"}">${all === "label" || rest === "label" ? `<span class="${"pipVal"}">${prefix ? `<span class="${"pipVal-prefix"}">${(0, import_index_76a30155.e)(prefix)}</span>` : ``}${(0, import_index_76a30155.e)(formatter(pipVal(i), i, percentOf(pipVal(i))))}${suffix ? `<span class="${"pipVal-suffix"}">${(0, import_index_76a30155.e)(suffix)}</span>` : ``}
            </span>` : ``}
        </span>` : ``}`;
  })}` : ``}

  ${all && last !== false || last ? `<span class="${[
    "pip last",
    (isSelected(max) ? "selected" : "") + " " + (inRange(max) ? "in-range" : "")
  ].join(" ").trim()}" style="${(0, import_index_76a30155.e)(orientationStart) + ": 100%;"}">${all === "label" || last === "label" ? `<span class="${"pipVal"}">${prefix ? `<span class="${"pipVal-prefix"}">${(0, import_index_76a30155.e)(prefix)}</span>` : ``}${(0, import_index_76a30155.e)(formatter(fixFloat(max), pipCount, 100))}${suffix ? `<span class="${"pipVal-suffix"}">${(0, import_index_76a30155.e)(suffix)}</span>` : ``}</span>` : ``}</span>` : ``}</div>`;
});
var RangeSlider_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '.rangeSlider{--slider:var(--range-slider, #d7dada);--handle-inactive:var(--range-handle-inactive, #99a2a2);--handle:var(--range-handle, #838de7);--handle-focus:var(--range-handle-focus, #4a40d4);--handle-border:var(--range-handle-border, var(--handle));--range-inactive:var(--range-range-inactive, var(--handle-inactive));--range:var(--range-range, var(--handle-focus));--float-inactive:var(--range-float-inactive, var(--handle-inactive));--float:var(--range-float, var(--handle-focus));--float-text:var(--range-float-text, white)}.rangeSlider{position:relative;border-radius:100px;height:0.5em;margin:1em;transition:opacity 0.2s ease;user-select:none}.rangeSlider *{user-select:none}.rangeSlider.pips{margin-bottom:1.8em}.rangeSlider.pip-labels{margin-bottom:2.8em}.rangeSlider.vertical{display:inline-block;border-radius:100px;width:0.5em;min-height:200px}.rangeSlider.vertical.pips{margin-right:1.8em;margin-bottom:1em}.rangeSlider.vertical.pip-labels{margin-right:2.8em;margin-bottom:1em}.rangeSlider .rangeHandle{position:absolute;display:block;height:1.4em;width:1.4em;top:0.25em;bottom:auto;transform:translateY(-50%) translateX(-50%);z-index:2}.rangeSlider.reversed .rangeHandle{transform:translateY(-50%) translateX(50%)}.rangeSlider.vertical .rangeHandle{left:0.25em;top:auto;transform:translateY(50%) translateX(-50%)}.rangeSlider.vertical.reversed .rangeHandle{transform:translateY(-50%) translateX(-50%)}.rangeSlider .rangeNub,.rangeSlider .rangeHandle:before{position:absolute;left:0;top:0;display:block;border-radius:10em;height:100%;width:100%;transition:box-shadow 0.2s ease}.rangeSlider .rangeHandle:before{content:"";left:1px;top:1px;bottom:1px;right:1px;height:auto;width:auto;box-shadow:0 0 0 0px var(--handle-border);opacity:0}.rangeSlider.hoverable:not(.disabled) .rangeHandle:hover:before{box-shadow:0 0 0 8px var(--handle-border);opacity:0.2}.rangeSlider.hoverable:not(.disabled) .rangeHandle.press:before,.rangeSlider.hoverable:not(.disabled) .rangeHandle.press:hover:before{box-shadow:0 0 0 12px var(--handle-border);opacity:0.4}.rangeSlider.range:not(.min):not(.max) .rangeNub{border-radius:10em 10em 10em 1.6em}.rangeSlider.range .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(-135deg)}.rangeSlider.range .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(45deg)}.rangeSlider.range.reversed .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(45deg)}.rangeSlider.range.reversed .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(-135deg)}.rangeSlider.range.vertical .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(135deg)}.rangeSlider.range.vertical .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(-45deg)}.rangeSlider.range.vertical.reversed .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(-45deg)}.rangeSlider.range.vertical.reversed .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(135deg)}.rangeSlider .rangeFloat{display:block;position:absolute;left:50%;top:-0.5em;transform:translate(-50%, -100%);font-size:1em;text-align:center;opacity:0;pointer-events:none;white-space:nowrap;transition:all 0.2s ease;font-size:0.9em;padding:0.2em 0.4em;border-radius:0.2em}.rangeSlider .rangeHandle.active .rangeFloat,.rangeSlider.hoverable .rangeHandle:hover .rangeFloat{opacity:1;top:-0.2em;transform:translate(-50%, -100%)}.rangeSlider .rangeBar{position:absolute;display:block;transition:background 0.2s ease;border-radius:1em;height:0.5em;top:0;user-select:none;z-index:1}.rangeSlider.vertical .rangeBar{width:0.5em;height:auto}.rangeSlider{background-color:#d7dada;background-color:var(--slider)}.rangeSlider .rangeBar{background-color:#99a2a2;background-color:var(--range-inactive)}.rangeSlider.focus .rangeBar{background-color:#838de7;background-color:var(--range)}.rangeSlider .rangeNub{background-color:#99a2a2;background-color:var(--handle-inactive)}.rangeSlider.focus .rangeNub{background-color:#838de7;background-color:var(--handle)}.rangeSlider .rangeHandle.active .rangeNub{background-color:#4a40d4;background-color:var(--handle-focus)}.rangeSlider .rangeFloat{color:white;color:var(--float-text);background-color:#99a2a2;background-color:var(--float-inactive)}.rangeSlider.focus .rangeFloat{background-color:#4a40d4;background-color:var(--float)}.rangeSlider.disabled{opacity:0.5}.rangeSlider.disabled .rangeNub{background-color:#d7dada;background-color:var(--slider)}',
  map: null
};
const RangeSlider = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  let percentOf;
  let clampValue;
  let alignValueToStep;
  let orientationStart;
  let orientationEnd;
  let $springPositions, $$unsubscribe_springPositions = import_index_76a30155.h, $$subscribe_springPositions = () => ($$unsubscribe_springPositions(), $$unsubscribe_springPositions = (0, import_index_76a30155.a)(springPositions, ($$value) => $springPositions = $$value), springPositions);
  let { slider = void 0 } = $$props;
  let { range = false } = $$props;
  let { pushy = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { values = [(max + min) / 2] } = $$props;
  let { vertical = false } = $$props;
  let { float = false } = $$props;
  let { reversed = false } = $$props;
  let { hoverable = true } = $$props;
  let { disabled = false } = $$props;
  let { pips = false } = $$props;
  let { pipstep = void 0 } = $$props;
  let { all = void 0 } = $$props;
  let { first = void 0 } = $$props;
  let { last = void 0 } = $$props;
  let { rest = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { formatter = (v, i, p) => v } = $$props;
  let { handleFormatter = formatter } = $$props;
  let { precision = 2 } = $$props;
  let { springValues = { stiffness: 0.15, damping: 0.4 } } = $$props;
  const dispatch = (0, import_index_76a30155.d)();
  let valueLength = 0;
  let focus = false;
  let activeHandle = values.length - 1;
  let startValue;
  let previousValue;
  let springPositions;
  const fixFloat = (v) => parseFloat(v.toFixed(precision));
  function trimRange(values2) {
    if (range === "min" || range === "max") {
      return values2.slice(0, 1);
    } else if (range) {
      return values2.slice(0, 2);
    } else {
      return values2;
    }
  }
  function moveHandle(index, value) {
    value = alignValueToStep(value);
    if (typeof index === "undefined") {
      index = activeHandle;
    }
    if (range) {
      if (index === 0 && value > values[1]) {
        if (pushy) {
          values[1] = value;
        } else {
          value = values[1];
        }
      } else if (index === 1 && value < values[0]) {
        if (pushy) {
          values[0] = value;
        } else {
          value = values[0];
        }
      }
    }
    if (values[index] !== value) {
      values[index] = value;
    }
    if (previousValue !== value) {
      eChange();
      previousValue = value;
    }
    return value;
  }
  function rangeStart(values2) {
    if (range === "min") {
      return 0;
    } else {
      return values2[0];
    }
  }
  function rangeEnd(values2) {
    if (range === "max") {
      return 0;
    } else if (range === "min") {
      return 100 - values2[0];
    } else {
      return 100 - values2[1];
    }
  }
  function eChange() {
    !disabled && dispatch("change", {
      activeHandle,
      startValue,
      previousValue: typeof previousValue === "undefined" ? startValue : previousValue,
      value: values[activeHandle],
      values: values.map((v) => alignValueToStep(v))
    });
  }
  if ($$props.slider === void 0 && $$bindings.slider && slider !== void 0)
    $$bindings.slider(slider);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.pushy === void 0 && $$bindings.pushy && pushy !== void 0)
    $$bindings.pushy(pushy);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.float === void 0 && $$bindings.float && float !== void 0)
    $$bindings.float(float);
  if ($$props.reversed === void 0 && $$bindings.reversed && reversed !== void 0)
    $$bindings.reversed(reversed);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.pips === void 0 && $$bindings.pips && pips !== void 0)
    $$bindings.pips(pips);
  if ($$props.pipstep === void 0 && $$bindings.pipstep && pipstep !== void 0)
    $$bindings.pipstep(pipstep);
  if ($$props.all === void 0 && $$bindings.all && all !== void 0)
    $$bindings.all(all);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0)
    $$bindings.first(first);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  if ($$props.rest === void 0 && $$bindings.rest && rest !== void 0)
    $$bindings.rest(rest);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.formatter === void 0 && $$bindings.formatter && formatter !== void 0)
    $$bindings.formatter(formatter);
  if ($$props.handleFormatter === void 0 && $$bindings.handleFormatter && handleFormatter !== void 0)
    $$bindings.handleFormatter(handleFormatter);
  if ($$props.precision === void 0 && $$bindings.precision && precision !== void 0)
    $$bindings.precision(precision);
  if ($$props.springValues === void 0 && $$bindings.springValues && springValues !== void 0)
    $$bindings.springValues(springValues);
  $$result.css.add(css$4);
  clampValue = function(val) {
    return val <= min ? min : val >= max ? max : val;
  };
  alignValueToStep = function(val) {
    if (val <= min) {
      return fixFloat(min);
    } else if (val >= max) {
      return fixFloat(max);
    }
    let remainder = (val - min) % step;
    let aligned = val - remainder;
    if (Math.abs(remainder) * 2 >= step) {
      aligned += remainder > 0 ? step : -step;
    }
    aligned = clampValue(aligned);
    return fixFloat(aligned);
  };
  percentOf = function(val) {
    let perc = (val - min) / (max - min) * 100;
    if (isNaN(perc) || perc <= 0) {
      return 0;
    } else if (perc >= 100) {
      return 100;
    } else {
      return fixFloat(perc);
    }
  };
  {
    {
      if (!Array.isArray(values)) {
        values = [(max + min) / 2];
        console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)");
      }
      values = trimRange(values.map((v) => alignValueToStep(v)));
      if (valueLength !== values.length) {
        $$subscribe_springPositions(springPositions = spring(values.map((v) => percentOf(v)), springValues));
      } else {
        springPositions.set(values.map((v) => percentOf(v)));
      }
      valueLength = values.length;
    }
  }
  orientationStart = vertical ? reversed ? "top" : "bottom" : reversed ? "right" : "left";
  orientationEnd = vertical ? reversed ? "bottom" : "top" : reversed ? "left" : "right";
  $$unsubscribe_springPositions();
  return `<div${(0, import_index_76a30155.b)("id", id, 0)} class="${[
    "rangeSlider",
    (range ? "range" : "") + " " + (disabled ? "disabled" : "") + " " + (hoverable ? "hoverable" : "") + " " + (vertical ? "vertical" : "") + " " + (reversed ? "reversed" : "") + "  " + (range === "min" ? "min" : "") + " " + (range === "max" ? "max" : "") + " " + (pips ? "pips" : "") + " " + (all === "label" || first === "label" || last === "label" || rest === "label" ? "pip-labels" : "")
  ].join(" ").trim()}"${(0, import_index_76a30155.b)("this", slider, 0)}>${(0, import_index_76a30155.f)(values, (value, index) => {
    return `<span role="${"slider"}" class="${[
      "rangeHandle",
      " "
    ].join(" ").trim()}"${(0, import_index_76a30155.b)("data-handle", index, 0)} style="${(0, import_index_76a30155.e)(orientationStart) + ": " + (0, import_index_76a30155.e)($springPositions[index]) + "%; z-index: " + (0, import_index_76a30155.e)(activeHandle === index ? 3 : 2) + ";"}"${(0, import_index_76a30155.b)("aria-valuemin", range === true && index === 1 ? values[0] : min, 0)}${(0, import_index_76a30155.b)("aria-valuemax", range === true && index === 0 ? values[1] : max, 0)}${(0, import_index_76a30155.b)("aria-valuenow", value, 0)} aria-valuetext="${(0, import_index_76a30155.e)(prefix) + (0, import_index_76a30155.e)(handleFormatter(value, index, percentOf(value))) + (0, import_index_76a30155.e)(suffix)}"${(0, import_index_76a30155.b)("aria-orientation", vertical ? "vertical" : "horizontal", 0)}${(0, import_index_76a30155.b)("aria-disabled", disabled, 0)} ${disabled ? "disabled" : ""}${(0, import_index_76a30155.b)("tabindex", disabled ? -1 : 0, 0)}><span class="${"rangeNub"}"></span>
      ${float ? `<span class="${"rangeFloat"}">${prefix ? `<span class="${"rangeFloat-prefix"}">${(0, import_index_76a30155.e)(prefix)}</span>` : ``}${(0, import_index_76a30155.e)(handleFormatter(value, index, percentOf(value)))}${suffix ? `<span class="${"rangeFloat-suffix"}">${(0, import_index_76a30155.e)(suffix)}</span>` : ``}
        </span>` : ``}
    </span>`;
  })}
  ${range ? `<span class="${"rangeBar"}" style="${(0, import_index_76a30155.e)(orientationStart) + ": " + (0, import_index_76a30155.e)(rangeStart($springPositions)) + "%; " + (0, import_index_76a30155.e)(orientationEnd) + ": " + (0, import_index_76a30155.e)(rangeEnd($springPositions)) + "%;"}"></span>` : ``}
  ${pips ? `${(0, import_index_76a30155.v)(RangePips, "RangePips").$$render($$result, {
    values,
    min,
    max,
    step,
    range,
    vertical,
    reversed,
    orientationStart,
    hoverable,
    disabled,
    all,
    first,
    last,
    rest,
    pipstep,
    prefix,
    suffix,
    formatter,
    focus,
    percentOf,
    moveHandle,
    fixFloat
  }, {}, {})}` : ``}</div>

`;
});
const YearFilter = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  let minYear;
  let maxYear;
  let $bechdelData, $$unsubscribe_bechdelData;
  let $yearClicked, $$unsubscribe_yearClicked;
  $$unsubscribe_bechdelData = (0, import_index_76a30155.a)(import_stores_eeb6b843.b, (value) => $bechdelData = value);
  $$unsubscribe_yearClicked = (0, import_index_76a30155.a)(import_stores_eeb6b843.y, (value) => $yearClicked = value);
  let { valuesYear } = $$props;
  if ($$props.valuesYear === void 0 && $$bindings.valuesYear && valuesYear !== void 0)
    $$bindings.valuesYear(valuesYear);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    minYear = Math.min(...$bechdelData.map((data) => data.year));
    maxYear = Math.max(...$bechdelData.map((data) => data.year));
    valuesYear = [minYear, maxYear];
    $$rendered = `<div class="${"year"}">${$yearClicked ? `<div>${(0, import_index_76a30155.v)(RangeSlider, "RangeSlider").$$render($$result, {
      float: true,
      range: true,
      min: minYear,
      max: maxYear,
      pips: true,
      first: "label",
      last: "label",
      values: valuesYear
    }, {
      values: ($$value) => {
        valuesYear = $$value;
        $$settled = false;
      }
    }, {})}</div>` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_bechdelData();
  $$unsubscribe_yearClicked();
  return $$rendered;
});
var Filter_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".button{width:min-content;align-items:center;margin:0 1rem;padding:0.5rem 1rem;background-color:#212121;border-radius:0.4rem;transition:0.5s ease;color:white;cursor:pointer;white-space:nowrap}.icon{width:0.75rem;height:0.75rem;fill:white;margin-left:0.25rem;opacity:1;transition:transform 0.5s}.clicked .icon{opacity:1;fill:white;height:0.75em;width:0.75em;transform:rotate(-180deg);transition:transform 0.3s ease-in}.filter-container.svelte-1qf9u11{transition:0.4s ease-in-out;border:1px solid #212121;border-radius:0.4rem;padding:1rem}@media only screen and (min-width: 321px){.filter-container.svelte-1qf9u11{grid-column:1 / span 2;justify-content:center;margin:1rem 2rem}}@media only screen and (min-width: 600px){.filter-container.svelte-1qf9u11{margin:1rem 4rem}}.buttons.svelte-1qf9u11{text-align:center}.genre, .bechdel, .year{margin-bottom:1rem}.clear-filters.svelte-1qf9u11{width:min-content;margin:auto;padding:0.5rem;background-color:white;text-align:center;border:1px solid #212121;border-radius:0.4rem;white-space:nowrap;cursor:pointer}@media only screen and (min-width: 600px){.buttons.svelte-1qf9u11{display:flex;justify-content:center}}",
  map: null
};
const Filter = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  let $yearClicked, $$unsubscribe_yearClicked;
  let $bechdelClicked, $$unsubscribe_bechdelClicked;
  let $genreClicked, $$unsubscribe_genreClicked;
  $$unsubscribe_yearClicked = (0, import_index_76a30155.a)(import_stores_eeb6b843.y, (value) => $yearClicked = value);
  $$unsubscribe_bechdelClicked = (0, import_index_76a30155.a)(import_stores_eeb6b843.c, (value) => $bechdelClicked = value);
  $$unsubscribe_genreClicked = (0, import_index_76a30155.a)(import_stores_eeb6b843.g, (value) => $genreClicked = value);
  let { clicked } = $$props;
  let { genre } = $$props;
  let { rating } = $$props;
  let { valuesYear } = $$props;
  (0, import_index_76a30155.d)();
  if ($$props.clicked === void 0 && $$bindings.clicked && clicked !== void 0)
    $$bindings.clicked(clicked);
  if ($$props.genre === void 0 && $$bindings.genre && genre !== void 0)
    $$bindings.genre(genre);
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  if ($$props.valuesYear === void 0 && $$bindings.valuesYear && valuesYear !== void 0)
    $$bindings.valuesYear(valuesYear);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if ($bechdelClicked) {
          (0, import_index_76a30155.i)(import_stores_eeb6b843.y, $yearClicked = false, $yearClicked);
          (0, import_index_76a30155.i)(import_stores_eeb6b843.g, $genreClicked = false, $genreClicked);
        }
        if ($yearClicked) {
          (0, import_index_76a30155.i)(import_stores_eeb6b843.g, $genreClicked = false, $genreClicked);
          (0, import_index_76a30155.i)(import_stores_eeb6b843.c, $bechdelClicked = false, $bechdelClicked);
        }
        if ($genreClicked) {
          (0, import_index_76a30155.i)(import_stores_eeb6b843.c, $bechdelClicked = false, $bechdelClicked);
          (0, import_index_76a30155.i)(import_stores_eeb6b843.y, $yearClicked = false, $yearClicked);
        }
      }
    }
    $$rendered = `${clicked ? `<div class="${"filter-container svelte-1qf9u11"}"><div class="${"buttons svelte-1qf9u11"}"><div class="${(0, import_index_76a30155.e)($genreClicked ? "clicked" : "") + " button genre"}"><span>genre</span>
					<svg class="${"icon"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}"><path d="${"M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"}"></path></svg></div>

				<div class="${(0, import_index_76a30155.e)($bechdelClicked ? "clicked" : "") + " button bechdel"}"><span>bechdel rating</span>
					<svg class="${"icon"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}"><path d="${"M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"}"></path></svg></div>

				<div class="${(0, import_index_76a30155.e)($yearClicked ? "clicked" : "") + " button year"}"><span>year </span>
					<svg class="${"icon"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}"><path d="${"M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"}"></path></svg></div></div>

			${(0, import_index_76a30155.v)(GenreFilter, "GenreFilter").$$render($$result, { genre }, {
      genre: ($$value) => {
        genre = $$value;
        $$settled = false;
      }
    }, {})}
			${(0, import_index_76a30155.v)(BechdelFilter, "BechdelFilter").$$render($$result, { rating }, {
      rating: ($$value) => {
        rating = $$value;
        $$settled = false;
      }
    }, {})}
			${(0, import_index_76a30155.v)(YearFilter, "YearFilter").$$render($$result, { valuesYear }, {
      valuesYear: ($$value) => {
        valuesYear = $$value;
        $$settled = false;
      }
    }, {})}

			<div class="${"clear-filters svelte-1qf9u11"}"><span>Clear filters </span></div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_yearClicked();
  $$unsubscribe_bechdelClicked();
  $$unsubscribe_genreClicked();
  return $$rendered;
});
var FilterButton_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".filter-button.svelte-igjlyb{display:flex}",
  map: null
};
const FilterButton = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  let { clicked } = $$props;
  if ($$props.clicked === void 0 && $$bindings.clicked && clicked !== void 0)
    $$bindings.clicked(clicked);
  $$result.css.add(css$2);
  return `<div class="${(0, import_index_76a30155.e)((0, import_index_76a30155.n)(clicked ? "filter-button button clicked" : "filter-button button")) + " svelte-igjlyb"}"><span>filter</span>
	<svg class="${"icon"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}"><path d="${"M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"}"></path></svg>

</div>`;
});
var Pagination_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".clicked.svelte-sist45{font-weight:bold;color:white;background-color:#212121}svg.svelte-sist45{width:10px;height:10px}nav.svelte-sist45{margin:2em}ul.pagination.svelte-sist45{text-align:center;list-style-type:none}li.svelte-sist45{cursor:pointer;display:inline;padding:0.5em 0.75em;border:1px solid #212121;border-radius:10px;margin:0.25rem}@media only screen and (max-width: 549px){li.svelte-sist45{margin:1px;padding:0.25em 0.375em}}",
  map: null
};
let numListItemsDisplayed = 3;
const Pagination = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  let numItemsOnEachPage;
  let numPages;
  let clicked;
  let $filteredData, $$unsubscribe_filteredData;
  $$unsubscribe_filteredData = (0, import_index_76a30155.a)(import_stores_eeb6b843.f, (value) => $filteredData = value);
  let { start } = $$props;
  let { end } = $$props;
  let numItemsInData;
  let page = 1;
  let numPagesArr;
  let listStart;
  let listEnd;
  let displayPageArr;
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  $$result.css.add(css$1);
  numItemsInData = $filteredData.length;
  numItemsOnEachPage = 16;
  numPages = Math.ceil(numItemsInData / numItemsOnEachPage) - 1;
  {
    {
      if (numPages > 0) {
        numPagesArr = Array.from(Array(numPages).keys()).map((x) => ++x);
      }
    }
  }
  start = 0;
  end = start + numItemsOnEachPage;
  clicked = page;
  {
    {
      {
        listStart = 0;
        listEnd = numListItemsDisplayed;
      }
    }
  }
  displayPageArr = numPagesArr.slice(listStart, listEnd);
  $$unsubscribe_filteredData();
  return `<nav class="${"svelte-sist45"}"><ul class="${"pagination svelte-sist45"}">${``}
		${(0, import_index_76a30155.f)(displayPageArr, (page2) => {
    return `<li class="${(0, import_index_76a30155.e)((0, import_index_76a30155.n)(clicked == page2 ? "clicked" : "")) + " svelte-sist45"}">${(0, import_index_76a30155.e)(page2)}</li>`;
  })}
		${page < numPages - 3 ? `<li class="${"svelte-sist45"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 320 512"}" class="${"svelte-sist45"}"><path d="${"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"}"></path></svg></li>
			<li class="${"svelte-sist45"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 320 512"}" class="${"svelte-sist45"}"><path d="${"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"}"></path></svg><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 320 512"}" class="${"svelte-sist45"}"><path d="${"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"}"></path></svg></li>` : ``}</ul>
</nav>`;
});
var Movies_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-f20jtb{display:flex;justify-content:center}.search-container.svelte-f20jtb{display:grid;grid-template-columns:1fr 110px;grid-template-rows:auto 1fr;justify-content:center;margin-bottom:1rem}.movies.svelte-f20jtb{text-align:center;justify-content:center}@media only screen and (min-width: 600px){.movies.svelte-f20jtb{display:grid;grid-template-columns:repeat(4, 1fr) !important}}@media only screen and (min-width: 370px){.movies.svelte-f20jtb{display:grid;grid-template-columns:repeat(2, 1fr)}}",
  map: null
};
const Movies = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  let displayMovies;
  let $filteredData, $$unsubscribe_filteredData;
  let $movieData, $$unsubscribe_movieData;
  let $$unsubscribe_bechdelData;
  let $yearClicked, $$unsubscribe_yearClicked;
  let $filteredBechdelData, $$unsubscribe_filteredBechdelData;
  let $bechdelClicked, $$unsubscribe_bechdelClicked;
  $$unsubscribe_filteredData = (0, import_index_76a30155.a)(import_stores_eeb6b843.f, (value) => $filteredData = value);
  $$unsubscribe_movieData = (0, import_index_76a30155.a)(import_stores_eeb6b843.m, (value) => $movieData = value);
  $$unsubscribe_bechdelData = (0, import_index_76a30155.a)(import_stores_eeb6b843.b, (value) => value);
  $$unsubscribe_yearClicked = (0, import_index_76a30155.a)(import_stores_eeb6b843.y, (value) => $yearClicked = value);
  $$unsubscribe_filteredBechdelData = (0, import_index_76a30155.a)(import_stores_eeb6b843.a, (value) => $filteredBechdelData = value);
  $$unsubscribe_bechdelClicked = (0, import_index_76a30155.a)(import_stores_eeb6b843.c, (value) => $bechdelClicked = value);
  let clicked = false;
  let genre;
  let rating;
  let searchTerm;
  let start = 0;
  let end = 0;
  let valuesYear = [];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (!$bechdelClicked && !genre && !$yearClicked) {
          (0, import_index_76a30155.i)(import_stores_eeb6b843.f, $filteredData = $movieData.filter((movie) => movie.backdrop_path && movie.imdb_id).sort((a, b) => {
            return parseInt(b.release_date.slice(0, 4)) - parseInt(a.release_date.slice(0, 4));
          }), $filteredData);
        } else {
          if (rating) {
            (0, import_index_76a30155.i)(import_stores_eeb6b843.f, $filteredData = $movieData.filter((movie) => {
              return $filteredBechdelData.some((data) => {
                return movie.imdb_id && movie.imdb_id.slice(2) == data.imdbid;
              });
            }), $filteredData);
          }
          if (genre) {
            (0, import_index_76a30155.i)(import_stores_eeb6b843.f, $filteredData = $movieData.filter((movie) => {
              let genrePresent = false;
              if (movie.genres) {
                movie.genres.forEach((movieGenre) => {
                  if (genre == movieGenre.name) {
                    genrePresent = true;
                  } else {
                    genrePresent = false;
                  }
                });
                return genrePresent;
              }
            }), $filteredData);
          }
          if ($yearClicked) {
            let minYear = valuesYear[0];
            let maxYear = valuesYear[1];
            (0, import_index_76a30155.i)(import_stores_eeb6b843.f, $filteredData = $movieData.filter((movie) => {
              if (movie.release_date) {
                let movieYear = parseInt(movie.release_date.slice(0, 4));
                return minYear <= movieYear && maxYear >= movieYear;
              }
            }), $filteredData);
          }
        }
      }
    }
    displayMovies = $filteredData.slice(start, end);
    $$rendered = `<div class="${"container svelte-f20jtb"}"><div class="${"search-container svelte-f20jtb"}"><div class="${"search"}">${(0, import_index_76a30155.v)(Search, "Search").$$render($$result, { searchTerm }, {
      searchTerm: ($$value) => {
        searchTerm = $$value;
        $$settled = false;
      }
    }, {})}</div>
		${(0, import_index_76a30155.v)(FilterButton, "FilterButton").$$render($$result, { clicked }, {
      clicked: ($$value) => {
        clicked = $$value;
        $$settled = false;
      }
    }, {})}</div></div>

${(0, import_index_76a30155.v)(Filter, "Filter").$$render($$result, { clicked, genre, rating, valuesYear }, {
      clicked: ($$value) => {
        clicked = $$value;
        $$settled = false;
      },
      genre: ($$value) => {
        genre = $$value;
        $$settled = false;
      },
      rating: ($$value) => {
        rating = $$value;
        $$settled = false;
      },
      valuesYear: ($$value) => {
        valuesYear = $$value;
        $$settled = false;
      }
    }, {})}


<div class="${"movies svelte-f20jtb"}">${(0, import_index_76a30155.f)(displayMovies, (movie) => {
      return `${(0, import_index_76a30155.v)(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
    })}</div>

${(0, import_index_76a30155.v)(Pagination, "Pagination").$$render($$result, { start, end }, {
      start: ($$value) => {
        start = $$value;
        $$settled = false;
      },
      end: ($$value) => {
        end = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  $$unsubscribe_filteredData();
  $$unsubscribe_movieData();
  $$unsubscribe_bechdelData();
  $$unsubscribe_yearClicked();
  $$unsubscribe_filteredBechdelData();
  $$unsubscribe_bechdelClicked();
  return $$rendered;
});
const Routes = (0, import_index_76a30155.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_76a30155.v)(Movies, "Movies").$$render($$result, {}, {}, {})}`;
});
