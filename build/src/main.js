"use strict";
var vue_1 = require("vue");
var Vuetify = require("vuetify");
var App_1 = require("./App");
var router_1 = require("./router");
var actions_1 = require("./vuex/actions");
var store_1 = require("./vuex/store");
var resources_1 = require("./api/resources");
vue_1.default.use(Vuetify);
vue_1.default.config.productionTip = false;
var app = new vue_1.default({
    components: { App: App_1.default },
    el: '#app',
    router: router_1.default,
    store: store_1.default,
    template: '<App/>',
    created: function () {
        resources_1.default().then(function (r) {
            store_1.default.dispatch(actions_1.Actions.loadSummary, {
                companyName: r.data.companyName,
                firstName: r.data.firstName,
                lastName: r.data.lastName,
                role: r.data.role,
                summary: r.data.summary,
            });
            store_1.default.dispatch(actions_1.Actions.loadKeySkills, r.data.keySkills);
            store_1.default.dispatch(actions_1.Actions.loadIndustryKnowledge, r.data.industryKnowledge);
            store_1.default.dispatch(actions_1.Actions.loadEducationHistory, r.data.educationHistory);
            store_1.default.dispatch(actions_1.Actions.loadLinks, r.data.links);
        });
    },
});
//# sourceMappingURL=main.js.map