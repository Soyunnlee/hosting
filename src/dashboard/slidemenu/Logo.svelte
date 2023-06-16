<script lang="ts">
	//#region Import
	import { isSlideMenuOpen } from '../provider/store';
	//#endregion
</script>

<div class=" sticky top-0 flex h-24 items-center justify-center bg-[#16191E] duration-300 2xl:h-28">
	{#if $isSlideMenuOpen}
		<!-- Slide Menu_Open Logo -->
		<img src="https://i.esdrop.com/d/f/KRQCESGJO3/JVY3MWknS9.png" class="w-40" alt="Enoch Ndika" />
	{:else}
		<!-- Slide Menu_Close Logo -->
		<img src="https://i.esdrop.com/d/f/KRQCESGJO3/PKy74afL13.png" class="w-14" alt="Enoch Ndika" />
	{/if}
</div>
