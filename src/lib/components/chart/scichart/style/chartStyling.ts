//#region import
import { ChartType } from "$lib/util/scichart";
import {
	type IChartParams,
	type IChartStylingElements,
	type IdentifyName,
	type StaticValuePerChart,
	type ISingleChartStyle,
	type ISingleChartParams,
	SingleChartStyleNoAxis,
	SingleChartStylePerAxis,
	type IGroupChartParams,
} from "./schema";
import {
	CHART_X_RANGE,
	GROUP_CHART_INFO,
	MONITORING_REFRESH_PERIOD,
	REALTIME_REFRESH_PERIOD,
} from "../static";
import { scichart2022Theme } from "./theme";
import type { TSingleChartDataList, TGroupChartList } from "../schema";
import { CHART_BACKGROUND_COLOR, DETAIL_CHART_BACKGROUND_COLOR } from "./static";
import { Thickness } from "scichart";
//#endregion

//#region Single Chart Styling
// 공통 적용 스타일
export const SingleChartCommonStyle: Omit<
	IChartParams,
	keyof IChartStylingElements | IdentifyName
> = {
	backgroundColor: CHART_BACKGROUND_COLOR,
	xRange: CHART_X_RANGE,
	interval: MONITORING_REFRESH_PERIOD,
	theme: scichart2022Theme,
	isAxisXVisible: false,
};

// 차트별 스타일 설정
export const SingleChartStyleSetting: ISingleChartStyle = {
	cpu_temp: {
		strokeColor: scichart2022Theme.MutedPurple,
		chartType: ChartType.LINE,
		padding: new Thickness(4, 0, 2, -2),
	},
	vacuum: {
		strokeColor: scichart2022Theme.VividGreen,
		chartType: ChartType.LINE,
		padding: new Thickness(4, 0, 2, -2),
	},
	torque: {
		strokeColor: scichart2022Theme.VividOrange,
		chartType: ChartType.LINE,
		padding: new Thickness(4, 0, 2, -2),
	},
	speed: {
		strokeColor: scichart2022Theme.VividTeal,
		chartType: ChartType.LINE,
		padding: new Thickness(4, 0, 2, -2),
	},
	pos: {
		strokeColor: scichart2022Theme.MutedBlue,
		chartType: ChartType.LINE,
		padding: new Thickness(4, 0, 2, -2),
	},
	amp_temp: {
		strokeColor: scichart2022Theme.MutedOrange,
		chartType: ChartType.LINE,
		padding: new Thickness(4, 0, 2, -2),
	},
};

export const SINGLE_CHART_STYLE: Record<TSingleChartDataList, ISingleChartParams[]> = {
	cpu_temp: SingleChartStyleNoAxis("cpu_temp"),
	vacuum: SingleChartStyleNoAxis("vacuum"),
	torque: SingleChartStylePerAxis("torque"),
	speed: SingleChartStylePerAxis("speed"),
	amp_temp: SingleChartStylePerAxis("amp_temp"),
	pos: SingleChartStylePerAxis("pos"),
};
//#endregion

//#region Group Chart Styling
// 공통 적용 스타일
const GroupChartCommonStyle: Omit<
	IChartParams,
	keyof IChartStylingElements | IdentifyName | StaticValuePerChart
> = {
	backgroundColor: CHART_BACKGROUND_COLOR,
	theme: scichart2022Theme,
	xRange: CHART_X_RANGE,
	interval: REALTIME_REFRESH_PERIOD,
	isAxisXVisible: false,
	isAxisYVisible: false,
};

// 그룹 차트 스타일 설정
export const GROUP_CHART_STYLE: Record<TGroupChartList, IGroupChartParams> = {
	AI: {
		strokeColor: [["#306FFF", "#F8AD2C"], "green"],
		yRange: [1, 1],
		padding: [new Thickness(4, 0, 2, -2), new Thickness(0, 0, 0, -2)],
		...GROUP_CHART_INFO.AI,
		...GroupChartCommonStyle,
	},
};
//#endregion

//#region Static Chart Styling
export const StaticChartStylingSetting: Record<"abnormal", ISingleChartParams> = {
	abnormal: {
		theme: scichart2022Theme,
		padding: new Thickness(4, 0, 2, -2),
		xRange: CHART_X_RANGE,
		interval: MONITORING_REFRESH_PERIOD,
		strokeColor: scichart2022Theme.PaleOrange,
		chartType: ChartType.LINE,
		backgroundColor: DETAIL_CHART_BACKGROUND_COLOR,
		chartName: "abnormal_",
		dataName: "abnormal_",
		isAxisXVisible: true,
		isAxisYVisible: true,
		autoRangeY: true,
		yLabelPrecision: 2,
		hasMouseOpts: { mouseOpts: true },
		yRangePadding: { min: 0.1, max: 0.2 },
		yGridLineVisible: { minor: true, major: true },
		yGridLineColor: { minor: "#8D43CF4D", major: "#8D43CFFF" },
	},
};

//#endregion
