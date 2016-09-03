import { Component, Inject, OnInit } from "@angular/core";
import { KeySkillsService } from "./services/key.skills.service";
import { IndustryKnowledgeService } from "./services/industry.knowledge.service";
import { IndustryKnowledge } from "./model/industry.knowledge";

@Component({
    selector: "key-skills",
    templateUrl: "./../templates/key.skills.html"
})
export class KeySkillsComponent implements OnInit {
    public keySkills: string[];
    public knowledge: string[];

    constructor(private _keySkillsService: KeySkillsService,
        private _knowledgeService: IndustryKnowledgeService) { }

    ngOnInit() {
        this.keySkills = this._keySkillsService.getKeySkills();
        this.knowledge = this._knowledgeService.getIndustryKnowledge();
    }
}
