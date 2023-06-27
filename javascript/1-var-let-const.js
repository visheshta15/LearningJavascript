
// var
// [1]used in older version
// [2]function scoped : it will die at the end of function is defined
// [3]variable defined with var get hoisted at the top of the function
//-------------------------------
var name1 = 'vish';
name1 = 'kush'
console.log(name1);

var place1 = "London";
function functionScope(arg1){
    if(arg1){
        console.log(fn)   //[3]
        var fn = 'harry';
        var ln = "potter";
        var place1 = "Delhi";
        console.log('functionScope:',place1);
    }
    console.log('functionScope:', fn , ln, place1);  //[2]
}

functionScope(true);

// let and const are the part of es6
// block scope: the variable defined with let with die at the end of block define
//--------------------------------------

// let 
//-----------------------------
let  name2 = 'vish';
name2 = 'kush'
console.log(name2);

// const : after first assigning a value you cannot reassign a value / but can modify it
// ---------------------------
const name3 = 'vish';
// name3 = 'kush'; error: TypeError: Assignment to constant variable.
console.log(name3);

// const c ;  //SyntaxError: Missing initializer in const declaration
let l;

let place2 = "London";
function blockScope(arg1){
    if(arg1){
        // console.log(fn)  //ReferenceError: Cannot access 'fn' before initialization  [3]
        let fn = 'harry';
        const ln = "potter";
        let place2 = 'mumbai';
        console.log("blockScope: ", place2)
    }
    // console.log(fn , ln) //--ReferenceError: fn is not defined  [2]
    console.log("blockScope: ", place2)
}
blockScope(true);



// -----------------------------------------
// temperal dead zone where variable are in the scope but not yet declared
function abc(){
    // console.log(a,b,c); // Cannot access 'b' before initialization

    var a = 10;
    let b = 10;
    const c = 10;
}

abc()

// -----------------------------------------
const c1 = {a:3, b:4}
c1.a = 5
console.log(c1)

const c2 = Object.freeze({x:2, y:4})
console.log(c2);
c2.x = 4;
console.log(c2); //it wont update the value of x


// -----------------------------------------
var b2 = 10
{
    let b2 = 20
}
let a2 = 10
{
    // var a2 = 20
}