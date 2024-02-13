// With the bind() method, an object can borrow a method from another object.
// by bind() method, we can bind a method to a common function, so that the functions gives different result when its need. 
// bind give the copy of method which can be involved later 


// [1]
const youtuber = {
    name: "artist",
    content: 'painting',
    feature : function(){
        console.log(this.name)
        return `feature: ${this.name} run a channel ${this.content}`
    }
}
 

let a = youtuber.feature()
console.log("1a.--- youtuber  : ", a);
 
const youtuber2 = {
    name: "manoj",
    content: 'painting'
}

let b = youtuber.feature.bind(youtuber2)  // bind() takes object as their first argument and creates a new function.
console.log("1b.--- youtuber2 : ", b());


// [2]
const youtuber3 = {
    name: "raju",
    content: 'painting'
}

function feature(ratings){
    return `feature: ${this.name} is rating his channel ${this.content} : ${ratings}`
}

feature(5)
let c = feature.bind(youtuber2)
console.log('2a.--- youtuber3 : ', c(6));



// [3] Preserving this
// Sometimes the bind() method has to be used to prevent losing this.

// --> When a function is used as a callback, this is lost.
setTimeout(youtuber.feature, 3000)

// the bind() method is used to bind person.display to person
let d = youtuber.feature.bind(youtuber)
setTimeout(d, 3000)
