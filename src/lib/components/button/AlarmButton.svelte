<script lang="ts">
	//#region Import
	import { Icon, Bars3 } from 'svelte-hero-icons';
	//#endregion
</script>

<button type="button" class="relative">
	<div class="absolute -left-1 -top-0.5 rounded-full bg-red-700 px-1 py-1" />

	<div class="rounded border border-gray-700 px-2 py-0.5">
		<Icon class="h-6 w-5 stroke-2 text-indigo-600 2xl:h-7 2xl:w-8" src={Bars3} />
	</div>
</button>
