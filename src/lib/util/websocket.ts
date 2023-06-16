//#region Import
import { PUBLIC_WEBSOCKET_URL } from "$env/static/public";
//#endregion

//#region Socket Data Interface
export interface IWebSocketCallbackMessageFunction {
	(message: MessageEvent): void;
}
export interface IWebSocketCallbackErrorFunction {
	(message: string): void;
}
export interface IWebSocketConnectCallbackFunction {
	(connectState: number): void;
}
//#endregion

// instance 생성 메소드 (외부에서 인스턴스 접근 못하는)
// Data를 직접 큐에 주입
//#region Socket Connect Function
export function connectWebSocket(
	url: string,
	connectHandler?: IWebSocketConnectCallbackFunction,
	retryTimer?: NodeJS.Timeout,
): WebSocket {
	if (!url) {
		url = "";
	}
	const webSocket = new WebSocket(`${PUBLIC_WEBSOCKET_URL}${url}`);

	webSocket.onopen = function () {
		if (connectHandler) {
			connectHandler(webSocket.readyState!);
			if (retryTimer) {
				clearTimeout(retryTimer);
				location.reload();
			}
		}
		webSocket.send("Request Data from " + webSocket.url);
	};

	webSocket.onclose = async function (event) {
		if (connectHandler) connectHandler(webSocket.readyState!);
		retryTimer = setTimeout(() => {
			connectWebSocket(url, connectHandler, retryTimer);
		}, 1000);

		webSocket.close();
	};

	return webSocket;
}
//#endregion

//#region Socket add message event function
export function addMessagEvent(
	webSocket: WebSocket,
	callbackMessageFunction: IWebSocketCallbackMessageFunction,
	callbackErrorFunction: IWebSocketCallbackErrorFunction,
) {
	// call api
	webSocket.onmessage = function (message) {
		callbackMessageFunction(message);
	};
	webSocket.onerror = async function (error) {
		callbackErrorFunction(getWebSocketState(webSocket));
	};
}
//#endregion

//#region Close Socket
export function closeWebSocket(webSocket: WebSocket): void {
	if (webSocket) {
		webSocket.close();
	}
}
//#endregion

//#region get Current Socket State String
// CONNECTING = 0, OPEN = 1, CLOSING = 2, CLOSED = 3
export function getWebSocketState(webSocket: WebSocket): string {
	let webSocketState: string;
	switch (webSocket.readyState) {
		case WebSocket.CONNECTING:
			webSocketState = "Connection connecting";
			break;
		case WebSocket.OPEN:
			webSocketState = "Connection open";
			break;
		case WebSocket.CLOSING:
			webSocketState = "Connection closing";
			break;
		case WebSocket.CLOSED:
			webSocketState = "Connection close";
			break;
		default:
			webSocketState = "Can not recognize";
			break;
	}

	return webSocketState;
}
//#endregion
