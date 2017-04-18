import { Routes, RouterModule } from "@angular/router";

import { PersonalDetailsComponent } from "./components/personal.details.component";
import { KeySkillsComponent } from "./components/key.skills.component";
import { EducationComponent } from "./components/education.component";
import { ProfessionalExperienceComponent } from "./components/professional.experience.component";

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
