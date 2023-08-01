<script>
	import '../app.css';
	import Dashboard from '../dashboard/+layout.svelte';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import { browser } from '$app/environment';

	storeHighlightJs.set(hljs);

	import { hljsDefineSvelte } from '../svelte';
	import { isDarkMode } from '../dashboard/provider/store';

	hljs.registerLanguage('svelte', hljsDefineSvelte);
</script>

{#if browser}
	<div class="{$isDarkMode ? 'bg-[#0E0E0E]' : 'lightbg'} dark:text-gray-300">
		<Dashboard>
			<slot />
		</Dashboard>
	</div>
{/if}

<style lang="postcss">
	.lightbg {
		@apply bg-gradient-to-t from-[#EEF0F7] via-transparent to-[#CEDAE4];
	}
</style>
