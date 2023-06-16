//#region import
import {
	type TSciChart,
	type IStrokePaletteProvider,
	type IRenderableSeries,
	ENumericFormat,
	FastLineRenderableSeries,
	NumberRange,
	NumericAxis,
	NumericLabelProvider,
	SciChartSurface,
	XyDataSeries,
	Thickness,
	FastColumnRenderableSeries,
	EAnnotationLayer,
	ECoordinateMode,
	EHorizontalAnchorPoint,
	EVerticalAnchorPoint,
	TextAnnotation,
	BoxAnnotation,
	HorizontalLineAnnotation,
	parseColorToUIntArgb,
	ELabelPlacement,
	ELabelAlignment,
	EStrokePaletteMode,
	easing,
	EAxisAlignment,
	FastMountainRenderableSeries,
	LegendModifier,
	ELegendOrientation,
	ELegendPlacement,
	CustomAnnotation,
	EResamplingMode,
	StackedColumnRenderableSeries,
	TextLabelProvider,
	EAutoRange,
	MouseWheelZoomModifier,
	RubberBandXyZoomModifier,
	ZoomExtentsModifier,
	ZoomPanModifier,
	GradientParams,
	Point,
	SciChartOverview,
	sciChartConfig,
} from "scichart";

import {
	CustomChartLoader,
	scichart2022Theme,
	type AppThemeBase,
} from "$lib/components/scichart/style/theme";
import {
	PUBLIC_SCICHART_DATA_FILE_PATH,
	PUBLIC_SCICHART_LICENSE_KEY,
	PUBLIC_SCICHART_WASM_FILE_PATH,
} from "$env/static/public";
import { replaceDataName } from "$lib/components/scichart/schema";
import {
	AXIS_MINOR_LINE_COLOR,
	AXIS_MAJOR_LINE_COLOR,
	DETAIL_CHART_BACKGROUND_COLOR,
	DETAIL_CHART_MINOR_LINE_COLOR,
} from "$lib/components/scichart/style/static";
//#endregion

//#region Constant

const THRESHOLD_HIGH_COLOR = parseColorToUIntArgb(scichart2022Theme.VividPink);
//#endregion

//#region Interface
export interface IInitSciChartParams {
	// Identify Name
	chartName: string;
	dataSeriesName: string | string[];

	// Chart Surface Style
	theme: AppThemeBase;
	padding: Thickness | Thickness[];
	backgroundColor: string;
	isDrawBehind?: boolean;

	// Chart Line Style
	chartType: ChartType;
	strokeColor: string | string[];
	thickness?: number;
	barWidth?: number;

	// Static Setting Per Chart
	xRange?: number;
	yRange: number;
	warningHighValue?: number;

	isAxisXVisible?: boolean;
	isAxisYVisible?: boolean;
	isLetterVisible?: boolean;

	// X, Y Values
	xLabelString?: string[];
	yLabelPrecision?: number;
	xValues?: number[];
	yValues?: number[];

	setYVisibleRange?: boolean;
	autoTicksY?: boolean;
	autoRangeY?: boolean;
	yRangePadding?: { min: number; max: number };
	yGridLineVisible?: { major: boolean; minor: boolean };
	yGridLineColor?: { minor: string; major: string };

	hasMouseOpts?: { mouseOpts: boolean; hasRubberBandOpts?: boolean };
}

// TODO : 정리 할 부분
//#region
export interface IChartSurface {
	chartName: string;
	theme: AppThemeBase;
	backgroundColor: string;
	padding: Thickness | Thickness[];
	isDrawBehind?: boolean;
}

export interface IChartAxis {
	// common
	sciChartSurface: SciChartSurface;
	wasmContext: TSciChart;
	// X Axis
	isAxisXVisible: boolean;
	xLabelString?: string[];
	xRange?: number;
	xValues?: number[];
	// Y Axis
	yRange: number;
	isAxisYVisible: boolean;
	yLabelPrecision?: number;
}
interface IChartXAxis {
	xRange: number;
	isAxisXVisible: boolean;
	xValues?: number[];
	xLabelString?: string[];
}
interface IChartYAxis {
	yRange: number;
	isAxisYVisible: boolean;
	yLabelPrecision?: number;
}

