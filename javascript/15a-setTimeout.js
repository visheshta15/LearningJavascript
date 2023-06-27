// [1]
function x(){
    for (var i=0; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        },i* 1000)
    }
    console.log('inside function x()');
}
// x();

// [2]
function y(){
    for (let i=0; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        },i* 1000)
    }
    console.log('inside function x()');
}
// y();

// [3]
function z(){
    for (var i=0; i<=5; i++){
        let a = i
        setTimeout(function(){
            console.log(a);
        },a* 1000)
    }
    console.log('inside function x()');
}
// z();


// [4]
function u(){
    for (var i=0; i<=5; i++){
        function close(i){
        setTimeout(function(){
            console.log(i);
        },i* 1000)
        }
        close(i)
    }
    console.log('inside function x()');
}
u();