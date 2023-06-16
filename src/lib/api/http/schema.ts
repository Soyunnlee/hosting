// optional 사용하지 않고 필수 항목들로만 type 재정의 후 type으로만 사용

import type { HWAbnormalResponseBody } from "./hwAlarm/schema";
import type { MaintenanceResponseBody } from "./maintenance/schema";
import type { OperationResponseBody } from "./operation/schema";
import type { ProductionResponseBody } from "./production/schema";
import type { RobotResponseBody, LossResponseBody, ThresholdResponseBody } from "./master/schema";
import type { SWAbnormalResponseBody } from "./swAlarm/schema";

//#region 공통 schema
interface IResponse {
	isSuccess: boolean;
}

// 실패시 메시지 응답
interface IResponseMessage {
	message: string;
}

// 하나의 데이터 응답 값
interface IResponseData<T> {
	data: T;
}
// 복수의 데이터 응답 값
interface IResponseDatas<T> {
	data: Array<T>;
}

// Type으로만 export (통일 목적으로 + 타입별 옵셔널 사용하지 않고 필수 지정하기 위해)
export type ResponseFail = Required<IResponse & IResponseMessage>;

export type ResponseWithOutData = Required<IResponse>;

export type ResponseWithData<T> = Required<IResponse & IResponseData<T>>;

export type ResponseWithDatas<T> = Required<IResponse & IResponseDatas<T>>;

//#endregion

//#region Common Type
export type AbnormalCategory = "THRESHOLD" | "ABNORMAL";
export type AbnormalType = "max" | "min" | "loss";
export enum abnormalCategory {
	"THRESHOLD",
	"ABNORMAL",
}
//#endregion

//#region Delivery Information Interface
export interface IDeliveryInformation {
	[key: string]:
		| RobotResponseBody
		| OperationResponseBody
		| LossResponseBody
		| ThresholdResponseBody
		| ProductionResponseBody
		| MaintenanceResponseBody
		| SWAbnormalResponseBody
		| HWAbnormalResponseBody;
	ROBOT_INFORMATION: RobotResponseBody;
	OPERATION_INFORMATION: OperationResponseBody;
	LOSS_INFORMATION: LossResponseBody;
	THRESHOLD_INFORMATION: ThresholdResponseBody;
	PRODUCTION_INFORMATION: ProductionResponseBody;
	MAINTENANCE_INFORMATION: MaintenanceResponseBody;
	SW_ABNORMAL_INFORMATION: SWAbnormalResponseBody;
	HW_ABNORMAL_INFORMATION: HWAbnormalResponseBody;
}
//#endregion

//#region function
export function makeParamsUrl(url: string, argsObj?: { [key: string]: number | string | boolean }) {
	if (argsObj) {
		for (const obj in argsObj) {
			// value 가 undefined 이면 해당 param 삭제
			if (argsObj[obj] === undefined) delete argsObj[obj];

			// value 를 string 로 변환
			if (Object.prototype.hasOwnProperty.call(obj, argsObj)) {
				argsObj[obj] = argsObj[obj].toString();
			}
		}

		const queryParams = new URLSearchParams(argsObj as { [key: string]: string });
		return `${url}?${queryParams}`;
	}

	return url;
}
//#endregion
