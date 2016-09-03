import { Injectable } from "@angular/core";
import { IKeySkill } from "./../model/key.skill";

@Injectable()
export class KeySkillsService {
    getKeySkills(): string[] {
        return [
            "C#, VB.NET, .NET Framework",
            "System Analysis and Design, including application of functional and OO patterns.",
            "ASP.NET MVC & Web API",
            "JavaScript (ES5/6), Typescript, Coffeescript",
            "Angular/React/Knockout",
            "Node/NPM/Webpack",
            "Silverlight (MVVM, Prism)",
            "WCF/Remoting",
            "HTML5, CSS",
            "SQL Server – Stored Procedures, Views, Triggers, Performance tuning"
        ];
    }
}