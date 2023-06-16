import type { ResponseWithData } from "../schema";

export interface IHttpApiMaintenance {
	getMaintenanceInformation(): Promise<MaintenanceResponseBody>;
	resetToolpadCount(params: ToolpadReplacementParams): Promise<ToolpadReplacementInfoResponseBody>;
	getToolpadHistory(): Promise<ToolpadHistoryResponseBody>;
	getToolpadInformation(): Promise<ToolpadInfoResponseBody>;
}

//#region
// 5.1 maintenance
type MaintenanceInformation = {
	robot_id: string;
	battery_capacity: number;
	toolpad_count: number;
	toolpad_max_count: number;
};

export type MaintenanceResponseBody = ResponseWithData<MaintenanceInformation>;

// 5.2 maintenance toolpad 사용량 초기화 (POST)
type ToolpadReplacementInfo = {
	robot_id: string;
	id: number;
	use_count: number; // 교체 이전 사용량
	max_count: number;
	recommended_count: number;
	code: string;
	reason: string;
	create_at: string; // 교체 시기
	create_at_timestamp: number;
};
export type ToolpadReplacementInfoResponseBody = ResponseWithData<ToolpadReplacementInfo>;

// 5.3 toolpad 이력 조회
type ToolpadHistory = {
	robot_id: string;
	items: Array<ToolpadHistoryItems>;
};

export type ToolpadHistoryItems = {
	id: number;
	use_count: number; // 교체 이전 사용량
	max_count: number;
	recommended_count: number;
	code: string;
	reason: string;
	create_at: string; // 교체 시기
	create_at_timestamp: number;
};

export type ToolpadHistoryResponseBody = ResponseWithData<ToolpadHistory>;

// 5.4 현재 Toolpad 사용량 조회
type ToolpadInfo = {
	robot_id: string;
	use_count: number; // 교체 이전 사용량
	max_count: number;
	recommended_count: number;
	create_at: string; // 교체 시기
	create_at_timestamp: number;
};
export type ToolpadInfoResponseBody = ResponseWithData<ToolpadInfo>;

//#endregion

//#region Request Params
// 5.2 maintenance toolpad 사용량 초기화 (POST)
export type ToolpadReplacementParams = {
	code: string;
	reason: string;
};

// 5.3 toolpad 이력 조회
export type ToolpadHistoryParams = {
	start: string;
	end: string;
};
//#endregion
