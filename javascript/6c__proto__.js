// an object is tied to its prototype by an internal propperty called __proto__


// Array----------------------------------------------------------
// if you want to access the hidden object 
let fruits = ['apple', 'mango', 'chikoo', 'orange', 'banana']

console.log("fruits : ",fruits)

console.log("fruits.__proto__ : ",fruits.__proto__)
// "__proto__" this is the method where js engine putting all the methods, which is same as "Array.prototype"
console.log(Array.prototype)

// every object in javascript has its prototype
console.log("arr.__proto__.__proto__ : ", fruits.__proto__.__proto__);
// above is equal to Object.prototype
console.log("Object.prototype : ", Object.prototype);

console.log("prototype of object prototype is null, end of chain");
console.log("arr.__proto__.__proto__.__proto__ : ", fruits.__proto__.__proto__.__proto__);


// Object --------------------------------------------------------
let book = {
    title: 'harry potter',
    publisher: 'J.K.Rowling'
}
console.log("for object-------------------------------"); 
console.log("obj : ", book);
console.log("obj.__proto__ : ", book.__proto__);
console.log("Object.prototype : ", Object.prototype);
console.log("obj.__proto__.__proto__ : ", book.__proto__.__proto__);
console.log("prototype of object prototype is null, end of chain");

// Function-------------------------------------------------------
function func(){

}
console.log("for function------------------------------"); 
console.log("func : ", func);
console.log("func.__proto__ : ", func.__proto__);
console.log(Function.prototype);
console.log("func.__proto__.__proto__ : ", func.__proto__.__proto__);
console.log("Object.prototype : ", Object.prototype);
console.log("func.__proto__.__proto__.__proto__ : ", func.__proto__.__proto__.__proto__);
console.log("prototype of object prototype is null, end of chain");


// all array, function and object down the prototype chain ends up being object