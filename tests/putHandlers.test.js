// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}

test('', async () => {
    try {
		const response = await fetch(`${config.API_URL}/your/endpoint`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
});
