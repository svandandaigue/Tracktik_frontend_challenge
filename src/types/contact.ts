import { Address } from '@/types/address';

export interface Contact {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	jobTitle: string;
	address: Address
}