// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
}

test('', async () => {
    try {
		const response = await fetch(`${config.API_URL}/your/endpoint`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
});
