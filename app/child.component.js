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
var ChildComponent = (function () {
    function ChildComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildComponent.prototype, "child_header", void 0);
    __decorate([
        //Input the child_header data from the parent
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildComponent.prototype, "child_body", void 0);
    __decorate([
        //Input the child_body data from the parent
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildComponent.prototype, "child_footer", void 0);
    ChildComponent = __decorate([
        //Import decorator dependencies
        core_1.Component({
            selector: 'child',
            template: "<!-- Modal -->\n              <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n\n                  <!-- Modal content-->\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                      <h4 class=\"modal-title\">{{child_header}}</h4><!-- Interpolate the header data received from the parent -->\n                    </div>\n                    <div class=\"modal-body\">\n                      <p>{{child_body}}</p><!-- Interpolate the content data received from the parent  -->\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">{{child_footer}}</button><!--Interpolate the footer data received from the parent  -->\n                    </div>\n                  </div>\n\n                </div>\n              </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map