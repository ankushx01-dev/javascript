let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
        
    }
}
Object.prototype.achu =function(){
    console.log(`achu is present in all subject`);
    
}
Array.prototype.Hero=function(){
    console.log('i m array-hero')
}
heroPower.achu()
myHeros.Hero()
// heroPower.Hero() -> only array property changed