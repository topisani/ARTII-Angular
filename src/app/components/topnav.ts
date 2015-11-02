import {Component, View} from 'angular2/angular2';
import {RouterLink, Location} from 'angular2/router';

@Component({
  selector: 'top-nav'
})

@View({
  templateUrl: 'app/components/templates/top-nav.html',
  directives: [RouterLink]
})

export class TopNavComponent {
  afterViewInit(){
    $('.ui.dropdown').dropdown();
    $('.ui.dropdown[class=*"no action"]').dropdown({
      'action': 'nothing'
    })
  }
}
