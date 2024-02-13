//Object member are both properties and methods. 

let book = {
    title: 'harry potter',
    publisher: 'J.K.Rowling'
}
// title & publisher --> intance member

console.log(book)
console.log(book.hasOwnProperty('title'))       //seacrh is in intance 
console.log(book.hasOwnProperty('toString'))    //seacrh is in intance
console.log('title' in book)                    //seacrh is in intance and prototype both
console.log('toString' in book)                 //seacrh is in intance and prototype both

// toString() method is a prototype member that a book object is inheriting. book has access of every property and method of its prototype.


