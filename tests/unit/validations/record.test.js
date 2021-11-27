const { forRecords } = require('../../../src/validations/record');

describe('Record', () => {
  describe('validations', () => {
    test('should be 4 properties', () => {
      expect(forRecords.body._ids._byKey.size).toBe(4);
    });
  });
});
