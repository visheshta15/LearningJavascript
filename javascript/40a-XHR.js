// XMLHttpRequest 
// on early days of web development, it used to referesh the entire page to fetch the data from the server 
// Earlier we had "XMLHttpRequest" object to make http call, still 



// a. XMLHttpRequest.open(method, URL, [async ,user, password])
// b. XMLHttpRequest.send([body])
// c. load : this event fired when the xhr transaction completes successfully
// d. onprogress : this event is fired continously when the request receive data 
// e. onerror : this event is fired when there is an error encountered while requesting
// f. onreadystatechange: this event is fired when a property called "readyState" changes
// 0   UNSENT              client has be created, open() not yet called
// 1   OPENED              open() has been called
// 2   HEADERS_RECEIVED    send() has been called and header & status are available
// 3   LOADING             downloading, responseText has partial data 
// 4   DONE                operation is called 
// g. request.about()
// h. XMLHttpRequest.setRequestHeader(header, value) : call immediately after open() and before send() to set headers
// i. getAllResponseHeaders() & getResponseHeader()

// [1]
// let request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts')
// request.responseType = 'json'       //blob, document, text
// request.timeout = 500
// request.send()
// request.onload = ()=> {
//     console.log('1a...', request)
//     if(request.status === 200){
//         console.log('1b...', request.response)
//     }else {
//         console.log('invalid request')
//     }
// }

// request.ontimeout = function(){
//     console.log('Timed out...')
// }

// [2]
let request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts')
request.responseType = 'json'       //blob, document, text
request.send()
request.onreadystatechange = ()=> {
    console.log('2a...', request)
    if(request.readyState === 4 & request.status === 200){
        console.log('2b...', request.response)
        console.log('2c...', request.getAllResponseHeaders())

    }
}

// XMLHttpRequest object is very rarely used on for uploading files etc. now we use fetch api to make AJAX call


// [3] having 2 http resquest in callback


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
