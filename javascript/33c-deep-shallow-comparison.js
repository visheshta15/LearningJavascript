// default comparison
// in js , we compare object and array by  refernce 
let a = {name : "foo"}
let b = {name : "bar"}
let c = a;

console.log(a == b);
console.log(a == c);
console.log(a === c);

// shallow comparison
const shallowcomparison = (s, t) =>{
    if(typeof(s)!== typeof(t)){
        console.log(s,t)
        return false
    }
    if(typeof(s) === 'array'){
        console.log(s,t)
        if(s.length !== t.length){
            return false 
        }
        console.log(s,t)
        return s.every((el, index)=> el === t[index]) 
    }
    console.log(typeof(s), typeof(t), s,t)

    return s === t
}
console.log("---------------------");
console.log(shallowcomparison(1, "1"))
console.log(shallowcomparison(false, 0))
console.log(shallowcomparison(1, 1))
console.log(shallowcomparison([1,2], [1,2]))



// deep comparison