
// --------------promise 
function getTrip(location) {
    return new Promise(function (resolve, reject) {
        if (location == "Paris") {
            resolve("Let's take a trip to " + location);
        } else {
            reject(Error("Invalid Location"));
        }
    });
}
// getTrip("Paris")
// .then((data) => console.log(data))
// .catch((error) => console.log(error.message))


console.log('----------------')
// ........................... promise chaining
function bookFlight(airline) {
    console.log('111')
    return new Promise(function (resolve, reject) {
        if (airline == "AirIndia") {
            console.log('222')
            setTimeout(resolve(5600), 2000);
            console.log('333')
        } else {
            console.log('444')
            reject(Error("Flight can not be booked"))
            console.log('555')
        } 
    })
}
function bookHotel(flightPrice) {
    console.log('666')
    return new Promise(function (resolve) {
        console.log('777')
        setTimeout(resolve(7000 + flightPrice), 1000);
        console.log('888')
    })
}

bookFlight("AirIndia")
    .then(function (flightData) { return bookHotel(flightData) })
    .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
    .catch(e => console.log(e.message))

bookFlight("AirIndia")
    .then(fd => bookHotel(fd))
    .then(fp => console.log(fp))
    .catch(e => console.log(e.message))


const totalamt = async() =>{
    let r1 = await bookFlight('AirIndia')
    let r2 = await bookHotel(r1)
    console.log(r1, 'mlm', r2)
}

// totalamt()

// --------------------------------------

var mp = new Promise(function (resolve, reject) {
    setTimeout(function(){resolve('success')}, 2000);
})

mp.then(
function(error){console.log('vnmbvnm', error)},
function(data){console.log(data);}
)