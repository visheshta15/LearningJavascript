// JavaScript only hoists declarations, not initializations

// [1]
var x = 5; // Initialize x
var y = 7; // Initialize y
var s1 = x + " " + y;
console.log(s1);

// [2]
var x2 = 5; // Initialize x
var s2 = x2 + " " + y2;
console.log(s2);

var y2 = 7; // Initialize y

// [3]
var x3 = 5; // Initialize x
var y3;
var s3 = x3 + " " + y3;           // Display x and y
console.log(s3);
y3 = 7; // Initialize y


