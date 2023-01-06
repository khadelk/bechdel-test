export async function GET({ params }) {
	const res = await fetch(`https://api.themoviedb.org/3/movie/tt${params.movie}?api_key=12b43b9b8cd57e50b2441beea35b44b8`);
	
	const data = await res.json();
	if (res.ok) {
			return new Response(JSON.stringify(
				{body: data}
			))
	}
}