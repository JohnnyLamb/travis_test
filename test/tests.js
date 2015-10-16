process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../server/app');
var should = chai.should();
chai.use(chaiHttp);

describe('Go to Home Page', function() {
  it('should return 200 status when visiting /', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
  it('should return 400 status when visiting /', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.should.not.have.status(400);
        done();
      });
  });
  it('should return 500 status when visting /',function(done){
    chai.request(server)
    .get('/')
    .end(function(err,res){
      res.should.not.have.status(500);
      done();
    });
  });
});
