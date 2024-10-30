import http from '@/http-common';
//import Site from '@/types/Site';

class SiteDataService {
	getAll(pageNumber = 1, pageSize = 10): Promise<any> {
		const url = `/sites?_page=${pageNumber}&_limit=${pageSize}`;
		//console.log(url);
		return http.get(url);
	}

	get(id: string): Promise<any> {
		return http.get(`/sites/${id}`);
	}
}

export default new SiteDataService();
