// even before executing a code js will assign memory to "a" and "b" and values of these variable is undefine. 

// in case of "var", it is global space but in case of let it is something script.

let a = 10; //allocated memory but they are stored in the different memory space not global. and u cannot access that memory space before u have assign any value to it.

// TEMPORAL DEAD ZONE
// TDZ is the time since that let variable is hoisted and till it is initialised any value, the time between that is called temporal dead zone

// form hoisting and till it is assign some value
// and when u try to access that variable in that temporal dead zone it will give u reference error

// console.log(a);
var b = 100; 

let a1 = [2,3]
let a2 = [5,7]
Array.prototype.addByOne = () => {
    console.log(this)
    let a = []
    for(let i=0; i<this.length; i++){
        a.push(i)
    }
    return a
}

console.log(a1.addByOne())