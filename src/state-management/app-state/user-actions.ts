import { Action } from '@ngrx/store';
import { type } from '../utils';

export const ActionTypes = {
  SUCCESS: type('[USER] ApiSuccessAction'),
  LOGIN: type('[USER] LoginAction'),
  LOGOUT: type('[USER] LogoutAction')
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

export type Actions =  ApiSuccessAction | LoginAction | LogoutAction;
