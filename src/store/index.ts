import Site from '@/types/Site';
import Client from '@/types/Client';
import { State } from '@/types/State';
import { createStore } from 'vuex';
import SiteDataService from '@/services/SiteDataService';
import { TRANSMIT_PAGE_SIZES, SCHEDULING_DATA_TYPES } from '@/services/commonConstants';


/*const ENDPOINTS = {
	GetClients: 'clients',
	GetClientById: 'clients/{id}',
	GetSites: 'sites',
	GetSiteById: 'sites/{id}'
}*/


const mainModule = {
	namespace: true,
	state: () => ({
		clients: [] as Array<Client>,
		sites: [] as Array<Site>,
		currentPage: 1 as number,
		pageSize: 10 as number,
		currentDataType: SCHEDULING_DATA_TYPES.SITES as string,
		totalPageCount: 0 as number
	}),
	getters: {
		getClients: (state: State): Array<Client> => state.clients,
		getSites: (state: State): Array<Site> => state.sites,
		getCurrentPage: (state: State): number => state.currentPage,
		getPageSize: (state: State): number => state.pageSize,
		getCurrentDataType: (state: State): string => state.currentDataType.toString(),
		getCurrentData: (state: State): Array<any> => {
			return state.currentDataType === SCHEDULING_DATA_TYPES.SITES ? state.sites : state.clients;
		},
		// approximation since api doesn't provide and needed by pagination component
		getCurrentRoundDataSize: (state: State): number => {
			if (state.totalPageCount === 0) {
				return 0;
			}
			return (state.totalPageCount - 1) * state.pageSize;
		},
		getTotalPageCount: (state: State) => state.totalPageCount
	},
	mutations: {
		SET_SITES(state: State, payload: Array<Site>) {
			// to make them reactive
			const siteList: Array<Site> = [];
			payload.forEach((item: Site) => {
				siteList.push(item);
			});
			state.sites = siteList;
		},
		SET_CURRENT_PAGE(state: State, payload: number) {
			state.currentPage = payload;
		},
		SET_PAGE_SIZE(state: State, payload: number) {
			state.pageSize = payload;
		},
		SET_CURRENT_DATA_TYPE(state: State, payload: string) {
			state.currentDataType = payload;
		},
		SET_TOTAL_PAGE_COUNT(state: State, payload: string) {
			state.totalPageCount = parseInt(payload);
		}
	},
	actions: {
		// use dispatch('actionName', params)
		async getSchedulingData({ getters, dispatch }: any) {
			if (getters.getCurrentDataType === SCHEDULING_DATA_TYPES.SITES) {
				await dispatch('fetchSiteData');
			} else {
				// TODO: await dispatch('fetchClientData');
			}
		},
		async fetchSiteData({ getters, commit }: any) {
			//console.log(`currentPage: ${getters.getCurrentPage}  pageSize: ${getters.getPageSize}`)
			await SiteDataService.getAll(getters.getCurrentPage, getters.getPageSize)
				.then((response: any) => {
					if (response.data) {
						commit('SET_SITES', response.data);
						if (getters.getTotalPageCount === 0) {
							const links: string[] = response.headers.link.split('>');
							const regex = /e=(.*?)&/;
							const match = regex.exec(links[Math.max(links.length - 2, 0)]);
							//console.log(match)
							if (match !== null) {
								commit('SET_TOTAL_PAGE_COUNT', match[1]);
							}
						}
						return true;
					}
					return false;
				}).catch((e: Error) => {
					console.error(e);
					return false;
				}).finally(() => {
					return true;
				});
			return true;
		},
		async setCurrentPage({ dispatch, commit }: any, pageNumber: number) {
			commit('SET_CURRENT_PAGE', pageNumber);
			await dispatch('getSchedulingData');
		},
		async setPageSize({ dispatch, commit }: any, pageSize: number) {
			commit('SET_PAGE_SIZE', pageSize);
			commit('SET_TOTAL_PAGE_COUNT', 0);
			await dispatch('getSchedulingData');
		},
		async setCurrentDataType({ dispatch, commit }: any, dataType: string) {
			commit('SET_CURRENT_DATA_TYPE', dataType);
			commit('SET_TOTAL_PAGE_COUNT', 0);
			await dispatch('getSchedulingData');
		}
	}
}

export default createStore({
	modules: {
		main: mainModule
	},
});
