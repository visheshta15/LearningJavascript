let div = document.getElementById('div')
for(let i=0; i<5; i++){
    let a = document.createElement('h3')
    a.id = "id" + parseInt(i+1)
    a.innerText = 'heading ' + parseInt(i+1)
    div.appendChild(a)
}
let h32 = document.getElementById('id2')

// property: children
// use as a replacement for: childNodes
// ---------------------------------------------------------------------------
console.log("replacement  -->div.childNodes :",div.childNodes )  
console.log("rep property -->div.children :", div.children)     

console.log(document instanceof Node)
console.log(document instanceof Element)
console.log(document.firstChild instanceof Node)
console.log(document.firstChild instanceof Element)

console.log("replacement  -->div.childNodes.length :",div.childNodes.length )  
console.log("rep property -->div.childElementCount :", div.childElementCount)     

console.log("replacement  -->div.firstChild :",div.firstChild )  
console.log("rep property -->div.firstElementChild :", div.firstElementChild)

console.log("replacement  -->div.lastChild :",div.lastChild )  
console.log("rep property -->div.lastElementChild :", div.lastElementChild)

console.log("replacement  -->h32.nextSibling :",h32.nextSibling )  
console.log("rep property -->h32.nextElementSibling :", h32.nextElementSibling)

console.log("replacement  -->h32.previousSibling :",h32.previousSibling )  
console.log("rep property -->h32.previousElementSibling :", h32.previousElementSibling)

// ------------------------------------------------------
console.log(document.getElementById('div'))
console.log(document.getElementsByTagName('h3'))
console.log(document.querySelectorAll('h3'))
