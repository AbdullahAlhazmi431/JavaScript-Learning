/* Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a,parseInt(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.round(d));
console.log(Math.pow(d, 0) +true);
console.log(+d.toFixed(0));

// Use Variables b + d To Get This Valus

console.log((parseInt(b) / (d + d / 4)).toFixed(2)); // "66.67"
console.log(Math.round(parseInt(b) / (d + d / 4))); // 67


// A1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10_000_0); // 100000
console.log(10e4); // 100000
console.log(1_00000); // 100000
console.log(10**5); // 100000
console.log(100000 % 1000000); // 100000
console.log(1000000 / 10); // 100000
console.log(50000+50000); // 100000
console.log(parseInt(100000.5)); // 100000
console.log(Math.pow(100000,1)); // 100000
console.log(+"100000"); // 100000

// A2
console.log(Math.abs((Number.MIN_SAFE_INTEGER))); // 9007199254740991

// A3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

// A4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57

// A5
let num = 10;

console.log(+Number.isInteger(num) + true); // 2

// A6
let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(+flt.toFixed()); // 10
console.log(parseInt(Math.pow(flt,true))); // 10
console.log(parseInt(flt * true)); // 10
console.log(parseInt(flt + false)); // 10

// A7
console.log(parseInt(Math.random() * 5));  // 0 || 1 || 2 || 3 || 4
