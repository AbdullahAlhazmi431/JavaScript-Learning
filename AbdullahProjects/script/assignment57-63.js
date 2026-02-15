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

function showDetails (...parameters) {
    let name , age , status ;
    for (let i=0 ; i < parameters.length ; i++) {
        typeof parameters[i]==="string" 
        ? name=parameters[i] 
        : typeof parameters[i]==="number"
        ? age=parameters[i]
        : typeof parameters[i]==="boolean"
        ? status=parameters[i]
        : "nothing";
    }
    let statusMessage;
    status===true? statusMessage="You Are Available For Hire" : statusMessage="You Are Not Available For Hire";
    console.log(`Hello ${name}, Your Age Is ${age}, ${statusMessage}`)
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "abdullah", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 21, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// A1
function sayHello(theName, theGender) {
    let nickname;
    theGender ==="Male"? nickname="Mr" : nickname="Miss" ;
    theGender=== undefined ? console.log(`Hello  ${theName}`) : console.log(`Hello ${nickname} ${theName}`)
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// A2 
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
    let result;
    if (secondNum===undefined) {
        return console.log("Second Number Not Found")
    }
    if (operation===undefined) {
        operation="add";
    }

    if (operation==="add") {
        result=firstNum+secondNum;
        console.log(result) ;
    } else if (operation==="subtract") {
        result=firstNum-secondNum;
        console.log(result) ;
    } else if (operation==="multiply") {
        result=firstNum*secondNum;
        console.log(result) ;
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

// A3
function ageInTime(theAge) {
    // Your Code Here
    if (theAge<10 || theAge>100) {
        return console.log("Age is out of range")
    }
    let months=theAge * 12 ;
    let weeks=months * 4.34524 ;
    let days=weeks * 7 ;
    let hours=days * 24 ;
    let minutes=hours * 60 ;
    let seconds=minutes * 60 ;
    console.log(`Age in months: ${months}`)
    console.log(`Age in weeks: ${weeks}`)
    console.log(`Age in days: ${days}`)
    console.log(`Age in hours: ${hours}`)
    console.log(`Age in minutes: ${minutes}`)
    console.log(`Age in seconds: ${seconds}`)
    
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// A4 

  // same as challange


// A5
function createSelectBox(startYear, endYear) {
  // Your Code Here
    // <select name="" id="">hi
    //     <option value=""></option>
    //     <option value=""></option>
    // </select>
    document.write("<h3>Choose Year</h3>")
    document.write(`<div>`)
        document.write(`<select name="years" id="years">`)
    for (let i=startYear;i<=endYear;i++) {
            document.write(`<option value="${i}">${i}</option>`)
    }
        document.write(`</select>`)
    document.write(`</div>`)
}
createSelectBox(2000, 2021);

// A6 
function multiply(...parameters) {
    let numbers=[] , counter=0 ; 
    // filter loop
    for (let i=0 ;i<parameters.length;i++) {
        if (typeof parameters[i]==="number") {
            numbers[counter]=parseInt(parameters[i]);
            counter++;
        }
    }
    // multiply loop
    let result=1;
    for (let i=0;i < numbers.length ;i++) {
        result *=numbers[i];
    }
    console.log(result)
}
multiply(10, 20); // 200
multiply("A", 10,"sffs", 30); // 300
multiply(100.5, 10, "B"); // 1000