import {Component, Inject, OnInit} from 'angular2/core';
import {EducationService} from './services/education.service';
import {Education} from './model/education';

@Component({
    selector: 'education',
    templateUrl: 'templates/education.html'
})
export class EducationComponent implements OnInit {    
    public educations: Education[];

    constructor(private _educationService: EducationService) { }

    ngOnInit() {
        this.educations = this._educationService.getEducations();
    }
}