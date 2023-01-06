<script>
  import { filteredData, movieData, bechdelData, bechdelClicked, genreClicked, yearClicked, filteredBechdelData } from '$lib/stores.js'
	import MovieCard from '$lib/Components/MovieCard.svelte'
	import Search from '$lib/Components/Search.svelte'
	import Filter from '$lib/Components/Filter/Filter.svelte'
	import FilterButton from '$lib/Components/Filter/FilterButton.svelte'
	import Pagination from '$lib/Components/Pagination.svelte';
	// export let bechdelMovies;
	let clicked = false;
	let genre;
	let rating;
	let searchTerm;
	let start = 0;
	let end = 0;
	let valuesYear = []

	let timer;
	const debounce = ((e) => {
		let textInput = e.detail
		clearTimeout(timer);
		timer = setTimeout(() => {
      $filteredData = $movieData.filter(data => {
				if (data.title !== undefined) {
					return (data.title).toLowerCase().includes(textInput.toLowerCase())
				}
			}).sort((a,b) => {
				return parseInt(b.release_date.slice(0,4)) - parseInt(a.release_date.slice(0,4))
			})
		}, 300);
	})

	// filter our movies every time the DOM updates
	$: {
		if (!($bechdelClicked) && !(genre) && !($yearClicked)) {
			$filteredData = $movieData.filter(movie => movie.backdrop_path && movie.imdb_id).sort((a,b) => {
				return parseInt(b.release_date.slice(0,4)) - parseInt(a.release_date.slice(0,4))
			})
		} else {
			if (rating) {
				// filter movies based on bechdel rating
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
				let minYear = valuesYear[0]
				let maxYear = valuesYear[1]
				$filteredData = $movieData.filter(movie => {
					if (movie.release_date) {
						let movieYear = parseInt(movie.release_date.slice(0,4))
						return (minYear <= movieYear && maxYear >= movieYear)
					}
				})
			}
		}
	}

	const clearFilter = () => {
		$yearClicked = false;
		valuesYear[0] = Math.min(...$bechdelData.map(data => data.year))
		valuesYear[1] = Math.max(...$bechdelData.map(data => data.year))
		genre = null;
		rating = null;
		$filteredData = ($movieData.filter(movie => movie.backdrop_path))
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

<Filter on:clear={clearFilter} bind:clicked bind:genre bind:rating bind:valuesYear />

{#key displayMovies}
<div class="movies">
	{#each displayMovies as movie}
		<MovieCard {movie} />
	{/each}
</div>
{/key}

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
		justify-content: center;
		margin-bottom: 1rem;
	}
	.movies {
		text-align: center;
		justify-content: center;
	}
	@media only screen and (min-width: 600px) {
		.movies {
			display: grid;
			grid-template-columns: repeat(4, 1fr) !important;
		}
	} 

	@media only screen and (min-width: 370px) {
		.movies {
			display: grid;
			grid-template-columns: repeat(2, 1fr);

		}
	} 
</style>
