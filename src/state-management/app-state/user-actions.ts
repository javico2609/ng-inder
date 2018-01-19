import { Action } from '@ngrx/store';
import { type } from '../utils';

export const ActionTypes = {
  SUCCESS: type('[USER] ApiSuccessAction'),
  LOGIN: type('[USER] LoginAction'),
  LOGOUT: type('[USER] LogoutAction'),
  LOOKUP_USERINFO: type('[USER] LookupUserinfoAction'),
  API_ERROR: type('[APP] ApiErrorAction')
};

export class LoginAction implements Action {
  type = ActionTypes.LOGIN;

  constructor(public payload?: any) { }
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;

  constructor(public payload?: any) { }
}

export class ApiSuccessAction implements Action {
  type = ActionTypes.SUCCESS;

  constructor(public payload?: any) { }
}

export class LookupUserinfoAction implements Action {
  type = ActionTypes.LOOKUP_USERINFO;

  constructor(public payload?: any) { }
}

export class ApiErrorAction implements Action {
  type = ActionTypes.API_ERROR;

  constructor(public payload?: { action: any, error: any}) { }
}

export type Actions =  ApiSuccessAction | LoginAction | LogoutAction | LookupUserinfoAction | ApiErrorAction;
