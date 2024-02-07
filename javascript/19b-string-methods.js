// indexOf()
// search()

// extraction methods
// A. String extraction methods

// [1] slice: 
// str.slice(startindex, [,endIndex]) it return the extracted part as new string, withod changing the original string
let str1 = 'First second third fourth'
console.log(str1)
console.log('1a--',str1.slice(10))
console.log('1b--',str1.slice(-10))
console.log('1c--',str1.slice(10, 15))
console.log('1d--',str1.slice(-10, -5))

// [2] substr: 
// str.slice(startindex, [,noOfCharactors]) it return the extracted part as new string, withod changing the original string
console.log(str1)
console.log('2a--',str1.substr(10))
console.log('2b--',str1.substr(-10,4))

// [3] substring: 
// str.slice(startindex, [,endIndex]) . It cannot take -ve values
console.log(str1)
console.log('3a--',str1.substring(10))
console.log('3a--',str1.substring(-10)) // didnt work


// B. Charactor extraction methods
// [4] charAt() : returns Character
console.log(str1)
console.log('4a--',str1.charAt())
console.log('4b--',str1.charAt(10))

// [5] charCodeAt() : returns unicode UTF-16
console.log('5a--',str1.charCodeAt())
console.log('5b--',str1.charCodeAt(10))