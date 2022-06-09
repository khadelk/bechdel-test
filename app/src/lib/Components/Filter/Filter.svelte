<script>
	import GenreFilter from '$lib/Components/Filter/GenreFilter.svelte'
	import BechdelFilter from '$lib/Components/Filter/BechdelFilter.svelte'
	import YearFilter from '$lib/Components/Filter/YearFilter.svelte'

	let clicked = false;
	import { slide } from 'svelte/transition';
</script>

	<div class="filter-button button" on:click={() => clicked = !clicked}>
			<span>filter</span>
			<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
	</div>

	{#if clicked}
		<div transition:slide class="filter-container">
			<div class="buttons">
				<GenreFilter />
				<BechdelFilter />
				<YearFilter />
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
	.filter-button {
		display: flex;
	}
	:global(.icon) {
		width: 0.75rem;
		height: 0.75rem;
		fill: white;
		margin-left: 0.25rem;
	}

	.filter-container {
		display: flex;
		transition: 0.4s ease-in-out;
		grid-column: 1 / span 2;
		/* flex-direction: column; */
		justify-content: center;
		/* height: min-content; */
		/* width: 45rem; */
		padding: 1rem;
		margin: 1rem 4rem;
		border: 1px solid #212121;
		border-radius: 0.4rem;

	}

	.buttons {
		width: 500px;
		text-align: center;
		
	}
	
	:global(.genre, .bechdel) {
		margin-bottom: 1rem;
	}
</style>