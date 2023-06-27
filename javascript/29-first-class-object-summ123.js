// in js functions are first class object: --- function behave just like any other object or variable

// sum(1)(2)(3)...(n)()

let sum = function (a){
    return function(b){
       if(b){
           return sum(a+b)
       }else{
           return a
       }
    }
}

let add = (a) => b => {return b ? add(a+b) : a}

sum(1)(2)(3);
console.log(add(1)(2)(3)(4)(5)());


// sum of square
let squareSum = (a) => b => {
    return b ?  squareSum(a+b*b) : a
}
console.log(squareSum(1)(2)(3)(4)());
// (2)(3)(4)(5)()


