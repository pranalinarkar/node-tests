const express=require('express');

var app=express();

app.get('/',(req,res)=>{
  res.status(404).send({
    error:'Page not found',
  name:'ToDo v1.0'});
});

app.get('/users',(req,res)=>{
  res.send([{
    name:'Pranali',
  age:22},
{
  name:'Priyal',
  age:20
},{
  name:'Nikhil',
  age:24
}]);
});

app.listen(3000);

module.exports.app=app;
