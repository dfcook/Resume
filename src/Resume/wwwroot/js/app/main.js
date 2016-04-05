///<reference path="../node_modules/angular2/typings/browser.d.ts"/> 
System.register(['angular2/platform/browser', './resume.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, resume_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (resume_component_1_1) {
                resume_component_1 = resume_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(resume_component_1.ResumeComponent);
        }
    }
});
//# sourceMappingURL=main.js.map