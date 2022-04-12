import { getToken } from '../utils/auth';
export async function apiPost(url = '', data= {}) {

	const response = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
            'Authorization': `Bearer ${getToken()}`
		},
		redirect: 'follow',
		referrer: 'no-referrer',
		body: JSON.stringify(data),
	})
		.then((response) => {
			if (response) {
				return response.json();
			} else {
				throw new Error('Something went wrong');
			}
		})
		.then((responseJson) => {
			// Do something with the response
			return responseJson;
		})
		.catch((error) => {
			return { data: null, status: 'CRASHED' };
		});
	const finalResponse = await response;
	return finalResponse;
}

export async function apiGet(url = '') {
	const response = await fetch(url, {
		method: 'GET',
		mode: 'cors',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
            'Authorization': `Bearer ${getToken()}`
		},
		redirect: 'follow',
		referrer: 'no-referrer',
	})
		.then((response) => {
			if (response) {
				return response.json();
			} else {
				throw new Error('Something went wrong');
			}
		})
		.then((responseJson) => {
			// Do something with the response
			return responseJson;
		})
		.catch((error) => {
			return { data: null, status: 'CRASHED' };
		});
	const finalResponse = await response;
	return finalResponse;
}