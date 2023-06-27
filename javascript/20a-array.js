// Methods to add/remove Array elements		
let arr = ["Android", "ios", "Windows", "blackberry"];

console.log("1:       ",arr);
// [1] push , return length of array
let arrlength = arr.push('Linux')
console.log("2:push   ",arr, arrlength);

// [2] pop, remove/return last ele of array
let popele = arr.pop()
console.log("3:pop    ",arr, popele);

// [3] shift, remove/return first ele of array
let shiftele = arr.shift()
console.log("4:shift  ",arr, shiftele);

// [4] unshift, add ele at the beginning of array and return the length
arr.unshift('apple')
let unshiftlen = arr.unshift('unix')
console.log("5:unshift",arr, unshiftlen);

// [5] splice, Change the content of an array by inserting, removing, and replacing elements. Returns the array of removed elements.
// array.splice(index,deleteCount,items);
let splicearr = arr.splice(2,1,'hp');
console.log("6:splice ", arr, splicearr);

// [6] slice: Returns a new array object copying to it all items from start to end(exclusive) where start and end represents the index of items in an array. The original array remains unaffected
let slicearr = arr.slice(2,4)
console.log("7:slice  ", arr, slicearr);

// [7] concat, 
let newarr = slicearr.concat(splicearr)
console.log("8:concat ", newarr);


// ====================================================================
// Methods to search among Array elements		

// [8] indexof, Returns the index for the first occurrence of an element in an array and -1 if it is not present
let indexele = arr.indexOf('apple')
console.log("8:indexOf",arr, indexele);

// [9] find(), Returns the value of the first element in an array that passes a condition specified in the callback function. Else, returns undefined if no element passed the test condition.
let findele = arr.find((e)=> e == 'ios')
let findele2 = arr.find((e)=> (e !== 'hp') && (e.length>4) )
console.log("9:find   ",arr, findele, findele2);


// [10] findIndex, Returns the index of the first element in an array that passes a condition specified in the callback function. Returns -1 if no element passes the condition.
let findIndexele = arr.findIndex((e, index)=> e.length>4 && console.log(arr[index]))
console.log("9:findIndex",arr,findIndexele);

// [11] filter, Creates a new array with elements that passes the test provided as a function.
let filterarr = arr.filter((e)=> e!=='apple' && e!=='hp')
console.log("10:filter",arr,filterarr);


// ====================================================================
// Methods to transform the Array		

// [12] reduce, Executes a defined function for each element of passed array and returns a single value
// array.reduce(callback(accumulator, currentValue, index,array),initialValue)

let reducevalue1  = [22,33,44,99,10].reduce((a,c)=> c>a? c:a, 0) //max value
console.log(reducevalue1);
let reducevalue2  = [[0, 1], [2, 3], [4, 5]].reduce((a,c)=> a.concat(c),[]) //Flatten an array of arrays
console.log(reducevalue2);
let reducevalue3  = [{x: 1}, {x: 2}, {x: 3}].reduce((a,c)=> a + c.x, 0) //sum of value
console.log(reducevalue3);
// Counting instances of values in an object
let a1 = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
let reducevalue4  = a1.reduce((a,c)=>{
    if(c in a){
        a[c] += 1
        // console.log("1",a,c);
    }else{
        // console.log("2",a,c);
        a[c] = 1
    }
    return a
} ,{}) 
console.log(reducevalue4);

// Grouping objects by a property
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];

    //   {
    //   20: [
    //     { name: 'Max', age: 20 },
    //     { name: 'Jane', age: 20 }
    //   ],
    //   21: [{ name: 'Alice', age: 21 }]
    // }

let reducevalue5 = people.reduce((a,c)=>{
    if(c.age in a){
        console.log(c);
        a[c.age]=[...a[c.age], c]
    }else{
        console.log(c);
        a[c.age]=[c]
    }
    return a
}, {})

console.log(reducevalue5);

// -----------------------------
let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]

let reducevalue6 = friends.reduce((a, c) =>{
    console.log("a", a);
    console.log("c", c);
  return [...a, ...c.books]
}, ['Alphabet'])

console.log(reducevalue6);

// Remove duplicate items in an array

let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let reducevalue7 = myArray.reduce((a,c)=>{
    if (a.indexOf(c) === -1) {
        a.push(c)
      }
      return a
    }, [])

console.log(reducevalue7);

console.log(myArray.join(" "));