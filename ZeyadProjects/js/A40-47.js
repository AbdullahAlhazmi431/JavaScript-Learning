/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.pop();
my.pop();
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
my.shift();
my.pop();
console.log(my.slice(zero, counter)); // ["Elham", "Mazero"]

my.splice(zero, counter, "Elzero");
console.log(my.join(" ")); // "Elzero"

my.shift();
console.log(my.concat("rO").join()); // "rO"

// A1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// A2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

// A3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
console.log(arrOne.concat(arrTwo))
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// A4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

words.splice(0, 0, "zero");
words.pop();
words.pop();
words.pop();
console.log(words.join("").toUpperCase()); // ZERO

// A5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack.indexOf(needle)) {
  console.log("Found");
}

if (haystack.splice(needle)) {
  console.log("Found");
}

if (haystack.slice(needle)) {
  console.log("Found");
}

// A6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2).sort();
allArrs.shift();
allArrs.shift();
allArrs.shift();
allArrs.shift();
console.log(allArrs.join("").toLowerCase()); // fxy
