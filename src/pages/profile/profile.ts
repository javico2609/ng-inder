import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AppState } from '../../state-management';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as actions from '../../state-management/app-state/user-actions';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePage {

  public userInfo$: Observable<any>;
  public showEditProfileForm$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private store: Store<AppState>) {
    this.userInfo$ = this.store.select(s => s.user.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  showEditProfile() {
    this.showEditProfileForm$.next(true);
  }

  save(user: any) {
    this.showEditProfileForm$.next(false);
    this.store.dispatch(new actions.EditOrRegisterAction(user));
  }
}
