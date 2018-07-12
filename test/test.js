const assert = require('assert');
const Hello = require('../src/index');

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });

    });
});

describe('Mongo', function() {
    describe('#connect_check', function() {

        it('mongo startup log length should be greater than 1', function(){
            const data = new Hello().getStartupLog();
            data.then(function(result){
                assert.ok(result.length >= 1);
            });
        })
    });
});