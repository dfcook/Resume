/// <reference path="./../typings/browser.d.ts" />
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
                function ProfessionalExperienceComponent(_experienceService, _elementRef) {
                    this._experienceService = _experienceService;
                    this._elementRef = _elementRef;
                }
                ProfessionalExperienceComponent.prototype.ngOnInit = function () {
                    this.experience = this._experienceService.getProfessionalExperience().sort(function (a, b) { return a.startDate > b.startDate ? -1 : a.startDate < b.startDate ? 1 : 0; });
                };
                ProfessionalExperienceComponent.prototype.ngAfterViewInit = function () {
                    var timelineBlocks = $('.cd-timeline-block'), offset = 0.5;
                    //hide timeline blocks which are outside the viewport
                    hideBlocks(timelineBlocks, offset);
                    //on scolling, show/animate timeline blocks when enter the viewport
                    $(window).on('scroll', function () {
                        (!window.requestAnimationFrame)
                            ? setTimeout(function () { showBlocks(timelineBlocks, offset); }, 100)
                            : window.requestAnimationFrame(function () { showBlocks(timelineBlocks, offset); });
                    });
                    function hideBlocks(blocks, offset) {
                        blocks.each(function () {
                            var block = $(this);
                            if (block.offset().top > $(window).scrollTop() + $(window).height() * offset) {
                                var content = block.find('.cd-timeline-img, .cd-timeline-content');
                                content.addClass('is-hidden');
                            }
                        });
                    }
                    function showBlocks(blocks, offset) {
                        blocks.each(function () {
                            var block = $(this);
                            if (block.offset().top > ($(window).scrollTop() + $(window).height() * offset) &&
                                block.find('.cd-timeline-img').hasClass('is-hidden')) {
                                var content = block.find('.cd-timeline-img, .cd-timeline-content');
                                content.removeClass('is-hidden').addClass('bounce-in');
                            }
                        });
                    }
                };
                ProfessionalExperienceComponent = __decorate([
                    core_1.Component({
                        styleUrls: ['css/timeline.css'],
                        selector: 'professional-experience',
                        templateUrl: 'templates/professional.experience.html'
                    }), 
                    __metadata('design:paramtypes', [professional_experience_service_1.ProfessionalExperienceService, core_1.ElementRef])
                ], ProfessionalExperienceComponent);
                return ProfessionalExperienceComponent;
            }());
            exports_1("ProfessionalExperienceComponent", ProfessionalExperienceComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzc2lvbmFsLmV4cGVyaWVuY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vU2NyaXB0cy9wcm9mZXNzaW9uYWwuZXhwZXJpZW5jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUMsa0RBQWtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXbkQ7Z0JBR0kseUNBQW9CLGtCQUFpRCxFQUN6RCxXQUF1QjtvQkFEZix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQStCO29CQUN6RCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtnQkFBSSxDQUFDO2dCQUV4QyxrREFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHlCQUF5QixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9LLENBQUM7Z0JBRUQseURBQWUsR0FBZjtvQkFDSSxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsRUFDeEMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFFakIscURBQXFEO29CQUNyRCxVQUFVLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUVuQyxtRUFBbUU7b0JBQ25FLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO3dCQUNuQixDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDOzhCQUN6QixVQUFVLENBQUMsY0FBYyxVQUFVLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQzs4QkFDcEUsTUFBTSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsVUFBVSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1RixDQUFDLENBQUMsQ0FBQztvQkFFSCxvQkFBb0IsTUFBTSxFQUFFLE1BQU07d0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ1IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUVwQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztnQ0FDM0UsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2dDQUNuRSxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRCQUNsQyxDQUFDO3dCQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUM7b0JBRUQsb0JBQW9CLE1BQU0sRUFBRSxNQUFNO3dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUNSLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFFcEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDO2dDQUMxRSxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDdkQsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2dDQUNuRSxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTs0QkFDMUQsQ0FBQzt3QkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDO2dCQUNMLENBQUM7Z0JBbkRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsU0FBUyxFQUFFLENBQUUsa0JBQWtCLENBQUU7d0JBQ2pDLFFBQVEsRUFBRSx5QkFBeUI7d0JBQ25DLFdBQVcsRUFBRSx3Q0FBd0M7cUJBQ3hELENBQUM7O21EQUFBO2dCQWdERixzQ0FBQztZQUFELENBQUMsQUEvQ0QsSUErQ0M7WUEvQ0QsNkVBK0NDLENBQUEifQ==