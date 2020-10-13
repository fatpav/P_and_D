const assert = require('assert');
const PaintCan = require('../paint.js');

describe('PaintCan', function() {

    it('should have litres of paint', function (){
    const paint = new PaintCan(10);
    const actual = paint.litres;
    assert.strictEqual(actual, 10); 
    });

    it('paint can should be empty', function(){
        const paint = new PaintCan(10);
        paint.emptyCan();
        const actual = paint.litres;
        assert.strictEqual(actual, 0)
    });

    it('should subtract litres from can', function(){
        const paint = new PaintCan(10);
        paint.subtractLitres();
        const actual = paint.litres
        assert.strictEqual(actual, 9)
    })
    it('should check for an empty can', function() {
        const paint = new PaintCan(0);
        const actual = paint.checkCan(paint);
        assert.strictEqual(actual, true)
    })
});