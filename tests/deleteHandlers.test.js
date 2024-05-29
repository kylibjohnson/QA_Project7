// eslint-disable-next-line no-undef
const config = require('../config');

test('status code should be 200', async () => {
	let actualStatusCode;
    try {
		const Response = await fetch(`${config.API_URL}/api/v1/orders/2`, {
			method: 'DELETE',
		  });
		  actualResponseBody= await response.json();
		} catch (error) {
			console.error(error);
		}
		  expect(actualStatusCode).toBe(200)
});	  

test('order 2 should be deleted', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders//api/v1/orders/${orderId}`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json();
		console.log(actualResponseBody);
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.ok) .toBe('true')
});
