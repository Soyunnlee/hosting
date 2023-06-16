import type { ResponseWithData, AbnormalType, AbnormalCategory } from "../schema";

export interface IHttpApiSWAbnormal {
	getSWAbnormalInformation(params?: SWAbnormalInformationParams): Promise<SWAbnormalResponseBody>;
	updateSWAbnormal(id: SWAbnormalUpdateBody): Promise<SWAbnormalUpdateResponseBody>;
	getSWAbnormalHistory(params: SWAbnormalHistoryParams): Promise<SWAbnormalHistoryResponseBody>;
	getSWAbnormalDetail(params: SWAbnormalDetailParams): Promise<SWAbnormalDetailResponseBody>;
}

//#region Response Body
// 6.1 SW Abnormal 조회
type SWAbnormalInformation = {
	robot_id: string;
	items: Array<SWAbnormalInformationItems>;
};

export type SWAbnormalInformationItems = {
	name: string;
	category: string;
	count: number;
};
export type SWAbnormalResponseBody = ResponseWithData<SWAbnormalInformation>;

// 6.2 SW Abnormal Checked Update
type SWAbnormalUpdate = {
	robot_id: string;
	id: number;
	name: string;
	category: AbnormalCategory;
	type: AbnormalType;
	setting_value: number;
	real_value: number;
	is_confirmed: boolean;
	proceed_time: string;
};
export type SWAbnormalUpdateResponseBody = ResponseWithData<SWAbnormalUpdate>;

// 6.3 SW Abnormal History 조회
type SWAbnormalHistory = {
	robot_id: string;
	page_count: number;
	page_no: number;
	items: Array<SWAbnormalHistoryItems>;
};
export type SWAbnormalHistoryItems = {
	id: number;
	name: string;
	category: AbnormalCategory;
	type: AbnormalType;
	setting_value: number;
	real_value: number;
	is_confirmed: boolean;
	proceed_time: string;
};
export type SWAbnormalHistoryResponseBody = ResponseWithData<SWAbnormalHistory>;

// 6.4 SW Abnormal 세부 조회
type SWAbnormalDetail = {
	robot_id: string;
	name: string;
	category: AbnormalCategory;
	type: AbnormalType;
	items: Array<SWAbnormalDetailItems>;
};
export type SWAbnormalDetailItems = {
	setting_value: number;
	real_value: number;
	proceed_time: string;
};
export type SWAbnormalDetailResponseBody = ResponseWithData<SWAbnormalDetail>;
//#endregion

//#region Request Params
export type SWAbnormalInformationParams = {
	is_confirmed?: boolean;
};
// 6.3 params
export type SWAbnormalHistoryParams = {
	start: string;
	end: string;
	category?: AbnormalCategory;
	name?: string;
	type?: AbnormalType;
	page_no?: number;
	count_per_page?: number;
};
//6.4 params
export type SWAbnormalDetailParams = {
	name: string;
	type: AbnormalType;
	proceed_time: string;
};
//#endregion

//#region Request Body
export type SWAbnormalUpdateBody = {
	id: number;
};
//#endregion
