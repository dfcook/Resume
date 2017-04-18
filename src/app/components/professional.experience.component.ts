import { Component, OnInit } from "@angular/core";
import { ProfessionalExperienceBlockComponent } from "./professional.experience.block.component";
import { ProfessionalExperienceService } from "./../services/professional.experience.service";
import { IProfessionalExperience } from "./../model/professional.experience";

@Component({
    styleUrls: [ "./../../assets/css/timeline.css" ],
    selector: "professional-experience",
    templateUrl: "./../../templates/professional.experience.html"
})
export class ProfessionalExperienceComponent implements OnInit {
    public experience: IProfessionalExperience[];

    constructor(private _experienceService: ProfessionalExperienceService) { }

    ngOnInit() {
        this.experience = this._experienceService.getProfessionalExperience().
            sort(function (a: IProfessionalExperience, b: IProfessionalExperience) {
                return a.startYear > b.startYear ? -1 : a.startYear < b.startYear ? 1 : 0;
            });
    };
}
