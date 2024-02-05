// Methods to search among Array elements		
let arr = ["Android", "ios", "Windows", "Windows", "blackberry"];
console.log("1: Array       ",arr);

// [1] indexof
// Returns the index for the first occurrence of an element in an array and -1 if it is not present
let indexele1 = arr.indexOf('apple')
console.log("2a:indexOf     ",arr, indexele1);
let indexele2 = arr.indexOf('Windows')
console.log("2b:indexOf     ",arr, indexele2);

// [2] lastIndexof
// Returns the index for the first occurrence of an element in an array from the end and -1 if it is not present
let lastindexele1 = arr.lastIndexOf('apple')
console.log("3a:lastIndexOf ",arr, lastindexele1);
let lastIndexele2 = arr.lastIndexOf('Windows')
console.log("3b:lastIndexOf ",arr, lastIndexele2);

// [3] includes()
// Returns boolean value i.e; true if element is found else false 
let isFound1 = arr.includes('blackberry')
console.log("4a:includes    ", arr, isFound1)
let isFound2 = arr.includes('linux')
console.log("4a:includes    ", arr, isFound2)


// [4] find()
// Returns the value of the first element in an array that passes a condition specified in the callback function. Else, returns undefined if no element passed the test condition.
let findele = arr.find((e)=> e == 'ios')
console.log("5a:find        ",arr, findele);
let findele2 = arr.find((e)=> (e !== 'hp') && (e.length>4) )
console.log("5b:find        ",arr, findele2);
let findele3 = arr.find((e)=> (e == 'hp') )
console.log("5c:find        ",arr, findele3);

// [5] findIndex
// Returns the index of the first element in an array that passes a condition specified in the callback function. Returns -1 if no element passes the condition.
let findIndexele = arr.findIndex((e, index)=> e == 'blackberry' )
console.log("6a:findIndex   ",arr,findIndexele);
let findIndexele1 = arr.findIndex((e, index)=> e == 'hp' )
console.log("6b:findIndex   ",arr,findIndexele1);

// [6] filter
// Creates a new array with elements that passes the test provided as a function.
let filterarr = arr.filter((e)=> e!=='Windows' && e!=='hp')
console.log("7a:filter      ",arr,filterarr);
let filterarr2 = arr.filter((e)=> e=='hp')
console.log("7b:filter      ",arr,filterarr2);