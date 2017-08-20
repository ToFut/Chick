"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
require("rxjs/add/operator/switchMap");
let HeroDetailComponent = class HeroDetailComponent {
    constructor(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.route.paramMap
            .switchMap((params) => this.heroService.getHero(params.get('id')))
            .subscribe(hero => {
            return this.hero = hero;
        });
    }
    goBack() {
        this.location.back();
    }
};
__decorate([
    core_1.Input()
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-hero-detail',
        templateUrl: './hero-detail.component.html'
    })
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map