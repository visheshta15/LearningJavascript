 
// [3] promise chaining : ex

function getTrip(location) {
    return new Promise(function (resolve, reject) {
        setTimeout(()=>{
            if (location == "Paris") {
                resolve("Let's take a trip to " + location);
            } else {
                reject(Error("Invalid Location"));
            }
        }, 3000)
    });
}


function bookFlight(airline) {
    return new Promise(function (resolve, reject) {
        if (airline == "AirIndia") {
            setTimeout(()=>resolve('Hurryyy!! AirIndia flight got booked. Fair : 5600'), 3000);
        } else {
            reject(Error("Flight can not be booked"))
        } 
    })
}

function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(()=>resolve(`Hotel booking costed : 7000. Total trip cost me : ${7000+flightPrice}`), 3000);
    })
}

getTrip("Paris")
.then((d1) => {
    console.log('1a.---', d1)
    return bookFlight('AirIndia')
})
.then((d2) => {
    console.log('1b.---', d2)
    let d2Data = parseInt(d2.split(': ')[1])
    return bookHotel(d2Data)
})
.then((d3)=> console.log('1c.---', d3))
.catch((error) => console.log('1d.---', error.message))


// async...await 
const getData = async() =>{
    try {
        let a1 = await getTrip('Paris')
        console.log('2a.---', a1)

        let a2 = await bookFlight('AirIndia')
        console.log('2b.---', a2)

        let a3 = await bookHotel(parseInt(a2.split(': ')[1]))
        console.log('2c.---', a3)

    } catch (error) {
        console.log('2d.---error', error)
    }
}

getData()
