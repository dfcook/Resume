/// <reference path="./../typings/browser.d.ts" />
System.register(["angular2/core", "./services/professional.experience.service", "./pipes/isnull-pipe"], function(exports_1, context_1) {
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
    var core_1, professional_experience_service_1, isnull_pipe_1;
    var ProfessionalExperienceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (professional_experience_service_1_1) {
                professional_experience_service_1 = professional_experience_service_1_1;
            },
            function (isnull_pipe_1_1) {
                isnull_pipe_1 = isnull_pipe_1_1;
            }],
        execute: function() {
            ProfessionalExperienceComponent = (function () {
                function ProfessionalExperienceComponent(_experienceService, _elementRef) {
                    var _this = this;
                    this._experienceService = _experienceService;
                    this._elementRef = _elementRef;
                    this.onScroll = function () {
                        (!window.requestAnimationFrame)
                            ? window.setTimeout(function () { return _this.showBlocks(); }, 100)
                            : window.requestAnimationFrame(function () { return _this.showBlocks(); });
                    };
                    this.windowOffset = function () {
                        return window.pageYOffset + window.innerHeight * 0.9;
                    };
                    this.showBlocks = function () {
                        var offset = _this.windowOffset();
                        _this._blocks.each(function () {
                            var block = $(_this);
                            if (block.offset().top <= offset &&
                                block.find(".cd-timeline-img").hasClass("is-hidden")) {
                                block.find(".cd-timeline-img, .cd-timeline-content").
                                    removeClass("is-hidden").addClass("bounce-in");
                            }
                        });
                    };
                    this.hideBlocks = function () {
                        var offset = _this.windowOffset();
                        _this._blocks.each(function () {
                            var block = $(this);
                            if (block.offset().top > offset) {
                                var content = block.find(".cd-timeline-img, .cd-timeline-content");
                                content.addClass("is-hidden");
                            }
                        });
                    };
                    this.ngAfterViewInit = function () {
                        _this._blocks = $(".cd-timeline-block");
                        _this.hideBlocks();
                    };
                }
                ProfessionalExperienceComponent.prototype.ngOnInit = function () {
                    this.experience = this._experienceService.getProfessionalExperience().
                        sort(function (a, b) {
                        return a.startDate > b.startDate ? -1 : a.startDate < b.startDate ? 1 : 0;
                    });
                };
                ProfessionalExperienceComponent = __decorate([
                    core_1.Component({
                        styleUrls: ["css/timeline.css"],
                        selector: "professional-experience",
                        templateUrl: "templates/professional.experience.html",
                        pipes: [isnull_pipe_1.IsNullPipe]
                    }), 
                    __metadata('design:paramtypes', [professional_experience_service_1.ProfessionalExperienceService, core_1.ElementRef])
                ], ProfessionalExperienceComponent);
                return ProfessionalExperienceComponent;
            }());
            exports_1("ProfessionalExperienceComponent", ProfessionalExperienceComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzc2lvbmFsLmV4cGVyaWVuY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vU2NyaXB0cy9wcm9mZXNzaW9uYWwuZXhwZXJpZW5jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhbEQ7Z0JBS0kseUNBQW9CLGtCQUFpRCxFQUN6RCxXQUF1QjtvQkFOdkMsaUJBd0RDO29CQW5EdUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUErQjtvQkFDekQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBU25DLGFBQVEsR0FBRzt3QkFDUCxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDOzhCQUN6QixNQUFNLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLEVBQUUsR0FBRyxDQUFDOzhCQUMvQyxNQUFNLENBQUMscUJBQXFCLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO29CQUNoRSxDQUFDLENBQUM7b0JBRUYsaUJBQVksR0FBRzt3QkFDWCxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztvQkFDekQsQ0FBQyxDQUFDO29CQUVGLGVBQVUsR0FBRzt3QkFDVCxJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBRWpDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzRCQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQzs0QkFFcEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxNQUFNO2dDQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDdkQsS0FBSyxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQztvQ0FDaEQsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzs0QkFDdkQsQ0FBQzt3QkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUM7b0JBRUYsZUFBVSxHQUFHO3dCQUNULElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFFakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7NEJBQ2QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUVwQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0NBQzlCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsd0NBQXdDLENBQUMsQ0FBQztnQ0FDbkUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzs0QkFDbEMsQ0FBQzt3QkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUM7b0JBRUYsb0JBQWUsR0FBRzt3QkFDZCxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3dCQUN2QyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RCLENBQUMsQ0FBQztnQkFqRHFDLENBQUM7Z0JBRXhDLGtEQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLEVBQUU7d0JBQ2pFLElBQUksQ0FBQyxVQUFVLENBQTBCLEVBQUUsQ0FBMEI7d0JBQ2pFLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlFLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBbkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsU0FBUyxFQUFFLENBQUUsa0JBQWtCLENBQUU7d0JBQ2pDLFFBQVEsRUFBRSx5QkFBeUI7d0JBQ25DLFdBQVcsRUFBRSx3Q0FBd0M7d0JBQ3JELEtBQUssRUFBRSxDQUFDLHdCQUFVLENBQUM7cUJBQ3RCLENBQUM7O21EQUFBO2dCQXlERixzQ0FBQztZQUFELENBQUMsQUF4REQsSUF3REM7WUF4REQsNkVBd0RDLENBQUEifQ==