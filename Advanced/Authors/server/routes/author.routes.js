const AuthorController = require("../controllers/author.controller");

module.exports = app => {
  app.get("/authors/", AuthorController.findAllAuthors);
  app.get("/authors/:id", AuthorController.findOneSingleAuthor);
  app.put("/authors/edit/:id", AuthorController.updateExistingAuthor);
  app.post("/authors/new", AuthorController.createNewAuthor);
  app.delete("/authors/delete/:id", AuthorController.deleteAnExistingAuthor);
};