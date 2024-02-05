// Methods to add/remove Array elements		
let arr = ["Android", "ios", "Windows", "blackberry"];
console.log("1:       ",arr);

// [1] push 
// Add element at the end of an array and return length
let arrlength = arr.push('Linux')
console.log("2:push   ",arr, arrlength);

// [2] pop
// remove/return last ele of array
let popele = arr.pop()
console.log("3:pop    ",arr, popele);

// [3] shift
// remove/return first ele of array
let shiftele = arr.shift()
console.log("4:shift  ",arr, shiftele);

// [4] unshift
// add ele at the beginning of array and return the length
// arr.unshift('apple')
let unshiftlen = arr.unshift('unix', 'apple')
console.log("5:unshift",arr, unshiftlen);

// [5] splice
// Change the content of an array by inserting, removing, and replacing elements. Returns the array of removed elements.
// array.splice(index,deleteCount,items);
let splicearr = arr.splice(2,1,'hp', 'linux');
console.log("6:splice ", arr, splicearr);

// [6] slice
// Returns a new array object copying to it all items from start to end(exclusive) where start and end represents the index of items in an array. The original array remains unaffected
let slicearr = arr.slice(2,4)
console.log("7:slice  ", arr, slicearr);

// [7] concat
let newarr = slicearr.concat(splicearr)
console.log("8:concat ", newarr);