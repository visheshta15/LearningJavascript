// destructuring:  Its about extracting the data pieces from array or object literal and assigning to individual variables

// [1]
const obj1 = {
    pcode: 1001,
    pname: 'apple'
}
const {
    pcode,
    pname,
    pid = 0
} = obj1

console.log('1---', pcode, pname, pid)

// [2]
const obj2 = {
    mcode: 1001,
    mname: 'apple',
    mManufacture: {
        id: 10012200,
        dept: "steel",
        address: {
            flat: 1401,
            city: 'Delhi',
            pincode: 100100
        }
    }
}

const {
    mcode : m_code,
    mname,
    mManufacture: {
        id,
        dept,
        address : {
            flat,
            city,
            pincode: pin_code
        }
    }
} = obj2

// console.log('2a---', obj2)
console.log('2a---1level:', m_code, mname)
console.log('2b---2level:', id, dept)
console.log('2c---3level:', flat, city, pin_code)