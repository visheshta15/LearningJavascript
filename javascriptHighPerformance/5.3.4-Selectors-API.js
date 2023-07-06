// developers need some finner control than methods such as getElementById() or getElementByTagName() provide.
// The method querySelectorAll() takes css selector string as an argument and return NodeList

console.log(document.querySelectorAll('#menu a')) // contain list of references to all 'a' element found inside an element with id='menu'
console.log(document.getElementById('menu').getElementsByTagName('a'))

console.log(document.querySelectorAll('div.warming, div.notice'))    //div elements with a class name of 'warming' and 'notice'

// console.log(elref.querySelector('#menu'))