// Generated by CoffeeScript 1.12.4
(function() {
  (require("chai")).should();

  describe("form reducer", function() {
    var A, R;
    R = require("../../src/reducers/form");
    A = require("../../src/Actions");
    it("should be a function", function() {
      return R.should.be.a("function");
    });
    return describe("'edit' form", function() {
      return it("sets the 'lat' and 'lng' fields if a marker was set", function() {
        var action, asyncAction, dispatch, getState, s;
        action = null;
        asyncAction = A.setMarker({
          lat: 5,
          lng: 7
        });
        getState = function() {
          return {};
        };
        dispatch = function(arg) {
          return action = arg;
        };
        asyncAction(dispatch, getState);
        s = R({}, action).edit;
        s.values.lat.should.equal(5);
        return s.values.lng.should.equal(7);
      });
    });
  });

}).call(this);