import {Component, Inject, OnInit} from 'angular2/core';
import {ApplicantService} from './services/applicant.service';
import {Applicant} from './model/applicant';

@Component({
    selector: 'personal-details',
    templateUrl: 'templates/personal.details.html'
})
export class PersonalDetailsComponent implements OnInit {    
    public applicant: Applicant;

    constructor(private _applicantService: ApplicantService) { }

    ngOnInit() {
        this.applicant = this._applicantService.getApplicant();
    }
}