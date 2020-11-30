import {IRequestOptions, IAnyObject} from "../utils/ts/interfaces";
import {queryStringify}              from "../utils/helpers";
import settings                      from "../settings/base";

interface IHTTPOptions {
  headers?: { [key: string]: string; }
}

class HTTP {
  static METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  };

  host: string;
  options: IHTTPOptions;

  constructor(host: string = "", options: IHTTPOptions = {}) {
    const _defaults: IHTTPOptions = {
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
    };

    this.host = host;
    this.options = {
      ..._defaults,
      ...options,
    };
  }

  get(url: string, options: IRequestOptions = {}) {
    return this._request(url, {
      ...options,
    }, options.timeout);
  }

  post(url: string, options: IRequestOptions = {}) {
    return this._request(url, {
      ...options,
      method: HTTP.METHODS.POST,
    }, options.timeout);
  }

  put(url: string, options: IAnyObject = {}) {
    return this._request(url, {
      ...options,
      method: HTTP.METHODS.PUT,
    }, options.timeout);
  }

  delete(url: string, options: IRequestOptions = {}) {
    return this._request(url, {
      ...options,
      method: HTTP.METHODS.DELETE,
    }, options.timeout);
  }

  protected _request(url: string, options: IRequestOptions, timeout: number = 5000) {
    const {method = HTTP.METHODS.GET, headers, body} = options;
    const mergedHeaders = {...this.options.headers, ...headers};
    url = `${this.host}${url}`;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (method === HTTP.METHODS.GET && body) {
        url += queryStringify(body);
      }

      xhr.open(method, url);
      xhr.onload = function() {
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

      for (let header in mergedHeaders) {
        xhr.setRequestHeader(header, mergedHeaders[header]);
      }

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