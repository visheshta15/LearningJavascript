let a1 = [123, 'bob', true, null, undefined]

let a3 = {
    name : 'kush',
    place : {
        area : "gopal nagar",
        city : "kanpur"
    },
    address : function(){
        return this.city
    },
    arr : [1,2,3,4],
}

console.log("a1 : ", a1);
// reference to shaollow array
let b1 = a1
b1[0] = 222
console.log("a1 : ", a1);
console.log("b1 : ", b1);

//---Array.from(arr)
b1 = Array.from(a1)
b1[0] = 333
console.log("a1 : ", a1);
console.log("b1 : ", b1);

// --- spread
b1 = [...a1]
b1[0] = 444
console.log("a1 : ", a1);
console.log("b1 : ", b1);



let a2 = [
    123, 
    'bob', 
    true,
    [1,2,3,4],
    {name : 'vish'}
]
