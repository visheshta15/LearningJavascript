// Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

//------- prons 
// Memory
// less code
// Dom manupulation

//------- cons
// to let delegation work should not use stoppropagation and let the events bubble up

document.getElementById('category').addEventListener('click', (e)=>{
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.tagName);
    console.log(window.location);
    if(e.target.tagName == "LI"){
    // window.location.href = "/" + e.target.id;
    }

})




document.getElementById('form').addEventListener('keyup',(e)=>{
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }else if(e.target.dataset.lowercase != undefined){
        e.target.value = e.target.value.toLowerCase()
    }


})

let arr = ['apple', 'mango', 'chikko' ]