<script context="module">
    // wait for the data to become available before we do anything with it
    export async function load({fetch, params}) {
        const res = await fetch(
            `http://localhost:3000/api/movie/${params.id}.json`
        );
        const data = await res.json();
        if(res.ok) {
            return {
                props: { movie: data }
            };
        }
    }
</script>

<script>
    export let movie;
    import { bechdelData } from '$lib/stores'

    let bechdelMovie = $bechdelData.filter(data => {
        return data.imdbid == movie.imdb_id.slice(2);
    })

    let bechdelRating = bechdelMovie[0].rating
</script>


<div class="movie-info" style='background-image: linear-gradient(#e6646580, #9198e580), url("{"https://image.tmdb.org/t/p/original"+movie.backdrop_path}")'>
    <div class="col-1">
            <img class="movie-poster" src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt="{movie.title}">
    </div>
    
    <div class="col-2">
        <div class="col-2-container">
    <h1> {movie.title} </h1>
    <div>The Bechdel Rating for <em> {movie.title} </em> is {bechdelRating}</div>
    <ul>
        <li>
            <div class="rating">
                <span>
                    {#if bechdelRating >= 1}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/></svg>                
                    {/if}
                </span>
                <p>There are at least two [named] women in this movie... </p>
            </div>     
        </li>
        <li>
            <div class="rating">
                <span>
                    {#if bechdelRating >= 2}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/></svg>
                    {/if}
                </span>
                <p>...Who talk to each other...</p>
            </div>
        </li>
        <li>
            <div class="rating">
                <span>
                    {#if bechdelRating == 3}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/></svg>
                    {/if}
                </span>
                <p> ...About something besides a man</p>
            </div>
        </li>
    </ul>
    <div class="button">
        <a href="https://imdb.com/title/{movie.imdb_id}">IMDB page
        </a>
    </div>
</div>
</div>

</div>

<style>
    .button {
		width: min-content;
		align-items: center;
		margin: 0 1rem;
		padding: 0.5rem 1rem;
		background-color: #212121;
		border-radius: 0.4rem;
		transition: 0.5s ease;
		color: white;
		cursor: pointer;
		white-space: nowrap;
    }
    .button a {
        text-decoration: none;
        color: white;
    }
    ul {
        list-style: none;
        padding-left: 0;
    }
    @media only screen and (max-width: 600px) {
        .movie-info {
            text-align: center;
        }
		.movie-poster {
            text-align: center;
            width: 30%;
            
        }
	}
    @media only screen and (min-width: 800px) {
		.movie-poster {
            width: 80%;
        }
	}
    @media only screen and (min-width: 601px) {
		.movie-info {
            display: grid;
            grid-template-columns: 1fr 2fr;
            align-items: center;
            justify-content: space-around;
            height: 80vh;
        }
        .col-1 {
            text-align: right;
        }
	}

    .movie-info {
        height: 80vh;
    }
    
    .col-1 {
        padding-left: 2rem;
    }
    .movie-poster {
        border-radius: 2rem;
    }

    .col-2 {
        padding: 2rem;
        /* min-width: min-content; */
    }
    .col-2-container {
        min-width: min-content;
        max-width: 80%;
        background-color: rgb(247, 196, 205, 0.9);
        padding: 2rem;
    }
    
    .rating {
        display:flex;
        align-items: center;
    }
    svg {
        width: 25px;
        height: 25px;
    }
</style>