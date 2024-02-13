Scope of a Variable: The word scope means the extent to which we can use something. In programming variable scope means the extent to which we can use a variable within a program.

# In NODE there are mainly 3 types of scopes:

# Local scope 
Local variables are defined by the functions. Variables having a local scope restricts their usage to the function in which they are defined.
It’s also known as Default Scope.

# Global scope
When you’re in the global scope `var something` of a browser will define a global variable because the global scope is the highest scope in browsers where it is not the same case in Node. Inside a Node module, a variable will be limited to that module only; and global scope will not be the top scope anymore

# Script scope
The Script scope is actually a place to keep the variables that are shared and strictly not exposed to the Global scope. Each child in a script or script module shares the Script scope

# In JavaScript there are mainly 3 types of scopes:

# Block scope
Variables declared inside a `{ }` block cannot be accessed from outside the block:
`let` and `const` These two keywords provide Block Scope in JavaScript.
{

}

# Function scope
Each function creates a new scope.Variables defined inside a function are not accessible (visible) from outside the function.
Variables declared within a JavaScript function, become LOCAL to the function. Variables declared with `var`, `let` and `const` are quite similar when declared inside a function.

function(){

}

# Global scope
A variable declared outside a function, becomes GLOBAL.global variables are deleted when you close the browser window (or tab).
If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

function abc(){ 
    l3 = 'orange'
}
abc()
console.log(l3)


