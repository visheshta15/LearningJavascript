console.log('for loop---------')
for (let i=0; i<5; i++){
    console.log('for counter:', i+1)
}

console.log('while loop---------')
let i = 0
while(i<5){
    console.log('while counter:', i+1)
    i++
}

console.log('do while loop---------')
let j=0
do{
    console.log('do while', j)
    j++
}while(j<5)

console.log('for in loop---------')
let obj  = {
    a:1,
    b:3,
    c:5,
    d:7
}
for( let i in obj){
    console.log(i)
}
// for in is slower against other