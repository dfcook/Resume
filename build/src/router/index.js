"use strict";
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var Summary_1 = require("@/components/Summary");
var KeySkills_1 = require("@/components/KeySkills");
var Education_1 = require("@/components/Education");
var ProfessionalExperience_1 = require("@/components/ProfessionalExperience");
vue_1.default.use(vue_router_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new vue_router_1.default({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Summary',
            component: Summary_1.default
        }, {
            path: '/KeySkills',
            name: 'KeySkills',
            component: KeySkills_1.default
        }, {
            path: '/Education',
            name: 'Education',
            component: Education_1.default
        }, {
            path: '/ProfessionalExperience',
            name: 'ProfessionalExperience',
            component: ProfessionalExperience_1.default
        }
    ]
});
//# sourceMappingURL=index.js.map