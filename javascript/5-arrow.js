//arrow function also known as fat arrow function 
// one of the popolar feature of ES6. They introduce the new way of writing concise code 

const person = {
    fname:"",
    lname:"",
    age:25,
    setName : function(name) {
        let splitN = function(name){
            let a = name.split(' ');
            this.fname = a[0];
            this.lname = a[1]; //this, "this" is not refering to person object
            console.log(this) // refering to global object
        }
        splitN(name);
        console.log(this)
    }
}; 

person.setName('visheshta kushwaha')
console.log(person.fname); // displaying blank

const bio = {
    fname:"",
    lname:"",
    age:25,
    setName : function(name) {
        let splitN = (name) =>{
            let a = name.split(' ');
            this.fname = a[0];
            this.lname = a[1];
            console.log(this)
        }
        splitN(name);
        console.log(this)
    }
}; 

bio.setName('nony kushwaha')
console.log(bio.fname);

