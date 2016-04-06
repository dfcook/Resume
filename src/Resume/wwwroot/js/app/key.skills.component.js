System.register(['angular2/core', './services/key.skills.service', './services/industry.knowledge.service'], function(exports_1, context_1) {
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
    var core_1, key_skills_service_1, industry_knowledge_service_1;
    var KeySkillsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (key_skills_service_1_1) {
                key_skills_service_1 = key_skills_service_1_1;
            },
            function (industry_knowledge_service_1_1) {
                industry_knowledge_service_1 = industry_knowledge_service_1_1;
            }],
        execute: function() {
            KeySkillsComponent = (function () {
                function KeySkillsComponent(_keySkillsService, _knowledgeService) {
                    this._keySkillsService = _keySkillsService;
                    this._knowledgeService = _knowledgeService;
                }
                KeySkillsComponent.prototype.ngOnInit = function () {
                    this.keySkills = this._keySkillsService.getKeySkills();
                    this.knowledge = this._knowledgeService.getIndustryKnowledge();
                };
                KeySkillsComponent = __decorate([
                    core_1.Component({
                        selector: 'key-skills',
                        templateUrl: 'templates/key.skills.html'
                    }), 
                    __metadata('design:paramtypes', [key_skills_service_1.KeySkillsService, industry_knowledge_service_1.IndustryKnowledgeService])
                ], KeySkillsComponent);
                return KeySkillsComponent;
            }());
            exports_1("KeySkillsComponent", KeySkillsComponent);
        }
    }
});
//# sourceMappingURL=key.skills.component.js.map