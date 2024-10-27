import Address from '@/types/Address';

export default interface Contact {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	jobTitle: string;
	address: Address
}