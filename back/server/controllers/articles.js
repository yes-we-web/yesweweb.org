const Articles = require("../models").Articles;
const Comments = require("../models").Comments;
const Categories = require("../models").Categories;
const Users = require("../models").Users;
const jwtUtils = require("../../utils/jwt.utils");

module.exports = {
  create(req, res) {
    const headerAuth = req.headers["authorization"];
    const userId = jwtUtils.getUserId(headerAuth);

    const title = req.body.title;
    const content = req.body.content;

    if (title === null || content === null) {
      return res.status(400).json({ error: "missing parameters" });
    }

    Users.findOne({
      where: { id: userId }
    })
      .then(function(userFound) {
        if (userFound) {
          Articles.create({
            title: title,
            content: content,
            likes: 0,
            userId: userFound.id
          }).then(function(newMessage) {
            if (newMessage) {
              return res.status(201).json(newMessage);
            } else {
              return res.status(500).json({ error: "cannot post article" });
            }
          });
        } else {
          res.status(404).json({ error: "user not found " });
        }
      })
      .catch(function(err) {
        return res.status(500).json({ error: "unable to verify user" });
      });
  },
  // list comments in article
  async list(req, res) {
    let result = await Articles.findAll({
      include: [
        {
          model: Categories,
          as: "categories"
        },
        {
          model: Comments,
          as: "comments"
        }
      ]
    })
      .then(articles => res.status(200).send(articles))
      .catch(error => res.status(400).send(error));
    return result;
  },
  async destroy(req, res) {
    let result = Articles.findByPk(req.params.articleId)
      .then(article => {
        if (!article) {
          return res.status(400).send({
            message: "Article Not Found"
          });
        }
        return article
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
    return result;
  },

  async retrieve(req, res) {
    let result = await Articles.findByPk(req.params.articleId, {
      include: [
        {
          model: Comments,
          as: "comments"
        },
        { model: Categories, as: "categories" }
      ]
    })
      .then(article => {
        if (!article) {
          return res.status(404).send({
            message: "Article Not Found"
          });
        }
        return res.status(200).send(article);
      })
      .catch(error => res.status(400).send(error));
    return result;
  },
  async update(req, res) {
    let result = await Articles.findByPk(req.params.articleId, {
      include: [
        {
          model: Comments,
          as: "comments"
        },
        { model: Categories, as: "categories" }
      ]
    })
      .then(article => {
        if (!article) {
          return res.status(404).send({
            message: "Article Not Found"
          });
        }
        return article
          .update({
            title: req.body.title || article.title,
            content: req.body.content || article.content
          })
          .then(() => res.status(200).send(article)) // Send back the updated article.
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
    return result;
  }
};
