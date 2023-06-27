// ^[a-zA-Z0-9_]+@[a-z]+\.(com|in)$
// ^[\w]+@[a-z]+\.(com|in)$
let regex1 = /^[\w]+@[a-z]+\.(com|in)$/

// exec --- return array or null
console.log("1 exec : ", regex1.exec('vid@gmail.com')) //return array or null
console.log("2 exec : ", regex1.exec('9vid@gmail.com')) //return array or null
console.log("3 exec : ", regex1.exec('AA9vid@gmail.com')) //return array or null
console.log("4 exec : ", regex1.exec('AA9vid@gml.om')) //return array or null


// test --- return boolean true or false
console.log("1 test : ",regex1.test('vid@gmail.com')) // return boolean true or false
console.log("2 test : ", regex1.test('9vid@gmail.com')) //return array or null
console.log("3 test : ", regex1.test('AA9vid@gmail.com')) //return array or null
console.log("4 test : ", regex1.test('AA9vid@gml.om')) //return array or null



// string object method 
let str2 = 'hwllo world bello cello mello'

//search
console.log("1 search : ",str2.search(/ll/))  // return index of matched string or -1
console.log("2 search : ",str2.search(/lel/))  // return index of matched string or -1
console.log('i','Albert Einstein was born in Ulm, on 1403/1879'.search(/([\d]{2}\[\d]{2}\/[\d]{4})/))
console.log('ii','Born on 1403/18/79'.search(/([\d]{4}\/[\d]{2}\/[\d]{2})/))
console.log('iii','Born on 14/18/79'.search(/([\d]{4}\/[\d]{2}\/[\d]{2})/))

//match
console.log("1 match : ",str2.match(/ll/))  // return arary or null
console.log("2 match : ",str2.match(/lil/))  // return arary or null
console.log("3 ", 'caaaer'.match(/c[a]*/))
console.log("4 ", 'caaaer'.match(/c[a]*r/))

//replace
console.log(str2.replace(/ll/g, 'he'))  // return string with replaced leters


