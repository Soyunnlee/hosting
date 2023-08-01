import type { Cookies } from '@sveltejs/kit';

export const setCookie = async (cookies: Cookies, path: string, name: string, value: string) => {
	cookies.set(name, value, {
		httpOnly: true,
		path,
		secure: true,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24
	});
};

export const getCookie = async (cookies: Cookies, name: string): Promise<string> => {
	let cookie: string | undefined = cookies.get(name);
	if (!cookie) {
		cookie = '';
	}
	return cookie;
};
