/* eslint-disable no-undef */
var v3 = 'mango'    //global scope
{
    let l1 = 'apple'      //block scope
    var v1 = 'chickoo'    //block scope
}

console.log(v1)       // chickoo


function abc(){
    let l2 = 'grapes'    //function scope
    var v2 = 'grapes'   //function scope
    
    l3 = 'orange'       //global scope
}
//cannot access l2 and v2
abc()
console.log(l3)


