<script>
    import { bechdelData, displayMovies, filteredData } from '$lib/stores.js'
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

	let getRandomMovies = (getRandom($bechdelData, 18))

	$: {
		if (searchTerm) {
			$filteredData = $bechdelData.filter(data => {
				return (data.title).toLowerCase().includes(searchTerm.toLowerCase())
			})
		} else {
			$filteredData = getRandomMovies;
		}
	}


</script>

<div class="movies">
	{#each $displayMovies as movie}
		<MovieCard {movie} />
	{/each}
</div>


<style>
	.movies {
		text-align: center;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
</style>
