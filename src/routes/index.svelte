

<script>
	import { bechdelData } from '$lib/stores.js'
	import Header from '$lib/Components/Header.svelte'
	import Search from '$lib/Components/Search.svelte'
	import RecentMovies from '$lib/Components/RecentMovies.svelte'

	let popular

	console.log(popular)
	// console.log($bechdelData)

</script>

<Header />

<Search />

<RecentMovies {popular} />