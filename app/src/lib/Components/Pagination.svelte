<script>
	import { filteredData } from '$lib/stores';
	$: numItemsInData = $filteredData.length;
	$: numItemsOnEachPage = 20;
	$: numPages = numItemsInData / numItemsOnEachPage;

</script>

<nav>
	<ul>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</nav>