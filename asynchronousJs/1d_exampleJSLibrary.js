// Callbacks are pretty universal solution for handling asynchronous actions.

// [1]
// passing print function as an argument and not invoking straight away, as there are not brackets after print
// print function will get invoked by forEach method, and print function will get invoked each time for each element of array
function print(no) {
    console.log(no)
}

const number = [...Array(6).keys()]
number.forEach(print)
number.forEach((val)=> console.log(val))

// [2]
// so when u set the state, the state wont get updated instantly, so if want to perform any action after setting the state, use callback 

// console.log(this.state.count)  // prints 1
let newState = {count: 2}
// setState(newState, callback)
// console.log(this.state.count)  // prints 1

// [3]
// const btn = document.querySelector('button')
// btn.addEventListener('click', (e)=> alert('button click'))
