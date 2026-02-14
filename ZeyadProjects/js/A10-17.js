let title = "Elezero",
description = "Elzero Web School", 
date = "25/10";

let markUp= `
<div>
<h3> ${title} </h3>
<p> ${description} </p>
<span> ${date} </span>
</div>
`
document.write(markUp);
document.write(markUp);
document.write(markUp);
document.write(markUp);
// A17
// Add Variables Here
let numOne = 10, numTwo = 20;
// Ouput
console.log(numOne + "" + numTwo); // Normal Concatenate => 1020
console.log(typeof(numOne + "" + numTwo)); // Normal Concatenate => String
console.log(`${numOne}${numTwo}`); // Template Literals Way => 1020
console.log(typeof(`${numOne}${numTwo}`)); // Template Literals Way => String

console.log(numTwo +"\n"+ numOne );
console.log(`${numTwo} \n${numOne}`);

// A2
console.log(elzero.innerHTML);
console.log(typeof elzero); 

// A3
let aa ="`I'm In"
, ab ="\\\\"
, ac ='Love \\\\ """ '
, ad ="'''"
, ae ="++ With ++"
, af ='\\"""\\"""'
, ag ='""JavaScript""``'

let markUp1 = aa +'\n'+ ab
+'\n'+ ac +ad +'\n'+ ae +'\n'+ af
+'\n'+ ag
console.log(markUp1)


// A4
let a = 21;
let b = 20;

console.log(`_`+`${a}_${b}`.repeat(`_${a+b}`[a-b])+`_`)// _21_2021_2021_2021_20_
