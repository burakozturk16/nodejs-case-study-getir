const Joi = require('joi');
const httpMocks = require('node-mocks-http');
const validate = require('../../../src/middlewares/validate');

describe('Validate middleware', () => {
  describe('validate', () => {
    test('should defined', () => {
      const schema = {
        body: Joi.object({
          startDate: new Date('2016-01-26'),
          endDate: new Date('2019-01-26'),
          minCount: 2700,
          maxCount: 2900,
        }),
      };

      const next = jest.fn();
      const result = validate(schema, httpMocks.createRequest(), httpMocks.createResponse(), next);
      expect(result).toBeDefined();
    });
  });
});
