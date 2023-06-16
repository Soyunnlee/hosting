<script script lang="ts">
	//#region Import

	import DataTable from '$lib/components/table/DataTable.svelte';

	//#endregion

	//#region Property
	// #endregion

	//#region Interface
	interface IColumnInfo {
		name: string;
		caption: string;
		useSort: boolean;
	}
	//#endregion

	// #region Variable
	const columnInfos: IColumnInfo[] = [];
	const dataSource: object[] = [];
	// #endregion

	// #region Function
	//#endregion
</script>

<svelte:head>
	<title>API</title>
</svelte:head>

<article class="contianer grid bg-white">
	<div class="row-span-1">
		{'Component'}
		<DataTable
			columns={columnInfos}
			useSearchInput={true}
			useRowPerPage={true}
			useRowCount={true}
			usePagination={true}
			useColumnFilter={true}
			{dataSource}
			screenSize={100}
		/>
	</div>
	<div class="row-span-1">
		{'Component Source'}
	</div>
	<div class="row-span-1">
		{'Component Explanation'}
	</div>
</article>
