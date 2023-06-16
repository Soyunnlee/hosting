import type { ResponseWithData } from "../schema";

export interface IHttpApiMaster {
	getRobotInformation(): Promise<RobotResponseBody>;
	getThresholdInformation(params?: ThresholdInformationParams): Promise<ThresholdResponseBody>;
	getLossInformation(params?: LossInformationParams): Promise<LossResponseBody>;
	getReasonInformation(): Promise<ReasonResponseBody>;
}

//#region Response Body
//2.1 Robot
type RobotInformation = {
	id: string;
	name: Array<string>;
};

export type RobotResponseBody = ResponseWithData<RobotInformation>;

// 2.2 임계치 기준 정보 조회
type ThresholdInformation = {
	robot_id: string;
	items: Array<ThresholdInformationItems>;
};

export type ThresholdInformationItems = {
	name: string;
	max_mean_value: number;
	min_mean_value: number;
	look_count: number;
};
export type ThresholdResponseBody = ResponseWithData<ThresholdInformation>;

//2.3 Loss
type LossInformation = {
	robot_id: string;
	items: Array<LossItemsInformation>;
};

export type LossItemsInformation = {
	name: string;
	is_selected: boolean;
	max_loss: number;
	look_count: number;
};

export type LossResponseBody = ResponseWithData<LossInformation>;

type ReasonInformation = {
	robot_id: string;
	items: Array<ReasonInformationItems>;
};
export type ReasonInformationItems = {
	code: string;
	reason: string;
};
export type ReasonResponseBody = ResponseWithData<ReasonInformation>;

//#endregion

//#region Request Params
export type ThresholdInformationParams = {
	name?: string;
};
export type LossInformationParams = {
	name?: string;
	is_selected?: boolean;
};
//#endregion
