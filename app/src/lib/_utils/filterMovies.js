// function getRandom(arr, n) {
// 	var result = new Array(n),
// 	len = arr.length,
// 	taken = new Array(len);
// 	if (n > len)
// 	throw new RangeError("getRandom: more elements taken than available");
// 	while (n--) {
// 		var x = Math.floor(Math.random() * len);
// 		if (x in taken) {
// 			console.log(x)
// 			if (arr[taken[x]].backdrop_path !== null && !(arr[taken[x]].status_code)) {
// 				result[n] = arr[taken[x]]
// 			}
// 		} else if (arr[x].backdrop_path !== null && !(arr[x].status_code)) {
// 			result[n] = arr[x]
// 		} else {
// 			n++
// 		}
// 		taken[x] = --len in taken ? taken[len] : len;
// 	}
// 	return result;
// }


// export default function filterMovies(movieData) {
// 	return getRandom(movieData, movieData.length)
// }