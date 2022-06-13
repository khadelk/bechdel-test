<script>
  import { bechdelData, filteredData, movieData, bechdelClicked, genreClicked, yearClicked } from '$lib/stores.js'
	import MovieCard from '$lib/Components/MovieCard.svelte'
	import Search from '$lib/Components/Search.svelte'
	import Filter from '$lib/Components/Filter/Filter.svelte'
	import { onMount } from 'svelte';

	let searchTerm;
	// Taken from https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
	function getRandom(arr, n) {
		var result = new Array(n),
		len = arr.length,
		taken = new Array(len);
		if (n > len)
		throw new RangeError("getRandom: more elements taken than available");
		while (n--) {
			var x = Math.floor(Math.random() * len);
			if (x in taken) {
				if (arr[taken[x]].backdrop_path !== null && !(arr[taken[x]].status_code)) {
					result[n] = arr[taken[x]]
				}
			} else if (arr[x].backdrop_path !== null && !(arr[x].status_code)) {
				result[n] = arr[x]
			} else {
				n++
			}
			taken[x] = --len in taken ? taken[len] : len;
		}
		return result;
	}

	let timer;
	const debounce = ((e) => {
		let textInput = e.detail
		clearTimeout(timer);
		timer = setTimeout(() => {
      $filteredData = $movieData.filter(data => {
				if (data.title !== undefined) {
					return (data.title).toLowerCase().includes(textInput.toLowerCase())
				}
			}).slice(0,18)
		}, 300);
	})

	$: {
		if (searchTerm && searchTerm.length > 0) {
			$filteredData;
		} else {
			if (!(bechdelClicked) || !(genreClicked) || !(yearClicked)) {
				$filteredData = (getRandom($movieData, 18))
			}
		}
	}
</script>

<div class="search-container">
	<Search on:sendInput={debounce} bind:searchTerm />
	<Filter />
</div>

<div class="movies">
	{#each $filteredData as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.search-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto 1fr;
		width: 50%;
		margin: auto;
		justify-content: center;
		margin-bottom: 1rem;
	}
	.movies {
		text-align: center;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
</style>
