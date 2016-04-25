/// <reference path="./../../typings/browser.d.ts" />
System.register(['./applicant.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var applicant_service_1;
    return {
        setters:[
            function (applicant_service_1_1) {
                applicant_service_1 = applicant_service_1_1;
            }],
        execute: function() {
            describe('ApplicantService', function () {
                it('returns an applicant', function () {
                    var service = new applicant_service_1.ApplicantService();
                    expect(service.getApplicant()).not.toBeNull();
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYW50LnNlcnZpY2Uuc3BlY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9TY3JpcHRzL3NlcnZpY2VzL2FwcGxpY2FudC5zZXJ2aWNlLnNwZWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDLHFEQUFxRDs7Ozs7Ozs7Ozs7WUFJdEQsUUFBUSxDQUFDLGtCQUFrQixFQUFFO2dCQUN6QixFQUFFLENBQUMsc0JBQXNCLEVBQUU7b0JBQ3ZCLElBQUksT0FBTyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztvQkFFckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQyJ9