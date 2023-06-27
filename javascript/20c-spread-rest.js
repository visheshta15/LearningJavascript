console.log('------------------rest and spred operator')
const rest =(...values) =>{
    console.log("values : ", values)
}
rest( 22,33,44,11)

// spread the element into individual items 
const spread = (a1,a2,a3)=>{
    console.log(a1,a2,a3)
}
let val = [12,13,14,15]
spread(...val)