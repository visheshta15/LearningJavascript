// pass by value 
// now a and b are independent of each other, both have their own memory
// -----------------------------------------
let a = 10;
let b = a ;

a = 20;
console.log("a : ", a , "b : " , b);

// pass by reference 
// share the same memory
// -----------------------------------------
let obj1 = {
    name: "vish"
}

let obj2 = obj1
obj2.name = 'pooja';

console.log("obj1 : ", obj1 , "obj2 : " , obj2);