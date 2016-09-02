/// <reference path="./../../typings/browser.d.ts" />

import { ApplicantService } from "./applicant.service";

describe("ApplicantService", () => {
    it("returns an applicant", () => {
        let service = new ApplicantService();

        expect(service.getApplicant()).not.toBeNull();
    });
});