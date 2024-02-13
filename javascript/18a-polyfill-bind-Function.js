// detecting if a feature or API is missing and then providing a custom implementation of that feature using existing JavaScript capabilities

let name = {
    firstname : "Visheshta",
    lastname: "Kushwaha"
}

let printfullname = function(hometown, age){
    console.log("I'm", this.firstname, this.lastname, "from", hometown, age);
}

console.log('1.---')
let result1 = printfullname.bind(name);
result1('Gurgaon', 27)

// ------------------------------------------------------------

Function.prototype.addLocation = function(...args){
    let funcPFN = this;
    let arg = args.splice(1);
    return function(...args2){
        // funcPFN.apply(args[0], arg)
        funcPFN.apply(args[0], [...arg, ...args2])
    }
}

console.log('2.---')
let result2 = printfullname.addLocation(name, "Delhi", 25);
result2()

console.log('3.---')
let result3 = printfullname.addLocation(name, 'Kanpur');
result3(71)


