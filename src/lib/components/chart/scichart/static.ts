import { ChartType } from "$lib/util/scichart";
import type { TSingleChartDataList } from "./schema";
import type { TAxisType, TSingleChartDataListAxis, TSingleChartDataListNoAxis } from "./schema";

//#region Static Value
export const MONITORING_REFRESH_PERIOD = 100;
export const REALTIME_REFRESH_PERIOD = 100;
export const CHART_X_RANGE = 50;
export const REALTIME_AVERAGE_COUNT = 1;
export const ALARM_DURATION = 3000; // ms

// Axis 설정
export const AXIS: TAxisType[] = ["1", "2", "3", "4"];

// DataList 설정
export const DataListAll: TSingleChartDataList[] = [
	"torque",
	"speed",
	"pos",
	"amp_temp",
	"cpu_temp",
	"vacuum",
];
// Axis 에 따른 DataList 설정
export const DataListWithAxis: TSingleChartDataListAxis[] = ["torque", "speed", "pos", "amp_temp"];
export const DataListNoAxis: TSingleChartDataListNoAxis[] = ["cpu_temp", "vacuum"];

export const GROUP_CHART_INFO = {
	AI: {
		chartName: "AI",
		chartType: [ChartType.LINE, ChartType.BAR],
		dataName: [["real", "predict"], "loss"],
	},
};

//#endregion
