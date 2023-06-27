// flat arrar 

let user = {
    name: "Visheshta",
    age: 25,
    address: {
        personal: {
            city: "kanpur",
            area: {
                landmark: "gopal nagar",
                hno: 47
            }
        },
        office : {
            city: "chennai",
            area: "m city",
            pincodes : 122019
        }
    }
}


console.log(user);
console.log(typeof(user.address.office.city));
console.log("----------------------------------------------")
let finalobj = {}
let magicfunc = (obj1,parent) => {
    for(let key in obj1){
        if(typeof(obj1[key])==='object'){
            magicfunc(obj1[key], parent+"_"+key)
        }else{
            finalobj[parent + '_' + key] = obj1[key]
        }
    }
}


magicfunc(user, "user")
console.log("finalobj ; ", finalobj);