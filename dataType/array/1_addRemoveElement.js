// [1] pop() --------------------------------------------
// The pop() method removes the last element from an original array 
// returns the value that was "popped out"
let arr1 = ["Android", "ios", "Windows", "blackberry"];
console.log('arr1 :', arr1)

let popele = arr1.pop()
console.log("pop() : ", arr1, popele)

// [2] shift() --------------------------------------------
// method removes the first array element from the original array and "shifts" all other elements to a lower index.
// return first element of array, "shifted out"
let arr2 = ["Android", "ios", "Windows", "blackberry"];
console.log("arr2 : ", arr2)

let shiftElement = arr2.shift()
console.log("shift() : ", arr2, shiftElement)


// [3] push(val) --------------------------------------------
// method adds a new element to an original array (at the end)
// returns the new array length
let arr3 = ["Android", "ios", "Windows", "blackberry"];
console.log("arr3 : ", arr3)

let pushArrLength = arr3.push('Linux')
console.log("push() : ", arr3, pushArrLength)

// [4] unshift() --------------------------------------------
// adds a new element to an original array (at the beginning), and "unshifts" older elements:
// returns the new array length
let arr4 = ["Android", "ios", "Windows", "blackberry"];
console.log("arr4 : ", arr4)

let unshiftArrLength = arr4.unshift('Linux')
console.log('unshift() : ', arr4, unshiftArrLength)


// [5] splice(startindex,deleteCount,items)
// Change the content of an array by inserting, removing, and replacing elements. Returns the array of removed elements

// a. to add new items to an original array (deleteCount=0)
let arr5 = ["Banana", "Orange", "Apple", "Mango", "Chickoo"];
console.log("arr5 : ", arr5)
let addSpliceArr  = arr5.splice(2,0,"Lemon", 'kiwi')
console.log("addSpliceArr : ", arr5,  addSpliceArr)

// b. to delete an item from array 
let arr6 = ["Banana", "Orange", "Apple", "Mango", "Chickoo"];
console.log("arr6 : ", arr6)
let deleteSpliceArr = arr6.splice(1,2)
// let deleteSpliceArr = arr6.splice(1,2, 'kiwi')
console.log("deleteSpliceArr : ", arr6, deleteSpliceArr)

// c. create new arr 
let arr7 = ["Banana", "Orange", "Apple", "Mango", "Chickoo"];
console.log("arr7 : ", arr7)
let createNewSpliceArr = arr7.splice(3)
console.log("createNewSpliceArr : ", arr7, createNewSpliceArr)