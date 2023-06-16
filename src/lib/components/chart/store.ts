import { writable, type Writable } from "svelte/store";
import type { IMonitoringDataSingle } from "../../api/websocket/schema";
import type { TSingleChartDataList } from "../scichart/schema";

//#region ALARM FLAG
// For Threshold
export const ALARM_FLAG: Writable<
	Record<
		keyof Omit<IMonitoringDataSingle, "timestamp" | "signal" | "loss">,
		{ alarm: boolean; mark: boolean }
	>
> = writable({
	cpu_temp: {
		alarm: false,
		mark: false,
	},
	vacuum: {
		alarm: false,
		mark: false,
	},
	speed_1: {
		alarm: false,
		mark: false,
	},
	speed_2: {
		alarm: false,
		mark: false,
	},
	speed_3: {
		alarm: false,
		mark: false,
	},
	speed_4: {
		alarm: false,
		mark: false,
	},
	torque_1: {
		alarm: false,
		mark: false,
	},
	torque_2: {
		alarm: false,
		mark: false,
	},
	torque_3: {
		alarm: false,
		mark: false,
	},
	torque_4: {
		alarm: false,
		mark: false,
	},
	amp_temp_1: {
		alarm: false,
		mark: false,
	},
	amp_temp_2: {
		alarm: false,
		mark: false,
	},
	amp_temp_3: {
		alarm: false,
		mark: false,
	},
	amp_temp_4: {
		alarm: false,
		mark: false,
	},
	pos_1: {
		alarm: false,
		mark: false,
	},
	pos_2: {
		alarm: false,
		mark: false,
	},
	pos_3: {
		alarm: false,
		mark: false,
	},
	pos_4: {
		alarm: false,
		mark: false,
	},
	real: {
		alarm: false,
		mark: false,
	},
	predict: {
		alarm: false,
		mark: false,
	},
});

// For Abnormal
export const ALARM_FLAG_LOSS: Writable<
	Record<
		"loss",
		{
			[key: string]: { alarm: boolean; mark: boolean };
			vacuum: { alarm: boolean; mark: boolean };
		}
	>
> = writable({
	loss: {
		vacuum: {
			alarm: false,
			mark: false,
		},
	},
});
//#endregion

export const hwAlarmCounts: Writable<number> = writable(0);

export const swAbnormalCounts: Writable<Record<TSingleChartDataList, number>> = writable({
	cpu_temp: 0,
	amp_temp: 0,
	torque: 0,
	speed: 0,
	vacuum: 0,
	pos: 0,
});
export const aiAbnormalCounts: Writable<Partial<Record<TSingleChartDataList, number>>> = writable({
	vacuum: 0,
});
