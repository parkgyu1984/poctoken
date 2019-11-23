var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./router')(app);

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) { //1
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type');
  next();
});

// API
//app.use('/api/heroes', require('./api/heroes.js'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Server
var port = 3000;
app.listen(port, function(){
  console.log('listening on port:' + port);
});

