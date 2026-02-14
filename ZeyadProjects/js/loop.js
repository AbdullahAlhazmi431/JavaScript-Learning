// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

let adminsCount = myAdmins.indexOf("Stop");

document.write(`<div>We Have ${adminsCount} Admins</div>`);
document.write(`<hr>`);

for (let i = 0; i < adminsCount; i++) {
  document.write(`<div>The Admin For Teams ${i + 1} is ${myAdmins[i]}</div>`);

  document.write(`<h3>Team Members</h3>`);

  let counter = 0;

  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0].toLowerCase() === myAdmins[i][0].toLowerCase()) {
      counter++;
      document.write(`<p>- ${counter} ${myEmployees[j]}</p>`);
    }
  }

  document.write(`<hr>`);
}
