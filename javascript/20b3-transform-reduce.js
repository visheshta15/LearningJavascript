// Methods to transform the Array		

// [1] map
// array.map(callback(element, index))
console.log('map ----------------------------------------')

// [1a] find length of each Element of array 
let arr = ["Android", "ios", "Windows", "blackberry"];
let eleLength = arr.map((ele) => ele.length)
console.log('find length of each Element of array :', arr, eleLength)


// [2] reduce
// Executes a defined function for each element of passed array and returns a single value
// array.reduce(callback(accumulator, currentValue, index,array),initialValue)
// help you to loops through all element and gives you the combined result

console.log('reduce ----------------------------------------')

// [1] max value
const arr1 = [22,100,44,99,10]
let maxValue = arr1.reduce((a,c)=> a>c ? a : c)
console.log('1. max value',arr1, maxValue)

// [2] Flatten an array of arrays
const arr2 = [[0, 1], [2, 3], [4, 5],9]
// let flatArr = arr2.reduce((a,c)=>{
//   if(typeof(c) == "object"){
//     a = [...a,...c]
//   } else {
//     a.push(c)
//   }
//   return a
// }, [])
let flatArr = arr2.reduce((a,c)=>a.concat(c) , [])
console.log('2. Flatten an array',arr2, flatArr )

// [3] sum of value
const arr3 = [{x: 1}, {x: 5}, {x: 3}]
let sov = arr3.reduce((a,c)=>a+=c.x , 0)
console.log('3. sum of value',arr3, sov )

// [4] count the average of elements
let arr4 = [2,3,3,5,7,10]
let avg = arr4.reduce((a,c,i,arr)=>{
  a+=c
  if(arr.length-1 === i){
    return a/arr.length
  } 
  return a
},0)
console.log('4. average of elements',arr4, avg )

// [5] Counting instances of element of an array
let arr5 = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
const instanceCount = arr5.reduce((a,c)=>{
  if(c in a){
    // a[c] = a[c]+1
    a[c] += 1
  } else{
    a[c] = 1
  }
  return a
}, {})
console.log('5. Counting instances of element of an array',arr5, instanceCount )

// [6] Grouping objects by a property age
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

const groupPeople = people.reduce((a,c)=> {
  if(c.age in a){
    // a[c.age] = a[c.age].concat( [c])
    a[c.age] = [...a[c.age], c]
  }else {
    a[c.age] = [c]
  }
  return a
}, {})
console.log('6. Grouping objects by a property age', groupPeople )

// [7] get list of books

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
  let groupBooks = friends.reduce((a,c) => {
    a = [...a, ...c.books]
    return a
  },[])

  console.log('7. get list of books', groupBooks )

// [8] Remove duplicate items in an array

let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let uniqueArr = myArray.reduce((a,c) => {
  // if(!a.includes(c)){
  if (a.indexOf(c) === -1) {
    a = [...a, c]
  }
  return a
},[])
console.log('8a. Remove duplicate items in an array', myArray, uniqueArr )
