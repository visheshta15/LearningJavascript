const inp = {name : 'kajal', address: {city: 'kanpur'}};
    let update1_1 = Object.assign({}, inp);
    const update2_1 = {...inp, name: 'spread..'}
    console.log(inp, update1_1, update2_1);

    update1_1['name']='assign'
    console.log('111--', inp, update1_1, update2_1);
    update2_1.address.city = 'banaras'
    console.log('222--', inp, update1_1, update2_1);

    // let updated = Object.assign({}, inp, {name: 'apple'});
    // let updated1 = {...inp, name: 'vish'}
    console.log("(a+b)-c");

let a = Object.assign({});
console.log(a);


// -----------------------------------
var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };
console.log(Object.values(student).toString())
console.log(Object.values(student).join(', '))