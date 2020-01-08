const Likes = require("../models").Likes;
const Articles = require("../models").Articles;
const Users = require("../models").Users;

const jwtUtils = require("../../utils/jwt.utils");

module.exports = {
  likePost(req, res) {
    const headerAuth = req.headers["authorization"];
    const userId = jwtUtils.getUserId(headerAuth);

    let articleId = parseInt(req.params.articleId);

    if (article <= 0) {
      return res.status(400).json({ error: "invalid parameters" });
    }

    Articles.findOne({
      where: { id: articleId }
    })
      .then(function(articleFound) {
        if (articleFound) {
          Users.findOne({
            where: { id: userId }
          })
            .then(function(userFound) {
              if (userFound) {
                Likes.findOne({
                  where: {
                    userId: userId,
                    articleId: articleId
                  }
                })
                  .then(function(ifUserAlreadyLiked) {
                    if (!ifUserAlreadyLiked) {
                      articleFound
                        .addUser(userFound)
                        .then(function(alreadyLikeFound) {
                          articleFound
                            .update({
                              likes: articleFound.likes + 1
                            })
                            .then(function() {
                              if (articleFound) {
                                return res.status(201).json(articleFound);
                              } else {
                                return res.status(500).json({
                                  error: "cannot update article"
                                });
                              }
                            })
                            .catch(function(err) {
                              res.status(500).json({
                                error: "cannot update article like counter"
                              });
                            });
                        })
                        .catch(function(err) {
                          return res.status(500).json({
                            error: "unable to set user reaction"
                          });
                        });
                    } else {
                      res.status(409).json({
                        error: "article already liked"
                      });
                    }
                  })
                  .catch(function(err) {
                    return res.status(500).json({
                      error: "unable to verify if user already liked"
                    });
                  });
              } else {
                res.status(404).json({ error: "user not exist" });
              }
            })
            .catch(function(err) {
              return res.status(500).json({ error: "unable to verify user" });
            });
        } else {
          res.status(404).json({ error: "post already liked" });
        }
      })
      .catch(function(err) {
        return res.status(500).json({ error: "unable to verify article" });
      });
  }
};
