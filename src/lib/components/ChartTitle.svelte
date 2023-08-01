<script lang="ts">
	import { Icon, EllipsisHorizontal, Bars3 } from "svelte-hero-icons";

	export let title: String | undefined;
	// export let BtnIcon: String | undefined;
</script>

<div
	class="flex justify-between bg-transparent mt-1 {title === '임계치 이상감지' ||
	title === 'AI 이상감지'
		? `px-0 py-2.5 2xl:py-4`
		: `px-3 py-3.5`}"
	style={title === "임계치 이상감지" || title === "AI 이상감지"
		? "background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,1) 50%, rgba(20,21,23,1) 100%)"
		: ""}
>
	<div class="flex justify-center  w-full items-center ">
		<p class="text-sm 2xl:text-xl items-center">{title}</p>
	</div>
	<!-- Btn -->
	<div class="relative inline-flex">
		{#if title === "임계치 이상감지" || title === "AI 이상감지"}
			<div
				class="absolute -top-0.5 -left-1 rounded-full bg-red-700 py-1 px-1 2xl:py-1.5 2xl:px-1.5 2xl:-top-1 2xl:-left-1"
			/>
			<button
				type="button"
				class="bg-primary hover:bg-primary-600 rounded px-2 py-0 hover:shadow-[4px_4px_4px_-5px_#3b71ca]  duration-150 text-xs border border-gray-800 2xl:px-4 2xl:py-1"
			>
				<Icon class="w-5 h-6 stroke-2 text-indigo-700 2xl:w-8 2xl:h-7" src={Bars3} />
			</button>
		{:else}
			<!-- Alarm Number -->
			<div
				class="absolute -top-1 -left-2 whitespace-nowrap rounded-full bg-red-700 py-0.5 px-0.5 text-center text-[0.4rem]  leading-none text-white "
			>
				4
			</div>
			<!-- alarm Icon -->
			<button
				type="button"
				class="bg-primary hover:bg-primary-600 rounded px-1 py-0 hover:shadow-[4px_4px_4px_-5px_#3b71ca]  duration-150 text-xs border border-gray-800 2xl:px-2 2xl:py-1"
			>
				<Icon class="w-4 h-4  text-indigo-700 2xl:w-5 2xl:h-5" src={EllipsisHorizontal} />
			</button>
		{/if}
	</div>
</div>
