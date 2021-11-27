const Controller = require('../../../src/controllers/recordController');

describe('Record controller', () => {
  describe('Controller', () => {
    test('should has get function', () => {
      expect(Controller).toHaveProperty('get');
    });
  });
});
