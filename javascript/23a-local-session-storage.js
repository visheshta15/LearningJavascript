// ls and ss , they follow the same origin policy
// origin: 
// protocalls: http/https
// host/domain: afterAll.com
// port: 8080

// if wesay we are setting some data into the local Storage, so we are setting for that particular original 

// localStorage is set on the window object of the OpenInBrowser.

const inp = {
        name : 'kajal', 
        city: 'kanpur',
        work: "IT"
};

// setItem
console.log(window.localStorage)
Object.keys(inp).map((ele)=>{
    localStorage.setItem(ele, inp[ele])
})
localStorage.setItem("hello", "world");
localStorage.setItem("user", JSON.stringify(inp))

// getItem
console.log(localStorage)
Object.keys(inp).map((ele)=> {
    console.log(localStorage.getItem(ele))
})
let item = localStorage.getItem('user')
let objitem = JSON.parse(item)
console.log(item, typeof(item), objitem, typeof(objitem) );

// removeItem
localStorage.removeItem('city');
console.log(localStorage)

// clear 
// localStorage.clear()
console.log(localStorage)