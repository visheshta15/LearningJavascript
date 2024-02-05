// Iterator is a kind of new mechanism to iterate or traverse through data structures
//when you want to make non iteratable object to iterable
// -------------------------------------------------------------------

// Iterables
// Strings, Map, Sets, Array etc 
// -------------------------------------------------------------------


// how do you create an iterator ?
// the Symbol.iterator method must be implemented which should return an iterator object & should also have a next() method which returns the object
// -------------------------------------------------------------------

let arr = [4,9,7,1]

for(let i of arr){
    console.log(i)
}

// -------------------------------------------------------------------
// use Symbol.iterator to iterate through the array
let itr = arr[Symbol.iterator]();       // ()returns iterable object
console.log(itr)               
console.log(itr.next())             
console.log(itr.next())            
console.log(itr.next())           
console.log(itr.next())            
console.log(itr.next())   