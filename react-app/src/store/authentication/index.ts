import { AnyAction, Reducer } from 'redux';
import { reducerRegistry } from '../ReducerRegistry';
import IStoreMeta from '../StoreMeta';
import { ActionType } from './actions';

const reducerName: string = 'authentication';

export interface IAuthenticationState {
}

const initialState: IAuthenticationState = {
};

/**
 * Reducer to manage the state
 */
// tslint:disable-next-line: missing-optional-annotation
const reducer: Reducer<IAuthenticationState> = (state: IAuthenticationState = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const storeMeta: IStoreMeta = {
  name: reducerName,
  reducer,
  initialState
};

// Register the reducer with the ReducerRegistry
reducerRegistry.register(reducerName, reducer);

export default storeMeta;