export interface IChartStyle {
	chartType: ChartType;
	strokeColor: string | string[];
	thickness?: number;
	barWidth?: number;
}

export interface IAxisRange {
	xRange: number;
	yRange: number;
}

export interface IDataFormat {
	timestamp: number;
	values: Map<string, number>;
	label?: string;
}
//#endregion
//#endregion

//#region Enum
export enum ChartType {
	LINE,
	BAR,
	MOUNTAIN,
	STACKED,
}
//#endregion

//#region Function (Export)
export async function initSciChart(params: IInitSciChartParams): Promise<SciChartSurface> {
	// SciChart Config 설정
	initChartConfig();

	// SciChartSurface 생성
	const { sciChartSurface, wasmContext } = await initChartSurface(params);

	// Chart 축 초기화
	initChartAxis(
		sciChartSurface,
		wasmContext,
		params.isAxisXVisible || false,
		params.isAxisYVisible || false,
		params.xRange || 100,
		params.yRange,
		params.xLabelString || undefined,
		params.xValues || undefined,
		params.yLabelPrecision || undefined,
		params.setYVisibleRange || undefined,
		params.autoTicksY || undefined,
		params.autoRangeY || undefined,
		params.yRangePadding || undefined,
		params.yGridLineVisible || undefined,
		params.yGridLineColor || undefined,
	);
	// const { sciChartSurface, wasmContext } = await initSciChartSurface(params);

	if (params.chartType !== ChartType.STACKED) {
		// Chart Series 초기화
		initChartSeries(
			sciChartSurface,
			wasmContext,
			params.strokeColor,
			params.thickness || 1.0,
			params.barWidth || 0.4,
			params.chartType,
			params.dataSeriesName,
			params.warningHighValue,
			params.xValues || undefined,
			params.yValues || undefined,
		);
	}

	// Chart Annotation 초기화
	if (params.warningHighValue !== undefined) {
		initThresholdAnnotation(sciChartSurface, params.warningHighValue, params.theme);
	}

	// AXIS(1,2,3,4) 표시 Letter Box 초기화
	if (params.isLetterVisible || false) initLetterBox(sciChartSurface);

	// mouse opts 기능
	if (params.hasMouseOpts?.mouseOpts)
		getMouseOptions(sciChartSurface, params.hasMouseOpts.hasRubberBandOpts);

	return sciChartSurface;
}

export function updateLineChart(
	dataSource: IDataFormat[],
	sciChartSurface: SciChartSurface,
	xRange: number,
	interval: number,
	averageCount: number,
	markFlag: boolean,
): void {
	while (dataSource.length > 0) {
		const data: IDataFormat = dataSource.shift()!;
		const timestamp = data!.timestamp;
		const maxDataCount: number = (xRange * 1000 * 1.1) / interval;
		// bar chart 로드 시 플리커링 안보이게
		preventBarFlickering(sciChartSurface);

		// 데이터 추가
		const valueArray = appendChartData(sciChartSurface, data, timestamp);

		// 에러 발생 시 마크 추가
		if (markFlag) {
			addMarkerAnnotation(sciChartSurface, timestamp, parseFloat(valueArray[0]));
		}

		// 애니메이션 효과
		animationEffect(sciChartSurface, timestamp, xRange, interval, averageCount);

		// 현재값 표시
		displayDataAnnotation(sciChartSurface, [...valueArray]);

		// 불필요한 데이터 제거
		removeChartData(sciChartSurface, maxDataCount);
	}
}

