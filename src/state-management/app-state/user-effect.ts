import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as actions from './user-actions';
import { AuthPage, MainPage } from '../../pages/pages';
import { Storage } from '@ionic/storage';
import { UserProvider } from '../../providers/bussiness';
import { InteractionProvider } from '../../providers/utils';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userProvider: UserProvider, private interaction: InteractionProvider) {}

  @Effect() lookupUserInfo = this.actions$
    .ofType(actions.ActionTypes.LOOKUP_USERINFO)
    .map((action, payload) => payload)
    .exhaustMap(() => this.getUserInfo());

  @Effect() loginAction = this.actions$
    .ofType(actions.ActionTypes.LOGIN)
    .map((action: any) => action.payload)
    .exhaustMap(
      (payload) => this.userProvider.login(payload)
        .map(res => new actions.ApiSuccessAction({action: actions.ActionTypes.LOGIN, data: res}))
        .exhaustMap(() => this.getUserInfo())
        .do(() => this.interaction.push({type:'ROOT', page: MainPage}))
        .catch(err => Observable.of(new actions.ApiErrorAction({action: actions.ActionTypes.LOGIN, error: err})))
    );

  @Effect({ dispatch: false }) logoutAction = this.actions$
    .ofType(actions.ActionTypes.LOGOUT)
    .exhaustMap(() => this.userProvider.logout()
      .do(() => this.interaction.push({type:'ROOT', page: AuthPage}))
      .catch(err => Observable.of(new actions.ApiErrorAction({action: actions.ActionTypes.LOGOUT, error: err})))
    );

  getUserInfo() {
    return this.userProvider.getUserInfo()
      .map(res => new actions.ApiSuccessAction({action: actions.ActionTypes.LOOKUP_USERINFO, data: res}))
      .catch(err => Observable.of(new actions.ApiErrorAction({action: actions.ActionTypes.LOOKUP_USERINFO, error: err})));
  }

}
