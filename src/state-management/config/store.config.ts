import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { AppState, reducers } from '../app-state/reducers';

export function logger(reducer: ActionReducer<AppState>): ActionReducer<any, any> {
  return function(state: AppState, action: any): AppState {
    console.group(action.type);
    const nextState = reducer(state, action);
    console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
    console.groupEnd();
    return nextState;
  };
}

export const metaReducers: MetaReducer<any, any>[] = !environment.production
  ? [logger]
  : [];

export const AppReducers: ActionReducerMap<AppState> = reducers;
