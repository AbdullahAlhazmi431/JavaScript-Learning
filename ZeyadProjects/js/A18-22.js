/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(--e + ++b + g); // 173


// A1
// Replace ? With Arithmetic Operators
console.log(10 % 20 % 15 * 3 % 190 % 10 % 400); // 0


// A2
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + +true + +true + +true); // 6

// Soultion Three
console.log(++num + num -true -true); // 6

// Soultion Four
console.log(num++ + num-- - num-- +true); // 6

// Solution Five
console.log(--num - -num - -num); // 6

// Solution Six
console.log(num * num +num); // 6


// A3
let num1 = "10";

// Solution One
console.log(+num1 + +num1); // 20

// Solution Two
console.log(-num1 * -num1 / num1 + +num1); // 20

// Solution Three
console.log(+num1 - -num1); // 20

// Solution Four
console.log(+num1 + +num1 * true); // 20




// A4
let points = 10;

// Write Your Code Here
points += 3;
console.log(points); // 13

// Write Your Code Here
points -= 5;
console.log(points); // 8;