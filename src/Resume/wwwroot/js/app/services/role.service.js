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
    var RoleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RoleService = (function () {
                function RoleService() {
                }
                RoleService.prototype.getRoles = function () {
                    return [{
                            startDate: new Date(),
                            endDate: new Date(),
                            skills: [""
                            ],
                            description: ""
                        }];
                };
                RoleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RoleService);
                return RoleService;
            }());
            exports_1("RoleService", RoleService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vU2NyaXB0cy9zZXJ2aWNlcy9yb2xlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQTtnQkFVQSxDQUFDO2dCQVRHLDhCQUFRLEdBQVI7b0JBQ0ksTUFBTSxDQUFDLENBQUM7NEJBQ0osU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFOzRCQUNyQixPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUU7NEJBQ25CLE1BQU0sRUFBRSxDQUFDLEVBQUU7NkJBQ047NEJBQ0wsV0FBVyxFQUFFLEVBQUU7eUJBQ2xCLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQVZMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQVdiLGtCQUFDO1lBQUQsQ0FBQyxBQVZELElBVUM7WUFWRCxxQ0FVQyxDQUFBIn0=