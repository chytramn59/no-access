const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

router.post("/user", userController.userCreate);
router.get("/getAll", userController.getAll);

module.exports = router;
