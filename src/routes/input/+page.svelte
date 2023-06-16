<script script lang="ts">
	//#region Import

	import LabelInput from '$lib/components/input/LabelInput.svelte';

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
		<LabelInput
			type="password"
			style=""
			inputName=""
			placeholder=""
			onChange={(value) => {
				console.log(value);
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
