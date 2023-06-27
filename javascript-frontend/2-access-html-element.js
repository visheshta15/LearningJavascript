
let a = 10;
console.log(a);
var b = 100;


// getname()
// getname1()
// console.log(getx);



// var getx =7;
// function getname() {
//     console.log('hello');
// }

// var getname1 =()=>{
//     console.log('world');
// }

// // getname()
// // console.log(getx);














// // getElementsByClassName: Find element(s) whose class attribute's values is 'x' and returns NodeList, which is list of element objects
// //output : HTMLCollection(2) [li.divtag, div.divtag]
// let a = document.createElement('p');
// a.innerText = ' i m taj mahal';
// let b = document.createElement('p');
// b.innerText = ' i m red ford';
// let classtag = document.getElementsByClassName("divtag");
// console.log('classtag : ', classtag);
// classtag = Array.from(classtag);
// classtag.map(e=> e.appendChild(a))


// let classtagbyquery = document.querySelectorAll(".divtag p");
// console.log('classtagbyquery : ', classtagbyquery);
// classtagbyquery.forEach(e=> e.appendChild(b));


// // getElementById:  Finds element with id 'x' and returns an object of type element 
// //output: <li id="id2">id2</li> 
// let idTag = document.getElementById('id1');
// let idTag2 = document.getElementById('id2');
// console.log(idTag, idTag2);

// //Find element(s) whose tag name is 'x' and returns NodeList, which is a list of element objects
// //output: HTMLCollection(3) [li.divtag, li.class2, li#id2, id2: li#id2]
// console.log(document.getElementsByTagName("li"));


// console.log(document.querySelector("#id1"));
// console.log(document.querySelector(".class2"));

// console.log(document.querySelectorAll(".divtag"));
// console.log('kenvjhskl');

// let selectCountry = 'delhi';
// let obj = {place: selectCountry};
// console.log(obj);
// // if(selectCountry){
// //         // document.cookie(`place: ${selectCountry}`)
// //         document.cookie="place=" + obj.place
// // }
// // document.cookie="name=visheshta"
// function getCookie(){
//     document.cookie="name=visheshta"
//     if(document.cookie.length!==0){
//         console.log("cookies:  ", document.cookie , typeof(document.cookie));
//         console.log(document.cookie.split(";"))
//     }
// }
// (document.cookie.split(";")).map((e)=>{
//     let obj = { key: e.split("=")[0], value: e.split("=")[1]}
//     console.log(e);
//     console.log(obj);
//     return obj
// })
// function delCookie(){
// let cookie2=document.cookie;
// document.cookie=cookie2+";max-age=0";  
  
// console.log(cookie2, "Cookie2 is deleted");
// }