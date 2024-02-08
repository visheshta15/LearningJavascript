// [1] blue button
const callbackFunction = () =>{
    console.count("clicked blue");
}
const handleclick = callbackFunction

// [2] pink button
// eventlistner are heavy , they occupy space

const attacheventhandler = () =>{
    let count = 0
    document.getElementById('id').addEventListener('click', ()=>
    console.log('pink button clicked ', ++count)
    )
}
attacheventhandler();




