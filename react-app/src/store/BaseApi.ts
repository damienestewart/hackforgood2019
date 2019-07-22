import Axios from 'axios';

import { IApiManagerConfig, IServiceConfig } from '../Settings';
import { IApplicationState, store } from '../store/index';

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

interface IHeaderCollection {
  [key: string]: string;
}

/**
 * Class to handle calls to server which becomes a base for any API classes
 */
export default class BaseApi {
  /**
   * Asynchronously execute a request
   * @param url
   * @param method
   * @param headers
   * @param data
   */
  public static async request(url: string, method: string, headers?: any, data?: any, config?: any): Promise<any> {
    const headersObject: IHeaderCollection = { 'Content-Type': 'application/json' };
    const state: IApplicationState = store.getState();


    headers = Object.assign(headersObject, headers);
    return Axios({ url, method, headers, data, ...config });
  }

  /**
   * Takes configuration settings and determines how to structure and execute the request
   * @param manager The Api Manager Configuration from the application settings
   * @param service The Service Config for the service being utilized
   * @param endpoint The endpoint url being requested against
   * @param method The request method type to execute against the endpoint
   * @param headers A collection o
   * @param data
   * @param config
   */
  public static async requestWithConfig(
    manager: IApiManagerConfig,
    service: IServiceConfig,
    endpoint: string,
    method: RequestMethod,
    headers?: any,
    data?: any,
    config?: any
  ): Promise<any> {
    const headersMerged: IHeaderCollection = {};
    if (manager.subscriptionKey) {
      const apiSubscriptionKeyHeader: IHeaderCollection = { 'Ocp-Apim-Subscription-Key': manager.subscriptionKey + service.productKey };
      headers = Object.assign(headersMerged, headers, apiSubscriptionKeyHeader);
    }

    return BaseApi.request(`${manager.base + service.base + endpoint}`, method, headersMerged, data, config);
  }
}
