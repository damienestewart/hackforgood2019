/**
 * ReducerRegistry enables dynamic reducers.
 * It enables reducers to be added to the store’s reducer after the store is created.
 * MoreInfo: http://nicolasgallagher.com/redux-modules-and-code-splitting/
 */

export interface IReducerRegistry {
  /** Returns an object representing all the reducers as properties */
  getReducers(): any;

  /**
   * Adds a new reducer to the registry
   * @param name The name of the reducer
   * @param reducer The reudcer instance
   */
  register(name: string, reducer: any): void;

  /**
   * Set a listener to be notified of changes to the reducer registry
   * @param listener The listener callback
   */
  setChangeListener(listener: any): void;
}

/**
 * A registry that allows you to dynamically add reducers and notify a listener
 */
export class ReducerRegistry {
  /**
   * A listener to notify when changes occur to the reducer list
   */
  private emitChange: any;

  /**
   * A map of all registered reducers
   */
  private reducers: any;

  /**
   * @constructor
   */
  constructor() {
    this.reducers = {};
  }

  /**
   * Get the current list of all reducers
   */
  public getReducers(): any {
    return { ...this.reducers };
  }

  /**
   * Register a new reducer
   * @param name Name of the reducer
   * @param reducer The reducer object
   */
  public register(name: string, reducer: any): void {
    this.reducers = { ...this.reducers, [name]: reducer };
    if (this.emitChange) {
      this.emitChange(this.getReducers());
    }
  }

  /**
   * Set the listener to notify when there are changes to the list of reducers
   * @param listener
   */
  public setChangeListener(listener: any): void {
    this.emitChange = listener;
  }
}

const reducerRegistry: IReducerRegistry = new ReducerRegistry();
export { reducerRegistry };
