// With the bind() method, an object can borrow a method from another object.
// by bind() method, we can bind a method to a common function, so that the functions gives different result when its need. 
// bind give the copy of method which can be involved later 
const person = {
    name : 'Visheshta',
    profile: 'Associate',
    company: 'CTS',
    desc : function(){
        console.log(`I am ${this.name} working as ${this.profile} in ${this.company}`)
    },
    favFood: function(f1,f2){
        console.log(`my favorite foods are ${f1} ${f2}`)
    }
}

const person2 = {
    name : 'Kushwaha',
    profile: 'Technology Analyst',
    company: 'Infosys',
}

let b1 = person.desc.bind(person2)
b1()
let b2 = person.favFood.bind(person2, 'cake', 'ice-cream🍧')
b2()


// [2] Preserving this
// Sometimes the bind() method has to be used to prevent losing this.

// --> When a function is used as a callback, this is lost.
setTimeout(person.desc, 3000)

// the bind() method is used to bind person.display to person
let display = person.desc.bind(person)
setTimeout(display, 3000)

