<script>
	import * as d3 from 'd3';
	import { scaleBand, scaleLinear, max } from 'd3';

	const height = 500;
	const width = 500;
	const margin = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 20
	}
	const barWidth=100;

	let tooltipPositionX = 0;
	let tooltipPositionY = 0;

	const handleMouseEnter = (event) => {
		const tooltipText = document.getElementById('rating');
		tooltipText.style.left = event.clientX + 'px';
		tooltipText.style.top = event.clientY + 'px';
		tooltipText.style.opacity = '100';
		console.log(tooltipText);
	}

	const handleMouseLeave = (event) => {
		const tooltipText = document.getElementById('rating');
		tooltipText.style.opacity = '0';
	}

</script>

<div id="rating" class="tooltip">
	hello
</div>

<svg width=1000 height={height}>
	<g>
		<rect
			class="bar"
			x=15
			y={height-100}
			width=50
			height=100
			on:mouseenter={(event) => handleMouseEnter(event)}
			on:mouseleave={(event) => handleMouseLeave(event)}
			>
		</rect>
	</g>
</svg>

<style>
	.bar {
		fill: green;
		transition: fill 0.3s ease-out;
	}
	.bar:hover {
		fill: rgb(127, 201, 127);
	}
	.tooltip {
		position: absolute;
		opacity: 0;
		z-index: 1;
		pointer-events: none;
		background-color:pink;
		transition: opacity 0.3s ease-in;
	}


</style>