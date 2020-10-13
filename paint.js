const PaintCan = function(litres){
    this.litres = litres;
};

PaintCan.prototype.emptyCan = function(){
    this.litres = 0
};

PaintCan.prototype.subtractLitres = function(){
    this.litres -= 1;
};

PaintCan.prototype.checkCan = function(paint) {
    if (this.litres === 0){
        return true;
    } else {
        return false
    };
};


module.exports = PaintCan;