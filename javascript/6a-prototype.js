// inheritance , one object trying to inherit the method  and properties of other object

// whenever u create js object, javascript engine automatically puts this hidden properties to an object and attaches it to ur original object
// without letting u know attaches your object with some hidden properties and function.


let arr = ['apple', 'mango', 'chikko' ];

let obj = {
    name: "vish",
    place: "kanpur"
}

function func(){
}

// if u want to access that hidden object
console.log("for array-----------------------------"); 
console.log("arr : ", arr);
console.log("arr.__proto__ : ", arr.__proto__);
// "__proto__" this is the method where js engine putting all the methods, which is same as "Array.prototype"
console.log("Array.prototype : ", Array.prototype);

// every object in javascript has its prototype 
console.log("arr.__proto__.__proto__ : ", arr.__proto__.__proto__);
// above is equal to Object.prototype
console.log("Object.prototype : ", Object.prototype);
console.log("arr.__proto__.__proto__.__proto__ : ", arr.__proto__.__proto__.__proto__);
console.log("prototype of object prototype is null, end of chain");


console.log("for object-------------------------------"); 
console.log("obj : ", obj);
console.log("obj.__proto__ : ", obj.__proto__);
console.log("Object.prototype : ", Object.prototype);
console.log("obj.__proto__.__proto__ : ", obj.__proto__.__proto__);
console.log("prototype of object prototype is null, end of chain");


console.log("for function------------------------------"); 
console.log("func : ", func);
console.log("func.__proto__ : ", func.__proto__);
console.log(Function.prototype);
console.log("func.__proto__.__proto__ : ", func.__proto__.__proto__);
console.log("Object.prototype : ", Object.prototype);
console.log("func.__proto__.__proto__.__proto__ : ", func.__proto__.__proto__.__proto__);
console.log("prototype of object prototype is null, end of chain");

// all array, function and object down the prototype chain ends up being object


console.log("-------------------------------------------------------");
let obj1 = {
    name: 'vish',
    getIntro: function(){
        console.log("Hi, my name is", this.name);
    }
}

let obj2 = {
    name: "kush"
}
// obj2.prototype.mybind = function(){
//     console.log("Hi, my name is", this.name);
// }






console.log("----------closure--------------------------------------")
function x(){
    var a = 10;
    function y(){
        var b = 20;

        function z(){
            var c =30;
            console.log(a,b,c)
        }
        z()
    }
    y()
}
x()

x()