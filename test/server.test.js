const request = require('supertest');
const app = require('../app');

describe('app is alive', () => {
  test('"/" responds with awake message', done => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.awake).toBeTruthy();
        done();
      });
  });
});
