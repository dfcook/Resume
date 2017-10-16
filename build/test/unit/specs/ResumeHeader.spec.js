"use strict";
var vue_1 = require("vue");
var ResumeHeader_1 = require("@/components/ResumeHeader");
var vuetify_1 = require("vuetify");
var helpers_1 = require("./../helpers");
vue_1.default.use(vuetify_1.default);
describe('ResumeHeader.vue', function () {
    helpers_1.rendersValueFromStore('firstName', ResumeHeader_1.default, function (vm) { return vm.find('h2')[0].text(); }, function (store) { return store.state.summary.firstName; });
    helpers_1.rendersValueFromStore('lastName', ResumeHeader_1.default, function (vm) { return vm.find('h2')[0].text(); }, function (store) { return store.state.summary.lastName; });
    helpers_1.rendersValueFromStore('role', ResumeHeader_1.default, function (vm) { return vm.find('p')[0].text(); }, function (store) { return store.state.summary.role; });
    helpers_1.rendersValueFromStore('company', ResumeHeader_1.default, function (vm) { return vm.find('p')[1].text(); }, function (store) { return store.state.summary.companyName; });
});
//# sourceMappingURL=ResumeHeader.spec.js.map