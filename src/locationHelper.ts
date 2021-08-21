export const getBasePath = () => {
	if (process.env.NODE_ENV === 'development') {
		return 'http://localhost:3000';
	} else {
		return 'https://www.vectormonkeys.com/';
	}
};