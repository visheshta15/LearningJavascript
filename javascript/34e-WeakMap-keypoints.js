// [1] keys in the WeakMap are only objects, you can not have primitive keys like string, number, etc

let product = new WeakMap()
// product.set('pcode', 10101)       // Uncaught TypeError: Invalid value used as weak map key
let obj1 = {}
product.set(obj1, 20202)
console.log('1a---',product)
console.log('1b---',product.get(obj1))

// [2] Keys are weak or weakly held and it means if the keys are garbage collected, so do the values 

// [3] Because of weak keys - WeapMap collection does not have iterable methods like keys(), values() or entries()

// [4] Weak collections do not hold values when the garbage is collected - this is very handy with the DOM, where DOM nodes are removed the garbage collected locations will be free as they are not held strongly