/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

// let a = "Elzero Web School";

// // Include This Method In Your Solution [slice, charAt]
// console.log(a.charAt(2).toUpperCase()+a.slice(3,6)); // Zero

// // 8 H
// console.log(a.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH

// // Return Array
// console.log(a.slice(0,6).split(' ')); // ["Elzero"]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(a.substr(0,6),a.substr(11,16)); // Elzero School

// // Solution Must Be Dynamic Because String May Changes
// console.log(a[0].toUpperCase()+a.slice(1.17)); // eLZERO WEB SCHOOl

// A1
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.charAt(0).repeat(3).toLowerCase()); // eee

// A2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

//A11
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 !== "-10"); // true
console.log(!-50 >= +"-40"); // true
console.log(!10 >= "-40"); // true
console.log(!"10" !== 10); // true
console.log(!20 === false); // true

// A12
// let num1 = 10;
// let num2 = 20;

// console.log(num1 != num2); // true
// console.log(!num1 != num2); // true
// console.log(num1 <= num2 ); // true
// console.log(num1 < num2); // true
// console.log(num1 <= num2 && !num1 != num2); // true
// console.log(!num1 != num2 || num1 < num2); // true

// A13
let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a == b); // true
console.log(a < b || a == c); // true
console.log(!(a == b) && !(a > b) && a >= c && !(a < c)); // true

/*
  If Condition Challenge
*/

let a1 = "";

if (a1 < 10) {
  console.log(10);
} else if (a1 >= 10 && a1 <= 40) {
  console.log("10 To 40");
} else if (a1 > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
a1 < 10
  ? console.log(10)
  : a1 >= 10 && a1 <= 40
    ? console.log("10 To 40")
    : a1 > 40
      ? console.log("> 40")
      : console.log("Unknown");

let st = "Elzero Web School";

if (st.indexOf("e") + "" + st.indexOf("r") === "34") {
  console.log("Good");
}

// console.log(st.indexOf("e") + "" + st.indexOf("r"))

if (st.charAt(7).toLowerCase() === "w") {
  console.log("Good");
}

// console.log(st.charAt(7).toLowerCase());

if (typeof st !== "string") {
  console.log("Good");
}

if (typeof +st === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

// A21
// let num3 = 9;

// num3 < 10 ? console.log(`00${num3}`): (10 < num3 && num3 < 100)? console.log(`0${num3}`): (num3 >= 100)? console.log(`${num3}`):console.log("Unknown");

// A22
// let num4 = 9;
// let str = "9";
// let str2 = "20";

// // ? console.log():? console.log():? console.log(""):console.log("Unknown");

// if (num4 == str){
//   console.log(`"{num1} Is The Same Value As {str}"`)
//     if(num4 === +str){
//   console.log(`"{num1} Is The Same Value As {str} But Not The Same Type"`)
//   }
//     if(num4 !== str2){
//   console.log(`"{num1} Is Not The Same Value Or The Same Type As {str2}"`)
//   }
//       if(num4 !== str2){
//   console.log(`"{str} Is The Same Type As {str2} But Not The Same Value"`)
//   }
//   else{
//   console.log("Unknown")
//   }
// }

// Output
("{num1} Is The Same Value As {str}");
("{num1} Is The Same Value As {str} But Not The Same Type");
("{num1} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");

// A23
let num5 = 10;
let num6 = 30;
let num7 = "30";

if (num7 > num5 && num7 !== num6) {
  console.log(
    `"30 Is Larger Than 10 And Type string Not The Same Type As number"`,
  );
  if (num7 > num5 && +num7 === num6) {
    console.log(
      `"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"`,
    );
  }
  if (num7 !== num5 && num7 !== num6) {
    console.log(
      `"${num7} Value And Type Is Not The Same As ${num5} And Type Is Not The Same As ${num6}"`,
    );
  } else {
    console.log("Unknown");
  }
}

// A24
// Edit What You Want Here

let num1 = 10;
let num2 = 1;
let num3 = 10;
let num4 = 40;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

// switch statment

switch (job) {
  case "Manager":
    console.log(`Salary is ${(salary = 8000)}`);
    break;
  case "IT":
  case "Support":
    console.log(`Salary is ${(salary = 6000)}`);
    break;
  case "Developer":
  case "Designer":
    console.log(`Salary is ${(salary = 7000)}`);
    break;
  default:
    console.log(`Salary is ${(salary = 4000)}`);
}

/*
  If Challenge
*/

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

// If statment
if (holidays === 0) {
  console.log(`My Money is ${(money = 5000)}`);
} else if (holidays === 1 || holidays === 2) {
  console.log(`My Money is ${(money = 3000)}`);
} else if (holidays === 3) {
  console.log(`My Money is ${(money = 2000)}`);
} else if (holidays === 4) {
  console.log(`My Money is ${(money = 1000)}`);
} else if (holidays === 5) {
  console.log(`My Money is ${(money = 0)}`);
} else {
  console.log(`My Money is ${(money = 0)}`);
}

// A31
let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
console.log(day[3].trim().toUpperCase() + day.slice(4, 9));

let day1 = "Friday";

switch (day1) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  // Output => "No Appointments Available"
  case "Monday":
  case "Saturday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  // Output => "From 10:00 AM To 5:00 PM"
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  // Output => "From 10:00 AM To 6:00 PM"
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  // Output => "From 10:00 AM To 7:00 PM"
  default:
    console.log("Its Not A Valid Day");
  // Output => "Its Not A Valid Day"
}
