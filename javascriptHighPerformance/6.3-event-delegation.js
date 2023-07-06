document.getElementById('category').addEventListener('click', (e)=>{
    // console.log(e)
    console.log(e.target)
    // console.log(e.target.id)
    // console.log(window.location)
    if(e.target.tagName === "LI"){
        console.log(e)
    }
})

// Any attribute on any element whose attribute name starts with data- is a data attribute. Say you have an article and you want to store some extra information that doesn't have any visual representation
// data-* attributes allow us to store extra information
// Issues
// Do not store content that should be visible and accessible in data attributes
document.getElementById('form').addEventListener('keyup', (e)=>{
    // console.log(e)
    console.log(e.target.value)
    console.log(e.target.dataset)
    if(e.target.dataset.uppercase !== undefined){
        e.target.value = e.target.value.toUpperCase()
    }else if(e.target.dataset.lowercase != undefined){
        e.target.value = e.target.value.toLowerCase()
    }

})