<script lang="ts">
	//#region Import
	import { isSlideMenuOpen } from '../provider/store';
	//#endregion
</script>

<div
	class=" sticky top-0 flex h-24 items-center justify-center 2xl:h-28 dark:bg-[#16191E] bg-white"
>
	{#if $isSlideMenuOpen}
		<!-- Slide Menu_Open Logo -->
		<img src="https://i.esdrop.com/d/f/KRQCESGJO3/06arp5O8Hj.png" class="w-40" alt="Enoch Ndika" />
	{:else}
		<!-- Slide Menu_Close Logo -->
		<img src="https://i.esdrop.com/d/f/KRQCESGJO3/JpdwDzRNUg.png" class="w-14" alt="Enoch Ndika" />
	{/if}
</div>
