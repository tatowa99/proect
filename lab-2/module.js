class Televizor {
    constructor(diagonal, typeDisp, model){
	    this.diagonal = diagonal;
    	this.typeDisp = typeDisp;
    	this.model = model; 
    }
    getDescription(){
        return this.diagonal+' '+this.typeDisp+' '+this.model
    }
}

class Monitor extends Televizor{
    constructor(diagonal, typeDisp, model,type){
        super(diagonal, typeDisp, model)
        this.type = type

    }
    gettype(){
        return this.type
    }
}
class Stock extends Monitor{
    constructor(type, model, price){
        super(type, model)
        this.price = price
    }
    getprice(){
        return this.price
    }
}
class Shop extends Stock{
    constructor(type, model, price){
        super(type, model, price)
        this.price = 1.2*price
    }
    getprice(){
        return this.price
    }
}
