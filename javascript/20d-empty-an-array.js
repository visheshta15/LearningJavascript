// [1]
let a = [1,2,3,4,5];
console.log(a);
a = [];
console.log(a);

// [2]
let b = [1,2,3,4,5,6];
console.log(b);
b.length = 0
console.log(b);


// [3]
let c = [1,4,5,6,7];
console.log(c);
c.splice(0, c.length)
console.log(c);

// [4]
var d = [1,4,6,7];
console.log(d);
while(d.length){
    d.pop()
}
console.log("4----------------------- " , d);


var d1 = 'a'
d2 = { age: 25}
console.log("d1d2 " , d1,d2);
// delete(d1)
// delete(d2)
// delete d2.age
console.log("d1d2 " , d1,d2);
let e1= Object.create(d2)
console.log(e1, e1.age);
delete e1.age
console.log(e1, e1.age);



let f1 = function foo(){
    return 10
}

// console.log(foo());

console.log("sum(1)(2)(3)...(n)()----------------")
// function sum(x){
//     return function(b){
//         if(b){
//             return sum(x+b)
//         }else{
//             return x
//         }
//     }
// }

let sum = function (a){
    console.log("-", a)
    return function(b){
        console.log("b--", b)
       if(b){
           return sum(a+b)
       }else{
           return a
       }
    }
}

console.log(sum(2)(3)())