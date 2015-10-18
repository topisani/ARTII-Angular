var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "ARTII-Angular";
        this.users = USERS;
    }
    AppComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    AppComponent.prototype.getSelectedClass = function (user) {
        return { 'selected': user === this.selectedUser };
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'artii',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            template: "\n    <h1>[{{title}}]</h1>\n    <h2>Users:</h2>\n    <ul class=\"users\">\n      <li *ng-for=\"#user of users\" (click)=\"onSelect(user)\" [ng-class]=\"getSelectedClass( user )\">\n        <span class=\"badge\">{{user.id}}</span>{{user.username}}\n      </li>\n    </ul>\n    <div *ng-if=\"selectedUser\">\n      <h2>Edit user {{selectedUser.id}}</h2>\n      <div>\n        <label>Username</label>\n        <div><input [(ng-model)]=\"selectedUser.username\" placeholder=\"{{selectedUser.username}}\"></div>\n      </div>\n      <div>\n        <label>Email</label>\n        <div><input [(ng-model)]=\"selectedUser.email\" placeholder=\"{{selectedUser.email}}\"></div>\n      </div>\n    </div>\n    ",
            styles: ["\n    .users {list-style-type: none; margin-left: 1em; padding: 0; width: 60em;}\n    .users li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n    .users li:hover {color: #369; background-color: #EEE; left: 0em;}\n    .users .badge {\n      font-size: small;\n      color: white;\n      padding: 0.1em 0.7em;\n      background-color: #369;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -1px;\n    }\n    .selected { background-color: #EEE; color: #369; }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
var User = (function () {
    function User() {
    }
    return User;
})();
var USERS = [
    { "id": 2, "username": "fisk", "email": "fisk@fisk.fisk" },
    { "id": 3, "username": "niels", "email": "911@usa.gov" },
    { "id": 4, "username": "elvira", "email": "elle@vira.nz" },
    { "id": 5, "username": "sejmenneske123", "email": "tobias@pisani.dk" },
    { "id": 6, "username": "hejhaj", "email": "needs@dentist.com" },
    { "id": 7, "username": "dødmand567", "email": "john@doe.co.uk" },
    { "id": 8, "username": "Z", "email": "Z@Z.Z" }
];
