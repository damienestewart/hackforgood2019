import { Reducer } from 'redux';
import { Effect } from 'redux-saga/effects';

type Saga = () => IterableIterator<Effect>;

export default interface IStoreMeta {
  /** The name of the store */
  name: string;

  /** The reducer that manages the store */
  reducer: Reducer;

  /** The initial state of the store */
  initialState: any;

  /** The root Saga that operates on the store */
  sagas?: Saga;
}
