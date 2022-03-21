<script context="module">
    // wait for the data to become available before we do anything with it
    export async function load({fetch}) {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/tt10838180?api_key=12b43b9b8cd57e50b2441beea35b44b8`
        );
        const data = await res.json();
        // console.log(data);
        if(res.ok) {
            console.log(data)
            return {
                props: {data}
            };
        }
    }
</script>

<script>
    export let data;
	export let popular;
	//https://api.themoviedb.org/3/movie/10838180?api_key=12b43b9b8cd57e50b2441beea35b44b8
	// https://imdb-api.com/en/API/Title/k_qn0y4z9m/tt10838180/
	import { bechdelData } from '$lib/stores'
	// console.log($bechdelData)
    // console.log(data.title);

	let getRecentMovies = () => {
		const max = 5
	}
</script>