<script lang="ts">
	export let title: string;
	export let intro: string;
</script>

<div class="mb-8">
	<h2 class="mb-1.5 text-5xl font-medium">{title}</h2>
	<span class="text-lg leading-7">
		<p>{@html intro}</p>
	</span>
</div>
