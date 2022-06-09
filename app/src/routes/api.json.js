// import { bechdelData } from "$lib/stores";
// function getRandomNum(len) {
// 	return Math.floor(Math.random() * len)
// }

// async function getData() {
// 	let getMovies = []
// 	let movieInfo = {}
// 	bechdelData.subscribe(value=> {
// 		for (let i = 0; i <= 50; i++) {
// 			let randMovie = value[getRandomNum(value.length)]
// 			getMovie(randMovie.imdbid).then(result => {
// 				if (result != undefined) {
// 					movieInfo = result;
// 					movieInfo.bechdel_id = randMovie.id;
// 					movieInfo.rating = randMovie.rating;
// 					getMovies.push(result)
// 				}
// 			})
// 		}
// 	})
// 	return getMovies
// }
// async function getMovie(movieId) {
// 	const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=12b43b9b8cd57e50b2441beea35b44b8`)
// 	const data = await res.json()
// 	if (res.ok) {
// 		return data;
// 	}
// }
// export async function get() {
// 	const data = await getData()
// 	return {
// 		body: data
// 	}
// 	// try {
// 	// 	const res = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=12b43b9b8cd57e50b2441beea35b44b8`)
// 	// 	const data = await res.json();
// 	// 	if (data)
// 	// 		return {
// 	// 			body: data
// 	// 		}
// 	// } catch(e) {
// 	// 	console.log("Error happened here")
// 	// 	console.log(e)
// 	// }
// }