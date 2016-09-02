System.register(["angular2/core"], function(exports_1, context_1) {
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
    var ApplicantService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ApplicantService = (function () {
                function ApplicantService() {
                }
                ApplicantService.prototype.getApplicant = function () {
                    return {
                        firstName: "Daniel",
                        surname: "Cook",
                        dateOfBirth: new Date(1975, 6, 15),
                        description: "A senior developer with 18 years in the industry including 15 years " +
                            " .NET development for both the desktop and the Web." +
                            " Produces high quality results with blistering speed, working from simple requirements to a polished end product." +
                            " Experience and self-motivated approach to learning can be applied to both development and consultancy."
                    };
                };
                ApplicantService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ApplicantService);
                return ApplicantService;
            }());
            exports_1("ApplicantService", ApplicantService);
        }
    }
});
//# sourceMappingURL=applicant.service.js.map