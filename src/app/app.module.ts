import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';

import { PersonalDetailsComponent } from "./personal.details.component";
import { KeySkillsComponent } from "./key.skills.component";
import { NavigationComponent } from "./navigation.component";
import { ProfessionalExperienceComponent } from "./professional.experience.component";
import { ProfessionalExperienceBlockComponent } from "./professional.experience.block.component";
import { EducationComponent } from "./education.component";

import { ApplicantService } from "./services/applicant.service";
import { EducationService } from "./services/education.service";
import { IndustryKnowledgeService } from "./services/industry.knowledge.service";
import { KeySkillsService } from "./services/key.skills.service";
import { ProfessionalExperienceService } from "./services/professional.experience.service";

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    PersonalDetailsComponent,
    KeySkillsComponent,
    NavigationComponent,
    ProfessionalExperienceComponent,
    ProfessionalExperienceBlockComponent,
    EducationComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    ApplicantService,
    EducationService,
    IndustryKnowledgeService,
    KeySkillsService,
    ProfessionalExperienceService
  ]
})
export class AppModule {
  constructor() {}  
}
