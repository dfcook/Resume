import {Injectable} from 'angular2/core';
import {Applicant} from './../model/applicant';

@Injectable()
export class ApplicantService {
    getApplicant(): Applicant {
        return {
            firstName: 'Daniel',
            surname: 'Cook',
            dateOfBirth: new Date(1975, 6, 15),
            description: 'A senior developer with 18 years experience including 15 years (from 1.0 beta) in .NET development for both the desktop and the Web. Current position is as a contractor for Credit Suisse investment bank developing rich client applications in Silverlight and Windows alongside web solutions using HTML5, CSS and Angular.js. Experienced in object-oriented and functional design and patterns. Strong SQL skills including query performance analysis.'
        };        
    }
}