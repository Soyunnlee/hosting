<script lang="ts">
	//#region Import
	import { clickOutside } from '../provider/click-outside';
	import { isSlideMenuOpen } from '../provider/store';
	import MenuItem from './MenuItem.svelte';
	import Logo from './Logo.svelte';

	// #endregion

	//#region Variable_Stayle
	const style = {
		mobilePosition: {
			left: 'left-0 ',
			right: 'right-0 lg:left-0'
		},
		container: `pb-32 lg:pb-12 `,
		close: `duration-[600ms] w-24 2xl:w-28`,
		open: `duration-300 w-52 2xl:w-56`,
		default: `min-h-screen overflow-y-auto text-white top-0 absolute bg-[#16191E] lg:block lg:z-40 dark:bg-gray-900`
	};
	// #endregion

	//#region Event Listener _ (전역) 메뉴 바깥영역 클릭했을때 Closer 기능
	const closeSidenav = () => {
		//close sidenav on click outside when viewport is less than 1024px
		$isSlideMenuOpen = false;
	};
	//#endregion
</script>

<div
	use:clickOutside
	on:click_outside={closeSidenav}
	class="{style.default} {$isSlideMenuOpen ? style.open : style.close} h-screen"
>
	<div class={style.container}>
		<Logo />
		<MenuItem />
	</div>
</div>

<style>
	::-webkit-scrollbar {
		display: none;
	}
</style>
