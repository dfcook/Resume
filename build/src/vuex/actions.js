"use strict";
var mutations_1 = require("./mutations");
var Actions = (function () {
    function Actions() {
    }
    Object.defineProperty(Actions, "loadSummary", {
        get: function () { return 'loadSummary'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Actions, "loadKeySkills", {
        get: function () { return 'loadKeySkills'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Actions, "loadIndustryKnowledge", {
        get: function () { return 'loadIndustryKnowledge'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Actions, "loadEducationHistory", {
        get: function () { return 'loadEducationHistory'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Actions, "loadProfessionalExperience", {
        get: function () { return 'loadProfessionalExperience'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Actions, "loadLinks", {
        get: function () { return 'loadLinks'; },
        enumerable: true,
        configurable: true
    });
    return Actions;
}());
exports.Actions = Actions;
var actions = (_a = {},
    _a[Actions.loadSummary] = function (_a, summary) {
        var commit = _a.commit;
        commit(mutations_1.Mutations.loadSummary, summary);
    },
    _a[Actions.loadKeySkills] = function (_a, keySkills) {
        var commit = _a.commit;
        commit(mutations_1.Mutations.loadKeySkills, keySkills);
    },
    _a[Actions.loadIndustryKnowledge] = function (_a, industryKnowledge) {
        var commit = _a.commit;
        commit(mutations_1.Mutations.loadIndustryKnowledge, industryKnowledge);
    },
    _a[Actions.loadEducationHistory] = function (_a, educationHistory) {
        var commit = _a.commit;
        commit(mutations_1.Mutations.loadEducationHistory, educationHistory);
    },
    _a[Actions.loadProfessionalExperience] = function (_a, professionalExperience) {
        var commit = _a.commit;
        commit(mutations_1.Mutations.loadProfessionalExperience, professionalExperience);
    },
    _a[Actions.loadLinks] = function (_a, links) {
        var commit = _a.commit;
        commit(mutations_1.Mutations.loadLinks, links);
    },
    _a);
exports.actions = actions;
var _a;
//# sourceMappingURL=actions.js.map