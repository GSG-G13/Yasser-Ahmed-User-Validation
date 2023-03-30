const app = require('../app');
const request = require('supertest');
const { response } = require('../app');
// const { describe } = require('node:test');


describe('GET /', function() {
    it('responds with status 200', function(done) {
      request(app)
        .get('/')
        .expect("Content-Type",/text/)
        .expect(200, done);
    });
  });

  describe('GET /submit', function() {
    it('responds with status 200', function(done) {
      request(app)
        .get('/submit:email')
        .expect(200)
        .expect("Content-Type",/json/)
        .end((err, res) => {
            if (err) return done(err)
            .expect(typeof res.body).to.equal('object')
            .expect(typeof res.body.valid).to.equal('boolean');
            done();
          });
    });
  });

