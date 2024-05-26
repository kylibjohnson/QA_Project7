// eslint-disable-next-line no-undef
const config = require('../config');

test('status code should be 200', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatusCode = response.status;
		console.log(actualStatusCode);
	} catch (error) {
		console.error(error);
	}
	expect (actualStatusCode).toBe(200)
});

test('', async () => {
	let actualResponseBody
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json();
		console.log(actualResponseBody);
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toContain('')
});
