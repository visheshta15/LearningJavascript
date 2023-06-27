// --> arguments object in javascript
// argument object is a local variable , available amoung all arrow function 
function func(x){
    console.log(x, typeof(x), arguments, arguments.length);
}

func()
func(1)
func(["1"], "2", "3")