import { PUBLIC_ENABLE_STAND_ALONE } from "$env/static/public";
import { loginDummy, logoutDummy, updateUserDummy } from "$lib/test/http";
import { fetchRequest } from "$lib/util/fetch";
import { LOGIN_URL, LOGOUT_URL, UPDATE_USER_URL } from "./route";
import type {
	IHttpApiUser,
	UserRequestBodyWithOutPassword,
	UserRequestBodyWithPassword,
	UserResponseBody_Success,
} from "./schema";
import type {} from "../schema";

export const User: IHttpApiUser = {
	// 1.1 login
	login,
	// 1.2 logout
	logout,
	// 1.3 비밀번호 변경
	update,
	// TODO 1.4 추가
};

//#region function
// login
async function login(loginBody: UserRequestBodyWithPassword): Promise<Response> {
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return await loginDummy();
	} else {
		return await fetchRequest("POST", LOGIN_URL, loginBody);
	}
}

// logut
async function logout(
	logoutBody: UserRequestBodyWithOutPassword,
): Promise<UserResponseBody_Success> {
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return logoutDummy();
	} else {
		const response: Response = await fetchRequest("POST", LOGOUT_URL, logoutBody);
		const responseBody: Promise<UserResponseBody_Success> = await response.json();
		return responseBody;
	}
}

// update
async function update(
	updateUserBody: UserRequestBodyWithPassword,
): Promise<UserResponseBody_Success> {
	if (PUBLIC_ENABLE_STAND_ALONE == "true") {
		return updateUserDummy();
	} else {
		const url = `${UPDATE_USER_URL}?userId=${updateUserBody.id}`;
		const response: Response = await fetchRequest("PATCH", url, updateUserBody);
		const responseBody: Promise<UserResponseBody_Success> = await response.json();
		return responseBody;
	}
}
//#endregion
