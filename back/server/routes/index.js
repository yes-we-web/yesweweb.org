import express from "express";
const router = express.Router();
const articlesController = require("../controllers").articles;

module.exports = router => {
  router.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!"
    })
  );

  router.post("/api/articles", articlesController.create);
  router.get("/api/articles", articlesController.list);
};
