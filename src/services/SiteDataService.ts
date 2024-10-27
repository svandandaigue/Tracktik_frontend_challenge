import http from '@/http-common';
//import Site from '@/types/Site';

class SiteDataService {
	getAll(): Promise<any> {
		return http.get('/sites');
	}

	get(id: string): Promise<any> {
		return http.get(`/sites/${id}`);
	}
}

export default new SiteDataService();
