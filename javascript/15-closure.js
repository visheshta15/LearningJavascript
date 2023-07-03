// closure 
// - closure in action that is inner function can have the access to the outer function variables as well as global variables.
// defined outside the current scope is accessed from within some inner scope 
//---------------------------------------------------
// Global variables can be made local (private) with closures.
// a function along with its Reference to its outer envirnoment --> together form a closure
// closure is a combination of function and its lexical scope (bundled together to form a closure)


// drawbacks:
// overconsumption of memory
// and if not handle properly can leads to memory leaks
// whenever a closure is formed, it consumed alot of memory,  it is not garbage collected

//-> since the closure's scope property contains references to the same objects as the execution context's scope chain, there is a side effect. Closures requires more memory overhead in a script than a non-closure memory

// garbage collector is like a program in browser or js engine, it kind of freeze up the unutilised memory

function outer(){
  let a = 10;
  return function inner(){
    console.log("closure--: ", a);
  }
}

let outf = outer()
outf()

outer()()


// [1]
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

function myFunction() {
    a = 4;
    return a
  }

// console.log(myFunction(),a);

// [2]
// A closure is a function having access to the parent scope, even after the parent function has closed.
function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

//   add5 and add10 are both closures, In add5's lexical environment, x is 5, 

// [3]
function create(){
    let count = 0;
    return{
        inc : function(){
            count+=3
        },
        print: function(){
            console.log(count);
        }
    }
}

let c = create();
c.inc()
c.print()



// ----------------------------------------
const a = (arg1) =>{

  return function desc(arg2){
      console.log(arg1 , "---",  arg2);
  }

  
}
let b = a('apple')
b('grapes')