<script>
	let testArr = [
		{"foo": 1, "bar": 2}, {"foo": 3, "bar": null}, {"foo": 5, "bar": 6}, {"foo": 7, "bar": null},
		{"foo": 9, "bar": 10}, {"foo": 11, "bar": null}, {"foo": 13, "bar": 14}, {"foo": 15, "bar": null},
		{"foo": 17, "bar": 18}, {"foo": 19, "bar": null}, {"foo": 21, "bar": 22}, {"foo": 23, "bar": null}
	]

	function getRandom(arr, n) {
		var result = new Array(n),
		len = arr.length,
		taken = new Array(len);
		if (n > len)
		throw new RangeError("getRandom: more elements taken than available");
		while (n--) {
			var x = Math.floor(Math.random() * len);
			result[n] = arr[x in taken ? taken[x] : x];
			taken[x] = --len in taken ? taken[len] : len;
		}
		return result;
	}

	function getRandomObj(arr, n) {
		// generate empty array
		// let count = 0
		let result = new Array(n),
		len = arr.length,
		taken = new Array(len);
		console.log(taken)
		if (n > len) {
			throw new RangeError("getRandom: more elements taken than available");
		}
		while (n--) {
			let x = Math.floor(Math.random() * len);
			if (x in taken) {
				if (arr[taken[x]].bar != null) {
					result[n] = arr[taken[x]]
					// count++
					n++
				}
			} else {
				if (arr[x].bar != null) {
					result[n] = arr[x]
					// count++
					n++
				}
			}
			if (--len in taken) {
				taken[x] = taken[len]
			} else {
				taken[x] = len 
			}
		}
		console.log(result)
		return result
	}


	function getRandomItem(arr) {
		let len = arr.length;
		let x = Math.floor(Math.random() * len)
		if (arr[x].bar) {
			return arr[x]
		} else {
			console.log(arr[x])
			return null
		}
	}

	function getRandomObjects(arr, n) {
		let newArr = []
		let len = arr.length;
		while (n--) {
			let x = Math.floor(Math.random() * len)
			if (arr[x].bar !== null) {
				newArr = [...newArr, arr[x]]
			} else {
				n++
			}
		}
		return newArr
	}

	console.log(getRandomObjects(testArr, 5));



</script>