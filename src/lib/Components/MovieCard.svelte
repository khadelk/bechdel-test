<script>
	export let movie;
</script>

<div class="movie-card">
	<a href={"/movie/"+movie.imdbid}> 
		<img src={"https://image.tmdb.org/t/p/w400" + movie.poster_path} alt="{movie.title}">
	</a>
</div>

<style>
	.movie-card {

	}
</style>