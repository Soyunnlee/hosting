<script lang="ts">
	//#region import
	import Speedometer from 'svelte-speedometer';
	//#endregion

	//#region constant
	//#endregion
	//#region property
	export let textColor: string;
	export let value: number;
	// 게이지 차트 상의 라벨 갯 수
	export let maxSegmentLabels: string;
	// 게이지 차트 내부 segment 수
	export let segments: number;
	export let maxValue: number;
	export let minValue: number;
	export let valueTextFontSize: string;
	export let width: number;
	// 게이지 차트 두께
	export let ringWidth: number;
	//#endregion

	//#region reactivity
	$: value;
	//#endregion
</script>

<div>
	<Speedometer
		{value}
		{maxSegmentLabels}
		{maxValue}
		{minValue}
		{segments}
		{textColor}
		{valueTextFontSize}
		{width}
		{ringWidth}
	/>
</div>
