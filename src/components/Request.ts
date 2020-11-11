import {IRequestOptions} from '../utils/ts/interfaces';
import {queryStringify} from "../utils/helpers";

export default class Request {
    static METHODS = {
        GET: 'GET',
        PUT: 'PUT',
        POST: 'POST',
        DELETE: 'DELETE'
    };

    public get(url: string, options: IRequestOptions = {}) {
        return this._request(url, {
            ...options,
            method: Request.METHODS.GET,
        }, options.timeout);
    }

    public post(url: string, options: IRequestOptions = {}) {
        return this._request(url, {
            ...options,
            method: Request.METHODS.POST,
        }, options.timeout);
    }

    public put(url: string, options: IRequestOptions = {}) {
        return this._request(url, {
            ...options,
            method: Request.METHODS.PUT,
        }, options.timeout);
    }

    public delete(url: string, options: IRequestOptions = {}) {
        return this._request(url, {
            ...options,
            method: Request.METHODS.DELETE,
        }, options.timeout);
    }

    protected _request(url: string, options: IRequestOptions, timeout: number = 5000) {
        let {method, headers, data} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            if (method === undefined) {
                method = 'GET';
            }

            if (method === Request.METHODS.GET && data) {
                url += queryStringify(data)
            }

            console.log(url)

            xhr.open(method, url);

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.timeout = timeout;
            xhr.ontimeout = reject;
            xhr.onabort = reject;
            xhr.onerror = reject;

            if (headers) {
                for (let header in headers) {
                    xhr.setRequestHeader(`${header}`, `${headers[header]}`);
                }
            }

            if (
                (method === Request.METHODS.POST || method === Request.METHODS.PUT)
                && data
            ) {
                xhr.send(JSON.stringify(data));
            } else {
                xhr.send();
            }
        });
    }
}