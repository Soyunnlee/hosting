<script lang="ts">
	import { swAbnormalCounts, aiAbnormalCounts } from "./../../../../chart/store";
	import { DataHandler } from "@vincjo/datatables";
	import Th from "$lib/components/modal/table/pagination/common/Th.svelte";
	import Pagination from "$lib/components/modal/table/pagination/common/Pagination.svelte";
	import type { SWAbnormalDetailItems, SWAbnormalHistoryItems } from "$lib/api/http/swAlarm/schema";
	import { Icon, Eye, EyeSlash } from "svelte-hero-icons";
	import MediaQuery from "$lib/components/MediaQuery.svelte";
	import { HttpAPI } from "$lib/api/http";
	import type { Readable } from "svelte/store";
	import { makeDateTime } from "$lib/util/date";
	import type { pageRows } from "$lib/components/modal/table/pagination/common/schema";
	import { onMount } from "svelte";
	import type { TSingleChartDataList } from "$lib/components/scichart/schema";

	export let abnormalList: SWAbnormalHistoryItems[];
	export let selectedAbnormal: SWAbnormalHistoryItems | undefined;
	export let promiseAbnormalDetail: Promise<SWAbnormalDetailItems[]> | undefined;
	export let handler: DataHandler;
	export let showModal: boolean;
	export let screenSize: number;

	const HttpApiForSW = new HttpAPI();

	const newHistoryItems: pageRows<SWAbnormalHistoryItems>[] = abnormalList.map((item) => {
		let { year, month, day, hour, min, sec } = makeDateTime(item.proceed_time, true);
		return {
			...item,
			detail_date: `${year}/${month}/${day}`,
			detail_time: `${hour}:${min}:${sec}`,
		};
	});

	let rowsPerPage: number;
	// rows 개수 반응형
	if (screenSize >= 1920) {
		rowsPerPage = 11;
		handler = new DataHandler(newHistoryItems, { rowsPerPage });
	} else {
		rowsPerPage = 9;
		handler = new DataHandler(newHistoryItems, { rowsPerPage });
	}

	const rows: Readable<pageRows<SWAbnormalHistoryItems>[]> = handler.getRows();
	const currentPageNumber: Readable<number> = handler.getPageNumber();
	const currentRowCount = handler.getRowCount();
	const isFocus: boolean[] = Array(rowsPerPage).fill(false);

	//#region function
	// ABNORMAL MODAL 에서 디테일 조회
	async function getSWAbnormalDetailItems(
		item: SWAbnormalHistoryItems,
	): Promise<SWAbnormalDetailItems[]> {
		const res = await HttpApiForSW.swAbnormal.getSWAbnormalDetail({
			name: item.name,
			type: item.type,
			proceed_time: item.proceed_time,
		});
		return res.data.items;
	}

	// onClickRow
	function onClickRow(row: pageRows<SWAbnormalHistoryItems>, i: number) {
		onClickRowForCheck(row, i);
		onClickRowForDetail(row);
	}

	function onClickRowForDetail(row: pageRows<SWAbnormalHistoryItems>): void {
		promiseAbnormalDetail = getSWAbnormalDetailItems(row);
		selectedAbnormal = row;
	}
	async function onClickRowForCheck(row: pageRows<SWAbnormalHistoryItems>, i: number) {
		const response = await HttpApiForSW.swAbnormal.updateSWAbnormal({ id: row.id });
		if (response.isSuccess) {
			if (!newHistoryItems[($currentPageNumber - 1) * rowsPerPage + i].is_confirmed) {
				const name: string = parsingRowName(row.name);
				if (row.category === "THRESHOLD") {
					$swAbnormalCounts[name as TSingleChartDataList] -= 1;
				} else if (row.category === "ABNORMAL") {
					$aiAbnormalCounts[name as TSingleChartDataList]! -= 1;
				}
			}
			isFocus.fill(false);
			isFocus[i] = true;
			newHistoryItems[($currentPageNumber - 1) * rowsPerPage + i].is_confirmed = true;
			handler.setRows(newHistoryItems);
		}
	}

	function parsingRowName(name: string): TSingleChartDataList {
		if (name.indexOf("_")) {
			if (name.lastIndexOf("_") === name.length - 2) {
				return name.slice(0, name.lastIndexOf("_")) as TSingleChartDataList;
			} else return name as TSingleChartDataList;
		} else {
			return name as TSingleChartDataList;
		}
	}
	//#endregion

	onMount(() => {
		if ($rows.length > 0 && showModal) onClickRow($rows[0], 0);
	});
