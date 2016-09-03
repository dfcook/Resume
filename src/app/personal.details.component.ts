import {Component, Inject, OnInit} from "@angular/core";
import {ApplicantService} from "./services/applicant.service";
import {IApplicant} from "./model/applicant";

@Component({
    selector: "personal-details",
    templateUrl: "./../templates/personal.details.html"
})
export class PersonalDetailsComponent implements OnInit {
    public applicant: IApplicant;

    constructor(private _applicantService: ApplicantService) { }

    ngOnInit() {
        this.applicant = this._applicantService.getApplicant();
    }
}