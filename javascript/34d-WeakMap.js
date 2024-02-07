// Map & Set hold the keys in a strong way,
// whereas WeakMap and WeakSet hold the keys weakly

// [1]
let mobj = new Map()
let obj = {
  name: 'visheshta'
}
mobj.set(obj, 'mapvalue')
console.log('1a---', mobj)

obj = null
// at some point if the obj is assign with null. as this object which is passed as a key inside Map, this value will not be removed even if the Garbage collection is executed
// {name: 'visheshta'} this value have lost the parent refernce. When the Garbage collection is executed the reference to the 'name' is not removed, as it is strongly held by "Map()"


// [2]
let wmobj = new WeakMap()
let obj2 = {
  name: 'Kushwaha'
}
wmobj.set(obj2, 'mapvalue')
console.log('2a---', wmobj)

obj2 = null
console.log('2b---', wmobj)
// at some point if the obj is assign with null. the key is weekly held by "WeakMap()", When the Garbage collection is executed the reference to the 'name' value is also removed,

