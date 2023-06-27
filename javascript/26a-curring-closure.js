// function currying using closure

let multiply = function(x) {
    return function(y){
        console.log(x*y);
    }
}


let multiplyOfNum2 = multiply(2)
multiplyOfNum2(3)

let multiplyOfNum3 = multiply(3)
multiplyOfNum3(3)