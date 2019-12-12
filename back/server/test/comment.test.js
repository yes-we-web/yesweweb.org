const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const app = require("../../app");

chai.use(chaiHttp);

describe("Comments", function() {
  describe("/POST Comments", function() {
    it("POST status", done => {
      chai
        .request(app)
        .post("/api/articles/:articleId/comments")
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
  describe("/DELETE Comments", function() {
    it("DELETE status", done => {
      chai
        .request(app)
        .delete("/api/articles/:articleId/comments/:commentsId")
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
  describe("/PUT Comments", function() {
    it("PUT status", done => {
      chai
        .request(app)
        .put("/api/articles/:articleId/comments/:commentsId")
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
