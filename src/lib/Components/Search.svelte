<script>
	import { filteredData } from '$lib/stores.js';
	export let searchTerm;
</script>

<div class="search">
	<input type="text" id="movie-search" bind:value={searchTerm} placeholder="Search movie..." autocomplete="off">
	<div class="dropdown-results">
		{#if searchTerm}
			{#each $filteredData as movie}
				<a class="search-results" type="button" href="{movie.imdbid}">{movie.title}</a>
				
			{/each}
		{/if}
		</div>
</div>


<style>
	.search {
		text-align: center;
		margin-bottom: 1rem;
	}
	input {
		height: 2rem;
		width: 40rem;
		border: 1px solid #212121;
		border-radius: 0.5rem;
	}

	input:focus {
		border: 1px solid #212121;
	}

	.dropdown-results {
		max-width: 400px;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		text-align: center;
		margin-top: 2px;
		z-index: 1;
		position: absolute;
		background-color: white;
		border-radius: 10px;
	}
	a {
		color: black;
		line-height: 1.5rem;
		text-decoration: none;
	}
	.search-results {
		display: block;
		padding: 0.5rem 0;
		
	}
	.search-results:hover {
		background-color: rgb(223, 219, 219);
		cursor: pointer;
	}
</style>