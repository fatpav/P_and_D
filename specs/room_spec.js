const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
    it('should have an area', function(){
        const room = new Room(25);
        const actual = room.area;
        assert.strictEqual(actual, 25)
    });

    it('should not be painted', function(){
        const room = new Room(25);
        const actual = room.painted;
        assert.strictEqual(actual, false)
    });

    it('room is now painted', function(){
        const room = new Room(25);
        room.paintRoom();
        const actual = room.painted
        assert.strictEqual(actual, true)
    });

});