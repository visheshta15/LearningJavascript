//function declaration
// ---------------------------------------
// [2] can call function before declaring it
funcD()

// [1] function and function name
function funcD() {
    console.log("function declaration");
}


//function expression
// ------------------------------------------
// [2]
// funcE() // Cannot access 'funcE' before initialization

// [1] anonomous function assign to a variable
let funcE = function(){
    console.log("function expression");
}