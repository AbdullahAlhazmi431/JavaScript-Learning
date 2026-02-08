// learning phase 
var string = "zeyad";

console.log(string[2])

console.log("10" , "zeya")
// output : 10 zeya
console.log("10" + "zeya")
// output : 10zeya
console.log(10 , "zeya")
// output : 10 'zeya'

// nan - > not a number
console.log(+"zeyad 20")

console.log(+"")
console.log(+" ")

console.log(true + "3")
console.log(true + 3)
console.log("____________________")
var zo = 1 , bo = 2  , fo="3";
console.log(zo++ + bo++ + zo ) // if not 1 + 2 + 1 =4 , 2 + 2 + 2 =6
console.log(++zo + bo++ + zo)
console.log(fo++ + +fo) //
console.log(+fo)

// start challange 

let a = 10;
let b = "20";
let c = 80; //11 - 20 + 80 - -11 + 11 = -9+80 =71 + 11 = 82 + 11 = 93


console.log(++a + +b++ + +c++ - +a++); //11 + 20 + 80 -11 = 100 
console.log(++a + -b + +c++ - -a++ + +a);//13 - 21 + 81 + 13 + 14 = -8 = 73  + 27 =100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);//81 + 21 + 13 * 21 - 22 * 13 + 12 - 1      81 + 21 -13 + 11  102 89  +11 =100   


// challenge 2
let d = "-100" , e = "20" , f="30" , g=true ;

console.log(-d * e);// 2000
console.log();//173

// A1 
// Replace ? With Arithmetic Operators
console.log((10 * 20 * 15 / 3 - 190 - 10) % 400); // 0


// A2 
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
console.log(num ** num / num - num ); // 6

// Soultion Four
console.log(num + num - false); // 6

// Solution Five
console.log(num + num * true); // 6

// Solution Six
console.log(num ** num % (num * ( num + num + true )) ); // 6


// A3
let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(+num2 * true + +num2); // 20

// Solution Three
console.log(+num2 * false + +num2 + +num2); // 20

// Solution Four
console.log(+num2 * +num2 / +num2  + +num2); // 20

// A4
let points = 10;

// Write Your Code Here
points += 3;
console.log(points); // 13

// Write Your Code Here
points -= 5;
console.log(points); // 8;

// end A4

// end 22 videe

// start video 27 challenge

/*
  Number Challenge
*/

let n1 = 100;    //a
let n2 = 2_00.5;  //b
let n3 = 1e2;  //c
let n4 = 2.4;  //d

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(n1 , n2 , n3 , n4)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(n1 , Math.floor(n4))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(n4.toFixed(0)));
console.log(Math.floor(n4));
console.log(Math.round(n4));
console.log(Math.trunc(n4));

// Use Variables b + d To Get This Valus
console.log((Math.floor(n2)/Math.ceil(n4)).toFixed(2).toString()); // 66.67 => String
console.log(parseInt((Math.floor(n2)/Math.ceil(n4)).toFixed(0))); // 67 => Number
// end challenge

// A1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1_00000); // 100000
console.log(Math.pow(10 , 5)); // 100000
console.log(10 ** 5); // 100000
console.log(1e2 * 1e3); // 100000
console.log(1000 * 100); // 100000
console.log(1e10 / 1e5); // 100000
console.log(1e1 * 1e4); // 100000
console.log(100000.00); // 100000
console.log(2e5 - 1e5); // 100000
console.log(1_0_0_0_0_0); // 100000

// A2 
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991


// A3 
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16


// A4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57


//A5
let a5 = 10;

console.log(Number.isInteger(a5) + Number.isInteger(a5)); // 2

// A6
let flt = 10.4;

console.log(+flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10

// A7
console.log((Math.abs((Math.random()-0.5) *10 )).toFixed(0)); // 0 || 1 || 2 || 3 || 4