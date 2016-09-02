/// <reference path="./../typings/browser.d.ts" />

import {Input, Component, ElementRef, HostListener, AfterViewInit} from "angular2/core";
import {NgClass} from "angular2/common";
import {IProfessionalExperience} from "./model/professional.experience";

@Component({
    selector: "[time-line-block]",
    directives: [NgClass],
    template: `
        <div [ngClass]="{ 'cd-timeline-img': true, 'is-hidden': hidden, 'bounce-in': bounceIn }">
            <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-cogs fa-stack-1x fa-inverse"></i>
            </span>
        </div>

        <div [ngClass]="{ 'cd-timeline-content': true, 'is-hidden': hidden, 'bounce-in': bounceIn }">
            <div>Company: {{item.company}}</div>
            <div>{{item.jobTitle}}</div>
            <div>Skills: {{item.skills}}</div>
            <br />
            <div class="description">{{item.description}}</div>            
        </div>`
})
export class TimelineBlockComponent implements AfterViewInit {
    @Input() item: IProfessionalExperience;

    hidden: boolean;
    bounceIn: boolean;

    constructor(private _el: ElementRef) { }

    @HostListener('window:scroll')
    onScroll() {
        if (this.hidden &&
            this.shouldBeVisible()) {
            this.hidden = false;
            this.bounceIn = true;
        }
    };

    private shouldBeVisible() {
        const windowOffset = window.pageYOffset + window.innerHeight * 0.9;
        return this._el.nativeElement.getBoundingClientRect().top < windowOffset;
    }

    ngAfterViewInit() {
        const visible = this.shouldBeVisible();

        this.hidden = !visible;
        this.bounceIn = visible;
    };
}