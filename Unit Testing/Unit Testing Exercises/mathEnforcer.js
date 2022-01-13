let describe = require('mocha').describe;
let assert = require('chai').assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('mathEnforcer', () => {
    
    describe('add', () => {
        it('should return undefined', () => {
            assert.isUndefined(mathEnforcer.addFive('foo'))
            assert.isUndefined(mathEnforcer.addFive(undefined))
            
        })
        it('should return corect answer', () => {
            assert.equal(mathEnforcer.addFive(0),5)
            assert.equal(mathEnforcer.addFive(-1),4)
            assert.equal(mathEnforcer.addFive(-6),-1)
            assert.equal(mathEnforcer.addFive(1.2),6.2)
        })
    })
    describe('substring',()=>{
        it('should return undefined', () => {
            assert.isUndefined(mathEnforcer.subtractTen('foo'))
            assert.isUndefined(mathEnforcer.subtractTen(undefined))
            
        })
        it('should return corect answer', () => {
            assert.equal(mathEnforcer.subtractTen(0),-10)
            assert.equal(mathEnforcer.subtractTen(1),-9)
            assert.equal(mathEnforcer.subtractTen(-10),-20)
            assert.equal(mathEnforcer.subtractTen(11.2),1.1999999999999993)
            assert.equal(mathEnforcer.subtractTen(10),0)
            assert.equal(mathEnforcer.subtractTen(100),90)
        })
    })

    describe('sum', () => {
        it('should return undefined', () => {
            assert.isUndefined(mathEnforcer.sum('foo','foo'))
            assert.isUndefined(mathEnforcer.sum(1,'foo'))
            assert.isUndefined(mathEnforcer.sum('foo',1))
            assert.isUndefined(mathEnforcer.sum(undefined,1))
            assert.isUndefined(mathEnforcer.sum(1,undefined))
            
        })
        it('should return corect answer', () => {
            assert.equal(mathEnforcer.sum(0,1),1)
            assert.equal(mathEnforcer.sum(-1,4),3)
            assert.equal(mathEnforcer.sum(-6,-1),-7)
            assert.equal(mathEnforcer.sum(1.2,6.2),7.4)
        })
    })
})

