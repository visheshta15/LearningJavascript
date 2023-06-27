// setTimeout(() => {
//     console.log('timer');
// }, 5000);

function y(){
    console.log("y-- ")
}

function x(y){
    console.log("x--");
    y()
}

x(y);



// ------------------------------------------

const callbackFunction = () =>{
    console.count("clicked");
}
const handleclick = callbackFunction



const attacheventhandler = () =>{
    let count = 0
    document.getElementById('id').addEventListener('click', ()=>
    console.log('button clicked ', ++count)
    )
}
attacheventhandler();


// ---------------------------------------
// garbage collection and event listener  
// eventlistner are heavy , they occupy space


