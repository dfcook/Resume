/// <reference path="./../../typings/browser.d.ts" />

import { EducationService } from './education.service';

describe('EducationService', () => {
    let service = new EducationService();
    let educations = service.getEducations();

    it('returns results', () => {    
        expect(educations).not.toBeNull();        
    });
    it('results are an array', () => {                
        expect(Array.isArray(educations)).toBeTruthy();
    });
});