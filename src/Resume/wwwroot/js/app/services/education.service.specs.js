/// <reference path="./../../typings/browser.d.ts" />
System.register(["./education.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var education_service_1;
    return {
        setters:[
            function (education_service_1_1) {
                education_service_1 = education_service_1_1;
            }],
        execute: function() {
            describe("EducationService", function () {
                var service = new education_service_1.EducationService();
                var educations = service.getEducations();
                it("returns results", function () {
                    expect(educations).not.toBeNull();
                });
                it("results are an array", function () {
                    expect(Array.isArray(educations)).toBeTruthy();
                });
            });
        }
    }
});
//# sourceMappingURL=education.service.specs.js.map