const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const app = require("../../app");

chai.use(chaiHttp);

describe("Articles", function() {
  describe("/GET Article", function() {
    it("GET status", done => {
      chai
        .request(app)
        .get("/api/articles")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe("/POST Article", function() {
    it("POST status", done => {
      chai
        .request(app)
        .post("/api/articles")
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });
  describe("/DELETE Article", function() {
    it("DELETE status", done => {
      chai
        .request(app)
        .delete("/api/articles/:articleId")
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
  describe("/PUT Article", function() {
    it("PUT status", done => {
      chai
        .request(app)
        .put("/api/articles/:articleId")
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
