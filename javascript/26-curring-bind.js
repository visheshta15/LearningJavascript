// function currying using bind method;
// we make a copy of multiply method and we make more method out of this and by passing a preset of x value

let multiply = (x,y) => {
    console.log(x*y);
}

multiply(2,10);

// this will be copy of multiply 
let multiplyOfNum2 = multiply.bind(this,10)
multiplyOfNum2(3)

let multiplyOfNum3 = multiply.bind(this,10,4)
multiplyOfNum3(3)

let multiplyOfNum4 = multiply.bind(this)
multiplyOfNum4(3,3)

// ------------------------------------
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


