// [1] convert object to map
let obj1 = {
    pCode: 1818,
    pName: 'Chickoo',
    price: 300
}

let obj1Entries = Object.entries(obj1)
console.log('1a---', obj1)
console.log('1b---', obj1Entries)

let map1 = new Map(obj1Entries)
console.log('1c---', map1)

// [2] convert map to object
let map2 = new Map()
map2.set('dept', 'ece')
            .set(true,'seat available')
            .set(1, 'id')

console.log('2a---', map2)
let obj2 = Object.fromEntries(map2)
console.log('2b---', obj2)

// [3] Map.has(key)
// check whether the given key is existing in the map or not 
console.log('3a---', map2)
console.log('3b---', map2.has('dept'))
console.log('3b---', map2.has('pcode'))
console.log('3b---', map2.has(1))
console.log('3b---', map2.has(true))

// [4] forEach with map
console.log('4a---', map2)
map2.forEach((value, key, map)=> {
    console.log(`4--- ${key} : ${value} => ${map}`)
})

// [5] delete() : removes values by key
// clear() : wipes out everything from map 
console.log('5a---', map2)
map2.delete('dept')
console.log('5b---', map2)
map2.clear()
console.log('5c---', map2)

