const expect=require('expect');
var db=require('./db.js');

module.exports.handleSignup=(email,password)=>{
  //Check the email exists
  db.saveUser({email,password});
  //Welcome the user
};