</script>

<!-- <header> -->
<!-- <Search {handler} /> -->
<!-- <RowsPerPage {handler} /> -->
<!-- </header> -->
<div class="h-full flex flex-col pt-0">
	<!-- Table -->
	<div class=" flex-grow flex h-full">
		<table class=" h-full">
			<thead>
				<tr>
					<Th {handler} orderBy="name">
						<div id="thead">항목</div>
					</Th>
					<Th {handler} orderBy="type">
						<div id="thead">구분</div>
					</Th>
					<Th {handler} orderBy="setting_value">
						<div id="thead">임계값</div>
					</Th>
					<Th {handler} orderBy="real_value">
						<div id="thead">측정값</div>
					</Th>
					<Th {handler} orderBy="detail_date">
						<div id="thead">발생일자</div>
					</Th>
					<Th {handler} orderBy="detail_time">
						<div id="thead">발생일시</div>
					</Th>
					<Th {handler} orderBy="is_confirmed">
						<div id="thead">상태</div>
					</Th>
				</tr>
			</thead>

			<tbody>
				{#each $rows as row, i}
					<tr
						on:click={() => {
							onClickRow(row, i);
						}}
						class="hover:cursor-pointer duration-100 {!row.is_confirmed && 'text-yellow-500 '}
							{isFocus[i] && `bg-blue-500 bg-opacity-20`}
							"
					>
						<td class=" ">{row.name}</td>
						<td class="  ">{row.type}</td>
						<td>{row.setting_value}</td>
						<td>{row.real_value.toFixed(2)}</td>
						<td>{row.detail_date}</td>
						<td>{row.detail_time}</td>
						<td>
							<div class="flex items-center justify-center">
								{#if !row.is_confirmed}
									<Icon src={EyeSlash} class="w-6 h-6 stroke-1.5" />
								{:else}
									<Icon src={Eye} class="w-6 h-6 stroke-1.5 text-gray-700" />
								{/if}
							</div>
						</td>
					</tr>
				{/each}

				<!-- Data 개수가 Table row 수 보다 작을 때 -->
				{#if $currentRowCount.total < $currentPageNumber * rowsPerPage}
					<!--데이터 없을경우 빈 공간 : Defult -->
					<MediaQuery query="(min-width: 481px)" let:matches>
						{#if matches}
							{#each Array($currentPageNumber * rowsPerPage - $currentRowCount.total) as _}
								<tr>
									<td class="">&nbsp;</td>
									<td class="">&nbsp;</td>
									<td class="">&nbsp;</td>
									<td class="">&nbsp;</td>
									<td class="">&nbsp;</td>
									<td class="">&nbsp;</td>
									<td class="">&nbsp;</td>
								</tr>
							{/each}
						{/if}
					</MediaQuery>

					<!-- 데이터 없을경우 빈 공간 : 반응형 - 2XL -->
					<!-- <MediaQuery query="(min-width: 1536px)" let:matches>
						{#if matches}
							{#each Array(10 - $currentPageNumber * 10 - $currentRowCount.total) as _}
								<tr>
									<td class="border">&nbsp;</td>
									<td class="border">&nbsp;</td>
									<td class="border">&nbsp;</td>
									<td class="border">&nbsp;</td>
									<td class="border">&nbsp;</td>
									<td class="border">&nbsp;</td>
									<td class="border">&nbsp;</td>
								</tr>
							{/each}
						{/if}
					</MediaQuery> -->
				{/if}
			</tbody>
		</table>
	</div>

	<!-- PageNation -->
	<div class=" pt-0 flex-none">
		<div class="py-2.5 flex items-center justify-center xl:py-5">
			<!-- <RowCount {handler} /> -->
			<Pagination {handler} title="threshold" />
		</div>
	</div>
</div>

<style lang="postcss">
	/* Table Custom */
	table {
		text-align: center;
		border-collapse: separate;
		border-spacing: 0;
		width: 100%;
	}

	#thead {
		@apply text-sm text-[#BDC1DA] tracking-[0.2em] font-normal py-0 xl:text-base;
	}

	tbody > tr > td {
		@apply border-b border-r border-gray-700 text-base py-[0.1rem] xl:text-lg;
	}

	tbody > tr > td:nth-last-child(1) {
		@apply border-r-0;
	}

	tbody > tr > td:nth-child(1) {
		@apply px-1.5;
	}

	tbody > tr > td:nth-child(5) {
		@apply px-3;
	}
</style>
