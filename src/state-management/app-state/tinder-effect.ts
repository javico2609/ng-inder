import { getTindersActive } from './tinder.selector';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as actions from './tinder-actions';
import { TinderProvider } from '../../providers/bussiness';
import * as userActions from './user-actions';
import { TINDER_LIMIT } from '../../global-properties/properties';

@Injectable()
export class TinderEffects {
  constructor(private actions$: Actions,
              private tinderProvider: TinderProvider) {
  }

  @Effect() loadTinders$ = this.actions$
    .ofType(userActions.ActionTypes.LOOKUP_USERINFO, userActions.ActionTypes.LOGIN, actions.ActionTypes.TINDER_LOAD)
    .map((action, payload) => payload)
    .exhaustMap(() => 
        this.tinderProvider.getNewTinder(TINDER_LIMIT)
            .map(res => new actions.ApiSuccessAction({action: actions.ActionTypes.TINDER_LOAD_SUCCESS, tinders: res}))
            .catch(err => Observable.of(new actions.ApiErrorAction({action: actions.ActionTypes.TINDER_LOAD, error: err})))
    );
}
