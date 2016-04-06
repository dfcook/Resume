System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ProfessionalExperienceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProfessionalExperienceService = (function () {
                function ProfessionalExperienceService() {
                }
                ProfessionalExperienceService.prototype.getProfessionalExperience = function () {
                    return [{
                            company: 'Axa Insurance',
                            startDate: new Date(1997, 9, 1),
                            endDate: new Date(1999, 8, 1),
                            jobTitle: 'Application Developer',
                            skills: ['Visual Basic', 'Oracle', 'FileNet Imaging and Workflow'],
                            description: 'Development and support of an Imaging and Workflow application using Visual Basic, Oracle and FileNet components'
                        }, {
                            company: 'Target Worldwide Express',
                            startDate: new Date(1999, 8, 1),
                            endDate: new Date(2000, 2, 28),
                            jobTitle: 'Application Developer',
                            skills: ['Visual Basic', 'Oracle', 'FileNet Imaging and Workflow'],
                            description: 'Developer of an Imaging and workflow application in Visual Basic to facilitate the tracking of Proof of Delivery (POD) information'
                        }];
                };
                ProfessionalExperienceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ProfessionalExperienceService);
                return ProfessionalExperienceService;
            }());
            exports_1("ProfessionalExperienceService", ProfessionalExperienceService);
        }
    }
});
//# sourceMappingURL=professional.experience.service.js.map