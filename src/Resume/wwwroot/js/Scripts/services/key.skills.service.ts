import {Injectable} from "angular2/core";
import {IKeySkill} from "./../model/key.skill";

@Injectable()
export class KeySkillsService {
    getKeySkills(): IKeySkill[] {
        return [{
                skill: "C#, VB.NET, .NET Framework",
                yearsExperience: 15
            }, {
                skill: "OO Analysis and Design",
                yearsExperience: 10
            }, {
                skill: "ASP.NET MVC & WebApi",
                yearsExperience: 3
            }, {
                skill: "Javascript, TypeScript, AngularJS",
                yearsExperience: 2
            }, {
                skill: "Silverlight (MVVM, Prism)",
                yearsExperience: 3
            }, {
                skill: "WCF/Remoting",
                yearsExperience: 5
            }, {
                skill: "HTML5, CSS",
                yearsExperience: 3
        }, {
                skill: "SQL Server -  Stored Procedures, Views, Triggers, Performance tuning",
                yearsExperience: 10
        }];
    }
}