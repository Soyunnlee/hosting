<!-- https://github.com/beyonk-adventures/svelte-datepicker#svelte-kit-support svelte kit config 오류 확인 필요  -->
<script lang="ts">
	//#region import
	import DatePicker from '@roylabs/svelte-datepicker-ts/src/components/DatePicker.svelte';
	import { CalendarStyle } from './rangeCalendarStyle';
	import type { Dayjs } from 'dayjs';
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';
	//#endregion

	//#region Variable _ Style
	const calendarStyle = new CalendarStyle();
	const style = {
		btn: `bg-[#131316] border border-[#434346] rounded-md focus:border-transparent focus:ring-1 focus:ring-[#3D3C41] pl-4 py-1 text-white 2xl:text-xl 2xl:py-1.5 `
	};
	//#endregion

	//#region property
	// 오늘 자정 00
	export let from: Dayjs;
	// 다음날 자정 00
	export let to: Dayjs;
	export let onRangeSelect: (beginDate: Date, endDate: Date) => void;
	//#endregion

	//#region global variable
	let selected: Dayjs[] = [from, to];
	//#endregion

	//#region reactivity
	$: {
		selected[0] = from;
		selected[1] = to;
	}
	//#endregion

	//#region function
	function onChnage() {
		from = selected[0];
		to = selected[1];
		onRangeSelect(from.toDate(), to.toDate());
	}

	//#endregion

	//#region mount
	onMount(() => {
		dayjs.locale('ko');
	});
	//#endregion
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<DatePicker styling={calendarStyle} range={true} time={true} bind:selected on:change={onChnage}>
	<button type="button" class={style.btn} style="padding-left: 0;">
		<div class="flex items-center justify-center divide-x divide-gray-600">
			<span class="px-2 text-gray-100 xl:px-3">
				<!-- Icon -->
				<img
					src="https://i.esdrop.com/d/f/KRQCESGJO3/v7ZUt823Rd.png"
					alt=""
					class="h-4 w-4 2xl:h-5 2xl:w-5"
				/>
			</span>
			<span class="px-2 xl:px-4 2xl:text-lg">
				{'기간 선택'}
			</span>
		</div>
	</button>
</DatePicker>

<style>
</style>
