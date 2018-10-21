const request = require('supertest');
const app = require('../app');
const User = require('../models/User');
const db = require('../db');

const usersURL = '/users';

afterAll(done => {
  db.disconnect();
  done();
});

describe('User controller', () => {
  test(`${usersURL} responds with an error without JWT`, done => {
    request(app)
      .get(usersURL)
      .then(response => {
        expect(response.statusCode).toBe(401);
        done();
      });
  });

  test(`${usersURL}/add creates a new user`, done => {
    const testUser = { username: 'test_user', password: 'testpassword' };
    request(app)
      .post(`${usersURL}/add`)
      .send(testUser)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBeTruthy();
        User.findOne({ username: testUser.username }).then(user => {
          expect(user.username).toBe(testUser.username);
          User.deleteOne({ _id: user._id })
            .then(() => done())
            .catch(err => console.log(err));
        });
      });
  });
});
