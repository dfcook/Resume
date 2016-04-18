System.register(['angular2/core', './services/applicant.service'], function(exports_1, context_1) {
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
    var core_1, applicant_service_1;
    var PersonalDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (applicant_service_1_1) {
                applicant_service_1 = applicant_service_1_1;
            }],
        execute: function() {
            PersonalDetailsComponent = (function () {
                function PersonalDetailsComponent(_applicantService) {
                    this._applicantService = _applicantService;
                }
                PersonalDetailsComponent.prototype.ngOnInit = function () {
                    this.applicant = this._applicantService.getApplicant();
                };
                PersonalDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'personal-details',
                        templateUrl: 'templates/personal.details.html'
                    }), 
                    __metadata('design:paramtypes', [applicant_service_1.ApplicantService])
                ], PersonalDetailsComponent);
                return PersonalDetailsComponent;
            }());
            exports_1("PersonalDetailsComponent", PersonalDetailsComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwuZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9TY3JpcHRzL3BlcnNvbmFsLmRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBR0ksa0NBQW9CLGlCQUFtQztvQkFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtnQkFBSSxDQUFDO2dCQUU1RCwyQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUMzRCxDQUFDO2dCQVhMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsV0FBVyxFQUFFLGlDQUFpQztxQkFDakQsQ0FBQzs7NENBQUE7Z0JBU0YsK0JBQUM7WUFBRCxDQUFDLEFBUkQsSUFRQztZQVJELCtEQVFDLENBQUEifQ==