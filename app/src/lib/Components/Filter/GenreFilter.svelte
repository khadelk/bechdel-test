<script>
	import { slide } from 'svelte/transition';
	import { movieData, genreClicked } from '$lib/stores.js';
	export let genre;
	let current;

	let storeGenres = []
	let clicked = false;
	// export let genreClicked;

	const handleClick = (e) => {
		genre = e.target.innerText;
		current = genre
	}

	$movieData.forEach(movie => {
		if (movie.genres) {
			movie.genres.forEach(genre => {
				if (storeGenres[genre.name] >= 1) {
					storeGenres[genre.name] +=1;
				} else {
					storeGenres[genre.name] = 1;
				}
			})
		}
	})
	let genres = Object.keys(storeGenres);
</script>

<div class="genre-options">
	{#if $genreClicked}
	<div transition:slide class="options">
		{#each genres as genre}
			<div class:selected="{current == genre}" on:click={(e) => handleClick(e)}> {genre} </div>
		{/each}
	</div>
	{/if}
</div>

<style>
	.selected {
		background-color: black !important;
		color: white !important;
	}
	.options {
		display: flex;
		flex-wrap:wrap;
	}
	.options > div {
		justify-self: center;
		margin: 0rem 0rem 1rem 1rem;
		padding: 0.5rem 1rem;
		background-color: white;
		border-radius: 0.4rem;
		transition: 0.5s ease;
		color: #212121;
		cursor: pointer;
		white-space: nowrap;
		border: 1px solid #212121;
	}

	</style>