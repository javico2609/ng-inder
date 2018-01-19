
import { State as UserState, reducer as UserReducer } from './user-reducer';
import { State as TinderState, reducer as TinderReducer } from './tinder-reducer';

export interface AppState {
    user: UserState,
    tinders: TinderState
}

export const reducers = {
    user: UserReducer,
    tinders: TinderReducer
};


