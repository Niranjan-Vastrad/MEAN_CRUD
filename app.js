var express = require('express');
var chalk = require('chalk');
var bodyParser = require('body-parser');
var app = express();
var db = require('./model/db.js');
var routes = require('./routes');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//require('./model/schema.js');
app.set('view engine','ejs');

app.get('/',routes.home);
app.get('/api/employee',routes.getEmployees);
app.get('/api/employee/:id',routes.deleteEmployee);
app.post('/api/employee',routes.addEmployee);
app.post('/api/employee/:id',routes.updateEmployee);
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 5000;
app.listen(port,function(err){
  if(!err){
    console.log(chalk.green('Server running @ port: ',port));
  } else {
    console.log(chalk.red(err));
  }
});
