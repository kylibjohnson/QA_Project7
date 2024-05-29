// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
        "price": 10
    }

test('response body should respond true when changing the price of a grocery item', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
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
    expect(actualResponseBody['ok']).toBe(true)
});

test('status code should be 200', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
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