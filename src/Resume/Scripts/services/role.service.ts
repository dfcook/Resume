import {Injectable} from 'angular2/core';
import {Role} from './../model/role';

@Injectable()
export class RoleService {
    getRoles(): Role[] {
        return [{
            startDate: new Date(),
            endDate: new Date(),
            skills: [''
                ],
            description: ''
        }];        
    }
}