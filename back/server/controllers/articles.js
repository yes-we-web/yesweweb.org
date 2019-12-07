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
  }
};