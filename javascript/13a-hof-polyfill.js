const r = [3,2,1,4];

const area = function(radius) {
    return Math.PI * radius * radius
}

const parameter = function(radius) {
    return 2 * Math.PI * radius
}

const calculate = (fn, r) =>{
    let out = {}
    for(let i=0; i < r.length; i++){
        out["radius_"+ r[i]] = parseFloat(fn(r[i],2).toFixed(2))
    }
    return out
}

console.log(r.map(area));


Array.prototype.calculateMapImplmentation = function (fn){
    let out = []
    for(let i=0; i < this.length; i++){
        out.push(fn(this[i]))
    }
    return out
}

console.log(r.calculateMapImplmentation(area));

console.log(calculate(parameter , r));
console.log(calculate(area , r));
