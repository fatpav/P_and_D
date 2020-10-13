const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint.js');

describe('Decorator', function(){

    let decorator;
    beforeEach(function(){
        can1 = new PaintCan(2);
        can2 = new PaintCan(9);
        can3 = new PaintCan(8);
        can4 = new PaintCan(3);
        can5 = new PaintCan(1);
        decorator = new Decorator()
    })

    it('should have no paint cans in stock', function(){
        const actual = decorator.stock
        assert.deepStrictEqual(actual, []);
    })

    it('should have paint cans in stock', function(){
        const actual = decorator.stock;
        decorator.getCans(can1);
        assert.deepStrictEqual(actual, [can1])
    });
    
    it('should have many paint cans in stock', function(){
        const actual = decorator.stock;
        const canOne = decorator.getCans(can1);
        const canTwo = decorator.getCans(can2);
        const canThree = decorator.getCans(can3);
        const canFour = decorator.getCans(can4);
        const canFive = decorator.getCans(can5);
        assert.deepStrictEqual(actual, [can1, can2, can3, can4, can5])
    });

    it('should count total litres', function(){
        const canOne = decorator.getCans(can1);
        const canTwo = decorator.getCans(can2);
        const canThree = decorator.getCans(can3);
        const canFour = decorator.getCans(can4);
        const canFive = decorator.getCans(can5);
        const actual = decorator.getTotalLitres();
        assert.strictEqual(actual, 23)
    });    

});