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
const LG = new Televizor("D40", "IPS", "LG");
let Polar = new Televizor("D60", "LED", "Polar");
const HP = new Televizor("D40", "IPS", "HP");
const DELL = new Televizor("D60", "LED", "DELL");
const ASUS = new Televizor("D60", "Amoled", "Asus");
const Toshiba = new Televizor("D40", "OLed", "Toshiba");
const Samsung = new Televizor("D40", "IPS", "Samsung");
const ASUS1 = new Televizor("D40", "IPS", "Asus");
const DELL1 = new Televizor("D40", "Amoled", "DELL");
const MI = new Televizor("D40", "IPS", "MI");

let arr = new Array();
let arr = [LG, Polar, HP, DELL, ASUS, Toshiba, Samsung, ASUS1, DELL1, MI];

arr.sort([price]);