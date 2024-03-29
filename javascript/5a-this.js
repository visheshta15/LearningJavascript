// this keyword 
// it contain the current context 
// js keyword which refer to the object it belongs to
// it has different value based on where it is used 
// -----------------------------------------

// [1] alone , this refer to the global object
console.log('1---',this);

// [2] in Regular function, this refers to global object 
function sum(a,b){
    var add = a+ b;
    console.log('2---', this);  // globl object
}

sum(10,10)


// [3]In a function, in strict mode,

function sum1(a,b){
    "use strict"
    var add = a+ b;
    console.log('3a---', this);  // undefined
}
sum1(10,10)

const xyz1 = () =>{
    "use strict";
    console.log('3b---', this)  // not undefine in arraw function
}
xyz1()

// [4]in a method , this refer to the owner method 
const bio = {
    name: "vish",
    age: "25",
    sum : function(){
        console.log('4a---',this);

        function child1(){
            this.name= "kush";
            console.log('4b---',this); // global object
        }
        child1()

        const child2 = () => {
            console.log('4c---',this); // bio object
        }
        child2()
    },
    sub : () => {
        console.log('4d---',this); // global object
    }

}

bio.sum();
bio.sub();

// [1] example1
const person1 = {
    fname:"-",
    lname:"-",
    age:25,
    setName : function(name) {
        let splitN = function(name){    //regular function
            let a = name.split(' ');
            this.fname = a[0];
            this.lname = a[1]; //this, "this" is not refering to person1 object
            console.log('4a---',this) // refering to global object
        }
        splitN(name);
        console.log('4b---',this)
    }
}; 

person1.setName('visheshta kushwaha')
console.log('4c---',person1.fname); // displaying blank

const person2 = {
    fname:"-",
    lname:"-",
    age:25,
    setName : function(name) {
        let splitN = (name) => {        //arrow function
            let a = name.split(' ');
            this.fname = a[0];
            this.lname = a[1];      //this, "this" is refering to person2 object
            console.log('5a---',this)
        }
        splitN(name);
        console.log('5b---',this)
    }
}; 

person2.setName('nony kushwaha')
console.log('5c---',person2.fname);         // nony


// [5] In an event, this refers to the element that received the event.
let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    console.log('5---', this.innerText)
    this.style.background = 'red'
})