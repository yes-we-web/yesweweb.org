const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const app = require("../../app");

chai.use(chaiHttp);

describe("Categories", function() {
  describe("/POST Categories", function() {
    it("POST status", done => {
      chai
        .request(app)
        .post("/api/articles/:articleId/categories")
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
