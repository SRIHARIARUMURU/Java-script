let inner_text=document.getElementById("inner_text");
let background_color=document.getElementById("background_color");
let color =document.getElementById("color");
let border_radius=document.getElementById("border_radius");
let paddings=document.getElementById("paddings");
let res_btn=document.getElementById("res_btn")


function generate(){
    res_btn.innerHTML = "";
    let cr= document.createElement("button");
    cr.innerText = inner_text.value;
    cr.style.backgroundColor =background_color.value;
    cr.style.color =color.value;
    cr.style.border = "none";
    cr.style.borderRadius =border_radius.value+"px";
    cr.style.padding =paddings.value+"px";
    res_btn.appendChild(cr);
}
