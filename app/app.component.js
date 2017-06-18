"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //Import decorator dependencies
var AppComponent = (function () {
    function AppComponent() {
        this.header = 'Scooby Doo'; //define 3 variables which hold data for the modal header, body and footer
        this.body = 'Scooby-Doo is an American animated cartoon franchise, comprising several animated television series produced from 1969 to the present day. '; //define a variable content which holds a string
        this.footer = 'Scooby-Dooby-Doo, Where Are You?';
    }
    AppComponent = __decorate([
        //Import decorator dependencies
        core_1.Component({
            selector: 'my-app',
            template: " <h3> This is the parent Component</h3>\n\n              <!-- Trigger the modal with a button -->\n              <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Click to view child component</button>\n              \n              <child [child_header]=\"header\" [child_body]=\"body\" [child_footer]=\"footer\"></child>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map