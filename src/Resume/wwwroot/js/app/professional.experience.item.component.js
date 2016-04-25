/// <reference path="./../typings/browser.d.ts" />
System.register(['angular2/core', 'angular2/common', './pipes/isnull-pipe'], function(exports_1, context_1) {
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
    var core_1, common_1, isnull_pipe_1;
    var ProfessionalExperienceItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (isnull_pipe_1_1) {
                isnull_pipe_1 = isnull_pipe_1_1;
            }],
        execute: function() {
            ProfessionalExperienceItemComponent = (function () {
                function ProfessionalExperienceItemComponent() {
                    this._isHidden = true;
                    this._bounceIn = false;
                }
                ProfessionalExperienceItemComponent.prototype.setClasses = function () {
                    return {
                        isHidden: this._isHidden,
                        bounceIn: this._bounceIn
                    };
                };
                ProfessionalExperienceItemComponent.prototype.onScroll = function (event) {
                    this._isHidden = false;
                    this._bounceIn = true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProfessionalExperienceItemComponent.prototype, "experience", void 0);
                ProfessionalExperienceItemComponent = __decorate([
                    core_1.Component({
                        selector: 'professional-experience-item',
                        templateUrl: 'templates/professional.experience.item.html',
                        inputs: ['experience'],
                        pipes: [isnull_pipe_1.IsNullPipe],
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProfessionalExperienceItemComponent);
                return ProfessionalExperienceItemComponent;
            }());
            exports_1("ProfessionalExperienceItemComponent", ProfessionalExperienceItemComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzc2lvbmFsLmV4cGVyaWVuY2UuaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9TY3JpcHRzL3Byb2Zlc3Npb25hbC5leHBlcmllbmNlLml0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDLGtEQUFrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZW5EO2dCQUFBO29CQUlZLGNBQVMsR0FBWSxJQUFJLENBQUM7b0JBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7Z0JBYXZDLENBQUM7Z0JBWEcsd0RBQVUsR0FBVjtvQkFDSSxNQUFNLENBQUM7d0JBQ0gsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTO3dCQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVM7cUJBQzNCLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxzREFBUSxHQUFSLFVBQVMsS0FBSztvQkFDVixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBaEJEO29CQUFDLFlBQUssRUFBRTs7dUZBQUE7Z0JBUlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsOEJBQThCO3dCQUN4QyxXQUFXLEVBQUUsNkNBQTZDO3dCQUMxRCxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQ3RCLEtBQUssRUFBRSxDQUFDLHdCQUFVLENBQUM7d0JBQ25CLFVBQVUsRUFBRSxDQUFDLGdCQUFPLENBQUM7cUJBQ3hCLENBQUM7O3VEQUFBO2dCQW1CRiwwQ0FBQztZQUFELENBQUMsQUFsQkQsSUFrQkM7WUFsQkQscUZBa0JDLENBQUEifQ==