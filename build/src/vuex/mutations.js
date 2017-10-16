"use strict";
var Mutations = (function () {
    function Mutations() {
    }
    Object.defineProperty(Mutations, "loadSummary", {
        get: function () { return 'loadSummary'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mutations, "loadKeySkills", {
        get: function () { return 'loadKeySkills'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mutations, "loadIndustryKnowledge", {
        get: function () { return 'loadIndustryKnowledge'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mutations, "loadEducationHistory", {
        get: function () { return 'loadEducationHistory'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mutations, "loadProfessionalExperience", {
        get: function () { return 'loadProfessionalExperience'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mutations, "loadLinks", {
        get: function () { return 'loadLinks'; },
        enumerable: true,
        configurable: true
    });
    return Mutations;
}());
exports.Mutations = Mutations;
var mutations = (_a = {},
    _a[Mutations.loadSummary] = function (state, summary) { state.summary = summary; },
    _a[Mutations.loadKeySkills] = function (state, keySkills) { state.keySkills = keySkills; },
    _a[Mutations.loadIndustryKnowledge] = function (state, industryKnowledge) { state.industryKnowledge = industryKnowledge; },
    _a[Mutations.loadEducationHistory] = function (state, educationHistory) { state.educationHistory = educationHistory; },
    _a[Mutations.loadProfessionalExperience] = function (state, professionalExperience) { state.professionalExperience = professionalExperience; },
    _a[Mutations.loadLinks] = function (state, links) { state.links = links; },
    _a);
exports.mutations = mutations;
var _a;
//# sourceMappingURL=mutations.js.map