import { Injectable } from "@angular/core";
import { IProfessionalExperience } from "./../model/professional.experience";

@Injectable()
export class ProfessionalExperienceService {
    getProfessionalExperience(): IProfessionalExperience[] {
        return [{
            company: "Axa Insurance",
            startYear: 1997,
            endYear: 1999,
            jobTitle: "Application Developer",
            location: "Lytham, Lancashire",
            description: "Development and support of an Imaging and Workflow application using Visual Basic, Oracle and FileNet components"
        },{
            company: "Target Worldwide Express",
            startYear: 1999,
            endYear: 2000,
            jobTitle: "Application Developer",
            location: "Salford, Manchester",
            description: "Developer of an Imaging and workflow application in Visual Basic to facilitate the tracking of Proof of Delivery (POD) information."
        },{
            company: "Strategic Systems Solutions",
            startYear: 2000,
            endYear: 2006,
            jobTitle: "Developer / Consultant",
            location: "Preston, Lancashire",
            description: `Provide development/consultancy services to a wide range of clients in various industries including:
•	Design and development of Windows applications for a leading Investment Bank. Involvement in the complete project lifecycle including requirements gathering, production of functional and technical specifications, leading a small team through the build process and system and user testing cycles
•	Design and development of a content-driven intranet site for high-profile client using Microsoft Content Management Server
•	Technical architect and team lead on a small team developing a promotional tool set for a retail outlet using Java/JSP/Struts. Complete analysis and design phase including production of prototype and sign-off documentation. Participation and leading in development phase, ensuring high code standards through peer review
•	Analysis, design, development and support of C# derivative pricing system (Windows Forms), using the full range of the .NET framework with specific emphasis on Remoting and multi-threading. 
•	Development of Convertible Bond trading client using Visual Basic communicating using SOAP over IBM MQ. Redevelopment of an application framework to allow easy porting to the .NET platform`
        },{
            company: "Cap Gemini / Strategic Systems Solutions",
            startYear: 2006,
            endYear: 2012,
            jobTitle: "Senior Developer / Consultant",
            location: "Preston, Lancashire",
            description: `•	Design and development of Trade reconciliation (Front Office/Back Office) and adjustment solution for Global Product Control department. Key features of system:
•	Rich client UI including multi-threaded operations ensuring smooth and responsive performance.
•	Distributed middle tier accessed using .NET remoting initially and then WCF after conversion process.
•	Custom data compression to improve performance of large queries over WAN.
•	Use of Web services to post adjustments to Trial Balance engine.`
        },{
            company: "Independent Contractor for Credit Suisse",
            startYear: 2012,
            endYear: 2015,
            jobTitle: "Senior Developer",
            location: "Canary Wharf, London",
            description: `•	Design and development of strategic adjustment solutions using Silverlight for rich client (requirement to bulk adjust up to 5000 items). 
•	Maintenance and Dashboard solutions developed in ASP.NET MVC. 
•	Log browser support tool developed in ASP.NET WebApi with HTML5 UI using Angular as client-side MVC framework written in TypeScript.
•	Ongoing development support of Windows desktop application including users in EMEA, APAC and US
•	Mentoring and team lead of offshore development teams.`
        },{
            company: "Independent Contractor for Target Group",
            startYear: 2016,            
            jobTitle: "Senior Developer",
            location: "Chorley, Lancashire",
            description: `•	Lead of small team in development of loans portal to allow applicants/introducers to apply for loan products. ASP.NET MVC/Web API/Knockout.js/Typescript
•	Development of rules engine for identifying cases in arrears/requiring statements etc.
•	Development of scheduler system, Windows service using Quartz.net to run the rules engine. Dashboard in ASP.NET MVC
•	Integration components with 3rd party credit agencies.`
        }];
    }
}