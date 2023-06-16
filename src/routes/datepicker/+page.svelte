<script script lang="ts">
	//#region Import

	import DatePicker from '$lib/components/datepicker/DatePicker.svelte';
	import RangePicker from '$lib/components/datepicker/RangePicker.svelte';
	import dayjs from 'dayjs';

	//#endregion

	//#region Property
	// #endregion

	// #region Variable
	// #endregion

	// #region Function
	//#endregion
</script>

<svelte:head>
	<title>API</title>
</svelte:head>

<article class="contianer grid bg-white">
	<div class="row-span-1">
		{'Component'}
		<DatePicker
			onDateSelect={(periodType, beginDate, endDate) => {
				console.log(periodType, beginDate, endDate);
			}}
		/>
		<RangePicker
			from={dayjs()}
			to={dayjs()}
			onRangeSelect={(beginDate, endDate) => {
				console.log(beginDate, endDate);
			}}
		/>
	</div>
	<div class="row-span-1">
		{'Component Source'}
	</div>
	<div class="row-span-1">
		{'Component Explanation'}
	</div>
</article>
