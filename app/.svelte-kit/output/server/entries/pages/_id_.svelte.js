import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from "../../chunks/index-76a30155.js";
import { b as bechdelData } from "../../chunks/stores-eeb6b843.js";
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: ".button.svelte-er5f3m.svelte-er5f3m{width:min-content;align-items:center;margin:0 1rem;padding:0.5rem 1rem;background-color:#212121;border-radius:0.4rem;transition:0.5s ease;color:white;cursor:pointer;white-space:nowrap}.button.svelte-er5f3m a.svelte-er5f3m{text-decoration:none;color:white}ul.svelte-er5f3m.svelte-er5f3m{list-style:none;padding-left:0}@media only screen and (max-width: 600px){.movie-info.svelte-er5f3m.svelte-er5f3m{text-align:center}.movie-poster.svelte-er5f3m.svelte-er5f3m{text-align:center;width:30%}}@media only screen and (min-width: 800px){.movie-poster.svelte-er5f3m.svelte-er5f3m{width:80%}}@media only screen and (min-width: 601px){.movie-info.svelte-er5f3m.svelte-er5f3m{display:grid;grid-template-columns:1fr 2fr;align-items:center;justify-content:space-around;height:80vh}.col-1.svelte-er5f3m.svelte-er5f3m{text-align:right}}.movie-info.svelte-er5f3m.svelte-er5f3m{height:80vh}.col-1.svelte-er5f3m.svelte-er5f3m{padding-left:2rem}.movie-poster.svelte-er5f3m.svelte-er5f3m{border-radius:2rem}.col-2.svelte-er5f3m.svelte-er5f3m{padding:2rem}.col-2-container.svelte-er5f3m.svelte-er5f3m{min-width:min-content;max-width:80%;background-color:rgb(247, 196, 205, 0.9);padding:2rem}.rating.svelte-er5f3m.svelte-er5f3m{display:flex;align-items:center}svg.svelte-er5f3m.svelte-er5f3m{width:25px;height:25px}",
  map: null
};
async function load({ fetch, params }) {
  const res = await fetch(`http://localhost:3000/api/movie/${params.id}.json`);
  const data = await res.json();
  if (res.ok) {
    return { props: { movie: data } };
  }
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $bechdelData, $$unsubscribe_bechdelData;
  $$unsubscribe_bechdelData = subscribe(bechdelData, (value) => $bechdelData = value);
  let { movie } = $$props;
  let bechdelMovie = $bechdelData.filter((data) => {
    return data.imdbid == movie.imdb_id.slice(2);
  });
  let bechdelRating = bechdelMovie[0].rating;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css);
  $$unsubscribe_bechdelData();
  return `<div class="${"movie-info svelte-er5f3m"}" style="${"background-image: linear-gradient(#e6646580, #9198e580), url(&quot;" + escape("https://image.tmdb.org/t/p/original" + movie.backdrop_path) + "&quot;)"}"><div class="${"col-1 svelte-er5f3m"}"><img class="${"movie-poster svelte-er5f3m"}"${add_attribute("src", "https://image.tmdb.org/t/p/w300" + movie.poster_path, 0)}${add_attribute("alt", movie.title, 0)}></div>
    
    <div class="${"col-2 svelte-er5f3m"}"><div class="${"col-2-container svelte-er5f3m"}"><h1>${escape(movie.title)}</h1>
    <div>The Bechdel Rating for <em>${escape(movie.title)}</em> is ${escape(bechdelRating)}</div>
    <ul class="${"svelte-er5f3m"}"><li><div class="${"rating svelte-er5f3m"}"><span>${bechdelRating >= 1 ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}" class="${"svelte-er5f3m"}"><path d="${"M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 384 512"}" class="${"svelte-er5f3m"}"><path d="${"M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"}"></path></svg>`}</span>
                <p>There are at least two [named] women in this movie... </p></div></li>
        <li><div class="${"rating svelte-er5f3m"}"><span>${bechdelRating >= 2 ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}" class="${"svelte-er5f3m"}"><path d="${"M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 384 512"}" class="${"svelte-er5f3m"}"><path d="${"M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"}"></path></svg>`}</span>
                <p>...Who talk to each other...</p></div></li>
        <li><div class="${"rating svelte-er5f3m"}"><span>${bechdelRating == 3 ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}" class="${"svelte-er5f3m"}"><path d="${"M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 384 512"}" class="${"svelte-er5f3m"}"><path d="${"M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"}"></path></svg>`}</span>
                <p>...About something besides a man</p></div></li></ul>
    <div class="${"button svelte-er5f3m"}"><a href="${"https://imdb.com/title/" + escape(movie.imdb_id)}" class="${"svelte-er5f3m"}">IMDB page
        </a></div></div></div>

</div>`;
});
export { U5Bidu5D as default, load };
