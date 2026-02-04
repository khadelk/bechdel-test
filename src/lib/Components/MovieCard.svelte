<script>
	export let movie;
</script>

{#if movie.poster_path != null}
<div class="container">
	<div class="movie-card">
		<svg class="black-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"/></svg>
		{#if movie.rating < 3}
			<svg class="x-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/></svg>
		{:else}
			<svg class="check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/></svg>
		{/if}
		<a href="/{movie?.imdbid}"> 
		<div class="color-overlay">
			<div class="text-overlay">
				<div class="movie-title"> {movie.title} passes {movie.rating}/3 tests </div>
			</div>
		</div>
			<img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt="{movie.title}" title="Test">
		</a>
	</div>
</div>
{/if}

<style>
	.check-circle {
		z-index:2;
		width: 48px;
		height: 48px;
		fill: rgb(44, 194, 44);
		position: absolute;
		right: -16px;
		top: -16px;
	}
	.black-circle {
		z-index:1;
		width: 48px;
		height: 48px;
		fill: white;
		position: absolute;
		right: -16px;
		top: -16px;
	}
	.x-circle {
		z-index:2;
		width: 48px;
		height: 48px;
		fill: red;
		position: absolute;
		right: -16px;
		top: -16px;
	}
	.container {
		padding: 1rem;
	}
	.movie-card {
		position: relative;
	}
	.movie-title {
		white-space: normal
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