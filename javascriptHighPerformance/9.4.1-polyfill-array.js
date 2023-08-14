let arr = [1,2,3,4]

// [1]
let concatArr = arr.concat(['a', 'b', 'c'])
console.log('1------------------')
console.log(arr, concatArr)

// [2]
Array.prototype.doubleno = function(){
    let oldArr = this
    let newArr = []
    for(let i=0; i<oldArr.length; i++){
        newArr.push(oldArr[i]*2)
        
    }
    return newArr
}
console.log('2------------------')
console.log(arr.doubleno())

// [3] multiply array by a number
Array.prototype.multiplyBy = function(...args){
    let oldArr = this
    let newArr = []
    for(let i=0; i<oldArr.length; i++){
        newArr.push(oldArr[i]*args)
    }
    return newArr
}
console.log('3------------------')
console.log(arr.multiplyBy(1))
console.log(arr.multiplyBy(2))
console.log(arr.multiplyBy(3))
console.log(arr.multiplyBy(4))


// [4] add data before and after array element
console.log('4------------------')
let arr1 = [2,4,6]

Array.prototype.addData  = function(...args){
    let oldArr = this
    let newArr = []
    console.log(oldArr, args)
    for(let i=0; i<oldArr.length; i++){
        newArr.push(args[0] + oldArr[i] + args[1])
    }
    return newArr

}

console.log(arr1.addData('before ', ' after'))