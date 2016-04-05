import {Injectable} from 'angular2/core';
import {Applicant} from './../model/applicant';

@Injectable()
export class ApplicantService {
    getApplicant(): Applicant {
        let app = new Applicant();
        app.firstName = 'Daniel';
        app.surname = 'Cook';

        return app;
    }
}