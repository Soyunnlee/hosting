<script lang="ts">
	import DataTable from "$lib/components/table/DataTable.svelte";
	import type { ToolpadHistoryResponseBody } from "$lib/api/http/maintenance/schema";
	import { makeDateTime } from "$lib/util/date";

	//#region Interface
	interface IColumnInfo {
		name: string;
		caption: string;
		useSort: boolean;
	}
	interface ITableToolPadHistory {
		robot_id: string;
		create_date: string;
		create_time: string;
		use_count: number;
		reason: string;
	}
	//#endregion

	//#region Props
	// 테이블 데이터
	export let dataSource: ToolpadHistoryResponseBody;
	export let screenSize: number;
	$: {
		tableDataSource = getTableData(dataSource);
	}
	//#endregion

	//#region Variables
	let columnList: IColumnInfo[] = [
		{
			name: "robot_id",
			caption: "로봇ID",
			useSort: true,
		},
		{
			name: "create_date",
			caption: "교체일자",
			useSort: true,
		},
		{
			name: "create_time",
			caption: "교체일시",
			useSort: true,
		},
		{
			name: "use_count",
			caption: "사용횟수",
			useSort: true,
		},
		{
			name: "reason",
			caption: "교체사유",
			useSort: true,
		},
	];

	let tableDataSource: ITableToolPadHistory[] = getTableData(dataSource);
	//#endregion

	//#region Function
	function getTableData(origin: ToolpadHistoryResponseBody): ITableToolPadHistory[] {
		if (!origin || !origin.isSuccess || origin.data.items.length === 0) {
			return [];
		}

		return origin.data.items.map((item) => {
			const { year, month, day, hour, min, sec } = makeDateTime(item.create_at, true);

			let tableData: ITableToolPadHistory = {
				robot_id: origin.data.robot_id,
				create_date: `${year}/${month}/${day}`,
				create_time: `${hour}:${min}:${sec}`,
				use_count: item.use_count,
				reason: item.reason,
			};

			return tableData;
		});
	}
	//#endregion
</script>

<section class="h-full w-full">
	<div class="h-full flex flex-col pt-0">
		<!-- Table -->
		<div class=" flex-grow flex ">
			<DataTable
				columns={columnList}
				useSearchInput={false}
				useRowPerPage={false}
				useColumnFilter={false}
				useRowCount={false}
				usePagination={true}
				{screenSize}
				dataSource={tableDataSource}
			/>
		</div>
	</div>
</section>
