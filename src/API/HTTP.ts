import { IRequestOptions, IAnyObject, IRequestResult } from '@utils/ts/interfaces';
import { queryStringify } from '@utils/helpers';
import settings from '@root/settings/base';

interface IHTTPOptions {
  headers?: { [key: string]: string; }
}

class HTTP {
  static METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  };

  host: string;

  options: IHTTPOptions;

  constructor(host = '', options: IHTTPOptions = {}) {
    const defaults: IHTTPOptions = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    this.host = host;
    this.options = {
      ...defaults,
      ...options,
    };
  }

  get(url: string, options: IRequestOptions = {}): Promise<IRequestResult> {
    return this._request(url, {
      ...options,
    }, options.timeout);
  }

  post(url: string, options: IRequestOptions = {}): Promise<IRequestResult> {
    return this._request(url, {
      ...options,
      method: HTTP.METHODS.POST,
    }, options.timeout);
  }

  put(url: string, options: IAnyObject = {}): Promise<IRequestResult> {
    return this._request(url, {
      ...options,
      method: HTTP.METHODS.PUT,
    }, options.timeout);
  }

  delete(url: string, options: IRequestOptions = {}): Promise<IRequestResult> {
    return this._request(url, {
      ...options,
      method: HTTP.METHODS.DELETE,
    }, options.timeout);
  }

  _request(url: string, options: IRequestOptions, timeout = 5000): Promise<IRequestResult> {
    const { method = HTTP.METHODS.GET, headers, body } = options;
    const mergedHeaders = { ...this.options.headers, ...headers };
    let fullUrl = `${this.host}${url}`;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (method === HTTP.METHODS.GET && body) {
        fullUrl += `${queryStringify(body)}`;
      }

      xhr.open(method, fullUrl);
      xhr.onload = () => {
        resolve({
          ok: xhr.status === 200,
          status: xhr.status,
          statusText: xhr.statusText,
          data: (() => {
            try {
              return JSON.parse(xhr.response);
            } catch (e) {
              return {};
            }
          })(),
          dataText: xhr.response,
        });
      };
      xhr.timeout = timeout;
      xhr.withCredentials = true;
      xhr.ontimeout = reject;
      xhr.onabort = reject;
      xhr.onerror = reject;

      Object.keys(mergedHeaders).forEach((header) => {
        xhr.setRequestHeader(header, mergedHeaders[header]);
      });

      if (
        (
          method === HTTP.METHODS.POST
              || method === HTTP.METHODS.PUT
              || method === HTTP.METHODS.DELETE
        )
          && body
      ) {
        xhr.send(JSON.stringify(body));
      } else {
        xhr.send();
      }
    });
  }
}

export const APIInstance = new HTTP(`${settings.API.HOST}`);
export const authAPIInstance = new HTTP(`${settings.API.HOST}/auth`);
export const userAPIInstance = new HTTP(`${settings.API.HOST}/user`);
export const chatAPIInstance = new HTTP(`${settings.API.HOST}/chats`);

export default HTTP;