export function updateGroupChart(
	dataSource: IDataFormat[],
	sciChartSurface: SciChartSurface[],
	xRange: number,
	interval: number,
	averageCount: number = 1,
	markFlag: boolean,
): void {
	let dataSourceIdx = 0;
	while (dataSource.length > 0) {
		const data = dataSource.shift();
		const timestamp = data!.timestamp;
		const xAxisArray: NumericAxis[] = [];
		const maxDataCount: number = (xRange * 1000 * 1.1) / interval;
		sciChartSurface.forEach((surface, i) => {
			// bar chart 로드 시 플리커링 안보이게
			preventBarFlickering(surface);
			// 데이터 추가
			const valueArray = appendChartData(surface, data!, timestamp);

			// 애니메이션 효과
			animationEffect(surface, timestamp, xRange, interval, averageCount);

			// 에러 발생 시 마커 추가
			if (i === 0 && markFlag && dataSourceIdx === 0) {
				addMarkerAnnotation(surface, timestamp, parseFloat(valueArray[i]));
			}

			// x축 배열 담기
			xAxisArray[i] = surface.xAxes.get(0) as NumericAxis;

			// 불필요한 데이터 제거
			removeChartData(surface, maxDataCount);
		});

		// x축 공유
		for (let i = 0; i < xAxisArray.length; i++) {
			xAxisArray
				.filter((_, idx) => i !== idx)
				.forEach((xAxis) =>
					xAxisArray[i].visibleRangeChanged.subscribe((data) => {
						xAxis.visibleRange = data!.visibleRange;
					}),
				);
		}
		dataSourceIdx++;
	}
}

//#endregion

//#region Function (Initialize)
export async function initSciChartSurfaceBase(params: IInitSciChartParams) {
	// SciChart Config
	initChartConfig();
	const { sciChartSurface, wasmContext } = await initChartSurface(params);
	// Chart 축 초기화
	initChartAxis(
		sciChartSurface,
		wasmContext,
		params.isAxisXVisible || false,
		params.isAxisYVisible || false,
		params.xRange || 100,
		params.yRange,
		params.xLabelString || undefined,
		params.xValues || undefined,
		params.yLabelPrecision || undefined,
		params.setYVisibleRange || undefined,
		params.autoTicksY || undefined,
		params.autoRangeY || undefined,
	);
	return { sciChartSurface, wasmContext };
}

export function initChartConfig() {
	// SciChart 라이센스키 설정
	SciChartSurface.setRuntimeLicenseKey(PUBLIC_SCICHART_LICENSE_KEY);

	SciChartSurface.configure({
		dataUrl: `${PUBLIC_SCICHART_DATA_FILE_PATH}`,
		wasmUrl: `${PUBLIC_SCICHART_WASM_FILE_PATH}`,
	});
}

export async function initChartSurface(
	params: IChartSurface,
): Promise<{ sciChartSurface: SciChartSurface; wasmContext: TSciChart }> {
	const { sciChartSurface, wasmContext } = await SciChartSurface.create(params.chartName, {
		theme: {
			...params.theme.SciChartJsTheme,
			sciChartBackground: params.backgroundColor,
			loadingAnimationBackground: params.backgroundColor,
			loadingAnimationForeground: "green",
			legendBackgroundBrush: "null",
		},
		loader: new CustomChartLoader(),
		padding: params.padding as Thickness,
		drawSeriesBehindAxis: params.isDrawBehind == undefined ? true : false,
		disableAspect: true,
	});
	return { sciChartSurface, wasmContext };
}

export function initChartAxis(
	sciChartSurface: SciChartSurface,
	wasmContext: TSciChart,
	isAxisXVisible: boolean,
	isAxisYVisible: boolean,
	xRange: number,
	yRange: number,
	xLabelString?: string[],
	xValues?: number[],
	yLabelPrecision?: number,
	setYVisibleRange?: boolean,
	autoTicksY?: boolean,
	autoRangeY?: boolean,
	yRangePadding?: { min: number; max: number },
	yGridLineVisible?: { minor: boolean; major: boolean },
	yGridLineColor?: { minor: string; major: string },
) {
	// Axis 생성
	const xAxis: NumericAxis = createNumericXAxis(wasmContext, isAxisXVisible, xLabelString);
	const xRangeMaxValue = Date.now() / 1_000 + 9 * 60 * 60;
	const xRangeMinValue = xRangeMaxValue - xRange;

	if (xValues) {
		xAxis.visibleRange = new NumberRange(xValues[0], xValues[xValues.length - 1]);
	} else {
		xAxis.visibleRange = new NumberRange(xRangeMinValue, xRangeMaxValue);
	}

	const yAxis: NumericAxis = createNumericYAxis(
		wasmContext,
		yRange,
		isAxisYVisible,
		yLabelPrecision,
		setYVisibleRange,
		autoTicksY,
		autoRangeY,
		yRangePadding,
		yGridLineVisible,
		yGridLineColor,
	);

	// SciChart에 Axis 추가
	sciChartSurface.xAxes.add(xAxis);
	sciChartSurface.yAxes.add(yAxis);

	return [xAxis, yAxis];
}

