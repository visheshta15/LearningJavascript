let name = {
    firstname : "Visheshta",
    lastname: "Kushwaha"
}

let printfullname = function(hometown, age){
    console.log("I'm", this.firstname, this.lastname, "from", hometown, age);
}

let result1 = printfullname.bind(name);
result1('Kanpur', 25)

// ------------------------------------------------------------

Function.prototype.mybind = function(...args){
    // console.log(this);
    let funcPFN = this;
    let arg = args.splice(1);
    return function(...args2){
        // funcPFN.apply(args[0], arg)
        funcPFN.apply(args[0], [...arg, ...args2])
    }
}


// let result2 = printfullname.mybind(name, "Delhi", 25);
// result2()
let result2 = printfullname.mybind(name, 'Kanpur');
result2(25)


