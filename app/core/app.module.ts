import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './app.component';
import { HeroFormComponent } from '../controller/hero-form.component';
import { DashboardComponent } from '../controller/dashboard.component';
import { LoginComponent } from '../controller/login.component';
import { DataService } from '../service/data.service';
import { Config }  from '../service/config';

@NgModule({
	imports:[	
		BrowserModule, 
		FormsModule,
		HttpModule,
    JsonpModule,
		AppRoutingModule
	],
  	declarations: [ 
  		AppComponent, 
  		HeroFormComponent,
  		DashboardComponent,
  		LoginComponent
  	],
    providers: [ DataService, Config],
  	bootstrap:    [ AppComponent ]
})


export class AppModule { }
