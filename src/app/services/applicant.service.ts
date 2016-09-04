import { Injectable } from "@angular/core";
import { IApplicant } from "./../model/applicant";

@Injectable()
export class ApplicantService {
    getApplicant(): IApplicant {
        return {
            firstName: "Daniel",
            surname: "Cook",
            dateOfBirth: new Date(1975, 6, 15),
            description: "A senior developer with 19 years’ experience including 16 " +
            "years in .NET development for both the desktop and the Web. Familiar " +
            "with both server and client-side paradigms including practical " +
            "experience in modern JavaScript frameworks. Experienced in object-oriented " +
            "and functional design and patterns. Strong SQL skills including " +
            "query performance analysis."
        };
    }
}
