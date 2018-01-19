import { Action } from '@ngrx/store';
import { type } from '../utils';

export const ActionTypes = {
    SUCCESS: type('[TINDER] ApiSuccessAction'),
    API_ERROR: type('[TINDER] ApiErrorAction'),
    TINDER_LOAD: type('[TINDER] TinderLoadAction'),
    TINDER_LOAD_SUCCESS: type('[TINDER] TinderLoadSuccessAction'),
    TINDER_VOTE: type('[TINDER] TinderVoteAction'),
};

export class TinderLoadAction implements Action {
    type = ActionTypes.TINDER_LOAD;

    constructor(public payload?: any) { }
}

export class TinderLoadSuccessAction implements Action {
    type = ActionTypes.TINDER_LOAD_SUCCESS;

    constructor(public payload?: any) { }
}

export class TinderVoteAction implements Action {
    type = ActionTypes.TINDER_VOTE;

    constructor(public payload?: any) { }
}

export class ApiSuccessAction implements Action {
    type = ActionTypes.SUCCESS;

    constructor(public payload?: any) { }
}

export class ApiErrorAction implements Action {
    type = ActionTypes.API_ERROR;

    constructor(public payload?: { action: any, error: any }) { }
}

export type Actions = ApiSuccessAction | ApiErrorAction | TinderLoadAction | TinderVoteAction | TinderLoadSuccessAction;
