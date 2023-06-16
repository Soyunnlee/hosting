<script lang="ts">
	//#region Import
	import { onMount } from 'svelte';
	//#endregion

	//#region Global Variable
	let date: Date = new Date();
	let dayOrNight: string = 'AM';
	//#endregion

	//#region Reactive Block
	$: hour = date.getHours();
	$: min = String(date.getMinutes()).padStart(2, '0');
	//#endregion

	//#region  Init
	onMount(() => {
		setInterval(() => {
			date = new Date();
			dayOrNight = hour >= 12 ? 'PM' : 'AM';
		}, 1000);
	});
	//#endregion
</script>

<div class="text-xl text-gray-400">
	{hour} : {min} : {dayOrNight}
</div>