function initChartSeries(
	sciChartSurface: SciChartSurface,
	wasmContext: TSciChart,
	color: string | string[],
	thickness: number,
	barWidth: number,
	chartType: ChartType,
	dataSeriesName: string | string[],
	warningHighValue?: number,
	xValues?: number[],
	yValues?: number[],
) {
	// Chart Series 생성
	if (Array.isArray(dataSeriesName)) {
		dataSeriesName.forEach((name, i) => {
			const renderableSeries = createFastRenderableSeries(
				wasmContext,
				name,
				color[i],
				thickness,
				barWidth,
				chartType,
				warningHighValue,
				xValues,
				yValues,
			);
			sciChartSurface.renderableSeries.add(renderableSeries);
		});

		// chart Modifier 표시
		showSeriesModifier(sciChartSurface);
	} else {
		const renderableSeries = createFastRenderableSeries(
			wasmContext,
			dataSeriesName as string,
			color as string,
			thickness,
			barWidth,
			chartType,
			warningHighValue,
			xValues,
			yValues,
		);
		// SciChart에 Series 추가
		sciChartSurface.renderableSeries.add(renderableSeries);
	}
}

function showSeriesModifier(sciChartSurface: SciChartSurface) {
	sciChartSurface.chartModifiers.add(
		new LegendModifier({
			placement: ELegendPlacement.TopLeft,
			orientation: ELegendOrientation.Vertical,
			showCheckboxes: true,
			showSeriesMarkers: true,
			showLegend: true,
		}),
	);
}

function initThresholdAnnotation(
	sciChartSurface: SciChartSurface,
	warningHighValue: number,
	theme: AppThemeBase,
) {
	// 영역 표시
	const boxHighAnnotation = new BoxAnnotation({
		x1: 0,
		x2: 1,
		y1: warningHighValue,
		y2: warningHighValue * 5,
		fill: theme.MutedRed + "11",
		opacity: 0.7,
		strokeThickness: 0,
		xCoordinateMode: ECoordinateMode.Relative,
	});

	// 라인 표시
	const thresholdHighAnnotation = new HorizontalLineAnnotation({
		stroke: theme.MutedRed,
		opacity: 0.6,
		strokeThickness: 1,
		strokeDashArray: [1, 1],
		y1: warningHighValue,
		labelPlacement: ELabelPlacement.BottomLeft,
		axisLabelFill: theme.MutedRed,
		axisFontSize: 10,
		showLabel: true,
		isEditable: false,
	});

	sciChartSurface.annotations.add(boxHighAnnotation);
	sciChartSurface.annotations.add(thresholdHighAnnotation);
}

function initLetterBox(sciChartSurface: SciChartSurface) {
	const Letter = sciChartSurface.renderableSeries.get(0).getDataSeriesName();
	sciChartSurface.annotations.add(
		new TextAnnotation({
			text: Letter[Letter.length - 1].toUpperCase(),
			fontSize: 10,
			fontWeight: "300",
			textColor: "#8E98A1",
			xCoordinateMode: ECoordinateMode.Relative,
			yCoordinateMode: ECoordinateMode.Relative,
			horizontalAnchorPoint: EHorizontalAnchorPoint.Center,
			verticalAnchorPoint: EVerticalAnchorPoint.Center,
			x1: 0.03,
			y1: 0.11,
		}),
		new BoxAnnotation({
			fill: "#8E98A14F",
			opacity: 1,
			strokeThickness: 0,
			xCoordinateMode: ECoordinateMode.Relative,
			yCoordinateMode: ECoordinateMode.Relative,
			x1: 0,
			x2: 0.06,
			y1: 0,
			y2: 0.3,
		}),
	);
}
//#endregion

