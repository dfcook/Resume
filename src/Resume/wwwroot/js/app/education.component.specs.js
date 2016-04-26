/// <reference path="./../typings/browser.d.ts" />
System.register(['./education.component', './services/education.service'], function(exports_1, context_1) {
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
            describe('EducationComponent', function () {
                var component;
                var service;
                beforeEach(function () {
                    service = new education_service_1.EducationService();
                    component = new education_component_1.EducationComponent(service);
                    component.ngOnInit();
                });
                it('has educations property', function () {
                    expect(component.educations).not.toBeNull();
                });
                it('contains > 0 educations', function () {
                    expect(component.educations.length).toBeGreaterThan(0);
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1Y2F0aW9uLmNvbXBvbmVudC5zcGVjcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1NjcmlwdHMvZWR1Y2F0aW9uLmNvbXBvbmVudC5zcGVjcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQyxrREFBa0Q7Ozs7Ozs7Ozs7Ozs7O1lBS25ELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDM0IsSUFBSSxTQUE2QixDQUFDO2dCQUNsQyxJQUFJLE9BQXlCLENBQUM7Z0JBRTlCLFVBQVUsQ0FBQztvQkFDUCxPQUFPLEdBQUcsSUFBSSxvQ0FBZ0IsRUFBRSxDQUFDO29CQUNqQyxTQUFTLEdBQUcsSUFBSSx3Q0FBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFNUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMseUJBQXlCLEVBQUU7b0JBQzFCLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoRCxDQUFDLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMseUJBQXlCLEVBQUU7b0JBQzFCLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQyJ9