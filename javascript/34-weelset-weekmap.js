//Set
const mySet = new Set();
console.log(mySet);

mySet.add(1)
mySet.add(2)
console.log(mySet);

console.log(mySet.entries())
console.log(mySet.values())
console.log(mySet.keys())

let myItem = mySet.entries();
console.log(myItem.next().value);
console.log(myItem.next().value);
console.log(myItem.next().value);

//Map()
const myMap = new Map();
let obj = {a : 1}
let func = () => console.log(' this  is my func')

myMap.set(obj, 'this is obj')
myMap.set(func, 'this is function')

console.log(myMap);
let rfunc = myMap.get(func)
console.log(rfunc);

//WeakSet
const myWSet = new WeakSet();
let myOnj = {a : 1};
myWSet.add(myOnj)

console.log(myWSet);