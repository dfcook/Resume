/// <reference path="./../typings/browser.d.ts" />
System.register(["angular2/core", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, common_1;
    var TimelineBlockComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            TimelineBlockComponent = (function () {
                function TimelineBlockComponent(_el) {
                    this._el = _el;
                }
                TimelineBlockComponent.prototype.onScroll = function () {
                    if (this.hidden &&
                        this.shouldBeVisible()) {
                        this.hidden = false;
                        this.bounceIn = true;
                    }
                };
                ;
                TimelineBlockComponent.prototype.shouldBeVisible = function () {
                    var windowOffset = window.pageYOffset + window.innerHeight * 0.9;
                    return this._el.nativeElement.getBoundingClientRect().top < windowOffset;
                };
                TimelineBlockComponent.prototype.ngAfterViewInit = function () {
                    var visible = this.shouldBeVisible();
                    this.hidden = !visible;
                    this.bounceIn = visible;
                };
                ;
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TimelineBlockComponent.prototype, "item", void 0);
                __decorate([
                    core_1.HostListener('window:scroll'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], TimelineBlockComponent.prototype, "onScroll", null);
                TimelineBlockComponent = __decorate([
                    core_1.Component({
                        selector: "[time-line-block]",
                        directives: [common_1.NgClass],
                        template: "\n        <div [ngClass]=\"{ 'cd-timeline-img': true, 'is-hidden': hidden, 'bounce-in': bounceIn }\">\n            <span class=\"fa-stack fa-lg\">\n                <i class=\"fa fa-circle fa-stack-2x\"></i>\n                <i class=\"fa fa-cogs fa-stack-1x fa-inverse\"></i>\n            </span>\n        </div>\n\n        <div [ngClass]=\"{ 'cd-timeline-content': true, 'is-hidden': hidden, 'bounce-in': bounceIn }\">\n            <div>Company: {{item.company}}</div>\n            <div>{{item.jobTitle}}</div>\n            <div>Skills: {{item.skills}}</div>\n            <br />\n            <div class=\"description\">{{item.description}}</div>            \n        </div>"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], TimelineBlockComponent);
                return TimelineBlockComponent;
            }());
            exports_1("TimelineBlockComponent", TimelineBlockComponent);
        }
    }
});
//# sourceMappingURL=professional.experience.block.js.map