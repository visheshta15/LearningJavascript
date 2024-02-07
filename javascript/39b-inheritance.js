// inheritance or subclassing

// with "ES5" there were different ways for inheritance
// with "ES6" "extends" is the keyword to inherit a class 

// inheritance is needed when you have unique and common members

// [1] extending a build in class 
console.log('1. extending a build in class ---------------------')
class StringChild extends String {
    noc(str){
        try {
            console.log(str.length)
        } catch (error) {
            console.log('not a valid string')
        }
    }
}

const obj = new StringChild('Visheshta Kushwaha')
console.log(obj)
console.log(obj.toLowerCase())
console.log(obj.toUpperCase())
obj.noc()
obj.noc('')
obj.noc('kush')
obj.noc(9)


// [2] extending a custom class 
console.log('2. extending a custom class ------------------------')
//  "super" is a keyword which allows you to access parent class members
// super() : call parent constructor 
// super.method() : call parent method
// super.propert() : call parent properties

class Parent{
    constructor(b){
        console.log('parrent constructor')
        this.b = b+1
    }
    pMethod(){
        console.log('parrent method', this.b)
    }
}

class Child extends Parent {
    constructor(a){
        super(a);   // using "super" keyword accessing parent constructor
        this.a = a
    }
    cMethod(){
        // to call parent call method 
        super.pMethod()         // using "super" keyword accessing parent method
    }
    pMethod(){
        console.log('child method', this.a)
        // super.pMethod()  // to access same method from parent
    }
}

const childObj = new Child(12)

childObj.cMethod()
childObj.pMethod()