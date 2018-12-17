const utils=require('./utils');
const expect=require('expect');


describe('Utils',()=>{


  describe('#add',()=>{
    it('should add two nos',()=>{
      var res=utils.add(33,11);

      // if(res!==44){
      //   throw new Error(`res should be 44 but it is ${res}`);
      // }

      expect(res).toBe(44).toBeA('number');
    });  
  });


  it('should add two nos async',(done)=>{
    utils.asyncAdd(3,4,(sum)=>{
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square the no',()=>{
    var res=utils.square(5);
    // if(res!=25){
    //   throw new Error(`res should be 25 but it is ${res}`);
    // }

    expect(res).toBe(25).toBeA('number');
  });

  it('should square the no async',(done)=>{
    utils.asyncSquare(5,(square)=>{
      expect(square).toBe(25).toBeA('number');
      done();
    })
  });
});



it('should set name',()=>{
  var res=utils.setName({
    age:22,
    location: "Mumbai"
  },"Pranali Narkar");
  expect(res).toInclude({firstName:"Pranali",lastName:"Narkar"});
})
