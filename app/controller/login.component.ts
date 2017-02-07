import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from '../model/Login';
import { DataService }  from '../service/data.service';


@Component({
	moduleId: module.id,
	selector: 'login-form',
	templateUrl: '../view/login.component.html',
	providers: [ DataService ]
})



export class LoginComponent{
	item = new Login(null,'','');
	constructor(private dataService: DataService) { }
	logins: Login[];
	errorMessage: string;

	getAllLogin(){		
	    this.dataService.get("login","GetAll")
	      	.subscribe(
                     result => this.logins = result,
                     error =>  this.errorMessage = <any>error);
	}

	getByParamsLogin(){				
		// console.log("paramsString ", paramsString);
	 //    this.dataService.getByParams("login","GetByInfo",paramsString)
	 //      	.subscribe(
  //                    result => this.logins = result,
  //                    error =>  this.errorMessage = <any>error);
	}
	// addLogin(){
	// 	console.log("username ", this.item.username);
	// 	this.dataService.addLogin(this.item.username, this.item.password)
	// 		.subscribe(
 //                     result => this.logins.push(result),
 //                     error =>  this.errorMessage = <any>error);
	// }

	addLogin(user: string, pass: string){
		console.log("username ", user);
		this.item.username = user;
		this.item.password = pass;
	
		this.dataService.addOrUpdate("login","AddOrUpdateV1", JSON.stringify(this.item))
			.subscribe(
                     result => console.log('Type result: ',typeof(result)),
                     error =>  this.errorMessage = <any>error);
	}
	deleteLogin(){
		this.dataService.delete("login","Delete?username=abc")
			.subscribe(
                     result => console.log('Type result: ',result, typeof(result)),
                     error =>  this.errorMessage = <any>error);
	}
}