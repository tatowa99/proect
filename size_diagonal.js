const Televizor = require('./televizor');

function D40(typeDisp, model, price) {
    Televizor.call(this, diagonal, typeDisp, model);
    this.type = "D40";
    this.price = price;
}

D40.prototype = new Televizor();
D40.prototype.constructor = Televizor;


//=====================================================

function D60(typeDisp, model, price) {
    Televizor.call(this, diagonal, typeDisp, model);
    this.type = "D60";
    this.price = price;
}

D60.prototype = new Televizor();
D60.prototype.constructor = Televizor
}

//========================================================

module.exports = {
    D40: D40,
    D60: D60
};