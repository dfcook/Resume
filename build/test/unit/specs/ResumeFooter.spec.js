"use strict";
var vue_1 = require("vue");
var ResumeFooter_1 = require("@/components/ResumeFooter");
var vuetify_1 = require("vuetify");
var avoriaz_1 = require("avoriaz");
var mocks_1 = require("./../mocks");
vue_1.default.use(vuetify_1.default);
describe('ResumeFooter.vue', function () {
    it('should render 1 link', function () {
        var vm = avoriaz_1.mount(ResumeFooter_1.default, { store: mocks_1.store });
        expect(vm.find('a').length).to.equal(1);
    });
});
//# sourceMappingURL=ResumeFooter.spec.js.map