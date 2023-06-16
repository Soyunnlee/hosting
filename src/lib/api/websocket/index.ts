//#region import
import {
	addMessagEvent,
	closeWebSocket,
	connectWebSocket,
	type IWebSocketCallbackErrorFunction,
	type IWebSocketCallbackMessageFunction,
} from "$lib/util/websocket";
import {
	type IMonitoringData,
	type IOperationData,
	type IProductData,
	type IMaintenanceData,
	type IErrorData,
	type IWebSocketData,
	type WebSocketDataType,
	type IAbnormalData,
	WebSocketEventNames,
	type IAbnormalHWData,
} from "./schema";
import {
	WS_ABNORMAL_HW_URL,
	WS_ABNORMAL_URL,
	WS_MAINTENANCE_URL,
	WS_MONITORING_URL,
	WS_OPERATION_URL,
	WS_PRODUCT_URL,
} from "./route";
import {
	requestAbnormalDummy,
	requestMaintenanceDummy,
	requestMonitoringDummy,
	requestOperationDummy,
	requestProductDummy,
} from "$lib/test/websocket";
import { PUBLIC_ENABLE_STAND_ALONE } from "$env/static/public";
import type { IWebSocketConnectCallbackFunction } from "../../util/websocket";
//#endregion

//#region function
// event name과 url이 1대1 매핑 X
function getURLByEventName(eventName: WebSocketEventNames): string {
	switch (eventName) {
		case WebSocketEventNames.MONITORING:
			return WS_MONITORING_URL;
		case WebSocketEventNames.PREDICT:
			return WS_MONITORING_URL; //WS_PREDICT_URL;
		case WebSocketEventNames.LOSS:
			return WS_MONITORING_URL; //WS_PREDICT_URL;
		case WebSocketEventNames.OPERATION:
			return WS_OPERATION_URL;
		case WebSocketEventNames.PRODUCT:
			return WS_PRODUCT_URL;
		case WebSocketEventNames.MAINTENANCE:
			return WS_MAINTENANCE_URL;
		case WebSocketEventNames.ABNORMAL:
			return WS_ABNORMAL_URL;
		case WebSocketEventNames.ABNORMAL_HW:
			return WS_ABNORMAL_HW_URL;
		default:
			return "";
	}
}
//#endregion

//#region class
export class WebSocketAPI {
	private webSocket: WebSocket;
	private eventName: WebSocketEventNames;
	constructor() {
		// console.log("WebSocket API 생성");
	}
	isOpen() {
		return this.webSocket.readyState;
	}
	//#region Function(public)
	connect(
		eventName: WebSocketEventNames,
		connectHandler?: IWebSocketConnectCallbackFunction,
	): void {
		let retryTimer: NodeJS.Timeout | undefined;
		if (this.webSocket) {
			// socket이 연결 된 상태에서 type 변경이 있을 경우 소켓을 끊어준다.
			if (this.eventName != eventName) {
				if (this.webSocket.CONNECTING || this.webSocket.OPEN) {
					closeWebSocket(this.webSocket);
				}
			}
		}
		if (connectHandler) {
			this.webSocket = connectWebSocket(getURLByEventName(eventName), connectHandler, retryTimer);
		} else {
			this.webSocket = connectWebSocket(getURLByEventName(eventName), undefined, retryTimer);
		}
		this.eventName = eventName;
	}

	callApi(
		handler: (data: WebSocketDataType) => void,
		errorHandler: IWebSocketCallbackErrorFunction,
	) {
		switch (this.eventName) {
			case WebSocketEventNames.MONITORING:
				this.requestMonitoringData(handler, errorHandler);
				break;
			case WebSocketEventNames.PREDICT:
				this.requestMonitoringData(handler, errorHandler);
				break;
			case WebSocketEventNames.LOSS:
				this.requestMonitoringData(handler, errorHandler);
				break;
			case WebSocketEventNames.OPERATION:
				this.requestOperationData(handler, errorHandler);
				break;
			case WebSocketEventNames.PRODUCT:
				this.requestProductData(handler, errorHandler);
				break;
			case WebSocketEventNames.MAINTENANCE:
				this.requestMaintenanceData(handler, errorHandler);
				break;
			case WebSocketEventNames.ABNORMAL:
				this.requestAbnormalData(handler, errorHandler);
				break;
			case WebSocketEventNames.ABNORMAL_HW:
				this.requestAbnormalData(handler, errorHandler);
				break;
			default:
				break;
		}
	}

