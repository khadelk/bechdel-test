<script context="module">
    // wait for the data to become available before we do anything with it
    export async function load({fetch, params}) {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/tt${params.id}?api_key=12b43b9b8cd57e50b2441beea35b44b8`
        );
        const data = await res.json();
        // console.log(data);
        if(res.ok) {
            return {
                props: { title: data.title }
            };
        }
    }
</script>

<script>
    export let title

</script>

<h1> {title} </h1>