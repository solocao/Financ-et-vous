const express = require('express');
// const uuidV4 = require('uuid').v4;
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const test = require('./controllers/utilisateurControllers/get.utilisateur.js');

// Connection à la base de données
var database = require('./model/initBDD');
database.init();

// ?
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))
app.use(bodyParser(bodyParser.json()));

// Redirection vers le ficheir des routes
var indexRouter = require('./route/indexRoute.js');
app.use('/', indexRouter)
//app.get('/employee_dashboard', (req, res) => {res.json({msg: "bien recu"})});
setTimeout(function () {
  test.connex('roger', 'roger');
}
, 2000);

app.listen(3000);
