import * as fromRoot from './reducers';
import {createSelector } from "@ngrx/store";
import { filter } from 'lodash';

export const getTinders = (state: fromRoot.AppState) => state.tinders.tinders;

export const getTindersActive = createSelector(getTinders, (tinders: TinderModel[]) => {
    return filter(tinders, (tinder: TinderModel) => !tinder.vote);
});