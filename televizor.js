function Televizor(diagonal, typeDisp, model) {
	this.diagonal = diagonal;
    	this.typeDisp = typeDisp;
    	this.model = model;
}



Televizor.prototype.getDescription = function () {
    return this.diagonal + " " + this.typeDisp + " " + this.model + ";
}

module.exports = Televizor;