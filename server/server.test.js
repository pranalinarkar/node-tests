const request=require('supertest');
const expect=require('expect');
const express=require('express');

var app=require('./server.js').app;


describe('Server',()=>{
  describe('#/',()=>{
    it('should check http req',(done)=>{
    request(app)
    .get('/')
    .expect(404)
    .expect((res)=>{
      expect(res.body).toInclude({
        error:'Page not found'
      });
    })
    //.expect(res.body).toInclude({
      //error:'Page not found'
    //})
    .end(done);
    });
  });
  describe('#/users',()=>{
    it('should chec array http',(done)=>{
      request(app)
      .get('/users')
      .expect((res)=>{
        expect(res.body).toInclude({
          name:'Pranali',
          age:22
        })
      })
      .end(done);
    });
  });

});
