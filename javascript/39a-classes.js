// the whole concept of class is to create a blueprint or design or commonly referred as the "prototype"

// [1] 
console.log('1.---------------------------------')
// constructor function syntax is the "ES5" way to create a class
// "constructor" : is a method which is executed immediately you create the instance of a class

let getData = 'showData'
class House{
// const House = class {               // class expression
    constructor(nDoors, nWindows){
        console.log('constructor called...')
        this.nDoors = nDoors
        this.nWindows = nWindows
    }
    [getData](){
        console.log(`doors count is ${this.nDoors} and windows count is ${this.nWindows}`)
    }
    static test(){
        console.log('calling static method')
    }
}

const obj1 = new House(2,5);
const obj2 = new House(3,7);
obj1.showData()
obj2.showData()

// if you want to excess the member without instantiating a class 
House.test()

//[2] Regular function acting like a class
console.log('2.---------------------------------')

function Home(data){
    console.log('called')  // acting like constructor
    this.accessories = data
}

var homeObj = new Home('dinning table')
console.log(homeObj)