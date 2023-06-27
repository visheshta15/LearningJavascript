// the degree of dependency of class a on class b --> coupling
// do changes in one class force changes in other class 

// No coupling, Loose coupling, Tight coupling

// [1]
// Tight coupling from A to B  => A needs B to be defined, callable and adhere to an interface
// No coupling from B to A     => B does not need A in any way (pure fn)

const b1 = () => console.log("b1");
const a1 = () => b1();
a1()


// [2]
// No coupling from A to B         => A and B work independently, although there a chance of naming collision in `store`
// Tight coupling from A to store  => Direct reference to `store`, mutates original
// Tight coupling from B to store  => Direct reference to `store`, mutates original

let store = {}
const a2 = () => store.foo = 'a2'
const b2 = () => store.boo = 'b2'
a2()
b2()
console.log(store);


// [3]
// Loose coupling between A and B   => A and B both operate on the numeric `counter` property, although they will not error when it does not exist
// Tight coupling from A to store   => Direct reference to `store`, mutates original
// Tight coupling from B to store   => Direct reference to `store`, mutates original

const a3 = () => store.counter = (store.counter || 0 ) + 1
const b3 = () => store.counter = (store.counter || 0 ) + 10
a3()
b3()
console.log(store);


// [4]
// No coupling between A and B     => A and B work independently, although there a chance of naming collision in `store`
// Loose coupling from A to store  => Because DI and immutability (pure fn)
// Loose coupling from B to store  => Because DI and immutability (pure fn)

const a4 = (obj) => {
    return Object.assign({} , obj , {foo : 'x'})
}
const b4 = (obj) => {
    return Object.assign({} , obj , {boo : 'y'})
}

console.log(a4(store))
console.log(b4(store))

let store0 = {}
console.log(a4(store0))
console.log(b4(store0))