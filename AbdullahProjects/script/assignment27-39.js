/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

var myname = "abdullah zaki alhazmi";
console.log(myname.split(" zaki "))

console.log(myname.slice(2 , 2 +5))


// start challenge 

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";



// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase()+a.slice(3,6)); // Zero

// 8 H
console.log((a.charAt(a.indexOf("h")).toUpperCase()).repeat(8)); // HHHHHHHH

// Return Array
console.log((a.slice(0,6)).split()); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0,7)+a.substr(a.indexOf("S"))); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase()+a.slice(1,-1).toUpperCase() + a.charAt(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl


// A1 
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log((userName.split("lz"))[0].toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // eee

// A2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith((letterE).toUpperCase())); // True
console.log(word.endsWith((letterO).toLowerCase())); // True


// -------------------------------------------------------------------------------------------------------------------------------


// =
// ==
// ===

// >= <=

// || && 
// !

//A1
console.log("-------------------------------------------")
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 >= +"-40"); // true
console.log(! 10 <= -"-40"); // true
console.log(! "10" != 10); // true
console.log(! 20 === false); // true

// A2 

let num1 = 10;
let num2 = 20;
console.log("-------------------------------------------")
console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(num2 > num1); // true
console.log(num2 >= num1); // true
console.log(!(num1 == num2)); // true
console.log(num1 !== num2); // true

// A3

let aa = 20;
let bb = 30;
let cc = 10;
console.log("-------------------------------------------")
console.log(aa < bb && aa == bb || aa < bb); // true
console.log(aa < bb || aa > bb); // true
console.log(!(aa > bb) && !(aa >= bb) && !(aa == bb) && !(aa === bb)); // true

gender="male;"
let result = gender==="male"? "male" : "female";

let age =66 , desc;


age > 18 
  ?  age >=18 && age < 23
    ? desc="18-22" 
      : age >=22 && age < 30 
      ? desc="22-30" 
    : desc="Your age is above 30 "
  : desc="Your age is under 18 "

console.log("Your age : " + desc)
console.log("-------------------------------------------")

// -------------------------------------------------------------------------------------------------------------------------------
/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

// Condition ? If True : If False

/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/
// -------------------------------------------------------------------------------------------------------------------------------

/*
  If Condition Challenge
*/

let s = 50;

if (s < 10) {
  console.log(10);
} else if (s >= 10 && s <= 40) {
  console.log("10 To 40");
} else if (s > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

s < 10 
  ? console.log(10) 
  : s >= 10 && s <= 40 
  ? console.log("10 To 40") 
  : s > 40 
  ? console.log("> 40") 
  : console.log("Unknown");

// Write Previous Condition With Terasry If Syntax

let st = "Elzero web School";

if ((st.length+st.length).toString() === "34") {
  console.log("Good");
}
// W Position May Change
if ( st.toLowerCase().charAt(st.toLowerCase().indexOf("w")) === "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if (typeof (st.length) === "number") {
  console.log("Good");
}

if ( st.slice(0,6)+st.slice(0,6) === "ElzeroElzero") {
  console.log("Good");
}

// -------------------------------------------------------------------------------------------------------------------------------

// A1
// Test Case 1
let  Num = 2; // "009"

if (Num< 10) {
  console.log("00"+Num)
} else if (Num> 10 && Num<100) {
  console.log("0"+Num)
} else if(Num>=100)  {
  console.log(Num)
}

Num < 10 
? console.log("00"+Num) 
: Num> 10 && Num<100
? console.log("0"+Num)
: Num>=100
? console.log(Num)
: "";

console.log("-------------------------------------------")

//A2 
let num10 = 9;
let str = "9";
let str2 = "20";

if (num10===str) {
  console.log("{num10} Is The Same Value As {str}")
}
if (num10==str && num10!==str) {
  console.log("{num10} Is The Same Value As {str} But Not The Same Type")
}
if (typeof (str) === typeof (str2) && str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}
if (typeof (num10) !== typeof (str2) && num10 != str2) {
  console.log("{num10} Is Not The Same Value Or The Same Type As {str2}")
}

// Output
"{num10} Is The Same Value As {str}"
"{num10} Is The Same Value As {str} But Not The Same Type"
"{num10} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
console.log("-------------------------------------------")

//A3
let num11 = 10;
let num22 = 30;
let num33 = "30";

if (num33 > num11 && typeof (num33) !== typeof (num22) ) {
  if (num33 == num22) {
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
  }
  if ( typeof (num33) !== typeof (num11) ) {
        console.log("{num33} Value And Type Is Not The Same As {num11} And Type Is Not The Same As {num22}")
  }
  console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
}

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num33} Value And Type Is Not The Same As {num11} And Type Is Not The Same As {num22}"

console.log("-------------------------------------------")
// A4 
// Edit What You Want Here

let nuum1 = 6;
let nuum2 = 5;
let nuum3 = 6;
let nuum4 = 28;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (nuum1 > nuum2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (nuum1 > nuum2 && nuum1 < nuum4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (nuum1 > nuum2 && nuum1 === nuum3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((nuum1 + nuum2) < nuum4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((nuum1 + nuum3) < nuum4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((nuum1 + nuum2 + nuum3) < nuum4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (nuum4 - (nuum1 + nuum3) + nuum2 === 21) {
  console.log("True");
} else {
  console.log("False"); 
}


