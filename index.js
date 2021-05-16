const Televizor = require("./televizor);
const D40 = require("./size_diagonal);
const D60 = require("./size_diagonal);

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
 

console.log(LG.getDescription());
console.log("-----------------------")
console.log(Polar.getDescription());

let D40 = new D40("IPS", "MI", 800);
console.log(D40.getDescription());
console.log("-----------------------")

const D60 = new D60("LED", "Samsung",1200);
console.log(D60.getDescription());
console.log("-----------------------")

let arr = new Array();
let arr = [LG, Polar, HP, DELL, ASUS, Toshiba, Samsung, ASUS1, DELL1, MI];

arr.sort([price]);