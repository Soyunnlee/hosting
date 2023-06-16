import { User } from "./user/index";
import { Operation } from "./operation/index";
import { Production } from "./production/index";
import { Maintenance } from "./maintenance/index";
import { SWAbnormal } from "./swAlarm/index";
import { HWAbnormal } from "./hwAlarm/index";
import { Master } from "./master/index";
import type { IHttpApiUser } from "./user/schema";
import type { IHttpApiMaster } from "./master/schema";
import type { IHttpApiOperation } from "./operation/schema";
import type { IHttpApiProduction } from "./production/schema";
import type { IHttpApiMaintenance } from "./maintenance/schema";
import type { IHttpApiSWAbnormal } from "./swAlarm/schema";
import type { IHttpApiHWAbnormal } from "./hwAlarm/schema";

// class member 함수 형태
// 네이밍 이유 HTTP API 묶음, 다른 모듈에서 HTTP 사용이 있을 수 있음
export class HttpAPI {
	//#region Constructor
	constructor() {
		// console.log("HTTP API 생성");
	}
	//#endregion

	user: IHttpApiUser = User;
	master: IHttpApiMaster = Master;
	operation: IHttpApiOperation = Operation;
	production: IHttpApiProduction = Production;
	maintenance: IHttpApiMaintenance = Maintenance;
	swAbnormal: IHttpApiSWAbnormal = SWAbnormal;
	hwAbnormal: IHttpApiHWAbnormal = HWAbnormal;
}
