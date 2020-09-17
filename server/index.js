const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
// const session = require('express-session');
// const passport = require('passport');

app.use(express.static(path.join(__dirname, '../public')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../bundle.js'));
});

app.use(function (req, res, next) {
  const err = new Error('Oops, this is not a page!');
  err.status = 404;
  res.send('404 Error');
  next(err);
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send('Internal Error, our bad!')
});

module.exports = app;

app.listen(PORT, function () {
  console.log(`I took a trip to the port ${PORT}, this port had gone multiplatinum`);
});
