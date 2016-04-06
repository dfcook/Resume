System.register(['angular2/core', './services/professional.experience.service'], function(exports_1, context_1) {
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
    var core_1, professional_experience_service_1;
    var ProfessionalExperienceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (professional_experience_service_1_1) {
                professional_experience_service_1 = professional_experience_service_1_1;
            }],
        execute: function() {
            ProfessionalExperienceComponent = (function () {
                function ProfessionalExperienceComponent(_experienceService) {
                    this._experienceService = _experienceService;
                }
                ProfessionalExperienceComponent.prototype.ngOnInit = function () {
                    this.experience = this._experienceService.getProfessionalExperience().sort(function (a, b) { return a.startDate > b.startDate ? -1 : a.startDate < b.startDate ? 1 : 0; });
                };
                ProfessionalExperienceComponent = __decorate([
                    core_1.Component({
                        selector: 'professional-experience',
                        templateUrl: 'templates/professional.experience.html'
                    }), 
                    __metadata('design:paramtypes', [professional_experience_service_1.ProfessionalExperienceService])
                ], ProfessionalExperienceComponent);
                return ProfessionalExperienceComponent;
            }());
            exports_1("ProfessionalExperienceComponent", ProfessionalExperienceComponent);
        }
    }
});
//# sourceMappingURL=professional.experience.component.js.map