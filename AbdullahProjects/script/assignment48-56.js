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


    
    

