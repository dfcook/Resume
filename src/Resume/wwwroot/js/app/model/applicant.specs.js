/// <reference path="./../../typings/browser.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            describe("Applicant", function () {
                var app = {
                    firstName: "Daniel",
                    surname: "Cook",
                    description: "foo",
                    dateOfBirth: new Date(1975, 6, 15)
                };
                it("has first name", function () {
                    expect(app.firstName).toEqual("Daniel");
                });
                it("has surname", function () {
                    expect(app.surname).toEqual("Cook");
                });
                it("has DOB", function () {
                    expect(app.dateOfBirth).toEqual(new Date(1975, 6, 15));
                });
                it("has description", function () {
                    expect(app.description).toEqual("foo");
                });
            });
        }
    }
});
//# sourceMappingURL=applicant.specs.js.map