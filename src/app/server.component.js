"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
let ServerComponent = class ServerComponent {
    // Inject HttpClient into your component or service.
    constructor(http) {
        this.http = http;
        this.value = '';
        this.body = { 'type': '', 'name': '' };
    }
    // get all JSON from server (mongo)
    GetServer() {
        // Make the HTTP request:
        this.http.get('http://localhost:8081/ping')
            .map((res) => res.json())
            .catch((error) => Observable_1.Observable.throw(error.json().error || 'Server error'));
    }
    // post the body{type,name} to server in JSon.stringify
    PostServer(value) {
        this.http
            .post('http://localhost:8081/pip', JSON.stringify(this.body))
            .map((response) => {
            // login successful if there's a jwt token in the response
            const data = response.json();
            console.log(data);
            return data;
        });
        // See below - subscribe() is still necessary when using post().
    }
    updateType(value) { this.body.type = value; }
    updateName(value) { this.body.name = value; }
};
ServerComponent = __decorate([
    core_1.Component({
        selector: 'app-home-page',
        templateUrl: './server.component.html'
    })
], ServerComponent);
exports.ServerComponent = ServerComponent;
//# sourceMappingURL=server.component.js.map