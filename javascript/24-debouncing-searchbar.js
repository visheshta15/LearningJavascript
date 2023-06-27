// Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.

// However, if the debounce button is clicked once, and again clicked prior to the end of the delay, the initial delay is cleared and a fresh delay timer is started. The clearTimeout function is being used to achieve it.
// The general idea for debouncing is:
// 1. Start with 0 timeout
// 2. If the debounced function is called again, reset the timer to the specified delay
// 3. In case of timeout, call the debounced function
// Thus every call to a debounce function, resets the timer and delays the call.
// limiting the rate of function call

// Application
// Search box suggestions, text-field auto-saves, and eliminating double-button clicks are all use cases for debounce.

let a1 = document.getElementById('input');
let counter = 0;
console.log('debouncing');

const getData = () =>{
    console.log('fetching data', counter++, a1.value);
    
}
// dont want the api call at every key stroke
// only call getdata method when the time delay of keypress event is more then 300ms
// d- delay between two key press event

const debounce = function(fn, delay){
    let timer;
    return function(){
        let context = this, args = arguments;
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(context, args)
        }, delay)
        console.log(timer);
        // console.log(context, args);
    }
}

const betterFunction = debounce(getData, 300)

// window.addEventListener("scroll", betterFunction);




