// Set 
// Set collection or data structure does not have keys, it has only values and that too uniqui values

// [1] create Set 
// [a]
let counts = new Set()
counts.add('first')
counts.add('first')
counts.add('sec')
counts.add('sec')
counts.add('third')
counts.add(1)
console.log('1a---', counts)

// [b]
let names = new Set(['first', 'sec', 'sec', 'third', 'forth'])
console.log('1b---', names)

// [c]
let ranks = new Set()
ranks.add('1st')
    .add('1st')
    .add('2nd')
    .add('2nd')
    .add('3rd')
    .add('4th')
    .add('4th')
console.log('1c---', ranks)


// [2] Set is iterable 

// [a] for...of
console.log('2a---', ranks)
for(let i of ranks){
    console.log('2b---:', i)
}
for(let i of ranks.values()){       // values not needed
    console.log('2c---:', i)
} 
for(let i of ranks.entries()){      // values not needed 
    console.log('2c---:', i)
}

// [b] forEach 
console.log('3a---', names)
names.forEach((v1, v2, set)=> {
    console.log('3b---:', v1, v2, set)
})


// [3] value removal 
console.log('4a---', names)
names.delete('sec')
console.log('4b---', names)
names.clear()
console.log('4c---', names)

// [4] ex
const mySet = new Set();
console.log(mySet);

mySet.add(1)
mySet.add(2)
mySet.add(2)
console.log(mySet);

console.log(mySet.entries())
console.log(mySet.values())
console.log(mySet.keys())

let myItem = mySet.entries();
console.log(myItem.next().value);
console.log(myItem.next().value);
console.log(myItem.next().value);
