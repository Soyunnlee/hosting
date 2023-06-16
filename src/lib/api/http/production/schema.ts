import type { ResponseWithData } from "../schema";
export interface IHttpApiProduction {
	getProductionInformation(): Promise<ProductionResponseBody>;
	getProductionStatistics(
		params: ProductionStatisticsParams,
	): Promise<ProductionStatisticsResponseBody>;
}
//#region
// 4.1 production
type ProudctionInformation = {
	robot_id: string;
	item_code: string;
	input_count: number;
	packing_count: number;
};

export type ProductionResponseBody = ResponseWithData<ProudctionInformation>;

// 4.2 production statistics
type ProductionStatistics = {
	robot_id: string;
	items: Array<ProductionStatisticsItems>;
};

export type ProductionStatisticsItems = {
	input_count: number;
	packing_count: number;
	time: string;
	timestamp: number;
};

export type ProductionStatisticsResponseBody = ResponseWithData<ProductionStatistics>;
//#endregion

//#region Request Params
// 4.2 production statistics
export type ProductionStatisticsParams = {
	period_type: string;
	start: string;
	end: string;
};
//#endregion
