import { redirect, type Handle, type HandleFetch } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').HandleFetch} */
export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	const url = event.url.pathname;
	// const token = event.cookies.get("AuthorizationToken");

	// // check authorization
	// if (url !== "/" ) {
	// 	if (!token) {
	// 		// redirect to authorization page
	// 		throw redirect(307, "/");
	// 	}
	// }

	return response;
};

/** @type {import('@sveltejs/kit').HandleFetch} */
export const handleFetch: HandleFetch = ({ event, request, fetch }) => {
	const token = event.cookies.get("AuthorizationToken");
	const url = event.url.pathname;

	if (url !== "/") {
		if (token !== undefined) {
			// has token in cookies
			request.headers.set("Authorization", `${token}`);
		} else {
			// if does not have token. go to home
			throw redirect(307, "/");
		}
	}

	return fetch(request);
};
