<script lang="ts">
	//#region Import
	import { onMount } from 'svelte';

	import {
		SciChartSurface,
		SciChartJsNavyTheme,
		NumericAxis,
		XyDataSeries,
		MouseWheelZoomModifier,
		ZoomExtentsModifier,
		ZoomPanModifier,
		FastColumnRenderableSeries,
		TextLabelProvider,
		CursorModifier,
		type TCursorTooltipDataTemplate,
		XySeriesInfo,
		SeriesInfo,
		type IPointMetadata,
		EAutoRange
	} from 'scichart';
	import type { TSciChart } from 'scichart/types/TSciChart';

	import type { IDataFormat } from '$lib/util/scichart';

	import {
		PUBLIC_SCICHART_DATA_FILE_PATH,
		PUBLIC_SCICHART_WASM_FILE_PATH
	} from '$env/static/public';
	import { makeDateTime } from '$lib/util/date';
	//#endregion

	//#region Props
	export let chartName: string;
	export let argumentName: string;
	export let valueName: string;
	export let isZoomEnabled: boolean;
	export let dataSource: IDataFormat[];
	//#endregion

	//#region Interface
	interface IChartMetadata extends IPointMetadata {
		label: string;
	}
	//#endregion

	//#region onMount
	onMount(async () => {
		await initChart();

		updateChartData(dataSource);
	});
	//#endregion

	//#region $ Function
	$: {
		if (surface && surface.xAxes.get(0) && dataSource) {
			surface.xAxes.get(0).labelProvider = new TextLabelProvider({
				labels: dataSource.map((value) => {
					if (value.timestamp) {
						const { year, month, day, hour, min, sec } = makeDateTime(
							new Date(value.timestamp).toISOString(),
							true
						);

						return `${year}/${month}/${day}`;

						// if (dateFormat === "YYYY") {
						// 	return `${year}`;
						// } else if (dateFormat === "MM") {
						// 	return `${month}`;
						// } else if (dateFormat === "DD") {
						// 	return `${day}`;
						// } else {
						// 	return `${hour === 0 ? 23 : parseInt(hour) - 1}`;
						// }
					} else {
						return '';
					}
				})
			});

			updateChartData(dataSource);

			surface.xAxes.get(0).autoRange = EAutoRange.Always;
			surface.yAxes.get(0).autoRange = EAutoRange.Always;
		}
	}
	//#endregion

	//#region Variables
	let context: TSciChart;
	let surface: SciChartSurface;

	const BAR_CHART_COLOR = '#2A538D';
	//#endregion

	//#region Function
	async function initChart() {
		await initChartConfig();

		initChartAxis();

		initChartSeries();

		initChartModifier();
	}

	async function initChartConfig() {
		SciChartSurface.configure({
			dataUrl: `${PUBLIC_SCICHART_DATA_FILE_PATH}`,
			wasmUrl: `${PUBLIC_SCICHART_WASM_FILE_PATH}`
		});

		// SciChart 라이센스키 설정
		SciChartSurface.setRuntimeLicenseKey(`${import.meta.env.SCICHART_LICENSE_KEY}`);
		const { wasmContext, sciChartSurface } = await SciChartSurface.create(chartName, {
			theme: {
				...new SciChartJsNavyTheme(),
				...{ legendBackgroundBrush: 'null', sciChartBackground: '#0C0C0E' }
			},
			disableAspect: true
		});

		context = wasmContext;
		surface = sciChartSurface;
	}

	function initChartAxis() {
		surface.xAxes.add(
			new NumericAxis(context, {
				majorDelta: 1,
				autoTicks: false,
				drawMajorGridLines: false,
				drawMinorGridLines: false,
				labelPrecision: 0
			})
		);

		surface.yAxes.add(
			new NumericAxis(context, {
				axisTitle: valueName,
				labelPrecision: 0,
				drawMajorGridLines: false,
				drawMinorGridLines: false
			})
		);
	}

	function initChartSeries() {
		const series = new FastColumnRenderableSeries(context, {
			id: chartName,
			fill: BAR_CHART_COLOR,
			stroke: BAR_CHART_COLOR,
			strokeThickness: 1,
			cornerRadius: 4,
			dataPointWidth: 0.5,
			opacity: 0.8,
			dataSeries: new XyDataSeries(context, { dataSeriesName: valueName })
		});

		surface.renderableSeries.add(series);
	}

	function initChartModifier() {
		const cursorTemplate: TCursorTooltipDataTemplate = (info: SeriesInfo[], title: string) => {
			const valuesWithLabels: string[] = [];

			if (title) {
				valuesWithLabels.push(title);
			}
			info.forEach((s) => {
				const xySeriesInfo = s as XySeriesInfo;

				valuesWithLabels.push(`${xySeriesInfo.formattedXValue}`);
				valuesWithLabels.push(`${valueName}: ${xySeriesInfo.formattedYValue}`);
			});
			return valuesWithLabels;
		};

		const cursorModifier = new CursorModifier({
			crosshairStroke: '#ff6600',
			crosshairStrokeThickness: 1,
			tooltipContainerBackground: '#000',
			tooltipTextStroke: '#ff6600',
			showTooltip: true,
			axisLabelFill: '#b36200',
			axisLabelStroke: '#fff',
			tooltipDataTemplate: cursorTemplate
		});

		surface.chartModifiers.add(cursorModifier);

		if (isZoomEnabled) {
			surface.chartModifiers.add(
				new ZoomExtentsModifier({}),
				new ZoomPanModifier(),
				new MouseWheelZoomModifier()
			);
		}
	}

	function updateChartData(data: IDataFormat[]) {
		const dataSeries = surface.renderableSeries.get(0).dataSeries as XyDataSeries;
		let idx = 0;

		dataSeries.clear();

		data.forEach((value) => {
			if (
				value.timestamp &&
				(value.values.get('value') || (value.values.get('value') as number) === 0)
			) {
				dataSeries.append(idx, value.values.get('value') as number);
			}
			idx++;
		});
	}
	//#endregion
</script>

<div class="flex h-full flex-col">
	<div class="flex-grow">
		<div id={chartName} class="m-auto h-full w-full" />
	</div>
</div>
