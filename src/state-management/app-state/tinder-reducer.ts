import * as actions from './tinder-actions';
import { tassign } from 'tassign';
import { findLast } from 'lodash';

export interface State {
    // additional entities state properties
    tinders: Array<TinderModel>
}

export const initialState: State = {
    // additional entity state properties
    tinders: []
};


export function reducer(state = initialState, action: actions.Actions): State {
    switch (action.type) {

        case actions.ActionTypes.SUCCESS: {
            const payload = action.payload;

            if (payload.action === actions.ActionTypes.TINDER_LOAD_SUCCESS) {
                return tassign(state, { tinders: [...state.tinders, ...payload.tinders.map(t => Object.assign({}, t, { vote: false })) ] });
            }
            else if (payload.action === actions.ActionTypes.TINDER_VOTE) {
                const tinderVote = findLast(state.tinders, (t: TinderModel) => !t.vote);     
                
                if(tinderVote){
                    return tassign(state, { tinders: [...[Object.assign({}, tinderVote, { vote: true })], ...state.tinders.filter((tin: TinderModel) => tin.email !== tinderVote.email)] });
                }
            }

            return state;
        }

        default:
            return state;
    }
}