let describe = require('mocha').describe;
let assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('Tests undefined',()=>{

    it('should return undefined',()=>{
        assert.isUndefined(isOddOrEven(1),'input Number')
    });
    it('should return even',()=>{
        assert.equal(isOddOrEven('ab'),'even')
    });
    it('should return odd',()=>{
        assert.equal(isOddOrEven('abc'),'odd')
    });
})
