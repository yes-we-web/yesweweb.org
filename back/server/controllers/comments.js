const Comments = require("../models").Comments;

module.exports = {
  create(req, res) {
    return Comments
      .create({
        content: req.body.content,
        articleId: req.params.articleId,
      })
      .then( (comments) => res.status(201).send(comments))
      .catch( (error) => res.status(400).send(error));
  },
  update(req, res) {
    return Comments
      .findOne({
          where: {
            id: req.params.commentsId,
            articleId: req.params.articleId,
          },
        })
      .then( (comments) => {
        if (!comments) {
          return res.status(404).send({
            message: 'Comments Not Found',
          });
        }
  
        return comments
          .update({
            content: req.body.content || comments.content,
            complete: req.body.complete || comments.complete,
          })
          .then( (updatedComments) => res.status(200).send(updatedComments))
          .catch( (error) => res.status(400).send(error));
      })
      .catch( (error) => res.status(400).send(error));
  },
  
  destroy(req, res) {
    return Comments
      .findOne({
          where: {
            id: req.params.commentsId,
            articleId: req.params.articleId,
          },
        })
      .then( (comments) => {
        if (!comments) {
          return res.status(404).send({
            message: 'Comments Not Found',
          });
        }
  
        return comments
          .destroy()
          .then(() => res.status(204).send())
          .catch( (error) => res.status(400).send(error));
      })
      .catch( (error) => res.status(400).send(error));
  },
};
