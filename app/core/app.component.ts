import { Component } from '@angular/core';
// import { ClickMeComponent } from '../controller/click-me.component';
// import { KeyUpComponent } from '../controller/keyup.component';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
		<login-form></login-form>
	    <router-outlet></router-outlet>
     `
})
export class AppComponent  {}
