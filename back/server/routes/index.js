import express from "express";
const router = express.Router();
const articlesController = require("../controllers").articles;

module.exports = router => {
  router.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!"
    })
  );
  //Articles
  router.post("/api/articles", articlesController.create);
  router.get("/api/articles", articlesController.list);
  router.delete('/api/articles/:articleId', articlesController.destroy);
  router.get('/api/articles/:articleId', articlesController.retrieve);
  router.put('/api/articles/:articleId', articlesController.update);
};
