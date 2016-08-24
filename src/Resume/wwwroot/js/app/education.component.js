System.register(["angular2/core", "./services/education.service"], function(exports_1, context_1) {
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
    var core_1, education_service_1;
    var EducationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (education_service_1_1) {
                education_service_1 = education_service_1_1;
            }],
        execute: function() {
            EducationComponent = (function () {
                function EducationComponent(_educationService) {
                    this._educationService = _educationService;
                }
                EducationComponent.prototype.ngOnInit = function () {
                    this.educations = this._educationService.getEducations();
                };
                EducationComponent = __decorate([
                    core_1.Component({
                        selector: "education",
                        templateUrl: "templates/education.html"
                    }), 
                    __metadata('design:paramtypes', [education_service_1.EducationService])
                ], EducationComponent);
                return EducationComponent;
            }());
            exports_1("EducationComponent", EducationComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1Y2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1NjcmlwdHMvZWR1Y2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUdJLDRCQUFvQixpQkFBbUM7b0JBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7Z0JBQUksQ0FBQztnQkFFNUQscUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDN0QsQ0FBQztnQkFYTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsMEJBQTBCO3FCQUMxQyxDQUFDOztzQ0FBQTtnQkFTRix5QkFBQztZQUFELENBQUMsQUFSRCxJQVFDO1lBUkQsbURBUUMsQ0FBQSJ9