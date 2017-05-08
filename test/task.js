var expect = require("chai").expect;
var Task = require("../models/task");

describe('Task', function() {

  var t = new Task(1,'tarea 1',0)

  describe("properties", function(){
    it('should have a user property', function(){
      expect(t).to.have.property('user');
    });

    it('should have a content property', function(){
      expect(t).to.have.property('content');
    });

    it('should have a completed property', function(){
      expect(t).to.have.property('completed');
    });
  });
});
