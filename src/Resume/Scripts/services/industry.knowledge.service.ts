import {Injectable} from 'angular2/core';
import {IndustryKnowledge} from './../model/industry.knowledge';

@Injectable()
export class IndustryKnowledgeService {
    getIndustryKnowledge(): IndustryKnowledge[] {
        return [{
            industry: 'Investment Banking – Convertible Bond pricing, trading and research systems. Trading FOBO, reconciliation and exception workflow management.',
                yearsExperience: 12
            }, {
                industry: 'Retail',
                yearsExperience: 0.5
            }, {
                industry: 'Mail',
                yearsExperience: 0.5
            }, {
                industry: 'Insurance',
                yearsExperience: 2
            }];
    }
}