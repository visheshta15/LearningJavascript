// this keyword 
// js keyword which refer to the object it belongs to
// it has different value based on where it is used

// [1] In an object method, this refers to the object.
const person = {
    name : 'Visheshta',
    profile: 'Associate',
    desc : function(){
        return `I am ${this.name} working as ${this.name} in CTS`
    }
}

console.log(person.desc())


// [2] Alone, this refers to the global object.
console.log(this)

"use strict";
let x = this;
console.log(x)


//[3] In a function, this refers to the global object.
function abc(){
    console.log(this)
}
const xyz = () =>{
    console.log(this)
}
abc()
xyz()


// [4] In a function, in strict mode, this is undefined.
function abc1(){
    "use strict";
    console.log(this)
}
const xyz1 = () =>{
    "use strict";
    console.log(this)  // not undefine in arraw function
}
abc1()
xyz1()


// [5] In an event, this refers to the element that received the event.
let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    console.log(this.innerText)
    this.style.background = 'red'
})


// Methods like call(), apply(), and bind() can refer this to any object.


// ---------------------------------
const myWindow = window.open('','MsgWindow', "width=600, height=700")
myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
// setTimeout(myWindow.close, 3000)
setTimeout(()=>myWindow.close(), 3000)