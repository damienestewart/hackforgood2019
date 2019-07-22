import { AnyAction } from 'redux';
import { action } from 'typesafe-actions';

/**
 * Identifies the primary Actions that can occur against an endpoint.
 * This may be extended to add addtional actions when needed.
 */
export class EndpointActionTypes {
  /** Executes the action against an endpoint */
  public readonly Fetch: string;

  /** Signals a successful execution against the endpoint */
  public readonly FetchSuccess: string;

  /** Signals an unusuccessful execution against the endpoint */
  public readonly FetchError: string;

  /** Signals that the data stored from an execution should be cleared from the client */
  public readonly Clear: string;

  constructor(name: string) {
    if (!name) {
      throw Error('EndpointActionType names must be valid and unique.');
    }

    this.Fetch = name + '/Fetch';
    this.FetchSuccess = name + '/FetchSuccess';
    this.FetchError = name + '/FetchError';
    this.Clear = name + '/Clear';
  }
}

/**
 * Interface to enforce the basic Actions that can occur against an endpoint
 */
export interface IEndpointActions<P, R> {
  /** The name of the valid and unique name of the endpoint */
  readonly name: string;

  /** Represents the names of each Action type */
  readonly ActionTypes: EndpointActionTypes;

  /** Should create the Action to execute the endpoint */
  Fetch(parameters?: P): AnyAction;

  /** Should create the Action signaling a successful execution against the endpoint */
  FetchSuccess(response?: R): AnyAction;

  /** Should create the Action signaling an unsuccessful execution against the endpoint */
  FetchError(message: string): AnyAction;

  /** Should create the Action to signal the need to clear all data store from an execution */
  Clear(): AnyAction;
}

/** Creates the Actions that can occur against an endpoint */
export class EndpointActions<P, R> implements IEndpointActions<P, R> {
  /** The name of the valid and unique name of the endpoint */
  public readonly name: string;

  /** Represents the names of each Action type */
  public readonly ActionTypes: EndpointActionTypes;

  constructor(name: string) {
    if (!name) {
      throw Error('EndpointActions names must be valid and unique.');
    }

    this.name = name;
    this.ActionTypes = new EndpointActionTypes(name);
  }

  /** Creates the Action to execute against the endpoint */
  public Fetch = (parameters?: P) => action(this.ActionTypes.Fetch, parameters);

  /** Creates the Action to signal a successful execution against the endpoint */
  public FetchSuccess = (response?: R) => action(this.ActionTypes.FetchSuccess, response);

  /** Creates the Action to signal an unsuccessful execution against the endpoint */
  public FetchError = (message: string) => action(this.ActionTypes.FetchError, message);

  /** Creates the Action to signal that all data from an execution should be cleared from the client */
  public Clear = () => action(this.ActionTypes.Clear);
}
