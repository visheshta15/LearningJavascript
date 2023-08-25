// Methods to search among Array elements		

// [1] indexOf()--------------------------------------------
// Returns the index for the first occurrence of an element in an array
// return -1 if it is not present
const arr1 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
console.log("arr1 : ", arr1)

console.log("indexOf('Apple') ", arr1.indexOf('Apple') )
console.log("indexOf('Chickoo') ", arr1.indexOf('Chickoo') )

// [2] find() --------------------------------------------
// Returns the value of the first element in an array that passes a condition specified in the callback function
// returns undefined if no element passed the test condition.
const arr2 = ["Android", "ios", "Windows", "blackberry"];
console.log("arr2 : ", arr2)

console.log("find(!== 'ios') :", arr2.find((ele)=> ele !== 'ios')) //Android
console.log("find(=== 'ios') :", arr2.find((ele)=> ele === 'ios1')) //undefined

// [3] findIndex() --------------------------------------------
// Returns the index of the first element in an array that passes a condition specified in the callback function. 
// Returns -1 if no element passes the condition.
const arr3 = ["Android", "ios", "Windows", "blackberry"];
console.log("arr3 : ", arr3)

console.log("findIndex() :", arr3.findIndex((ele)=> ele.length < 4)) // 1
console.log("findIndex() :", arr3.findIndex((ele)=> ele.length === 4)) // -1

// [4] includes() --------------------------------------------
// check if an element is in an array.
const arr4 = ["Android", "ios", "Windows", "blackberry"];
console.log("arr4 : ", arr4)

console.log("includes('ios') : ", arr4.includes('ios'))  //true
console.log("includes('Linux') :", arr4.includes('Linux')) //false

// [5] filter()
