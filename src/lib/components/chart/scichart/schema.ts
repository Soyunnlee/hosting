import type { IDataFormat } from "$lib/util/scichart";
import type Queue from "queue-fifo";

//#region Type for Chart
export type TSingleChartDataList = TSingleChartDataListAxis | TSingleChartDataListNoAxis;

export type TSingleChartDataListNoAxis = "cpu_temp" | "vacuum";
export type TSingleChartDataListAxis = "amp_temp" | "torque" | "speed" | "pos";
export type TAxisType = "1" | "2" | "3" | "4";
export type TGroupChartList = "AI";

export interface IDeliveryData {
	chartWarningValue: {
		[name: string]: number;
	};
	maintenanceLifeValue: {
		[name: string]: number;
	};
}
export interface AxisQueue extends Record<TAxisType, Queue<IDataFormat>> {
	[key: number]: Queue<IDataFormat>;
}

export interface IQueueListWithAxis {
	[name: string]: AxisQueue;
	amp_temp: AxisQueue;
	torque: AxisQueue;
	speed: AxisQueue;
	pos: AxisQueue;
}

export interface IQueueListNoAxis {
	[name: string]: Queue<IDataFormat>;
	cpu_temp: Queue<IDataFormat>;
	vacuum: Queue<IDataFormat>;
}

export function replaceDataName(name: string): string {
	if (name === "real") return "실제값";
	else if (name === "predict") return "예측값";
	return name;
}
//#endregion
