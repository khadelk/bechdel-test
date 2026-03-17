<script>
  import '$lib/styles/global.scss'
  import 'normalize.css'
  // import Nav from '$lib/Components/Nav.svelte';
  import '@fontsource/montserrat'
</script>

<svelte:head>
  <title>Bechdel Test</title>
</svelte:head>

<slot></slot>

<!-- <header>
<section class="heading">
	
	</section>
</header> -->

<style>
  :global(h1) {
    font-family: 'Futura';
    color: #212121;
  }
  :global(section, p, div) {
    font-family: 'Open Sans', sans-serif;
  }
  /* header {
		margin: 1rem;
		text-align: center;
	}
	.heading {
		height: min-content;
		color: #212121;
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
	} */
</style>
