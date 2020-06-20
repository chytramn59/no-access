const userController = require("../controllers/userController");

const userRoutes = (app) => {
  app.post("/api/v1/user", userController.create);
  app.get("/api/v1/user", userController.getById);
};

module.exports = userRoutes;
