<script>
	function clickOutside(element, callbackFunction) {
		function onClick(event) {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		}
		
		document.body.addEventListener('click', onClick);
		
		return {
			update(newCallbackFunction) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		}
	}
	let showSearch = false;
</script>

<body>
{#if showSearch}
	<div class="modal"
			use:clickOutside={() => {
				console.log('clicked outside');
				showSearch = false;
			}}>
		Some Modal
	</div>
{:else}
	<button on:click={(event) => {
		showSearch = true;
		event.stopPropagation();
	}}>Open Modal</button>
{/if}
</body>

<style>
	body {
		height: 1vw;
	}
	.modal {
		padding: 16px;
		border: 1px solid black;
	}
</style>