//#region Function (Creator)
export function createNumericXAxis(
	wasmContext: TSciChart,
	isVisible: boolean,
	xLabelString?: string[],
): NumericAxis {
	const axis: NumericAxis = new NumericAxis(wasmContext, {
		isVisible,
		minorGridLineStyle: {
			color: AXIS_MINOR_LINE_COLOR,
		},
		drawMinorGridLines: false,
		drawMajorGridLines: false,
		majorGridLineStyle: {
			color: AXIS_MAJOR_LINE_COLOR,
		},
		labelProvider:
			xLabelString === undefined
				? new NumericLabelProvider({
						labelFormat: ENumericFormat.Date_HHMMSS,
						cursorLabelFormat: ENumericFormat.Date_HHMMSS,
				  })
				: new TextLabelProvider({
						labels: xLabelString,
				  }),
		autoTicks: xLabelString ? false : true,
		majorDelta: xLabelString && 1,
		minorDelta: xLabelString && 1,
	});

	return axis;
}
export function createNumericYAxis(
	wasmContext: TSciChart,
	yRange: number,
	isVisible: boolean,
	yLabelPrecision?: number,
	setVisibleRange?: boolean,
	autoTicks?: boolean,
	autoRange?: boolean,
	yRangePadding?: { min: number; max: number },
	yGridLineVisible?: { minor: boolean; major: boolean },
	yGridLineColor?: { minor: string; major: string },
): NumericAxis {
	const axis: NumericAxis = new NumericAxis(wasmContext, {
		isVisible: isVisible,
		minorGridLineStyle: {
			color: yGridLineVisible && yGridLineColor ? yGridLineColor.minor : AXIS_MINOR_LINE_COLOR,
			// strokeDashArray: [10, 15],
		},
		majorGridLineStyle: {
			color: yGridLineVisible && yGridLineColor ? yGridLineColor.major : AXIS_MAJOR_LINE_COLOR,
			strokeDashArray: [5, 10],
		},
		drawMinorGridLines: yGridLineVisible ? true : false,
		drawMajorGridLines: yGridLineVisible ? true : false,
		visibleRange:
			setVisibleRange == undefined || setVisibleRange !== false
				? new NumberRange(0, yRange)
				: undefined,
		autoRange: autoRange ? EAutoRange.Always : undefined,
		growBy: yRangePadding ? new NumberRange(yRangePadding.min, yRangePadding.max) : undefined,
		// y축 value position
		labelStyle: {
			alignment: ELabelAlignment.Right,
			fontSize: 12,
		},

		// y축 value 라인 위치
		axisAlignment: EAxisAlignment.Right,

		// y축 값 표시 개수
		autoTicks: autoTicks === undefined || autoTicks !== false ? true : false,
		majorDelta: yRange > 1 ? yRange / 2 : yRange / 1,

		// 소숫점 표시
		labelPrecision: yLabelPrecision ? yLabelPrecision : yRange > 1 ? 0 : 1,
	});
	return axis;
}

export async function createOverviewChart(
	sciChartSurface: SciChartSurface,
	params: IInitSciChartParams,
	overviewTag: string,
): Promise<SciChartOverview> {
	const sciChartOverview = await SciChartOverview.create(sciChartSurface, overviewTag, {
		transformRenderableSeries: getOverviewSeries,
		theme: { type: "Dark", sciChartBackground: DETAIL_CHART_BACKGROUND_COLOR },
		loader: new CustomChartLoader(),
		overviewXAxisOptions: {
			backgroundColor: DETAIL_CHART_BACKGROUND_COLOR,
			majorDelta: 10,
			autoTicks: true,
			// isVisible: true,
			labelProvider: new NumericLabelProvider({
				labelFormat: ENumericFormat.Date_HHMMSS,
				cursorLabelFormat: ENumericFormat.Date_HHMMSS,
			}),
			minorGridLineStyle: { color: DETAIL_CHART_MINOR_LINE_COLOR },
			majorGridLineStyle: { color: DETAIL_CHART_MINOR_LINE_COLOR },
		},
		overviewYAxisOptions: {
			growBy: new NumberRange(params.yRangePadding?.min, params.yRangePadding?.max),
		},
	});
	return sciChartOverview;
}

