/// <reference path="./../../typings/browser.d.ts" />
System.register(['./isnull-pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var isnull_pipe_1;
    return {
        setters:[
            function (isnull_pipe_1_1) {
                isnull_pipe_1 = isnull_pipe_1_1;
            }],
        execute: function() {
            describe('IsNullPipe', function () {
                var pipe;
                beforeEach(function () {
                    pipe = new isnull_pipe_1.IsNullPipe();
                });
                it('transforms null values', function () {
                    expect(pipe.transform(null, 'foo')).toEqual('foo');
                });
                it('preserves non-null values', function () {
                    expect(pipe.transform('bar', 'foo')).toEqual('bar');
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNudWxsLXBpcGUuc3BlY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9TY3JpcHRzL3BpcGVzL2lzbnVsbC1waXBlLnNwZWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDLHFEQUFxRDs7Ozs7Ozs7Ozs7WUFJdEQsUUFBUSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsSUFBSSxJQUFnQixDQUFDO2dCQUVyQixVQUFVLENBQUM7b0JBQ1AsSUFBSSxHQUFHLElBQUksd0JBQVUsRUFBRSxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUU7b0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLDJCQUEyQixFQUFFO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUMifQ==