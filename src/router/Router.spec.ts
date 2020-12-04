import { appRouter } from '@router/Router';
import Chat from '@pages/chat/Chat';
import { getType } from '@utils/helpers';

describe('Router', () => {
  describe('before add route', () => {
    test('appRouter should return empty array in routes', () => {
      expect(getType(appRouter.routes)).toEqual('array');
    });
  });

  describe('after add route', () => {
    test('should return 1 routes', () => {
      appRouter.use('/', Chat);
      expect(appRouter.routes.length).toEqual(1);
    });
  });
});
