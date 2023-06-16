<script lang="ts">
	import type { DataHandler } from "@vincjo/datatables";
	import { Icon, ArrowLeft, ArrowRight } from "svelte-hero-icons";
	export let handler: DataHandler;
	const pageNumber = handler.getPageNumber();
	const pageCount = handler.getPageCount();
	const pages = handler.getPages({ ellipsis: true });
	export let title: "toolpad" | "status" | "threshold";
</script>

<section class="flex w-full justify-between ">
	<!-- Previous Btn -->
	<button
		type="button"
		class="hover:text-blue-700"
		class:disabled={$pageNumber === $pageCount}
		on:click={() => {
			handler.setPage("previous");
		}}
	>
		<div class="flex flex-row">
			<div class="flex items-center px-2 ">
				<Icon src={ArrowLeft} class="h-5 stroke-2" />
			</div>
			<span>Previous</span>
		</div>
	</button>

	<!-- Number Group -->
	<div class="w-full flex justify-center items-center  ">
		{#each $pages as page}
			<div class=" h-full">
				<button
					class="text-blue-700 h-full px-2.5  {title === 'toolpad'
						? 'mx-0 xl:mx-1.5'
						: title === 'status'
						? 'mx-1 xl:mx-2.5'
						: 'mx-2.5 xl:mx-4'}"
					type="button"
					class:active={$pageNumber === page}
					class:ellipse={page === null}
					on:click={() => handler.setPage(page)}
				>
					{page ?? "..."}
				</button>
			</div>
		{/each}
	</div>

	<!-- Next Btn -->
	<button
		type="button"
		class="hover:text-blue-700"
		class:disabled={$pageNumber === $pageCount}
		on:click={() => {
			handler.setPage("next");
		}}
	>
		<div class="flex flex-row">
			<span>Next</span>
			<div class="flex items-center px-2">
				<Icon src={ArrowRight} class="h-5 stroke-2" />
			</div>
		</div>
	</button>
</section>

<style lang="postcss">
	button {
		@apply cursor-pointer text-sm  xl:text-base border-t-2 border-transparent;
		color: #b7b9d2;
		cursor: pointer;
	}

	/* Previous Btn */
	button:first-child {
		@apply min-w-max;
	}
	/* Next Btn */
	button:last-child {
		@apply min-w-max;
	}

	button.active {
		@apply border-t-2 border-blue-700 text-blue-700  cursor-pointer font-semibold text-lg xl:text-xl;
	}
</style>
