const express = require('express');

const mongoose=require('mongoose');
const Employee = mongoose.model('Employee')
var router= express.Router();

router.get('/',(req,res)=>{
    res.render("employee/addOrEdit",{
        viewTitle: "Insert Employee"
    });
});

router.post('/',(req,res)=>{
    insertRecord(req,res);
});

function insertRecord(req,res){
  
  var employee= new Employee();
  employee.fullName=req.body.fullName;
  employee.email=req.body.email;
  employee.mobile=req.body.mobile;
  employee.city=req.body.city;
  employee.save((err,doc)=>{
      if(!err)
      res.redirect('employee/list')
      else{
          console.log('Error During insertion: '+ err);
      }
  });
}


router.get('/list',(req,res)=>{
   
    Employee.find({}).lean().exec(function(err,docs){
       if(!err){
           res.render("employee/list",{ 
               list:docs
           });
       }
       else{
           console.log('Error in retreiveing employee list: ' + err);
       }
    });
});

module.exports=router;