"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const core_2 = require("@angular/core");
const material_1 = require("@angular/material");
require("hammerjs");
const http_1 = require("@angular/http");
const axios = require("axios");
const app_component_1 = require("./app.component");
const dashboard_component_1 = require("./dashboard.component");
const hero_detail_component_1 = require("./hero-detail.component");
const heroes_component_1 = require("./heroes.component");
const hero_service_1 = require("./hero.service");
const http_2 = require("@angular/common/http");
const app_routing_module_1 = require("./app-routing.module");
const server_component_1 = require("./server.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_2.HttpClientModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            material_1.MaterialModule
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            server_component_1.ServerComponent
        ],
        providers: [hero_service_1.HeroService, { provide: http_1.Http, useValue: axios }],
        bootstrap: [app_component_1.AppComponent],
        schemas: [
            core_2.CUSTOM_ELEMENTS_SCHEMA
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map