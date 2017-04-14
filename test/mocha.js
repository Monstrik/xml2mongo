/**
 * Created by alexander on 4/13/17.
 */
//var assert = require('assert');
var chai = require('chai');
var assert = chai.assert;

// assert.typeOf(foo, 'string');
// assert.equal(foo, 'bar');
// assert.lengthOf(foo, 3)
// assert.property(tea, 'flavors');
// assert.lengthOf(tea.flavors, 3);


describe('Test mocha', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {

            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});