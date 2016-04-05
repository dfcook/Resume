System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Applicant;
    return {
        setters:[],
        execute: function() {
            Applicant = (function () {
                function Applicant() {
                }
                Object.defineProperty(Applicant.prototype, "fullName", {
                    get: function () {
                        return this.firstName + " " + this.surname;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Applicant;
            }());
            exports_1("Applicant", Applicant);
        }
    }
});
//# sourceMappingURL=applicant.js.map