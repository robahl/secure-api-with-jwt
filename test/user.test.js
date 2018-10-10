const request = require('supertest');
const app = require('../app');
const User = require('../models/User');
const db = require('../db');

const usersURL = '/users';

afterAll((done) => {
  db.disconnect();
  done();
});

describe('User controller', () => {
  test(`${usersURL} responds with an error without JWT`, (done) => {
    request(app).get(usersURL).then(response => {
      expect(response.statusCode).toBe(401);
      done();
    });
  });
});
