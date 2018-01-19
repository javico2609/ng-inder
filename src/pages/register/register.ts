import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { IonicPage, MenuController } from 'ionic-angular';
import { AppState } from '../../state-management';
import * as actions from '../../state-management/app-state/user-actions';
import { InteractionProvider } from '../../providers/utils';
import { MainPage } from '../pages';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private store: Store<AppState>, private menuCtrl: MenuController, private interaction: InteractionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  save(user: any) {
    this.store.dispatch(new actions.EditOrRegisterAction(user));
    this.interaction.push({type:'ROOT', page: MainPage})
  }
}
