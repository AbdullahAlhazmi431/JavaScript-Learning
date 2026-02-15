/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
function showDetails(a, b, c) {
  let name1, age1, Available1;
  name1 =
    typeof a === "string"
      ? a
      : typeof b === "string"
        ? b
        : typeof c === "string"
          ? c
          : "Unknown";

  age1 =
    typeof a === "number"
      ? a
      : typeof b === "number"
        ? b
        : typeof c === "number"
          ? c
          : "Unknown";

  Available1 =
    typeof a === "boolean"
      ? a
      : typeof b === "boolean"
        ? b
        : typeof c === "boolean"
          ? c
          : false;

  let Available2 =
    Available1 === true ? "Available For Hire" : "Not Available For Hire";
  return `Hello ${name1}, Your Age Is ${age1}, You Are ${Available2}`;
}

console.log(showDetails("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(showDetails(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(showDetails(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(showDetails(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// A1
function sayHello(theName, theGender) {
  let theGender1 =
    theGender === "Male" ? "Mr" : theGender === "Female" ? "Miss" : "";
  return `Hello ${theGender1} ${theName} `;
}

// Needed Output
console.log(sayHello("Osama", "Male")); // "Hello Mr Osama"
console.log(sayHello("Eman", "Female")); // "Hello Miss Eman"
console.log(sayHello("Sameh")); // "Hello Sameh"

// A2
function calculate(firstNum, secondNum, operation) {
  if (secondNum == undefined) {
    return "Second Number Not Found";
  }
  if (operation === undefined) {
    return firstNum + secondNum;
  } else if (operation === "add") {
    return firstNum + secondNum;
  } else if (operation === "subtract") {
    return firstNum - secondNum;
  } else if (operation === "multiply") {
    return firstNum * secondNum;
  } else {
  }
}

// Needed Output
console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600

function ageInTime(theAge) {
  let months = theAge * 12;
  let weeks = months * 4.34524;
  let days = weeks * 7;
  let hours = days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60;
  if (theAge > 10 && theAge < 100) {
    return `${months} Months | ${weeks} weeks| ${days} days| ${hours} hours| ${minutes} minutes| ${seconds} seconds`;
  } else {
    return `Age Out Of Range`;
  }
}

// Needed Output
console.log(ageInTime(110)); // Age Out Of Range
console.log(ageInTime(38)); // Months Example => 456 Months
