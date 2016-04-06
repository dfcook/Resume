import {Injectable} from 'angular2/core';
import {ProfessionalExperience} from './../model/professional.experience';

@Injectable()
export class ProfessionalExperienceService {
    getProfessionalExperience(): ProfessionalExperience[] {
        return [{
            company: 'Axa Insurance',
            startDate: new Date(1997, 9, 1),
            endDate: new Date(1999, 8, 1),
            jobTitle: 'Application Developer',
            skills: ['Visual Basic', 'Oracle', 'FileNet Imaging and Workflow'],
            description: 'Development and support of an Imaging and Workflow application using Visual Basic, Oracle and FileNet components'
        }, {
                company: 'Target Worldwide Express',
                startDate: new Date(1999, 8, 1),
                endDate: new Date(2000, 2, 28),
                jobTitle: 'Application Developer',
                skills: ['Visual Basic', 'Oracle', 'FileNet Imaging and Workflow'],
                description: 'Developer of an Imaging and workflow application in Visual Basic to facilitate the tracking of Proof of Delivery (POD) information'
            }];
    }
}