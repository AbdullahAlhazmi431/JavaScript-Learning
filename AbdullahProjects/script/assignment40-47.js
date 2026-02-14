/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.pop()
my.pop()
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

my.pop()
my.shift()
my.push(my[zero].split("ham")[zero]+my.pop().split("Ma").pop())
my.shift()
console.log(my.join()); // "Elzero"

console.log(my[zero].slice(counter).split("e").pop()[zero]+my[zero].slice(counter).split("er").pop().toUpperCase()); // "rO"

// A1 
// let myFriends = ["Ahmed", "Elham", "Osama" ,"Ahmed", "Elham", "Osama", "Gamal"];
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends=myFriends.concat(myFriends);
myFriends.shift()
console.log(myFriends.slice(num , myFriends.lastIndexOf(myFriends[myFriends])))  // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends.slice(num)); // ["Ahmed", "Elham", "Osama"];


//A2 
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift()
console.log(friends); // ["Eman", "Osama"]


//A3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrTwo.pop(),arrOne.pop(),arrOne.pop(),arrOne.pop(),arrTwo.pop(),arrTwo.pop())
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//A4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop()[0].split("El").pop().toUpperCase()); // ZERO

//A5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
  console.log("Found")
}

if (haystack[1]===needle) {
  console.log("Found")
}

console.log()
if (haystack.at(haystack.indexOf(needle)===needle)) {
  console.log("Found")
}

//A6 
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr2.shift()
arr2.shift()
allArrs = allArrs.concat(arr2.shift(),arr1.pop(),arr2.shift()).join("").toLowerCase()
console.log(allArrs); // fxy