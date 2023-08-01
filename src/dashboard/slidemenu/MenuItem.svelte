<script lang="ts">
	//#region Import
	import { Icon, ChevronRight, ArrowSmallRight } from 'svelte-hero-icons';
	import { isSlideMenuOpen } from '../provider/store';
	import { page } from '$app/stores';
	// 메뉴 아이템 ts
	import menuitem from './menuitem';

	//#endregion

	//#region Style
	const style = {
		title: `mx-4 text-[18px] ml-5`,
		active: `text-indigo-400 rounded-full`,
		// link: `flex items-center justify-start my-1 p-3 w-full whitespace-pre `,
		link: `flex items-center `,
		close: `lg:invisible opacity-0 lg:transition-all`,
		open: `lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all`
	};
	//#endregion

	let isHovered = false;
</script>

<div class=" h-full overflow-auto py-5 dark:bg-[#16191E] bg-white">
	<ul class="space-y-6">
		{#each menuitem as item, index}
			<li>
				<div class="duration-200">
					<a href={item.link}>
						<!-- Title -->
						<div
							class="{style.link} {$page.route.id?.includes(item.link)
								? 'border-[#2463e1] border-l-[3.5] text-[#2463E1]'
								: 'border-transparent text-gray-500'}  
								{$isSlideMenuOpen ? 'pl-3' : 'pl-5'} border-l-[3.5px]"
							on:click={() => {
								item.isdepthMenuOpen = !item.isdepthMenuOpen;
							}}
							on:keydown={() => (item.isdepthMenuOpen = !item.isdepthMenuOpen)}
						>
							<!-- Icon -->
							<!-- 메뉴 선택시 Icon 백그라운드 기능 -->
							<div
								class="p-2 {$page.route.id?.includes(item.link)
									? 'text-[#2463E1]'
									: 'text-gray-500'} "
								on:mouseenter={() => {
									if ($page.route.id?.includes(item.link)) {
										isHovered = true;
									}
								}}
								on:mouseleave={() => (isHovered = false)}
							>
								<Icon class="h-8 w-8 " src={item.icon} />
							</div>

							<!--  -->
							{#if $isSlideMenuOpen === false}
								<!-- content here -->
								<div class="animate-bounce">
									{#if $page.route.id?.includes(item.link) && isHovered}
										<!-- content here -->
										{#if isHovered}
											<!-- content here -->
											<Icon src={ArrowSmallRight} class="w-7 h-5 stroke-2" />
										{/if}
									{/if}
								</div>
							{/if}

							<!--  -->

							<!-- Slide Menu 오픈시 타이틀 토글 기능  -->
							<div
								class="flex justify-between items-center w-full {`${
									$isSlideMenuOpen ? style.open : style.close
								}`} "
							>
								<!-- Arrow Icon -->
								<span class={style.title}>
									{item.title}
								</span>

								{#if item.depthMenu}
									<Icon
										class="h-6 w-6 mr-3 {item.isdepthMenuOpen
											? 'easy-in rotate-90 duration-300'
											: 'rotate-0 duration-300'}"
										src={ChevronRight}
									/>
								{/if}
							</div>
						</div>

						<!-- Depth Menu Item -->
						<!-- 서브메뉴 드롭다운기능 , 슬라이드메뉴 닫혔을때 서브메뉴 닫히는 기능  -->
						<!-- prettier-ignore -->
						<div
					style="height:{item.isdepthMenuOpen ? `${50 * item.depthMenu?.length}` : '0'}px " 
					class=" {$isSlideMenuOpen ? 'block' : 'hidden'} overflow-hidden duration-500 "
					>

						{#if item.isdepthMenu}
							<!-- 서브메뉴 클릭하면 서브메뉴와 메뉴 슬라이드 닫히는 기능 -->
							<!-- 뎁스메뉴를 클릭했다면 isSlideMenu = false -->
							<div
								on:click={() => {
									$isSlideMenuOpen = false;
								}}
								on:keydown={() => {
									$isSlideMenuOpen = false;
								}}
								class="flex flex-col space-y-6 pl-16 pt-[20px]"
							>
								<!-- depthMenu 페이지 라우터 -->
								{#if item.depthMenu}
									{#each item.depthMenu as depthMenu}
										<a href={depthMenu.link}>
											<!-- depthMenu 선택시 Text Color Active 기능 -->
											<!-- prettier-ignore -->
											<div class="{$page.route.id == depthMenu.link ? 'text-white' : 'text-gray-500'}" >
												{depthMenu.title}
											</div>
										</a>
									{/each}
								{/if}
							</div>
						{/if}
						
					</div>
					</a>
					<!-- 구분 선 -->
					{#if index === 0}
						<hr class="mx-3 mt-5 h-[1.3px] border-0 bg-gray-700" />
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	::-webkit-scrollbar {
		display: none;
	}
</style>
