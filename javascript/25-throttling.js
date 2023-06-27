// proformace optimisation
// limiting function call 

const expensive = () => {
    console.count('throttle function');
}
const normalexpensive = () => {
    console.count('normal function');
}

const throttle = (fn, d) => {
    let flag = true;
    return function (){
        let context = this;
        let args = arguments;
        if(flag){
            fn.apply(context, args);
            flag = false;
            setTimeout(()=>{
                flag=true;
            }, d)
        }
        
    }
}


const betterExpensive = throttle(expensive, 100)

window.addEventListener("resize", normalexpensive);
window.addEventListener("resize", betterExpensive);


const throttlinghandle = () =>{
    console.log("buton clicked");
}