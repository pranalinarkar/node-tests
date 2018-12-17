const expect=require('expect');
const rewire=require('rewire');

var app=rewire('./app.js');


describe('App',()=>{
var db={
  saveUser:expect.createSpy()
};
app.__set__('db',db);


  it('spy should work correctly',()=>{
    var spy=expect.createSpy()
    spy('Pranali');
    expect(spy).toHaveBeenCalledWith('Pranali');
  });

  it('it should svae user object',()=>{
    var email='pnarakar2gmail.com';
    var password='1234';
    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });
});
