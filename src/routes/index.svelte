<script>
	import { onMount } from 'svelte';
	import { bechdelData, displayMovies, filteredData } from '$lib/stores.js'
	import Search from '$lib/Components/Search.svelte'
	import Movies from '$lib/Components/Movies.svelte'
	export let searchTerm;
	
	$displayMovies = [];
	$: {
		$filteredData.forEach(movie => {
			onMount(async() => {
				const res = await fetch(`https://api.themoviedb.org/3/movie/tt${movie.imdbid}?api_key=12b43b9b8cd57e50b2441beea35b44b8`);
				const json = await res.json();
				if (res.ok && res.status != 404) {
					$displayMovies = [...$displayMovies, json]
				}
			})
		})
	}
</script>

<Search bind:searchTerm />

<Movies bind:searchTerm />