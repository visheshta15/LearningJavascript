// Immedaitely invoked function Expression
// js functions that runs as soon as it is defined 

// (function (){
//     let name = "kush";
//     console.log('hi my name is', name);
// })()

(function(name){
    console.log('hi my name is', name);
}) ('vish');


// IIAF -  Immediately Invoked Arrow function	
(() => console.log("IIAF"))();
