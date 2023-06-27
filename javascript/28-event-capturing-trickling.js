// event capturing / trickling(down)
// the process starts with capturing the event of the outermost element and then propagating to the inner most element


// document.querySelector('#grandparent1').addEventListener('click', ()=>{
//     console.log('clicked grandparent1');
// }, true)

// document.querySelector('#parent1').addEventListener('click', ()=>{
//     console.log('clicked parent');
// }, true)

// document.querySelector('#child1').addEventListener('click', ()=>{
//     console.log('clicked child1');
// }, true)


// --------------------------------
// stop propagation 
document.querySelector('#grandparent1').addEventListener('click', (e)=>{
    console.log('clicked grandparent1');
    e.stopPropagation();
}, true)

document.querySelector('#parent1').addEventListener('click', ()=>{
    console.log('clicked parent');
}, true)

document.querySelector('#child1').addEventListener('click', ()=>{
    console.log('clicked child1');
}, true)