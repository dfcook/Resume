"use strict";
var vue_1 = require("vue");
var Education_1 = require("@/components/Education");
var vuetify_1 = require("vuetify");
var avoriaz_1 = require("avoriaz");
var mocks_1 = require("./../mocks");
vue_1.default.use(vuetify_1.default);
describe('Education.vue', function () {
    it('should render 2 education items', function () {
        var vm = avoriaz_1.mount(Education_1.default, { store: mocks_1.store });
        expect(vm.find('li').length).to.equal(2);
    });
});
//# sourceMappingURL=Education.spec.js.map