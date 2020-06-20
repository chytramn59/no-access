const User = require("../models/userModel");

// POST METHOD
exports.userCreate = (req, res) => {
  return User.create({
    userName: req.body.userName,
    name: req.body.name,
  }).then((users) => {
    if (users) {
      res.send({ id: users.id }); //only id will be sent in json format
    } else {
      res.status(400).send("Error in insert new record");
    }
  });
};

// GET by ID METHOD
exports.getAll = (req, res) => {
  var id = req.body.id;
  return User.findAll({ where: { id: id } }, { query: { raw: true } }).then(
    (users) => {
      if (users) {
        res.send(users);
      } else {
        res.status(400).send("No users in record");
      }
    }
  );
};
