<script lang="ts">
	//#region Import
	import { Icon } from 'svelte-hero-icons';
	import { isSlideMenuOpen } from '../provider/store';
	import { page } from '$app/stores';
	// menuitem data
	import menuitem from './menuitem';
	//#endregion

	//#region Variable
	const style = {
		title: `mx-4 text-[18px] ml-5 2xl:text-xl`,
		active: `text-indigo-400 rounded-full`,
		// link: `flex items-center justify-start my-1 p-3 w-full whitespace-pre `,
		link: `flex items-center `,
		close: `lg:invisible opacity-0 lg:transition-all`,
		open: `lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all`
	};
	//#endregion
</script>

<div class=" mt-0 whitespace-nowrap">
	<ul class="space-y-6">
		{#each menuitem as item}
			<li>
				<a href={item.link} class="">
					<!-- Title -->
					<div
						class="{style.link} {$page.route.id?.includes(item.link)
							? 'border-[#2463e1] border-l-[3.5] text-[#2463E1]'
							: 'border-transparent text-gray-500'}  
									{$isSlideMenuOpen ? 'pl-3' : 'pl-5'} border-l-[3.5px]"
					>
						<!-- Icon -->
						<div
							class="p-2 {$page.route.id?.includes(item.link)
								? 'text-[#2463E1]'
								: 'text-gray-500'}  "
						>
							<Icon class="h-8 w-8 2xl:h-10 2xl:w-10" src={item.icon} />
						</div>

						<!-- Slide Menu Open 시 Title Toggle 기능 -->
						<div
							class="flex w-full items-center justify-between {`${
								$isSlideMenuOpen ? style.open : style.close
							}`}"
						>
							<!-- Arrow Icon -->
							<span class={style.title}>
								{item.title}
							</span>
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
</style>
