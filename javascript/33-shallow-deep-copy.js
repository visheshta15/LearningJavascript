// npm i lodash
const _ = require('lodash');


let a = [11, 23, 8, 7]
let d1 = {
    name : 'vish',
    place : {
        area : "gopal nagar",
        city : "kanpur"
    },
    address : function(){
        return this.city
    },
    jdate : new Date()
}

//shallow copy
let d2 = d1 //objects are reference type

console.log("d1 : ", d1);
console.log("d2 : ", d2);

d2.name = 'kush'
d2.place.city = "delhi--"
console.log("d1 : ", d1);
console.log("d2 : ", d2);

//partial deep copy
// valid till 1 level of nesting, assign
d2 = Object.assign({}, d1)
d2.name = 'nony--'
console.log("d1 : ", d1);
console.log("d2 : ", d2);

//partial deep copy
// valid till 1 level of nesting, spead operator
d2 = {...d1}
d2.name = 'kuku--'
console.log("d1 : ", d1);
console.log("d2 : ", d2);

//partial deep copy
// valid for nesting, but not for function
d2 = JSON.parse(JSON.stringify(d1))
d2.name = 'happy--'
d2.place.city = "noida--"
console.log("d1 : ", d1);
console.log("d2 : ", d2); //jdate is string

//deep copy
d2 = _.cloneDeep(d1)
d2.name = 'neha--'
d2.place.city = "punjab--"
console.log("d1 : ", d1);
console.log("d2 : ", d2);