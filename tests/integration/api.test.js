const request = require('supertest');
const app = require('../../src/app');
const config = require('../../src/config/config');
const { connect, disconnect } = require('../database');

beforeAll(() => {
  connect();
});

afterAll(async () => {
  disconnect();
  await new Promise((resolve) => setTimeout(() => resolve(), 1000));
});

describe('Test routes', () => {
  describe('GET /v1/record', () => {
    // eslint-disable-next-line jest/no-done-callback
    test('should return 500 in production', async (done) => {
      config.env = 'production';
      await request(app).get('/v1/record').send().expect(500);
      config.env = process.env.NODE_ENV;
      done();
    });
  });
  describe('POST /v1/records with missed body', () => {
    // eslint-disable-next-line jest/no-done-callback
    test('should return 500', async (done) => {
      config.env = 'production';
      await request(app)
        .post('/v1/records')
        .send({
          finish: '2016-01-26',
        })
        .expect(500);
      config.env = process.env.NODE_ENV;
      done();
    });
  });
  describe('POST /v1/records with invalid body', () => {
    // eslint-disable-next-line jest/no-done-callback
    test('should return 500', async (done) => {
      config.env = 'production';
      await request(app)
        .post('/v1/records')
        .send({
          startDate: '2016-01-26',
          endDate: '2019-01-26',
          minCount: 2700,
          maxCount: 290,
        })
        .expect(500);
      config.env = process.env.NODE_ENV;
      done();
    });
  });
  describe('POST /v1/records', () => {
    // eslint-disable-next-line jest/no-done-callback
    test('should return 200', async (done) => {
      config.env = 'test';
      request(app)
        .post('/v1/records')
        .send({
          startDate: '2016-01-26',
          endDate: '2019-01-26',
          minCount: 2700,
          maxCount: 2900,
        })
        .expect(200);
      done();
      config.env = process.env.NODE_ENV;
    });
  });
});
