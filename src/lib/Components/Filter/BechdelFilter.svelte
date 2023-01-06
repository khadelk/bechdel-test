<script>
	import { slide } from 'svelte/transition';
	import { bechdelData, filteredBechdelData, filteredData, bechdelClicked, yearClicked} from '$lib/stores.js'
	const bechdelNums = [0,1,2,3]
	export let rating;

	const filterByBechdel = (e, num) => {
		$bechdelClicked = true;
		rating = num;
		$filteredBechdelData = $bechdelData.filter(data => {
			return data.rating == rating;
		})
	}


</script>

<div class="bechdel">
{#if $bechdelClicked}
	<div transition:slide class="options">
		{#each bechdelNums as num}
			<div class:selected='{rating == num}' on:click={(e) => filterByBechdel(e, num)}>{num}</div>
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
		justify-content: center;
	}
	.options > div {
		width: min-content;
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