// detecting if a feature or API is missing and then providing a custom implementation of that feature using existing JavaScript capabilities

let details = {
    firstname : "Visheshta",
    lastname: "Kushwaha"
}

let printfullname = function(location){
    console.log(this.firstname, this.lastname, location)
}

let data = printfullname.bind(details)
data()

Function.prototype.addLocation = function(...args){
    console.log('hi', this, args, args.splice(1))
    let arg = args.splice(1)
    let newFunc = this
    return function(...args2){
        console.log(args2)
        newFunc.apply(args[0], [...arg, ...args2])
    }

}

let data2 = printfullname.addLocation(details)
data2('kanpur')