import {Component} from 'angular2/core';
import {PersonalDetailsComponent} from './personal.details.component';
import {KeySkillsComponent} from './key.skills.component';
import {NavigationComponent} from './navigation.component';
import {EducationComponent} from './education.component';
import {ProfessionalExperienceComponent} from './professional.experience.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {ApplicantService} from './services/applicant.service';
import {KeySkillsService} from './services/key.skills.service';
import {IndustryKnowledgeService} from './services/industry.knowledge.service';
import {ProfessionalExperienceService} from './services/professional.experience.service';
import {EducationService} from './services/education.service';

@Component({

    selector: 'resume',
    templateUrl: 'templates/resume.html',
    directives: [ROUTER_DIRECTIVES,
        NavigationComponent],
    providers: [
        ROUTER_PROVIDERS,
        ApplicantService,
        KeySkillsService,
        IndustryKnowledgeService,
        ProfessionalExperienceService,
        EducationService                      
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
@RouteConfig([
    {
        path: '/key_skills',
        name: 'Key Skills',
        component: KeySkillsComponent        
    }
])
@RouteConfig([
    {
        path: '/professional_experience',
        name: 'Professional Experience',
        component: ProfessionalExperienceComponent
    }
])
@RouteConfig([
    {
        path: '/education',
        name: 'Education',
        component: EducationComponent
    }
])
export class ResumeComponent {
}