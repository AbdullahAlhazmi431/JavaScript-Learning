// Create variables
let titleName = "Elzero" ,
    descriptionContent = "Elezro Web School" ,
    dateContent = "25/10"
;

let htmlCode = `
    <div>
        <h3 id="title">${titleName}</h3>
        <p id="desc">${descriptionContent}</p>
        <span id="date">${dateContent}</span>
    </div>
                `
;

document.write(htmlCode)
document.write(htmlCode)
document.write(htmlCode)
document.write(htmlCode)
// end video

// start assigment
// A1 
// Add Variables Here
var var1 = 10 ,
    var2 = 20
;

// Ouput
console.log(var1+""+var2); // Normal Concatenate => 1020
console.log(typeof(var1+""+var2)); // Normal Concatenate => String
console.log(`${var1}${var2}`); // Template Literals Way => 1020
console.log(typeof(`${var1}${var2}`)); // Template Literals Way => String

console.log("Normal Concatenate"+"\n"+var1+"\n"+var2);
/*
  Normal Concatenate
  20
  10
*/

console.log(`Template Literals Way
${var1}
${var2}`   );
/*
  Template Literals Way
  20
  10
*/
// end A2

// A2 
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
// end A2

// A3
console.log("`I'm In\n\\\\\nLove \\\\ \"\"\" '''\n++ with ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``")
/* output:
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
*/
// end A3

// A4 
let a = 21;
let b = 20;

console.log("_"+`${a}_${b}`.repeat(`_${a+b}`[a-b])+"_"); // _21_2021_2021_2021_20_
// end A4

