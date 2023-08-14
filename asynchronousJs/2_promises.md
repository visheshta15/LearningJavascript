# Promise 
is a special JavaScript object that represents an eventual result of an asynchronous action.

A promise is kind of a proxy for a value that you don't have yet.

# scenario
Let's imagine that we have an asynchronous function that reads the contents of an external file. The process of reading from file can take some time. Let's say 3 seconds. During those 3 seconds, we won't have any results from that function. So how should we handle this?
--> Actually, we have at least two options in this case.

1. `pass a callback into the asynchronous function` 
This callback will be invoked after 3 seconds with the results of the function as an argument.

2. `return a promise immediately.`
It will not contain the specific value during those 3 seconds, but at least we will have something that we can use as a substitute of that value.
The benefit of this approach is that we can use this value right away. We can already pass this promise as an argument to other functions and assign it to variables.

# A promise object has two internal properties.
1. promise status
2. promise value

# promise can be in one of three states 
pending : undefine
fullfilled
rejected


# how to create a promise
There is a special class in JavaScript which is called promise. If you want to create a promise, you simply need to create an instance of this class.

const newPromise =  new Promise( function(resolve,reject)=>{
    
})

The Promise constructor takes only one argument, and that's a function. This argument is required and you can't create a promise without it. This function is called executable function, and it's invoked at that very moment when we are creating a promise.

This function takes two arguments resolve and reject. Both of them are functions as well.