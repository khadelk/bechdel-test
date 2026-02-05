<script>
	import Nav from '$lib/Components/Nav.svelte';
	import "@fontsource/montserrat";
	
</script>
<svelte:head>
	<title>
		Bechdel Test
	</title>
</svelte:head>
<header>
<section class="heading">
	<Nav />
	<h1>The Bechdel Test</h1>
	<div class="def">
		To pass the Bechdel test, a film must contain at least two named women characters who talk to each other about something other than a man. <br>
		A red "X"
		<svg class="x-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/></svg>
		indicates a movie doesn't pass the Bechdel test and a green checkmark
		<svg class="check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/></svg>
		indicates the movie passes the test.
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
	.x-circle {
		z-index:2;
		width: 16px;
		height: 16px;
		fill: red;
		position: relative;
		top: 1.5px;
	}
	.check-circle {
		z-index:2;
		width: 16px;
		height: 16px;
		fill: rgb(44, 194, 44);
		position: relative;
		top: 1.5px;
	}

</style>

<slot></slot>