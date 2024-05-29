# Sprint 7 project

Urban Grocers API Testing | Kyli B. Johnson

The purpose of these tests are to check the response status code and to parse the response ensuring that the response body contains the expected data of our API endpoint requests GET, POST, PUT, and DELETE of the Urban Grocers site.

Throughout these tests the apiDoc (URL /docs/) and swagger docs (URL /api/swagger) are used as a reference to determine what kind of tests can be created for endpoints of the Urban Grocers site. In addition, these tests are also ran through Postman, when needed.

TASK 1 | GET
    //In this task, I am checking the GET request by getting a list of warehouses using the endpoint /api/v1/warehouse. Our first test will check that the response code returns a '200 OK' with a list of the warehouses in Visual Studio Code. To do this, enter the following code in the body under the get.Handlers.test folder then run the code in the terminal using command 'npx jest':
    
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

    //For the second test, I am checking that the response body contains the name of one of the warhouses, 'Big World', that should be listed. Enter the following code beneath the first test code and run the code in the terminal using 'npx jest' :
    
    test('response body should contain "Big World" ', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody[3]['name']) .toContain('Big World')
});

TASK 2 | POST
    // In this task, I am checking the availabilty of goods in the warehouses using a POST request with URL endpoint /api/v1/warehouses/check. The response body should return a list of the warehouses and if 'Sprite' is available in each warehouse. To do this, enter the following code in the body under the post.Handlers.test folder then run the code in the terminal using command 'npx jest':

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
    //The second test will check that the response code returns a '200 OK'. Enter the following code beneath the first test code and run the code in the terminal using 'npx jest' :

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

TASK 3 | PUT


TASK 4 | DELETE




testCreateKit() {
	
	let createResponse = sendPostRequest('${config.API_URL}/api/v1/kits', {2});
	assert(createResponse.status, 201); 
	let kitId = createResponse.body.id;
