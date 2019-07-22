import { applyMiddleware, combineReducers, compose, createStore, ReducersMapObject, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { reducerRegistry } from './ReducerRegistry';

import { default as AuthenticationStore, IAuthenticationState } from './authentication';
import { default as UserStore, IUserState } from './user';

// The top-level state object
export interface IApplicationState {
  /** The user state */
  user: IUserState;

  /** The user's authentication state */
  authentication: IAuthenticationState;
}

const initialState: IApplicationState = {
  user: UserStore.initialState,
  authentication: AuthenticationStore.initialState
};

const sagaMiddleware = createSagaMiddleware();

/**
 * Configuring store with default and platform middleware applied.
 * @param {object} initialState Initial app state
 */
const configureStore = () => {
  const defaultMiddleware = [sagaMiddleware];

  const rootReducer = combineReducers(reducerRegistry.getReducers());

  let reduxStore: Store;

  const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  reduxStore = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...defaultMiddleware)));

  reducerRegistry.setChangeListener((reducers: ReducersMapObject) => {
    reduxStore.replaceReducer(combineReducers(reducers));
  });

  sagaMiddleware.run(rootSaga);

  return reduxStore || undefined;
};

/**
 * Define the root saga
 */
// tslint:disable-next-line: typedef
function* rootSaga() {
  // TODO: The root saga can be autmagically confiured given and array
  // of registered stores
  yield all([fork(UserStore.sagas!)]);
}

const store = configureStore();
export { store };
