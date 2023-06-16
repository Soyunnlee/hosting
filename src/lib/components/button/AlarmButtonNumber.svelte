<script lang="ts">
	//#region Import
	import { Icon, EllipsisHorizontal } from 'svelte-hero-icons';
	//#endregion

	export let abnormalCount: number;
</script>

<button type="button" class="relative">
	<div
		class="absolute -left-2 -top-1 inline-flex items-center justify-center rounded bg-red-700 px-0.5 py-0.5 text-xs leading-none text-white"
	>
		{abnormalCount}
	</div>

	<div class="rounded border border-gray-700 px-1.5 py-0.5">
		<Icon class="h-6 w-6  text-indigo-500 " src={EllipsisHorizontal} />
	</div>
</button>
