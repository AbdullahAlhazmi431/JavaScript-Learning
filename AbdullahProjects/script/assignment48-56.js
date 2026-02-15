// learning
// for (let i=0; i<5 ;++i) {
//     console.log(i)
// }

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed" , "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Abdullah", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let currentAdmins=[];
for (let i=0 ; i < myAdmins.length ; i++) {
    if(myAdmins[i]==="Stop") {
        break;
    }
    currentAdmins[i]=myAdmins[i];
}

currentAdmins.sort();
console.log(currentAdmins)


document.write(`<div>We Have ${currentAdmins.length} Admins</div>`);

let letterEmployees=[];
for (let i=0 ; i < currentAdmins.length ; i++) {
    document.write("<hr>")
    document.write(`<div>The Admin For Team ${i + 1} Is ${currentAdmins[i]} `)
    document.write(`<h3>Team Members </h3>`)

    let counter=0;
    for (let j=0 ; j<myEmployees.length ;j++) {
        if (myEmployees[j].startsWith(currentAdmins[i].charAt(0))) {
            letterEmployees[counter]=myEmployees[j];
            document.write(`<p>- ${counter+1} ${letterEmployees[counter]}</p>`)
            counter++;
        }  
    }

    counter=0;
    document.write(`</div>`)
}

// A1
let start = 10;
let end = 100;
let exclude = 40;

for (let i=start ;i<=end;i+=start) {
    if (i===exclude) {
        continue;
    }
    console.log(i)
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// A2 
let start2 = 10;
let end2 = 0;
let stop = 3;

for (let i = start2 ; i > end2 ; i-- ) {
    console.log(i)
    if (i===stop) {
        break
    }
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
console.log("-".repeat(25))

// A3 
let start3 = 1;
let end3 = 6;
let breaker = 2;

for (let i=start3 ; i <= end3 ; i++) {
    console.log(i)
    console.log(`-- ${breaker}
-- ${end3 - breaker}`)
}



// // Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// A4
let index = 10;
let jump = 2;

for (;;) {
  // Write Your Code Here
  console.log(index);
  index-=2;
  if (index===2) {
    break
  }
}

// // Output
// 10
// 8
// 6
// 4

// A5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter=letter.indexOf("a");
for (let i=letter.indexOf("a");i< friends.length;i++) {
    if (friends[i].startsWith("A")==false) {
        counter++;
        console.log(`"${counter} => ${friends[i]}" `);
    }
}
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

// A6
let start4 = 0;
let swappedName = "elZerO";
let newName="";

for(let i=start4; i< swappedName.length;i++) {
    if (swappedName[i]===(swappedName[i].toLowerCase())) {
        newName+=swappedName[i].toUpperCase()
    } else {
        swappedName[i]=(swappedName[i].toLowerCase());
        newName+=swappedName[i].toLowerCase()
    }
}
console.log(newName)
let stor = "x" + "z";
console.log(stor)
// Output
"ELzERo"    
    
// A7
let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
let newArray=[];
let counter2 =start5;
for (let i=start5 ; i<mix.length;i++) {
    
    if(i===start5) {
        continue;
    }
    if (typeof mix[i]==="number") {
        newArray[counter2]=mix[i];
        counter2++;
    }
}

console.log(newArray)
// Output
2
3
4

