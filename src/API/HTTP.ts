import {IRequestOptions, IAnyObject} from '../utils/ts/interfaces';
import {queryStringify} from "../utils/helpers";
import {HOST} from '../constants'

class HTTP {
    static METHODS = {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE'
    };

    public host: string;

    constructor(host: string = '') {
        this.host = host;
    }


    public get(url: string, options: IRequestOptions = {}) {
        return this._request(url, {
            ...options,
            method: HTTP.METHODS.GET,
        }, options.timeout);
    }

    public post(url: string, options: IRequestOptions = {}) {
        return this._request(url, {
            ...options,
            method: HTTP.METHODS.POST,
        }, options.timeout);
    }

    public put(url: string, options: IAnyObject = {}) {
        return this._request(url, {
            ...options,
            method: HTTP.METHODS.PUT,
        }, options.timeout);
    }

    public delete(url: string, options: IRequestOptions = {}) {
        return this._request(url, {
            ...options,
            method: HTTP.METHODS.DELETE,
        }, options.timeout);
    }

    protected _request(url: string, options: IRequestOptions, timeout: number = 5000) {
        let {method, headers, body} = options;
        url = `${this.host}${url}`;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            if (method === undefined) {
                method = 'GET';
            }

            if (method === HTTP.METHODS.GET && body) {
                url += queryStringify(body)
            }

            xhr.open(method, url);
            xhr.onload = function () {
                resolve(xhr);
            };
            xhr.timeout = timeout;
            xhr.withCredentials = true;
            xhr.ontimeout = reject;
            xhr.onabort = reject;
            xhr.onerror = reject;

            if (headers) {
                for (let header in headers) {
                    xhr.setRequestHeader(`${header}`, `${headers[header]}`);
                }
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

export const APIInstance = new HTTP(`${HOST}`);
export const authAPIInstance = new HTTP(`${HOST}/auth`);
export const userAPIInstance = new HTTP(`${HOST}/user`);
export const chatAPIInstance = new HTTP(`${HOST}/chats`);

export default HTTP