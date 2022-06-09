<script>
	import { slide } from 'svelte/transition';
	import {bechdelData} from '$lib/stores.js'
	let clicked = false;
</script>
<div class="bechdel">
<div class="button bechdel" on:click={() => clicked = !clicked}>
	<span>bechdel rating</span>
	<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
</div>

{#if clicked}
	<div transition:slide class="options">
		<div>0</div>
		<div>1</div>
		<div>2</div>
		<div>3</div>
	</div>
{/if}
</div>



<style>
		/* .button {
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
	} */
	.options {
		display: flex;
	}
	.options > div {
		width: min-content;
		/* align-items: center; */
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