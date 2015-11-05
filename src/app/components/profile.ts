import {Component, View} from 'angular2/angular2';
import {ProfileCardComponent} from './profile-card';
import {ArtworksListComponent} from './artworks-list';

@Component({
  selector: 'profile'
})

@View({
  templateUrl: 'app/components/templates/profile.html',
  directives: [ProfileCardComponent, ArtworksListComponent]
})

export class ProfileComponent {
  afterViewInit(){
    $('.image[data-src]').each( function(){
      $(this).css("background-image", "url('" + $(this).data("src") + "')")
    });
  }
}
