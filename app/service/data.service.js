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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var login_1 = require('../model/login');
var config_1 = require('../service/config');
var DataService = (function () {
    function DataService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json, text/plain, */*' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    DataService.prototype.setController = function (controllerName) {
        if (typeof (controllerName) == 'undefined')
            controllerName = "";
        this.controllerApi = controllerName;
    };
    DataService.prototype.setAction = function (actionName) {
        if (typeof (actionName) == 'undefined')
            actionName = "";
        this.actionApi = actionName;
    };
    DataService.prototype.buildApiUrl = function () {
        this.apiUrl = this.config.domainApi + "/" + this.config.serviceBase + "/" + this.controllerApi + "/" + this.actionApi;
    };
    DataService.prototype.get = function (controllerName, actionName) {
        this.setController(controllerName);
        this.setAction(actionName);
        this.buildApiUrl();
        console.log("apiURL ", this.apiUrl);
        return this.http.get(this.apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.addLogin = function (username, password) {
        var login = new login_1.Login(null, username, password);
        var body = JSON.stringify({ username: username });
        console.log("body ", body);
        console.log("login>> ", JSON.stringify(login));
        var params = new http_1.URLSearchParams();
        params.set('username', username);
        params.set('password', password);
        console.log("tosTRING ", params.toString());
        return this.http.post(this.apiUrl, params.toString(), this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (res) {
        console.log('res >>> ', res);
        var body = res.json();
        return body || {};
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_1.Config])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map