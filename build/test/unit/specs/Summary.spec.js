"use strict";
var vue_1 = require("vue");
var Summary_1 = require("@/components/Summary");
var vuetify_1 = require("vuetify");
var helpers_1 = require("./../helpers");
vue_1.default.use(vuetify_1.default);
describe('Summary.vue', function () {
    helpers_1.rendersValueFromStore('summary', Summary_1.default, function (vm) { return vm.find('.summary')[0].text(); }, function (store) { return store.state.summary.summary; });
});
//# sourceMappingURL=Summary.spec.js.map