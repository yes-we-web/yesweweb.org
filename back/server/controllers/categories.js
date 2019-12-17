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
  },
  async update(req, res) {
    let result = await Categories.findOne({
      where: {
        id: req.params.categoriesId,
        articleId: req.params.articleId
      }
    })
      .then(categories => {
        if (!categories) {
          return res.status(404).send({
            message: "categories Not Found"
          });
        }
        return categories
          .update({
            content: req.body.content || categories.content,
            complete: req.body.complete || categories.complete
          })
          .then(updatedCategories => res.status(200).send(updatedCategories))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
    return result;
  },
  async destroy(req, res) {
    let result = await Categories.findOne({
      where: {
        id: req.params.categoriesId,
        articleId: req.params.articleId
      }
    })
      .then(categories => {
        if (!categories) {
          return res.status(404).send({
            message: "Categories Not Found"
          });
        }

        return categories
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
    return result;
  }
};
