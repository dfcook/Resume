"use strict";
var avoriaz_1 = require("avoriaz");
var mocks_1 = require("./mocks");
var router_1 = require("@/router");
function rendersValueFromStore(valueName, component, elementFinder, storeMapper) {
    it("should render " + valueName + " from store", function () {
        var vm = avoriaz_1.mount(component, { store: mocks_1.store, router: router_1.default });
        expect(elementFinder(vm)).to.contain(storeMapper(mocks_1.store));
    });
}
exports.rendersValueFromStore = rendersValueFromStore;
//# sourceMappingURL=helpers.js.map