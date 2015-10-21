import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, View, bootstrap, provide,FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, Location, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router} from 'angular2/router';
import {TopNav} from './topnav'

@Component({
  selector: 'artii-app'
})

@View({
  templateUrl: 'app/components/templates/app.html',
  directives: [TopNav]
})

export class App {

  constructor() {
  }
}

bootstrap(App)
