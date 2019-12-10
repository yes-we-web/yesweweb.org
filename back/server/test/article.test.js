const chai = require("chai");
const route = require("../routes/index");
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
    it("GET status", done => {
      chai
        .request(app)
        .post("/api/articles")
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });
});
