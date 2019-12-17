const express = require("express");
//const router = express.Router();
const articlesController = require("../controllers").articles;
const commentsController = require("../controllers").comments;
const categoriesController = require("../controllers").categories;

module.exports = (router) => {
  router.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the yesweweb API!"
    })
  );
  //Articles
  router.post("/api/articles", articlesController.create);
  router.get("/api/articles", articlesController.list);
  router.delete("/api/articles/:articleId", articlesController.destroy);
  router.get("/api/articles/:articleId", articlesController.retrieve);
  router.put("/api/articles/:articleId", articlesController.update);

  //Comments
  router.post("/api/articles/:articleId/comments", commentsController.create);
  router.put(
    "/api/articles/:articleId/comments/:commentsId",
    commentsController.update
  );
  router.delete(
    "/api/articles/:articleId/comments/:commentsId",
    commentsController.destroy
  );

  // Categories

  router.post('/api/articles/:articleId/categories', categoriesController.create);

  // Pour toute autre méthode de requête sur les éléments à faire, nous allons retourner "Méthode non autorisée"
  router.all("/api/articles/:articleId/comments", (req, res) =>
    res.status(405).send({
      message: "Method Not Allowed"
    })
  );
};