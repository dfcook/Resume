import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

import {PersonalDetailsComponent} from "./personal.details.component";
import {KeySkillsComponent} from "./key.skills.component";
import {EducationComponent} from "./education.component";
import {ProfessionalExperienceComponent} from "./professional.experience.component";

export const ROUTES: Routes = [
    {
        path: "",                
        component: PersonalDetailsComponent        
    }, {
        path: "key_skills",        
        component: KeySkillsComponent
    }, {
        path: "professional_experience",        
        component: ProfessionalExperienceComponent
    }, {
        path: "education",        
        component: EducationComponent
    }
];
