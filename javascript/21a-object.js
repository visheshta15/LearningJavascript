// [1] handling dynamic key in object literal
let tv = 'pcode'
let obj1 = {
    tv: 1001,
    [tv]: 1001,
    getdata() {
        console.log(this)
    },
    ['get' + 'datas']() {
        console.log(this)
    },
}
console.log('1---', obj1)


// [2] add read only properties to an object 
const proto = Object.defineProperty({}, 'pcode', {
    writable: false,
    configurable: tv,
    value: 2010
})

const obj2 = Object.create(proto)
obj2.pcode = 3003
obj2.place = 'Paris'
console.log('2---', obj2, obj2.pcode)


// --------------------------------------------------------------
// [3] Updating object with "Object.assign" and spread operator
const inputObj = {
    name: 'kajal',
    address: {
        city: 'kanpur'
    }
};
let newObj1 = Object.assign({}, inputObj);
const newObj2 = {
    ...inputObj,
    name: 'spread..'
}
console.log('3a---', inputObj);
console.log('3b---', newObj1);
console.log('3c---', newObj2);

// immediate property can override
newObj1['name'] = 'assign'
console.log('4a---', inputObj);
console.log('4b---', newObj1);
console.log('4c---', newObj2);

// nested property will update all the refernced object
newObj2.address.city = 'banaras'
console.log('5a---', inputObj);
console.log('5b---', newObj1);
console.log('5c---', newObj2);

let updated = Object.assign({}, inputObj, {name: 'apple'});
let updated1 = {...inputObj, name: 'vish'}
console.log('6---', updated, updated1)

// [4] convert object to string
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(Object.values(student).toString())
console.log(Object.values(student).join(', '))