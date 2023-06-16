import type { ResponseWithData } from "../schema";
export interface IHttpApiOperation {
	getOperationInformation(): Promise<OperationResponseBody>;
	getOperationStatistics(
		params: OperationStatisticsParams,
	): Promise<OperationStatisticsResponseBody>;
}
//#region
// 3.1 operation
type OperationInformation = {
	robot_id: string;
	status: "0" | "1" | "2";
	rate: number;
};

export type OperationResponseBody = ResponseWithData<OperationInformation>;
//#endregion

//#region 3.2 operation statistics
type OperationStatistics = {
	robot_id: string;
	items: Array<OperationStatisticsItems>;
};
export type OperationStatisticsItems = {
	time: string;
	timestamp: string;
	sub_items: Array<OperationStatisticsSubItems>;
};
export type OperationStatisticsSubItems = {
	status: "0" | "1" | "2";
	duration: number; // seconds
};

export type OperationStatisticsResponseBody = ResponseWithData<OperationStatistics>;
//#endregion

//#region Request Params

// 3.2 operation statistics
export type OperationStatisticsParams = {
	period_type: string;
	start: string;
	end: string;
};
//#endregion
