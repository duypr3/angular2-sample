import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero }  from '../model/hero';

@Component({
	moduleId: module.id,
	selector: 'hero-form',
	templateUrl: '../view/hero-form.component.html'
})

export class HeroFormComponent implements OnInit {
	heroes: Hero[];
  	selectedHero: Hero;
	constructor(private router: Router) { };
	getHeroes(): void {
	}

	ngOnInit(): void {
		
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	powers = ['Really Smart', 'Super EX', 'Super HOT', 'weather CHange'];
	model = new Hero(18,'Dr Duy', this.powers[0], 'Chuck oversheet');
	submitted = false;
	onSubmit(){
		this.submitted = true;
		console.log("on submit>> ",this.model);
	}

	newHero(){
		this.model = new Hero(41, 'new HERO', 'power');
		console.log("new Hero>> ", this.model);
	}

	resetForm(){
		this.model = new Hero(1,'','','');
		console.log("reset Form>> ", this.model);
	}
}
// export class HeroFormComponent {	
	// 	powers = ['Really Smart', 'Super EX', 'Super HOT', 'weather CHange'];
	// 	model = new Hero(18,'Dr Duy', this.powers[0], 'Chuck oversheet');
	// 	submitted = false;
	// 	onsubmit(){
		// 		this.submitted = true;
		// 		console.log("hehe>> ",this.model);
		// 	}

		// 	newHero(){
			// 		this.model = new Hero(41, 'new HERO', 'power');
			// 	}
			// 	// TODO
			// 	// get diagnostic(){
				// 	// 	return JSON.stringify(this.model);
				// 	// }
// }