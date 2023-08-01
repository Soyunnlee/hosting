<script lang="ts">
	export const style = {
		descriptionWrap: `flex flex-row space-x-1 py-4`,
		descriptionTitleWrap: `text-left w-[15%] border-r-[0.08rem] border-gray-400  flex items-center justify-center`,
		// bg-[#ABD2C9] text-[#195239]
		descriptionTitle: `rounded px-1.5  text-sm bg-[#aad3cb] text-emerald-800`,
		description: `pl-3 leading-7 text-gray-200`,
		codeBlock: `overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white`
	};

	// export let discription: string;

	interface DescriptionItem {
		name: string;
		info: string;
	}

	export let discription: DescriptionItem[];
</script>

<!-- bg-[#121826] dark:bg-[#13171D] -->
<div
	class="h-auto w-full space-y-0 divide-y divide-gray-600 rounded-md px-8 bg-[#121826] dark:bg-[#13171D]"
>
	{#each discription as discription}
		<!-- content here -->
		<!-- {:else} -->
		<!-- empty list -->
		<div class={style.descriptionWrap}>
			<li class={style.descriptionTitleWrap}>
				<p class={style.descriptionTitle}>{discription.name}</p>
			</li>
			<span class={style.description}>{discription.info}</span>
		</div>
	{/each}
</div>
