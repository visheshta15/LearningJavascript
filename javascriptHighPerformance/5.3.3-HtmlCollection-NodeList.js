// [1]----------------------------------------------------------------------------
// [1a]HTMLCollection
// These two methods return the HTMLCollection object.
// getElementByTagName() and
// getElementsByClassName()
// document.getElementById('div').childNodes

// [1b]NodeList
// Methods that return NodeList are:
// getElementsByName()
// querySelectorAll()
// document.getElementById('div').children

// [2]----------------------------------------------------------------------------
// [2a]An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change

// [2b] A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change
// The querySelectorAll() method returns a static NodeList.
// The childNodes property returns a live NodeList.
// Even though, getElementsByName() returns NodeList – but it’s LIVE.
// In order to get the updated NodeList, you’ll have to call the querySelectorAll() method again.

function isLive(collection) {
    oldLength = collection.length
    let a = collection.item(0).cloneNode(false)
    parent = collection.item(0).parentNode
    console.log(collection, a,parent)
    parent.appendChild(a)
    console.log(collection, collection.length)
    newLength = collection.length

    return !(newLength === oldLength)
}

const live = document.getElementsByClassName('c');
const static = document.querySelectorAll('.c');

console.log(isLive(live))
console.log(isLive(static))


// [3]----------------------------------------------------------------------------
// [3a] HTMLCollection (Element Nodes) 
// [3b] NodeList (All Nodes-element nodes, attribute nodes, and text nodes)
let en = document.getElementById('box')
console.log(en.children) 
console.log(en.childNodes) 

// [4]----------------------------------------------------------------------------
// [4a] //An HTMLCollection is a collection of document elements. HTMLCollection items can be accessed by their name, id, or index number.
// [4b] NodeList (index only)
let col = en.children
let node = en.childNodes

console.log('using index : ',col[0])                        //works!
console.log('using name : ',col.namedItem('nm-box1'))       //works!
console.log('using id : ',col.namedItem('id-box2'))         //works!
console.log('using class : ',col.namedItem('cls-box1'))     //null

console.log('using index : ',node[1])                       //works!
// console.log('using name : ',node.namedItem('nm-box1'))   //error
// console.log('using id : ',node.namedItem('id-box2'))     //error
// console.log('using class : ',node.namedItem('cls-box1')) //error


// [5]----------------------------------------------------------------------------
// [5a] HTMLCollection (for..of)   array-like object that can be iterated using the for..of method
// [5b] NodeList (forEach) NodeList has a forEach() method natively
node.forEach((ele)=> console.log("NodeList ele :",ele))

for(ele of col){
    console.log("HTMLCollection ele :",ele)
}
