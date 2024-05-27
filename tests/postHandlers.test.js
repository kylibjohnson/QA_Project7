// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
        {
            "id": 1,
            "quantity": 2
        },
        {
            "id": 6,
            "quantity": 2
        }
    ]
	  
}
testCreateKit() {
	
	let createResponse = sendPostRequest('${config.API_URL}/api/v1/kits', {2});
	assert(createResponse.status, 201); 
	let kitId = createResponse.body.id;

test('response body should contain 'red caviar'', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
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
	expect(actualResponseBody['productsList']) .toContain('Red caviar')
});

test('status code should be 200', async () => {
	let actualStatusCode
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
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


