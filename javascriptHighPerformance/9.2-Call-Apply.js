// call() is a predefined js method
// with call(), an object can use a method belonging to another object 
// function borrowing
// call() takes argument seperately , pass parameter by comma separated

// call() method which is used to invoke a function directly bt passing in the refernce which point to the this variable inside the method

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

person.desc()

const person2 = {
    name : 'Kushwaha',
    profile: 'Technology Analyst',
    company: 'Infosys',
}


person.desc.call(person2)
person.favFood.call(person2, 'Butter Chicken', 'panner bhurgi')


// apply method is similar to Call() method.
// call() takes argument seperately and apply method takes as an array 

const  person3 = {
    name : 'Kuku',
    profile: 'kid',
    company: 'Kinder garden',
}

person.desc.apply(person3)
person.favFood.apply(person3, ['toffee', 'ice cream'])