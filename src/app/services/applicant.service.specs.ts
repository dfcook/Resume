import { inject, TestBed } from "@angular/core/testing";
import { ApplicantService } from "./applicant.service";

beforeEach(() => TestBed.configureTestingModule({
    providers: [ ApplicantService ]}));

describe("ApplicantService", () => {
    it("returns an applicant", inject([ ApplicantService ], (service) => {
        expect(service.getApplicant()).not.toBeNull();
    }));
});
