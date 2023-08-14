// call lack readability  

// [1] having 1 http resquest 
// XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
// XMLHttpRequest.readyState Read only
// Returns a number representing the state of the request.

const xhr = new XMLHttpRequest()
console.log(xhr, xhr.readyState, XMLHttpRequest.DONE)
xhr.open('GET', 'https://dog.ceo/api/breeds/list/all')

xhr.onreadystatechange = function() {
    console.log(xhr, xhr.readyState, XMLHttpRequest.DONE)
    if(xhr.readyState === XMLHttpRequest.DONE){
        const result = JSON.parse(xhr.responseText)
        const breed = Object.keys(result.message)
        console.log(result, breed)
    }
}
xhr.send(null)


// [2] having 2 http resquest in callback


const xhrReq1 = new XMLHttpRequest()
console.log(xhrReq1, xhrReq1.readyState, XMLHttpRequest.DONE)
xhrReq1.open('GET', 'https://dog.ceo/api/breeds/list/all')

xhrReq1.onreadystatechange = function() {
    if(xhrReq1.readyState === XMLHttpRequest.DONE){
        const result = JSON.parse(xhrReq1.responseText)
        const breeds = Object.keys(result.message)
        const firstBreed =  breeds[0]
        console.log(result, breeds)
        const xhrReq2 = new XMLHttpRequest()
        xhrReq2.open('GET', `https://dog.ceo/api/breed/${firstBreed}/images/random`)
        xhrReq2.onreadystatechange = function (){
            if(xhrReq2.readyState === XMLHttpRequest.DONE){
                const img = document.getElementsByTagName('img')[0]
                const response2  = (JSON.parse(xhrReq2.responseText)).message
                img.src = response2
            }
        }
        xhrReq2.send()
        
    }
}
xhrReq1.send(null)



https://dog.ceo/api/breed/affenpinscherimages/random










// fetching data with fetch 
fetch('https://dog.ceo/api/breeds/list/all')
    .then((res)=> res.json())
    .then((data)=> console.log(data))
