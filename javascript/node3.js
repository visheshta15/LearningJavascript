// console.log('welcome')
// let list_of_marks = [12,18,25,24,2,5,18,20,20,21]

// let a =  [...Array(5).keys()]
// console.log(a)
// console.log([...Array(3).keys()])

// console.log((list_of_marks.reduce((a,c)=>a= c+a, 0))/list_of_marks.length)

// let b = list_of_marks.reduce((a,c)=>a= c+a, 0)
// console.log("b", b);

// let a1 = 0;

// for(let e of list_of_marks){
//     a1+=e
// }
// console.log(a1);


// console.log((list_of_marks.filter((a)=> a>b).length)/list_of_marks.length*100)

// let l1 =   [2,3,9,8,...Array(5).keys()]
// console.log(l1)

// let r1 = l1.reduce((acc,curr)=>  (acc[curr] ? ++acc[curr] : acc[curr] = 1, acc) ,{})
// console.log(r1)
// --------------------------------
// let l =[12,18,25,24,2,5,18,20,20,21]
// let maxl = Math.max(...l)
// console.log(maxl);
// let ar1 = []
// let c = 0
// for(let i=0; i<=maxl ; i++){
//    for(let j of l){
//         if(i === j){
//             c+=1
//         }
        
//    }
//    ar1.push(c)
//    c=0
// }
// console.log(ar1);

// --------------------------------


// let s1='civic'
// for (i=0; i<s1.length; i++){
//     if(s1[i] === s1[s1.length-1-i]){
//         console.log(s1[i], "-", s1[s1.length-1-i])
//     }
// }
// --------------------------------

let s2='Rama Krishna Narayan Narayan'
// let a1 = s2.split(" ");
// // console.log(a1);
// let s1 = ""
// for(let i=0; i<a1.length -1; i++){
//     s1= s1+ a1[i].charAt(0) + ". "
// }
// s1+= a1[a1.length-1]
// console.log(s1);

// console.log((a2));

// let a1=s2.split(' ')
// console.log(a1)
// let s3=''
// for(i=0; i<a1.length; i++){
    
//     if(i<a1.length-1){
//         console.log(a1[i])
//         s3=s3 + a1[i].charAt(0) + '. '
//     }else{
//         s3 = s3 + a1[i]
//     }
// }

// console.log(s3)

// let s4='thequickbrownfoxjumpsoverthelazydog'
// let a3=s4.split('')
// let a4= new Set(a3)
// let a5= ((Array.from(a4)).toString()).replace(/,/g, '')
// console.log(Array.from(a4))
// console.log((Array.from(a4).toString()))
// console.log((Array.from(a4).toString()).replace(/,/g, ''))
// console.log(a5)

// let obj1 = {
//     name: 'vish',
//     place: 'delhi'
// }

// console.log(Array.from(obj1));


// // ............................object iterarte  
// let a6 = {id:1, name:'vish', age:25}
// for(let key in a6){
//     console.log('key: ', key, 'value',a6[key])
// }

// // .................convert object into an array 
// console.log('Object.keys() ------------ array contains all the keys')
// // Object.values()
// // Object.entries()

// console.log(Object.keys(a6))
// let obj1  = Object.keys(a6).map((e)=> {return {e:a6[e]}})
// console.log(obj1)
// let arr2=[]
// Object.keys(a6).forEach((e)=> arr2.push({e : a6[e]}))
// console.log(arr2)


// console.log('Object.values() ------------ array contains all the keys')
// console.log(Object.values(a6))

// console.log('Object.entries() ------------ creates array of arrays')
// console.log(a6, Object.entries(a6))

// Object.entries(a6).forEach(e=> console.log(e[0],"---",e[1]))



// console.log('------------------rest and spred operator')
// const rest =(...values) =>{
//     console.log(values)
// }
// rest( 22,33,44,11)

// // spread the element into individual items 
// const spread = (a1,a2,a3)=>{
//     console.log(a1,a2,a3)
// }
// let val = [12,13,14,15]
// spread(...val)


// // .........................................ques 
// var student = { 
//     name : "David Rayy", 
//     sclass : "VI", 
//     rollno : 12 };
// console.log(Object.values(student).toString())
// console.log(Object.values(student).join(', '))

// var mobJson={
//     "productId":1001,
//     "product":{"name":"Moto","series":"G5+","color":"NightSky"},
//     "price":14900,
//     "category":"Electronics",
//     "shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},
//     "seller":{"name":"xyz Mobile","location":"New York","stock":17}
// }
// xyz Mobile shipped a Moto G5+ worth 14900 with productId: 1000.

// var mobJson='{"productId":1001,"product":{"name":"Moto","series":"G5+","color":"NightSky"},"price":14900,"category":"Electronics","shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},"seller":{"name":"xyz Mobile","location":"New York","stock":17}}'
// let jo=JSON.parse(mobJson)
// let jor= jo.seller.name + " shipped a " + jo.product.name + jo.product.series + " worth " + jo.price
// console.log(jo, jor)

