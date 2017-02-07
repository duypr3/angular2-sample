import { Injectable }              from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Login } from '../model/login';
import { Config }  from '../service/config';

@Injectable()

export class DataService {  

	private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });

  //private apiUrl = 'http://localhost:32760/api/login/AddOrUpdate';  // URL to web api
  apiUrl: string; controllerApi: string; actionApi: string;

  constructor (private http: Http, private config: Config) {}

  setController(controllerName: string){
    if (typeof(controllerName) == 'undefined') controllerName = "";
    this.controllerApi = controllerName;
  }

  setAction(actionName: string){
    if (typeof(actionName) == 'undefined') actionName = "";
    this.actionApi = actionName;
  }

  buildApiUrl(){
    this.apiUrl = this.config.domainApi + "/" + this.config.serviceBase + "/" + this.controllerApi + "/" + this.actionApi;
  }

  buildApiUrlWithActionName(controllerName: string, actionName: string){
    this.setController(controllerName);
    this.setAction(actionName);
    this.buildApiUrl();

    return this.apiUrl;
  }
  get(controllerName: string, actionName: string): Observable<any>{
    this.setController(controllerName);
    this.setAction(actionName);
    this.buildApiUrl();

    console.log("apiURL ", this.apiUrl);
    return this.http.get(this.apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  getWithParams(controllerName: string, actionName: string, params: string): Observable<any>{
    this.setController(controllerName);
    console.log("paramss ",params);
    let paramsURL = new URLSearchParams(params);
    console.log("paramURL  ", paramsURL);

    this.setAction(actionName);
    this.buildApiUrl();
    console.log("data>>> ",params);    
    return this.http.get(this.apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  addOrUpdate(controllerName: string, actionName: string, data: string): Observable<any>{
    this.setController(controllerName);
    this.setAction(actionName);
    this.buildApiUrl();
    console.log("data>>> ",data);
    //let body = JSON.stringify(data);
    return this.http.post(this.apiUrl, data, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  delete(controllerName: string, actionName: string): Observable<any>{
    this.setController(controllerName);
    this.setAction(actionName);
    this.buildApiUrl();
    
    //let body = JSON.stringify(data);
    return this.http.post(this.apiUrl, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addLogin(username: string, password: string) : Observable<Login> {
    let login = new Login(null,username,password);
    let body = JSON.stringify({username: username});
    console.log("body ", body);
    console.log("login>> ", JSON.stringify(login));

    var params = new URLSearchParams();
    params.set('username', username);
    params.set('password', password);
    console.log("tosTRING ", params.toString());

    return this.http.post(this.apiUrl, params.toString(), this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}