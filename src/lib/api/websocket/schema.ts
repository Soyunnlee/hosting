// Common WebSocket Interface
export interface IWebSocketData<T> {
	readonly is_success: boolean;
	readonly event: T;
}

// Commont Event Interface
export interface IMonitoringData {
	readonly robot_id: string;
	readonly items: IMonitoringDataSingle[];
}

export interface IMonitoringDataSingle {
	timestamp: number;

	signal: number;

	torque_1: number;
	torque_2: number;
	torque_3: number;
	torque_4: number;

	speed_1: number;
	speed_2: number;
	speed_3: number;
	speed_4: number;

	pos_1: number;
	pos_2: number;
	pos_3: number;
	pos_4: number;

	amp_temp_1: number;
	amp_temp_2: number;
	amp_temp_3: number;
	amp_temp_4: number;

	vacuum: number;
	cpu_temp: number;

	predict: number;
	real: number;
	loss: number;

	[key: string]: number | string;
}
export interface IOperationData {
	robot_id: string;
	status: string;
	rate: number;
}
export interface IProductData {
	robot_id: string;
	input_count: number;
	packing_count: number;
}
export interface IMaintenanceData {
	robot_id: string;
	battery_capacity: number;
	toolpad_count: number;
}
export interface IErrorData {
	timestamp: number;
	robot_id: string;
	error_code: string;
	interval: number;
	topic: string;
}
interface IAbnormalItemsData {
	name: string;
	category: string;
	count: number;
}
export interface IAbnormalData {
	robot_id: string;
	items: Array<IAbnormalItemsData>;
}
export interface IAbnormalHWData {
	robot_id: string;
	count: number;
}

export type WebSocketDataType =
	| IMonitoringData
	| IProductData
	| IOperationData
	| IMaintenanceData
	| IErrorData
	| IAbnormalData
	| IAbnormalHWData;

// websocket event 종류
export enum WebSocketEventNames {
	// WS_MONITORING_URL
	MONITORING,
	// WS_MONITORING_URL
	PREDICT,
	// WS_MONITORING_URL
	LOSS,
	// WS_OPERATION_URL
	OPERATION,
	// WS_PRODUCT_URL
	PRODUCT,
	// WS_MAINTENANCE_URL
	MAINTENANCE,
	// WS_ABNORMAL_URL
	ABNORMAL,

	ABNORMAL_HW,
}
