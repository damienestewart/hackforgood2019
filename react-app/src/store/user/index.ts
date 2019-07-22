import { AnyAction, Reducer } from 'redux';

import { IUserProfile } from '../../models';
import { reducerRegistry } from '../ReducerRegistry';
import IStoreMeta from '../StoreMeta';
import { ProfileActions } from './actions';
import sagas from './sagas';

const reducerName: string = 'user';

export interface IUserState {
}

const initialState: IUserState = {
};

/**
 * Reducer to manage the state
 */
// tslint:disable-next-line: missing-optional-annotation
const reducer: Reducer<IUserState> = (state: IUserState = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const storeMeta: IStoreMeta = {
  name: reducerName,
  reducer,
  initialState,
  sagas
};

// Register the reducer with the ReducerRegistry
reducerRegistry.register(reducerName, reducer);

export default storeMeta;
