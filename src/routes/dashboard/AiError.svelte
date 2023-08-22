<script>
	//#region Import
	import BlinkEffect from '$lib/components/BlinkEffect.svelte';
	import ChartTitle from '$lib/components/ChartTitle.svelte';
	//#endregion
	import { LinkedChart, LinkedLabel, LinkedValue } from 'svelte-tiny-linked-charts';

	let data = {
		'2005-01-01': 25,
		'2005-01-02': 20,
		'2005-01-03': 18,
		'2005-01-04': 17,
		'2005-01-05': 80,
		'2005-01-06': 17,
		'2005-01-07': 30,
		'2005-01-08': 40,
		'2005-01-09': 60,
		'2005-01-10': 70
	};

	let values = [25, 20, 18, 17, 21];
</script>

<div class="flex flex-col">
	<!-- Title -->
	<div class="flex-none">
		<ChartTitle title="AI 이상감지" />
	</div>

	<div class="flex flex-row h-full items-center py-3.5">
		<!-- Error Rotate Section -->
		<div class="w-40 space-y-4 2xl:space-y-10">
			<!--오차율 -->
			<div class="flex flex-col items-center justify-end">
				<div class="flex items-center justify-start w-[5.5rem]">
					<BlinkEffect ErrorState="Nomal" />
					<span class="text-white ml-4">오차율</span>
				</div>
				<div
					class="rounded border py-1 px-3 border-[#28AEF3] bg-[#28AEF3] bg-opacity-10 text-[#28AEF3] mt-3 text-sm 2xl:text-base 2xl:mt-4"
				>
					19%
					<!-- <LossCard chartName="Loss" /> -->
				</div>
			</div>

			<!-- 평균오차 -->
			<div class="flex flex-col items-center justify-start">
				<div class="flex justify-start items-center w-[5.5rem]">
					<!-- Blink Icon -->
					<BlinkEffect ErrorState="Error" />
					<span class="text-white ml-4">평균오차</span>
				</div>
				<div
					class="rounded border py-1 px-3 border-[#FF0909] bg-[#FF0909] bg-opacity-10 text-[#FF0909] mt-3 text-sm 2xl:text-base 2xl:mt-4"
				>
					19%
					<!-- <LossCard chartName="Loss" /> -->
				</div>
			</div>
		</div>

		<!-- 차트영역 -->
		<div class="flex-grow h-full border">
			<!-- Chart 영역 -->
			<!-- <LinkedChart {data} type="line" lineColor="#4355db" fill="var(--text-color)" {values} /> -->
			<LinkedChart type="line" lineColor="#4355db" fill="var(--text-color)" {data} />
		</div>
	</div>
</div>
