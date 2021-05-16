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
