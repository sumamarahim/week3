/**
 * to install promtSync use the following command
 * 1: npm i prompt-sync => this will install prompt sync
 * 2: npm i @types/node -D => this will import node package for promptSync
 * NOW USE
 * 3: const promptSync = require("prompt-sync")();
 * 4: let userName = promptSync("Enter your name.. ");
 */
// THIS FOR, TO GET INPUT FROM USER WITH KEYBOARD
var promptSync = require("prompt-sync")(); // import prompt sync 
var userName = promptSync("Enter your name.. ");
// use any of these from following
//console.log(`your name is: ${userName}`); // template literals
console.log('Your name is: ', userName);
//console.log('YOur name is: '+userName);
// START OF ASSIGNMENT NO 2: 
// Assignement No 2: Grading System with user input
console.log("**************Start of Assignment  No 2******************");
var prompt1 = require("prompt-sync")()("Enter Name again: ");
console.log("Output is: ".concat(prompt1));
// Marks input from user 
console.log("Please enter your each sub marks out of 100");
var sub1 = require("prompt-sync")()("Enter your Sub 1 marks: ");
var sub2 = require("prompt-sync")()("Enter your Sub 2 marks: ");
var sub3 = require("prompt-sync")()("Enter your Sub 3 marks: ");
var sub4 = require("prompt-sync")()("Enter your Sub 4 marks: ");
console.log(typeof sub1); // let me check type of data: it's string
console.log(typeof Number(sub1)); // let me convert now string to num
var totalMarks = 400;
var sum = Number(sub1) + Number(sub2) + Number(sub3) + Number(sub4);
var percent = Number((sum / totalMarks) * 100);
//console.log(`the sum of all is: ${Number(sum)}`);
console.log("Total Marks is: ", sum, " Out of ", totalMarks);
console.log("Percentage is: ", percent, "%");
console.log(gradeFunc());
function gradeFunc() {
    var gradeVar = percent;
    if (gradeVar <= 100 && gradeVar >= 90) {
        console.log("Brilliant Student you've A+ grade");
    }
    else if (gradeVar < 90 && gradeVar >= 80) {
        console.log("Greate Student you have: A grade");
    }
    else if (gradeVar < 80 && gradeVar >= 70) {
        console.log("B+ Grade");
    }
    else if (gradeVar < 70 && gradeVar >= 60) {
        console.log("B Grade");
    }
    else if (gradeVar < 60 && gradeVar >= 50) {
        console.log("C Grade");
    }
    else
        console.log("SOrry! you are below the Grade C and your %age is: ", percent);
}
console.log("**************End of Assignment  No 2******************");
/**
 




// By Default promptSync use always strings
let marks1 = promptSync("Enter marks 1.. ");
let marks2 = promptSync("Enter marks 2.. ");
let marks3 = promptSync("Enter marks 3.. ");
let marks4 = promptSync("Enter marks 4.. ");

let totalMarks = marks1 + marks2 + marks3 + marks4;
console.log("Total Marks: ", totalMarks);

// To convert strings into number
const num = promptSync('Enter Number: ');
console.log('Your number + 4 = ');
console.log(Number(num)+4);








 */
/**
 



newFunction();

function newFunction() {
    const promptNum = promptSync();
    const num1Str = promptNum("Enter 1st num : ");
    const num2Str = promptNum("Enter 2nd num : ");

    const sum = num1Str + num2Str;
    console.log('Sum of ${sum} = ', sum);
}






 */ 
