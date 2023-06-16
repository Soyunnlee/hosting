import { PUBLIC_ENABLE_STAND_ALONE } from "$env/static/public";
import {
	getRobotInformationDummy,
	getThresholdInformationDummy,
	getLossInformationDummy,
	getReasonInformationDummy,
} from "$lib/test/http";
import { fetchRequest } from "$lib/util/fetch";
import { makeParamsUrl } from "../schema";
import type { LossInformationParams } from "./schema";
import {
	GET_ROBOT_INFORMATION_URL,
	GET_THRESHOLD_INFORMATION_URL,
	GET_LOSS_INFORMATION_URL,
	GET_REASON_INFORMATION_URL,
} from "./route";
import type {
	IHttpApiMaster,
	LossResponseBody,
	RobotResponseBody,
	ThresholdInformationParams,
	ThresholdResponseBody,
	ReasonResponseBody,
} from "./schema";

export const Master: IHttpApiMaster = {
	// 2.1 로봇 정보 조회
	getRobotInformation,
	// 2.2 임계치 기준 정보 조회
	getThresholdInformation,
	// 2.3 Loss 기준 조회
	getLossInformation,
	// 툴 패드 교체 사유 정보 조회
	getReasonInformation,
};
// TODO 폴더 이름 변경
//#region function
// 2.1 로봇 정보 조회
async function getRobotInformation(): Promise<RobotResponseBody> {
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getRobotInformationDummy();
	} else {
		const response: Response = await fetchRequest("GET", GET_ROBOT_INFORMATION_URL);
		const responseBody: Promise<RobotResponseBody> = await response.json();
		return responseBody;
	}
}

// 2.2 임계치 기준 정보 조회
async function getThresholdInformation(
	params?: ThresholdInformationParams,
): Promise<ThresholdResponseBody> {
	const url = makeParamsUrl(GET_THRESHOLD_INFORMATION_URL, params);
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getThresholdInformationDummy();
	} else {
		const response: Response = await fetchRequest("GET", url);
		const responseBody: Promise<ThresholdResponseBody> = await response.json();
		return responseBody;
	}
}

// 2.3 Loss 기준 조회
async function getLossInformation(params?: LossInformationParams): Promise<LossResponseBody> {
	const url = makeParamsUrl(GET_LOSS_INFORMATION_URL, params);

	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getLossInformationDummy();
	} else {
		const response: Response = await fetchRequest("GET", url);
		const responseBody: Promise<LossResponseBody> = await response.json();
		return responseBody;
	}
}

// 2.3 Loss 기준 조회
async function getReasonInformation(): Promise<ReasonResponseBody> {
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getReasonInformationDummy();
	} else {
		const response: Response = await fetchRequest("GET", GET_REASON_INFORMATION_URL);
		const responseBody: Promise<ReasonResponseBody> = await response.json();
		return responseBody;

		//return getReasonInformationDummy();
	}
}
//#endregion
