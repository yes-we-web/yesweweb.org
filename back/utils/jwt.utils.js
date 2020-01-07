const jwt = require("jsonwebtoken");
const JWT_SIGN_SECRET = "08jisjd0ydauiahddhjnsdqjdnao5jaijd7382jadaijowolf69";
module.exports = {
  generateTokenForUser: function(userData) {
    return jwt.sign(
      {
        userId: userData.id,
        isAdmin: userData.isAdmin
      },
      JWT_SIGN_SECRET,
      {
        expiresIn: "1h"
      }
    );
  },
  parseAuthorization: function(authorization) {
    return authorization != null ? authorization.replace("Bearer ", "") : null;
  },
  getUserId: function(authorization) {
    let userId = -1;
    const token = module.exports.parseAuthorization(authorization);
    if (token != null) {
      try {
        const jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        if (jwtToken != null) userId = jwtToken.userId;
      } catch (err) {}
    }
    return userId;
  }
};
