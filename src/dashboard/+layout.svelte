<script lang="ts">
	// #region Import
	import Header from './header/+page.svelte';
	import Slidemenu from './slidemenu/+page.svelte';
	//#endregion

	//#region property
	export let id: string;
	export let role: string;
	//#endregion
</script>

<div class=" overflow-hidden bg-gray-900">
	<header>
		<Header {id} {role} />
	</header>
	<nav>
		<Slidemenu />
	</nav>
	<section>
		<div class="ml-24">
			<slot />
		</div>
	</section>
</div>
