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
var router_1 = require('@angular/router');
var hero_1 = require('../model/hero');
var HeroFormComponent = (function () {
    function HeroFormComponent(router) {
        this.router = router;
        this.powers = ['Really Smart', 'Super EX', 'Super HOT', 'weather CHange'];
        this.model = new hero_1.Hero(18, 'Dr Duy', this.powers[0], 'Chuck oversheet');
        this.submitted = false;
    }
<<<<<<< HEAD
    HeroFormComponent.prototype.onSubmit = function () {
=======
    ;
    HeroFormComponent.prototype.getHeroes = function () {
    };
    HeroFormComponent.prototype.ngOnInit = function () {
    };
    HeroFormComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroFormComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroFormComponent.prototype.onsubmit = function () {
>>>>>>> refs/remotes/origin/master
        this.submitted = true;
        console.log("on submit>> ", this.model);
    };
    HeroFormComponent.prototype.newHero = function () {
        this.model = new hero_1.Hero(41, 'new HERO', 'power');
        console.log("new Hero>> ", this.model);
    };
    HeroFormComponent.prototype.resetForm = function () {
        this.model = new hero_1.Hero(1, '', '', '');
        console.log("reset Form>> ", this.model);
    };
    HeroFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-form',
            templateUrl: '../view/hero-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
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
//# sourceMappingURL=hero-form.component.js.map