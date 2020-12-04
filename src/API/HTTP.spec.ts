import HTTP, { APIInstance } from './HTTP';

import settings from '../settings/base';

describe('HTTP', () => {
  it('should has required keys in METHODS', () => {
    expect(HTTP.METHODS).toHaveProperty('GET');
    expect(HTTP.METHODS).toHaveProperty('POST');
    expect(HTTP.METHODS).toHaveProperty('PUT');
    expect(HTTP.METHODS).toHaveProperty('DELETE');
  });

  it('should has host', () => {
    expect(APIInstance.host).toEqual(settings.API.HOST);
  });

  it('should call HTTP._request with method: POST', () => {
    APIInstance._request = jest.fn().mockImplementation((opts) => Promise.resolve(opts));
    APIInstance.post('/user');
    expect(APIInstance._request).toBeCalledWith('/user', { method: 'POST' }, undefined);
  });
});
