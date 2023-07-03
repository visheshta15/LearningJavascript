
let div = document.getElementById('div')
let img = document.createElement('img')
img.src = 'https://clipart-library.com/data_images/320465.png'
let link = document.createElement('a')
link.href = 'http://google.com'
link.innerText='seacrh here'
div.appendChild(img)
div.appendChild(link)
// HTML Collection are array-like objects containing DOM node references.
console.log(document.getElementsByTagName('h1'))
console.log(document.getElementById('div'))

// follwing property also return HTML Collections
console.log(document.images)
console.log(document.links)
console.log(document.forms)
// console.log(document.forms[0].elements)

//----------------------------------------------------------------
let h1Arr = document.getElementsByTagName('h1')
console.log(Array.from(h1Arr))
// looping over an array is faster than looping over an array 