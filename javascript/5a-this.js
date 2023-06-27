// this keyword 
// js keyword which refer to the object it belongs to
// it has different value based on where it is used 
// -----------------------------------------

// [1] alone , this refer to the global object
console.log(this);

// [2] in Regular function, this refers to global object 
function sum(a,b){
    var add = a+ b;
    console.log(add);
    // console.log(this);  // globl object
}

sum(10,10)


// [2a] in Regular function, in strict mode , this refers to undefine 

// [3]in a method , this refer to the owner method 
const bio = {
    name: "vish",
    age: "25",
    sum : function(){
        console.log(this);

        const child2 = () => {
            this.name= "nony";
            console.log(this); // global object
        }
        child2()

        function child(){
            var name= "nony";
            // console.log(this); // global object
        }
        child()
    }
}

bio.sum();