let div = document.getElementById('div')
for(let i=0; i<5; i++){
    let a = document.createElement('h3')
    a.innerText = 'heading ' + parseInt(i+1)
    div.appendChild(a)
}

// nextSibling ----------------------------------------------------
function testNextSibling(){
    child = div.firstChild
    name = ''
    // let name = ''
    do{
        name = child.nextSibling
        console.log('1', child.nextSibling, name)
    }while(child = child.nextSibling){
        return name
    }
}
testNextSibling()


// childnodes ----------------------------------------------------
function testChildNodes(){
    children = div.childNodes
    childrenLen = children.length
    names = ''
    console.log(children)
    for(let i=0; i<childrenLen; i++){
        console.log(children[i].innerHTML)
        name = children[i].innerHTML
    }
    return name

}
console.log(testChildNodes())