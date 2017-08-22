import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {log} from 'util';
import {Observable} from 'rxjs/Observable';
import {any} from 'codelyzer/util/function';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-home-page',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  value = '';
  results: string;
  body = { 'type' : '' , 'name' : ''}
  // Inject HttpClient into your component or service.

  constructor(private http: HttpClient) {}

  // get all JSON from server (mongo)
  GetServer(): any {
    // Make the HTTP request:
    this.http.get('http://localhost:8081/ping')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  // post the body{type,name} to server in JSon.stringify
  PostServer(value: any): any {
    this.http
      .post('http://localhost:8081/pip', JSON.stringify(this.body))
      .map((response: Response) => {
      // login successful if there's a jwt token in the response
      const data = response.json();
      console.log(data);
      return data ;
    });
    // See below - subscribe() is still necessary when using post().
  }
  updateType(value: string) { this.body.type = value; }
  updateName(value: string) { this.body.name = value; }

}
