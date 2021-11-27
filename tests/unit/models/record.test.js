const { Record } = require('../../../src/models');

describe('Record model', () => {
  describe('Record', () => {
    test('should has important properties', () => {
      expect(Record.schema).toHaveProperty('obj');
    });
    test('should has getBetween function', () => {
      expect(Record).toHaveProperty('getBetween');
    });
    test('should have property createdAt', () => {
      expect(Record.schema.obj).toHaveProperty('createdAt');
    });
    test('should have property counts', () => {
      expect(Record.schema.obj).toHaveProperty('counts');
    });
    test('should have property key', () => {
      expect(Record.schema.obj).toHaveProperty('key');
    });
    test('should have property value', () => {
      expect(Record.schema.obj).toHaveProperty('value');
    });
  });
});
