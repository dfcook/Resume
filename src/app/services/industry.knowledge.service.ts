import { Injectable } from "@angular/core";
import { IndustryKnowledge } from "./../model/industry.knowledge";

@Injectable()
export class IndustryKnowledgeService {
    getIndustryKnowledge(): string[] {
        return [
            "Investment Banking – Convertible Bond pricing, trading and research systems.", 
            "Trading FOBO, reconciliation and exception workflow management.",
            "Retail",
            "Mail",
            "Insurance",
            "Financial Services"
        ];
    }
}