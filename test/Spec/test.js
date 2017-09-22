define(['../../node_modules/chai/chai'],function(chai){
    console.log('testing test-file', testFile);
var assert = chai.assert;
    describe('Testing testing', function(){
        it('should work', function(){
            var arr = [];
             assert.equal(arr.length, 0);
        });
    });

});