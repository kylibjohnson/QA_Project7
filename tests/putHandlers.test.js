// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}

test('status code should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
		console.log(actualStatusCode);
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});


test('', async () => {
    try {
		const response = await fetch(`${config.API_URL}/your/endpoint`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
});