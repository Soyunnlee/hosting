<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import { Icon, WrenchScrewdriver } from "svelte-hero-icons";

	let operationState = 0;

	//#region Clock
	let date = new Date();
	$: hour = date.getHours();
	$: min = String(date.getMinutes()).padStart(2, "0");
	let dayOrNight = "AM";
	let getDay: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	onMount(() => {
		setInterval(() => {
			date = new Date();
			dayOrNight = hour >= 12 ? "PM" : "AM";
		}, 1000);
	});

	//#endregion

	// TODO 서버 API 기능 구현 필요

	const checkIsOperate = (operationState: number): string => {
		switch (operationState) {
			case 0:
				return "정지";
			case 1:
				return "작동중";
			case 2:
				return "에러";
			default:
				return "";
		}
	};

	$: isOperate = checkIsOperate(operationState);

	setInterval(() => {
		operationState = (operationState + 1) % 3;
	}, 3000);
</script>

<div class="h-full flex flex-col items-center justify-center 2xl:block 2xl:mt-10">
	<div class="flex py-5 items-center justify-center ">
		<!-- 로봇상태 아이콘-->
		<article>
			<div class="pl-3">
				{#if operationState === 0}
					<img
						class="2xl:w-20 2xl:h-20 w-14 h-14"
						src="https://i.esdrop.com/d/f/KRQCESGJO3/nSgvyo1qfA.png"
						alt=""
					/>
				{:else if operationState === 1}
					<div class="">
						<div
							class=" rounded-md h-14 w-14 items-center justify-center flex border border-[#28AEF3] bg-opacity-10 bg-[#28AEF3] 2xl:w-20 2xl:h-20 "
						>
							<Icon class="w-9 text-[#28AEF3] 2xl:w-12" src={WrenchScrewdriver} />
							<div class="absolute -mt-12 ml-14 2xl:ml-[4.7rem] 2xl:-mt-20">
								<span class="t-3 relative flex h-3 w-3 2xl:h-4 2xl:w-4 ">
									<span
										class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"
									/>
									<span
										class="relative inline-flex h-3 w-3 2xl:h-4 2xl:w-4 rounded-full bg-sky-500"
									/>
								</span>
							</div>
						</div>
					</div>
				{:else}
					<img
						class="2xl:w-20 2xl:h-20 animate-pulse w-14 h-14"
						src="https://i.esdrop.com/d/f/KRQCESGJO3/1I1evQ5nS7.png"
						alt=""
					/>
				{/if}
			</div>
		</article>
		<!-- 로봇상태 텍스트 -->
		<p class="ml-6 text-base text-white 2xl:leading-[2.2rem] 2xl:ml-9 ">
			<span class="text-gray-500 2xl:text-xl">Robot#1</span>
			<br />
			<!-- w-[65px] 2xl:w-[130px]  -->
			<span
				class="text-2xl block 2xl:text-5xl {operationState === 0
					? 'text-[#FFC700]'
					: operationState === 1
					? 'text-white'
					: 'text-[#E81542]'}">{isOperate}</span
			>
			<!-- {isOperate} -->
		</p>
	</div>
	<!-- Clock -->
	<div class="p-3 space-y-1 text-gray-400 flex flex-col items-center 2xl:mt-4">
		<div class="text-sm 2xl:text-2xl ">
			{date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
			{getDay[date.getDay()]}
		</div>
		<div class="text-5xl 2xl:text-7xl  max-w-max">
			{hour} : {min}
			<div class=" flex flex-row-reverse text-xs relative left-2 -top-[0.35rem] 2xl:text-sm">
				{dayOrNight}
			</div>
		</div>
	</div>
</div>
