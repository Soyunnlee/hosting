<script lang="ts">
	// #region Import
	import { onMount } from 'svelte';
	import { DataHandler } from '@vincjo/datatables';
	import Th from '$lib/components/table/pagination/common/Th.svelte';
	import ThFilter from '$lib/components/table/pagination/common/ThFilter.svelte';
	import Pagination from '$lib/components/table/pagination/common/Pagination.svelte';
	// import MediaQuery from '../MediaQuery.svelte';
	// #endregion

	//#region Interface
	interface IColumnInfo {
		name: string;
		caption: string;
		useSort: boolean;
	}
	//#endregion

	//#region Props
	// 테이블 컬럼 리스트
	export let columns: IColumnInfo[];
	// 검색 Input 사용 여부
	export let useSearchInput: boolean;
	// RowPerPage 사용 여부
	export let useRowPerPage: boolean;
	// Pagination Count 사용 여부
	export let useRowCount: boolean;
	// Pagination 사용 여부
	export let usePagination: boolean;
	// 컬럼 필터 사용 여부
	export let useColumnFilter: boolean;
	// 테이블 데이터
	export let dataSource: object[];
	// Page Row Count
	export let screenSize: number;
	//#endregion

	//#region Variables
	//PlaceHolder 및 테이블 관련 텍스트 설정 참고: https://vincjo.fr/datatables/examples/i18n
	let tableDataHandler: DataHandler;
	let pageRowCount: number;

	if (screenSize > 1920) {
		pageRowCount = 6;
		tableDataHandler = new DataHandler(dataSource, {
			rowsPerPage: pageRowCount
		});
	} else {
		pageRowCount = 5;
		tableDataHandler = new DataHandler(dataSource, {
			rowsPerPage: pageRowCount
		});
	}
	let tableRows = tableDataHandler.getRows();

	//#endregion

	$: {
		if (screenSize >= 1920) {
			pageRowCount = 6;
		} else {
			pageRowCount = 5;
		}

		tableDataHandler.getRowsPerPage().set(pageRowCount);
		tableDataHandler.setRows(dataSource);
	}

	onMount(() => {});
</script>

<section class=" w-full">
	<table class=" h-[82%]">
		<thead>
			<tr>
				{#each columns as column}
					<Th handler={tableDataHandler} orderBy={column.useSort ? column.name : 'name'}>
						<div id="thead">
							{column.caption}
						</div>
					</Th>
				{/each}
			</tr>
			{#if useColumnFilter}
				<tr>
					{#each columns as column}
						<ThFilter handler={tableDataHandler} filterBy={column.name} />
					{/each}
				</tr>
			{/if}
		</thead>

		<tbody>
			{#if $tableRows.length >= pageRowCount}
				{#each $tableRows as row}
					<tr>
						{#each columns as column}
							<td class="">
								{row[column.name]}
							</td>
						{/each}
					</tr>
				{/each}
			{:else}
				{#each $tableRows as row}
					<tr>
						{#each columns as column}
							<!-- font-[300] -->
							<td class="">{row[column.name]}</td>
						{/each}
					</tr>
				{/each}

				<!-- <MediaQuery query="(min-width: 481px) and (max-width: 1535px)" let:matches>
					{#if matches}
						{#each Array(pageRowCount - $tableRows.length) as _}
							<tr>
								{#each columns as _}
									<td class="">&nbsp;</td>
								{/each}
							</tr>
						{/each}
					{/if}
				</MediaQuery>
				<MediaQuery query="(min-width: 1536px)" let:matches>
					{#if matches}
						{#each Array(pageRowCount - $tableRows.length) as _}
							<tr>
								{#each columns as _}
									<td class="">&nbsp;</td>
								{/each}
							</tr>
						{/each}
					{/if}
				</MediaQuery> -->
			{/if}
		</tbody>
	</table>

	{#if usePagination}
		<div class=" flex-none pt-0">
			<div class="flex items-center justify-center py-2.5 xl:py-5">
				<Pagination handler={tableDataHandler} title="toolpad" />
			</div>
		</div>
	{/if}
</section>

<style lang="postcss">
	/* Table Custom */
	table {
		text-align: center;
		border-collapse: separate;
		border-spacing: 0;
		width: 100%;
	}

	#thead {
		@apply py-1.5 text-sm font-[350] tracking-[0.1em] text-[#BDC1DA] xl:text-base;
	}

	tbody > tr > td {
		@apply border-b border-r border-gray-700  text-base font-light;
	}

	tbody > tr > td:nth-child(2) {
		@apply px-2.5;
	}

	tbody > tr > td:nth-last-child(1) {
		@apply border-r-0 font-normal;
	}
</style>