// ------------------regex 
// // ^[a-zA-Z0-9_]+@[a-z]+\.(com|in)$
// // ^[\w]+@[a-z]+\.(com|in)$
// let regex1 = /^[\w]+@[a-z]+\.(com|in)$/
// console.log(regex1.exec('vid@gmail.com')) //return array or null
// console.log(regex1.test('vid@gmail.com')) // return boolean true or false



// // // string object method 
// // let str2 = 'hwllo world bello cello mello'
// // console.log(str2.search(/ll/))  // return index of matched string or -1
// // console.log(str2.match(/ll/))  // return arary or null
// // console.log(str2.replace(/ll/g, 'he'))  

// // console.log('caaaer'.match(/c[a]*r/))
// // console.log('ii','Albert Einstein was born in Ulm, on 1403/1879'.search(/([\d]{2}\[\d]{2}\/[\d]{4})/))


// --------------promise 
function getTrip(location) {
    return new Promise(function (resolve, reject) {
        if (location == "Paris") {
            resolve("Let's take a trip to " + location);
        } else {
            reject(Error("Invalid Location"));
        }
    });
}
// getTrip("Paris")
// .then((data) => console.log(data))
// .catch((error) => console.log(error.message))

// console.log('----------------')
// // ........................... promise chaining
// function bookFlight(airline) {
//     console.log('111')
//     return new Promise(function (resolve, reject) {
//         if (airline == "AirIndia") {
//             console.log('222')
//             setTimeout(resolve(5600), 2000);
//             console.log('333')
//         } else {
//             console.log('444')
//             reject(Error("Flight can not be booked"))
//             console.log('555')
//         } 
//     })
// }
// function bookHotel(flightPrice) {
//     console.log('666')
//     return new Promise(function (resolve) {
//         console.log('777')
//         setTimeout(resolve(7000 + flightPrice), 1000);
//         console.log('888')
//     })
// }

// bookFlight("AirIndia")
//     .then(function (flightData) { return bookHotel(flightData) })
//     .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
//     .catch(e => console.log(e.message))

// bookFlight("AirIndia")
//     .then(fd => bookHotel(fd))
//     .then(fp => console.log(fp))
//     .catch(e => console.log(e.message))


// const totalamt = async() =>{
//     let r1 = await bookFlight('AirIndia')
//     let r2 = await bookHotel(r1)
//     console.log(r1, 'mlm', r2)
// }

// // totalamt()


console.log('......................................... ');
// const wordCount = (str1) =>{

//     let strU =  str1.toUpperCase().split(' ').length
//     console.log(String.fromCharCode(65));
//     let alphaObj = [...Array(26).keys()].map(e=>{
//         console.log("e : ", e)
//         return String.fromCharCode(e +65)
//     })
//     console.log(alphaObj);
//     console.log('str', strU);
//     console.log(alphaObj[strU])
// }


// wordCount('hello a very good morning')


// // ................................ 
// let is1 = 'peep'

// console.log('aa', is1.search(/m/g))
// let count=0
// for (let i=0; i<is1.length/2; i++){
//     if((is1[i]==is1[is1.length-1-i]) && (i !== (is1.length -1 -i))){
//         count+=1
//     }else{
//         console.log("not ", is1[i], is1[is1.length-1 -i])
//     }
// }

// console.log(count)

// // ............................ 
// var name;
// console.log(Math.floor(Math.random()*100)+10);              
// let u = '20'
// let v = u = 30
// console.log(v, u, v+u, "uv");
// // console.log(tt(10.7));


// var mp = new Promise(function (resolve, reject) {
//         setTimeout(function(){resolve('success')}, 2000);
//     })

// mp.then(
//     function(error){console.log('vnmbvnm', error)},
//     function(data){console.log(data);}
// )

// const call = () =>{
//     var obj = {
//         p1 : function(){return this.p2},
//         p2: 'hello'
//     }
//     console.log(typeof(obj));
// }

// call()

// let re = /^[A-Z][A-Za-z]+([\s][A-Z][A-Za-z]*)*$/

// console.log(re.test('Elza Ario'))

// // console.log(st());
// var mv;
// function st(){
//     var mv = 10
//     console.log('mv', typeof(mv));
//     var mv='a'
//     var x;
//     console.log(typeof(mv), mv, typeof(x));

// }

// st()
// console.log(typeof(mv), mv);

// async function d(){
//     return 56
// }

// d().then(Alert)


// x=undefined;
// y =null;
// console.log(x===y);

// let aaa = '1'
// switch(aaa){
//     case '1': console.log('1st', true); break;
//     default: console.log('2ns', false); break;
// }
// console.log('----------------------------------------------')
// var str1 = 'Learning,javascript  for the first time'
// console.log(Math.max([10,20,20.4,20.6,30.5]));