<script>
	import { bechdelData } from '$lib/stores'
	export let movie;
	let imdb_id = movie?.imdb_id?.slice(2);

	let bechdelMovie = $bechdelData.filter(data => {
        return data.imdbid == movie.imdb_id.slice(2);
    })

	let bechdelRating = bechdelMovie[0].rating;

</script>

<!-- <div class="test">
	Hello
</div> -->

{#if movie.poster_path != null}
<div class="container">
	<div class="movie-card">
		<a href="/{imdb_id}"> 
		<div class="color-overlay">
			<div class="text-overlay">
				Bechdel Rating: {bechdelRating}
			</div>
		</div>
		
			<img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt="{movie.title}" title="Test">
		</a>
	
	</div>
</div>
{/if}


<style>
	.container {
		padding: 1rem;
	}
	.movie-card {
		position: relative;
	}
	img {
		display: block;
		border-radius: 1rem;
		width: 100%;
		padding: 0;
		margin: 0;
	}
	.color-overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;
		opacity: 0;
		transition: .5s ease;
		background: linear-gradient(#e66465, #9198e5);
		/* background-color: black; */
	}
	.movie-card:hover .color-overlay {
		opacity: 0.9;
		border-radius: 1rem;
	}
	.text-overlay {
		opacity: 1;
		white-space: nowrap;
		color: white;
		font-size: 20px;
		font-weight: 800;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
	}
	.text-overlay:hover {
		opacity:1;
	}

</style>