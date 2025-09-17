let btn = document.getElementsByClassName("btn")
let inp_str = document.getElementById("inp_str");

for (let b of btn) {
    b.addEventListener("click", function () {
        if (b.textContent === "AC") inp_str.value = ""
        else if (b.textContent === "=") inp_str.value = eval(inp_str.value)
        else if (b.textContent === "x") inp_str.value = inp_str.value.slice(0,-1)
        else inp_str.value += b.textContent
    });
}


// let inp_str=document.getElementById("inp_str");

// function all_clear(){
//     inp_str.value="";
// }

// function dele(){
//     inp_str.value=inp_str.value.slice(0, -1);
// }

// function addition(){
//     inp_str.value+="+";
// }

// function substraction(){
//     inp_str.value+="-";
// }

// function multiply(){
//     inp_str.value+="*";
// } 

// function division(){
//     inp_str.value+="/";
// }

// function percentage(){
//     inp_str.value+="%";
// }

// function one(){
//     inp_str.value+="1";
// }

// function two(){
//     inp_str.value+="2";
// }

// function three(){
//     inp_str.value+="3";
// }

// function four(){
//     inp_str.value+="4";
// }

// function five(){
//     inp_str.value+="5";
// }

// function six(){
//     inp_str.value+="6";
// }

// function seven(){
//     inp_str.value+="7";
// }

// function eight(){
//     inp_str.value+="8";
// }

// function nine(){
//     inp_str.value+="9";
// }

// function twozero(){
//     inp_str.value+="00";
// }

// function onezero(){
//     inp_str.value+="0";
// }

// function dot(){
//     inp_str.value+=".";
// }

// function equalto(){
//     inp_str.value = eval(inp_str.value);
// }