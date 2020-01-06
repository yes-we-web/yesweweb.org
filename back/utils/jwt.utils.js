const jwt = require("jsonwebtoken");
const JWT_SIGN_SECRET = "08jisjd0ydauiahddhjnsdqjdnao5jaijd7382jadaijowolf69";
module.exports = {
  generateTokenForUser: function(userData) {
    return jwt.sign({
      userId: userData.id,
      isAdmin: userData.isAdmin
    });
  }
};
