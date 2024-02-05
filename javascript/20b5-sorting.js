let a1 = ['dog','cat','hen','bat','rat']
a1.sort()
// let sa1 = a1.toSorted();
console.log(a1)

let a2 = [30,2,60,55,89,100]
// a2.sort((a,b)=> a>b? 1: a<b? -1: 0)
// a2.sort((a,b)=> a<b? 1: -1)
a2.sort((a,b)=> b-a)
console.log(a2)