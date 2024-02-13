const printOne = () =>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('print no 1 is done')
            resolve(1)
        }, 3000)
    })
}
const printTwo = () =>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('print no 2 is done')
            resolve(2)
        }, 2000)
    })
}

const oneByOne = async () => {
    const no1 = await printOne()
    const no2 = await printTwo()
    console.log('1.---',no1, no2)
}

oneByOne()

const inParallel = async () => {
    const p1 =  printOne(), p2 =  printTwo()
    // const no1 = await p1
    // const no2 = await p2
    const [no1, no2] = [await p1, await p2]

    // console.log(no1, no2)
    console.log('2.---', await p1, await p2)

}

// inParallel()