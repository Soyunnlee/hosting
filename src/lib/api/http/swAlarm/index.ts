import { PUBLIC_ENABLE_STAND_ALONE } from "$env/static/public";
import {
	getSWAbnormalInformationDummy,
	UpdateSWAbnormalDummy,
	getSWAbnormalHistoryDummy,
	getSWAbnormalDetailDummy,
} from "$lib/test/http";
import { fetchRequest } from "$lib/util/fetch";
import { makeParamsUrl } from "../schema";
import {
	GET_SW_ABNORMAL_URL,
	UPDATE_SW_ABNORMAL_URL,
	GET_SW_ABNORMAL_HISTORY_URL,
	GET_SW_ABNORMAL_DETAIL_URL,
} from "./route";
import type {
	IHttpApiSWAbnormal,
	SWAbnormalInformationParams,
	SWAbnormalResponseBody,
	SWAbnormalUpdateBody,
	SWAbnormalUpdateResponseBody,
	SWAbnormalHistoryParams,
	SWAbnormalHistoryResponseBody,
	SWAbnormalDetailParams,
	SWAbnormalDetailResponseBody,
} from "./schema";

export const SWAbnormal: IHttpApiSWAbnormal = {
	// 6.1 SW Abnormal 조회
	getSWAbnormalInformation,
	// 6.2 미확인 알람 업데이트
	updateSWAbnormal,
	// 6.3 SW Abnormal 이력 조회
	getSWAbnormalHistory,
	// 6.4 SW Abnormal 상세 조회
	getSWAbnormalDetail,
};

//#region function
// 6.1 SW Abnormal 조회
async function getSWAbnormalInformation(
	params?: SWAbnormalInformationParams,
): Promise<SWAbnormalResponseBody> {
	const url = makeParamsUrl(GET_SW_ABNORMAL_URL, params);
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getSWAbnormalInformationDummy();
	} else {
		const response: Response = await fetchRequest("GET", url);
		const responseBody: Promise<SWAbnormalResponseBody> = await response.json();
		return responseBody;
	}
}

// 6.2 SW Abnormal Update
async function updateSWAbnormal(body: SWAbnormalUpdateBody): Promise<SWAbnormalUpdateResponseBody> {
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return UpdateSWAbnormalDummy();
	} else {
		const response: Response = await fetchRequest("PATCH", UPDATE_SW_ABNORMAL_URL, body);
		const responseBody: Promise<SWAbnormalUpdateResponseBody> = await response.json();
		return responseBody;
	}
}

// 6.3 SW Abnormal 이력 조회
async function getSWAbnormalHistory(params: SWAbnormalHistoryParams) {
	const url = makeParamsUrl(GET_SW_ABNORMAL_HISTORY_URL, params);
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getSWAbnormalHistoryDummy();
	} else {
		const response: Response = await fetchRequest("GET", url);
		const responseBody: Promise<SWAbnormalHistoryResponseBody> = await response.json();
		return responseBody;
	}
}

// 6.4 SW Abnormal 상세 조회
async function getSWAbnormalDetail(
	params: SWAbnormalDetailParams,
): Promise<SWAbnormalDetailResponseBody> {
	const url = makeParamsUrl(GET_SW_ABNORMAL_DETAIL_URL, params);
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getSWAbnormalDetailDummy();
	} else {
		const response: Response = await fetchRequest("GET", url);
		const responseBody: Promise<SWAbnormalDetailResponseBody> = await response.json();
		return responseBody;
	}
}
//#endregion
