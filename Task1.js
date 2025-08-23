// 1. Check Even or Odd

let n=6;
if (n%2===0){
    console.log(n + ' is Even Number');
}
else {
    console.log(n + ' is Odd Number');
}

// 2. Divisible by 5 but Not by 10
let num= 25;
if (num%2===0 && num%10!=0){
    console.log("Satisfy");
}
else{
    console.log("not Stisfy");
}

// 3. Biggest Among Two Numbers
let a,b;
a=4;
b=7;
if (a>b){
    console.log(`Biggest is: ${a}`);
}
else{
    console.log(`Biggest is: ${b}`);
}

// 4. Smallest Among Two Numbers
let c,d;
c=4;
d=7;
if (c<d){
    console.log(`Smallest is: ${c}`);
}
else{
    console.log(`Smallest is: ${d}`);
}

// 5. Divisible by 2, 3, and 6
let m=18;
if(m%2===0 && m%3===0){
    console.log("Satisfy")
}
