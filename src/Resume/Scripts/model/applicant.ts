import {Address} from './address';

export class Applicant {
    public firstName: string;
    public surname: string;

    public get fullName(): string {
        return `${this.firstName} ${this.surname}`;
    }

    public dateOfBirth: Date;

    public address: Address;
}