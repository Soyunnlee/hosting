<script lang="ts">
	//#region inport
	import { Icon, Bars4, UserCircle } from 'svelte-hero-icons';
	import { isSlideMenuOpen } from '../provider/store';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	//#endregion

	//#region State
	export let id: string;
	export let role: string;
	//#endregion

	//#region global variable
	let currentPage = '';
	//#endregion

	//#region SlideMenu
	const toggle = () => {
		$isSlideMenuOpen = !$isSlideMenuOpen;
	};
	//#endregion

	//#region Theme Toggle
	// let isDarkMode = false;

	//#region Thema / 새로고침시 테마 유지
	onMount(() => {
		const isDarkModeLocalStorage = localStorage.getItem('isDarkMode');

		if (isDarkModeLocalStorage === 'true') {
			// isDarkMode = true;
			document.documentElement.classList.add('dark');
		}
	});
	//#endregion

	//#region Clock
	let date: Date = new Date();
	let dayOrNight: string = 'AM';
	$: hour = date.getHours();
	$: min = String(date.getMinutes()).padStart(2, '0');

	onMount(() => {
		setInterval(() => {
			date = new Date();
			dayOrNight = hour >= 12 ? 'PM' : 'AM';
		}, 1000);
	});
	//#endregion

	//#region 현재 페이지 정보 조회
	$: {
		const routeId: string | null = $page.route.id;
		let routeIds: string[] = [];
		if (routeId) {
			routeIds = routeId.split('/');
		}
		const currentPageTemp: string | undefined = routeIds.pop();
		if (currentPageTemp) {
			currentPage = currentPageTemp.toUpperCase();
		}
	}
	//#endregion
</script>

<header class="relative h-[60px] items-center bg-[#0E0E0E] dark:bg-gray-100 2xl:pt-2">
	<div
		class="flex-center relative mx-auto flex h-full flex-col justify-center px-3 text-white dark:text-[#252733]"
	>
		<div class="lg:max-w-68 relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
			<div class="group relative ml-[110px] flex h-full w-[100%] items-center justify-between">
				<div class="flex items-center space-x-5">
					<!-- Menu Toggle Btn -->
					<div on:click={toggle} on:keypress={toggle} class="flex items-center">
						<Icon src={Bars4} class="h-7 w-7 cursor-pointer 2xl:ml-4 2xl:h-8 2xl:w-8" />
					</div>

					<div class="font-medium 2xl:text-lg">
						<!-- Router Text Content -->
						{currentPage}
					</div>
				</div>

				<!-- Header Items-->
				<div class=" flex items-center space-x-5">
					<div class=" flex items-center space-x-2 pr-5 text-sm 2xl:pr-10 2xl:text-base">
						<!-- Clock -->
						<div
							class="max-w-max border-gray-700 pr-3.5 text-xl text-gray-400 xl:text-2xl 2xl:hidden"
						>
							{hour} : {min}
						</div>
						<!-- User Imformation-->
						<div class="flex items-center space-x-2 pr-2">
							<Icon src={UserCircle} class="h-8 w-8 stroke-1 xl:h-9 xl:w-9" />
							<div class="flex flex-col pl-1 text-left">
								<span class="cursor-default text-base tracking-wider text-gray-200"> {id} </span>
								<span class="cursor-default text-xs text-gray-500">
									{role === 'admin' ? '관리자' : '사용자'}
								</span>
							</div>
						</div>
						<!-- Logout Icon -->
						<a class="h-7 border-l-2 border-gray-700 pl-5" href="/logout">
							<img
								src="https://i.esdrop.com/d/f/KRQCESGJO3/ThYvVSqyjT.png"
								alt=""
								class="h-[1.4rem] w-[1.4rem] 2xl:h-7 2xl:w-7"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
