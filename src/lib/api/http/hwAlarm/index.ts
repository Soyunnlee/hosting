import { PUBLIC_ENABLE_STAND_ALONE } from "$env/static/public";
import {
	getHWAbnormalHistoryDummy,
	getHWAbnormalInformationDummy,
	getHWAbnormalStatisticsDummy,
} from "$lib/test/http";
import { fetchRequest } from "$lib/util/fetch";
import { makeParamsUrl } from "../schema";
import {
	GET_HW_ABNORMAL_URL,
	GET_HW_ABNORMAL_STATISTICS_URL,
	GET_HW_ABNORMAL_HISTORY_URL,
} from "./route";
import type { HWAbnormalStatisticsParams, HWAbnormalStatisticsResponseBody } from "./schema";
import type { HWAbnormalUpdateBody, HWAbnormalUpdateResponseBody } from "./schema";
import { UPDATE_HW_ABNORMAL_URL } from "./route";
import type {
	HWAbnormalResponseBody,
	IHttpApiHWAbnormal,
	HWAbnormalInformationParams,
	HWAbnormalHistoryParams,
	HWAbnormalHistoryResponseBody,
} from "./schema";

export const HWAbnormal: IHttpApiHWAbnormal = {
	// 7.1 HW Abnormal 조회
	getHWAbnormalInformation,
	// 7.2 HW Abnormal Update
	updateHWAbnormal,
	// 7.3 기간별 설비 알람 시간 통계
	getHWAbnormalStatistics,
	// 7.4 설비 알람 이력 조회
	getHWAbnormalHistory,
};

//#region function
// 7.1 HW Abnormal 조회
async function getHWAbnormalInformation(
	params?: HWAbnormalInformationParams,
): Promise<HWAbnormalResponseBody> {
	const url = makeParamsUrl(GET_HW_ABNORMAL_URL, params);
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getHWAbnormalInformationDummy();
	} else {
		const response: Response = await fetchRequest("GET", url);
		const responseBody: Promise<HWAbnormalResponseBody> = await response.json();
		return responseBody;
	}
}

// 7.2 HW Abnormal Update
// TODO TEST CODE 추가
async function updateHWAbnormal(body: HWAbnormalUpdateBody): Promise<HWAbnormalUpdateResponseBody> {
	const response: Response = await fetchRequest("PATCH", UPDATE_HW_ABNORMAL_URL, body);
	const responseBody: Promise<HWAbnormalUpdateResponseBody> = await response.json();
	return responseBody;
}

// 7.3 HW Abnormal Statistics 조회
async function getHWAbnormalStatistics(
	params: HWAbnormalStatisticsParams,
): Promise<HWAbnormalStatisticsResponseBody> {
	const url = makeParamsUrl(GET_HW_ABNORMAL_STATISTICS_URL, params);
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getHWAbnormalStatisticsDummy();
	} else {
		const response: Response = await fetchRequest("GET", url);
		const responseBody: Promise<HWAbnormalStatisticsResponseBody> = await response.json();
		return responseBody;
	}
}

// 7.4 HW Abnormal History 조회
async function getHWAbnormalHistory(
	params: HWAbnormalHistoryParams,
): Promise<HWAbnormalHistoryResponseBody> {
	const url = makeParamsUrl(GET_HW_ABNORMAL_HISTORY_URL, params);
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getHWAbnormalHistoryDummy();
	} else {
		const response: Response = await fetchRequest("GET", url);
		const responseBody: Promise<HWAbnormalHistoryResponseBody> = await response.json();
		return responseBody;
	}
}
//#endregion
