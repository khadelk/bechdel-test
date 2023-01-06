
export async function GET() {
	// return new Response(JSON.stringify({message: "Hello"}), { status: 200 })
		const res = await fetch(`http://bechdeltest.com/api/v1/getAllMovies`);
	
		const data = await res.json();
		if (res.ok) {
				return new Response(JSON.stringify(
					{body: data}
				), 
				{headers: new Headers({
					'cache-control': 'public, max-age=86400'
				})}
			);
		}
}