/// <reference path="./../../typings/browser.d.ts" />

import { Applicant } from './applicant';

describe('Applicant', () => {
    let app: Applicant = {
        firstName: 'Daniel',
        surname: 'Cook',
        description: 'foo',
        dateOfBirth: new Date(1975,6,15)
    };    

    it('has first name', () => {        
        expect(app.firstName).toEqual('Daniel');
    });
    it('has surname', () => {        
        expect(app.surname).toEqual('Cook');
    });
    it('has DOB', () => {
        expect(app.dateOfBirth).toEqual(new Date(1975, 6, 15));
    });
    it('has description', () => {
        expect(app.description).toEqual('foo');
    });
});