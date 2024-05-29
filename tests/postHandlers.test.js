// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
		"products": [
			{
				"id": 5,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 5
			}
		]
}

test('checking the availability of goods in warehouses', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
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
	let spriteAvailable = false;
	for (const warehouse in actualResponseBody) {
		if (actualResponseBody[warehouse]['Sprite Soft Drink']) {
			spriteAvailable = true;
		}
	}
	expect(spriteAvailable).toBe(true);
});

test('status code should be 200', async () => {
	let actualStatusCode
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
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


