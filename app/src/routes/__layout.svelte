<script>
	import Nav from '$lib/Components/Nav.svelte';
	import "@fontsource/montserrat";
	
</script>

<header>
<section class="heading">
	<Nav />
	<h1>The Bechdel Test</h1>
	<div class="def">
		To pass the Bechdel test, a film must contain at least two named women characters who talk to each other about something other than a man. <br>
		A red "X" indicates a movie doesn't pass the Bechdel test and a green checkmark indicates the movie passes the test.
	</div>
	</section>
</header>

<style>
	:global(h1) {
		font-family: 'Futura';
		color: #212121;
	}
	:global(section, p, div) {
		font-family: 'Open Sans', sans-serif;
	}
	header {
		margin: 1rem;
	}
	.heading {
		height: min-content;
		color: #212121;
		/* margin: 2rem; */
		display: flex;
		flex-direction: column;
		flex-flow: column;
		align-items: center;
		justify-content: center;
	}
	@media only screen and (min-width: 624px) {
		h1 {
			font-size: 4rem;
		}
	}
	h1 {
		font-family: 'Futura';
		text-align: center;
		margin: 1rem 0;
	}
	header {
		text-align: center;
	}

</style>

<slot></slot>