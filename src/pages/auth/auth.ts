import { RegisterPage, ForgotPasswordPage } from './../pages';
import { LoginAction } from './../../state-management/app-state/user-actions';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../state-management';
import { InteractionProvider } from '../../providers/utils';

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
    private store: Store<AppState>,
    private interaction: InteractionProvider) {

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

  register() {
    this.interaction.push({type:'PUSH', page: RegisterPage});
  }

  forgotPassword() {
    this.interaction.push({type:'PUSH', page: ForgotPasswordPage})
  }
}