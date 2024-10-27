import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
	baseURL: 'https://tracktik-challenge.staffr.com',
	headers: {
		'Content-Type': 'application/json'
	}
});

export default apiClient;