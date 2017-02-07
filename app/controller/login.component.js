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
var core_1 = require('@angular/core');
var Login_1 = require('../model/Login');
var data_service_1 = require('../service/data.service');
var LoginComponent = (function () {
    function LoginComponent(dataService) {
        this.dataService = dataService;
        this.item = new Login_1.Login(null, '', '');
    }
    LoginComponent.prototype.getAllLogin = function () {
        var _this = this;
        this.dataService.get("login", "GetAll")
            .subscribe(function (result) { return _this.logins = result; }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent.prototype.getByParamsLogin = function () {
        var _this = this;
        var tes = ("abc", "123");
        console.log('test ', tes);
        var paramsString = JSON.stringify(new params("abc", "123"));
        console.log("paramsString ", paramsString);
        this.dataService.getByParams("login", "GetByInfo", paramsString)
            .subscribe(function (result) { return _this.logins = result; }, function (error) { return _this.errorMessage = error; });
    };
    // addLogin(){
    // 	console.log("username ", this.item.username);
    // 	this.dataService.addLogin(this.item.username, this.item.password)
    // 		.subscribe(
    //                     result => this.logins.push(result),
    //                     error =>  this.errorMessage = <any>error);
    // }
    LoginComponent.prototype.addLogin = function (user, pass) {
        var _this = this;
        console.log("username ", user);
        this.item.username = user;
        this.item.password = pass;
        this.dataService.addOrUpdate("login", "AddOrUpdateV1", JSON.stringify(this.item))
            .subscribe(function (result) { return console.log('Type result: ', typeof (result)); }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-form',
            templateUrl: '../view/login.component.html',
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map