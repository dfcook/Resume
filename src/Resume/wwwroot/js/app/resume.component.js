System.register(['angular2/core', './personal.details.component', './key.skills.component', './navigation.component', './education.component', './professional.experience.component', 'angular2/router', './services/applicant.service', './services/key.skills.service', './services/industry.knowledge.service', './services/professional.experience.service', './services/education.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, personal_details_component_1, key_skills_component_1, navigation_component_1, education_component_1, professional_experience_component_1, router_1, applicant_service_1, key_skills_service_1, industry_knowledge_service_1, professional_experience_service_1, education_service_1;
    var ResumeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (personal_details_component_1_1) {
                personal_details_component_1 = personal_details_component_1_1;
            },
            function (key_skills_component_1_1) {
                key_skills_component_1 = key_skills_component_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            },
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            },
            function (professional_experience_component_1_1) {
                professional_experience_component_1 = professional_experience_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (applicant_service_1_1) {
                applicant_service_1 = applicant_service_1_1;
            },
            function (key_skills_service_1_1) {
                key_skills_service_1 = key_skills_service_1_1;
            },
            function (industry_knowledge_service_1_1) {
                industry_knowledge_service_1 = industry_knowledge_service_1_1;
            },
            function (professional_experience_service_1_1) {
                professional_experience_service_1 = professional_experience_service_1_1;
            },
            function (education_service_1_1) {
                education_service_1 = education_service_1_1;
            }],
        execute: function() {
            ResumeComponent = (function () {
                function ResumeComponent() {
                }
                ResumeComponent = __decorate([
                    core_1.Component({
                        selector: 'resume',
                        templateUrl: 'templates/resume.html',
                        directives: [router_1.ROUTER_DIRECTIVES,
                            navigation_component_1.NavigationComponent],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            applicant_service_1.ApplicantService,
                            key_skills_service_1.KeySkillsService,
                            industry_knowledge_service_1.IndustryKnowledgeService,
                            professional_experience_service_1.ProfessionalExperienceService,
                            education_service_1.EducationService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/personal_details',
                            name: 'Personal Details',
                            component: personal_details_component_1.PersonalDetailsComponent,
                            useAsDefault: true
                        }
                    ]),
                    router_1.RouteConfig([
                        {
                            path: '/key_skills',
                            name: 'Key Skills',
                            component: key_skills_component_1.KeySkillsComponent
                        }
                    ]),
                    router_1.RouteConfig([
                        {
                            path: '/professional_experience',
                            name: 'Professional Experience',
                            component: professional_experience_component_1.ProfessionalExperienceComponent
                        }
                    ]),
                    router_1.RouteConfig([
                        {
                            path: '/education',
                            name: 'Education',
                            component: education_component_1.EducationComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ResumeComponent);
                return ResumeComponent;
            }());
            exports_1("ResumeComponent", ResumeComponent);
        }
    }
});
//# sourceMappingURL=resume.component.js.map