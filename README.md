# Sprint 7 project
## Project Name
Urban Grocers API Testing | Kyli B. Johnson
## Project Purpose
The purpose of these tests are to check the response status code and to parse the response ensuring that the response body contains the expected data of our API endpoint requests GET, POST, PUT, and DELETE of the Urban Grocers site.
## Technologies & Techniques
The documentation sources used for reference are the apiDoc (URL /docs/) and swagger (URL /api/swagger) to determine what kind of tests can be created for endpoints of the Urban Grocers site. The tests are conducted in Visual Studio Code and also ran through Postman, when needed.

## TASK 1 | GET
In this task, I am checking the GET request by getting a list of warehouses using the endpoint /api/v1/warehouses. Our first test will check that the response code returns a '200 OK' with a list of the warehouses. To do this, enter the following code in the body under the getHandlers.test.js folder. Then run the code in the terminal using command 'npx jest'
    
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

For the second test, I am checking that the response body contains the name of one of the warhouses,'Big World' when sending a GET request with the endpoint /api/v1/warehouses. Enter the following code beneath the first test code and run it in the terminal using 'npx jest' 

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

## TASK 2 | POST
In this task, I am checking the availabilty of goods in the warehouses using a POST request with URL endpoint /api/v1/warehouses/check. The response body should return a list of the warehouses and if 'Sprite' is available in each warehouse. To do this, enter the following code in the body under the postHandlers.test.js folder then run the code in the terminal using command 'npx jest' 

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

The second test will check that the response code returns a '200 OK' when sending a POST request with the endpoint /api/v1/warehouses/check. Enter the following code beneath the first test code and run it in the terminal using 'npx jest' 

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

## TASK 3 | PUT
This task checks the PUT request of the endpoint /api/v1/products/:id when changing the price of a grocery item. For this test, the id number being used is 7 and represents "Potato Chips - Classic Salted", and I am changing the price to '10'. To do this, enter the following code in the body under the putHandlers.test.js folder then run the code in the terminal using command 'npx jest'

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

The second test will check that the response code returns a '200 OK' when sending the PUT request with the endpoint /api/v1/products/:id. Enter the following code beneath the first test code and run it in the terminal using 'npx jest' 

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

## TASK 4 | DELETE
In this task I am testing the deletion of a kit using the DELETE request with the endpoint /api/v1/kits/:id. In order to test the deletion of a kit, a kit must first be created. To do this, enter the following code in the body under the deleteHandlers.test.js folder then run the code in the terminal using command 'npx jest'

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

The second test will check that the response code returns a '200 OK' when sending a DELETE request with endpoint /api/v1/kits/:id. Enter the following code beneath the first test code and run it in the terminal using 'npx jest' 

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