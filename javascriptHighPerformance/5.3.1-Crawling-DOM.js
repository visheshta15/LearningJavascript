let div = document.getElementById('div')
for(let i=0; i<5; i++){
    let a = document.createElement('h3')
    a.innerText = 'heading ' + parseInt(i+1)
    div.appendChild(a)
}

// nextSibling ----------------------------------------------------
function testNextSibling(){
    child = div.firstChild
    do{
        console.log('1', child.nextSibling)
    }while(child = child.nextSibling){
    }
}
testNextSibling()


// childnodes -------its a HTML collection ---------------------------------------------
function testChildNodes(){
    children = div.childNodes
    childrenLen = children.length
    console.log(children)
    for(let i=0; i<childrenLen; i++){
        console.log(children[i].innerHTML)
    }

}
testChildNodes()