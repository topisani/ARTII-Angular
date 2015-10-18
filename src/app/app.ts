import {Component, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
@Component({
    selector: 'artii',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    template: `
    <h1>[{{title}}]</h1>
    <h2>Users:</h2>
    <ul class="users">
      <li *ng-for="#user of users" (click)="onSelect(user)" [ng-class]="getSelectedClass( user )">
        <span class="badge">{{user.id}}</span>{{user.username}}
      </li>
    </ul>
    <div *ng-if="selectedUser">
      <h2>Edit user {{selectedUser.id}}</h2>
      <div>
        <label>Username</label>
        <div><input [(ng-model)]="selectedUser.username" placeholder="{{selectedUser.username}}"></div>
      </div>
      <div>
        <label>Email</label>
        <div><input [(ng-model)]="selectedUser.email" placeholder="{{selectedUser.email}}"></div>
      </div>
    </div>
    `,
    styles:[` 
    .users {list-style-type: none; margin-left: 1em; padding: 0; width: 60em;}
    .users li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
    .users li:hover {color: #369; background-color: #EEE; left: 0em;}
    .users .badge {
      font-size: small;
      color: white;
      padding: 0.1em 0.7em;
      background-color: #369;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -1px;
    }
    .selected { background-color: #EEE; color: #369; }
  `]
})

class AppComponent {
  public title = "ARTII-Angular";
  public selectedUser: User;
  public onSelect(user: User) {
    this.selectedUser = user;
  }
  public getSelectedClass(user: User) {
    return { 'selected': user === this.selectedUser };
  }
  public users = USERS;
}
bootstrap( AppComponent);

class User {
  id: number;
  username: string;
  email: string;
}

var USERS: User[] = [
  { "id": 2, "username": "fisk", "email": "fisk@fisk.fisk"},
  { "id": 3, "username": "niels", "email": "911@usa.gov"},
  { "id": 4, "username": "elvira", "email": "elle@vira.nz"},
  { "id": 5, "username": "sejmenneske123", "email": "tobias@pisani.dk"},
  { "id": 6, "username": "hejhaj", "email": "needs@dentist.com"},
  { "id": 7, "username": "dødmand567", "email": "john@doe.co.uk"},
  { "id": 8, "username": "Z", "email": "Z@Z.Z"}
]
