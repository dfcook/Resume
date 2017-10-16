"use strict";
var store_1 = require("@/vuex/store");
var actions_1 = require("@/vuex/actions");
describe('store', function () {
    it('should update store state - summary', function () {
        store_1.default.dispatch(actions_1.Actions.loadSummary, {
            summary: 'foo'
        });
        expect(store_1.default.state.summary.summary).to.equal('foo');
    });
    it('should update store state - keySkills', function () {
        store_1.default.dispatch(actions_1.Actions.loadKeySkills, [{
                id: 1,
                description: 'foo'
            }, {
                id: 2,
                description: 'bar'
            }]);
        expect(store_1.default.state.keySkills.length).to.equal(2);
    });
    it('should update store state - industryKnowledge', function () {
        store_1.default.dispatch(actions_1.Actions.loadIndustryKnowledge, [{
                id: 1,
                description: 'foo'
            }, {
                id: 2,
                description: 'bar'
            }, {
                id: 3,
                description: 'Baz'
            }]);
        expect(store_1.default.state.industryKnowledge.length).to.equal(3);
    });
    it('should update store state - educationHistory', function () {
        store_1.default.dispatch(actions_1.Actions.loadEducationHistory, [{
                id: 1,
                description: 'foo'
            }]);
        expect(store_1.default.state.educationHistory.length).to.equal(1);
    });
    it('should update store state - professionalExperience', function () {
        store_1.default.dispatch(actions_1.Actions.loadProfessionalExperience, [{
                id: 1,
                description: 'foo'
            }]);
        expect(store_1.default.state.professionalExperience.length).to.equal(1);
    });
});
//# sourceMappingURL=store.spec.js.map