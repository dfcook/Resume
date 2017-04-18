﻿import { Injectable } from "@angular/core";
import { IEducation } from "./../model/education";

@Injectable()
export class EducationService {
    getEducations(): IEducation[] {
        return [{
            qualification: "Degree (2:1) in English Literature / Philosophy ",
            establishment: "Keele University"
            }, {
                qualification: "4 A-Levels and 9 GCSE’s",
                establishment: "Kirkham Grammar School"
            }];
    }
}