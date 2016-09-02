import {Injectable} from "angular2/core";
import {IApplicant} from "./../model/applicant";

@Injectable()
export class ApplicantService {
    getApplicant(): IApplicant {
        return {
            firstName: "Daniel",
            surname: "Cook",
            dateOfBirth: new Date(1975, 6, 15),
            description: "A senior developer with 18 years in the industry including 15 years " +
            " .NET development for both the desktop and the Web." +
            " Produces high quality results with blistering speed, working from simple requirements to a polished end product." +
            " Experience and self-motivated approach to learning can be applied to both development and consultancy."
        };
    }
}