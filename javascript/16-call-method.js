// call() is a predefined js method
// with call(), an object can use a method belonging to another object 
// function borrowing
// call() takes argument seperately , pass parameter by comma separated

// call() method which is used to invoke a function directly but passing in the refernce which point to the this variable inside the method
const youtuber1 = {
    name: "Picaso",
    content: 'painting',
    feature : function(){
        console.log('1a---feature:',this.name , "runs a channel", this.content);
    },
    share : function(subscribe){
        console.log('1b---share:',this.name, "pls do", subscribe);
    }
}


const youtuber2 = {
    name: "sunny",
    content: 'reactjs',
}

youtuber1.feature();
youtuber1.feature.call(youtuber2)

youtuber1.share("like and subscribe");
youtuber1.share.call(youtuber2, "eat heathy")

// "call" is used to change the reference or context or value of "this" object

let obj = {
    a: 5
}

function test(obj){
    // assign the reference of "obj" object to "this"

    // this=obj            //SyntaxError: Invalid left-hand side in assignment, js dont allow to assign anything to this

    console.log('2a---', this)      //global object
}

test(obj)
//---------------------------------------------

function test1(...data){
    console.log('2b---', this, data)      //obj object
}

console.log('-----call')
test1.call(obj)     // first parameter is by default assign to this
test1.call(3)     
test1.call(obj, 3,6)

console.log('-----apply')
// apply is very similar to "call", but in apply you pass the parameters inside array, and it can only take max two parameters
test1.apply(obj)     // first parameter is by default assign to this
test1.apply(3)     
test1.apply(obj, [3,6,{y:9}, 0])

console.log('-----bind')
// bind is very similar to "call" syntactically, but "call" change the reference and executes the function immediately but 
// "bind" change the reference but does not executes the function immediately instead return the function
const bind1 = test1.bind(obj)
bind1()