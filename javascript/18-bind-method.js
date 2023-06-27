// by bind() method, we can bind a method to a common function, so that the functions gives different result when its need. 
// bind give the copy of method which can be involved later 


// [1]
const youtuber = {
    name: "artist",
    content: 'painting',
    feature : function(){
        console.log(this.name , " run a channel ", this.content);
    }
}


let a = youtuber.feature;
a()
const youtuber11 = {
    name: "manoj",
    content: 'painting'
}

let b = youtuber.feature.bind(youtuber11)  // bind() takes object as their first argument and creates a new function.
b()
console.log("youtuber11 : ",youtuber11);

// [2]

const youtuber1 = {
    name: "manoj",
    content: 'painting'
}
const youtuber2 = {
    name: "raju",
    content: 'painting'
}

function feature(ratings){
    console.log(this.name, "is rating his channel", ratings);
}

feature(5)
let c = feature.bind(youtuber1)
c(6)
console.log(youtuber);