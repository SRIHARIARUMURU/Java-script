// 11. Smallest Among Three Numbers
const prompt1=require("prompt-sync")();
let input1=prompt1("Enter 3 Numbers: ");
let [a1,b1,c1]= input1.split(" ").map(Number);
if (a1<b1 && a1<c1){
    console.log(`Smallest is: ${a1}`);
}
else if (b1<c1 && b1<a1){
    console.log(`Smallest is: ${b1}`);
}
else{
    console.log(`Smallest is: ${c1}`);
}

// 12. Perfect Square or Not
const prompt2=require("prompt-sync")();
let inp2=Number(prompt2("Enter a Number: "));
let ps=false;
for(let i=1;i*i<=inp2;i++){
    if (i**2==inp2){
        ps=true;
    }
}
if (ps){
    console.log("Perfect square");
}
else{
    console.log("Not a Perfect square");
}

// 13. Cars Required for Members (Max 5 per car)
const promopt3= require("prompt-sync")();
members=Number(promopt3("Enter Number of members: "));
cars=~~(members/5);
members %=5;
if (members>0){
    cars+=1;
}
console.log(`Cars needed = ${cars}`);

// 14. Second Biggest Among Three Numbers
const prompt4=require("prompt-sync")();
let nums=prompt4("Enter 3 Numbers: ");
let [a2,b2,c2]= nums.split(" ").map(Number);
if ((b2<a2 && a2<c2) || (b2>a2 && a2>c2)){
    console.log(`Second biggest: ${a2}`);
}
else if ((a2<b2 && b2<c2) || (a2>b2 && b2>c2)){
    console.log(`Second biggest: ${b2}`);
}
else{
    console.log(`Second biggest: ${c2}`);
}

// 15. Leap Year or Not
const prompt5=require("prompt-sync")();
let year = prompt5("Enter Year: ");
if ((year%4==0 && year%100!=0) || (year%400==0)){
    console.log('Leap year');
}
else{
    console.log('Not a Leap year')
}