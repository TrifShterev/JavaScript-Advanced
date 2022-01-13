let describe = require('mocha').describe;
let assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookupChar tests',()=>{

    it('should return undefined',()=>{
        assert.isUndefined(lookupChar(1,1),'input 2 Numbers')
        assert.isUndefined(lookupChar('foo',2.2),'second para,eter is not an integer')
    });
    it('should return incorect index',()=>{
        assert.equal(lookupChar('abc',-1),"Incorrect index",'negative idex')
        assert.equal(lookupChar('abc',3),"Incorrect index",'equal to the string index')
        assert.equal(lookupChar('abc',4),"Incorrect index",'bigger index')
    });
    it('should return specified char',() =>{
        assert.equal(lookupChar('abc',1),'b', 'specific char')
    })
    
})