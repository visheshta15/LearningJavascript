function assignEvent(a,b){
    let id = '12345';
 
    document.getElementsByTagName('h1')[0].innerText = a

    let btn = document.createElement('button')
    btn.innerHTML="button"
    document.getElementsByTagName('body')[0].appendChild(btn)
    // btn.onclick = function(event){
    //     console.log(id)
    // }
    btn.addEventListener('click', ()=>{
        console.log(id)
    })
}


assignEvent('apple', [1,2,3])


// ----------------------------------------
const abc = () => {
    let a = 'chickoo'
    return function(){
        console.log(a)
    }
}

abc()
abc()()

