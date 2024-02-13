// basically every object has a property called prototype, where u can add properties or method to it

// inheritance , one object trying to inherit the method and properties of other object

// whenever u create js object, javascript engine automatically puts this hidden properties to an object and attaches it to ur original object
// without letting u know attaches your object with some hidden properties and function.

let car = function(model){
    this.model = model
}

car.prototype.getmodel = function(){
    return "my car is : "+ this.model
}

let nexson = new car('nexson');
console.log(nexson.model);
console.log(nexson.getmodel());


