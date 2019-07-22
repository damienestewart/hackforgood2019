// tslint:disable completed-docs
export interface IRequestResponse<T> {
  config: { [key: string]: any };
  data: T;
  headers: { [key: string]: any };
  request: XMLHttpRequest;
  status: number;
  statusText: string;
  error: string;
}
