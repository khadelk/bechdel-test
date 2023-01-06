	// wait for the data to become available before we do anything with it
	export async function load({fetch, params}) {
		const fetchMovie = async() => {
			const res = await fetch(
				`../api/movie/${params.id}`
			);
			const data = await res.json();
			if(res.ok) {
					return data;
			}
		}
		return {
			movie: fetchMovie()
		}
	}