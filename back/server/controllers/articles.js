const Article = require("../models").Article;

module.exports = {
  create(req, res) {
    return Article.create({
      title: req.body.title,
      content: req.body.content
    })
      .then(article => res.status(201).send(article))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Article.findAll()
      .then(articles => res.status(200).send(articles))
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Article
      .findByPk(req.params.articleId)
      .then(article => {
        if (!article) {
          return res.status(400).send({
            message: 'Article Not Found',
          });
        }
        return article
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Article
      .findByPk(req.params.articleId, {

      })
      .then(article => {
        if (!article) {
          return res.status(404).send({
            message: 'Article Not Found',
          });
        }
        return res.status(200).send(article);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Article
      .findByPk(req.params.articleId, {

      })
      .then(article => {
        if (!article) {
          return res.status(404).send({
            message: 'Article Not Found',
          });
        }
        return article
          .update({
            title: req.body.title || article.title,
            content: req.body.content || article.content
          })
          .then(() => res.status(200).send(article))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
