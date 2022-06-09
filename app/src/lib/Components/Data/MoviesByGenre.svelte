<script>
	import { bechdelData, movieData } from '$lib/stores';
	import { scaleBand, scaleLinear, max } from 'd3';

	let sampleMovieData = $movieData.slice(0,10);
	$: console.log(sampleMovieData);
	let storeGenres = {}

	console.log($movieData)

	$movieData.forEach(movie => {
		if (movie.genres) {
			movie.genres.forEach(genre => {
			if (storeGenres[genre.name] >= 1) {
				storeGenres[genre.name] +=1;
			} else {
				storeGenres[genre.name] = 1;
			}
		})
		}

	})

	$: console.log(storeGenres)

	// get all movie genres

	const height = 500;
	const width = 500;
	const margin = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 20
	}

	let data = [];
	for (let i = 0; i < 4; i++) {
		let count = 0;
		let newObj = {};
		$bechdelData.forEach(movie => {
			if (movie.rating == i) {
				newObj['rating'] = i
				newObj['count'] = count+=1
			}
		})
		data = [...data, newObj]
	}
	const maxCount = max(data.map(d => d.count))
	const maxTick = (maxCount + 500) - (maxCount % 500)
	const yScale = scaleLinear()
		.domain([0, maxTick])
		.range([height-margin.bottom, margin.top]);
	
	const xScale = scaleBand()
		.domain(data.map((d) => d.rating))  
		.range([margin.left, width - margin.right])
		.padding(0.5)
	
	const yTicks = [0]
	let i = 0;
	while (i < maxTick) {
		i += 500;
		yTicks.push(i)
	}

	let tooltipPositionX = 0;
	let tooltipPositionY = 0;

	// TODO: add tooltip!
	const handleMouseOver = (event, dRating) => {
		const tooltipDiv = document.getElementById(`rating-${dRating}`);
		tooltipDiv.style.left = event.clientX + 'px';
		tooltipDiv.style.top = event.clientY + 100 + 'px';
		tooltipDiv.style.opacity = '100';
	}
	const handleMouseLeave = (event, dRating) => {
		const tooltipDiv = document.getElementById(`rating-${dRating}`);
		tooltipDiv.style.opacity = '0';

	}
	const handleFocus = () => {

	};
</script>

<h2>Number of movies by genre</h2>
<!-- Tooltip -->
{#each data as d}
	<div id="rating-{d.rating}" class="tooltip">
		{ d.count } movies
	</div>
{/each}

<svg width={width} height={height+50}>
	{#each yTicks as tick}
	<g class="tick-{tick}" transform="translate(0, {yScale(tick)})">
		<line x2="100%"></line>
		<text>{tick}</text>
	</g>
	{/each}
	
	{#each data as d}
	<!-- X axis -->
	<g  transform="translate({xScale(d.rating)}, {height})">
		<text style="text-anchor: center" x="{(xScale.bandwidth()-4) / 2}">
			{d.rating}
		</text>
	</g>
	<!-- Create bar chart -->
	<g class="rating-{d.rating}">
		<line y2={height}></line>
		<rect
			class="bar"
			x={xScale(d.rating)}
			y={yScale(d.count)}
			width={xScale.bandwidth()}
			height={yScale(0) - yScale(d.count)}
			on:mouseover={(event) => handleMouseOver(event, d.rating)}
			on:mouseleave = {(event) => handleMouseLeave(event, d.rating)}
			on:focus={handleFocus}
		/>
	</g>
	{/each}
</svg>

<style>
	h2 {
		text-align: center;
		margin: auto;
	}
	svg {
		fill: #212121;
		display: block;
		margin: auto;
	}
	.bar {
		fill: #F8C8DC;
		border: 1px solid #cbc9ff;
		transition: fill 0.3s ease-in-out;
		/* stroke: black; */
	}
	.bar:hover {
		fill: #d8d6fc;
		border: 3px solid #bebef6;
	}
	.tooltip {
		position: absolute;
		opacity: 0;
		z-index: 1;
		padding: 0.5rem;
		border-radius: 0.5rem;
		border: 1px solid #212121;
		pointer-events: none;
		background-color:white;
		transition: opacity 0.3s ease-in;
	}
	.tick-0 line {
		stroke: #212121;
		/* z-index: 1; */
	}
	.rating-0 line {
		stroke:#212121;
		stroke-width: 2;
	}
</style>
