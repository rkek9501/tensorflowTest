var express = require('express');
var app = express();

// var app = express();
var logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/'));

/* GET home page. */
app.get('/', function(req, res) {
  console.log('index')
  res.render('index.html');
});

const SERVER_PROT = 8000;
app.listen(SERVER_PROT, function() {
  console.log(`Express server listening on port ${SERVER_PROT}`);
});