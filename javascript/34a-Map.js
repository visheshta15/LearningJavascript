// ES6 data structures introduced
// 1. Map
// 2. WeakMap
// 3. Set
// 4. WeakSet

// Map 
// it is quite similar to object but in map the keys can also have types like String, number, Boolean, etc 
// this is the collection/ dataStructure where you are mapping value to value 
// Values inserted in Map collection are retrieved in the same order

// [1]
let product = new Map()

//set : this method returns a map
// [a]
// product.set('pcode', '1001')
// product.set(1, 'Apple')
// product.set(true, 'Available')

// [b]
product['dept'] = 1010 // it works as a normal key of object literal instead of data typed Map key, (here type will not be maintained, so dont prefer this way)

// [c]
product.set('pcode', '1001')
        .set(1, 'Apple')
        .set(true, 'Available')


console.log('1a---', product)
console.log('1b---', product.get(1))
console.log('1c---', product.get(true))
console.log('1d---', product.size)

// [2] Map is iterable
// can loop through map collection

// [a] values()
for(let v of product.values()){
    console.log('2a---v', v)
}

// [b] keys()
for(let k of product.keys()){
    console.log('2b---k', k)
}

// [c] entries()
for(let e of product.entries()){
    console.log('2c---e', e)
}

// [3] ex :
const myMap = new Map();
let obj = {a : 1}
let func = () => console.log(' this  is my func')

myMap.set(obj, 'this is obj')
myMap.set(func, 'this is function')

console.log(myMap);
let rfunc = myMap.get(func)
console.log(rfunc);