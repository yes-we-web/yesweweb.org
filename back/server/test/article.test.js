const chai = require("chai");
const route = require("../routes/index");
const chaiHttp = require("chai-http");
const should = chai.should();
const articles = require("../controllers").articles;

chai.use(chaiHttp);

describe("Articles", function() {
  describe("/GET Article", function() {
    it("GET status", done => {
      chai
        .request(articles)
        .get("/api/articles")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
