<script>
	let clicked = 'Movies';
</script>

<nav>
	<ul>
		<li on:click={() => clicked = 'Movies'} class="{clicked == 'Movies' ? 'selected' : ''}">
			<a href="./">Movies</a>
		</li>
		<li on:click={() => clicked = 'About'} class="{clicked == 'About' ? 'selected' : ''}">
			<a href="./about">About the test</a>
		</li>
		<li on:click={() => clicked = 'Data'} class="{clicked == 'Data' ? 'selected' : ''}">
			<a href="./data">Data</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		border: 1px solid #212121;
		border-radius: 0.5rem;
	}
	nav ul {
		display: flex;
		justify-content: space-between;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	nav ul li {
		padding: 0.5rem 1rem;
	}
	li.selected {
		background-color: #212121;
		border-radius: 0.4rem;
		transition: 0.5s ease;
	}
	.selected a {
		color: white;
	}
	nav ul li a {
		color: black;
		text-decoration: none;
	}
</style>