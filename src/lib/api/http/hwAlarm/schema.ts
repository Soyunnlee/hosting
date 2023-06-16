import type { ResponseWithData } from "../schema";

export interface IHttpApiHWAbnormal {
	getHWAbnormalInformation(params?: HWAbnormalInformationParams): Promise<HWAbnormalResponseBody>;
	updateHWAbnormal(id: HWAbnormalUpdateBody): Promise<HWAbnormalUpdateResponseBody>;
	getHWAbnormalStatistics(
		params: HWAbnormalStatisticsParams,
	): Promise<HWAbnormalStatisticsResponseBody>;
	getHWAbnormalHistory(params: HWAbnormalHistoryParams): Promise<HWAbnormalHistoryResponseBody>;
}
//#region Response Body
// 7.1 HW Abnormal for machine status
type HWAbnormalInformation = {
	robot_id: string;
	count: number;
};

export type HWAbnormalResponseBody = ResponseWithData<HWAbnormalInformation>;

// 7.2 HW Abnormal Update
type HWAbnormalUpdate = {
	id: number;
	robot_id: string;
	alarm_code: string;
	detail_code: string;
	is_confirmed: boolean;
	proceed_time: string;
};
export type HWAbnormalUpdateResponseBody = ResponseWithData<HWAbnormalUpdate>;

// 7.3 HW Statistics 조회
type HWAbnormalStatistics = {
	robot_id: string;
	items: Array<HWAbnormalStatisticsItems>;
};
export type HWAbnormalStatisticsItems = {
	time: string;
	timestamp: number;
	sub_items: Array<HWAbnormalStatisticsSubItems>;
};
export type HWAbnormalStatisticsSubItems = {
	app_error_code: string;
	duration: number;
};
export type HWAbnormalStatisticsResponseBody = ResponseWithData<HWAbnormalStatistics>;

// 7.4 HW ABNORMAL HISTORY 조회
type HWAbnormalHistory = {
	robot_id: string;
	page_count: number;
	page_no: number;
	count_per_page: number;
	items: Array<HWAbnormalHistoryItems>;
};

export type HWAbnormalHistoryItems = {
	id: number;
	alarm_code: string;
	detail_code: string;
	is_confirmed: boolean;
	proceed_time: string;
};

export type HWAbnormalHistoryResponseBody = ResponseWithData<HWAbnormalHistory>;
//#endregion

//#region Request Params
// 7.1 HW Abnormal
export type HWAbnormalInformationParams = {
	is_confirmed?: boolean;
};

// 7.3 HW Abnormal Statistics
export type HWAbnormalStatisticsParams = {
	period_type: string;
	start: string;
	end: string;
};

// 7.4 HW Abnormal History
export type HWAbnormalHistoryParams = {
	start: string;
	end: string;
	page_no?: number;
	count_per_page?: number;
};
//#endregion

//#region
export type HWAbnormalUpdateBody = {
	id: number;
};
//#endregion
