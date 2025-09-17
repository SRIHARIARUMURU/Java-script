let inp=document.getElementById("inp")

let Word=document.getElementById("Word") 
let char=document.getElementById("char")
let responce_button=document.getElementById("responce_button")

responce_button.onclick=function(){
    
    let res=inp.value
    let w_op=res.split(" ")
    let c_op=res.split("")
    Word.textContent="No.Of Words: "+w_op.length
    char.textContent="No.Of Charcters: "+c_op.length
}