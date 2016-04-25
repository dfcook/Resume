/// <reference path="./../typings/browser.d.ts" />

import {Component, ElementRef, Inject, OnInit, AfterViewInit} from 'angular2/core';
import {ProfessionalExperienceService} from './services/professional.experience.service';
import {ProfessionalExperience} from './model/professional.experience';
import {IsNullPipe} from './pipes/isnull-pipe';

@Component({
    styleUrls: [ 'css/timeline.css' ],
    selector: 'professional-experience',
    templateUrl: 'templates/professional.experience.html',
    pipes: [IsNullPipe]
})
export class ProfessionalExperienceComponent implements OnInit, AfterViewInit {    
    public experience: ProfessionalExperience[];
    
    private _blocks: JQuery;

    constructor(private _experienceService: ProfessionalExperienceService,
        private _elementRef: ElementRef) { }

    ngOnInit() {
        this.experience = this._experienceService.getProfessionalExperience().
            sort(function (a, b) { return a.startDate > b.startDate ? -1 : a.startDate < b.startDate ? 1 : 0; });        
    }

    onScroll = (event) => {
        (!window.requestAnimationFrame)
            ? window.setTimeout(() => this.showBlocks(), 100)
            : window.requestAnimationFrame(() => this.showBlocks());
    }

    windowOffset = (): Number => {
        return window.pageYOffset + window.innerHeight * 0.9;
    }

    showBlocks = () => {        
        let offset = this.windowOffset();

        this._blocks.each(function (idx, blk) {
            let block = $(this);
            
            
            if (block.offset().top <= offset &&
                block.find('.cd-timeline-img').hasClass('is-hidden')) {
                block.find('.cd-timeline-img, .cd-timeline-content').
                    removeClass('is-hidden').addClass('bounce-in');
            }
        });
    }

    hideBlocks = () => {
        let offset = this.windowOffset();

        this._blocks.each(function () {
            let block = $(this);

            if (block.offset().top > offset) {
                let content = block.find('.cd-timeline-img, .cd-timeline-content');
                content.addClass('is-hidden');
            }
        });
    }

    ngAfterViewInit() {
        this._blocks = $('.cd-timeline-block');        
        this.hideBlocks();      
    }
}