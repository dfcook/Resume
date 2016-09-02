import {Injectable} from "angular2/core";
import {IRole} from "./../model/role";

@Injectable()
export class RoleService {
    getRoles(): IRole[] {
        return [{
            startDate: new Date(),
            endDate: new Date(),
            skills: [""
                ],
            description: ""
        }];
    }
}