// call() is a predefined js method
// with call(), an object can use a method belonging to another object 
// function borrowing
// call() takes argument seperately , pass parameter by comma separated

// call() method which is used to invoke a function directly bt passing in the refernce which point to the this variable inside the method
const youtuber1 = {
    name: "artist",
    content: 'painting',
    feature : function(){
        console.log(this.name , " run a channel ", this.content);
    },
    share : function(subscribe){
        console.log(this.name,  " pls do ", subscribe);
    }
}


const youtuber2 = {
    name: "sunny",
    content: 'reactjs',
}

youtuber1.feature();
youtuber1.feature.call(youtuber2)

youtuber1.share("like and subscribe");
youtuber1.share.call(youtuber2, "eat heathy")

