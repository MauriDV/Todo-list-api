var expect = require("chai").expect;
var User = require("../models/user");

describe('User', function() {

  var u = new User('Mauri','test1')

  describe("properties", function(){
    it('should have a username property', function(){
      expect(u).to.have.property('username');
    });

    it('should have a password property', function(){
      expect(u).to.have.property('password');
    });
  });
});
