// bacically every object has a property called prototype, where u can add properties or method to it
// -->this is completely different concept than the traditional OOP concept of classes, which define a process of creating a new object.

let Car = function(model){
    this.model = model
}

Car.prototype.getModel = function(){
    return "my car is " + this.model
}

let nexson = new Car('nexson')
console.log(nexson)
console.log(nexson.model)
console.log(nexson.getModel())