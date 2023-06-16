<script lang="ts">
	// #region Import
	import { hwAlarmCounts } from "./../../../../chart/store";
	import { DataHandler } from "@vincjo/datatables";
	import type {
		HWAbnormalHistoryItems,
		HWAbnormalHistoryResponseBody,
	} from "$lib/api/http/hwAlarm/schema";
	import Pagination from "$lib/components/modal/table/pagination/common/Pagination.svelte";
	import Th from "$lib/components/modal/table/pagination/common/Th.svelte";
	import MediaQuery from "$lib/components/MediaQuery.svelte";
	import type { Readable } from "svelte/store";
	import { makeDateTime } from "$lib/util/date";
	import type { pageRows } from "$lib/components/modal/table/pagination/common/schema";
	import { HttpAPI } from "$lib/api/http";
	import { Eye, EyeSlash, Icon } from "svelte-hero-icons";
	// #endregion

	export let abnormalHistoryItems: HWAbnormalHistoryResponseBody;
	export let errorCodeFilterValue: string;
	export let handler: DataHandler;
	export let screenSize: number;

	const HttpApiForHW = new HttpAPI();

	const newHistoryItems: pageRows<HWAbnormalHistoryItems>[] = {
		...abnormalHistoryItems.data,
	}.items.map((item) => {
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
		rowsPerPage = 20;
		handler = new DataHandler(newHistoryItems, { rowsPerPage });
	} else {
		rowsPerPage = 17;
		handler = new DataHandler(newHistoryItems, { rowsPerPage });
	}
	const rows: Readable<pageRows<HWAbnormalHistoryItems>[]> = handler.getRows();
	const currentPageNumber: Readable<number> = handler.getPageNumber();
	const currentRowCount = handler.getRowCount();
	const isFocus: boolean[] = Array(rowsPerPage).fill(false);

	$: handler.filter(errorCodeFilterValue, "alarm_code");

	//#region function
	// onClickRow
	async function onClickRowForCheck(
		row: pageRows<HWAbnormalHistoryItems>,
		i: number,
	): Promise<void> {
		const response = await HttpApiForHW.hwAbnormal.updateHWAbnormal({ id: row.id });
		if (response.isSuccess) {
			if (!newHistoryItems[($currentPageNumber - 1) * rowsPerPage + i].is_confirmed) {
				$hwAlarmCounts--;
			}
			isFocus.fill(false);
			isFocus[i] = true;
			newHistoryItems[($currentPageNumber - 1) * rowsPerPage + i].is_confirmed = true;
			handler.setRows(newHistoryItems);
		}
	}
	//#endregion
</script>

<div>
	<table class="w-full">
		<thead>
			<tr>
				<Th {handler} orderBy="alarm_code"><div id="thead">알람코드</div></Th>
				<Th {handler} orderBy="detail_code"><div id="thead">상세코드</div></Th>
				<Th {handler} orderBy="detail_date"><div id="thead">발생일자</div></Th>
				<Th {handler} orderBy="detail_time"><div id="thead">발생일시</div></Th>
				<Th {handler} orderBy="is_confirmed"><div id="thead">상태</div></Th>
			</tr>
		</thead>
		<tbody>
			<!-- content here -->
			{#each $rows as row, i}
				<tr
					on:click={() => {
						onClickRowForCheck(row, i);
					}}
					class="hover:cursor-pointer duration-100 {!row.is_confirmed && 'text-yellow-500 '} 
					{isFocus[i] && `bg-[#28AEF3] bg-opacity-10`} "
				>
					<td class="{row.is_confirmed && 'text-[#176AF6]'} ">{row.alarm_code}</td>
					<td>{row.detail_code}</td>
					<td class="">{row.detail_date}</td>
					<td class="">{row.detail_time}</td>
					<td>
						<div class="flex items-center justify-center">
							{#if !row.is_confirmed}
								<Icon src={EyeSlash} class="w-4 h-4 stroke-1.5" />
							{:else}
								<Icon src={Eye} class="w-4 h-4 stroke-1.5 text-gray-700" />
							{/if}
						</div>
					</td>
				</tr>
			{/each}

			<!-- Data 갯수가 page row 수 보다 작을 때 -->
			{#if $currentRowCount.total < $currentPageNumber * rowsPerPage}
				<!--데이터 없을경우 빈 공간 : Defult -->
				<MediaQuery query="(min-width: 481px) and (max-width: 1535px)" let:matches>
					{#if matches}
						{#each Array($currentPageNumber * rowsPerPage - $currentRowCount.total) as _}
							<tr>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
						{/each}
					{/if}
				</MediaQuery>

				<!-- 데이터 없을경우 빈 공간 : 반응형 - 2XL -->
				<MediaQuery query="(min-width: 1536px)" let:matches>
					{#if matches}
						{#each Array($currentPageNumber * rowsPerPage - $currentRowCount.total) as _}
							<tr>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
						{/each}
					{/if}
				</MediaQuery>
			{/if}
		</tbody>
	</table>

	<!-- PageNation -->
	<div class="flex-none ">
		<div class="pt-3 flex items-center justify-center xl:py-2 ">
			<!-- <RowCount {handler} /> -->
			<Pagination {handler} title="status" />
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
		@apply border-b border-r border-gray-700 text-sm py-[0.03rem] xl:text-base xl:py-[0.07rem] 2xl:py-3;
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
	/* end Table */

	select::-ms-expand {
		display: none;
	}
	tbody > tr > td:focus {
		border: 1px solid red;
	}
</style>
