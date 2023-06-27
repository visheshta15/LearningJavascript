// for/in statement, loop through the properties of an object

const bio = {
    name: 'vish',
    age: 25,
    profile: 'ta',
    lang: 'reactjs'
}

// [1] object iterarte
for (let x in  bio){
    console.log(x, " : " , bio[x]);
}

// [2] convert object into an array
// keys 
// ------------------------
console.log('--------------keys');
let keyarr = Object.keys(bio)
console.log(keyarr);

Object.keys(bio).map((e)=>
    console.log(e, bio[e])
)
console.log('--------------values');
// values
console.log(Object.values(bio));
Object.values(bio).map((e)=> console.log(e) )

//entries
console.log('--------------entries');
console.log(Object.entries(bio));
Object.entries(bio).map((e)=> console.log(e[0], e[1]))