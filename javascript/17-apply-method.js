// apply method is similar to Call() method.
// call() takes argument seperately and apply method takes as an array 

const youtuber1 = {
    name: "artist",
    content: 'painting',
    feature : function(){
        console.log(this.name , " run a channel ", this.content);
    },
    share : function(subscribe, place){
        console.log(this.name,  " pls do ", subscribe , " and ", place);
    }
}


const youtuber2 = {
    name: "sunny",
    content: 'reactjs',
}

youtuber1.feature();
youtuber1.feature.apply(youtuber2)

youtuber1.share("like and subscribe");
youtuber1.share.apply(youtuber2, ["eat heathy", "visit Delhi"])


let max = Math.max(1, 2, 3);
console.log(max);

let arrmax = Math.max.apply(null, [1, 2, 3, 5, 4]);
console.log(arrmax);




