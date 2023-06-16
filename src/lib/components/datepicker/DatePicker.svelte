<script lang="ts">
	// #region Import
	import { Icon, ChevronDown } from 'svelte-hero-icons';
	import DatePickerPopUp from './DatePickerPopUp.svelte';
	// #endregion

	// 일, 주, 월, 년 선택시 차트 표현
	export let onDateSelect: (periodType: string, beginDate: Date, endDate: Date) => void;

	//#region Variable
	const today: Date = new Date(Date.now());

	let periodType: string;
	let isCalendarShow = false;
	let calendarViewType: string;
	let calendarBeginDate: Date = new Date(today.getFullYear(), today.getMonth(), 1);
	let calendarEndDate: Date = new Date(today.getFullYear(), today.getMonth() + 1, 1);

	let isDropdownOpen = false;
	//#endregion

	function onDateSelectCallback(beginDate: Date, endDate: Date) {
		calendarBeginDate = beginDate;
		calendarEndDate = endDate;

		onDateSelect(periodType, beginDate, endDate);
	}

	function onToggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}

	// 선택한 옵션을 업데이트
	function selectOption(option: string) {
		option === 'Daily'
			? (calendarViewType = 'days')
			: option === 'Monthly'
			? (calendarViewType = 'months')
			: (calendarViewType = 'years');
		isCalendarShow = true;

		periodType = option;

		onToggleDropdown();
	}

	//#region Variable _ Style
	const style = {
		pickerwrap: `flex items-center rounded-md bg-[#131316] border border-[#434346] py-0.5  2xl:text-xl 2xl:py-1.5 `,
		btn: `border-r border-gray-600 px-2 2xl:px-3 `,
		select: `bg-[#131316] ml-2.5`
	};
	//#endregion
</script>

<div class="flex space-x-3">
	<!-- 사용자 지정 시간 -->
	<DatePickerPopUp
		bind:isShow={isCalendarShow}
		viewType={calendarViewType}
		onDateSelected={onDateSelectCallback}
	/>

	<div class={style.pickerwrap}>
		<button class={style.btn}>
			<!-- Icon -->
			<img
				src="https://i.esdrop.com/d/f/KRQCESGJO3/CRdI3xWEaW.png"
				alt=""
				class="h-4 w-4 2xl:h-5 2xl:w-5"
			/>
		</button>
		<!-- Select Box -->
		<div
			class="dropdown items-center justify-center bg-[#131316] px-2.5 transition duration-1000"
			class:open={isDropdownOpen}
		>
			<div
				class="dropdown-toggle flex cursor-pointer items-center justify-center"
				on:click={onToggleDropdown}
				on:keypress={onToggleDropdown}
			>
				{periodType
					? periodType == 'Monthly'
						? '월'
						: periodType === 'Daily'
						? '일'
						: '년'
					: '월'}
				<Icon src={ChevronDown} class="ml-2 w-3 stroke-2 text-gray-500" />
			</div>
			<div class="absolute w-20 pt-2.5 2xl:pt-2.5">
				<ul
					class="dropdown-menu absolute overflow-hidden bg-[#131316] text-white {isDropdownOpen
						? 'h-[7.5rem] 2xl:h-[8.5rem]'
						: 'h-0'} right-8 z-10 w-20 rounded duration-150"
				>
					<li on:click={() => selectOption('Daily')} on:keypress={() => selectOption('Daily')}>
						일
					</li>
					<li on:click={() => selectOption('Monthly')} on:keypress={() => selectOption('Monthly')}>
						월
					</li>
					<li on:click={() => selectOption('Yearly')} on:keypress={() => selectOption('Yearly')}>
						년
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	select {
		@apply border-none focus:border-transparent focus:ring-0 focus:ring-[#3D3C41];
		background-size: 20px;
		padding: 0 2rem 0 0;
		outline: 0 none;
	}

	#select > option {
		@apply bg-black;
		background: black;
		color: #fff;
		padding: 3px 0;
	}
	ul > li {
		@apply cursor-pointer  py-2 text-center hover:text-blue-600;
	}
</style>
