import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, View, bootstrap, provide,FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, RouterLink, RouterOutlet, ROUTER_PROVIDERS, Location, Route, LocationStrategy, HashLocationStrategy, Router} from 'angular2/router';
import {TopNavComponent} from './topnav';
import {ProfileComponent} from './profile';
import {LoginComponent} from './login';

@Component({
  selector: 'artii-app'
})

@View({
  templateUrl: 'app/components/templates/app.html',
  directives: [TopNavComponent, RouterOutlet]
})

@RouteConfig([
  { path: "/login", as: "Login", component: LoginComponent },
  { path: "/profile", as: "Profile",  component: ProfileComponent }
])
export class App {

  router: Router;
  location: Location;

  constructor(router: Router, location: Location) {
      this.router = router;
      this.location = location;
  }
}

bootstrap(App, [
  ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})
])
