System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var IsNullPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IsNullPipe = (function () {
                function IsNullPipe() {
                }
                IsNullPipe.prototype.transform = function (value, isNullValue) {
                    return value || isNullValue;
                };
                IsNullPipe = __decorate([
                    core_1.Pipe({ name: 'isNull' }), 
                    __metadata('design:paramtypes', [])
                ], IsNullPipe);
                return IsNullPipe;
            }());
            exports_1("IsNullPipe", IsNullPipe);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNudWxsLXBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9TY3JpcHRzL3BpcGVzL2lzbnVsbC1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUE7Z0JBSUEsQ0FBQztnQkFIRyw4QkFBUyxHQUFULFVBQVUsS0FBYSxFQUFFLFdBQWdCO29CQUNyQyxNQUFNLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQztnQkFDaEMsQ0FBQztnQkFKTDtvQkFBQyxXQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7OzhCQUFBO2dCQUt6QixpQkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsbUNBSUMsQ0FBQSJ9