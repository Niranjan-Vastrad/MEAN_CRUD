var mongoose = require('mongoose');
var chalk = require('chalk');
// connect using standard mongoDB URI
//Eg: mongodb://<USERNAME>:<PASSWORD>@ds123456.mlab.com:23456/<Database-Name>
var dbURI = "";
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log(chalk.yellow('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error', function (err) {
  console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});
var employee = new mongoose.Schema({
  name:String,
  email:String,
  dob:String,
  department:String,
  gender:String
});
mongoose.model( 'employee', employee);
