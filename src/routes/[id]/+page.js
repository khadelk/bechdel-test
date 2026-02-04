	// wait for the data to become available before we do anything with it
	import json from '../../lib/combined.json'

	export async function load({params}) {

		let movie = json.find((data) => {
			return data.imdbid == params.id.toString();
		});

		return {
			movie: movie
		}
	}