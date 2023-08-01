<script lang="ts">
	// import { connectWebSocket } from "$lib/util/websocket";
	// import { onMount } from "svelte";

	interface IMaintenanceData {
		otherData: { battery: number; padLife: number }[];
	}
	$: battery = 100;
	$: padLife = 0;

	let batteryColor: string;
	let padColor: string;

	// TODO 서버 API 기능 구현 필요
	const updateData = (message: MessageEvent) => {
		const receivedData: IMaintenanceData = JSON.parse(message.data);

		// battery = Math.round(receivedData.otherData[0].battery);
		padLife = receivedData.otherData[0].padLife;
		if (bettery > 70) {
			batteryColor = "#73A1E6";
		} else if (bettery > 20) {
			batteryColor = "#DCAB2F";
		} else {
			batteryColor = "#F2242A";
		}
		if (padLife > 1300) {
			padColor = "#F2242A";
		} else if (padLife > 700) {
			padColor = "#73A1E6";
		} else {
			padColor = "#DCAB2F";
		}
	};

	// import { tweened } from "svelte/motion";
	// let value = tweened(20);

	// setInterval(() => {
	// 	value.set(Math.floor(Math.random() * 100 + 1));
	// }, 5000);

	let bettery = 0;
	let toolpad = 0;

	setInterval(() => {
		bettery = Math.floor(Math.random() * 100) + 1;
		if (bettery > 70) {
			batteryColor = "#73A1E6";
		} else if (bettery > 20) {
			batteryColor = "#DCAB2F";
		} else {
			batteryColor = "#F2242A";
		}
		toolpad = Math.floor(Math.random() * 1501);
		if (toolpad > 1300) {
			padColor = "#F2242A";
		} else if (toolpad > 700) {
			padColor = "#73A1E6";
		} else {
			padColor = "#DCAB2F";
		}
	}, 2000);
</script>

<div
	class="h-full text-center text-4xl relative flex justify-center items-center px-7 space-x-5 2xl:space-x-8 2xl:px-9"
>
	<!-- Battery Section -->
	<div
		class="flex flex-col justify-center items-center h-5/6 space-y-3 rounded w-1/2 border-4 2xl:space-y-7 "
		style="border:4px solid {batteryColor}"
	>
		<div>
			{#if bettery > 70}
				<!-- 1 -->
				<img
					src="https://i.esdrop.com/d/f/KRQCESGJO3/2HvN9qn5em.png"
					alt="https://i.esdrop.com/d/f/KRQCESGJO3/2HvN9qn5em.png"
					class="h-11 2xl:h-20"
				/>
			{:else if bettery > 20}
				<!-- else if content here -->
				<!-- 2 -->
				<img
					src="https://i.esdrop.com/d/f/KRQCESGJO3/KqDwbTiDBD.png"
					alt="https://i.esdrop.com/d/f/KRQCESGJO3/KqDwbTiDBD.png"
					class="h-11 2xl:h-20"
				/>
			{:else}
				<!-- 3 -->
				<img
					src="https://i.esdrop.com/d/f/KRQCESGJO3/RPg6JCYVno.png"
					alt="https://i.esdrop.com/d/f/KRQCESGJO3/RPg6JCYVno.png"
					class="h-11 2xl:h-20"
				/>
			{/if}

			<!-- <img
				class="h-11 2xl:h-20"
				src="/icon/battery{bettery > 70 ? 1 : bettery > 20 ? 2 : 3}.png"
				alt="battery"
			/> -->
		</div>
		<div>
			<span class="mt-2 mb-2 2xl:text-6xl text-3xl" style="color:{batteryColor};">
				<!-- {battery.toFixed(0)}% -->
				{bettery} %
			</span>
		</div>
		<div class="text-xs text-gray-500">
			<p>BATTERY</p>
			<p>AVAILABLE</p>
		</div>
	</div>

	<!-- ToolPad Section -->
	<div
		class="flex flex-col justify-center items-center h-5/6 space-y-3 rounded w-1/2 border-4 2xl:space-y-7"
		style=" border:4px solid {padColor}"
	>
		<div>
			{#if toolpad > 1300}
				<!-- content here -->
				<!-- 3 -->
				<img
					src="https://i.esdrop.com/d/f/KRQCESGJO3/zMIPQ7zOLf.png"
					alt="toolpad"
					class="pt-3 h-11 2xl:h-[4.4rem] 2xl:pt-0"
				/>
			{:else if toolpad > 700}
				<!-- else if content here -->
				<!-- 1 -->
				<img
					src="https://i.esdrop.com/d/f/KRQCESGJO3/oF1Jk5Stf4.png"
					alt="toolpad"
					class="pt-3 h-11 2xl:h-[4.4rem] 2xl:pt-0"
				/>
			{:else}
				<!-- else content here -->
				<!-- 2 -->
				<img
					src="https://i.esdrop.com/d/f/KRQCESGJO3/k9ogYiNHTP.png"
					alt="toolpad"
					class="pt-3 h-11 2xl:h-[4.4rem] 2xl:pt-0"
				/>
			{/if}

			<!-- 
			<img
				class="pt-3 h-11 2xl:h-[4.4rem] 2xl:pt-0"
				src="/icon/pad{toolpad > 1300 ? 3 : toolpad > 700 ? 1 : 2}.png"
				alt="toolpad"
			/> -->
		</div>
		<div class="2xl:py-2 whitespace-nowrap">
			<span class="mt-2 mb-2 text-3xl 2xl:text-5xl " style="color:{padColor};">
				<!-- {padLife.toFixed(0)} -->{toolpad}
				<span class="text-base text-gray-500 2xl:text-2xl ">/ 1500</span>
			</span>
		</div>
		<div class="text-xs text-gray-500">
			<p>TOOLPAD</p>
			<p>AVAILABLE</p>
		</div>
	</div>
</div>
