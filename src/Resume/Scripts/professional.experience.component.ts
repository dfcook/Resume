import {Component, Inject, OnInit} from 'angular2/core';
import {ProfessionalExperienceService} from './services/professional.experience.service';
import {ProfessionalExperience} from './model/professional.experience';

@Component({
    selector: 'professional-experience',
    templateUrl: 'templates/professional.experience.html'
})
export class ProfessionalExperienceComponent implements OnInit {    
    public experience: ProfessionalExperience[];

    constructor(private _experienceService: ProfessionalExperienceService) { }

    ngOnInit() {
        this.experience = this._experienceService.getProfessionalExperience();        
    }
}