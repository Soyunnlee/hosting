<script>
	import { tweened } from "svelte/motion";
	import * as d3 from "d3-interpolate";
	import { circInOut as easing } from "svelte/easing";

	export let points = [];

	// animated copy of points
	let animatedPoints = tweened(points, {
		interpolate: d3.interpolateArray,
		duration: 700,
		easing,
	});

	// amount of space between each point on x-axis
	// const spacing = 60;
	const spacing = 36;

	// compute dimensions
	$: dimensions = {
		width: (points.length - 1) * spacing,
		height: Math.max(...points, 145),
	};

	// when points change, trigger the animation
	$: animatedPoints.set(points);

	// create a string of all points in format "X0 Y0, X1 Y1, ... Xn Yn"
	$: linePoints = $animatedPoints
		.map((y, index) => `${index * spacing} ${(dimensions.height - y).toFixed(2)}`)
		.join(", ");

	$: backgroundPath =
		`M0,${dimensions.height} ` +
		$animatedPoints
			.map((y, index) => `L${index * spacing},${(dimensions.height - y).toFixed(2)}`)
			.join(" ") +
		` L${(points.length - 1) * spacing},${dimensions.height} Z`;
</script>

<!-- generate SVG -->
<svg viewBox="0 0 {dimensions.width} {dimensions.height}" class="bg-[#0C0C0E] rounded">
	<defs>
		<linearGradient id="gradient" gradientTransform="rotate(90)">
			<stop offset="5%" stop-color="#fff8" />
			<stop offset="95%" stop-color="#fff0" />
		</linearGradient>
	</defs>

	<path d={backgroundPath} fill="url(#gradient)" />
	<polyline points={linePoints} />
</svg>

<!-- for debugging -->
<!-- <pre>linePoints = "{linePoints}"</pre> -->

<!-- <pre >backgroundPath = "{backgroundPath}"</pre> -->
<style lang="postcss">
	svg {
		@apply w-full;
		padding: 2rem 0;
		/* border-radius: 0.75rem; */
		overflow: visible;
	}
	polyline {
		fill: none;
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 1.5px;
		stroke: #fffa;
	}
	path {
		stroke: none;
	}
	pre {
		display: inline-block;
		background: white;
		padding: 0.5rem;
		border-radius: 5px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 100%;
		margin: 5px 0 0 0;
	}
</style>
