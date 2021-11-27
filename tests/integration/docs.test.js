const request = require('supertest');
const app = require('../../src/app');
const config = require('../../src/config/config');

describe('Auth routes', () => {
  describe('GET /v1/docs', () => {
    test('should return 500 when running in production', async () => {
      config.env = 'production';
      await request(app).get('/v1/docs').send().expect(500);
      config.env = process.env.NODE_ENV;
    });
  });
});
