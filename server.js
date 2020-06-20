const express = require ("express");

const app = express();

const bodyParser = require('body-parser');

const sequelize = require('./config');

const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.urlencoded({ extended : true}));//form data
app.use(bodyParser.json());//application/json

app.use('/api', userRoutes);

sequelize.sync().then(() => {
    var port = process.env.Port || 5000; //normal db connection
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`)
    });
  });