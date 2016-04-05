import {Component} from 'angular2/core';
import {PersonalDetailsComponent} from './personal.details.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {ApplicantService} from './services/applicant.service';

@Component({
    selector: 'resume',
    templateUrl: 'templates/resume.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ApplicantService               
    ]    
})
@RouteConfig([
    {
        path: '/personal_details',
        name: 'Personal Details',
        component: PersonalDetailsComponent,
        useAsDefault: true
    }
])
export class ResumeComponent {
    public title: string = 'Tour of Heroes';
}