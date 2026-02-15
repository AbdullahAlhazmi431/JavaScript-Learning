// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }

/*
  Loop Challenge
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Anwar",
// ];

// let adminsCount = myAdmins.indexOf("Stop");

// document.write(`<div>We Have ${adminsCount} Admins</div>`);
// document.write(`<hr>`);

// for (let i = 0; i < adminsCount; i++) {
//   document.write(`<div>The Admin For Teams ${i + 1} is ${myAdmins[i]}</div>`);

//   document.write(`<h3>Team Members</h3>`);

//   let counter = 0;

//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myEmployees[j][0].toLowerCase() === myAdmins[i][0].toLowerCase()) {
//       counter++;
//       document.write(`<p>- ${counter} ${myEmployees[j]}</p>`);
//     }
//   }

//   document.write(`<hr>`);
// }

// A1
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i !== exclude) {
    console.log(i);
  }
}
// Output
10;
20;
30;
50;
60;
70;
80;
90;
100;

// A2
let start1 = 10;
let end1 = 0;
let stop = 3;

for (let i = start1; i >= stop; i--) {
  if (i === start1) {
    console.log(i);
  } else {
    console.log(`${end1}${i}`);
  }
  if (i === stop) {
    break;
  }
}

// A3
// let start2 = 1;
// let end2 = 6;
// let breaker = 2;

// for (let i = start2; i <= end2; i++) {
//   document.write(`<div>${i}</div>`);
//   for (let j = breaker; j < end2; j += breaker) {
//     document.write(`<p>--${j}</p>`);
//   }
// }

// A4
let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
  index = index - jump;
  if (index === jump) break;
}

// Output
// 10
// 8
// 6
// 4

// A5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = letter.length - letter.length;

for (let i = count; i < friends.length; i += letter.length) {
  if (!friends[i].toLowerCase().startsWith(letter)) {
    console.log(`${++count} => ${friends[i]}`);
    continue;
  }
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// A6
let start3 = 0;
let swappedName = "elZerO";

let result = "";

for (let i = start3; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else {
    result += swappedName[i].toLowerCase();
  }
}

console.log(result);

// Output
("ELzERo");

// A7
let start4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start4 + true; i < mix.length; i++) {
  if (typeof mix[i] === typeof start4) {
    console.log(mix[i]);
  }
}

// Output
2;
3;
4;
