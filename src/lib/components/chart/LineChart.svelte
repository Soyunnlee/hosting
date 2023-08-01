<script>
	import AnimatedLineChart from "./AnimatedLineChart.svelte";
	import dataset from "./data";

	let selectedSeries = dataset[0];

	function select(series) {
		selectedSeries = series;
	}
</script>

<div class=" flex-row flex h-full">
	<!-- Nav -->
	<!-- 22 -->
	<div class="  flex justify-center items-center w-[15%]">
		<!-- <header> -->
		<nav class="flex flex-col space-y-4 px-5 ">
			{#each dataset as series}
				<div class="flex flex-col">
					<button
						on:click|preventDefault={() => select(series)}
						class:selected={series == selectedSeries}
						class="inline-block rounded bg-neutral-800 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
					>
						{series.label}
					</button>
				</div>
			{/each}
		</nav>
		<!-- </header> -->
	</div>
	<!-- Chart -->
	<div class="flex flex-grow py-5 ">
		<img
			src="https://i.esdrop.com/d/f/KRQCESGJO3/mwRodi5aAn.png"
			alt=""
			class="absolute w-[75%] h-[25%] pt-3 pl-0.5"
		/>

		<!-- <div class="absolute border border-red-900">dd</div> -->

		<AnimatedLineChart points={selectedSeries.points} />
	</div>
</div>

<style lang="postcss">
	nav {
		display: flex;
		gap: 0.5rem;
	}

	nav button {
		@apply border border-gray-700;
		/* border: transparent; */
		background: transparent;
		color: #555;
		border-radius: 3px;
		cursor: pointer;
		padding: 6px 10px;
	}

	nav button.selected {
		@apply bg-black;
		/* background: #9f9ad9; */
		color: #fff;
	}
</style>
