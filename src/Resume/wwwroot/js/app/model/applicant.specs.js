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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYW50LnNwZWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vU2NyaXB0cy9tb2RlbC9hcHBsaWNhbnQuc3BlY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEOzs7Ozs7O1lBSXJELFFBQVEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLElBQUksR0FBRyxHQUFlO29CQUNsQixTQUFTLEVBQUUsUUFBUTtvQkFDbkIsT0FBTyxFQUFFLE1BQU07b0JBQ2YsV0FBVyxFQUFFLEtBQUs7b0JBQ2xCLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztpQkFDbkMsQ0FBQztnQkFFRixFQUFFLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsYUFBYSxFQUFFO29CQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsU0FBUyxFQUFFO29CQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLGlCQUFpQixFQUFFO29CQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQyJ9