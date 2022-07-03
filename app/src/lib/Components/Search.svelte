<script>
	import { filteredData } from '$lib/stores.js';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let searchTerm;
	
	function sendInput(event) {
			dispatch('sendInput', event.target.value);
	}

	function clickOutside(element, callbackFunction) {
		function onClick(event) {
			if (!element.contains(event.target)) {

				callbackFunction();
			}
		}
		
		document.body.addEventListener('click', onClick);
		
		return {
			update(newCallbackFunction) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		}
	}
	let showSearch = true;
</script>

<div
on:click={(event) => {
	showSearch = true;
	event.stopPropagation();
}}>
	<input type="text" id="movie-search" on:input={sendInput} bind:value={searchTerm} placeholder="Search movie..." autocomplete="off">
	<div class="dropdown-results">
		{#if searchTerm}
			{#if showSearch}
				<div class="modal"
					use:clickOutside={() => {
						showSearch = false;
					}}>
					{#each $filteredData as movie}
						<a class="search-results" type="button" href="{movie.imdb_id.slice(2)}">{movie.title}</a>
					{/each}
				</div>
			<!-- {:else} -->
			{/if}
		{/if}
	</div>
</div>


<style>
	.search {
		text-align: center;
		/* margin-bottom: 1rem; */
	}
	input {
		height: 2rem;
		width: 60vw;
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
		z-index: 3;
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
	@media only screen and (min-width: 600px) {
		input {
			width: 40vw;
		}
	}
</style>