<script>
	import Nav from '$lib/Components/Nav.svelte'
</script>
<section class="heading">
	<Nav />
	
	<header>
		<h1>the bechdel test</h1>
		<div class="def">
			/bech·del test/ n.
			<ol>
				<li>1. It has to have at least two [named] women in it</li>
				<li>2. Who talk to each other</li>
				<li>3. About something besides a man</li>
			</ol>
		</div>
		
	</header>
</section>

<style>
	:global(h1) {
		font-family: 'Futura';
		color: #212121;
	}
	:global(section, p, div) {
		font-family: 'Open Sans', sans-serif;
	}
	.heading {
		color: #212121;
		margin: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

	}

	@media only screen and (min-width: 624px) {
		.heading {
			height: 30vh;
		}
		h1 {
			font-size: 4rem;
		}
	}
	@media only screen and (min-width: 1400px) {
		.heading {
			margin: 1rem;
		}
	}
	h1 {
		font-family: 'Futura';
		
		text-align: center;
		margin: 2rem 0;
	}
	header {
		text-align: center;
	}
	ol li {
		list-style: none;
	}
	
</style>

<slot></slot>