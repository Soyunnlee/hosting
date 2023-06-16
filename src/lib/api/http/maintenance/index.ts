import { PUBLIC_ENABLE_STAND_ALONE } from "$env/static/public";
import {
	getMaintenanceInformationDummy,
	getToolInformationDummy,
	getToolPadHistoryDummy,
	getToolPadReplacementDummy,
} from "$lib/test/http";
import { fetchRequest } from "$lib/util/fetch";
import {
	GET_MAINTENANCE_INFORMATION_URL,
	GET_TOOLPAD_HISTORY_URL,
	GET_TOOLPAD_URL,
	RESET_TOOLPAD_URL,
} from "./route";
import type {
	IHttpApiMaintenance,
	MaintenanceResponseBody,
	ToolpadInfoResponseBody,
	ToolpadReplacementParams,
} from "./schema";
import type {
	ToolpadReplacementInfoResponseBody,
	ToolpadHistoryResponseBody,
	ToolpadHistoryParams,
} from "./schema";

export const Maintenance: IHttpApiMaintenance = {
	// 5.1 소모품 정보 조회
	getMaintenanceInformation,
	resetToolpadCount,
	getToolpadHistory,
	getToolpadInformation,
};

//#region function
// 5.1 소모품 정보 조회
async function getMaintenanceInformation(): Promise<MaintenanceResponseBody> {
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return getMaintenanceInformationDummy();
	} else {
		const response: Response = await fetchRequest("GET", GET_MAINTENANCE_INFORMATION_URL);
		const responseBody: Promise<MaintenanceResponseBody> = await response.json();
		return responseBody;
	}
}

// 5.2 툴패드 사용량 초기화
async function resetToolpadCount(
	params: ToolpadReplacementParams,
): Promise<ToolpadReplacementInfoResponseBody> {
	if (PUBLIC_ENABLE_STAND_ALONE === "true") {
		return getToolPadReplacementDummy();
	} else {
		const response: Response = await fetchRequest("POST", RESET_TOOLPAD_URL, params);
		const responseBody: Promise<ToolpadReplacementInfoResponseBody> = await response.json();
		return responseBody;
	}
}

// 5.3 툴패드 이력 조회
async function getToolpadHistory(): Promise<ToolpadHistoryResponseBody> {
	if (PUBLIC_ENABLE_STAND_ALONE === "true") {
		return getToolPadHistoryDummy();
	} else {
		const response: Response = await fetchRequest("GET", GET_TOOLPAD_HISTORY_URL);
		const responseBody: Promise<ToolpadHistoryResponseBody> = await response.json();

		return responseBody;
	}
}

// 5.3 툴패드 이력 조회
async function getToolpadInformation(): Promise<ToolpadInfoResponseBody> {
	if (PUBLIC_ENABLE_STAND_ALONE === "true") {
		return getToolInformationDummy();
	} else {
		const response: Response = await fetchRequest("GET", GET_TOOLPAD_URL);
		const responseBody: Promise<ToolpadInfoResponseBody> = await response.json();

		return responseBody;
	}
}
//#endregion
