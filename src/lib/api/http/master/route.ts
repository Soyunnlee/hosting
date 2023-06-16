// 2.1 로봇 정보 조회
export const GET_ROBOT_INFORMATION_URL = "/master/robot";

// 2.2 임계치 기준 정보 조회 (params : name? (string))
export const GET_THRESHOLD_INFORMATION_URL = "/master/threshold";

// 2.3 loss 기준 정보 조회 (추가 작성 필요) (params: name? (string), is_selected? (boolean))
export const GET_LOSS_INFORMATION_URL = "/master/abnormal";

export const GET_REASON_INFORMATION_URL = "/master/toolpad/replacement/reason";
