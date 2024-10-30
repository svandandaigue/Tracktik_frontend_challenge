import Client from '@/types/Client';
import Site from '@/types/Site';

export interface State {
    clients: Array<Client>
    sites: Array<Site>,
    currentPage: number,
    pageSize: number,
    currentDataType: string,
    totalPageCount: number
}