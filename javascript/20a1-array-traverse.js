// for/of statement, loop through the values of iterable objects --> array, string 

const lang = ['c++', 'python', 'java', 'php'];
for (let x of lang){
    console.log('for...of', x);
}

for (let x of "java"){
    console.log('-',x);
}

for (let i = 0; i < lang.length; i++) {
    console.log(lang[i]);
}


// for/in statement, loop through the properties of an object
// for/in statement, loop through the indexes of array
for(let i in lang){
    console.log('for...in', i)
}