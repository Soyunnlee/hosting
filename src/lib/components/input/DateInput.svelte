<script lang="ts">
	//#region import
	import dayjs, { Dayjs } from 'dayjs';
	//#endregion

	//#region Variable_Style
	const style = {
		btn: `border border-[#3E3E41] rounded-md focus:border-transparent focus:ring-1 focus:ring-[#3D3C41] text-white text-sm pr-1 py-0.5  bg-transparent xl:py-0.5 xl:text-base`
	};
	//#endregion

	//#region property
	export let date: Dayjs;
	//#endregion

	//#region global variable
	let format: string = 'YYYY-MM-DD HH:mm';

	let internal: string;
	//#endregion

	//#region function
	const input = (x: string | Dayjs) => (internal = dayjs(x).format(format));
	const output = (x: string) => {
		if (dayjs(x, format).isValid()) {
			date = dayjs(x, format);
		} else {
			input(date);
		}
	};
	//#endregion

	//#region reactivity
	$: {
		input(date);
	}
	$: {
		output(internal);
	}
	//#endregion
</script>

<input class="{style.btn} text-gray-300" type="datetime-local" bind:value={internal} required />

<style>
	input[type='datetime-local']::-webkit-inner-spin-button,
	input[type='datetime-local']::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}
</style>
