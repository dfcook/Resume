import {Injectable} from 'angular2/core';
import {Education} from './../model/education';

@Injectable()
export class EducationService {
    getEducations(): Education[] {
        return [{
            qualification: 'Degree (2:1) in English Literature / Philosophy ',
            establishment: 'Keele University'
            }, {
                qualification: '4 A-Levels and 9 GCSE’s',
                establishment: 'Kirkham Grammar School'
            }];
    }
}