const pick = require('../../../src/utils/pick');

let result;

beforeAll(() => {
  result = pick({ body: { startDate: null, endDate: null, minCount: null, maxCount: null } }, ['params', 'query', 'body']);
});

describe('Pick', () => {
  describe('util', () => {
    test('should be return an object', () => {
      expect(result).toBeInstanceOf(Object);
    });
    test('should have property body', () => {
      expect(result).toHaveProperty('body');
    });
    test('should have property startDate', () => {
      expect(result.body).toHaveProperty('startDate');
    });
    test('should have property endDate', () => {
      expect(result.body).toHaveProperty('endDate');
    });
    test('should have property minCount', () => {
      expect(result.body).toHaveProperty('minCount');
    });
    test('should have property maxCount', () => {
      expect(result.body).toHaveProperty('maxCount');
    });
  });
});
