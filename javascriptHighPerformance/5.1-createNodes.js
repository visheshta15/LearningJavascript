// way of updating page content using DOM methods 

// 1. create new element 
let div = document.getElementById('div')
let heading = document.createElement('h1')
heading.innerText = 'Visheshta Kushwaha'
div.appendChild(heading)

// 2. clone existing dom instead of creating a new one

let cloneHeading1 = heading.cloneNode(true)
let cloneHeading2 = heading.cloneNode(false)
console.log(cloneHeading1, cloneHeading2)

cloneHeading2.innerText = 'frontend developer'
div.appendChild(cloneHeading2)