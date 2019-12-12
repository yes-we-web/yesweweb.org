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
          res.should.have.status(201);
          done();
        });
    });
  });
});
