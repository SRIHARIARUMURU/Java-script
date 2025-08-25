// 6. Voting Eligibility
const prompt1=require('prompt-sync')();
let age = Number(prompt1("Enter Your age: "))
if (age >= 18){
    console.log("Eligible to vote");
}
else{
    console.log("Not-Eligible to vote")
}

// 7. Student Pass/Fail Based on All Subjects >= 35
const prompt2=require('prompt-sync')();
let marks1=prompt2("Enter marks of Maths, Physics, Chemistry : ")
let [ma,ph,ch] = marks1.split(" ").map(Number)
if (ma >=35 && ph>=35 && ch>=35) {
    console.log("Pass")
}
else 
{
    console.log("Fail")
}

// 8. Student Pass if Passed Any One Subject (>= 35)
const prompt3=require('prompt-sync')();
let marks2=prompt3("Enter marks of Maths, Physics, Chemistry : ")
let [m,p,che] = marks2.split(" ").map(Number)
if (m >=35 || p>=35 || che>=35) {
    console.log("Pass")
}
else 
{
    console.log("Fail")
}

// 9. Student Pass if Passed Any Two Subjects
const prompt4=require('prompt-sync')();
let marks3=prompt4("Enter marks of Maths, Physics, Chemistry : ")
let [ms,ps,cy] = marks3.split(" ").map(Number)
if ((ms >=35 && ps>=35) || (ps>=35 && cy>=35) || (ms>=35 && cy>=35)){
    console.log("Pass")
}
else 
{
    console.log("Fail")
}

// 10. Biggest Among Three Numbers
const prompt5=require("prompt-sync")();
let n = prompt5("Enter 3 Numbers: ");
let[a,b,c]=n.split(" ").map(Number)
if (a>b && a>c){
    console.log(`Biggest is: ${a}`)
}
else if (b>a && b>c){
    console.log(`Biggest is: ${b}`)
}
else{
    console.log(`Biggest is: ${c}`)
}