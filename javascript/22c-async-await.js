// call back hell se bachne k liye we use promises but due to consume multiple .then , now will use await

// When an async function is called, it returns a Promise. When the async function returns a value, the Promise will be resolved with the returned value. When the async function throws an exception or some value, the Promise will be rejected with the thrown value.
// An async function can contain an await expression, that pauses the execution of the async function and waits for the passed Promise's resolution, and then resumes the async function's execution and returns the resolved value.


// [1] When an async function is called, it returns a Promise(fullfilled)
// [1a] no need to write return statement, it will return fullfilled state
// [1b] to return a fullfilled state, throw statement is written to reject a promise

const regularFunction = () => {

}
console.log('1a.--- regular function output', regularFunction())

// async function asyncFunction() {
const asyncFunction = async () => {
    // throw new Error('bad data')
}
console.log('1b.--- async function output', asyncFunction())


// [2] when a function is asynchronous ie, async that means it is returning a promise & also that function becomes thenable
const getArr = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve([1,2,3,4,5])
        // reject('error in expression');
    }, 1000)
}) 

const getObj = (indexdata) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({...{name: 'vish',age: 20}, id: indexdata })
        }, 2000, indexdata)
    })
}


const getdata = async ()=>{
    try {
        const a1 = await getArr;
        console.log('2a.---', a1);

        const a2 = await getObj(a1[1]);
        console.log('2b.---',a2);
        return {a1, a2}
    } catch (error) {
        console.log(error);
    }
}

getdata().
then(data => console.log('2c.---',data))

// [3] with await, you dont have catch configured with it. to handle the error use try...catch statement