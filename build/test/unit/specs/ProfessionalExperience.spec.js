"use strict";
var vue_1 = require("vue");
var ProfessionalExperience_1 = require("@/components/ProfessionalExperience");
var vuetify_1 = require("vuetify");
var avoriaz_1 = require("avoriaz");
var mocks_1 = require("./../mocks");
vue_1.default.use(vuetify_1.default);
describe('ProfessionalExperience.vue', function () {
    it('should render 9 professional experience items', function () {
        var vm = avoriaz_1.mount(ProfessionalExperience_1.default, { store: mocks_1.store });
        expect(vm.find('.cd-timeline-block').length).to.equal(9);
    });
});
//# sourceMappingURL=ProfessionalExperience.spec.js.map