// basically every object has a property called prototype, where u can add properties or method to it

let car = function(model){
    this.model = model
}

car.prototype.getmodel = function(){
    return "my car is : "+ this.model
}

let nexson = new car('nexson');
console.log(nexson.model);
console.log(nexson.getmodel());


