import {Injectable} from "angular2/core";
import {IProfessionalExperience} from "./../model/professional.experience";

@Injectable()
export class ProfessionalExperienceService {
    getProfessionalExperience(): IProfessionalExperience[] {
        return [{
            company: "Axa Insurance",
            startDate: new Date(1997, 8, 1),
            endDate: new Date(1999, 7, 1),
            jobTitle: "Application Developer",
            skills: "Visual Basic, Oracle, FileNet Imaging and Workflow",
            description: "Development and support of an Imaging and Workflow application using Visual Basic, Oracle and FileNet components"
        }, {
                company: "Target Worldwide Express",
                startDate: new Date(1999, 7, 1),
                endDate: new Date(2000, 1, 15),
                jobTitle: "Application Developer",
                skills: "Visual Basic, SQL Server, XML, ASP",
                description: "Developer of an Imaging and workflow application in Visual Basic " +
                " to facilitate the tracking of Proof of Delivery (POD) information"
            },
            {
                company: "Strategic Systems Solutions",
                startDate: new Date(2000, 1, 16),
                endDate: new Date(2004, 7, 15),
                jobTitle: "Senior Analyst Programmer",
                skills: "Visual Basic, C#, .NET, COM, Sybase, Unix, Java, JSP, Tomcat, SOAP, XML",
                description: "Analysis, design, development and support of C# derivative pricing system (Windows Forms), using the full range of the .NET framework with specific emphasis on Remoting and multi-threading. \n    Development of Convertible Bond trading client using Visual Basic communicating using SOAP over IBM MQ. Redevelopment of an application framework to allow easy porting to the .NET platform"
            }, {
                company: "Strategic Systems Solutions",
                startDate: new Date(2004, 7, 16),
                endDate: new Date(2005, 4, 15),
                jobTitle: "Technical Team Lead",
                skills: "Java, JSP, Struts, Tiles, Spring Framework, log4j, Tomcat, Oracle",
                description: "Technical architect and team lead on a small team developing a promotional tool set " +
                " for a retail outlet. Complete analysis and design phase including production of prototype and " +
                "sign-off documentation. Participation and leading in development phase, ensuring high code " +
                "standards through peer review."
            }, {
                company: "Strategic Systems Solutions",
                startDate: new Date(2004, 4, 16),
                endDate: new Date(2005, 7, 15),
                jobTitle: "Technical Team Lead",
                skills: "C#, SQL Server, Microsoft Content Management Server, ASP.NET",
                description: "Design and development of a content-driven intranet site for high-profile client using " +
                "Microsoft Content Management Server."
            }, {
                company: "Strategic Systems Solutions",
                startDate: new Date(2005, 7, 16),
                endDate: new Date(2006, 7, 15),
                jobTitle: "Technical Team Lead",
                skills: "C#, Windows Forms, Oracle",
                description: "Design and development of Windows applications for a leading Investment Bank. " +
                "Involvement in the complete project lifecycle including requirements gathering, production of " +
                "functional and technical specifications, leading a small team through the build process and " +
                "system and user testing cycles."
            }, {
                company: "Cap Gemini / Strategic Systems Solutions",
                startDate: new Date(2006, 7, 16),
                endDate: new Date(2012, 5, 15),
                jobTitle: "Technical Team Lead",
                skills: "VisualBasic.NET, C#, .NET Remoting, Windows Forms, SQL Server",
                description: "Design and development of Trade reconciliation (Front Office/Back Office) and adjustment solution for Global Product Control department. Key features of system:\n    \u2022\tRich client UI including multi-threaded operations ensuring smooth and responsive performance.\n    \u2022\tDistributed middle tier accessed using .NET remoting initially and then WCF after conversion process.\n    \u2022\tCustom data compression to improve performance of large queries over WAN.\n    \u2022\tUse of Web services to post adjustments to Trial Balance engine."
            }, {
                company: "Credit Suisse",
                startDate: new Date(2012, 6, 16),
                endDate: new Date(2015, 11, 15),
                jobTitle: "Senior Developer",
                skills: "C#, Windows Forms, WCF, ASP.NET MVC (including WebApi), Silverlight, Angular.js, SQL Server",
                description: "Design and development of strategic adjustment solutions using Silverlight for rich client (requirement to bulk adjust up to 5000 items). " +
                "Maintenance and Dashboard solutions developed in ASP.NET MVC. Log browser support tool developed in ASP.NET WebApi with HTML5 UI using Angular as client-side MVC framework written in TypeScript.\n    Strategic direction in the bank is to use HTML5 as UI for all new development therefore I have been heavily involved in providing prototypes of existing applications refactored to the new technology including mentoring others in the team on their use."
            }, {
                company: "Target Group",
                startDate: new Date(2016, 0, 1),
                jobTitle: "Senior Developer",
                skills: "C# 6, .NET 4.5, Windows Services, ASP.NET MVC, Agile",
                description: "Develop components to enable the enhancement of the Bluechip commercial software produce, used in Loan Brokers/Lenders nationwide. Including:\n        \u2022\tDevelopment of rules engine for identifying cases in arrears/requiring statements etc.\n        \u2022\tDevelopment of scheduler system, Windows service using Quartz.net to run the rules engine. Dashboard in ASP.NET MVC\n        \u2022\tIntegration components with 3rd party credit agencies.\n                        "
            }];
    }
}