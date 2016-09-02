/// <reference path="./../../typings/browser.d.ts" />
System.register(["./applicant.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var applicant_service_1;
    return {
        setters:[
            function (applicant_service_1_1) {
                applicant_service_1 = applicant_service_1_1;
            }],
        execute: function() {
            describe("ApplicantService", function () {
                it("returns an applicant", function () {
                    var service = new applicant_service_1.ApplicantService();
                    expect(service.getApplicant()).not.toBeNull();
                });
            });
        }
    }
});
//# sourceMappingURL=applicant.service.specs.js.map