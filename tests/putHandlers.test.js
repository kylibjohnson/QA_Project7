// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
		"productsList": [
			{
				"id": 1,
				"quantity": 4
			},
			{
				"id": 5,
				"quantity": 2
			},
			{
				"id": 3,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 1
			}
		]
}

test('status code should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/2`, {
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
	expect(actualStatusCode) .toBe(200)
});


test('response body should ', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
		console.log (actualResponseBody);
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toContain('')
});