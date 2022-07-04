<script>
	import GenreFilter from '$lib/Components/Filter/GenreFilter.svelte'
	import BechdelFilter from '$lib/Components/Filter/BechdelFilter.svelte'
	import YearFilter from '$lib/Components/Filter/YearFilter.svelte'
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { genreClicked, yearClicked, bechdelClicked } from '$lib/stores.js'
	export let clicked;
	export let genre;
	export let rating;
	export let valuesYear;
	$: {
		if ($bechdelClicked) {
			$yearClicked = false;
			$genreClicked = false;
		}
		if ($yearClicked) {
			$genreClicked = false;
			$bechdelClicked = false;
		}
		if ($genreClicked) {
			$bechdelClicked = false;
			$yearClicked = false;
		}
	}
	
	const dispatch = createEventDispatcher();

	const clearFilters = () => {
		dispatch('clear')
	}
</script>

	{#if clicked}
		<div transition:slide class="filter-container">
			<div class="buttons">
				<div class="{$genreClicked ? 'clicked' : ''} button genre" on:click={() => ($genreClicked = !$genreClicked) && ($bechdelClicked = false) && ($yearClicked = false)}>
					<span>genre</span>
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
				</div>

				<div class="{$bechdelClicked ? 'clicked' : ''} button bechdel" on:click={() => ($bechdelClicked = !$bechdelClicked) && ($genreClicked = false) && ($yearClicked = false)}>
					<span>bechdel rating</span>
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
				</div>

				<div class="{$yearClicked ? 'clicked' : ''} button year" on:click={() => ($yearClicked = !$yearClicked) && ($genreClicked = false) && ($bechdelClicked = false)}>
					<span> year </span>
					<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>

				</div>
			</div>

			<GenreFilter bind:genre />
			<BechdelFilter bind:rating />
			<YearFilter bind:valuesYear />

			<div class="clear-filters" on:click={clearFilters}>
				<span> Clear filters </span>
			</div>
		</div>
	{/if}

<style>
	:global(.button) {
		width: min-content;
		align-items: center;
		margin: 0 1rem;
		padding: 0.5rem 1rem;
		background-color: #212121;
		border-radius: 0.4rem;
		transition: 0.5s ease;
		color: white;
		cursor: pointer;
		white-space: nowrap;
	}

	:global(.icon) {
		width: 0.75rem;
		height: 0.75rem;
		fill: white;
		margin-left: 0.25rem;
		opacity: 1;
		transition: transform 0.5s;
	}

	:global(.clicked .icon) {
		opacity: 1;
		fill: white;
		height: 0.75em;
		width: 0.75em;
		transform: rotate(-180deg);
		transition: transform 0.3s ease-in;
	}

	.filter-container {
		transition: 0.4s ease-in-out;
		border: 1px solid #212121;
		border-radius: 0.4rem;
		padding: 1rem;
	}

	@media only screen and (min-width: 321px) {
		.filter-container {
			grid-column: 1 / span 2;
			justify-content: center;
			margin: 1rem 2rem;
		}
	}

	@media only screen and (min-width: 600px) {
		.filter-container {
			margin: 1rem 4rem;
		}
	}

	.buttons {
		text-align: center;
	}
	
	:global(.genre, .bechdel, .year) {
		margin-bottom: 1rem;
	}

	.clear-filters {
		width: min-content;
		margin: auto;
		padding: 0.5rem;
		background-color: white;
		text-align: center;
		border: 1px solid #212121;
		border-radius: 0.4rem;
		white-space: nowrap;
		cursor: pointer;
	}

	@media only screen and (min-width: 600px) {
		.buttons {
			display: flex;
			justify-content: center;
		}
	}

</style>