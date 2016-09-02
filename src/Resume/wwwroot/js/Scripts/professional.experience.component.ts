/// <reference path="./../typings/browser.d.ts" />

import {Component, OnInit} from "angular2/core";
import {ProfessionalExperienceService} from "./services/professional.experience.service";
import {IProfessionalExperience} from "./model/professional.experience";
import {IsNullPipe} from "./pipes/isnull-pipe";

@Component({
    styleUrls: [ "css/timeline.css" ],
    selector: "professional-experience",
    templateUrl: "templates/professional.experience.html",
    pipes: [IsNullPipe]
})
export class ProfessionalExperienceComponent implements OnInit {
    public experience: IProfessionalExperience[];    

    constructor(private _experienceService: ProfessionalExperienceService) { }

    ngOnInit() {
        this.experience = this._experienceService.getProfessionalExperience().
            sort(function (a: IProfessionalExperience, b: IProfessionalExperience) {
                return a.startDate > b.startDate ? -1 : a.startDate < b.startDate ? 1 : 0;
            });
    };   
}