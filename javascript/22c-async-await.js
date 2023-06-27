// call back hell se bachne k liye we use promises but due to consume multiple .then , now will use await

// When an async function is called, it returns a Promise. When the async function returns a value, the Promise will be resolved with the returned value. When the async function throws an exception or some value, the Promise will be rejected with the thrown value.
// An async function can contain an await expression, that pauses the execution of the async function and waits for the passed Promise's resolution, and then resumes the async function's execution and returns the resolved value.

const probj1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        let a = [1,2,3,4,5]
        resolve(a)
        // reject('error in expression');
    }, 1000)
}) 

const bioData = (indexdata) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let bio = {
                name: 'vish',
                age: 20
            }
            resolve(` hello i m ${bio.name} --- ${indexdata}`)
        }, 2000, indexdata)
        
    })
}

const getdata = async ()=>{
    try {
        const a1 = await probj1;
        console.log(a1[3]);

        const a2 = await bioData(a1[1]);
        console.log(a2);
        return a1;
    } catch (error) {
        console.log(error);
    }
    
}

getdata().then(b=>console.log(b))