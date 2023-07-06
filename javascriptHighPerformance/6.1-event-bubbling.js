// When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

document.querySelector('#grandparent').addEventListener('click', ()=> console.log('clicked grandparent'))

document.querySelector('#parent').addEventListener('click', ()=> console.log('clicked parent'))

document.querySelector('#child').addEventListener('click', ()=> console.log('clicked child'))

// stop propagation-------------------------------
document.querySelector('#grandparent1').addEventListener('click', ()=>{
    console.log('clicked grandparent1')
}, false)

document.querySelector('#parent1').addEventListener('click', (e)=>{
    console.log('clicked parent1')
    e.stopPropagation()
}, false)

document.querySelector('#child1').addEventListener('click', (e)=>{
    console.log('clicked child1')
    e.stopPropagation()
}, false)