function createFastRenderableSeries(
	wasmContext: TSciChart,
	dataSeriesName: string,
	color: string,
	thickness: number,
	barWidth: number,
	chartType: ChartType,
	warningHighValue?: number,
	xValues?: number[] | undefined,
	yValues?: number[] | undefined,
):
	| FastLineRenderableSeries
	| FastColumnRenderableSeries
	| FastMountainRenderableSeries
	| StackedColumnRenderableSeries {
	const dataSeries: XyDataSeries = new XyDataSeries(wasmContext, {
		dataSeriesName: replaceDataName(dataSeriesName),
		containsNaN: false,
		isSorted: true,
		dataIsSortedInX: true,
		dataEvenlySpacedInX: true,
		xValues,
		yValues,
	});
	const strokePaletteProvider: IStrokePaletteProvider = {
		onAttached(_parentSeries: IRenderableSeries): void {},
		onDetached(): void {},
		strokePaletteMode: EStrokePaletteMode.GRADIENT,
		// This function called once per data-point for line stroke. Colors returned must be in ARGB format (uint) e.g. 0xFF0000FF is Red
		overrideStrokeArgb(_xValue: number, yValue: number): number {
			return getColor(yValue, warningHighValue!, THRESHOLD_HIGH_COLOR, color);
		},
	};

	let renderableSeries:
		| FastLineRenderableSeries
		| FastColumnRenderableSeries
		| FastMountainRenderableSeries
		| StackedColumnRenderableSeries;

	switch (chartType) {
		case ChartType.LINE:
			renderableSeries = new FastLineRenderableSeries(wasmContext, {
				resamplingMode: EResamplingMode.Auto,
				stroke: color,
				strokeThickness: thickness,
				dataSeries: dataSeries,
				// Change Line Color When Over High Level
				paletteProvider: strokePaletteProvider,
			});

			break;
		case ChartType.BAR:
			renderableSeries = new FastColumnRenderableSeries(wasmContext, {
				// When solid fill required, use fill
				fill: color,
				stroke: color,
				strokeThickness: thickness,
				// optional cornerradius. Experimental!
				cornerRadius: 4,
				// Defines the relative width between columns
				dataPointWidth: barWidth,
				dataSeries: dataSeries,
				resamplingMode: EResamplingMode.Auto,
			});

			break;
		case ChartType.MOUNTAIN:
			renderableSeries = new FastMountainRenderableSeries(wasmContext, {
				stroke: color,
				strokeThickness: thickness,
				dataSeries: dataSeries,
				paletteProvider: strokePaletteProvider,
				resamplingMode: EResamplingMode.Auto,
			});

			break;
		case ChartType.STACKED:
			renderableSeries = new StackedColumnRenderableSeries(wasmContext, {});
	}
	return renderableSeries;
}

function createStackedRenderableSeries() {}
//#endregion

//#region Function (General)
function appendChartData(
	sciChartSurface: SciChartSurface,
	data: IDataFormat,
	timestamp: number,
): string[] {
	let valueArray: string[] = [];
	sciChartSurface.renderableSeries.asArray().forEach((renderableSeries, i) => {
		const dataSeries = renderableSeries.dataSeries as XyDataSeries;
		let value = data?.values.get(dataSeries.dataSeriesName) as number;
		valueArray[i] = value.toFixed(2);
		dataSeries.append(timestamp, value);
	});
	return valueArray;
}
// Chart 표시 Marker

// marker 생성 & 추가
function addMarkerAnnotation(sciChartSurface: SciChartSurface, x1: number, y1: number): void {
	const markerAnnotation = new CustomAnnotation({
		x1,
		y1,
		opacity: 0.6,
		yCoordinateMode: ECoordinateMode.DataValue,
		verticalAnchorPoint: EVerticalAnchorPoint.Bottom,
		horizontalAnchorPoint: EHorizontalAnchorPoint.Center,
		svgString: `<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="red"><path d="M0 0h18v18H0z" fill="none"/><circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/></svg>`,
		id: `marked_${x1}`,
	});
	sciChartSurface.annotations.add(markerAnnotation);
}

