import {Component, ViewChild} from '@angular/core';
 // this the main app component
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  exportAs: 'mdMenu',
  template: `
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" (click)="closeNav()">&times;</a>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/server" routerLinkActive="active">server</a>
    </div>
    <button style="font-size:30px;cursor:pointer" (click)="openNav()">&#9776; open </button>
    <nav>
    </nav>
    <router-outlet></router-outlet>

  `
})
export class AppComponent {
    openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

    closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

}
