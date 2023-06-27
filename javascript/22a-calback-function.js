// any function that is passed as an argument
// a callback is a function that is to be executed after another function has finished executing : hence the name call back ( Callbacks make sure that certain function doesn’t execute until another function has already finished execution.)
// js is an event driven language. this means that instead of waiting for a response before moving on, js will keep executing while listening to other events
// callbacks are a ways to make sure certain code couldn't execute until other code already finished execution
// ------------------------------------------------

function a(friend, callfriend){
    console.log(friend);
    callfriend()
}

function b(){
    console.log('hey whats up');
}

// a('visheshta', b)

// Callback hell, which is also called a Pyramid of Doom, consists of more than one nested callback which makes code hard to read and debug. As calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if we have more loops, conditional statements, and so on in the code.
function f1(){
    console.log("inside f1");
    function f2(){
        console.log("inside f2");
        function f3(){
            console.log("inside f3");
        }
        f3()
    }
    f2()
}
// f1()

// doSomething(function(result){
//     doSomethingElse(result,function(newResult){
//         doThirfThing(newResult,function(finalResult){
//             console.log('Print the final result ' +finalResult);
//         }, failureCallback);
//     }, failurCallback);
// }, failureCallback);


function doSomething(t1, callback1){
    setTimeout(()=>{
        console.log('inside 1st ', t1);
    }, 1000)
   callback1(t1,'painting', doThirdThing)
}
 
function doSomethingElse(t1, t2, callback2){
    console.log(t1, t2);
    callback2(t1,t2,'traveling')
}
function doThirdThing(t1, t2, t3){
    console.log(t1, t2, t3);
}

// doSomething('cooking', doSomethingElse)

const sum1 = (v1) =>{
    setTimeout(()=>{
        console.log(v1);
        v1+=20
        
    },1000, (v1)=>{
        console.log(v1);
        if(v1>20){
            console.log(v1);
        }
    })
    
}

sum1(10) 