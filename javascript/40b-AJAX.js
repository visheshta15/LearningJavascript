// AJAX - Asynchronous JavaScript & XML
// because of AJAX, you can fetch the data from the server and display without refereshing the entire page
// AJAX is about making an HTTP call to the webservice, API or REST API and that to without refereshing the entire page 
// JS gives the "Fetch API" nowadays to make AJAX call

// syntax 
// const res = fetch('url', {
//     method: 'POST',
//     headers:  { 
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(data)
// })

// [1]
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => console.log('1.---', data))

const todo = {
    userId: 1001,
    id:1,
    title: 'visheshta',
    completed: true
}

// [2]
fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
})
.then(res => res.json())
.then(data => console.log('2.---', data))