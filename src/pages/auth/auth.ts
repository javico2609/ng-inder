import { LoginAction } from './../../state-management/app-state/user-actions';
import { Component } from '@angular/core';
import { IonicPage, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../state-management';

/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  public formGroup: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private menuCtrl: MenuController,
    private store: Store<AppState>) {

    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
   
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  login() {
    this.store.dispatch(new LoginAction(this.formGroup.value));
  }
}
