<script context="module">
	export async function load({fetch, params}) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=12b43b9b8cd57e50b2441beea35b44b8`
		);
		const popular = await res.json();
		if(res.ok) {
			return {
				props: { popular: popular }
			};
		}
	}
</script>

<script>
	import { bechdelData } from '$lib/stores.js'
	import Header from '$lib/Components/Header.svelte'
	import Search from '$lib/Components/Search.svelte'
import { get } from 'svelte/store';
	
	export let searchTerm;
	export let popular;
	// console.log(popular.results)

	let filteredBechdelData = [];
	let smallBechdelData = $bechdelData.slice(0,100);
	
	$: {
		if (searchTerm) {
			filteredBechdelData = $bechdelData.filter(data => data.title.includes(searchTerm))
		} else {
			filteredBechdelData = smallBechdelData;
		}
	}

	// Taken from https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
	function getRandom(arr, n) {
		var result = new Array(n),
			len = arr.length,
			taken = new Array(len);
		if (n > len)
			throw new RangeError("getRandom: more elements taken than available");
		while (n--) {
			var x = Math.floor(Math.random() * len);
			result[n] = arr[x in taken ? taken[x] : x];
			taken[x] = --len in taken ? taken[len] : len;
		}
    return result;
}
	// let displayMovies = (getRandom($bechdelData, 20))
	// console.log(displayMovies)
	
</script>

<Header bind:searchTerm />

<Search />

<!-- {#each displayMovies as movie} -->
<!-- <div>
	<a href={"/movie/"+movie.imdbid}> {movie.title} </a>
</div> -->
	

<!-- {/each} -->

<!-- <RecentMovies {data} /> -->