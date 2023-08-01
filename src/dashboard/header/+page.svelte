<script lang="ts">
	//#region
	import { Icon, Bars4, Bell, User, Sun, Moon } from 'svelte-hero-icons';
	import { isSlideMenuOpen, isDarkMode } from '../provider/store';
	// import menuItem from '../slidemenu/menuitem';

	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	//#region SlideMenu
	const toggle = () => {
		$isSlideMenuOpen = !$isSlideMenuOpen;
	};
	//#endregion

	//#region Theme Toggle
	// export let $isDarkMode = false;

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			$isDarkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			$isDarkMode = false;
		}
	}

	const handleSwitchisDarkMode = () => {
		$isDarkMode = !$isDarkMode;

		localStorage.setItem('theme', $isDarkMode ? 'dark' : 'light');

		$isDarkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};
	//#endregion
</script>

{#if browser}
	<header class="relative h-[60px] items-center">
		<div class="flex-center relative mx-auto flex h-full flex-col justify-center px-3">
			<div class="lg:max-w-68 relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
				<div class="group relative ml-[110px] flex h-full w-[87%] items-center justify-between">
					<div class="flex items-center space-x-5">
						<!-- Menu Toggle Btn -->
						<div on:click={toggle} on:keypress={toggle} class="flex items-center">
							<Icon src={Bars4} class="h-7 w-7 cursor-pointer" />
						</div>

						<div class="font-medium">
							<!-- 라우터 현재 위치 나타내는 기능 -->
							{$page.route.id.split('/').pop().charAt(0).toUpperCase() +
								$page.route.id.split('/').pop().slice(1)}
						</div>
					</div>

					<!-- 헤더 아이템 -->
					<button class=" flex items-center space-x-5">
						<!-- Thema Toggle Btn -->
						<div class="pt-1.5">
							<!-- 체크박스 영역 숨기기 -->
							<input
								type="checkbox"
								id="theme-toggle"
								class="hidden"
								bind:checked={$isDarkMode}
								on:click={handleSwitchisDarkMode}
							/>
							<label for="theme-toggle" />
						</div>
						<!--  -->
						<!-- <Icon src={Bell} class="h-6 w-6" />
						<div class="flex items-center space-x-3 border-l pl-5 text-sm dark:border-gray-300">
							<span>Sign Up</span>
							<Icon src={User} class="h-6 w-6" />
						</div> -->
					</button>
				</div>
			</div>
		</div>
	</header>
{/if}

<style lang="postcss">
	/* Toggle */
	input:checked ~ .dot {
		transform: translateX(100%);
		background-color: #26282e;
	}

	input ~ .dot {
		background-color: #26282e;
	}

	#theme-toggle {
		@apply invisible;
	}

	#theme-toggle + label {
		@apply inline-block cursor-pointer h-8 w-8  rounded-full duration-300 content-[''];
	}

	#theme-toggle:not(:checked) + label {
		@apply bg-amber-400;
	}

	#theme-toggle:checked + label {
		@apply bg-transparent;
		box-shadow: inset -11px -9px 1px 1px #ddd;
	}
</style>
