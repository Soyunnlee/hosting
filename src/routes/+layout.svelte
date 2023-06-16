<script>
	import '../app.css';
	import Dashboard from '../dashboard/+layout.svelte';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	storeHighlightJs.set(hljs);

	import { hljsDefineSvelte } from './../svelte';

	hljs.registerLanguage('svelte', hljsDefineSvelte);
</script>

<div class="app">
	<Dashboard>
		<slot />
	</Dashboard>
</div>

<style>
</style>
