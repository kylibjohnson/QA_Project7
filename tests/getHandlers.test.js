// eslint-disable-next-line no-undef
const config = require('../config');

test('', async () => {
	try {
		const response = await fetch(`${config.API_URL}/your/endpoint`);
	} catch (error) {
		console.error(error);
	}
});
