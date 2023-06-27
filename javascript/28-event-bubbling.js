// event bubbling
// When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
// event propgation: in  which order the elements recevived the input  

// document.querySelector('#grandparent').addEventListener('click', ()=>{
//     console.log('clicked grandparent');
// })

// document.querySelector('#parent').addEventListener('click', ()=>{
//     console.log('clicked parent');
// })

// document.querySelector('#child').addEventListener('click', ()=>{
//     console.log('clicked child');
// })


// -------------------------------------------

// mixed 
// document.querySelector('#grandparent').addEventListener('click', ()=>{
//     console.log('clicked grandparent');
// }, true)//cap

// document.querySelector('#parent').addEventListener('click', ()=>{
//     console.log('clicked parent');
// }, false)//bub

// document.querySelector('#child').addEventListener('click', ()=>{
//     console.log('clicked child');
// }, true)//cap


// -------------------------------------------

// stop propagation 
document.querySelector('#grandparent').addEventListener('click', ()=>{
    console.log('clicked grandparent');
}, false)

document.querySelector('#parent').addEventListener('click', (e)=>{
    console.log('clicked parent');
    e.stopPropagation()
}, false)

document.querySelector('#child').addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('clicked child');
}, false)