// console.log('js');
// console.log('hi');
// const person = {
//     fname:"John",
//     lname:"Doe",
//     age:25
//   }; 
  
//   let txt = "";
//   for (let x in person) {
//     txt += person[x] + " ";
//     // console.log(x, person[x]);
//   }


//   console.log('11', person);
// delete person.age
//   console.log(person);


//   --------------------------------
const person = {
    name: "John",
    age: function () {return 30;}
  };
  person.age = person.age.toString();
  
  let myString = JSON.stringify(person);
  console.log(person.age, myString);

// ----------------------------------
// Create an object:
// const person = {
//     firstName: "John",
//     lastName: "Doe",age : 50,
//     get fullName() {
//       return (this.firstName + " " + this.lastName).toUpperCase()
//     },
//     set setfullName(middle) {
//          this.firstName += " " + middle 
//       },

//     fullName2: function() {
//         return this.firstName + " " + this.lastName;
//     }
//   };
// console.log(person.fullName, person.fullName2());
// person.setfullName  = 'singh';
// console.log(person.fullName);

// Object.defineProperty(person, "add", {get : function(){this.age = 45}})
// person.add
// console.log(person);

// --------------------------------------
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// console.log(myFather, myMother);

// --------------------------------------
// for (const x of [1,2,3,4,5]) {
//     console.log(x);
//   }

//   for (const x of "hello") {
//     console.log(x);
//   }

//   const letters = (new Set(["a","b","a","b","c"]))
//   letters.add("d");
//   for(let i of letters){
//       console.log(i);
//   }
//   console.log(letters, letters.values());
//   console.log(letters.keys(), letters.entries());