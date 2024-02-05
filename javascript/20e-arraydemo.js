const f1 = ["Banana", "Orange", "Apple", "Mango" , "Aam"];
const f2 = [30, 25, 11, -1, -22, 0 ,4, -12];
// console.log("sort", f1.sort())
// console.log(f1)
// console.log("reverse", f1.reverse())
// console.log("sort reverse", f1.sort((x,y)=> x < y ? 1 : -1))
// console.log(f1.sort((x,y)=> console.log(x,y)))
// console.log(f2.sort((x,y)=> x>y? 1: -1))


let arr = ["Android", "ios", "Windows", "blackberry"];

// console.log(arr.find((e)=> e=="ioas"));
// console.log(arr.findIndex((e, index)=> e=="ios" ));
// console.log(arr)

// let ar = [22,33,44,99,10]
// console.log(Math.max(...ar))
// console.log(ar.reduce((a,c)=> a<c? c:a, 0))

// console.log([[0, 1], [[2]], [4, 5]].reduce((a,c)=> a.concat(c), []))

// let a1 = []
// function fl(a){
//     // console.log(a.length)
//     for(let i=0; i< a.length; i++){
//         // console.log(a[i])
//         if(typeof(a[i]) == "object"){
//             fl(a[i])
//         }else{
//             a1.push(a[i])
//         }
//     }
// }

// fl([[0, 1], [[2]], 4,  [4, 5]])
// console.log(a1)


let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];


console.log(people.reduce((a,c)=> {
    if(c.age in a){
        console.log(c)
        a[c.age] = [...a[c.age], c ]
    }else{
        console.log("-----",c)
        a[c.age] = [c]
    }
    return a
} ,{}))


let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']

console.log(myArray.reduce((a,c)=> {
    if(a.indexOf(c) === -1){
        a.push(c)
        console.log(c)
    }
    return a
} , []))

const dup = new Set(myArray)
console.log(dup)
const dupa = Array.from(dup)
console.log(dupa)