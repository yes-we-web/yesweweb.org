const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const app = require("../../app");

chai.use(chaiHttp);

describe("App", function() {
    describe("/GET App", function() {
      it("GET status", (done) => {
        chai
          .request(app)
          .get("/*")
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

//server>routes>index
// Méthode non autorisée
describe("/ALL method", function() {
  it("ALL status", (done) => {
    chai
      .request(app)
      .get("/api/articles/:articleId/comments")
      .end((err, res) => {
        res.should.have.status(405);
        done();
      });
  });
});
});