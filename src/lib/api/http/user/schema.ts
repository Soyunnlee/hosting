import type { ResponseWithData } from "../schema";

export interface IHttpApiUser {
	login(loginBody: UserRequestBodyWithPassword): Promise<Response>;
	logout(logoutBody: UserRequestBodyWithOutPassword): Promise<UserResponseBody_Success>;
	update(updateUserBody: UserRequestBodyWithPassword): Promise<UserResponseBody_Success>;
}

//#region Response Body
type UserInfo = {
	name: string;
	email: string;
	role: string;
};

type IUserRequestBodyWithOutPassword = UserInfo & {
	id: string;
};

type IUserRequestBodyWithPassword = {
	id: string;
	password: string;
};

type IUserResponseBody = {
	id: string;
};

export type UserRequestBodyWithOutPassword = Required<IUserRequestBodyWithOutPassword>;

export type UserRequestBodyWithPassword = Required<IUserRequestBodyWithPassword>;

export type UserResponseBody_Success = Required<ResponseWithData<IUserResponseBody>>;
//#endregion

//#region Response Body
// 1.1 Login
type Login = {
	id: string;
	name: string;
	email: string;
	role: string;
};
export type LoginResponseBody = ResponseWithData<Login>;

// 1.2 Logout
type Logout = {
	id: string;
};
export type LogoutResponseBody = ResponseWithData<Logout>;

// 1.3 Update User Info
type UpdateUserRequestBody = {
	id: string;
	password?: string;
	name?: string;
	email?: string;
	role?: string;
};

type UpdateUser = {
	id: string;
	name: string;
	email: string;
	role: string;
};
export type UpdateUserResponseBody = ResponseWithData<UpdateUser>;

// 1,4 Create User
type CreateUserRequestBody = {
	id: string;
	password: string;
	name: string;
	email: string;
	role: string;
};
type CreateUser = {
	id: string;
	name: string;
	email: string;
	role: string;
};
export type CreateUserResponseBody = ResponseWithData<CreateUser>;
//#endregion
