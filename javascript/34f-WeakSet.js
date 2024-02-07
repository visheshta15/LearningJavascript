// WeakSet 
// it is also a weakly held collection of objects and that too uniques ones 
// The behavior is the same as WeakMap values are removed on garbage collection if there is no direct reference of object

let product = new WeakSet()
let obj1 = {}
let obj2 = {}
let obj3 = {}
product.add(obj1, 1010)
product.add(obj2, 2020)
product.add(obj3, 3030)
console.log('1a---', product)
console.log('1b---', product.has(obj1))
console.log('1c---', product.has(obj2))

// These weak collections are also used, when you want to make sure that there is no memory leakages
// whenever there is a garbage collection executed the lost reference value are always cleared from the collection also 

// Here we are not using the delete() and length() method of WeakSet to loop through

