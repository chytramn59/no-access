const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const sequelize = require("./config");

const cors = require("cors");
const { user } = require("./routes");

app.use(bodyParser.urlencoded({ extended: true })); //form data
app.use(bodyParser.json()); //application/json

app.use(cors());
app.options("*", cors());

user(app);

app.get("/", (req, res) => {
  res.json({ title: "Welcome to App!!" });
});

sequelize.sync().then(() => {
  var port = process.env.Port || 5000; //normal db connection
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
});
