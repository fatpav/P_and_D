const Decorator = function(){
    this.stock = []
}


Decorator.prototype.getCans = function(paintcan){
    this.stock.push(paintcan)

};

Decorator.prototype.getTotalLitres = function(){
    let total = 0 ;
    for (let paint of this.stock){
        total += paint.litres    
    };    
    return total
};

module.exports = Decorator;