	close() {
		closeWebSocket(this.webSocket);
	}
	//#endregion

	//#region Function(private)
	private requestMonitoringData(
		handler: (data: IMonitoringData) => void,
		errorHandler: IWebSocketCallbackErrorFunction,
	): void {
		if (PUBLIC_ENABLE_STAND_ALONE == "true") {
			requestMonitoringDummy(handler);
		} else {
			const onMessageHandler: IWebSocketCallbackMessageFunction = (message: MessageEvent) => {
				const websocketData: IWebSocketData<IMonitoringData> = JSON.parse(message.data);
				if (websocketData.event.items.length === 0) {
					return;
				}

				handler(websocketData.event);
			};
			addMessagEvent(this.webSocket, onMessageHandler, errorHandler);
		}
	}

	private requestOperationData(
		handler: (data: IOperationData) => void,
		errorHandler: IWebSocketCallbackErrorFunction,
	): void {
		if (PUBLIC_ENABLE_STAND_ALONE == "true") {
			requestOperationDummy(handler);
		} else {
			const onMessageHandler: IWebSocketCallbackMessageFunction = (message: MessageEvent) => {
				const websocketData: IWebSocketData<IOperationData> = JSON.parse(message.data);

				if (!websocketData.is_success) {
					return;
				}

				handler(websocketData.event);
			};
			addMessagEvent(this.webSocket, onMessageHandler, errorHandler);
		}
	}

	private requestProductData(
		handler: (data: IProductData) => void,
		errorHandler: IWebSocketCallbackErrorFunction,
	): void {
		if (PUBLIC_ENABLE_STAND_ALONE == "true") {
			requestProductDummy(handler);
		} else {
			const onMessageHandler: IWebSocketCallbackMessageFunction = (message: MessageEvent) => {
				const websocketData: IWebSocketData<IProductData> = JSON.parse(message.data);

				if (!websocketData.is_success) {
					return;
				}

				handler(websocketData.event);
			};
			addMessagEvent(this.webSocket, onMessageHandler, errorHandler);
		}
	}

	private requestMaintenanceData(
		handler: (data: IMaintenanceData) => void,
		errorHandler: IWebSocketCallbackErrorFunction,
	): void {
		if (PUBLIC_ENABLE_STAND_ALONE == "true") {
			requestMaintenanceDummy(handler);
		} else {
			const onMessageHandler: IWebSocketCallbackMessageFunction = (message: MessageEvent) => {
				const websocketData: IWebSocketData<IMaintenanceData> = JSON.parse(message.data);

				if (!websocketData.is_success) {
					return;
				}

				handler(websocketData.event);
			};
			addMessagEvent(this.webSocket, onMessageHandler, errorHandler);
		}
	}

	private requestAbnormalData(
		handler: (data: IAbnormalData) => void,
		errorHandler: IWebSocketCallbackErrorFunction,
	): void {
		if (PUBLIC_ENABLE_STAND_ALONE == "true") {
			requestAbnormalDummy(handler);
		} else {
			const onMessageHandler: IWebSocketCallbackMessageFunction = (message: MessageEvent) => {
				const websocketData: IWebSocketData<IAbnormalData> = JSON.parse(message.data);

				if (!websocketData.is_success) {
					return;
				}
				handler(websocketData.event);
			};
			addMessagEvent(this.webSocket, onMessageHandler, errorHandler);
		}
	}

	private requestAbnormalHWData(
		handler: (data: IAbnormalHWData) => void,
		errorHandler: IWebSocketCallbackErrorFunction,
	): void {
		if (PUBLIC_ENABLE_STAND_ALONE == "true") {
			//requestAbnormalDummy(handler);
		} else {
			const onMessageHandler: IWebSocketCallbackMessageFunction = (message: MessageEvent) => {
				const websocketData: IWebSocketData<IAbnormalHWData> = JSON.parse(message.data);

				if (!websocketData.is_success) {
					return;
				}
				handler(websocketData.event);
			};
			addMessagEvent(this.webSocket, onMessageHandler, errorHandler);
		}
	}
	//#endregion
}
//#endregion
