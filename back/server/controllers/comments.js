const Comments = require('../models').Comments;

module.exports = {
  create(req, res) {
    return Comments
      .create({
        content: req.body.content,
        articleId: req.params.articleId,
      })
      .then(comments => res.status(201).send(comments))
      .catch(error => res.status(400).send(error));
  },
};