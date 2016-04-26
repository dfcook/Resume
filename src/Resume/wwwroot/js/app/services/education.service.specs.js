/// <reference path="./../../typings/browser.d.ts" />
System.register(['./education.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var education_service_1;
    return {
        setters:[
            function (education_service_1_1) {
                education_service_1 = education_service_1_1;
            }],
        execute: function() {
            describe('EducationService', function () {
                var service = new education_service_1.EducationService();
                var educations = service.getEducations();
                it('returns results', function () {
                    expect(educations).not.toBeNull();
                });
                it('results are an array', function () {
                    expect(Array.isArray(educations)).toBeTruthy();
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1Y2F0aW9uLnNlcnZpY2Uuc3BlY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9TY3JpcHRzL3NlcnZpY2VzL2VkdWNhdGlvbi5zZXJ2aWNlLnNwZWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDLHFEQUFxRDs7Ozs7Ozs7Ozs7WUFJdEQsUUFBUSxDQUFDLGtCQUFrQixFQUFFO2dCQUN6QixJQUFJLE9BQU8sR0FBRyxJQUFJLG9DQUFnQixFQUFFLENBQUM7Z0JBQ3JDLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFekMsRUFBRSxDQUFDLGlCQUFpQixFQUFFO29CQUNsQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsc0JBQXNCLEVBQUU7b0JBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ25ELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUMifQ==