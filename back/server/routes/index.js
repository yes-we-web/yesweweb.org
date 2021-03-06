const express = require("express");
//const router = express.Router();
const articlesController = require("../controllers").articles;
const commentsController = require("../controllers").comments;
const categoriesController = require("../controllers").categories;
const usersController = require("../controllers").users;
const likesController = require("../controllers").likes;

module.exports = (router) => {
  router.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the yesweweb API!"
    })
  );

  // Likes
  router.post(
    "/api/articles/:articleId/reaction/like",
    likesController.likePost
  );

  // Users

  router.post("/api/users/register", usersController.register);
  router.post("/api/users/login", usersController.login);
  router.get("/api/users/profile", usersController.getUserProfile);
  router.put("/api/users/profile", usersController.updateUserProfile);
  router.get("/api/users", usersController.list);
  router.delete("/api/users/:userId", usersController.destroy);
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
  //Categories
  router.post(
    "/api/articles/:articleId/categories",
    categoriesController.create
  );
  router.put(
    "/api/articles/:articleId/comments/:commentsId",
    commentsController.update
  );
  router.delete(
    "/api/articles/:articleId/comments/:commentsId",
    commentsController.destroy
  );

  // Categories

  router.post(
    "/api/articles/:articleId/categories",
    categoriesController.create
  );
  router.put(
    "/api/articles/:articleId/categories/:categoriesId",
    categoriesController.update
  );
  router.delete(
    "/api/articles/:articleId/categories/:categoriesId",
    categoriesController.destroy
  );
  // Pour toute autre méthode de requête sur les éléments à faire, nous allons retourner "Méthode non autorisée"
  router.all("/api/articles/:articleId/comments", (req, res) =>
    res.status(405).send({
      message: "Method Not Allowed"
    })
  );
};
