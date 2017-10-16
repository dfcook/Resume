"use strict";
var axios_1 = require("axios");
function getResume() { return axios_1.default.get('http://localhost:51376/api/resume/dfcook'); }
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getResume;
//# sourceMappingURL=resources.js.map