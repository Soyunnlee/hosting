<script lang="ts">
	// #region Import
	import Header from './header/+page.svelte';
	import Slidemenu from './slidemenu/+page.svelte';
	//#endregion

	//#region property

	//#endregion
</script>

<div class="overflow-hidden">
	<header>
		<Header />
	</header>
	<nav class="">
		<Slidemenu />
	</nav>
	<section class="ml-24 overflow-y-auto">
		<slot />
	</section>
</div>

<style lang="postcss">
	::-webkit-scrollbar {
		@apply w-[8px];
	}

	::-webkit-scrollbar-thumb {
		@apply rounded-[40px] bg-gray-400;
	}
</style>
