import type { RequestEvent } from '@sveltejs/kit';

export const fetchRequest = async (
	event: RequestEvent,
	method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
	route: string,
	body?: object
): Promise<Response> => {
	const response: Response = await event.fetch(`${import.meta.env.VITE_API_URL}${route}`, {
		method,
		// mode: "no-cors",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});
	return response;
};
