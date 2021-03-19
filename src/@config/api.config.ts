import { Axios } from 'axios-observable';
import { ENV } from './ENV.config';

const dd = Axios.create({
	baseURL: ENV.WatsonApiEndpoint,
});
dd.interceptors.response.use(
	(res:any) => {
		// console.log('from config', res);
		return { ...res.data, ...{ status: res.status } };
	},
	(error) => {
		// console.log('from config', error);

		if (error.response) {
			return Promise.reject({
				...error.response.data,
				...{ status: error.response.data.statusCode || error.status },
			});
		} else {
			return Promise.reject({
				success: false,
				statusCode: 404,
				status: 404,
				message: 'server not responding',
				errorMessages: ['server not responding'],
			});
		}
	}
);

export const WatsonApiInstance = dd;
