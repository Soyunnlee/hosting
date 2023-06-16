<script lang="ts">
	import type { ThresholdInformationItems } from './../../api/http/master/schema';
	//#region Import
	import { onDestroy, onMount } from 'svelte';
	import { SciChartSurface, Thickness } from 'scichart';

	import {
		type IInitSciChartParams,
		type IDataFormat,
		initSciChart,
		updateLineChart
	} from '$lib/util/scichart';
	import { scichart2022Theme } from './style/theme';
	import type { ISingleChartParams } from './style/schema';
	import { ALARM_FLAG } from '../chart/store';
	//#endregion

	//#region Global Variable
	let sciChartSurface: SciChartSurface;
	//#endregion

	//#region Property
	export let chartStyle: ISingleChartParams;
	export let dataSource: IDataFormat[];
	export let thresholdInfo: ThresholdInformationItems;
	//#endregion

	//#region Reactivity
	$: {
		if (dataSource && dataSource.length > 0) {
			updateLineChart(
				dataSource,
				sciChartSurface,
				chartStyle.xRange as number,
				chartStyle.interval as number,
				thresholdInfo.look_count,
				$ALARM_FLAG[chartStyle.dataName as string].mark
			);
			$ALARM_FLAG[chartStyle.dataName as string].mark = false;
		}
	}
	//#endregion

	//#region onMount
	onMount(async () => {
		// initChart
		const initSciChartParams: IInitSciChartParams = {
			...chartStyle,
			chartName: chartStyle.chartName.replaceAll(' ', '_'), //tagId에 공백 포함 시 오류 발생
			dataSeriesName: chartStyle.dataName,
			theme: scichart2022Theme,
			padding: new Thickness(4, 0, 2, -2),
			yRange: thresholdInfo.max_mean_value * 1.5,
			warningHighValue: thresholdInfo.max_mean_value
		};

		sciChartSurface = await initSciChart(initSciChartParams);
	});
	//#endregion

	//#region onDestroy
	onDestroy(() => {
		//SciChart Instance Release
		if (sciChartSurface) sciChartSurface.delete();
	});
	//#endregion
</script>

<div class="relative h-full w-full">
	<!-- Error Effect -->
	{#if $ALARM_FLAG[chartStyle.chartName].alarm}
		<div
			class=" absolute z-10 flex h-full w-full animate-pulse justify-end shadow-[inset_0_0_10px_#FF0000] 2xl:shadow-[inset_0_0_18px_#FF0000]"
		>
			<div class="text-yellow-700 2xl:text-xl">이상감지</div>
		</div>
	{/if}

	<div class="h-full w-full" id={chartStyle.chartName.replaceAll(' ', '_')} />
</div>
