const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const app = require("../../app");
chai.use(chaiHttp);

describe("/GET api", function() {
  it("GET status", (done) => {
    chai
      .request(app)
      .get("/api")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
