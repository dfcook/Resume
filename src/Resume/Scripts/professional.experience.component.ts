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

    constructor(private _experienceService: ProfessionalExperienceService,
        private _elementRef: ElementRef) { }

    ngOnInit() {
        this.experience = this._experienceService.getProfessionalExperience().sort(function (a, b) { return a.startDate > b.startDate ? -1 : a.startDate < b.startDate ? 1 : 0; });        
    }

    ngAfterViewInit() {
        let timelineBlocks = $('.cd-timeline-block'),
            offset = 0.8;

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
                let block = $(this);

                if (block.offset().top > $(window).scrollTop() + $(window).height() * offset) {
                    let content = block.find('.cd-timeline-img, .cd-timeline-content');
                    content.addClass('is-hidden');
                }
            });
        }

        function showBlocks(blocks, offset) {
            blocks.each(function () {
                let block = $(this);

                if (block.offset().top <= $(window).scrollTop() + $(window).height() * offset &&
                    block.find('.cd-timeline-img').hasClass('is-hidden')) {                    
                    block.find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in')
                }
            });            
        }
    }
}