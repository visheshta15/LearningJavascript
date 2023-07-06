// any change in DOM from js or CSS, 
// so the browser reconstruct the render tree--> reflow
// once the reflow complete, the browser redrawffected part of screen --> repaint

// when Reflow happen ?
// 1. visible dom element are added or remove 
// 2. element change position
// 3. element change size
// 4. content is changed 
// 5. browser window resize 
// 6. page render initailly

// minimise repaints and reflows --> expensive 
// use combine dom and style chnages into a batch and apply them once

// [1] three style property has been changed, each of them affecting the geomentry of the Element
let el = document.getElementById('box')
let el2 = document.getElementById('menu')
// el.style.borderLeft = '1px'
// el.style.borderRight = '1px'
// el.style.padding = '5px'

// [2]
el.style.cssText = 'border: 1px solid red;  padding: 5px'
el.style.cssText+= ';font-weight: bold'

// [3]
el2.className = 'active'


// Batch Dom changes
// 1. take the element off of the document flow 
// 2. apply multiple changes
// 3. bring the element back to the document


   
//------- off document manupulation
// 1. first display: none, make the changes , then display: block
// 2. take a clone and do the changes and then replace it with new one

let old = document.getElementById('myList')
let clone = old.cloneNode(true)
let newel = old.firstElementChild.cloneNode(true)
clone.appendChild(newel)
// old.parentNode.removeChild(old)
old.parentNode.replaceChild(clone, old)

