// how to create cookies using javascript
// A cookie is an amount of information that persists between a server-side and a client-side. A web browser stores this information at the time of browsing.(client activity)

// A cookie contains the information as a string generally in the form of a name-value pair separated by semi-colons. It maintains the state of a user and remembers the user's information among all the web pages.

// How Cookies Works?
// When a user sends a request to the server, then each of that request is treated as a new request sent by the different user.
// So, to recognize the old user, we need to add the cookie with the response from the server.
// browser at the client-side.
// Now, whenever a user sends a request to the server, the cookie is added with that request automatically. Due to the cookie, the server recognizes the users.
// // document.cookie object;
// document.cookie = "key1 = value1; key2 = value2; expires: date"

// if(selectCountry){
//     // document.cookie(`place: ${selectCountry}`)
//     document.cookie="place=" + obj.place
// }
document.cookie="name=visheshta"
function getCookie(){
if(document.cookie.length!==0){
    console.log("cookies:  ", document.cookie , typeof(document.cookie));
    console.log(document.cookie.split(";"))
}
}
(document.cookie.split(";")).map((e)=>{
let obj = { key: e.split("=")[0], value: e.split("=")[1]}
console.log(e);
console.log(obj);
return obj
})

// function getCookie(){
//     document.cookie="name=visheshta"
//     if(document.cookie.length!==0){
//         console.log("cookies:  ", document.cookie , typeof(document.cookie));
//         console.log(document.cookie.split(";"))
//     }
// }


// function delCookie(){
//     let cookie2=document.cookie;
//     document.cookie=cookie2+";max-age=0";  
      
//     console.log(cookie2, "Cookie2 is deleted");
//     }