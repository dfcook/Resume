/// <reference path="./../../typings/browser.d.ts" />
System.register(["./isnull-pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var isnull_pipe_1;
    return {
        setters:[
            function (isnull_pipe_1_1) {
                isnull_pipe_1 = isnull_pipe_1_1;
            }],
        execute: function() {
            describe("IsNullPipe", function () {
                var pipe;
                beforeEach(function () {
                    pipe = new isnull_pipe_1.IsNullPipe();
                });
                it("transforms null values", function () {
                    expect(pipe.transform(null, "foo")).toEqual("foo");
                });
                it("preserves non-null values", function () {
                    expect(pipe.transform("bar", "foo")).toEqual("bar");
                });
            });
        }
    }
});
//# sourceMappingURL=isnull-pipe.specs.js.map