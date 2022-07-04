<script>
  import { filteredData, movieData, bechdelData, bechdelClicked, genreClicked, yearClicked, filteredBechdelData } from '$lib/stores.js'
	import MovieCard from '$lib/Components/MovieCard.svelte'
	import Search from '$lib/Components/Search.svelte'
	import Filter from '$lib/Components/Filter/Filter.svelte'
	import FilterButton from '$lib/Components/Filter/FilterButton.svelte'
	import Pagination from '$lib/Components/Pagination.svelte';
	// import filterMovies from '$lib/_utils/filterMovies'
	let clicked = false;
	let genre;
	let rating;
	let searchTerm;
	let start = 0;
	let end = 0;

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
		} else if (!($bechdelClicked) && !(genre) && !($yearClicked)) {
				$filteredData = ($movieData.filter(movie => movie.imdb_id))
		} else {
			if (rating) {
				$filteredData = $movieData.filter(movie => {
					return $filteredBechdelData.some(data => {
						return (movie.imdb_id && movie.imdb_id.slice(2) == data.imdbid) 							
					})
				})
			}
			if (genre) {
				// filter genre movies
				$filteredData = $movieData.filter(movie => {
					let genrePresent = false;
					if (movie.genres) {
						movie.genres.forEach(movieGenre => {
							if (genre == movieGenre.name) {
								genrePresent = true
							} else {
								genrePresent = false
							}
						})
						return genrePresent
					}
				})
			} 
			if ($yearClicked) {
				// filter movies based on year
			}
		}
	}

	$: displayMovies = $filteredData.slice(start, end)
</script>

<div class="container">
	<div class="search-container">
		<div class="search">
			<Search on:sendInput={debounce} bind:searchTerm />
		</div>
		<FilterButton bind:clicked /> 
	</div>
</div>
<Filter bind:clicked bind:genre bind:rating />


<div class="movies">
	{#each displayMovies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<Pagination bind:start bind:end />

<style>
	.container {
		display: flex;
		justify-content: center;
	}
	.search-container {
		display: grid;
		grid-template-columns: 1fr 110px;
		grid-template-rows: auto 1fr;
		/* width: 100%;
		margin: 0 50%; */
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
