import {Component, Inject, OnInit} from "angular2/core";
import {EducationService} from "./services/education.service";
import {IEducation} from "./model/education";

@Component({
    selector: "education",
    templateUrl: "templates/education.html"
})
export class EducationComponent implements OnInit {
    public educations: IEducation[];

    constructor(private _educationService: EducationService) { }

    ngOnInit() {
        this.educations = this._educationService.getEducations();
    }
}