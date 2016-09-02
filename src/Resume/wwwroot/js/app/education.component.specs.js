/// <reference path="./../typings/browser.d.ts" />
System.register(["./education.component", "./services/education.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var education_component_1, education_service_1;
    return {
        setters:[
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            },
            function (education_service_1_1) {
                education_service_1 = education_service_1_1;
            }],
        execute: function() {
            describe("EducationComponent", function () {
                var component;
                var service;
                beforeEach(function () {
                    service = new education_service_1.EducationService();
                    component = new education_component_1.EducationComponent(service);
                    component.ngOnInit();
                });
                it("has educations property", function () {
                    expect(component.educations).not.toBeNull();
                });
                it("contains > 0 educations", function () {
                    expect(component.educations.length).toBeGreaterThan(0);
                });
            });
        }
    }
});
//# sourceMappingURL=education.component.specs.js.map