import { PUBLIC_ENABLE_STAND_ALONE } from "$env/static/public";
import { getOperationInformationDummy, getOperationStatisticsDummy } from "$lib/test/http";
import { fetchRequest } from "$lib/util/fetch";
import { GET_OPERATION_INFORMATION_URL, GET_OPERATION_STATISTICS_URL } from "./route";
import type { OperationStatisticsParams } from "./schema";
import { makeParamsUrl } from "../schema";
import type {
	IHttpApiOperation,
	OperationResponseBody,
	OperationStatisticsResponseBody,
} from "./schema";

export const Operation: IHttpApiOperation = {
	// 3.1 현재 가동 상태 및 당일 기준 가동율 조회
	getOperationInformation,
	// 3.2 기간별 가동 상태 통계
	getOperationStatistics,
};

//#region function
// 3.1 가동정보 조회
async function getOperationInformation(): Promise<OperationResponseBody> {
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getOperationInformationDummy();
	} else {
		const response: Response = await fetchRequest("GET", GET_OPERATION_INFORMATION_URL);
		const responseBody: Promise<OperationResponseBody> = await response.json();
		return responseBody;
	}
}

// 3.2 기간별 가동 상태 통계
async function getOperationStatistics(
	params: OperationStatisticsParams,
): Promise<OperationStatisticsResponseBody> {
	const url = makeParamsUrl(GET_OPERATION_STATISTICS_URL, params);
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getOperationStatisticsDummy();
	} else {
		const response: Response = await fetchRequest("GET", url);
		const responseBody: Promise<OperationStatisticsResponseBody> = await response.json();
		return responseBody;
	}
}
//#endregion
