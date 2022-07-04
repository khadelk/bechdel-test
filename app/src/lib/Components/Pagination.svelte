<script>
	import { filteredData, movieData, bechdelClicked, genreClicked, yearClicked } from '$lib/stores';
	let numItemsInData;
	$: {
		if (!$bechdelClicked && !$genreClicked && !$yearClicked) {
			numItemsInData = $movieData.filter(movie => movie.imdb_id).length;
		} else {
			numItemsInData = $filteredData.length
		}
	}

	$: numItemsOnEachPage = 18;
	$: numPages = Math.ceil(numItemsInData / numItemsOnEachPage) - 1;
	$: numPagesArr = Array.from(Array(numPages).keys()).map(x => ++x)
	export let start;
	export let end;
	let page = 1;
	$: start = page > 1 ? page * numItemsOnEachPage : 0
	$: end = start + numItemsOnEachPage 
	$: clicked = page;

	const paginate = (e) => {
		page = parseInt(e.target.innerText);
	}
	let numListItemsDisplayed = 5;
	let listStart;
	let listEnd;
	let displayPageArr;
	$:{ 
		if (page < numListItemsDisplayed) {
			listStart = 0;
			listEnd = numListItemsDisplayed
		} else if (page >= numListItemsDisplayed) {
				let index = numPagesArr.indexOf(page)
				listStart = index - 2
				listEnd = index + 3
		} else {
			if (page + numListItemsDisplayed >= numPages) {
				listStart = (numPages-1) - numListItemsDisplayed
				listEnd = numPages-1
			}
		}
	}
	$: displayPageArr = numPagesArr.slice(listStart, listEnd)

</script>

<nav>
	<ul class="pagination">
		{#if page > 4}
			<li on:click={() => {page = 1}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/></svg></li>
			<li on:click={() => {page-=1}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/></svg></li>
		{/if}
		{#each displayPageArr as page}
			<li class='{clicked == page ? 'clicked' : ''}' on:click={(e) => {paginate(e)}}>{page}</li>
		{/each}
		{#if page < 5}
			<li on:click={() => {page+=1}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg></li>
			<li on:click={() => {page = numPages}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg></li>
		{/if}
	</ul>
</nav>

<style>
	.clicked {
		font-weight: bold;
		color: white;
		background-color: #212121;
	}
	svg {
		width: 10px;
		height: 10px;
	}
	nav {
		margin: 2em;

	}
	ul.pagination {
		text-align: center;
		list-style-type: none;
	}
	li {
		cursor: pointer;
		display: inline;
		padding: 0.5em 0.75em;
		border: 1px solid #212121;
		border-radius: 10px;
		margin: 0.25rem;
	}
</style>