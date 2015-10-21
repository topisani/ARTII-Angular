import {HTTP_PROVIDERS, Http } from 'angular2/http';
import {Component, View, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES, Control} from 'angular2/angular2';
import {API_PATHS} from '../../constants';

@Component({
  selector: 'login',
  viewProviders: [HTTP_PROVIDERS]
})
@View({
  // Template for this component. You can see it below
  templateUrl: 'app/components/templates/login.html'
})

export class LoginComponent {
  result: Object
  username: Control
  password: Control
  constructor() {
    this.username = new Control();
    this.password = new Control();
  }

  login(event, username, password, http: Http) {
    var result, error;
    http.get(API_PATHS.LOGIN)
      .map(res => res.json())
      .subscribe(result, error)
    result = function(res) {
      window['token'] = res.token;
    }
    error = function(err) {
      alert(err)
    }
  }
}
