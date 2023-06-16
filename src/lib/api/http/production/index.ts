import { PUBLIC_ENABLE_STAND_ALONE } from "$env/static/public";
import {
	getProductionInformationDummy,
	getProductionStatisticsMonthlyDummy,
	getProductionStatisticsWeeklyDummy,
} from "$lib/test/http";
import { fetchRequest } from "$lib/util/fetch";
import { GET_PRODUCTION_INFORMATION_URL, GET_PRODUCTION_STATISTICS_URL } from "./route";
import type {
	IHttpApiProduction,
	ProductionResponseBody,
	ProductionStatisticsParams,
} from "./schema";
import type { ProductionStatisticsResponseBody } from "./schema";
import { makeParamsUrl } from "../schema";

export const Production: IHttpApiProduction = {
	// 4.1 생산 정보 조회
	getProductionInformation,
	// 4.2 기간별 생산 수량 통계
	getProductionStatistics,
};

//#region function
// 4.1 생산 정보 조회
async function getProductionInformation(): Promise<ProductionResponseBody> {
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getProductionInformationDummy();
	} else {
		const response: Response = await fetchRequest("GET", GET_PRODUCTION_INFORMATION_URL);
		const responseBody: Promise<ProductionResponseBody> = await response.json();
		return responseBody;
	}
}

// 4.2 기간별 생산 수량 통계
async function getProductionStatistics(
	params: ProductionStatisticsParams,
): Promise<ProductionStatisticsResponseBody> {
	const url = makeParamsUrl(GET_PRODUCTION_STATISTICS_URL, params);
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		if (params.period_type === "Monthly") {
			return getProductionStatisticsMonthlyDummy();
		} else {
			return getProductionStatisticsWeeklyDummy();
		}
	} else {
		const response: Response = await fetchRequest("GET", url);
		const responseBody: Promise<ProductionStatisticsResponseBody> = await response.json();
		return responseBody;
	}
}
//#endregion
