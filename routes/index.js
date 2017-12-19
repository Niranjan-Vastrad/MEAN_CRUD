var mongoose = require('mongoose');
var emp = mongoose.model('employee');
exports.getEmployees = function(req,res){
  emp.find({},function(err,obj){
    if(!err){
      res.send({employees:obj});
    } else {
      res.send({'error':'Error occured'});
    }
  });
}
exports.home = function(req,res){
  res.render('index');
}
exports.addEmployee = function(req,res){
  console.log(req.body);
  var nemp = new emp();
  nemp.name = req.body.name;
  nemp.dob = req.body.dob;
  nemp.gender = req.body.gender;
  nemp.department = req.body.department;
  nemp.email = req.body.email;
  nemp.save(function(err,obj){
    if(!err){
  res.send({'message':'Success'});
    } else {
  res.send({'message':'Error'});
    }
  })

}

exports.updateEmployee = function(req,res){
 console.log(req.body) ;
 var object = {
  department: req.body.department,
  gender: req.body.gender,
  dob: req.body.dob,
  name: req.body.name,
  email:req.body.email
 }
emp.findOneAndUpdate({_id:req.body._id}, object , function(err){
  if(!err){
    res.send({'message':'Success'});
  } else {
    res.send({'message':'Error'});
  }

 })
}
exports.deleteEmployee = function(req,res){
  var id = req.params.id;
  emp.remove({_id:id},function(err,resObj){
    if(err){
      res.send({'message':'Error'});
    } else {
      res.send({'message':'Success'});
    }
  })
}
