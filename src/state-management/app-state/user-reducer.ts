import * as actions from './user-actions';
import { tassign } from 'tassign';

export interface State  {
  // additional entities state properties
  data: any
}

export const initialState: State  = {
  // additional entity state properties
  data: null
};


export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {

    case actions.ActionTypes.SUCCESS: {
      const payload = action.payload;
      if (payload.action === actions.ActionTypes.LOOKUP_USERINFO) {
        return tassign(state, { data: payload.data });
      }
      else if (payload.action === actions.ActionTypes.LOGOUT) {
        return tassign(state, { data: null });
      }
        
      return state;
    }

    default:
      return state;
  }
}



