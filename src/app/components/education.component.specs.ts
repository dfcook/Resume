import { EducationComponent } from "./education.component";
import { EducationService } from "./../services/education.service";

describe("EducationComponent", () => {
    let component: EducationComponent;
    let service: EducationService;

    beforeEach(() => {
        service = new EducationService();
        component = new EducationComponent(service);

        component.ngOnInit();
    });

    it("has educations property", () => {
        expect(component.educations).not.toBeNull();
    });

    it("contains > 0 educations", () => {
        expect(component.educations.length).toBeGreaterThan(0);
    });
});
