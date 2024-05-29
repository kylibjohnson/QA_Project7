// eslint-disable-next-line no-undef
const config = require('../config');
      
test('kit should be created and then deleted', async () => {
    let kitId;
    // Create a new kit
    const createRequestBody = {
        "name": "sample kit",
        "cardId": 7
    };
    try {
        const createResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createRequestBody)
        });
        expect(createResponse.status).toBe(201);

        // Get the created kit ID from the response body
        const createResponseBody = await createResponse.json();
        kitId = createResponseBody.id;

        console.log('Kit created with ID:', kitId);
    } catch (error) {
        console.error(error);
    }
    // Delete the kit
    let actualResponseBody;
    try {
        const deleteResponse = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
            method: 'DELETE',
        });
        expect(deleteResponse.status).toBe(200);

        actualResponseBody = await deleteResponse.json();
        console.log(actualResponseBody);
    } catch (error) {
        console.error(error);
    }
    expect(actualResponseBody['ok']).toBe(true);
});

test('status code should be 200', async () => {
    let actualStatusCode;
    const kitId = 7;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
            method: 'DELETE',
        });
        actualStatusCode = response.status;  
        console.log(actualStatusCode);
    } catch (error) {
        console.error(error);
    }
    expect(actualStatusCode).toBe(200);  
});