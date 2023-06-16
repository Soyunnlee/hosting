import type { ChartType } from "$lib/util/scichart";
import { SingleChartCommonStyle, SingleChartStyleSetting } from "./chartStyling";
import { AXIS } from "../static";
import type { TSingleChartDataList } from "../schema";
import type { AppThemeBase } from "./theme";
import type { Thickness } from "scichart";

//#region Type
export type IdentifyName = "chartName" | "dataName";
export type StaticValuePerChart = "yRange" | "warningHighValue";

//#endregion

//#region Interface
export interface IChartParams {
	// Identify Name
	chartName: string;
	dataName: string | string[] | Array<string[] | string>;

	// Common Setting
	backgroundColor: string;
	theme: AppThemeBase;
	xRange: number;
	interval: number;
	isAxisXVisible?: boolean;
	isAxisYVisible?: boolean;
	isLetterVisible?: boolean;

	padding: Thickness | Thickness[];
	setYVisibleRange?: boolean;
	autoTicksY?: boolean;
	autoRangeY?: boolean;
	yLabelPrecision?: number;
	isDrawBehind?: boolean;
	hasMouseOpts?: { mouseOpts: boolean; hasRubberBandOpts?: boolean };
	yRangePadding?: { min: number; max: number };
	yGridLineVisible?: { minor: boolean; major: boolean };
	yGridLineColor?: { minor: string; major: string };

	// Chart Style
	chartType: ChartType | ChartType[];
	strokeColor: string | string[] | Array<string[] | string>;
	thickness?: number;
	barWidth?: number;
}

// SingleChart Params
export interface ISingleChartParams extends IChartParams {
	chartType: ChartType;
	dataName: string | string[];
	strokeColor: string | string[];
}

// SingleChart Stylinlg Params
export interface IChartStylingElements {
	chartType: ChartType;
	strokeColor: string;
	thickness?: number;
	barWidth?: number;
	padding: Thickness;
}

// SingleChart Styling Per Chart
export interface ISingleChartStyle extends Record<TSingleChartDataList, IChartStylingElements> {}

// GroupChart Params
export interface IGroupChartParams extends IChartParams {
	chartType: ChartType[];
	dataName: Array<string[] | string>;
	strokeColor: Array<string[] | string>;
	yRange: number[];
	padding: Thickness[];
}
//#endregion

//#region function
export function SingleChartStylePerAxis(name: TSingleChartDataList): Array<ISingleChartParams> {
	return AXIS.map((axis) => ({
		...SingleChartCommonStyle,
		chartName: name + `_${axis}`,
		dataName: name.toLowerCase() + `_${axis}`,
		chartType: SingleChartStyleSetting[name].chartType,
		strokeColor: SingleChartStyleSetting[name].strokeColor,
		thickness: SingleChartStyleSetting[name].thickness || undefined,
		barWidth: SingleChartStyleSetting[name].barWidth || undefined,
		padding: SingleChartStyleSetting[name].padding || undefined,
		isLetterVisible: true,
	}));
}

export function SingleChartStyleNoAxis(name: TSingleChartDataList): Array<ISingleChartParams> {
	return [
		{
			...SingleChartCommonStyle,
			chartName: name,
			dataName: name.toLowerCase(),
			chartType: SingleChartStyleSetting[name].chartType,
			strokeColor: SingleChartStyleSetting[name].strokeColor,
			thickness: SingleChartStyleSetting[name].thickness || undefined,
			barWidth: SingleChartStyleSetting[name].barWidth || undefined,
			padding: SingleChartStyleSetting[name].padding || undefined,
		},
	];
}
//#endregion
