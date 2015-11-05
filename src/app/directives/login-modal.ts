import {Directive} from 'angular2/angular2';
@Directive({
  selector: '[open-loginmodal]',
  host: {
    '(click)': 'showModal()'
  }
})

export class LoginModal {
  private dialogHTML = `
    <div class="ui modal">
      <i class="close icon"/>
      <h1 class="header">Log in</h1>
      <div class="content">
        Fish and their spatial counterparts
      </div>
    </div>
  `;
  private modalOptions:Object = {
    blurring: false
  };
  private dialog = $(this.dialogHTML).modal(this.modalOptions);
  showModal() {
    this.dialog.modal('show')
  };

}

export enum Action {Login, Register, Forgot};
