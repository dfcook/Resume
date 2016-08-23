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
    var EducationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EducationService = (function () {
                function EducationService() {
                }
                EducationService.prototype.getEducations = function () {
                    return [{
                            qualification: "Degree (2:1) in English Literature / Philosophy ",
                            establishment: "Keele University"
                        }, {
                            qualification: "4 A-Levels and 9 GCSE’s",
                            establishment: "Kirkham Grammar School"
                        }];
                };
                EducationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EducationService);
                return EducationService;
            }());
            exports_1("EducationService", EducationService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1Y2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9TY3JpcHRzL3NlcnZpY2VzL2VkdWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUE7Z0JBVUEsQ0FBQztnQkFURyx3Q0FBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxDQUFDOzRCQUNKLGFBQWEsRUFBRSxrREFBa0Q7NEJBQ2pFLGFBQWEsRUFBRSxrQkFBa0I7eUJBQ2hDLEVBQUU7NEJBQ0MsYUFBYSxFQUFFLHlCQUF5Qjs0QkFDeEMsYUFBYSxFQUFFLHdCQUF3Qjt5QkFDMUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBVkw7b0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBV2IsdUJBQUM7WUFBRCxDQUFDLEFBVkQsSUFVQztZQVZELCtDQVVDLENBQUEifQ==