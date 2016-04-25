/// <reference path="./../typings/browser.d.ts" />
System.register(['angular2/core', './services/professional.experience.service', './pipes/isnull-pipe'], function(exports_1, context_1) {
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
                    this.onScroll = function (event) {
                        (!window.requestAnimationFrame)
                            ? window.setTimeout(function () { return _this.showBlocks(); }, 100)
                            : window.requestAnimationFrame(function () { return _this.showBlocks(); });
                    };
                    this.windowOffset = function () {
                        return window.pageYOffset + window.innerHeight * 0.9;
                    };
                    this.showBlocks = function () {
                        var offset = _this.windowOffset();
                        _this._blocks.each(function (idx, blk) {
                            var block = $(this);
                            if (block.offset().top <= offset &&
                                block.find('.cd-timeline-img').hasClass('is-hidden')) {
                                block.find('.cd-timeline-img, .cd-timeline-content').
                                    removeClass('is-hidden').addClass('bounce-in');
                            }
                        });
                    };
                    this.hideBlocks = function () {
                        var offset = _this.windowOffset();
                        _this._blocks.each(function () {
                            var block = $(this);
                            if (block.offset().top > offset) {
                                var content = block.find('.cd-timeline-img, .cd-timeline-content');
                                content.addClass('is-hidden');
                            }
                        });
                    };
                }
                ProfessionalExperienceComponent.prototype.ngOnInit = function () {
                    this.experience = this._experienceService.getProfessionalExperience().
                        sort(function (a, b) { return a.startDate > b.startDate ? -1 : a.startDate < b.startDate ? 1 : 0; });
                };
                ProfessionalExperienceComponent.prototype.ngAfterViewInit = function () {
                    this._blocks = $('.cd-timeline-block');
                    this.hideBlocks();
                };
                ProfessionalExperienceComponent = __decorate([
                    core_1.Component({
                        styleUrls: ['css/timeline.css'],
                        selector: 'professional-experience',
                        templateUrl: 'templates/professional.experience.html',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzc2lvbmFsLmV4cGVyaWVuY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vU2NyaXB0cy9wcm9mZXNzaW9uYWwuZXhwZXJpZW5jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUMsa0RBQWtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhbkQ7Z0JBS0kseUNBQW9CLGtCQUFpRCxFQUN6RCxXQUF1QjtvQkFOdkMsaUJBdURDO29CQWxEdUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUErQjtvQkFDekQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBT25DLGFBQVEsR0FBRyxVQUFDLEtBQUs7d0JBQ2IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQzs4QkFDekIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFqQixDQUFpQixFQUFFLEdBQUcsQ0FBQzs4QkFDL0MsTUFBTSxDQUFDLHFCQUFxQixDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztvQkFDaEUsQ0FBQyxDQUFBO29CQUVELGlCQUFZLEdBQUc7d0JBQ1gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQ3pELENBQUMsQ0FBQTtvQkFFRCxlQUFVLEdBQUc7d0JBQ1QsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUVqQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHOzRCQUNoQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBR3BCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksTUFBTTtnQ0FDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3ZELEtBQUssQ0FBQyxJQUFJLENBQUMsd0NBQXdDLENBQUM7b0NBQ2hELFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQ3ZELENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFBO29CQUVELGVBQVUsR0FBRzt3QkFDVCxJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBRWpDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzRCQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFFcEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dDQUM5QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7Z0NBQ25FLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQ2xDLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFBO2dCQTNDc0MsQ0FBQztnQkFFeEMsa0RBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsRUFBRTt3QkFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdHLENBQUM7Z0JBd0NELHlEQUFlLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQTVETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFNBQVMsRUFBRSxDQUFFLGtCQUFrQixDQUFFO3dCQUNqQyxRQUFRLEVBQUUseUJBQXlCO3dCQUNuQyxXQUFXLEVBQUUsd0NBQXdDO3dCQUNyRCxLQUFLLEVBQUUsQ0FBQyx3QkFBVSxDQUFDO3FCQUN0QixDQUFDOzttREFBQTtnQkF3REYsc0NBQUM7WUFBRCxDQUFDLEFBdkRELElBdURDO1lBdkRELDZFQXVEQyxDQUFBIn0=