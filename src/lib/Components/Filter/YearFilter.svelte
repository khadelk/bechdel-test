<script>
  import RangeSlider from "svelte-range-slider-pips";
	import { slide } from 'svelte/transition';
	import { yearClicked, bechdelData } from '$lib/stores.js'
	export let valuesYear;
	$: minYear = Math.min(...$bechdelData.map(data => data.year))
	$: maxYear = Math.max(...$bechdelData.map(data => data.year))
	$: valuesYear = [minYear, maxYear]
</script>

<div class="year" on:click={() => {$yearClicked = true}}>
	{#if $yearClicked}
		<div transition:slide>
			<RangeSlider float range min={minYear} max={maxYear} bind:values={valuesYear} pips first='label' last='label'/>
		</div>
	{/if}
</div>
