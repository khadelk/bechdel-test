<script>
	import Movies from '$lib/Components/Movies.svelte';
	export let data;
	let allMovies = data.bechdel;

	let start = 0;
	let end = 16;

	let reversedMovies = allMovies.reverse();
	let movies = reversedMovies.slice(start, end);
	console.log(movies);

	let i = 0;
	let movieData = [];

	const fetchMovies = async () => {
		while (movieData.length < 16) {
			const movie = allMovies[i];
			const imdbid = movie.imdbid;
			if (imdbid) {
				const res = await fetch(
					`https://api.themoviedb.org/3/movie/tt${imdbid}?api_key=12b43b9b8cd57e50b2441beea35b44b8`
				);
				if (res.ok) {
					const d = await res.json();
					const newObj = {};
					newObj['bechdel_rating'] = movie.rating;
					movieData.push(newObj);
				}
				i++;
			}
		}
	};
	fetchMovies();
</script>

<!-- <Movies {movies} /> -->

<!-- <Pagination bind:start bind:end /> -->
