const Categories = require("../models").Categories;

module.exports = {
  async create(req, res) {
    let result = await Categories.create({
      content: req.body.content,
      articleId: req.params.articleId
    })
      .then(categories => res.status(201).send(categories))
      .catch(error => res.status(400).send(error));
    return result;
  }
};
