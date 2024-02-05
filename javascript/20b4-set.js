let a =  [...Array(5).keys()]
console.log(" : ", a)

let l1 =   [2,3,9,8,...Array(5).keys()]
console.log(" : ", l1)


// set 
let s4='thequickbrownfoxjumpsoverthelazydog'
let a3=s4.split('')
let a4= new Set(a3)
let a5= ((Array.from(a4)).toString()).replace(/,/g, '')
console.log(Array.from(a4))
console.log((Array.from(a4).toString()))
console.log((Array.from(a4).toString()).replace(/,/g, ''))
console.log(a5)
// -------------------------------------------
// reduce 