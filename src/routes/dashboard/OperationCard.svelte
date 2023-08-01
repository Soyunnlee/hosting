<script>
	import { onDestroy } from "svelte";
	import Speedometer from "svelte-speedometer";

	import { tweened } from "svelte/motion";
	import { Icon, EllipsisHorizontal } from "svelte-hero-icons";

	import Modal from "./Modal.svelte"


	//#region Modal
	let showModal = false;
	//#endregion

	let value = tweened(20);

	setInterval(() => {
		value.set(Math.floor(Math.random() * 100) + 1);
	}, 3000);

	//#Region speedometer color
	const colors = {
		start: "#5DD77C",
		end: "#2999EC",
	};
	//#endregion
</script>

<div>
	<!-- Title -->
	<div class="pt-5 px-4  flex justify-between ">
		<p class="text-sm 2xl:text-xl">Operating rate</p>
		<!-- Btn -->
		<div class="relative inline-flex">
			<!-- alarm Number -->
			<div
				class="absolute -top-2 -left-2 whitespace-nowrap rounded-full bg-red-700 py-1 px-1 text-center text-[0.4rem]  leading-none text-white "
			>
				123
			</div>
			<!-- alarm Icon -->
			<button
				on:click={() => (showModal = true)}
				type="button"
				class="bg-primary hover:bg-primary-600 rounded px-1 py-0 hover:shadow-[4px_4px_4px_-5px_#3b71ca]  duration-150 text-xs border border-gray-800"
			>
				<Icon class="w-6 h-6  text-indigo-700" src={EllipsisHorizontal} />
			</button>
		</div>
	</div>

	<!-- Gauge Chart -->
	<div class=" flex items-center justify-center mt-3 2xl:mt-14">
		<Speedometer
			value={$value}
			segments={1000}
			maxValue="100"
			maxSegmentLabels="4"
			textColor="#8E98A1"
			valueTextFontSize="0"
			ringWidth="30"
			startColor={colors.start}
			endColor={colors.end}
			needleColor="#9CC4CC"
			needleTransitionDuration={500}
			needleTransition="easeLinear"
			width={270}
		/>
	</div>
	<!-- <div>{operationRate} %</div> -->
</div>

<Modal bind:showModal />
