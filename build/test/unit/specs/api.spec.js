"use strict";
var resources_1 = require("@/api/resources");
describe('api', function () {
    it('should return resume json', function (done) {
        resources_1.default().then(function (resume) { return expect(resume).not.toBe(null); });
        done();
    });
});
//# sourceMappingURL=api.spec.js.map