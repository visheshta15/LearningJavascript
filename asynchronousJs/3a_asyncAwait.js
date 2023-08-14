// async: if we have a async keyword while declaring a function, then it will always return promise
// await: it waits until the promise get settle

// [1]
const abc = async () => {
    return Promise.resolve('bad data')
}
console.log(1, abc())

// [2]
function getSpecificNo(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(30), 2000)
    })
    return promise
}

async function f(){
    let no = await getSpecificNo()
    console.log(no)
}

f()

// [3]
const fetchData = async () => {
    let res = await fetch('https://dog.ceo/api/breeds/list/all1')
    let data = await res.json()
    console.log(data)
}

fetchData()


// [4]
async function f(){
    try {
        await fetch('https://abx/api')
    } catch (error) {
        console.log("getting error", error)
    }
}

// [5] ways to hadle error

const fetchapi = async () => {
    let res = await fetch('https://abc/api')
    let data = await res.json()
    console.log(data)
}

fetchapi().catch((err)=> console.log('getting error while fetching api', err))