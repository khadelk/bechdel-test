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
	import { onMount } from 'svelte';
	import { bechdelData } from '$lib/stores.js'
	import Header from '$lib/Components/Header.svelte'
	import Search from '$lib/Components/Search.svelte'
	import MovieCard from '$lib/Components/MovieCard.svelte'
	
	export let searchTerm;
	
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

	let movieData = []
	//  = (getRandom($bechdelData, 20))
	let displayMovies = []

	$: {
		if (searchTerm) {
			movieData = $bechdelData.filter(data => data.title.includes(searchTerm))
		} else {
			movieData = (getRandom($bechdelData, 20))
		}
	}

	$: {
		movieData.forEach(movie => {
			onMount(async() => {
				const res = await fetch(`https://api.themoviedb.org/3/movie/tt${movie.imdbid}?api_key=12b43b9b8cd57e50b2441beea35b44b8`);
				const json = await res.json();
				displayMovies = [...displayMovies, json]
			})
		})
	}

	$: console.log(movieData)
	$: console.log(displayMovies)
	
</script>

<Header bind:searchTerm />

<Search />

<div class="movies">
	{#each displayMovies as movie}
		<MovieCard {movie} />
	{/each}
</div>


<style>
	.movies {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>