import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {LoginModal} from '../directives/login-modal';

@Component({
  selector: 'top-nav'
})

@View({
  templateUrl: 'app/components/templates/top-nav.html',
  directives: [RouterLink, LoginModal]
})

export class TopNavComponent {

}