// 데이터 제거
function removeChartData(surface: SciChartSurface, maxDataCount: number) {
	surface.renderableSeries.asArray().forEach((renderableSeries) => {
		const dataSeries = renderableSeries.dataSeries as XyDataSeries;
		if (dataSeries.count() > maxDataCount) {
			// Data 제거
			dataSeries.removeAt(0);
			// Mark Annotation 제거
			const firstMark = surface.annotations.asArray().filter((annotation) => {
				return annotation.type.includes("Custom");
			})[0];
			if (firstMark && dataSeries.xRange.min - firstMark.x1 > 0) {
				surface.annotations.remove(firstMark);
			}
		}
	});
}

function animationEffect(
	sciChartSurface: SciChartSurface,
	timestamp: number,
	xRange: number,
	interval: number,
	averageCount: number,
) {
	// x축 이동 및 애니메이션 효과
	sciChartSurface.xAxes.asArray().forEach((x) => {
		x.animateVisibleRange(
			new NumberRange(timestamp - xRange, timestamp),
			interval * averageCount * 0.99,
			easing.linear,
		);
	});
}

function preventBarFlickering(surface: SciChartSurface) {
	if (surface.renderableSeries.get(0).type.includes("Column")) {
		const columnSeries: FastColumnRenderableSeries = surface.renderableSeries.get(
			0,
		) as FastColumnRenderableSeries;
		if (surface.renderableSeries.get(0).dataSeries.count() === 0) {
			columnSeries.isVisible = false;
		} else {
			columnSeries.isVisible = true;
		}
	}
}

function displayDataAnnotation(sciChartSurface: SciChartSurface, y: Array<string>) {
	if (sciChartSurface.annotations.getById("Display")) {
		sciChartSurface.annotations.remove(sciChartSurface.annotations.getById("Display"));
	}

	if (sciChartSurface.renderableSeries.get(0))
		sciChartSurface.annotations.add(
			new TextAnnotation({
				text: y === undefined ? "No Data" : `${y}`,
				id: "Display",
				horizontalAnchorPoint: EHorizontalAnchorPoint.Center,
				verticalAnchorPoint: EVerticalAnchorPoint.Center,
				x1: 0.5,
				y1: 0.6,
				fontSize: 24,
				fontWeight: "Bold",
				textColor: "white",
				opacity: 0.15,
				xCoordinateMode: ECoordinateMode.Relative,
				yCoordinateMode: ECoordinateMode.Relative,
				annotationLayer: EAnnotationLayer.BelowChart,
			}),
		);
}

// Threshold over Color
function getColor(
	y: number,
	thresholdHighValue: number,
	thresholdHighColor: number,
	color: string,
) {
	if (y > thresholdHighValue) {
		return thresholdHighColor;
	}
	return parseColorToUIntArgb(color);
}

// Mouse options
function getMouseOptions(sciChartSurface: SciChartSurface, isRubberBandOpts?: boolean) {
	sciChartSurface.chartModifiers.add(
		// 더블 클릭시 화면 맞춤 기능
		new ZoomExtentsModifier(),
		// 휠로 확대 축소 기능
		new MouseWheelZoomModifier(),

		// 드래그시 확대 기능 (화면 이동 기능이랑 동시에 사용 불가) // 드래그로 화면 이동 기능
		isRubberBandOpts ? new RubberBandXyZoomModifier() : new ZoomPanModifier(),
	);
}

// Over view Chart Options
function getOverviewSeries(defaultSeries: IRenderableSeries) {
	return new FastMountainRenderableSeries(defaultSeries.parentSurface.webAssemblyContext2D, {
		dataSeries: defaultSeries.dataSeries,
		fillLinearGradient: new GradientParams(new Point(0, 0), new Point(0, 1), [
			{ color: scichart2022Theme.VividSkyBlue + "77", offset: 0.2 },
			{ color: "Transparent", offset: 1 },
		]),
		stroke: scichart2022Theme.VividSkyBlue,
	});
}
//#endregion
